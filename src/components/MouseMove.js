import React, { Component } from 'react';
import './MouseMove.scss';

export default class MouseMove extends Component {
  state = {
    xMain: 0,
    yMain: 0,
    xTrailing: 0,
    yTrailing: 0
  };

  handleMouseMove = e => {
    // Using pageX and pageY will cause glitching when you scroll the window down
    // because it measures the distance from the top left rendered corner, not
    // top left visible corner
    const { clientX, clientY } = e;

    // we set the main circle coordinates as soon as the mouse is moved
    this.setState(
      {
        xMain: clientX,
        yMain: clientY
      },
      () => {
        // this callback is invoked after the first setState finishes
        //
        // here we schedule saving the trailing coordinates in state 100ms
        // after the main coordinates have been set to simulate the trailing
        setTimeout(() => {
          this.setState({
            xTrailing: clientX,
            yTrailing: clientY
          });
        }, 100);
      }
    );
  };
  render() {
    const { xMain, yMain, xTrailing, yTrailing } = this.state;
    return (
      <div className='container' onMouseMove={e => this.handleMouseMove(e)}>
        <div className='cursors'>
          <div className='cursor' style={{ left: xMain, top: yMain }} />
          <div className='cursor' style={{ left: xTrailing, top: yTrailing }} />
          {this.props.children}
        </div>
      </div>
    );
  }
}
