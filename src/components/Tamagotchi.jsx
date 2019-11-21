import React from 'react';
import panda from '../../src/Images/hamsterSheet.png';
import overlay from '../../src/Images/overlay.png';



class Tamagotchi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feedCount: 100,
      sleepCount: 100,
      playCount: 100,
      aliveStatus: ''
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
    var newAliveStatus;
    if (this.state.feedCount <= 0 || this.state.sleepCount <= 0 || this.state.playCount <= 0) {
      newAliveStatus = 'DEAD';
      this.setState({ aliveStatus: newAliveStatus });
    } else {
      newAliveStatus = 'ALIVE';
      this.setState({ aliveStatus: newAliveStatus });
    }
    return this.state.aliveStatus;
  }

  showSprite() {
    var sprite;

    if (this.state.feedCount <= 0 || this.state.sleepCount <= 0 || this.state.playCount <= 0) {         //dead branch
      sprite = {
        width: '170px',
        height: '170px',
        zIndex: '-1000',
        background: `url(${panda}) -50px -100px`,
        position: 'relative'
      };

      return <div style={sprite}></div>;

    } else if (this.state.feedCount > 50 && this.state.sleepCount > 50 && this.state.playCount > 50) {    //healthy branch
      sprite = {
        width: '170px',
        height: '170px',
        background: `url(${panda}) -985px -93px`
      };

      return <div style={sprite}></div>;

    } else if (this.state.feedCount < 50) {    //hungry branch
      sprite = {
        width: '170px',
        height: '170px',
        background: `url(${panda}) -1185px -300px`
      };

      return <div style={sprite}></div>;

    } else if (this.state.sleepCount < 50) {    //sleepy branch
      sprite = {
        width: '170px',
        height: '170px',
        background: `url(${panda}) -38px -310px`
      };

      return <div style={sprite}></div>;

    } else if (this.state.playCount < 50) {    //bored branch
      sprite = {
        width: '170px',
        height: '170px',
        background: `url(${panda}) -780px -295px`
      };

      return <div style={sprite}></div>;
    }

  }

  feedDecay() {
    this.setState({ feedCount: this.state.feedCount - 5 });
  }

  sleepDecay() {
    this.setState({ sleepCount: this.state.sleepCount - 5 });
  }

  playDecay() {
    this.setState({ playCount: this.state.playCount - 1 });
  }

  componentDidMount() {
    this.checkAliveStatusTimer = setInterval(() =>
      this.handleAliveStatus(),
      1000
    );

    this.checkFeedTimer = setInterval(() =>
      this.feedDecay(),
      10000
    );

    this.checkSleepTimer = setInterval(() =>
      this.sleepDecay(),
      1000
    );

    this.checkPlayTimer = setInterval(() =>
      this.playDecay(),
      100
    );
  }



  render() {
    const overlayStyles = {
      background: `url(${overlay})`,
      height: 1000,
      width: 1000,
      backgroundRepeat: 'no-repeat',
      zIndex: 100,
      position: 'absolute'
    }
    return (
      <div>
        <div style={overlayStyles}>
          <div>
            <h4>Food: {this.state.feedCount}</h4>
            <h4> Sleep: {this.state.sleepCount}</h4>
            <h4>Play: {this.state.playCount}</h4>
            <h4>{this.state.aliveStatus}</h4>
          </div>
          <div >
            {this.showSprite()}
          </div>
          <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.handleFeed}>Feed</button>
          <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.handleSleep}>Sleep</button>
          <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.handlePlay}>Play</button>
        </div>
      </div>
    );
  }
}

export default Tamagotchi;