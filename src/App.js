import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Search from './Search'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    myBooks: [],
    booksLoaded: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((data) => {
        this.setState(() => ({
          myBooks: data,
          booksLoaded: true
        }))
      })
  }

  saveBook = (book, shelf) => {
    book.shelf = shelf
    let currentBooks = this.state.myBooks.filter(b => (b.id !== book.id))
    let newStoredBooks = []

    if (shelf === 'none') {
      //remove book
      newStoredBooks = currentBooks
    } else {
      newStoredBooks = [...currentBooks, book]
    }

    // update state
    this.setState(currentState => ({
      myBooks: newStoredBooks
    }), () => {
      // save book
      BooksAPI.update(book, shelf)
    })

  }

  render() {
    const { myBooks, booksLoaded } = this.state
    return (
      <div className="app">
        <header><h1>My Reads</h1></header>
        <div className='content'>
          <Route exact path='/' render={() => (
            <Dashboard myBooks={myBooks} booksLoaded={booksLoaded} onSaveBook={this.saveBook} />
          )} />
          <Route exact path='/search' render={() => (
            <Search myBooks={myBooks} onSaveBook={this.saveBook} />
          )} />
        </div>
      </div>
    )
  }
}

export default BooksApp
