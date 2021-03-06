import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import Book from './Book'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import {debounce} from 'throttle-debounce';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    bookSearch: [],
    searchText: ""
  }
  constructor() {
    super();
    this.callAjax = debounce(200, this.callAjax);
  }
  search(e) {
    this.callAjax(e.target.value);
  }
  callAjax(value) {
    this.setState({
      searchText: value
    })
    BooksAPI.search(value).then((book) => 
    {
      if (!Array.isArray(book)){
        book = []
      }
      this.setState({
        bookSearch: book
    })})
  }
  componentDidMount() {
    BooksAPI.getAll().then((book) => this.setState({
      books: book
    }));
  }

  isBookOnShelf = (inBook) => {
    let book = this.state.books.filter(book => book.id === inBook.id)
    if (book.length === 0) {
      return "none"
    } else {
      return book[0].shelf
    }
  }

  updateBook = (book, newShelf) => {
    let tmpBooks = this.state.books
    let index = tmpBooks.indexOf(book)
    if (index >= 0) {
      tmpBooks[index].shelf = newShelf
    }else {
      book.shelf = newShelf
      tmpBooks.push(book)
    }
    
    BooksAPI.update(book, newShelf)

    this.setState((currentState) => ({
      books: tmpBooks
  }))}

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onKeyUp={this.search.bind(this)}/>

              </div>
            </div>
            <div className="search-books-results">
              {this.state.searchText.length > 0 && this.state.bookSearch.length === 0 ? <p>No Results</p>:
              <ol className="books-grid">
                {this.state.bookSearch && this.state.bookSearch.length > 0 && this.state.bookSearch.map(book =>
                  <li key={book.id}>
                      <Book onUpdateBook={this.updateBook} isBookOnShelf={this.isBookOnShelf} book={book}/>
                  </li>
                ) }
              </ol>}
            </div>
          </div>
          )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf onUpdateBook= {this.updateBook} isBookOnShelf={this.isBookOnShelf} bookshelfName="Currently Reading" books={this.state.books.filter(b => {
                  return b.shelf === "currentlyReading"
                })} />
                <BookShelf onUpdateBook= {this.updateBook} isBookOnShelf={this.isBookOnShelf} bookshelfName="Want to Read" books={this.state.books.filter(b => {
                  return b.shelf === "wantToRead"
                })} />
                <BookShelf onUpdateBook= {this.updateBook} isBookOnShelf={this.isBookOnShelf} bookshelfName="Read" books={this.state.books.filter(b => {
                  return b.shelf === "read"
                })} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" className='open-search-button' >Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
