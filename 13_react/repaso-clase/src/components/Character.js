import React from 'react';
import Card from './Card';

function Character (props){
    console.log(props)

    return (
      <React.Fragment>
        {props.children[0]}
        <Card data={props.characterInfo} />
        {props.children[1]}
      </React.Fragment>
    );
}


export default Character