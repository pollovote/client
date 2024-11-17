import { createContext, useContext } from 'react';

export class RootStore {
  constructor() {}
}

export const ContextStore = createContext<RootStore>({} as RootStore);
export const useStore = () => useContext<RootStore>(ContextStore);
