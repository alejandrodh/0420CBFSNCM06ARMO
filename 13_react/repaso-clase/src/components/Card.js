import React from 'react';
import PropTypes from 'prop-types';

function Card (props){
    // console.log(props);
    
    return (
        <div className="card">
            <img className="card-img-top" src={'/images/' + props.data.img } alt="personaje" />
            <div className="card-body">
                <h5 className="card-title"> {props.data.name} </h5>
                <p className="card-text">{props.data.description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object.isRequired,    
};

Card.defaultProps = {
  data: {
    img: "no-img.jpg",
    name: "Hulk",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fuga obcaecati eius consectetur doloribus quasi, saepe culpa illo facere a quibusdam expedita dolor rerum dolores molestiae? Fugit ratione iste dolorem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat pariatur voluptates omnis eaque mollitia eligendi molestiae quasi blanditiis necessitatibus accusantium deserunt adipisci, maiores tempore, facilis dicta non ipsam explicabo illo?",
  },
};



export default Card;