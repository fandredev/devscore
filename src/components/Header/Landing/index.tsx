import BurgerMenu from '../../BurgerMenu'
import React, { useEffect, useState } from 'react'
import ItemsList from './ItemsList/index';

export default function Header(){
  const [width, setWidth] = useState<number>(0)
  const handleWindowState = () => setWidth(window.innerWidth);

   useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowState);
    return () => window.removeEventListener("resize", handleWindowState);

  }, [handleWindowState]);
  return (
    width <= 600 ? (
      <BurgerMenu />
    ):
      <ItemsList />
  )
}
