import { useState, useEffect } from 'react'

let userBox = document.getElementByID("userBox")

function openInfo(){
  userBox.classList.remove("hide-details")
}
function closeInfo(){
  userBox.classList.add("hide-details")
} 
  
  export default function GetProfile() {
    const [profiles, setProfiles] = useState([])
    console.log(profiles)
    useEffect(() => {
      fetch('http://127.0.0.1:5002/my-profile')
      .then(res => res.json())
      .then(data => setProfiles(data))
      .catch(err => console.error(err))
    }, [])
  }
{
  console.log("profiles ->",profiles) 
} 
  return (
    <div>
      {profiles.map((profiles) => {
        return ( 
          <body>
    <div className="user hide-details" id="userBox">
      <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/47439_10150265709145524_6859069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=de6eea&_nc_ohc=OXr5bL5e5okAX_l0HiB&tn=DiUFDRRgB4-LZwCG&_nc_ht=scontent-mia3-1.xx&oh=00_AfA3h6LZitrOByGzaEh5FO-JpDIL7Q73EPhFRzIpdkcoxg&oe=63BA2CEB" onClick={openInfo()} alt=""/>
      <div className="info">
        <h1>{profiles.usernamename}</h1>
        <h1>{profiles.name}</h1>
        <p>{profiles.age}</p>
        <p>{profiles.school}</p>
        <p>{profiles.sport}</p>
        <p>{profiles.classof}</p>
        <p>{profiles.state}</p>
        <p>{profiles.position}</p>
    </div>
    </div>
    <div className="close-icon" onClick={closeInfo()}></div>
    </body>
)


})}

    
    </div>
  )

  
