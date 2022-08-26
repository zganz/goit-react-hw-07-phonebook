import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/store';
export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ marginLeft: '70px' }}>
      <input
        type="text"
        name="filter"
        onChange={evt => {
          dispatch(setFilter(evt.target.value));
        }}
      />
    </div>
  );
};
