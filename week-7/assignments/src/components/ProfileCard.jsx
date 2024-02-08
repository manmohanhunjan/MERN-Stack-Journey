import React, { useEffect, useState } from 'react'

const ProfileCard = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/manmohanhunjan')
    .then(response => response.json())
    .then(data => setData(data))
  },[])


  return (
    <div className='card'>
      <div className='cardPart1'>
        <img src={data?.avatar_url} alt='Profile' />
        <h2>{data?.name}<span className='age'>23</span></h2>
        <p>
          {data?.location}
        </p>
      </div>
      <div className="cardFooter">
        <div>
        <h3>{data?.public_repos}</h3>
        <p>Public Repos</p>
        </div>
        <div>
        <h3>{data?.following}</h3>
        <p>Following</p>
        </div>
        <div>
        <h3>{data?.public_gists}</h3>
        <p>Public Gists</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard