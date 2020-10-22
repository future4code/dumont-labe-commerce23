import React from 'react'
import styled from 'styled-components'

const CardsContainer = styled.div`
    border: 1px solid black;
    
    
    img{
        
    }
    
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    p{
        margin: 4px;
    }
`

const AddToCartButton = styled.button`
    align-self: center;
    font-size: 12px; 
`


export class ProductCards extends React.Component {
    render() {
        const product = this.props.product
        return <CardsContainer>
            <img src= {product.photo}/>
            <CardInfo>
                <p>{product.name}</p>
                <p>R${product.price}.00</p>
                <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
            </CardInfo>   
        </CardsContainer>
    }
}