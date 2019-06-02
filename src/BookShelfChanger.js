import React from 'react'
import * as BooksAPI from './BooksAPI'

class BookShelfChanger extends React.Component {
    addToCurrentlyReading() {
        BooksAPI.update(this.props.book.id, "currentlyReading")
    }

    addWantToRead() {
        BooksAPI.update(this.props.book.id, "wantToRead")
    }

    addToRead() {
        BooksAPI.update(this.props.book.id, "read")
    }
    
    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.props.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" onClick={this.addToCurrentlyReading} >Currently Reading</option>
                <option value="wantToRead" onClick={this.addWantToRead} >Want to Read</option>
                <option value="read" onClick={this.addToRead} >Read</option>
                <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger