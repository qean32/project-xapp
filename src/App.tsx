import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './router'
// import './style/core/core.css';
import './style/core.scss';
import { HookFormProvider } from './component/general';
import { Overlay } from './pages';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  // HashRouter
} from 'react-router-dom';
import { store } from './store';


ReactDOM.createRoot(document.getElementById('root')!).render(
  // @ts-ignore
  !window.electron?.overlay ?

    <React.StrictMode >
      <HookFormProvider>

        <Router />
      </HookFormProvider>
    </React.StrictMode>
    :

    <React.StrictMode >
      <BrowserRouter>
        {/* <HashRouter> */}
        <Provider store={store} >

          <Overlay />
        </Provider>
        {/* </HashRouter> */}
      </BrowserRouter>
    </React.StrictMode >
)
