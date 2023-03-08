import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice'



const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = evt => { 
    dispatch(changeFilter(evt.target.value))    
  }


  return (
    <div>
      <h3 className={css.head_filter}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        className={css.input_filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={handleChange}
      />
    </div>
  );
};



export default Filter;
