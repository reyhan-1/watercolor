import React, { Component } from "react";

import FluidAnimation from "../react-fluid-animation";
import random from "random";

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
};

export default class background extends Component {
  state = {
    config: {
      ...defaultConfig
    }
  };

  componentDidMount() {
    this._reset();
  }

  render() {
    const { config } = this.state;

    return (
      <div
        style={{
          height: "100vh"
        }}
      >
        <FluidAnimation config={config} animationRef={this._animationRef} />
        <div
          style={{
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: "1em",
            display: "flex",
            flexDirection: "column",

            pointerEvents: "none"
          }}
        >
          hey this is animation
          </div>
        <div >
         
        </div>

      </div>
    );
  }

  _animationRef = ref => {
    this._animation = ref;
    this._reset();
  };

  _onUpdate = config => {
    this.setState({ config });
  };

  _onClickRandomSplats = () => {
    this._animation.addSplats((5 + Math.random() * 20) | 0);
  };

  _onReset = () => {
    this.setState({ config: { ...defaultConfig } });
  };

  _reset() {
    if (this._animation) {
      this._animation.addRandomSplats(random.int(100, 180));
    }
  }
}
