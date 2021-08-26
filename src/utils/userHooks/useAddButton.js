import React from 'react';
import useWindowWidth from './useWindowWidth';
import { res } from '../constants';
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

  React.useEffect(() => {
    setCardsToRender(
      cards.filter(
        (el, i) =>
          i < (cardsToRender.length === 0 ? initialCardQuantity : cardsToRender.length) && el,
      ),
    );
  }, [cards]);

  const init = (cardList) => setCards(cardList);
  const handleClick = () =>
    setCardsToRender(cards.filter((el, i) => i < currentCardsQuantity() && el));

  React.useEffect(() => {
    setIsButtonActive(checkIsButtonActive());
  }, [cards, cardsToRender]);

  React.useEffect(() => {
    setAddCardQuantity(width > res.wide.res - 1 ? res.wide.addCards : res.mid.addCards);
    if (width > res.wide.res - 1) {
      setInitialCardQuantity(res.wide.initCards);
    } else if (width < res.mid.res) {
      setInitialCardQuantity(res.low.initCards);
    } else {
      setInitialCardQuantity(res.mid.initCards);
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
