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
        const fullName = `${first} ${last}`;
        setRandomUserFullName(fullName);
      };

      fetchRandomUser();
    }
  }, [randomUserFullName]);

  useEffect(() => {
    if (randomUserFullName) {
      setCards([
        {
          bankNumber: '1234-5678-9012-3456',
          cardHolder: randomUserFullName,
          expirationMonth: '12',
          expirationYear: '2023',
          ccv: '123',
          vendor: 'Visa',
        },
      ]);
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
