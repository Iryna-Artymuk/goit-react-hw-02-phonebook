import PropTypes from 'prop-types';
import { StyledFilterWrapper } from './StyledFilter';
export default function Filter({
  filterValue,
  handelFilterChange,
}) {
  return (
    <StyledFilterWrapper>
      <label>
        Filter
        <input
          type="text"
          value={filterValue}
          onChange={handelFilterChange}
        />
      </label>
    </StyledFilterWrapper>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
  handelFilterChange: PropTypes.func.isRequired,
};
