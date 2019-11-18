import React from 'react';
import Image from './Image'
import './App.css';
import Order from './Order';
import UserProfile from './UserProfile';


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

    const users = [{
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },

    {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    },
  ];

    return (
      <div className="App">
        <Image source="https://pixabay.com/get/52e6d4424b5aa514f1dc8460825668204022dfe05452774f742f78d4/cat-4611189_640.jpg" alternativeText="Cute cat staring" />
        <br/>
        <h1> Orders recently created </h1>
        <section>
          <Order order={headphone} />
          <Order order={energyDrink} />
        </section>
        <br/><br/>
        <section>
          {users.map(user => <UserProfile key={user.id} user={user} />)}
        </section>
      </div>
    );
  }
}

export default App;
