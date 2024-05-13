import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {FormLabel, TextField, Box, Button, FormControlLabel, Checkbox} from '@mui/material'
import axios from 'axios'

const BookDetails = () => {
    const [inputs, setInputs] = useState({})
    const [check, setCheck] = useState(false)
    const id = useParams().bid
    const navigate = useNavigate()
    console.log(id)

    useEffect(()=>{
        const fetchHandler = async ()=>{
            await axios.get(`http://localhost:8000/book/${id}`)
            .then(res=> res.data)
            .then(data=> setInputs(data.book)) 
        }

        fetchHandler()  
    }, [id])

    console.log(inputs)

    const handleSubmit = async (e)=>{

        e.preventDefault()

        const sendRequest = async ()=>{
            await axios.put(`http://localhost:8000/edit/${id}`, {
                name: String(inputs.name),
                author: String(inputs.author),
                description: String(inputs.description),
                price: Number(inputs.price),
                availability: Boolean(check)
            })
        }
        
        sendRequest().then(()=>navigate('/books'))



        
    }

    const handleChange = async (e)=>{
       setInputs(prevState =>({
        ...prevState, 
        [e.target.name]: e.target.value
       }))

    }

    const handleChecked = ()=>{
        setCheck(!check)
    }

    return <div>

<form onSubmit={handleSubmit}>

<Box display="flex" flexDirection="column" mt={5} justifyContent={'center'} alignContent={"center"} alignSelf="center" marginLeft='auto' marginRight= 'auto' maxWidth={700}>
<FormLabel>Name</FormLabel>
<TextField value={inputs.name} onChange={handleChange} name = "name" margin='normal' size='small' fullWidth color='success'  variant='outlined' />

<FormLabel>Author</FormLabel>
<TextField value={inputs.author} onChange={handleChange} name = "author" margin='normal' size='small' fullWidth color='success' variant='outlined' />

<FormLabel>Descritpion</FormLabel>
<TextField value={inputs.description} onChange={handleChange} name = "description" margin='normal' size='small' fullWidth color='success'  variant='outlined' />

<FormLabel>Price</FormLabel>
<TextField type="number" value={inputs.price} onChange={handleChange} name="price" margin='normal' size='small'  fullWidth color='success' variant='outlined' />

<FormLabel>Image</FormLabel>
<TextField value={inputs.image} onChange={handleChange} name="image" margin='normal' size='small'  fullWidth color='success' variant='outlined' />

<FormControlLabel control={<Checkbox defaultChecked checked ={check} onChange={handleChecked} />} label="Available" />

<Button variant="contained" type='submit'>Update Book</Button>
</Box>

</form>

    </div>
}

export default BookDetails