import './App.css';

// Componentes
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

// views 
import Sobremi from './Views/Sobremi/Sobremi';
import Lotes from './Views/Lotes/Lotes';
import Contactos from './Views/Contactos/Contactos';
import Ubicacion from './Views/Ubicacion/Ubicacion';

function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <Sobremi/>
      <Lotes/>
      <Contactos/>
      <Ubicacion/>
      <Footer/>
    </div>
  );
}

export default App;