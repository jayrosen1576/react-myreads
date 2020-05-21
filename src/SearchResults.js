import React, { Component } from 'react'
import Book from './Book'

class SearchResults extends Component {
  state = {
    books: []
  }

  render() {
    const { myBooks, books, booksLoaded, searching, query, onSaveBook } = this.props
    const booksList = books.filter(book => {
      const found = myBooks.filter(b => b.id === book.id)
      return found.length === 0
    })
    return (
      <div className="bookshelf">
        <div className="bookshelf-books" onDrop={this.drop} onDragOver={this.allowDrop}>
          <ol className="books-grid">
            {query.length >= 3 && booksList.map(book => (
              <li key={book.id}><Book book={book} onSaveBook={onSaveBook} noDrag={true} /></li>
            ))}
            {query.length >= 3 && !searching && booksList.length === 0 && booksLoaded && (
              <div className='search-results-empty'>
                <p>
                  No books found
                </p>
              </div>
            )}
            {query.length >= 3 && searching && (
              <div className='spinner-container'><div className='spinner'></div></div>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchResults