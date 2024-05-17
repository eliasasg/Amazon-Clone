import React, { useContext } from 'react'
import classes from "./Header.module.css";
import LowerHeader from './LowerHeader';
import { BiCart } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {Link} from "react-router-dom"
import { DataContext } from '../DataProvider/DataProvider';




function Header() {
    const [{basket}, disptasch]=useContext(DataContext)
    const totalItem = basket?.reduce((amount, item)=>{
        return item.amount + amount
    },0)

    // console.log(state.length);
  return (
    <section className={classes.fixed}>
        <section>
            <div className={classes.header__container}>
                {/* logo section*/}
                <div className={classes.logo__container}>
                    <Link to="/"><img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon" />
                    </Link>
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
                    
                    <Link to='' className={classes.language}>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png" alt="" />
                        <section name="" id=''>
                            <option value="">EN</option>
                        </section>
                    </Link>
                    {/* three components */}
                    <Link to="">
                        <div>
                            <p>Sign In</p>
                            <span>Account & Lists</span>
                        </div>
                    </Link>
                    {/* orders */}
                    <Link to="/orders">
                        <p>returns</p>
                        <span>& Orders</span>
                    </Link>
                    {/* cart */}
                    <Link to="/cart" className={classes.cart}>
                    <BiCart  size={35}/>
                
                        {/* icon */}
                        <span>{totalItem}</span>
                    </Link>

                </div>

            </div>
        </section>
        <LowerHeader/>
    </section>
  )
}

export default Header