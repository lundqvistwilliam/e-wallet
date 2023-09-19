import { useState } from "react"
import { useNavigate } from "react-router-dom";
import CardForm  from "../components/CardForm";


export const AddCards = ({setCards: updateCards }) => {
    const [cards, setCards] = useState([]);
    
    const handleSubmit = (formData) => {
        const newCard = { ...formData };
        setCards((prevCards) => [...prevCards, newCard]);
        updateCards((prevCards) => [...prevCards, newCard]);
        console.log('New card added:', newCard);
        console.log('Updated cards state:', cards);
        };
    
    console.log('Rendered AddCards component'); 
    console.log('Current cards state:', cards);

    return (
        <div>
          <CardForm onSubmit={handleSubmit} />
        </div>
      );
    }

    


