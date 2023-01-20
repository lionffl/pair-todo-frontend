import React from 'react';

export const FlashContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export default function FlashContextProvider({ children }) {
  const [hasFlash, setFlash] = React.useState(false);
  const [flashMsg, setFlashMsg] = React.useState('');

  React.useEffect(() => {
    let timer;
    if (hasFlash) {
      timer = setTimeout(() => {
        setFlash(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  });

  const flash = (message) => {
    setFlash(true);
    setFlashMsg(message);
  };

  const globalState = React.useMemo(() => ({
    hasFlash,
    setFlash,
    flash,
    flashMsg,
  }));

  return (
    <FlashContext.Provider value={globalState}>
      {children}
    </FlashContext.Provider>
  );
}
