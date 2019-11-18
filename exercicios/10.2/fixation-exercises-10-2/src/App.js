import React from 'react';
import Image from './Image'
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "reais"
      }
    };

    return (
      <div className="App">
        <Image source="https://pixabay.com/get/52e6d4424b5aa514f1dc8460825668204022dfe05452774f742f78d4/cat-4611189_640.jpg" alternativeText="Cute cat staring" />
        <h1> Orders recently created </h1>
        <section>
          <Order order={headphone} />
          <Order order={energyDrink} />
        </section>
      </div>
    );
  }
}

export default App;
