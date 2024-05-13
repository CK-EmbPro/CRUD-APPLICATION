import React , {useState, useEffect} from 'react'
import axios from 'axios'
import Book from './Book'
import './book.css'


const fetchHandler = async ()=>{
  try {
    return await axios.get('http://localhost:8000/books').then((res)=> res.data)
  } catch (error) {
    console.log("Internal server error: " + error.message)
  }
   
}

const Books = () => {
    const [books, setBooks]= useState()

    useEffect(()=>{
        fetchHandler().then((data) => setBooks(data.books))
    })

    console.log(books)
  return (
    <div>
     <ul>{books && books.map((book, index)=>(
      <li className='book' key={index}>
        <Book theBook={book}/>
      </li>
     ))}</ul>
     </div>
   
  )
}

export default Books