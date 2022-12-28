import React from 'react'
import './Offers.css'

function Offers({name,amount,numProfile,numPost,VIP}) {
  return (
      <div class="column">
            <div class="inner_wrapper">
                <h2>{name}</h2>
                <p><span>${amount}</span> <br/> <span class="sub">per user, per month</span></p>
                <a href="">Start My 15-day trial</a>
            </div>
            <ul class="offers">
                <li>{numProfile} social media profiles</li>
                <li>{numPost} Scheduled post per profile</li>
                <li>400+ Templates</li>
                <li>Calendar View</li>
                <li>24/7 {VIP} Support</li>
            </ul>
        </div>
  )
}

export default Offers
