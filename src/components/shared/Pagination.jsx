const Pagination = ({ setPage, page, limit, length }) => {
  const pages = Math.ceil(length / limit);
  return (
    <div className="flex flex-row gap-4 justify-center items-center mt-10">
      <button
        className="btn btn-outline btn-info"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 0}
      >
        Prev
      </button>
      {[...Array(pages).keys()].map((pagination) => (
        <button
          className={`btn btn-info ${
            pagination !== page ? "btn-outline btn " : ""
          }`}
          key={pagination}
          onClick={() => setPage(pagination)}
        >
          {pagination + 1}
        </button>
      ))}
      <button
        className="btn btn-outline btn-info"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === pages - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
