import './style.css'
import javascriptLogo from './javascript.svg'
import ef_logo from '/headr_logo.webp'
import banner from '/banner.jpg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class='page'>
      <nav class='navbar'> 
        <div><img class='logo' src="${ef_logo}" alt="ef Logo" width="100" height="50" /></div>
        <div class='menu_items'>
          <div class='upper_menu'>
          <p>Trending</p>
          <p>Pre-orders</p>
          <p>Upcoming</p>
          <p>Support 24/7</p>
          </div>
          <div class='lower_menu'>
            <div class='lower_menu_item'> <i class="fa-solid fa-desktop"></i> <p>PC</p> <i class="fas fa-regular fa-angle-down"></i> </div>
            <div class='lower_menu_item'> <i class="fa-brands fa-playstation"></i> <p>Playstation</p> <i class="fas fa-regular fa-angle-down"></i> </div>
            <div class='lower_menu_item'> <i class="fa-brands fa-xbox"></i> <p>Xbox</p> <i class="fas fa-regular fa-angle-down"></i> </div>
            <div class='lower_menu_item'> <i class="fa-solid fa-swatchbook"></i> <p>Nintendo</p> <i class="fas fa-regular fa-angle-down"></i> </div>
           
            <div> <i class="fa-solid fa-magnifying-glass"></i> </div>
          </div>
        </div>
        <div class='right_icons'>
          <p><i class="fa-solid fa-cart-arrow-down"></i></p>
          <p><i class="fa-regular fa-user"></i></p>
        </div>
      </nav>
      <div class='banner'>
      
      </div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
{/* <img class='banner_image' src="${banner}" alt="banner"/> */}
