import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router'
// import './style/core/core.css';
import './style/core.scss';
import { HookFormProvider } from './component/general';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HookFormProvider>

      <Router />
    </HookFormProvider>
  </React.StrictMode>,
)
