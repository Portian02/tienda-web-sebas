import "./pag.css";

const Pagination = ({ page, setPage }) => {
  const backBtn = () => {
    setPage(page - 1);
  };

  const nextBtn = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <center>
        <div className="btns">
          <button className="back" disabled={page <= 0} onClick={backBtn}>
            Back
          </button>

          <h3>{page + 1}</h3>

          <button className="next" onClick={nextBtn}>
            Next
          </button>
        </div>
      </center>
    </div>
  );
};

export default Pagination;
