import Contacto from './Contacto';
import ContactoComponent from './ContactoComponent';

function App() {
  const contacto = new Contacto('Santiago', 'Pérez', 'santipereziglesias10@gmail.com', true);

  return (
    <div className="App">
      <ContactoComponent contacto={contacto} />
    </div>
  );
}

export default App;
