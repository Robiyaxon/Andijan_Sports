import './App.css';
import Akademiya from './components/akademiya/Akademiya';
import Dokon from './components/dokon/Dokon';
import Homiy from './components/invester/Homiy';
import Media from './components/media/Media';
import NewsHeader from './components/news/NewsHeader';
function App() {
  return (
    <div>
      {/* <NewsHeader /> */}
      {/* <Media/> */}
      {/* <Akademiya/> */}
      <Dokon />
      <Homiy />
    </div>
  );
}

export default App;
