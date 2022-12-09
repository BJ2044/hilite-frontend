import { useState } from 'react'

export default function CreateProfile() {
  const [form, setForm] = useState({})
  //useState to store id

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
    <div className='container'>
      <h1>Create Profile</h1>
      <form onSubmit={submitProfile}>
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
        <button onClick={() => submitProfile} >
        {console.log(submitProfile , "checking for profiles")}
          Submit Profile
        </button>
      </form>
    </div>
  )
}