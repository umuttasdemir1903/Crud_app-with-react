import React from 'react'


const CustomButton = ({title,onClick,type}) => {
  return (
<button onClick={onClick} className={`btn ${type}`} >{title}</button>
  )
}

export default CustomButton