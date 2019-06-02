import React from 'react'
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
    getImage = (book) => {
        if (typeof(book.imageLinks) === "undefined") {
            return ""
        } else {
            return book.imageLinks.smallThumbnail
        }

    }
  render () {
  	return (
    <div className="book">
		<div className="book-top">
			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + this.getImage(this.props.book) + ")" }}></div>
            <BookShelfChanger book={this.props.book} onUpdateBook= {this.props.onUpdateBook} isBookOnShelf={this.props.isBookOnShelf}/>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
    </div>  
    )
  }
}

export default Book