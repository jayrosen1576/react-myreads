import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Search from './Search'
//import DefaultStoredBooks from './DefaultStoredBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  constructor() {
    super()
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((data) => {
        this.setState(() => ({
          books: data
        }))
      })
  }

  saveBook = (book, shelf) => {
    // save book
    BooksAPI.update(book, shelf)
      .then(() => {
        let currentBooks = this.state.books.filter(b => (b.id !== book.id))
        const newStoredBooks = [...currentBooks, book]

        // update state
        this.setState(currentState => ({
          books: newStoredBooks
        }))
      })

  }

  render() {
    return (
      <div className="app">
        <header><h1>My Reads</h1></header>
        <div className='content'>
          <Route exact path='/' render={() => (
            <Dashboard books={this.state.books} onSaveBook={this.saveBook} />
          )} />
          <Route exact path='/search' render={() => (
            <Search books={this.state.books} onSaveBook={this.saveBook} />
          )} />
        </div>
      </div>
    )
  }
}

export default BooksApp
