import React from 'react';

function useWindowWidth() {
  let resizeTimeout = null;
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const changeWindowWidth = () => setWindowWidth(window.innerWidth);
  const delayedChangeWindowWidth = () => {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        changeWindowWidth();
      }, 130);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', delayedChangeWindowWidth, false);
    return () => {
      window.removeEventListener('resize', delayedChangeWindowWidth, false);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
