import React from 'react'
import './Items.css'

const Items = ({backgroundImg}) =>{
    return (
        <div style={{
            backgroundImage:`url(${backgroundImg})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat", height:"780px"
        }}>
            
            <div className="items">
                <div className="title">
                    <h1>Model S</h1>
                </div>
                <div className="desc">
                    <p>Order Online for <a href="#">Touchless Delivery </a> </p>
                </div>

                <div className="buttons">
                    <button>CUSTOMER ORDER</button>
                    <button>EXISTING INVENTORY</button>
                </div>
            </div>
            
        </div>
    )
}

export default Items
