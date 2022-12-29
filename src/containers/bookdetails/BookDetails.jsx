import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './BookDetails.css'
import { Heading ,Card} from '../../components'
import { useParams } from 'react-router-dom'
import { BOOK_DETAILS_URL } from '../../api/books'

const BookDetails = () => {
  const [book, setBook] = useState({})
  const {id} = useParams()

  useEffect(() => {
   axios
   .get(`${BOOK_DETAILS_URL}/${id}`)
   .then(res => {setBook(res.data)})
   .catch(err => console.log(err))
  }, [id]);
  return (
    <div className='book__details'>
      <Heading title="book details"/>
        <div className="book__home-featured_book" >
          <Card image_url={book.image_url} title={book.title} authors={book.authors} format={book.format} rating={book.rating} />
        </div>
    </div>
  )
}

export default BookDetails
