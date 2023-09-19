import React, { useState } from "react";
import  CardForm  from "../components/CardForm";
import  CardPreview  from "../components/CardPreview";

export const AddCards = ({cards,setCards}) => {
  const [formData, setFormData] = useState({
    bankNumber: "",
    cardHolder: "",
    expirationMonth: "",
    expirationYear: "",
    ccv: "",
    vendor: "",
  });

  const handleSubmit = () => {
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
      <CardPreview formData={formData} />
      <CardForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} onChange={handleChange} />
    </div>
  );
};
