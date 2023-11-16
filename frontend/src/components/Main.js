import React, { useEffect, useState } from 'react'
import { Grid, Container, Button } from '@mui/material'
import axios from 'axios'

export default function Main() {
  const [people, setPeople] = useState([])

  const fetchPeople = async () => {
    const response = await axios.get('/api/people')
    setPeople(response.data)
  }

  useEffect(() => {
    fetchPeople()
  }, [])

  const addPerson = async () => {
    const response = await axios.post('/api/people', {
      name: 'Kinslee Karl'
    })
    console.log(response.data)
    fetchPeople()
  }

  return (
    <Grid container spacing={2} >
      { people.length < 1 && <h1>No Names</h1>}
      {people.map((person) => {
        return (
          <Grid item xs={8} key={person._id} sx={{ backgroundColor: 'yellow'}}>
            <Container>
              <h4>{person.name}</h4>
            </Container>
          </Grid>
        )
      })}
      <Grid item xs={12}>
        <Button variant="contained" onClick={addPerson}>Add</Button>
      </Grid>
    </Grid>
  )
}
