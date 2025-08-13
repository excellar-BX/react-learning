import React from 'react'
import pic from '../assets/img.png'
import Button from './Button'

const Nav = () => {
    const nav = [
        {name: "Trainer", route:'/trainer'},
        {name: "Service", route:'/trainer'},
        {name: "Community", route:'/trainer'},
        {name: "Careers", route:'/trainer'},
        {name: "Blog", route:'/trainer'},
    ]
  return (
    <div className=' py-2 h-fit bg-black text-white ' >
<div className='max-w-[80%] mx-auto flex flex-row justify-between' >
            <div className=' flex flex-row gap-5 items-center ' >
            <img className=' w-16 h-16 ' src={pic} alt="nav icon" />
            <ul className='flex flex-row gap-5 ' >
                {nav.map((item, index) => (
                    <a key={index} href={item.route}><li>{item.name}</li></a>
                ) )}
            </ul>
        </div>
        <div className='flex flex-row items-center ' >
            <p>Login</p>
            <Button value='Signup' className="rounded-sm bg-sky-700" />
        </div>
</div>
    </div>
  )
}

export default Nav