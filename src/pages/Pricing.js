import React from 'react'
import Offers from '../components/Offers'
import './Pricing.css'

function Pricing() {
  return (
    <>
      <section class="hero">
          <h2>Manage all your social media profiles from one place.</h2>
          <ul>
              <li><i class="fa-solid fa-check"></i> Free 15-day Trial</li>
              <li><i class="fa-solid fa-check"></i> Unlimited Team Members</li>
              <li><i class="fa-solid fa-check"></i> Cancel Anytime</li>
          </ul>
          {/* <p>Billed Yearly <input type="checkbox"> Billed Monthly</p> */}
      </section>
      <div className='container'>
        <Offers name='Start up' amount='14' numProfile='5' numPost='5'/>
        <Offers name='Business' amount='25' numProfile='10' numPost='25'/>
        <Offers name='Agency' amount='139' numProfile='100' numPost='100'/>
      </div> 
    </>
  )
}

export default Pricing
