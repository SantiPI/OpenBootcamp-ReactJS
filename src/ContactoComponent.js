import PropTypes from 'prop-types';
import Contacto from './Contacto';
import ComponenteB from './ComponenteB';

function ContactoComponent({ contacto }) {
  return (
    <div>
      <h3>{contacto.nombre} {contacto.apellido}</h3>
      <p>{contacto.email}</p>
      <ComponenteB conectado={contacto.conectado} />
    </div>
  );
}

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
};

export default ContactoComponent;
