import React from 'react'

class BookShelfChanger extends React.Component {
    updateBook = (book, shelf) => { 
        this.props.onUpdateBook(book, shelf) 
    }
    
    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.props.isBookOnShelf(this.props.book)} readOnly>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" onClick={() => this.updateBook(this.props.book, "currentlyReading")} >Currently Reading</option>
                    <option value="wantToRead" onClick={() => this.updateBook(this.props.book, "wantToRead")} >Want to Read</option>
                    <option value="read" onClick={() => this.updateBook(this.props.book, "read")} >Read</option>
                    <option value="none" onClick={() => this.updateBook(this.props.book, "none")} >None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger