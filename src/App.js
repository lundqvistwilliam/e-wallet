import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import { useState,useEffect } from 'react';
import {Root} from "./pages/Root"
import {Home} from "./pages/Home"
import {Cards} from "./pages/Cards"
import {AddCards} from "./pages/AddCards"

function App() {

  const [cards, setCards] = useState([]);
  const [randomUserFullName, setRandomUserFullName] = useState("");

  
  useEffect(() => {
    if (!randomUserFullName) {
      const fetchRandomUser = async () => {
        const response = await fetch('https://randomuser.me/api/');
        const userData = await response.json();
        const { first, last } = userData.results[0].name;
        const fullName = `${first} ${last}`.toUpperCase();
        setRandomUserFullName(fullName);
      };

      fetchRandomUser();
    }
  }, [randomUserFullName]);

  useEffect(() => {
    if (randomUserFullName) {
      const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
  
      const generateRandomCardNumber = () => {
        const cardNumber = [];
        for (let i = 0; i < 16; i++) {
          cardNumber.push(generateRandomNumber(0, 9));
        }
        return cardNumber.join('');
      };
  
      const randomCard = {
        bankNumber: generateRandomCardNumber(),
        cardHolder: randomUserFullName,
        expirationMonth: generateRandomNumber(1, 12).toString().padStart(2, '0'),
        expirationYear: generateRandomNumber(2023, 2030).toString(),
        ccv: generateRandomNumber(100, 999).toString(),
        vendor: ['Visa', 'Swedbank', 'MasterCard', 'American Express'][generateRandomNumber(0, 3)],
      };
  
      setCards([randomCard]);
    }
  }, [randomUserFullName]);
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/cards" element={<Cards cards={cards} />} />
        <Route path="/addcards" element={<AddCards setCards={setCards} randomUserFullName={randomUserFullName} />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
