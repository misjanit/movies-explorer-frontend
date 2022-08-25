import React, { useState } from "react";
import './SearchForm.css';
import '../../vendor/normalize.css';

const SearchForm = () => {


    return (
        <section className="searchform__container">
            <div className="searchform__search-container">
                <div className="searchform__loupe-container">
                    <img src={require("../../images/loupe.svg").default}
                        className="searchform__loupe"
                        alt="Значок поиска" />
                </div>
                <form
                    className="searchform__form"
                    required>
                    <input
                        className="searchform__input"
                        placeholder="Фильм" />
                    <button className="searchform__loupe-btn" type='submit'>
                        <img src={require("../../images/loupe-white.svg").default}
                            className="searchform__loupe-btn-img"
                            alt="Значок поиска" />
                    </button>
                </form>
            </div>
            
        </section>
    )
}

export default SearchForm;
