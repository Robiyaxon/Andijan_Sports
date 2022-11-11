import Sidebar, { Sidebar2 } from './components/sidebar/Sidebar'
import { useWindowSize } from './utils/useWindowSize'

import './App.css'
import 'antd/dist/antd.css'

// function useWindowSize() {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });
//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     // Add event listener
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return windowSize;
// }

function App() {
  const { width } = useWindowSize()

  return (
    <div>
      {width >= 600 ? <Sidebar /> : <Sidebar2 />}
    </div>
  )
}

export default App
