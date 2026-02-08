
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { Ashwin, Mohit } from './App.jsx' // named export import karne ke liye hum curly braces ka use karte hai


createRoot(document.getElementById('root')).render(
  <>
    <App/>
    {/* //default export */}



    <Ashwin/>
   <Mohit/>

    {/* //named export */}

  
</>

)
