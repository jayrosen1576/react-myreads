import React from 'react'
import Book from './Book'

function Bookshelf(props) {
  const { title, books, status, onSaveBook } = props
  const booksList = books.filter(book => book.status === status)
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksList.map(book => (
            <li key={book.id}><Book book={book} onSaveBook={onSaveBook} /></li>
          ))}
          {booksList.length === 0 && (
            <div className='bookshelf-empty'>
              <p>
                You have no books in <span className='status-label'>{title}</span>
              </p>
            </div>
          )}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf