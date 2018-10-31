import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td>
        <td>
          <button
            className="btn"
            style={{ backgroundColor: this.props.color }}
          />
        </td>
      </tr>
    );
  }
}

export default Book;
