import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import {Root} from "./pages/Root"
import {Home} from "./pages/Home"
import {Cards} from "./pages/Cards"
import {AddCards} from "./pages/AddCards"


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
       <Route index element={<Home />} />
       <Route path="/cards" element={<Cards />} />
       <Route path="/addcards" element={<AddCards />} />
    </Route>

  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
