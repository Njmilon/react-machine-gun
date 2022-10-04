import { useState } from 'react';
import './App.css';
import AllGuns from './Components/AllGuns/AllGuns';
import Header from './Components/Header/Header';

function App() {
  const [card, setCard] = useState(0);
  const handleAddToCart = () => {
    setCard(card + 1)
  }
  return (
    <div className="App">
      <Header card={card}></Header>
      <AllGuns handleAddToCart={handleAddToCart}></AllGuns>
    </div>
  );
}

export default App;
