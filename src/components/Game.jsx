import React from 'react';
import panda from '../../src/Images/hamsterSheet.png';
import overlay from '../../src/Images/overlay.png';
import FadeIn from 'react-fade-in';
import Tamagotchi from './Tamagotchi';



class Game extends React.Component {

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
        width: '172px',
        height: '172px',
        zIndex: '-1000',
        position: 'relative',
        marginLeft: '54.9%',
        marginTop: '9.7%',
        background: `url(${panda}) -50px -100px`
      };

      return <div style={sprite}></div>;

    } else if (this.state.feedCount > 50 && this.state.sleepCount > 50 && this.state.playCount > 50) {    //healthy branch
      sprite = {
        width: '172px',
        height: '172px',
        zIndex: '-1000',
        position: 'relative',
        marginLeft: '54.9%',
        marginTop: '9.7%',
        background: `url(${panda}) -985px -93px`
      };

      return <div style={sprite}></div>;

    } else if (this.state.feedCount < 50) {    //hungry branch
      sprite = {
        width: '172px',
        height: '172px',
        zIndex: '-1000',
        position: 'relative',
        marginLeft: '54.9%',
        marginTop: '9.7%',
        background: `url(${panda}) -1185px -300px`
      };

      return <div style={sprite}></div>;

    } else if (this.state.sleepCount < 50) {    //sleepy branch
      sprite = {
        width: '172px',
        height: '172px',
        zIndex: '-1000',
        position: 'relative',
        marginLeft: '54.9%',
        marginTop: '9.7%',
        background: `url(${panda}) -38px -310px`
      };

      return <div style={sprite}></div>;

    } else if (this.state.playCount < 50) {    //bored branch
      sprite = {
        width: '172px',
        height: '172px',
        zIndex: '-1000',
        position: 'relative',
        marginLeft: '54.9%',
        marginTop: '9.7%',
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
    this.setState({ playCount: this.state.playCount - 5 });
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
    5000
    );

    this.checkPlayTimer = setInterval(() =>
      this.playDecay(),
    3000
    );
  }

  componentWillUnmount(){
    clearInterval(this.checkAliveStatusTimer);
    clearInterval(this.checkFeedTimer);
    clearInterval(this.checkSleepTimer);
    clearInterval(this.checkPlayTimer);
  }
  



  render() {
    const imgOverlay = {
      // height: 1000,
      // width: 1000,
      zIndex: 100,
      position: 'absolute',
      display: 'inline',
      marginLeft: '50%',
    };

    const feedButtonAlign = {
      // width: 1000,
      zIndex: 1001,
      position: 'absolute',
      display: 'inline',
      marginLeft: '54.8%',
      marginTop: '2%'
    };

    const playButtonAlign = {
      // height: '5vmax',
      // width: 1000,
      zIndex: 1001,
      position: 'absolute',
      display: 'inline',
      marginLeft: '61%',
      marginTop: '2%'
    };

    const sleepButtonAlign = {
      height: '70px',
      // width: 1000,
      zIndex: 1001,
      position: 'absolute',
      display: 'inline',
      marginLeft: '57.8%',
      marginTop: '2.8%'
    };

    const container = {
      width: '2000px',
      height: '2000px',
      position: 'fixed',
      overflow: 'auto',
    };
    const spriteContainer = {
      width: '172px',
      height: '172px',
      position: 'relative',
      marginLeft: '50.2%',
      marginTop: '9.7%',
    };

    const statusStyles = {
      paddingLeft: '40%'
    };

    return (
      <div >
        <FadeIn transitionDuration={1000}>
          <div style={container}>
            <div style={statusStyles}>
            <h2><Tamagotchi /></h2>
              <h4>Food: {this.state.feedCount}</h4>
              <h4> Sleep: {this.state.sleepCount}</h4>
              <h4>Play: {this.state.playCount}</h4>
              <h4>Status: {this.state.aliveStatus}</h4>
            </div>

            <img style={imgOverlay} src={overlay} />
            <div style={spriteContainer}>
              {this.showSprite()}
            </div>

            <button style={feedButtonAlign} className="btn-floating btn-large waves-effect waves-light red" onClick={this.handleFeed}>Feed</button>
            <button style={sleepButtonAlign} className="btn-floating btn-large waves-effect waves-light red" onClick={this.handleSleep}>Sleep</button>
            <button style={playButtonAlign} className="btn-floating btn-large waves-effect waves-light red" onClick={this.handlePlay}>Play</button>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default Game;