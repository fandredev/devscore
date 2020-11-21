import type { TypesButton, Children } from '../types'

//formik
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
export interface FormikForgotPasswordValues<T> {
  email: T
}
export interface FormikEditProfile {
  password_now: string
  password: string
  confirm_password: string
}

export interface FormikCreateVacancyProps {
  vacancy_name: string
  level: string
  date: string
}

// components
export interface ButtonProps {
  children: Children
  disabled?: boolean
  bg: string
  type?: TypesButton
  id?: string
}
export interface CheckboxProps {
  checked?: boolean
  number: string | number
}
export interface CardProps<T> {
  url: T,
  alt: T,
  text: T
}
export interface PropsFooter {
  id?: string
}
export interface ItemsDashHeader<T> {
  readonly name?: T
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
export interface TechnologiesVacancyProps {
  image: string
  tech: string
}

// helpers
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

export interface TitleProps {
  children: Children,
  id?: string
}
