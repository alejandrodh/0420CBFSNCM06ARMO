import React from 'react';

function Card (props){
    // console.log(props);

    
    return (
        <div className="card">
            <img className="card-img-top" src={'/images/' + props.characterInfo.img } alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title"> {props.characterInfo.name} </h5>
                <p className="card-text">{props.characterInfo.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card;