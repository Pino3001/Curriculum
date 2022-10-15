import './App.css';
import DatosPersonales from './Componentes/DatosPersonales.js';
import Fondo from './Imagenes/Fondo_curriculum.jpg'

function App() {
    return (
            <div style={{ backgroundImage: `url(${Fondo})`}} >
                <div className='Nombre'>
                    <h1>Alexis La Cruz</h1>
                </div>
                <div>
                    <DatosPersonales />
                </div>
            </div>
    );
}

export default App;
