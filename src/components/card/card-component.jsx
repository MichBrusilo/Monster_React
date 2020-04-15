import React from 'react';
import './card.styles.css';

export const Card = (props) => {
 return <div className='card-container'>
     <img alt="monster" src={`https://robohash.org/${props.e.id}?set=set2&size=180x180`}/>
     <h2> { props.e.name } </h2>
     <p> { props.e.email }</p>
     {/* <p> { props.e.website } </p> */}
 </div>
}
