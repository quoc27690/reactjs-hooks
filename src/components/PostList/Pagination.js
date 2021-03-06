import React from "react";

export default function Pagination(props) {
  const { pagination, onPagination } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  const onClick = (newPage) => {
    onPagination(newPage);
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              disabled={_page <= 1}
              onClick={() => onClick(_page - 1)}
            >
              Previous
            </button>
          </li>
          {/* <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li> */}
          <li className="page-item">
            <button
              className="page-link"
              disabled={_page >= totalPages}
              onClick={() => onClick(_page + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
