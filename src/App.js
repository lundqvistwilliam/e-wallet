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
  
  const [cards, setCards] = useState([
    {
      bankNumber: '1234-5678-9012-3456',
      cardHolder: 'John Doe',
      expirationMonth: '12',
      expirationYear: '2023',
      ccv: '123',
      vendor: 'Visa',
    },
  ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/cards" element={<Cards cards={cards} />} />
        <Route path="/addcards" element={<AddCards setCards={setCards} />} />
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
