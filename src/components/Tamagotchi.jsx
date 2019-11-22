import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props){
  return(
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string
};

export default Tamagotchi;