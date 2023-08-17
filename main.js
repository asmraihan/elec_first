import './style.css'
import javascriptLogo from './javascript.svg'
import ef_logo from '/headr_logo.webp'
import banner from '/banner.jpg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
      <nav class='navbar'> 
        <div><img src="${ef_logo}" alt="ef Logo" width="100" height="50" /></div>
        <div class='menu_items'>
          <div class='upper_menu'>
          <p>Trending</p>
          <p>Pre-orders</p>
          <p>Upcoming</p>
          <p>Support 24/7</p>
          </div>
          <div class='lower_menu'>
            <div class='lower_menu_item'> <p>icon</p> <p>PC</p> </div>
            <div class='lower_menu_item'> <p>icon</p> <p>Playstation</p> </div>
            <div class='lower_menu_item'> <p>icon</p> <p>Xbox</p> </div>
            <div class='lower_menu_item'> <p>icon</p> <p>Nintendo</p> </div>
           
            <div> <p>search icon</p> </div>
          </div>
        </div>
        <div class='right_icons'>
          <p>icon</p>
          <p>icon</p>
        </div>
      </nav>
      <div class='banner'>
         <img class='banner_image' src="${banner}" alt="banner"/>
      </div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
