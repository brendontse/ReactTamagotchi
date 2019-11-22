import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TamagotchiList(props) {
  
  return (
    <div>
      {props.tamagotchiList.map((tamagotchi) =>
        <div>
          <Tamagotchi name={tamagotchi.name}
            key={tamagotchi.id} />
           
          <Link to='/game'><button className='btn'>Play!</button></Link>
        </div>

      )}
    </div>
  );
}

TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array
};

export default TamagotchiList;