import React, { Component } from 'react'
import ItemShoe from './ItemShoe'

export default class ListShoe extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='row'>
        <ItemShoe HandleAddToCart={this.props.HandleAddToCart} listShoe = {this.props.listShoe}/>
      </div>
    )
  }
}
