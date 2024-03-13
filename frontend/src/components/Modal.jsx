import React from 'react'
import styles from './Modal.module.css'
import { useNavigate } from 'react-router-dom'

const Modal = ({children}) => {
  const navigate = useNavigate()
  const closeHandler = ()=> {
    navigate('..') //go up one level
  }
  return (
    <>
        <div className={styles.backdrop} onClick={closeHandler }/>
        <dialog open className={styles.modal}>
            {children}
        </dialog>
    </>
  )
}

export default Modal