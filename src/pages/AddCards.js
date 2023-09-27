import React, { useState,useEffect } from "react";
import  CardForm  from "../components/CardForm";
import  CardPreview  from "../components/CardPreview";

export const AddCards = ({cards,setCards,randomUserFullName}) => {

  const [formData, setFormData] = useState({
    bankNumber: "",
    cardHolder: randomUserFullName,
    expirationMonth: "",
    expirationYear: "",
    ccv: "",
    vendor: "",
  });

  const handleSubmit = () => {
    if(cards.length >=4){
        alert("You have reached the maximum number of cards (4). Remove a card to add another one.")
        return;
    }
    const newCard = { ...formData };
    setCards((prevCards) => [...prevCards, newCard]);
    setFormData({
        bankNumber: "",
        cardHolder: "",
        expirationMonth: "",
        expirationYear: "",
        ccv: "",
        vendor: "",
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <CardPreview formData={formData} randomUserFullName={randomUserFullName} cardHolder={randomUserFullName} />
      <CardForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} onChange={handleChange} randomUserFullName={randomUserFullName} />
    </div>
  );
};
