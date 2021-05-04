import React, { Component } from "react";

import DatGui, { DatNumber, DatSelect, DatButton } from "react-dat-gui";

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

        <div >
          <h1
            style={{
              fontSize: "3em",
            }}
          >
            HELLO 
          </h1>
        </div>

        <DatGui data={config} onUpdate={this._onUpdate}>
          <DatSelect
            path="textureDownsample"
            label="Texture Downsample"
            options={[0, 1, 2]}
          />

          <DatNumber
            path="densityDissipation"
            label="Density Diffusion"
            min={0.9}
            max={1.0}
          />

          <DatNumber
            path="velocityDissipation"
            label="Velocity Diffusion"
            min={0.9}
            max={1.0}
          />

          <DatNumber
            path="pressureDissipation"
            label="Pressure Diffusion"
            min={0.0}
            max={1.0}
          />

          <DatNumber
            path="pressureIterations"
            label="Pressure Iterations"
            min={1}
            max={60}
            step={1}
          />

          <DatNumber path="curl" label="Curl" min={0} max={50} step={1} />

          <DatNumber
            path="splatRadius"
            label="Splat Radius"
            min={0.001}
            max={0.002}
          />

          <DatButton
            label="Random Splats"
            onClick={this._onClickRandomSplats}
          />

        
        </DatGui>
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
