import { useState, useEffect } from 'react'

// exporting function GetProfile
export default function GetProfile() {
  const [profiles, setProfiles] = useState([]) 
  // const [showInfo, setShowInfo] = useState(false) 
  console.log(profiles)
  useEffect(() => {
    fetch('https://hilite-api.web.app/')
    .then(res => res.json())
    .then(data => setProfiles(data))
    .catch(err => console.error(err))
  }, [])
            
  // export default function ProfileCard({ thisVehicle, setVehicles }) {
  //   const [flip, setFlip] = useState(false);
  //   const navigate = useNavigate();

  console.log("profiles ->",profiles) 
  
  return (
    <div>
      {profiles?.map((profiles) => {
        return ( 
          <content>
    <div className="userBox">
        <h1>{profiles.username}</h1>
      <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/47439_10150265709145524_6859069_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=de6eea&_nc_ohc=OXr5bL5e5okAX_l0HiB&tn=DiUFDRRgB4-LZwCG&_nc_ht=scontent-mia3-1.xx&oh=00_AfA3h6LZitrOByGzaEh5FO-JpDIL7Q73EPhFRzIpdkcoxg&oe=63BA2CEB" alt=""/>
      <div className="info">
        <p>{profiles.name}</p>
        <p>{profiles.age}</p>
        <p>{profiles.school}</p>
        <p>{profiles.sport}</p>
        <p>{profiles.classof}</p>
        <p>{profiles.state}</p>
        <p>{profiles.position}</p>
    </div>
    </div>
    <div className="close-icon" ></div>
    </content>
)


})}

    
    </div>
  )

}
