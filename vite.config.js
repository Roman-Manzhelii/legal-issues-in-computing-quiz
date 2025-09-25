import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'legal-issues-in-computing-quiz', 
  plugins: [react()],
})
