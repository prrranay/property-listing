import React from 'react'

export default function ViewModal({ property, onClose }){
  if(!property) return null
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h3 style={{margin:0}}>{property.name}</h3>
          <button onClick={onClose} style={{border:'none', background:'transparent', fontSize:20}}>×</button>
        </div>
        <img src={property.image || `https://picsum.photos/seed/${property.id || 'x'}/800/400`} alt="property" />
        <p style={{marginTop:8}}>{property.description}</p>
        <div style={{display:'flex', justifyContent:'space-between', marginTop:8}}>
          <div><strong>Location:</strong> {property.location}</div>
          <div><strong>Price:</strong> ${property.price?.toLocaleString()}</div>
        </div>
      </div>
    </div>
  )
}
