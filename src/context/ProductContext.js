import React, { Component } from 'react';
import data from '../data';
const ProductsContext = React.createContext();

class ProductsProvider extends Component {
  state = {
    products: [],
    loading: true,
    counter: 0,
    productQuantity: 0,
    cartQuantity: 0,
    total: 0,
    subTotal: 0,
    tax: 0,
    cart: []
  };
  componentDidMount() {
    let products = this.setProducts();

    let localCart = JSON.parse(window.localStorage.getItem('items'));
    console.log(localCart);
    this.setState(() => ({
      products,
      loading: false,
      productQuantity: products.length,
      cart: localCart || []
    }));
  }

  // format data
  formatData(data) {
    let tempProducts = data.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let product = { ...item.fields, images, id };
      return product;
    });
    return tempProducts;
  }

  //copy data
  setProducts() {
    let products = [];
    let tempProducts = this.formatData(data);
    tempProducts.forEach(product => {
      const singleProduct = { ...product };
      products = [...products, singleProduct];
    });
    return products;
  }

  nextProduct = () => {
    this.setState({ counter: this.state.counter + 1 });
    if (this.state.counter === this.state.productQuantity - 1) {
      this.setState({ counter: 0 });
    }
  };
  prevProduct = () => {
    this.setState({ counter: this.state.counter - 1 });
    if (this.state.counter < 1) {
      this.setState({ counter: this.state.productQuantity - 1 });
    }
  };

  getPopularProducts = () => {
    const tempProducts = [...this.state.products];
    const popularProducts = tempProducts.filter(
      product => product.popular === true
    );
    return popularProducts;
  };

  getTrendingProducts = () => {
    const tempProducts = [...this.state.products];
    const trendingProducts = tempProducts.filter(
      product => product.trending === true
    );
    return trendingProducts;
  };

  getNewProducts = () => {
    const tempProducts = [...this.state.products];
    const newProducts = tempProducts.filter(product => product.new === true);
    return newProducts;
  };

  singleProduct = slug => {
    if (this.state.products !== []) {
      let tempProducts = [...this.state.products];
      let product = tempProducts.find(product => product.slug === slug);
      return product;
    }
  };

  cartIncrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.count * product.price;
    this.setState(
      () => ({
        cart: [...tempCart]
      }),
      () => {
        this.totalAmount();
      }
    );
  };

  cartDecrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeProduct(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => ({
          cart: [...tempCart]
        }),
        () => {
          this.totalAmount();
        }
      );
    }
  };

  totalAmount = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tax = parseFloat(subTotal * (0.1).toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        subTotal,
        total,
        tax
      };
    });
  };

  getProductId = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  addToCart = id => {
    let products = [...this.state.products];
    const index = products.indexOf(this.getProductId(id));
    const product = products[index];
    const price = product.price;
    product.total = price;
    product.count += 1;
    product.inCart = true;
    this.setState(
      prevState => {
        return {
          products,
          cartQuantity: ++prevState.cartQuantity,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        this.totalAmount();
        window.localStorage.setItem(
          'items',
          JSON.stringify([...this.state.cart])
        );
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => ({
        products: this.setProducts(),
        cart: [],
        cartQuantity: 0
      }),
      () => {
        this.totalAmount();
      }
    );
  };

  removeProduct = id => {
    let products = [...this.state.products];
    let cart = [...this.state.cart];
    let tempCart = cart.filter(item => item.id !== id);
    const index = products.indexOf(this.getProductId(id));
    let removedProduct = products[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      prevState => ({
        products: [...products],
        cart: [...tempCart],
        cartQuantity: --prevState.cartQuantity
      }),
      () => {
        this.totalAmount();
      }
    );
  };
  render() {
    return (
      <ProductsContext.Provider
        value={{
          ...this.state,
          nextProduct: this.nextProduct,
          prevProduct: this.prevProduct,
          singleProduct: this.singleProduct,
          getPopularProducts: this.getPopularProducts,
          getTrendingProducts: this.getTrendingProducts,
          getNewProducts: this.getNewProducts,
          cartIncrement: this.cartIncrement,
          cartDecrement: this.cartDecrement,
          totalAmount: this.totalAmount,
          addToCart: this.addToCart,
          getProductId: this.getProductId,
          clearCart: this.clearCart,
          removeProduct: this.removeProduct
        }}
      >
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}

const ProductsConsumer = ProductsContext.Consumer;

export { ProductsProvider, ProductsConsumer, ProductsContext };
