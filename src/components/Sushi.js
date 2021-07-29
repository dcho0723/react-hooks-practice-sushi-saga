import React, {useState} from "react";

function Sushi({ name, image, price }) {
  const [buttonClick, setButtonClick] = useState (false)


  function handleClick() {
    setButtonClick(!buttonClick)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {buttonClick ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
