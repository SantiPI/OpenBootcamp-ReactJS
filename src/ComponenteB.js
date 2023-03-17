import PropTypes from 'prop-types';
import { useState } from 'react';

function ComponenteB({ conectado }) {
  const [isConectado, setConectado] = useState(conectado);

  const handleClick = () => {
    // Actualizamos el estado del componente
    setConectado(!isConectado);
  };

  return (
    <div>
      <p>
        Estado: {isConectado ? 'Contacto En Línea' : 'Contacto No Disponible'}
      </p>
      <button onClick={handleClick}>
        Cambiar Estado
      </button>
    </div>
  );
}

ComponenteB.propTypes = {
  conectado: PropTypes.bool.isRequired,
};

export default ComponenteB;


