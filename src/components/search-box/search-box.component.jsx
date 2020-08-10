import React from 'react';
import './search-box.styles.css';

export const SearchBox =({placeholder,changeHandler})=>{
    return (
        <div className="search-box">
            <input type="search" placeholder={placeholder} onChange={changeHandler}></input>
        </div>
    );
};

