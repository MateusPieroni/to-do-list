import {Header} from './components/Header'
import { Content } from './components/Content'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
    
      <Header/>

      <Content/>
      
    </div>
  </React.StrictMode>,
)
