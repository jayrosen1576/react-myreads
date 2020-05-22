import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
  state = {
    myBooks: []
  }

  allowDrop = (e) => {
    e.preventDefault();
  }

  drop = (e) => {
    e.preventDefault();
    const { myBooks, shelf, onSaveBook } = this.props;
    var data = e.dataTransfer.getData("id");;

    // get book that was dropped
    const book = myBooks.filter(book => book.id === data)[0];
    if (book.shelf !== this.props.shelf) {
      onSaveBook(book, shelf);
    }
  }

  render() {
    const { title, myBooks, shelf, booksLoaded, onSaveBook } = this.props;
    const booksList = myBooks.filter(book => book.shelf === shelf || shelf === 'search');

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books" onDrop={this.drop} onDragOver={this.allowDrop}>
          <ol className="books-grid">
            {booksList.map(book => (
              <li key={book.id}><Book book={book} onSaveBook={onSaveBook} /></li>
            ))}
            {booksList.length === 0 && booksLoaded && shelf !== 'search' && (
              <div className="bookshelf-empty">
                <p>
                  You have no books in <span className="shelf-label">{title}</span>
                </p>
              </div>
            )}
            {!booksLoaded && (
              <div className="spinner-container"><div className="spinner"></div></div>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;