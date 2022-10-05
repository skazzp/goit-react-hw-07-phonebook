import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleInput = event => {
    dispatch(getFilter(event.target.value));
  };
  const filterState = useSelector(state => state.filter);
  return (
    <label htmlFor="filter">
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filterState}
        onChange={handleInput}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  filterState: PropTypes.string,
  setFilter: PropTypes.func,
};
