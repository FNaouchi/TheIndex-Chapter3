import React, { Component } from "react";
import Book from "./Book";
class AuthorDetail extends Component {
  render() {
    const authorBooks = this.props.current.books.map(book => (
      <Book key={book.title} {...book} />
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {this.props.current.first_name + " " + this.props.current.last_name}
          </h3>
          <img
            src={this.props.current.imageUrl}
            className="img-thumbnail"
            alt={
              this.props.current.first_name + " " + this.props.current.last_name
            }
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{authorBooks}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
