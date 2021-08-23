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
  const currentCardsQuantity = () => cardsToRender.length + addCardQuantity;
  const init = (cardList) => {
    setCards(cardList);
    setCardsToRender(cardList.filter((el, i) => i < initialCardQuantity && el));
  };

  const handleClick = () =>
    setCardsToRender(cards.filter((el, i) => i < currentCardsQuantity() && el));

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

  return {
    handleClick,
    cardsToRender,
    init,
    isButtonActive,
  };
}

export default useAddButton;
