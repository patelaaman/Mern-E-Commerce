//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import AppState from './Context/AppState.jsx'
import './App.css'
createRoot(document.getElementById('root')).render(
 <AppState>
   <App />
 </AppState>
   
 
)