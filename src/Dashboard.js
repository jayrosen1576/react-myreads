import React, { Component } from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Bookshelf from './Bookshelf'

class Dashboard extends Component {
  render() {
    const { books, onSaveBook } = this.props
    return (
      <div>
        <div className="list-books">
          <div className="list-books-content">
            <div>
              <Bookshelf title='Currently Reading' books={books} shelf='currentlyReading' onSaveBook={onSaveBook} />
              <Bookshelf title='Want to Read' books={books} shelf='wantToRead' onSaveBook={onSaveBook} />
              <Bookshelf title='Read' books={books} shelf='read' onSaveBook={onSaveBook} />
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