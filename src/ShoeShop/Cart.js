import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.props.HandleRenderCartShoe(this.props.cartShoe)}
            </tbody>
        </table>
      </div>
    )
  }
}
