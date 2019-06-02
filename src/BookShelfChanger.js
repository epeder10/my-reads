import React from 'react'
import * as BooksAPI from './BooksAPI'

class BookShelfChanger extends React.Component {
    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
    }
    
    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" onClick={() => this.updateBook(this.props.book, "currentlyReading")} >Currently Reading</option>
                <option value="wantToRead" onClick={() => this.updateBook(this.props.book, "wantToRead")} >Want to Read</option>
                <option value="read" onClick={() => this.updateBook(this.props.book, "read")} >Read</option>
                <option value="none" onClick={() => this.updateBook(this.props.book, "none")} selected>None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger