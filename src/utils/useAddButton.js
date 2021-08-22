import React from 'react';
import useWindowWidth from './useWindowWidth';
function useAddButton() {
  const width = useWindowWidth();
  const [initialCardQuantity, setInitialCardQuantity] = React.useState(0);
  const [addCardQuantity, setAddCardQuantity] = React.useState();
  const [currentPortion, setCurrentPortion] = React.useState(1);
  const [cardsToRender, setCardsToRender] = React.useState([]);

  const handleClick = () => setCurrentPortion(currentPortion + 1);

  React.useEffect(() => {
    setAddCardQuantity(width > 1279 ? 3 : 2);
    if (width > 1270) {
      setInitialCardQuantity(12);
    } else if (width < 480) {
      setInitialCardQuantity(5);
    } else {
      setInitialCardQuantity(8);
    }
  }, [width]);

  const init = (cardList) => {
    setCardsToRender(
      cardList.filter((element, i, arr) => {
        if (i < initialCardQuantity) {
          return element === arr[i];
        }
      }),
    );
  };

  // console.log(addCardQuantity, initialCardQuantity, cardsToRender);

  return {
    handleClick,
    cardsToRender,
    init,
  };
}

export default useAddButton;
