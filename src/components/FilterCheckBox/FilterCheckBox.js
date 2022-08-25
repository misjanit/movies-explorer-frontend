import React, { useState } from "react";
import './FilterCheckBox.css';
import '../../vendor/normalize.css';

const FilterCheckBox = (props) => {
    const [clicked, setClicked] = useState(true);

    function handlerClass() {
        if (!clicked) setClicked(true);
        else setClicked(false);
    }

    return (
        <section className="filter__shortfilms-container">
            <button
                className={clicked ? 'filter__switch-btn' : 'filter__switch-btn filter__switch-on'}
                onClick={handlerClass} 
                type='button'
                />
            <p className="filter__shortfilms-title">Короткометражки</p>
        </section> 
    )
}

export default FilterCheckBox;
