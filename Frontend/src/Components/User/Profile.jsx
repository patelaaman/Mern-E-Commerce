import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

const Profile = () => {
    const {userId} = useContext(AppContext)

  return (
    <>
      <div className="container text-center my-5">
        <h1>Welcome , {userId?.name}</h1>
        <h3>{userId?.email}</h3>
      </div>
    </>
  )
}

export default Profile
