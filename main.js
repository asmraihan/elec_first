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
            <div class='lower_menu_item'> <i class="fa-solid fa-desktop"></i> <p>PC</p> <i class="fa-solid fa-chevron-down down_arrow"></i>  </div>
            <div class='lower_menu_item'> <i class="fa-brands fa-playstation"></i> <p>Playstation</p> <i class="fa-solid fa-chevron-down down_arrow"></i>  </div>
            <div class='lower_menu_item'> <i class="fa-brands fa-xbox"></i> <p>Xbox</p> <i class="fa-solid fa-chevron-down down_arrow"></i>  </div>
            <div class='lower_menu_item'> <i class="fa-solid fa-swatchbook"></i> <p>Nintendo</p> <i class="fa-solid fa-chevron-down down_arrow"></i> </div>
           
            <div class='search_icon'> <i class="fa-solid fa-magnifying-glass"></i> </div>
          </div>
        </div>
        <div class='right_icons'>
          <p><i class="fa-solid fa-cart-arrow-down"></i></p>
          <div class='user_icon'><i class="fa-regular fa-user"></i></div>
        </div>
      </nav>
      <div class='banner'>
          <div class='banner_info'>
              <p class='time_tag'>In 15 days</p>
              <h3 class='banner_title'>Mandalorian Early Access + Digital Deluxe Edition</h3>
              <div class='pricing_info'>
              <span class='discount_tag'>-25%</span> <p class='price'>74.99€</p>
          </div>
        </div>
      </div>
  </div>
`

// setupCounter(document.querySelector('#counter'))
{/* <img class='banner_image' src="${banner}" alt="banner"/> */ }
