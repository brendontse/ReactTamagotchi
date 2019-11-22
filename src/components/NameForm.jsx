import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function NameForm(props) {
  let _name = null;

  function handleNameSubmission(event) {
    event.preventDefault();
    props.onNewNameCreation({ name: _name.value, id: v4() });
    _name.value = ';';

  }
  return (
    <div>
      <form onSubmit={handleNameSubmission}>
        <input
          id='name'
          ref={(input) => { _name = input; }}
          type="text"
          placeholder="Enter your Tamagotchi's name here" />
        <button type="submit" className='btn'>Save</button>
      </form>
      
      <Link to='/list'><button className='btn'>See your saved Tamagotchis here</button></Link>
    </div>
  );
}

NameForm.propTypes = {
  onNewNameCreation: PropTypes.func
};

export default NameForm;