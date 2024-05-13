import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Todo() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees()
  }, []);

  async function loadEmployees() {
    try {
      const response = await axios.get("http://localhost:8001/user/getAll");
      setEmployees(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Failed to load employees", error);
    }
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8001/user/create", {
        name: name,
        address: address,
        phone: phone
      });

      alert("Employee created successfully");
      setId("");
      setAddress("");
      setPhone("");
      setName("");
      loadEmployees();
    } catch (error) {
      console.error("Failed to create employee", error);
      alert(error);
    }
  }

  function editEmployee(person) {
    setName(person.name)
    setAddress(person.address)
    setPhone(person.phone)
    setId(person._id)
  }

  async function DeleteEmployee(_id) {
    await axios.delete("http://localhost:8001/user/delete/" + _id);
    alert("Employee delete successfully");
    loadEmployees();
  }

  async function update(event) {
    event.preventDefault()
    try {
      await axios.patch("http://localhost:8001/user/update/" + employees.find(u => u._id === id)._id, {
        _id: id,
        name: name,
        address: address,
        phone: phone
      });
      alert("Registration updateddd")
      setId("");
      setName("");
      setAddress("")
      setPhone("")
      loadEmployees();
    } catch (err) {
      alert(err)
    }

  }


  return (
    <div>
      <h1>Employee Details</h1>

      <div className='container mt-4'>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='_id'
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
              hidden
            />

            <label>Employee Name</label>
            <input
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

          </div>

          <div className='form-group'>
            <label>Employee Address</label>
            <input
              type='text'
              className='form-control'
              id='address'
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />

          </div>

          <div className='form-group'>
            <label>Employee Mobile-num</label>
            <input
              type='text'
              className='form-control'
              id='phone'
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />

          </div>

          <div>
            <button className='btn btn-primary mt-4' onClick={save}>
              Register
            </button>
            <button className='btn btn-warning mt-4' onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>

      <table className='table table-dark' align='center'>
        <thead>
          <tr>
            <th scope='col'>Employee_ID</th>
            <th scope='col'>Employee Name</th>
            <th scope='col'>Employee Address</th>
            <th scope='col'>Employee Mobile</th>

            <th scope='col'>Option</th>
          </tr>
        </thead>



        <tbody>
          {employees.map(function (employee) {
            return <tr key={employee._id} >
              <th scope='row'>{employee._id}</th>
              <td scope='row'>{employee.name}</td>
              <td scope='row'>{employee.address}</td>
              <td scope='row'>{employee.phone}</td>

              <td>
                <button type='button' className='btn btn-warning' onClick={() => {
                  editEmployee(employee)
                }}>Edit</button>

                <button type='button' className='btn btn-danger' onClick={() => {
                  DeleteEmployee(employee._id)
                }}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>

  )
}
