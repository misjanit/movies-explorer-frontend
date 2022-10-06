import { Link, useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();

    function handleClick() {
        history.goBack();
    }

    return (
        <section className='notfound'>
            <div className='notfound__container'>
                <p className='notfound__error-number'>404</p>
                <h1 className='notfound__error-text'>Страница не найдена</h1>
                <Link onClick={handleClick} to={history} className='notfound__redirect-link'>
                    <p  className='notfound__back-page'>Назад</p>
                </Link>
            </div>
        </section>
    )
}

export default NotFound;