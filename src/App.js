import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {},
      selected: false,
      authors: authors,
      filteredAuthors: authors
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.selectState = this.selectState.bind(this);
    this.filterAuthors = this.filterAuthors.bind(this);
  }
  selectAuthor(id) {
    const newAuthor = authors.find(author => author.imageUrl === id);
    const sel = !this.state.selected;
    this.setState({
      currentAuthor: newAuthor,
      selected: sel,
      filteredAuthors: authors
    });
  }
  selectState() {
    if (this.state.selected) {
      return <AuthorDetail current={this.state.currentAuthor} />;
    }
    return (
      <AuthorsList
        authors={this.state.filteredAuthors}
        selectedAuthor={this.selectAuthor}
        filtering={this.filterAuthors}
      />
    );
  }

  filterAuthors(query) {
    const newSearch = authors.filter(
      author =>
        author.last_name.toLowerCase().includes(query.toLowerCase()) ||
        author.first_name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredAuthors: newSearch });
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar main={this.selectAuthor} />
          </div>
          <div className="content col-10">{this.selectState()}</div>
        </div>
      </div>
    );
  }
}

export default App;
