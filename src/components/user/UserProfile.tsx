import React from 'react'
type UserProfileProps = {
    userName: string;
  };
function UserProfile({userName}:UserProfileProps) {
  return (
    <h1 className='text-xl font-bold'>{userName}</h1>
  )
}

export default UserProfile
