import React, {useState} from 'react'
import MainHeader from '../components/MainHeader'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  const [showModal, setShowModal] = useState(false)

  const hideModalHandler = () => {
    setShowModal(prev => !prev)
  }
  return (
    <>
        <MainHeader onCreatePost={hideModalHandler}/>
        <Outlet />
    </>
  )
}
