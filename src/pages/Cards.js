
export const Cards = ({cards}) => {
    console.log('Rendered Cards component');
    console.log('Received cards:', cards);

    return (
        <div>
          <h2>Your Cards</h2>
          <div className="container">
          {cards.map((card, index) => (
          <div className={`card${card.vendor === "Visa" ? " visa" : ""}${card.vendor === "Swedbank" ? " swedbank" : ""}${card.vendor === "MasterCard" ? " mastercard" : ""}${card.vendor === "American Express" ? " amex" : ""}`}>
          <div className="card">
                <div className="vendor_text">
                  {/* Add logo image? */}
                  {card.vendor}
                </div>
                <div className="card_bankNumber">
                  <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt="" />
                  <p>{card.bankNumber}</p>
                </div>
                <div className="card_info ">
                  <p>{card.cardHolder}</p>
                  <p>CCV {card.ccv}</p>
                  <p>{card.expirationMonth} / {card.expirationYear}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      );      
}