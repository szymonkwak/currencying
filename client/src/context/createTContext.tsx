import * as React from 'react';

export function createTContext<T extends {} | null>() {
  const context = React.createContext<T | undefined>(undefined);

  const useTContext = () => {
    const c = React.useContext(context);
    if (c === undefined) {
      throw new Error('Context is undefined');
    }
    return c;
  };
  return [useTContext, context] as const;
}
