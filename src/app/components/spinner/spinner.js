import React from 'react';
import './spinner.scss'

const Spinner = () => {
    return (
        <div className='spinner-wrapper'>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner