import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cbc from './component/Cbc'
import Fbc from './component/Fbc'
import Demo from './component/Demo'
import Parent from './props/parent'
import State from './state/State'
import Inline from './styles/Inline'
import External from './styles/External'
import Ref from './useRef/Ref'
import Comp3 from './list-keys/Comp3'
import CompA from './useContext/CompA'
import UseEffect from './useEffect/UseEffect'

// import Comp1 from './styles/Comp1'
// import "../src/styles/gloabally.css"
// import Comp2 from './styles/Comp2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc />
    <Fbc/>
    <Demo/> */}
    {/* <Parent/> */}
    {/* <State/> */}
    {/* <Comp1/>
    <Comp2/> */}
    {/* <Inline/> */}
    {/* <Ref/> */}
    {/* <External/> */}
    {/* <Comp3/> */}
    {/* <CompA/> */}
    <UseEffect/>
  </StrictMode>,
)
