import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    fetch('https://hilite-api.web.app/')
      .then(res => res.json())
      .then(data => setProfiles(data))
      .catch(err => console.error(err))
  }, [])

  console.log(profiles)

  const AllProfiles = () => {
    return (
      <div className='profiles'>
        {profiles.map((item, index) => {
          return (
            <Link state={item} to={'/single-profile'} className='post-item' key={item._id}>
              <img src={`https://source.unsplash.com/random?sig=${index}`} alt='' />
              <h4>{item.username}</h4>
              <p>{item.text}</p>
              <p>{item.date}</p>
            </Link>
          )
        })}
      </div>
    )
  }

  return (
    <div className='container'>
      <h1>Hi-Lite ⚡️</h1>
      <AllProfiles />
    </div>
  )
}