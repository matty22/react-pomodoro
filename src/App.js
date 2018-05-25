import React, { Component } from 'react';
import './App.css';
import TimerDisplay from './TimerDisplay/TimerDisplay';
import ControlButtons from './ControlButtons/ControlButtons';
import IntervalControls from './IntervalControls/IntervalControls';
import Chime from './assets/Chime.mp3';

class App extends Component {

  constructor() {
    super();
    this.state = {
      workTime: 1500,
      breakTime: 300,
      originalWorkTime: 1500,
      originalBreakTime: 300,
      isWorkTime: true,
    }
    let pomodoroInterval;
  }

  startButtonClickHandler = () => {
    let currentTimer;
    const audio = new Audio(Chime);
    this.setState({ workTimerIsRunning: true })
    this.pomodoroInterval = setInterval(() => {
      if (this.state.isWorkTime && this.state.workTime > 0) {
        currentTimer = this.state.workTime;
        currentTimer -= 1;
        this.setState({ workTime: currentTimer });
      } else if (this.state.workTime === 0 && this.state.isWorkTime) {
        audio.play();
        this.setState({ isWorkTime: false });
      } else if (this.state.workTime === 0 && this.state.breakTime > 0) {
        currentTimer = this.state.breakTime;
        currentTimer -= 1;
        this.setState({ breakTime: currentTimer });
      } else if (this.state.breakTime === 0) {
        audio.play();
        clearInterval(this.pomodoroInterval);
      }
    }, 1000);
  } 

  pauseButtonClickHandler = () => {
    clearInterval(this.pomodoroInterval);
  }

  resetButtonClickHandler = () => {
    let originalWork = this.state.originalWorkTime;
    let originalBreak = this.state.originalBreakTime;
    this.setState({ workTime: originalWork, breakTime: originalBreak });
  }

  // These add/remove time handlers are repetitive
  addWorkTimeClickHandler = () => {
    let originalWorkTime = this.state.originalWorkTime;
    originalWorkTime += 60;
    let workTime = this.state.workTime;
    workTime += 60;
    this.setState({ originalWorkTime: originalWorkTime, workTime: workTime });
  }

  subtractWorkTimeClickHandler = () => {
    let originalWorkTime = this.state.originalWorkTime;
    originalWorkTime -= 60;
    this.setState({ originalWorkTime: originalWorkTime, workTime: originalWorkTime });
  }

  addBreakTimeClickHandler = () => {
    let originalBreakTime = this.state.originalBreakTime;
    originalBreakTime += 60;
    this.setState({ originalBreakTime: originalBreakTime, breakTime: originalBreakTime });
  }

  subtractBreakTimeClickHandler = () => {
    let originalBreakTime = this.state.originalBreakTime;
    originalBreakTime -= 60;
    this.setState({ originalBreakTime: originalBreakTime, breakTime: originalBreakTime });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>React Pomodoro</h1>
        </header>
        <main>
          <section>
            <IntervalControls originalWork={ this.state.originalWorkTime } 
                              originalBreak={ this.state.originalBreakTime }
                              addWork={ this.addWorkTimeClickHandler }
                              subtractWork={ this.subtractWorkTimeClickHandler }
                              addBreak={ this.addBreakTimeClickHandler }
                              subtractBreak={ this.subtractBreakTimeClickHandler } />
            <TimerDisplay value={ this.state.isWorkTime ? this.state.workTime : this.state.breakTime } />
          </section>
          <ControlButtons start={ this.startButtonClickHandler } 
                          pause={ this.pauseButtonClickHandler }
                          reset={ this.resetButtonClickHandler } />
        </main>
      </div>
    );
  }
}

export default App;
