import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {FormLabel, TextField, Box, Button, FormControlLabel, Checkbox} from '@mui/material'
import axios from 'axios';


const AddBook = () => {

  const [inputs, setInputs] = useState({
    name: '',
    author: '',
    description: '',
    price: null,
    availability: null,
    image: '',
    
  })

  const [check, setCheck] = useState(false)


  const handleChecked = ()=>{
    setCheck(!check)
  }

  const handleChange = (e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
     
    }))
  }

  const redirectTo = useNavigate()

  const sendRequest = async()=>{
    try {
      await axios.post("http://localhost:8000/add", {
      name: String(inputs.name), 
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      availability: Boolean(check)
    })
    .then(res => res.data)
    } catch (error) {
      console.log("The error occuring is :"+error.message)
    } 
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(inputs, check)
    sendRequest().then(redirectTo('/books'))

  }
  
  return (
    <form onSubmit={handleSubmit}>

      <Box display="flex" flexDirection="column" mt={5} justifyContent={'center'} alignContent={"center"} alignSelf="center" marginLeft='auto' marginRight= 'auto' maxWidth={700}>
      <FormLabel>Name</FormLabel>
      <TextField value={inputs.name} onChange={handleChange} name = "name" margin='normal' size='small' fullWidth color='success' label="Enter book name" variant='outlined' />

      <FormLabel>Author</FormLabel>
      <TextField value={inputs.author} onChange={handleChange} name = "author" margin='normal' size='small' fullWidth color='success'  label="Enter book author" variant='outlined' />

      <FormLabel>Descritpion</FormLabel>
      <TextField value={inputs.description} onChange={handleChange} name = "description" margin='normal' size='small' fullWidth color='success' label="Enter book desc" variant='outlined' />

      <FormLabel>Price</FormLabel>
      <TextField type="number" value={inputs.price} onChange={handleChange} name="price" margin='normal' size='small'  fullWidth color='success' label="Enter book price" variant='outlined' />

      <FormLabel>Image</FormLabel>
      <TextField value={inputs.image} onChange={handleChange} name="image" margin='normal' size='small'  fullWidth color='success' label="Enter book image" variant='outlined' />

      <FormControlLabel control={<Checkbox defaultChecked name='availability' checked ={check} onChange={handleChecked} />} label="Available" />

      <Button variant="contained" type='submit'>Add Book</Button>
      </Box>

    </form>
  )
}

export default AddBook