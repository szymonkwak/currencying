import { useState, ReactNode } from 'react';
import { createTContext } from './createTContext';

interface User {
  user: {
    name: string;
    email: string;
    plnBalance: number;
    usdBalance: number;
    eurBalance: number;
    chfBalance: number;
  };
}

export const [useTContext, UserContext] = createTContext<User>();

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();

  // TODO funkcja do ustawiania usera - pewnie z serwera get

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
