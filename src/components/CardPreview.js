import { useState,useEffect } from "react";

const CardPreview = ({ formData,cardHolder }) => {
  const [cardClassName, setCardClassName] = useState("card");

  useEffect(() => {
    if (formData.vendor === "Visa") {
      setCardClassName("card visa");
    } else if (formData.vendor === "Swedbank") {
      setCardClassName("card swedbank");
    } else if (formData.vendor === "MasterCard") {
      setCardClassName("card mastercard");
    } else if (formData.vendor === "American Express") {
        setCardClassName("card amex");
      }else {
      setCardClassName("card default");
    }
  }, [formData]);

  return (
    <div className="cardDiv">
      <h2>Card Preview</h2>
      <div className="container">
        <div className={cardClassName}>
          <div className="vendor_text">{formData.vendor}</div>
          <div className="card_bankNumber">
            <img
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
              alt=""
            />
            <p>{formData.bankNumber}</p>
          </div>
          <div className="card_info preview">
            <p>{cardHolder}</p>
            <p>CCV {formData.ccv}</p>
            <p>
              {formData.expirationMonth} / {formData.expirationYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
