const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export async function fetchProperties() {
  const res = await fetch(`${API_BASE}/properties`);
  if (!res.ok) throw new Error('Failed to fetch properties');
  return res.json();
}

export async function addProperty(payload) {
  const res = await fetch(`${API_BASE}/properties`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Failed to add property');
  return res.json();
}
