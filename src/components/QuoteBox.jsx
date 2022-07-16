


import React from 'react';

const QuoteBox = ({color, phrases, random }) => {
  return (
    <div>
      
      <h2 style={{color: color}}>{phrases[random].quote}</h2>
    <p style={{color: color}}>{phrases[random].author}</p>
    </div>
  );
};

export default QuoteBox;




      


