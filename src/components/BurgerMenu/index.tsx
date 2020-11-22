import { slide as Menu } from "react-burger-menu"
import { styles, Container, Navigate } from "./styled"
import { _Button } from "../Button/styled"
import colors from "../../constants/colors"
import Link from "next/link"
import Image from "next/image"

const BurgerMenu: React.FC = (): JSX.Element => {
  return (
    <Menu styles={styles}>
      <Container>
        <figure>
          <Image
            src="/images/devscore.svg"
            alt="Devscore"
            width={200}
            height={200}
          />
        </figure>
        <ol>
          <li>
            <Link href="/">
              <Navigate>Início</Navigate>
            </Link>
          </li>
          <li>Como funciona</li>
          <li>
            <Link href="/login">
              <Navigate>Login</Navigate>
            </Link>
          </li>
          <li>
            <_Button bg={colors.blue_hard}>Avaliar candidatos</_Button>
          </li>
        </ol>
      </Container>
    </Menu>
  )
}

export default BurgerMenu
