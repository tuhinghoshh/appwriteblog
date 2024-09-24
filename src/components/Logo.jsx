import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className="flex lg:flex-1">
          <img alt="Logo" src="https://cdn.pixabay.com/photo/2017/11/08/14/51/logo-2930681_640.png" className="h-10 w-auto" />
    </div>
  )
}

export default Logo