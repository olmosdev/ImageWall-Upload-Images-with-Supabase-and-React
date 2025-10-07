import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { createClient } from "@supabase/supabase-js"

// https://medium.com/@diego.coder/variables-de-entorno-con-vite-y-react-js-81c5ec951a46
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL, // Project URL 
  import.meta.env.VITE_SUPABASE_ANON_KEY // API Key Anon Public
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </StrictMode>,
)
