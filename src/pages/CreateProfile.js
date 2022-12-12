import { useState } from 'react'
import { Box, Button, Form, Grommet } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#9c89ff"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    },
  },
};


export default function CreateProfile() {
  const [form, setForm] = useState({})

  const submitProfile = e => {
    e.preventDefault()

    fetch('https://hilite-api.web.app/create-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    //.then for json
    //.then to get res.id
  }

  const handleForm = e => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  return (

    //display id when it exist
    <body>
    <Grommet theme={theme}>
    <div className='container'>
      <h1>Create Profile</h1>
      <Box margin="10px 0px 10px 0px">
      <Form onSubmit={submitProfile}>
        <label htmlFor=''>Name</label>
        <input name='name' type='text' onChange={handleForm} />
        <br />
        <label htmlFor=''>Username</label>
        <input name='text' type='text' onChange={handleForm} />
        <br />
        <label htmlFor=''>Age</label>
        <input name='age' type='number' onChange={handleForm} />
        <br />
        <label htmlFor=''>Sport</label>
        <input name='sport' type='text' onChange={handleForm} />
        <br />
        <label htmlFor=''>School</label>
        <input name='school' type='text' onChange={handleForm} />
        <br />
        <label htmlFor=''>Class</label>
        <input name='class' type='text' onChange={handleForm} />
        <br />
        <label htmlFor=''>State</label>
        <input name='state' type='text' onChange={handleForm} />
        <br />
        <Button size="xsmall" label="Submit Profile" color="black" onClick={() => submitProfile} >
        {console.log(submitProfile , "checking for profiles")}
        </Button>
      </Form>
      </Box>
    </div>
    </Grommet>
    </body>
  )
}