import React, { useContext } from 'react'
import classes from "./Cart.module.css"
import LayOut from "../../component/LayOut/LayOut"
import { DataContext } from '../../component/DataProvider/DataProvider'
import ProductCard from "../../component/Product/ProductCard"
import CurrencyFormat from "../../component/CurrencyFormat/CurrencyFormat"
import { Link } from 'react-router-dom'

function Cart() {
  const [{basket, user}, dispatch]=useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
    return item.price + amount
    },0)
  return (
    <LayOut>
      <section>
        <div>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {
            basket?.length==0?(<p>Opps ! No item in your cart</p>):(basket?.map((item, i)=>{
              return <ProductCard
              key={i} 
              product ={item}
              renderDesc={true}
              renderAdd={false}
              flex={true}
              />
            

              })
            )
          }
            
          
        </div>
        {basket?.length !==0&&(
            <div>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>

          )
          
    

        }

      </section>

    </LayOut>
  )
}

export default Cart