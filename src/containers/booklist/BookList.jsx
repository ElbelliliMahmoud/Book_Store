import React, { useState, useEffect } from 'react'
import './BookList.css'
import { API_URL } from '../../api/books'
import axios from 'axios'
import { Button, Card, ScrollTop, Heading } from '../../components'
import { images } from '../../constants'
import ReactPaginate from "react-paginate";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const booksPerPage = 8;
  const pagesVisited = pageNumber * booksPerPage;
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])




  const displayBooks = books
    .slice(pagesVisited, pagesVisited + booksPerPage)
    .map((book, index) => {
      return (
        <div className="book__home-featured_book" key={index}>
          <Card image_url={book.image_url} title={book.title} authors={book.authors} format={book.format} rating={book.rating} />
          <Button title="Add To Favorite" />
        </div>
      );
    });

  const pageCount = Math.ceil(books.length / booksPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="book__booklist">
            <Heading title="Book Lists" />
      {loading ? (
        <img src={images.loader_book} alt="loader_book" className='loader__book' />
      ) : (
        <>
        <div className="book__booklist_books">
                  {displayBooks}
        </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
          <ScrollTop />
        </>
      )}
    </div>
  )
}

export default BookList