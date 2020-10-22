import React from 'react'
import styled from 'styled-components'
import { ShoppingCartItem } from './ShoppingCartItem'

const ShoppingContainer = styled.div`
    border: 1px solid black;
    padding: 8px;
`

const CartListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`

export class ShoppingCart extends React.Component {
getTotalValue = () => {
    let totalValue = 0

    for(let product of this.props.productsInCart) {
        totalValue += product.price * product.quantity
    }

    return totalValue
}

    render() {
        return <ShoppingContainer>
            <h3>Carrinho</h3>
            <CartListContainer>
                {this.props.productsInCart.map((product) =>{
                    return <ShoppingCartItem cartItem={product}/>
                })}
            </CartListContainer>
            <p> Valor Total: R${this.getTotalValue()},00 </p>
        </ShoppingContainer>
    }
}