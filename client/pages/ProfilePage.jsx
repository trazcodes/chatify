import React from 'react'
import { useAuthStore } from '../src/store/useAuthStore'

const ProfilePage = () => {
  const {authUser, isUpdatingProfile, updateProfile} = useAuthStore();
  const handleImageUpload = async (e)=>{

  }
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage