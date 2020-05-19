import React, { Component } from 'react'

class Book extends Component {
  state = {
    book: {}
  }

  constructor(props) {
    super(props)
    this.state.book = this.props.book
  }

  setBookshelf = (e) => {
    const val = e.target.value
    const { onSaveBook } = this.props

    let book = this.state.book
    book.shelf = val
    this.setState((currentState) => ({
      book: book
    }), () => {
      onSaveBook(this.state.book, val)
    })

  }

  render() {
    const { book } = this.state
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundColor: '#ffffff',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url("${book.imageLinks.thumbnail}")`
          }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={this.setBookshelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
      </div>
    )
  }
}

export default Book