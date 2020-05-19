import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Search from './Search'
import DefaultStoredBooks from './DefaultStoredBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  constructor() {
    super()

    // set initial app state with books stored by the user
    let storedBooks = this.getStoredBooks()
    this.state.books = storedBooks
  }

  getStoredBooks = () => {
    // this simulates retrieval of books in one of the three lists; in a real app, 
    // this would be an api call, not retrieval from local storage

    // retrieve books from storage location    
    let storedBooks = localStorage.getItem('storedBooks')
    return storedBooks ? JSON.parse(storedBooks) : DefaultStoredBooks
  }

  saveBook = (book) => {
    // this simulates saving of a books in one of the three lists; in a real app, 
    // this would be an api call, not an update to local storage
    let currentBooks = this.state.books.filter(b => (b.id !== book.id))
    const newStoredBooks = [...currentBooks, book]
    localStorage.setItem('storedBooks', JSON.stringify(newStoredBooks))

    // update state
    this.setState(currentState => ({
      books: newStoredBooks
    }))
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
