# Property Listing App (Vite)

## Setup
1. Create a new folder and paste files from this canvas.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run json-server mock API from project root:
   ```bash
   npx json-server --watch db.json --routes routes.json --port 4000
   ```
   This exposes GET/POST at http://localhost:4000/api/properties
4. Start dev server:
   ```bash
   npm run dev
   ```
5. Open the URL shown by Vite (usually http://localhost:5173)

Notes: If port conflicts occur, change API_BASE in `src/api.js`.
