import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 3px;

    p{
        margin: 0;
    }
`

export class ShoppingCartItem extends React.Component {
    render() {
        return <div>
            <p> {this.props.cartItem.quantity}x </p>
            <p> {this.props.cartItem.name} </p> 
            <button onClick={() => this.props.onClickExcluir(this.props.cartItem.id)}>Remover</button>
        </div>
    }
}