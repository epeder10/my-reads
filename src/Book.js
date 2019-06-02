import React from 'react'
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {
  render () {
  	return (
    <div className="book">
		<div className="book-top">
			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + this.props.book.imageLinks.smallThumbnail + ")" }}></div>
            <BookShelfChanger book={this.props.book} shelf={this.props.shelf}/>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
    </div>  
    )
  }
}

export default Book