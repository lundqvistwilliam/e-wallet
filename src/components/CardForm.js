import { useState,useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom'

 const CardForm = ({ onSubmit, formData, setFormData}) => {
    const [randomUserName, setRandomUserName] = useState("");
    const navigate = useNavigate();

   const handleChange = (e) => {
     const { name, value } = e.target;
     console.log(`Updating ${name} to ${value}`);
     setFormData({ ...formData, [name]: value });
 }

   const handleSubmit = (e) => {
     e.preventDefault();
     onSubmit(formData);
     navigate("/cards");
     console.log('Form submitted:', formData);
   }

   const fetchRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const userData = await response.json();
    const { first, last } = userData.results[0].name;
    const randomUserFullName = `${first} ${last}`;
    setRandomUserName(randomUserFullName);
    setFormData({ ...formData, cardHolder: randomUserFullName });
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);


   return (
     <div>
       <h2>Add a Card</h2>
       <form onSubmit={handleSubmit}>
       <div>
            <label htmlFor="vendor">Vendor:</label><br/>
            <select id="vendor" 
            name="vendor"
            value={formData.vendor}
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
              value={formData.bankNumber}
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
              value={formData.cardHolder}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="expiration">Valid Through (MM/YY):</label><br/>
              <select 
              id="expirationMonth" 
              name="expirationMonth"
              value={formData.expirationMonth}
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
            value={formData.expirationYear}
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
              value={formData.ccv}
              onChange={handleChange}
              required
              onInput={(e) => e.target.value = e.target.value.slice(0, 3)}
            />
          </div>
          <button type="submit"><strong>Submit</strong>
       </button>
       <Link to="/cards"></Link></form>
       <button onClick={fetchRandomUser}>Random User</button>
     </div>
   );
 };
export default CardForm;
