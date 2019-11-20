import React from 'react';

class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feedCount: 100,
      sleepCount: 100,
      playCount: 100,
      aliveStatus: true
    };
    this.handleFeed = this.handleFeed.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleAliveStatus = this.handleAliveStatus.bind(this);

  }

  handleFeed() {
    this.setState({ feedCount: this.state.feedCount + 25 });
  }

  handleSleep() {
    this.setState({ sleepCount: this.state.sleepCount + 25 });
  }

  handlePlay() {
    this.setState({ playCount: this.state.playCount + 25 });
  }

  handleAliveStatus() {
    console.log(this.state.aliveStatus);
    var newAliveStatus = false;
    if(this.state.feedCount <= 0 || this.state.sleepCount <= 0 || this.state.playCount <= 0){
      this.setState({aliveStatus: newAliveStatus });
    }
    return this.state.aliveStatus
  }

  feedDecay() {
    this.setState({ feedCount: this.state.feedCount - 20});
  }

  sleepDecay() {
    this.setState({ sleepCount: this.state.sleepCount - 20});
  }

  playDecay() {
    this.setState({ playCount: this.state.playCount - 20});
  }

  componentDidMount() {
    this.checkAliveStatusTimer = setInterval(() =>
      this.handleAliveStatus(),
    1000
    );

    this.checkFeedTimer = setInterval(() =>
      this.feedDecay(),
    3000
    );

    this.checkSleepTimer = setInterval(() =>
      this.sleepDecay(),
    10000
    );

    this.checkPlayTimer = setInterval(() =>
      this.playDecay(),
    5000
    );
  }



  render() {
    return (
      <div>
        <div>
          <h4>Food: {this.state.feedCount}</h4>
          <h4> Sleep: {this.state.sleepCount}</h4>
          <h4>Play: {this.state.playCount}</h4>
          <h4>Alive? {this.state.aliveStatus}</h4>
        </div>
        <button className="waves-effect waves-light btn" onClick={this.handleFeed}>Feed me!</button>
        <button className="waves-effect waves-light btn" onClick={this.handleSleep}>Let me sleep!</button>
        <button className="waves-effect waves-light btn" onClick={this.handlePlay}>Let's Play</button>
      </div>
    );
  }
}

export default Tamagotchi;