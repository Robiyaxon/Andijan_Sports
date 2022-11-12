import Sidebar, { Sidebar2 } from './components/sidebar/Sidebar'
import { useWindowSize } from './utils/useWindowSize'

import './App.css'
import 'antd/dist/antd.css'

function App() {
  const { width } = useWindowSize()

  return <div>{width >= 600 ? <Sidebar /> : <Sidebar2 />}</div>
}

export default App
