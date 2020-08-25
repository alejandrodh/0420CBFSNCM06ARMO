import React, { Component } from 'react';

class ButtonStateFull extends Component {
  cambiarColor() {
    document.querySelector("body").style.background = "#dcdcdc";
  }
  volverABlanco() {
    document.querySelector("body").style.background = "#fff";
  }

  render() {
      console.log("Estoy en render botón color");
    return (
      <button
        className="btn btn-info mb-3"
        onClick={() => this.cambiarColor()}
        onDoubleClick={() => this.volverABlanco()}
      >
        Cambiar color de fondo
      </button>
    );
  }
}


export default ButtonStateFull;