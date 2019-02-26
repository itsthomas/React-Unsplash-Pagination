import React, { Component } from "react";

class Pagination extends Component {
  pages() {
    var pages = [];
    for (var i = this.rangeStart(); i <= this.rangeEnd(); i++) {
      pages.push(i);
    }
    return pages;
  }

  rangeStart() {
    var start = this.props.current - this.props.pageRange;
    return start > 0 ? start : 1;
  }

  rangeEnd() {
    var end = this.props.current + this.props.pageRange;
    var totalPages = this.totalPages();
    return end < totalPages ? end : totalPages;
  }

  totalPages() {
    return Math.ceil(this.props.total / this.props.perPage);
  }

  nextPage() {
    return this.props.current + 1;
  }

  prevPage() {
    return this.props.current - 1;
  }

  hasFirst() {
    return this.rangeStart() !== 1;
  }

  hasLast() {
    return this.rangeEnd() < this.totalPages();
  }

  hasPrev() {
    return this.props.current > 1;
  }

  hasNext() {
    return this.props.current < this.totalPages();
  }

  changePage(page) {
    this.props.onPageChanged(page);
    console.log("Page inside Pagination", page);
  }

  render() {
    return (
      <div className="pagination">
        <div className="pagination__left">
          <span
            role="button"
            className={!this.hasPrev() ? "hidden" : ""}
            onClick={e => this.changePage(this.prevPage())}
          >
            Prev
          </span>
        </div>

        <div className="pagination__mid">
          <ul>
            <li className={!this.hasFirst() ? "hidden" : ""}>
              <span role="button" onClick={e => this.changePage(1)}>
                1
              </span>
            </li>
            <li className={!this.hasFirst() ? "hidden" : ""}>...</li>
            {this.pages().map((page, index) => {
              return (
                <li key={index}>
                  <span
                    role="button"
                    onClick={e => this.changePage(page)}
                    className={this.props.current === page ? "current" : ""}
                  >
                    {page}
                  </span>
                </li>
              );
            })}
            <li className={!this.hasLast() ? "hidden" : ""}>...</li>
            <li className={!this.hasLast() ? "hidden" : ""}>
              <span
                role="button"
                onClick={e => this.changePage(this.totalPages())}
              >
                {this.totalPages()}
              </span>
            </li>
          </ul>
        </div>

        <div className="pagination__right">
          <span
            className={!this.hasNext() ? "hidden" : ""}
            onClick={e => this.changePage(this.nextPage())}
          >
            Next
          </span>
        </div>
      </div>
    );
  }
}

Pagination.defaultProps = {
  pageRange: 2
};

export default Pagination;
