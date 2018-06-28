import React, { Component } from 'react';
import PDF from 'react-pdf-js';
import amysguide from '../images/amys/identity_guide.pdf';

export default class Viewer extends Component {
  state = {};

  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i> Previous Page  </a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> Previous Page  </a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#">Next Page  <i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#">Next Page  <i className="fa fa-arrow-right"></i></a></li>;
    }
    return (
      <div>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </div>
      );
  }

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div >
        <PDF
          file={amysguide}
          onDocumentComplete={this.onDocumentComplete}
          page={this.state.page}
          className="amysimages"
        />
        {pagination}
      </div>
    )
  }
}
