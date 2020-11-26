import BurgerMenu from "../../BurgerMenu"
import React, { useEffect, useState } from "react"
import DashItemsList from "./DashItemsList"
import { Container } from "../../../styles/GlobalHeader"

export default function DashRh(): JSX.Element {
  const [width, setWidth] = useState<number>(0)
  const handleWindowState = () => setWidth(window.innerWidth)

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowState)
    return () => window.removeEventListener("resize", handleWindowState)
  }, [handleWindowState])

  return width <= 600 ? (
    <>
      <BurgerMenu />
      <Container>
        <figure id="responsive">
          <img src="/images/devscore.svg" alt="Devscore" />
        </figure>
      </Container>
    </>
  ) : (
    <DashItemsList name="Renata" />
  )
}
