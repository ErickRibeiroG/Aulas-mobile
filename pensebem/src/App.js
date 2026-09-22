import './App.css';
import Titulo from './components/Titulo'
import Telas from './components/Telas'
import Botoes from './components/Botoes'
import Start from './components/Start'

function App() {
  return (
    <div className="App">
      <div id='quadro'> 
        <Titulo />
        <Telas />
        <Botoes />
        <Start />
      </div>
    </div>
  );
}

export default App;
