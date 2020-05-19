import React, { Component } from 'react'
import './Search.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'

class Search extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.search('Android')
      .then((data) => {
        this.setState(() => ({
          books: data
        }))
        console.log('results')
      })
  }
  render() {
    console.log('render')
    const { onSaveBook } = this.props
    const { books } = this.state
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" />
            </div>
          </div>
          <div className="search-books-results">
            <Bookshelf title='Search Results' books={books} shelf='search' onSaveBook={onSaveBook} />
            {/* <ol className="books-grid">
              {books.map(book => (
                <Book key={book.id} book={book} onSaveBook={onSaveBook} />
              ))}
            </ol> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Search