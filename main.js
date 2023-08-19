import './style.css'
import rdr2 from '/rdr2.webp'
import gta5 from '/gta5.jpg'
import witcher3 from '/witcher3.jpg'
import ef_logo from '/headr_logo.webp'
import nextjs from '/nextjs.webp'
import ts from '/typescript.webp'
import tw from '/tailwind.webp'
import shadcn from '/shadcn.webp'
import zustand from '/zustand.webp'
import stripe from '/stripe.webp'
import banner from '/banner.jpg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div class='bod '>
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



  <div id="myModal" class="modal ">
  <div class="modal-content ">
  <div class='backdrop'>
   <span class="close">&times;</span>
     <div class='modal_bar'>
      <p>Platforms</p>
      <p>View All</p>
     </div>
     <div class='store_grid'>

         <div class='store_item'>
           <img class='store_image' src="${nextjs}" alt="" />
           <p>Next-JS</p>
         </div>
         <div class='store_item'>
           <img class='store_image' src="${ts}" alt="" />
           <p>Typescript</p>
         </div>
         <div class='store_item'>
           <img class='store_image' src="${tw}" alt="" />
           <p>Tailwind</p>
         </div>

         <div class='store_item'>
           <img class='store_image' src="${nextjs}" alt="" />
           <p>Next-JS</p>
         </div>
         <div class='store_item'>
           <img class='store_image' src="${ts}" alt="" />
           <p>Typescript</p>
         </div>
         <div class='store_item'>
           <img class='store_image' src="${tw}" alt="" />
           <p>Tailwind</p>
         </div>

     </div>


   <div class='modal_bar2'>
     <p>Prepaid Cards</p>
     <p>View All</p>
    </div>
     <div class='card_grid'>
     
       <div class='pay_card_item'>
          <img class='pay_card_image' src="${stripe}" alt="" />
          <p>Stripe</p>
       </div>
       <div class='pay_card_item'>
          <img class='pay_card_image' src="${stripe}" alt="" />
          <p>Stripe</p>
       </div>
       <div class='pay_card_item'>
          <img class='pay_card_image' src="${stripe}" alt="" />
          <p>Stripe</p>
       </div>

     </div>


 </div>
   </div>
  </div>

        <div id="myBtn" class='lower_menu_item'> <i class="fa-solid fa-desktop"></i>
          <p>PC</p> <i class="fa-solid fa-chevron-down down_arrow"></i>
        </div>
        <div class='lower_menu_item'> <i class="fa-brands fa-playstation"></i>
          <p>Playstation</p> <i class="fa-solid fa-chevron-down down_arrow"></i>
        </div>
        <div class='lower_menu_item'> <i class="fa-brands fa-xbox"></i>
          <p>Xbox</p> <i class="fa-solid fa-chevron-down down_arrow"></i>
        </div>
        <div class='lower_menu_item'> <i class="fa-solid fa-swatchbook"></i>
          <p>Nintendo</p> <i class="fa-solid fa-chevron-down down_arrow"></i>
        </div>

      <div class="search-container">
        <form action="/search" method="get">
          <input class="search expandright" id="searchright" type="search" name="q" placeholder="Minecraft, RPG, Multiplayer...">
          <label class="button searchbutton" for="searchright"><span class="mglass">&#9906;</span></label>
        </form>
      </div>

      </div>
    </div>
    <div class='right_icons'>
      <p><i class="fa-solid fa-cart-arrow-down"></i></p>
      <div class='user_icon'><i class="fa-regular fa-user"></i></div>
    </div>
  </nav>
  <section class='banner'>
    <div class='banner_info'>
      <p class='time_tag'>In 15 days</p>
      <h3 class='banner_title'>Mandalorian Early Access + Digital Deluxe Edition</h3>
      <div class='pricing_info'>
        <span class='discount_tag'>-25%</span>
        <p class='price'>74.99€</p>
      </div>
    </div>
  </section>
</div>
<section class='trending'>
  <div class='trending_title'>
    <h3 id='trend_text'>Trending</h3>
    <p id='view_btn'>View All</p>
  </div>

  <div class='trending_items'>

    <div class='card_item'>
      <img class='card_image' src="${rdr2}" alt="rdr2 item">
      <span class='card_discount_tag'>-25%</span>
      <div class='card_info'>
      <p class='card_name'>Red Dead Redemption 2</p>
      <p class='card_price'>74.99€</p>
      </div>
    </div>

    <div class='card_item'>
      <img class='card_image' src="${gta5}" alt="gta5 item">
      <span class='card_discount_tag'>-25%</span>
      <div class='card_info'>
      <p class='card_name'>Grand Theft Auto 5</p>
      <p class='card_price'>74.99€</p>
      </div>
    </div>

    <div class='card_item'>
      <img class='card_image' src="${witcher3}" alt="witcher3 item">
      <span class='card_discount_tag'>-25%</span>
      <div class='card_info'>
      <p class='card_name'>The Witcher 3: Wild Hunt</p>
      <p class='card_price'>74.99€</p>
      </div>
    </div>
  
  </div>

</section>
</div>
  
`

setupCounter()
{/* <img class='banner_image' src="${banner}" alt="banner"/> */ }
//   <div class='search_icon'> <i class="fa-solid fa-magnifying-glass"></i> </div>
{/* <span class="close">&times;</span> */}