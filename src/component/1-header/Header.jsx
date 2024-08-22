import { useState } from 'react'
import  './header.css'

function Header() {
  const [showmodal, setshowmodal] = useState(false);

  const handleshow = ()=>{
    setshowmodal(true)
  }
  const handlehide = ()=>{
    setshowmodal(false)
  }
  return (
    <header className='flex header'>
      <button  onClick={handleshow} className='menu icon-menu'></button>
      <div/>
      <nav>
        <ul className='flex'>
          <li><a href="">about</a></li>
          <li><a href="">articls</a></li>
          <li><a href="">projects</a></li>
          <li><a href="">speaking</a></li>
          <li><a href="">contact</a></li>
        </ul>
      </nav>
      <button className='mode'>
        <span className='icon-moon-o'></span>
      </button>

      {showmodal &&
       <div className="fixed">
      <ul className='modal'>
        <li><button onClick={handlehide} className='icon-close'></button></li>
          <li><a href="">about</a></li>
          <li><a href="">articls</a></li>
          <li><a href="">projects</a></li>
          <li><a href="">speaking</a></li>
          <li><a href="">contact</a></li>
        </ul>
      </div>
      }

    </header>
  )
}

export default Header