import { useState,useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom'

 const CardForm = ({ onSubmit, formData, setFormData,randomUserFullName }) => {
    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {
        setFormData((prevData) => ({
          ...prevData,
          cardHolder: randomUserFullName, 
        }));
      }, [randomUserFullName]);

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
 }

   const handleSubmit = (e) => {
     e.preventDefault();
     if (formData.bankNumber.length !== 16) {
        setIsFormValid(false);
        return;
     }
     setIsFormValid(true);
     setFormData({ ...formData, cardHolder: randomUserFullName });
     onSubmit(formData);
     navigate("/cards");
   }

   const handleRandomInputs=()=>{
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

    const randomBankNumber = Array.from({ length: 16 }, () =>
    Math.floor(Math.random() * 10)).join('');

    const randomExpirationMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const randomExpirationYear = String(Math.floor(Math.random() * 10) + 2023);

    setFormData({
        ...formData,
        bankNumber: randomBankNumber,
        expirationMonth: randomExpirationMonth,
        expirationYear: randomExpirationYear,
        ccv: generateRandomNumber(100, 999).toString(),
        vendor: ['Visa', 'Swedbank', 'MasterCard', 'American Express'][generateRandomNumber(0, 3)],
      });
    }

    const { vendor, bankNumber, cardHolder, expirationMonth, expirationYear, ccv } = formData;
  
   return (
     <div>
       <h2>Add a Card</h2>
       <form name="addCardForm" onSubmit={handleSubmit}>
       <div>
            <label htmlFor="vendor">Vendor:</label><br/>
            <select id="vendor" 
            name="vendor"
            value={vendor}
            onChange={handleChange}
            required
            >
              <option disabled></option>
              <option>MasterCard</option>
              <option>Visa</option>
              <option>Swedbank</option>
              <option>American Express</option>
            </select>
          </div>
       <div>
            <label htmlFor="bankNumber">Bank Number:</label><br/>
            <input
              type="number"
              id="bankNumber"
              name="bankNumber"
              title="Input has to be 16 characters long"
              value={bankNumber}
              onChange={handleChange}
              placeholder="XXXX-XXXX-XXXX-XXXX"
              onInput={(e) => e.target.value = e.target.value.slice(0, 16)}
              required
            />
          </div>
          <div>
      <label htmlFor="cardHolder">Card Holder:</label><br/>
      <input
              type="text"
              id="cardHolder"
              name="cardHolder"
              value={cardHolder}
              onChange={handleChange}
              disabled={cardHolder !== ""}
              required
            />
          </div>
          <div>
            <label htmlFor="expiration">Valid Through (MM/YY):</label><br/>
              <select 
              id="expirationMonth" 
              name="expirationMonth"
              value={expirationMonth}
              onChange={handleChange}
              required
              >
                  <option value="" disabled>Month</option>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
            </select>
            <select 
            id="expirationYear" 
            name="expirationYear"
            value={expirationYear}
            onChange={handleChange}
            required
            >
                  <option value="" disabled>Year</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
            </select>
          </div>
          <div>
            <label htmlFor="ccv">CCV:</label><br/>
            <input
              type="number"
              id="ccv"
              name="ccv"
              value={ccv}
              onChange={handleChange}
              required
              onInput={(e) => e.target.value = e.target.value.slice(0, 3)}
            />
          </div>
          <button type="submit" id="submitBtn"><strong>Submit</strong>
       </button>
       <button onClick={handleRandomInputs} id="randomizeInputBtn">Randomized</button> 
       <Link to="/cards"></Link></form>
     </div>
   );
 };
export default CardForm;