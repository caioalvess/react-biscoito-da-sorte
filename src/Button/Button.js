import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>{this.props.nome}</button>
      </div>
    );
  }
}

export default Button;
