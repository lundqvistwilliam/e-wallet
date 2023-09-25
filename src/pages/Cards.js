import { useState } from "react";
import { Link } from "react-router-dom";

export const Cards = ({cards,setCards}) => {
    const [activeCard,setActiveCard] =useState(-1)
    const handleCardClick = (index) => {
        setActiveCard(index);
      };

    return (
        <div className="cardDiv">
          <h2>Your Cards</h2>
          <p><Link to="/addcards">Add card</Link></p>
          <div className="container">
        {activeCard !== -1 && (
          <>
          <h3>Active Card</h3>
          <div
            className={`card ${
              activeCard === activeCard ? "active" : ""
            } ${cards[activeCard].vendor === "Visa" ? "visa" : ""} ${
              cards[activeCard].vendor === "Swedbank" ? "swedbank" : ""
            } ${cards[activeCard].vendor === "MasterCard" ? "mastercard" : ""} ${
              cards[activeCard].vendor === "American Express" ? "amex" : ""
            }`}
            onClick={() => handleCardClick(activeCard)}
          >
            <div className="card">
              <div className="vendor_text">
                {/* Add logo image? */}
                {cards[activeCard].vendor}
              </div>
              <div className="card_bankNumber">
                <img
                  src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                  alt=""
                />
                <p>{cards[activeCard].bankNumber}</p>
              </div>
              <div className="card_info ">
                <p>{cards[activeCard].cardHolder}</p>
                <p>CCV {cards[activeCard].ccv}</p>
                <p>
                  {cards[activeCard].expirationMonth} /{" "}
                  {cards[activeCard].expirationYear}
                </p>
              </div>
            </div>
          </div>
          </>
        )}

        <h3>Cards</h3>
        {cards.map((card, index) => (
          index !== activeCard && (
            <div
              key={index}
              className={`card ${index === activeCard ? "active" : ""}${
                card.vendor === "Visa" ? " visa" : ""
              } ${
                card.vendor === "Swedbank" ? " swedbank" : ""
              } ${
                card.vendor === "MasterCard" ? " mastercard" : ""
              } ${
                card.vendor === "American Express" ? " amex" : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card">
                <div className="vendor_text">
                  {/* Add logo image? */}
                  {card.vendor}
                </div>
                <div className="card_bankNumber">
                  <img
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                    alt=""
                  />
                  <p>{card.bankNumber}</p>
                </div>
                <div className="card_info ">
                  <p>{card.cardHolder}</p>
                  <p>CCV {card.ccv}</p>
                  <p>
                    {card.expirationMonth} / {card.expirationYear}
                  </p>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>  
    );      
}
