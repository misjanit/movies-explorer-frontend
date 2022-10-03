import React from "react";
import './SearchForm.css';
import '../../vendor/normalize.css';
import useFormValidity from "../../utils/useForms";

const SearchForm = ({ 
    handleSearch, 
    defaultValue 
}) => {

    const { errors, values, handleChange, isValid } = useFormValidity();

    function handleSubmit(evt) {
        evt.preventDefault();
        if (isValid) {
            handleSearch(values.input);
        }
    };

    return (
        <>
            <section className="searchform">
                <div className="searchform__search-container">
                    <div className="searchform__loupe-container">
                        <img src={require("../../images/loupe.svg").default}
                            className="searchform__loupe"
                            alt="Значок поиска" />
                    </div>
                    <form className="searchform__form" id='search-form' onSubmit={handleSubmit} noValidate>
                        <input
                            className="searchform__input"
                            type='text'
                            id='input'
                            name='input'
                            placeholder='Фильм'
                            defaultValue={defaultValue}
                            onChange={handleChange}
                            minLength='1'
                            required
                            pattern="^[A-Za-zА-Яа-яЁё0-9-\s]+$"
                        />
                        <button className="searchform__loupe-btn" type='submit'>
                            <img src={require("../../images/loupe-white.svg").default}
                                className="searchform__loupe-btn-img"
                                alt="Значок поиска" />
                        </button>
                    </form>
                </div>
                <span className={`${isValid ? 'searchform__error-message_unactive' : 'searchform__error-message'}`}>
                    {errors.input}
                </span>
            </section>
        </>
    )
};

export default SearchForm;
