import './FilterCheckBox.css';
import '../../vendor/normalize.css';

const FilterCheckBox = ({
    onCheckChange,
    defaultChecked,
    disabledCheck
}) => {

    function handleChange(evt) {
        onCheckChange(evt.target.checked)
    }

    return (
        <section className="filter__shortfilms-container">
            <label className='filter__checkbox'>
                <input
                    id='checkbox'
                    onChange={handleChange}
                    form='search-form'
                    type='checkbox'
                    defaultChecked={defaultChecked}
                    disabled={disabledCheck}
                />
                <span className='filter__checkbox-switch'></span>
            </label>
            <p className="filter__shortfilms-title">Короткометражки</p>
        </section>
    )
}

export default FilterCheckBox;
