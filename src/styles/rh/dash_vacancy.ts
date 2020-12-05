import styled from "styled-components"
import colors from "../../constants/colors"
import fonts from "../../constants/text"

import { fullCenter } from "../../styles/functions"

export const Main = styled.main`
  padding: 0 2rem;

  > aside[id="center-button"] {
    display: flex;
    justify-content: center;

    > button {
      width: 80%;
      margin-top: 2rem;
      font-size: 1.3rem;
    }
  }

  > section[id="details-vacancy-dash"] {
    > div {
      margin: 1.3rem auto;

      &:nth-child(5) {
        > aside {
          display: flex;
          width: 70%;

          > p {
            background: ${colors.blue_hard};
            border-radius: 50px;
            width: 22%;
            font-size: 13px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            margin: 3px 3px 0 3px;
          }
        }
      }
      &:nth-child(7) {
        > span:last-child {
          display: block;
        }
      }
      > h5 {
        color: ${colors.blue_hard};
        font-size: 1.5rem;
        font-weight: normal;
      }
      > span {
        color: ${colors.gray};
        font-size: 1.22rem;
        line-height: 23px;
      }
    }
  }
`

export const TableSection = styled.section`
  > table {
    width: 100%;
    border-collapse: collapse;

    > tr {
      ${fullCenter};
      > td {
        border-bottom: 1px solid #dddddd;
        width: 100%;
        padding: 0 1rem;
        font-family: ${fonts.tertiary};
        margin: 0.8rem 0;

        &:nth-child(3) {
          > p {
            color: ${colors.green};
          }
        }
        &:nth-child(5) {
          > p {
            color: aquamarine;
          }
        }
        > span {
          color: ${colors.table_items};
          font-size: 1.7rem;
          font-style: normal;
          font-weight: 500;
        }
        > p {
          color: #6e6893;
          letter-spacing: 0.05em;
          font-size: 1.3rem;
        }
      }
    }
  }
`
