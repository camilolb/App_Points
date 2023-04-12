import React, {useEffect} from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export const LoadingContext = React.createContext({
  setLoading: (isLoading: boolean) => {
    // TODO
    console.log(isLoading);
  },
});

export function LoadingProvider({children}: {children: React.ReactNode}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const setLoading = (value: boolean) => {
    setIsLoading(value);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 10000);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{setLoading}}>
      <Spinner
        color={'black'}
        overlayColor={'white'}
        textContent={'Loading...'}
        visible={isLoading}
      />
      {children}
    </LoadingContext.Provider>
  );
}
