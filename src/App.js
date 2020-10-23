import React from 'react';
import { Filters } from './Components/Filters/Filters';
import { ShoppingCart } from './Components/ShoppingCart/ShoppingCart';
import { Products } from './Components/Products/Products';
import styled from 'styled-components'

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  `



const product = [
  {
    id: 1,
    name: "Item A",
    price: 200.0,
    photo: "https://picsum.photos/201/200",    
  },

  {
    id: 2,
    name: "Item B",
    price: 30.0,
    photo: "https://picsum.photos/200/201",    
  },

  {
    id: 3,
    name: "Item C",
    price: 50.0,
    photo: "https://picsum.photos/202/200",
  },

  {
    id: 4,
    name: "Item D",
    price: 120.0,
    photo: "https://picsum.photos/200/202",
  },

  {
    id: 5,
    name: "Item E",
    price: 150.0,
    photo: "https://picsum.photos/203/200",
  },

  {
    id: 6,
    name: "Item F",
    price: 210.0,
    photo: "https://picsum.photos/200/203",
  },

  {
    id: 7,
    name: "Item G",
    price: 285.0,
    photo: "https://picsum.photos/204/200",
  },

  {
    id: 8,
    name: "Item H",
    price: 300.0,
    photo: "https://picsum.photos/200/204",
  }

]

class App extends React.Component {
  state = {
    minFilter: '',
    maxFilter: '600',
    nameFilter: '',
    productsInCart: [
      {
        id: 1,
        name: "Item A",
        price: 200.0,
        photo: "https://picsum.photos/201/200", 
        quantity: 5   
      },
    
      {
        id: 2,
        name: "Item B",
        price: 30.0,
        photo: "https://picsum.photos/200/201",
        quantity: 2    
      }
    ]
  }


  render() {
    return (
      <AppContainer>

        <Filters
        minFilter={this.state.minFilter}
        maxFilter={this.state.maxFilter}
        nameFilter={this.state.nameFilter}
        />

        <Products 
        product = {product} 
        minFilter={this.state.minFilter}
        maxFilter={this.state.maxFilter}
        nameFilter={this.state.nameFilter}        
        />

        <ShoppingCart
          productsInCart = {this.state.productsInCart}
        />

      </AppContainer>
    );
  }
}



export default App;
