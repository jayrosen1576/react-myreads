import React, { Component } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Bookshelf from './Bookshelf'

class Dashboard extends Component {
  render() {
    const { myBooks, booksLoaded, onSaveBook } = this.props
    return (
      <div>
        <div className="list-books">
          <div className="list-books-content">
            <div>
              <Bookshelf title='Currently Reading' myBooks={myBooks} booksLoaded={booksLoaded} shelf='currentlyReading' onSaveBook={onSaveBook} />
              <Bookshelf title='Want to Read' myBooks={myBooks} booksLoaded={booksLoaded} shelf='wantToRead' onSaveBook={onSaveBook} />
              <Bookshelf title='Read' myBooks={myBooks} booksLoaded={booksLoaded} shelf='read' onSaveBook={onSaveBook} />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
              <IconButton className='icon-button blue' aria-label='find a book to add'>
                <AddIcon></AddIcon>
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard