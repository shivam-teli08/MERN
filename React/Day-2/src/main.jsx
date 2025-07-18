import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//Default import
import Compo from './Compo'
// Named import
// import { Compo } from './Compo'
createRoot(document.getElementById('root')).render(
  // <App />,
  <Compo />
)
