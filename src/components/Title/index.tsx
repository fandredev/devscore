import React from 'react'
import { TitleProps } from '../../interfaces'
import { TitleStyled } from './styled'

const Title: React.FC<TitleProps> = ({ children, id }) : JSX.Element => <TitleStyled id={id}>{children}</TitleStyled>

export default Title
