
import React from 'react';

const Button = ({changePhrase}) => {
    return (
        <div>
            <button className='button__quotes' onClick={changePhrase}>Siguiente</button>
        </div>
    );
};

export default Button;