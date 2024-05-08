import { Link } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center h-[14vh] bg-gray-900 ">
      <h1 className="text-4xl font-bold text-gray-400 ">
        おてスピチェック　PC版
      </h1>
      <div className='text-white'>
        Let’s check your Pokemon’s Speed.
      </div>
    </header>
  )
}

export default Header