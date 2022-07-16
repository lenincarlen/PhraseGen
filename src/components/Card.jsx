import React from 'react';

const Card = ({title, item1, item2, item3, background}) => {

    const click = () => alert (title)
    return (
        
            <div className="card"  onClick = {click}  style={{ background: background }}>
        <h3>{title}</h3>
        <ul>
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>
      </div>
        
    );
};

export default Card;