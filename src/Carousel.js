import { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = props.cardData[cardIdx];
  const total = props.cardData.length;
  const goForward = () => {
    console.log("click forward");
    console.log(total);
    if (cardIdx < total - 1) setCardIdx(cardIdx + 1);
  };
  const goBackward = () => {
    console.log("click backward");
    console.log(total);
    if (cardIdx > 0) setCardIdx(cardIdx - 1);
  };

  // without using the ternary operator like I did below
  //   const leftArrow = () => {
  //     if (cardIdx > 0) {
  //     return <i className="fas fa-chevron-circle-left fa-2x" onClick={goBackward} data-testid="left-arrow" />;
  //     } else {
  //     return <i></i>;
  //     }
  //     }

  // You could also use this trick where you use the short-circuit nature of &&
  //   {cardIdx > 0 && (
  //     <i
  //       className="fas fa-chevron-circle-left fa-2x"
  //       onClick={goBackward}
  //       data-testid="left-arrow"
  //     />
  //   )}

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        {cardIdx > 0 ? (
          <i
            className="fas fa-chevron-circle-left fa-2x"
            onClick={goBackward}
            data-testid="left-arrow"
          />
        ) : (
          <i></i>
        )}
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        {cardIdx < total - 1 ? (
          <i
            className="fas fa-chevron-circle-right fa-2x"
            onClick={goForward}
            data-testid="right-arrow"
          />
        ) : (
          <i></i>
        )}
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash",
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash",
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash",
    },
  ],
  title: "Shells from far away beaches.",
};

export default Carousel;
