import React from 'react'

const Circle = ({percentage}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
    version="1.1" width="75px" height="75px">
    <defs>
        <linearGradient id="GradientColor">
        <stop offset="0%" stopColor="var(--color-primary-variant)" />
        <stop offset="100%" stopColor= "var(--color-secondary)" />
        </linearGradient>
    </defs>
    <circle cx="37.5" cy="37.5" r="32" strokeLinecap="round" className = {percentage}/>
    </svg>
  )
}

export default Circle