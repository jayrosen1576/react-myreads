import React from 'react'
import Book from './Book'

function Bookshelf(props) {
  const { title, books, status, onSaveBook } = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.filter(book => book.status === status).map(book => (
            <li key={book.id}><Book book={book} onSaveBook={onSaveBook} /></li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf