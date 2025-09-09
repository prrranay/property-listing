import React from 'react'

export default function PropertyCard({ property, onView }){
  return (
    <div className="card">
      <h3>{property.name}</h3>
      <div style={{fontSize:12, color:'#6b7280'}}>{property.type} • {property.location}</div>
      <p>{property.description?.slice(0, 90)}{property.description?.length > 90 ? '...' : ''}</p>
      <div style={{display:'flex', justifyContent:'space-between', marginTop:8}}>
        <div style={{fontWeight:600}}>${property.price?.toLocaleString()}</div>
        <button className="btn" onClick={() => onView(property)}>View</button>
      </div>
    </div>
  )
}
