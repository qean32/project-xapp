import ReactDOM from 'react-dom/client'
import { Router } from './router'
// import './style/core/core.css';
import './style/core.scss';
import { HookFormProvider } from './component/general';
import { QueryClient, QueryClientProvider } from 'react-query'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={new QueryClient()}>
    <HookFormProvider>

      <Router />
    </HookFormProvider>
  </QueryClientProvider>
)
