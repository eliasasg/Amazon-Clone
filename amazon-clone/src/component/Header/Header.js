import React from 'react'
import classes from "./Header.module.css";
import LowerHeader from './LowerHeader';
import { BiCart } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";



function Header() {
  return (
    <>
        <section>
            <div className={classes.header__container}>
                {/* logo section*/}
                <div className={classes.logo__container}>
                    <a href="/"><img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon" />
                    </a>
                    <div className={classes.delivery}>
                        <span>
                        {/* icon */}
                        <HiOutlineLocationMarker />
                        </span>
                        <div>
                            <p>Delivered to</p>
                            <span>Ethiopia</span>
                        </div>
                    </div>

                </div>
                
                {/* delivery */}
                
                
                <div className={classes.search}>
                    {/* search */}
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                    <input type="text" />
                    {/* icon */}
                    <BiSearch  size={25}/>
                </div>
                {/* right side link */}
                
                <div className={classes.order__container}>
                    
                    <a href='' className={classes.language}>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />
                        <section name="" id=''>
                            <option value="">EN</option>
                        </section>
                    </a>
                    {/* three components */}
                    <a href="">
                        <div>
                            <p>Sign In</p>
                            <span>Account & Lists</span>
                        </div>
                    </a>
                    {/* orders */}
                    <a href="">
                        <p>returns</p>
                        <span>& Orders</span>
                    </a>
                    {/* cart */}
                    <a href="/cart" className={classes.cart}>
                    <BiCart  size={35}/>
                
                        {/* icon */}
                        <span>0</span>
                    </a>

                </div>

            </div>
        </section>
        <LowerHeader/>
    </>
  )
}

export default Header