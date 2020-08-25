
import React, { Component } from 'react';

class RickMorty extends Component {
  constructor() {
    super();
    this.state = {
      personajes : [],
      nextPage: '',
    };
  }


  //Montaje
  componentDidMount(){
    console.log('Montado Rick&Morty');
    let url = 'https://rickandmortyapi.com/api/character/';

    fetch(url)
      .then(function(response){
        return response.json();
      })
      .then( data => {
        //Precesamos los datos
        console.log(data);
        this.setState({
          personajes: data.results,
          nextPage: data.info.next,
        })
      })
      .catch(function (error){
        console.log(error);
      })

  }

  //Modificación
  componentDidUpdate(){
    console.log("actualizado Rick&Morty"); 
  }

  //Desmontaje

  componentWillUnmount() {
    console.log("desmontado Rick&Morty"); 
  }

  masPersonajes(){
    let url = this.state.nextPage;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        //Precesamos los datos
        console.log(data);
        this.setState( prevState =>({
          personajes: [...data.results, ...prevState.personajes],
          nextPage: data.info.next,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log("Estoy en render de Rick&Morty");
    const { personajes } = this.state;
    return (
      <React.Fragment>
        <div className="col-12">
          <h2 className="alert alert-info">Personajes de Rick & Morty</h2>
        </div>
        <div className="col-12 text-right">
          <button className="btn btn-outline-success" 
          onClick={ ()=> this.masPersonajes() }>
            Más personajes
          </button>
        </div>

        {personajes.map(function (personaje, idx) {
          return (
            <div className="col-4 my-4" key={idx}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={personaje.image}
                  alt="personaje"
                />
                <div className="card-body">
                  <h5 className="card-title"> {personaje.name} </h5>
                  <p className="card-text">
                    <strong>Gender: </strong> {personaje.gender} <br />
                    <strong>Type: </strong>{" "}
                    {personaje.type || "No type defined."}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}


export default RickMorty;