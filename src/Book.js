import React from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends React.component {
  render () {
  	return (
    <div className="book">
		<div className="book-top">
			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url({this.props.url})' }}></div>

        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
    </div>  
    )
  }
}
 
export default Book