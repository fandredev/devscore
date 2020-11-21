import React, {
  useState,
  useContext,
  useCallback,
  createContext,
  ReactNode,
} from "react";
interface WidthProps<T> {
  readonly width: T;
  handleWindowState() : void,
}
const ResponsiveContext = createContext<WidthProps<number>>({} as WidthProps<number>)

export default function ResponsiveProvider({ children }: ReactNode | any) {
  const [width, setWidth] = useState(0);

  const handleWindowState = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  const state = { width, handleWindowState, setWidth };
  Object.freeze(state);
  return <ResponsiveContext.Provider value={state}>
    {children}
  </ResponsiveContext.Provider>;
}
export function useResponsiveContext(){
  const context = useContext(ResponsiveContext)
  if(!context) return new Error('useResponsiveContext must be wrapper ResponsiveContext')

  const { width, handleWindowState} = context
  return {
    width, handleWindowState
  }
}
