import React from 'react'
import styled from 'styled-components'
import { ProductCards } from './ProductCard'

const ProductsContainer = styled.div`
    margin: 10px;
    overflow: hidden;
`

const ProductsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 5px;
`

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
`

export class Products extends React.Component {

    state = {
        sort: 'CRESCENTE'
    }

    getFilteredAndOrderedList = () => {
        return this.props.product
            .filter((product) => product.price <= this.props.maxFilter)
            .filter((product) => product.price >= this.props.minFilter)
            .filter((product) => product.name.includes(this.props.nameFilter))
            .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price)
            .sort((a, b) => this.state.sort === 'DECRESCENTE' ? a.price + b.price : b.price + a.price)
    }

    onChangeFiltro = (event) => {
        this.setState({
            sort: event.target.value
        })
    }

    render() {
        const filteredAndOrderedList = this.getFilteredAndOrderedList()
        return <ProductsContainer>
           <ProductsHeader>
               <p>Quantidade de Produtos: {filteredAndOrderedList.length} </p>
               <select value = {this.state.sort} onChange={this.onChangeFiltro}>
                    <option value = {'CRESCENTE'}>Preço: Crescente</option>
                    <option value= {'DECRESCENTE'}>Preço: Decrescente</option>
               </select>
           </ProductsHeader>

            <ProductsGrid>
                {filteredAndOrderedList.map((product) => {
                    return <ProductCards onClickAdicionar={this.props.onClickAdicionar} product={product}/>
                })}                
            </ProductsGrid>

        </ProductsContainer>
            
        
    }
}