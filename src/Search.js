import React, { Component } from 'react'
import './Search.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchResults from './SearchResults'
import { debounce } from './utils'

class Search extends Component {
  state = {
    books: [],
    booksLoaded: false,
    query: '',
    searching: false
  }

  sendQuery = (query) => {
    query = query && query.trim()
    if (query.length < 3)
      return

    this.setState(() => ({
      books: [],
      booksLoaded: false,
      searching: true
    }), () => {
      // call API to retrieve search results
      BooksAPI.search(query)
        .then((data) => {
          if (data.error)
            throw new Error("Books not found")

          this.setState(() => ({
            books: data,
            booksLoaded: true,
            searching: false
          }))
        })
        .catch((err) => {
          this.setState(() => ({
            books: [],
            booksLoaded: true,
            searching: false
          }))
        })
    })
  }

  findBooks = (e) => {
    const keyCode = e.keyCode || e.key
    let allowSearch = true
    const forbiddenKeyCodes = [
      9, 20, 16, 7, 18, 27, 37, 38, 39, 40, 91, 93
    ]

    if (forbiddenKeyCodes.includes(keyCode)) {
      allowSearch = false
    }

    return allowSearch && (debounce(() => {
      const query = this.state.query
      if (query.trim().length > 0)
        this.sendQuery(query)
    }, 250))()
  }

  handleChange = (e) => {
    const query = e.target.value
    this.setState((currentState) => ({
      books: query.length < 3 ? [] : currentState.books,
      query: query,
      booksLoaded: query.length < 3 ? false : currentState.booksLoaded
    }))
  }

  render() {
    const { myBooks, onSaveBook } = this.props
    const { books, booksLoaded, query, searching } = this.state
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={query} onChange={this.handleChange} onKeyDown={this.findBooks} />
            </div>
          </div>
          <div className="search-books-results">
            <SearchResults title='Search Results' query={query} searching={searching} booksLoaded={booksLoaded} books={books} myBooks={myBooks} onSaveBook={onSaveBook} />
          </div>
        </div>
      </div>
    )
  }
}

export default Search