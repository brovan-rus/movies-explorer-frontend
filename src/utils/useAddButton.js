import React from 'react';
import useWindowWidth from './useWindowWidth';
function useAddButton() {
  const width = useWindowWidth();
  const [initialCardQuantity, setInitialCardQuantity] = React.useState(0);
  const [addCardQuantity, setAddCardQuantity] = React.useState();
  const [cardsToRender, setCardsToRender] = React.useState([]);
  const [cards, setCards] = React.useState([]);
  const [isButtonActive, setIsButtonActive] = React.useState(false);

  const checkIsButtonActive = () =>
    cards.length > cardsToRender.length ||
    (cards.length === cardsToRender.length && !cards.length === 0);

  console.log(cards.length, cardsToRender.length);
  const currentCardsQuantity = () => cardsToRender.length + addCardQuantity;

  const init = (cardList) => {
    setCards(cardList);
    setCardsToRender(
      cardList.filter((element, i, arr) => {
        if (i < initialCardQuantity) {
          return element === arr[i];
        }
      }),
    );
  };

  const handleClick = () => {
    setCardsToRender(
      cards.filter((element, i, arr) => {
        if (i < currentCardsQuantity()) {
          return element === arr[i];
        }
      }),
    );
    setIsButtonActive(checkIsButtonActive());
  };

  React.useEffect(() => {
    setIsButtonActive(checkIsButtonActive());
  }, [cards, cardsToRender]);

  React.useEffect(() => {
    setAddCardQuantity(width > 1279 ? 3 : 2);
    if (width > 1270) {
      setInitialCardQuantity(12);
    } else if (width < 768) {
      setInitialCardQuantity(5);
    } else {
      setInitialCardQuantity(8);
    }
  }, [width]);

  console.log(addCardQuantity, initialCardQuantity, cardsToRender, isButtonActive, cards);

  return {
    handleClick,
    cardsToRender,
    init,
    isButtonActive,
  };
}

export default useAddButton;
