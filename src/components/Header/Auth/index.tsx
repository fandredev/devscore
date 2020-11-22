import BurgerMenu from "../../BurgerMenu"
import React, { useEffect, useState } from "react"
import DashItemsList from "./DashItemsList"
import { Container } from "../../../styles/GlobalHeader"
import Image from "next/image"

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
          <Image
            src="/images/devscore.svg"
            alt="Devscore"
            width={200}
            height={200}
          />
        </figure>
      </Container>
    </>
  ) : (
    <DashItemsList />
  )
}
