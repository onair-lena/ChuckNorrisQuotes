import { createContext, useState } from 'react';

interface AppContextInterface {
  error: string;
  setError: (value: string) => void;
}
interface AppContextProviderProps {
  children?: React.ReactNode;
}

export const appContext = createContext<AppContextInterface>({
  error: '',
  setError: () => {},
});

function AppContextProvider({ children }: AppContextProviderProps) {
  const [error, setError] = useState('');

  return (
    <appContext.Provider value={{ error, setError }}>
      {children}
    </appContext.Provider>
  );
}

export default AppContextProvider;
