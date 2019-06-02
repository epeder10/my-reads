import React from 'react'
// import * as BooksAPI from './BooksAPI'
import Book from './Book'
import './App.css'

class BookShelf extends React.Component {
  render() {
    return(
      <div className="bookshelf">
      	<h2 className="bookshelf-title">{this.props.bookshelfName}</h2>
		<div className="bookshelf-books">
		<ol className="books-grid">
            { this.props.books.map(book =>
                <li key={book.id}>
                    <Book book={book} onUpdateBook={this.props.onUpdateBook} isBookOnShelf={this.props.isBookOnShelf}/>
                </li>
            ) }
		</ol>
      </div>
	</div>
    )
  }
}

export default BookShelf