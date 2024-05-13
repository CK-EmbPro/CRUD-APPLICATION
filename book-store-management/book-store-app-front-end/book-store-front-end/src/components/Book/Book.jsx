import React from 'react'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Book = (props) => {
   const {_id, name , description, author,image, availability, price } = props.theBook  
    const navigate = useNavigate()
   const handleDelete = async() => {
    await axios.delete(`http://localhost:8000/delete/${_id}`)
    .then(()=> navigate('/books'))
   }

   return (
    <div className='card'>
     <h2>Book name: {name}</h2>
     <p>Book price: {price}</p> 
     <p>Book Availability: {availability}</p>
     <h3>Book author: {author}</h3>
     <h3>Book description: {description}</h3>
     <img src={image} alt={image} />

    <div className='btns'>
     <Button sx = {{marginLeft: "10px"}} LinkComponent={Link} to={`/edit/${_id}`}>Update</Button>
     <Button onClick={handleDelete}>Delete</Button>
    </div>

    </div>
  )
}

export default Book