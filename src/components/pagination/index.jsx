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
            ↩
          </button>
          <h3>{page + 1}</h3>
          <button className="next" disabled={page >= 3} onClick={nextBtn}>
            ↪
          </button>
        </div>
      </center>
    </div>
  );
};

export default Pagination;
