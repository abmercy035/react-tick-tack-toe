import '../styles/ticktac.css'
import React from 'react'

export default function Button({func, id, cls}) {
  
  return (
    <div onClick={func} className={cls} id={id}></div>
  )
}
