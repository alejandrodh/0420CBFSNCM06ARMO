
import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      userName: "aleVivone",
      number: 1,
    };
  }

  incrementar() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  decrementar() {
    this.setState({
      number: this.state.number - 1,
    });
  }


  //Montaje
  componentDidMount(){
    console.log('Montado counter');
  }

  //Modificación
  componentDidUpdate(){
    console.log("actualizado counter"); 
  }

  //Desmontaje

  componentWillUnmount() {
    console.log("desmontado counter"); 
  }


  render() {
    // let { number } = this.state;
    console.log('Estoy en render de counter');
    return (
      <React.Fragment>
        <p className="alert alert-primary">{this.state.number}</p>
        <button className="btn btn-success mb-3 mr-3" onClick={() => this.incrementar()}>
          Aumentar
        </button>
        <button className="btn btn-danger mb-3" onClick={() => this.decrementar()}
        >
          Decrementar
        </button>        
      </React.Fragment>
    );
  }
}


export default Counter;