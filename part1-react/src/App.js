
import './App.css';
import Mensaje from './Mensaje.js'

const Description  = () => {
  return <p> Esta es la app del curso fullstack bootcamp</p>
}

function App() {

  return (
    <div className="App">
     <Mensaje color='red' message='Estamos trabajando'/>
     <Mensaje color='yellow' message='en un curso'/>
     <Mensaje color='green' message='de react'/>
     <Description/>
    </div>
  );
}

export default App;
