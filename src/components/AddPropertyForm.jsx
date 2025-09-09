import React, { useState } from 'react'

export default function AddPropertyForm({ onSubmit, loading }){
  const [form, setForm] = useState({ name:'', type:'Plot', price:'', location:'', description:'', image:'' })

  function update(k, v){ setForm(s => ({...s, [k]: v})) }

  function submit(e){
    e.preventDefault()
    if(!form.name || !form.price) return alert('Name and price are required')
    const payload = { ...form, price: Number(form.price) }
    onSubmit(payload)
    setForm({ name:'', type:'Plot', price:'', location:'', description:'', image:'' })
  }

  return (
    <form className="form" onSubmit={submit}>
      <h3 style={{marginTop:0}}>Add Property</h3>
      <input placeholder="Property name" value={form.name} onChange={e=>update('name', e.target.value)} />
      <select value={form.type} onChange={e=>update('type', e.target.value)}>
        <option>Plot</option>
        <option>Residential</option>
        <option>Commercial</option>
        <option>Industrial</option>
      </select>
      <input placeholder="Price" value={form.price} onChange={e=>update('price', e.target.value)} />
      <input placeholder="Location" value={form.location} onChange={e=>update('location', e.target.value)} />
      <input placeholder="Image URL (optional)" value={form.image} onChange={e=>update('image', e.target.value)} />
      <textarea placeholder="Short description" rows={4} value={form.description} onChange={e=>update('description', e.target.value)} />
      <button className="btn" style={{width:'100%'}} disabled={loading}>{loading ? 'Adding...' : 'Submit'}</button>
    </form>
  )
}
