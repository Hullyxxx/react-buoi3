import React, { Component } from 'react'

export default class ItemShoe extends Component {
    render() {
        return this.props.listShoe.map(itemShoe => {
            let { name, price, image } = itemShoe
            return <div className='col-3 p-4'>
                <div className="card" style={{ width: '16rem' }}>
                    <img className="card-img-top" src={image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <a href="#" className="btn btn-primary" onClick={() => {
                            this.props.HandleAddToCart(itemShoe)
                        }}>Add to cart</a>
                    </div>
                </div>
            </div>

        })
    }
}
