import React, { useEffect, useState } from 'react'
import { fetchProperties, addProperty } from './api'
import PropertyCard from './components/PropertyCard'
import AddPropertyForm from './components/AddPropertyForm'
import ViewModal from './components/ViewModal'

export default function App() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(false)
  const [adding, setAdding] = useState(false)
  const [filterType, setFilterType] = useState('All')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  async function load() {
    setLoading(true)
    try {
      const data = await fetchProperties()
      setProperties(data)
    } catch (e) {
      console.error(e)
      alert('Failed to fetch properties')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  async function handleAdd(payload) {
    setAdding(true)
    try {
      await addProperty(payload)
      await load()
      alert('Property added')
    } catch (e) {
      console.error(e)
      alert('Failed to add property')
    } finally {
      setAdding(false)
    }
  }

  const filtered = properties.filter(p => {
    if (filterType !== 'All' && p.type !== filterType) return false
    if (query) {
      const q = query.toLowerCase()
      return p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
    }
    return true
  })

  return (
    <div className="app">
      <div className="header">
        <h1>Mini Property Listing Dashboard</h1>
        <div className="controls">
          <input placeholder="Search by name or location" value={query} onChange={e => setQuery(e.target.value)} />
          <select value={filterType} onChange={e => setFilterType(e.target.value)}>
            <option value="All">Filter by Type</option>
            <option>Plot</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>
          <button className="btn" onClick={load} disabled={loading}>{loading ? 'Loading...' : 'Refresh'}</button>
        </div>
      </div>

      <div className="layout">
        <div className="left">
          <strong>Property Listings</strong>
          <div className="grid">
            {filtered.map(p => <PropertyCard key={p.id} property={p} onView={setSelected} />)}
            {filtered.length === 0 && <div className="card">No properties found.</div>}
          </div>
        </div>

        <aside className="right">
          <AddPropertyForm onSubmit={handleAdd} loading={adding} />
        </aside>
      </div>

      {selected && <ViewModal property={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
