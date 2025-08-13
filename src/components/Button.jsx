import React from 'react'

const Button = ({className, value}) => {
  return (
     <div className=' '  >
        <button className={`bg-sky-700 m-2 w-fit px-10 py-3 text-white font-semibold rounded-full hover:bg-sky-600 ${className} `} > {value}</button>
        </div>
  )
}

export default Button