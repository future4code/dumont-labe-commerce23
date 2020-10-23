import React from 'react';
import { Filters } from './Components/Filters/Filters';
import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart';
import { Products } from './Components/Products/Products';
import styled from 'styled-components'

import ShoppingCartIcon from './img/Shopping Cart.svg';

let AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`

const ShoppingCartIconContainer = styled.div`
  position: absolute;
  top: 98%;
  left: 98%;
  transform: translate(-100%, -100%);
  padding: 20px;
  border: 2px solid gray;
  border-radius: 50%;
`



const product = [
  {
    id: 1,
    name: "Item A",
    price: 200.0,
    photo: "https://picsum.photos/201/200",
    quantity: 1    
  },

  {
    id: 2,
    name: "Item B",
    price: 30.0,
    photo: "https://picsum.photos/200/201",
    quantity: 1    
  },

  {
    id: 3,
    name: "Item C",
    price: 21.0,
    photo: "https://picsum.photos/202/200",
    quantity: 1
  },

  {
    id: 4,
    name: "Item D",
    price: 120.0,
    photo: "https://picsum.photos/200/202",
    quantity: 1
  },

  {
    id: 5,
    name: "Item E",
    price: 150.0,
    photo: "https://picsum.photos/203/200",
    quantity: 1
  },

  {
    id: 6,
    name: "Item F",
    price: 210.0,
    photo: "https://picsum.photos/200/203",
    quantity: 1
  },

  {
    id: 7,
    name: "Item G",
    price: 285.0,
    photo: "https://picsum.photos/204/200",
    quantity: 1
  },

  {
    id: 8,
    name: "Item H",
    price: 300.0,
    photo: "https://picsum.photos/200/204",
    quantity: 1
  }
]

class App extends React.Component {
  state = {
    minFilter: '0',
    maxFilter: '200',
    nameFilter: 'Item',
    productsInCart: [
    ],
    exibirCarrinho: true
  }

  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }  

  onChangeNameFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onClickCarrinho = () => {
    this.setState({exibirCarrinho: !this.state.exibirCarrinho});
  }

  componentDidMount = () => {
    // const carrinho = [...this.state.productsInCart];
    const carrinhoLocal = JSON.parse(localStorage.getItem('carrinho'));
    // let valorTotal;
    
    if (carrinhoLocal) {
      // carrinhoLocal.map(produto => (
      //   valorTotal += produto.value
      // ));

      this.setState({
        productsInCart: carrinhoLocal
      })

      console.log(this.state.productsInCart)
    }
  }

  componentDidUpdate = () => {
    let productsInCart = [...this.state.productsInCart];

    console.log(productsInCart);
    
    // const carrinhoLocal = JSON.parse(localStorage.getItem('carrinho'));
    
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
  }
  
  onClickExcluir = (id) => {
    let productsInCart = [...this.state.productsInCart];
    console.log(productsInCart)

    productsInCart.filter(produto => {
      if (produto.id === id) {
        console.log(produto);
        productsInCart.splice(produto.id, 1)
      }
    })
    
    console.log(productsInCart);
    this.setState({
      productsInCart: productsInCart
    })
  }

  onClickAdicionar = (id) => {
    let productsInCart = [...this.state.productsInCart];
    console.log(productsInCart)

    product.filter(product => {
      if (product.id === id) {
        if (product.quantity > 1) {
          product.quantity += 1;
        } else {
          console.log(product);
          productsInCart.push(product);
          // productsInCart.splice(product.id - 1, 1)
        }
      }
    })
    
    console.log(productsInCart);
    this.setState({
      productsInCart: productsInCart
    })
  }

  render() {

    if (!this.state.exibirCarrinho) {
      AppContainer = styled.div`
      display: grid;
      grid-template-columns: 1fr 4fr;
    `
  } else {
      AppContainer = styled.div`
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
    `
    }
    return (
      <AppContainer>

        <Filters
        minFilter={this.state.minFilter}
        maxFilter={this.state.maxFilter}
        nameFilter={this.state.nameFilter}
        onChangeMinFilter={this.onChangeMinFilter}
        onChangeMaxFilter={this.onChangeMaxFilter}
        onChangeNameFilter={this.onChangeNameFilter}
        />

        <Products 
        product = {product} 
        minFilter={this.state.minFilter}
        maxFilter={this.state.maxFilter}
        nameFilter={this.state.nameFilter}        
        onClickAdicionar={this.onClickAdicionar}
        />

        {this.state.exibirCarrinho ?
          <ShoppingCart
            productsInCart = {this.state.productsInCart}
            onClickCarrinho={this.onClickCarrinho}
            onClickExcluir={this.onClickExcluir}
            exibirCarrinho={this.state.exibirCarrinho}>
          </ShoppingCart>
          :
          null
          // {console.log(this.props.exibirCarrinho)}
        }

        <ShoppingCartIconContainer>
          <div>
            <img src={ShoppingCartIcon} onClick={this.onClickCarrinho} />
          </div>
        </ShoppingCartIconContainer>

      </AppContainer>
    );
  }
}



export default App;
