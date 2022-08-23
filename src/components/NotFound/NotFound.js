import { Link, useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();

    function handleClick() {
        history.goBack();
    }

    return (
        <section>
            <div>
                <p>404</p>
                <h1>Страница не найдена</h1>
                <Link onClick={handleClick} to={history}>
                    Назад
                </Link>
            </div>
        </section>
    )
}

export default NotFound;