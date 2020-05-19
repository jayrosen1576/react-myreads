import React from 'react'
import Book from './Book'

function Bookshelf(props) {
  const { title, books, shelf, onSaveBook } = props
  const booksList = books.filter(book => book.shelf === shelf || shelf === 'search')
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksList.map(book => (
            <li key={book.id}><Book book={book} onSaveBook={onSaveBook} /></li>
          ))}
          {booksList.length === 0 && shelf !== 'search' && (
            <div className='bookshelf-empty'>
              <p>
                You have no books in <span className='shelf-label'>{title}</span>
              </p>
            </div>
          )}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf