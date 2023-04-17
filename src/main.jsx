import React from 'react'
import ReactDOM from 'react-dom/client'
import Tawhiri from './Tawhiri'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tawhiri style={{overflow:'hidden'}}/>
  </React.StrictMode>,
)
