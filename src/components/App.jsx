import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';
import NameForm from './NameForm';
import TamagotchiList from './TamagotchiList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchiList: []
    };
    this.handleAddingNewTamagotchiToList = this.handleAddingNewTamagotchiToList.bind(this);
  }

  handleAddingNewTamagotchiToList(newTamagotchi){
    var newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.push(newTamagotchi);
    this.setState({masterTamagotchiList: newMasterTamagotchiList});
  }


  render(){
    return (
      <div className='container'>
        <Header/>
        <Switch>
          <Route path='/game' render={() => <Game />} />
          <Route path='/list' render={() => <TamagotchiList tamagotchiList={this.state.masterTamagotchiList}/>} />
          <Route exact path='/' render={() => <NameForm onNewNameCreation={this.handleAddingNewTamagotchiToList}/>} />
          <Route component={Error404} />  
        </Switch>
      </div>
    );
  }
}

export default App;
