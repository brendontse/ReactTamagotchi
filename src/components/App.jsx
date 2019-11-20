import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Tamagotchi from './Tamagotchi';

class App extends React.Component {

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <Tamagotchi />} />
          <Route component={Error404} />  
        </Switch>
      </div>
    );
  }

}

export default App;
