import PropTypes from 'prop-types';

const Pagination = ({ handleNextClick, handlePreviousClick }) => (
  <div className="my-5 d-flex justify-content-center ">
    <button
      type="button"
      onClick={handlePreviousClick}
      className="btn btn-dark mx-5 px-4 w-25"
    >
      Previous
    </button>
    <button
      type="button"
      onClick={handleNextClick}
      className="btn btn-dark mx-5 px-4 w-25"
    >
      Next
    </button>
  </div>
);

Pagination.propTypes = {
  handleNextClick: PropTypes.func.isRequired,
  handlePreviousClick: PropTypes.func.isRequired,
};

export default Pagination;
