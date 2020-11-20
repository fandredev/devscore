import { ReactNode } from 'react'
import { TypesButton } from '../types'

export interface FormikRegisterValues<T, U> {
  name: T
  company_name: T
  email: T
  password: T
  confirm_password: T
  terms: U
}

export interface FormikLoginValues<T> {
  email:T,
  password: T
}

export interface FormikForgotPassword<T> {
  email: T
}

export interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  bg: string
  type?: TypesButton
  id?: string
}

export interface CardProps<T> {
  url: T,
  alt: T,
  text: T
}

export interface PropsFooter {
  id?: string
}

export interface IntDashListItems<T> {
  name: T
}

export interface LastTestingRealizedProps<T,U> {
  image: T
  alt: T
  name_people: T
  score: U
  vacancy: T
  date: T
}

export interface PlacesProps<T, U, V> {
  image?: T
  alt: T
  title: T
  number_of_tests: U,
  level: T,
  date: T,
  status: V
}

export interface PopulatedArrayYourPlaces {
  alt: string
  image: string
  title: string
  number_of_tests: number[]
  level: string
  date: string
  status: boolean
}
export interface PopulatedArrayYourLastTesting {
  alt: string
  image: string
  name_people: string
  score: any
  vacancy: string
  date: string
}

// context api
export interface ChildrenProps<RN> {
  children: RN;
}
