import { useState, useEffect } from "react";
import './Profile.css';
import '../../vendor/normalize.css';
import useFormValidity from "../../utils/useForms";

const Profile = ({ onEditProfile, onSignOut, currentUser }) => {

    const { values, setValues, errors, handleChange, isValid } = useFormValidity();
    const [isClickedOnEditBtn, setIsClickedOnEditBtn] = useState(false);
    const [isChanged, setIsChanged] = useState(true);

    useEffect(() => {
        const wasInputChanged = values.name === currentUser.name && values.email === currentUser.email;
        setIsChanged(wasInputChanged);
    }, [values, currentUser])

    function handleClickedOnEditBtn(evt) {
        evt.preventDefault();
        setIsClickedOnEditBtn(true);
    };

    useEffect(() => {
        if (currentUser) {
            setValues({
                name: currentUser.name,
                email: currentUser.email,
            })
        }
    }, [currentUser, setValues]);

    function formSubmit(evt) {
        evt.preventDefault();
        onEditProfile(values);
        setIsClickedOnEditBtn(false);
    };

    function handleSignOut(evt) {
        evt.preventDefault();
        onSignOut();
    };

    return (
        <section className='profile__container'>
            <main className="profile__main">
                <h3 className="profile__title">Привет, {currentUser.name}!</h3>
                <form className="profile__form" onSubmit={formSubmit}>
                    <label className="profile__username-wrapper">
                        <p className="profile__username">Имя</p>
                        <input
                            className="profile__name-of-user"
                            onChange={handleChange}
                            value={values.name || ''}
                            disabled={!isClickedOnEditBtn}
                            minLength='2'
                            maxLength='25'
                            name='name'
                            type='text'
                            pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
                            required
                        />
                        <span className={`${errors.name ? 'profile__error-message' : 'profile__error-message_unactive'}`}>
                            {errors.name}
                        </span>
                    </label>
                    <div className="profile__line" />
                    <label className="profile__email-wrapper">
                        <p className="profile__email">E-mail</p>
                        <input
                            className="profile__email-of-user"
                            onChange={handleChange}
                            value={values.email || ''}
                            type='email'
                            disabled={!isClickedOnEditBtn}
                            minLength='2'
                            maxLength='25'
                            name='email'
                            required
                        />
                        <span className={`${errors.name ? 'profile__error-message' : 'profile__error-message_unactive'}`}>
                            {errors.email}
                        </span>
                    </label>
                    {isClickedOnEditBtn
                        ? (<button
                            className={!isValid || isChanged ? 'profile__edit-profile-btn-not-active' : "profile__edit-profile-btn-active"}
                            disabled={!isValid || isChanged}
                            type='submit'>Сохранить</button>)
                        : (<button className="profile__edit-profile-btn" type='button' onClick={handleClickedOnEditBtn}>Редактировать</button>)
                    }
                </form>
            </main>
            <button className="profile__logout-btn" type='button' onClick={handleSignOut}>
                Выйти из аккаунта
            </button>
        </section >
    )
};

export default Profile;