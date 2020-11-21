import styled from 'styled-components'


export const TitleStyled = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #1A202C;

  &[id="edit-profile-title"] {
    @media (min-width: 600px) and (max-width: 1000px) {
      margin-top: 3rem;
    }
  }
  &[id="question_now"], &[id="number_of_questions"]{
    font-size: 2rem;
    @media (min-width: 1000px) {
      text-align: left;
      width: 100%;
    }
  }
  &[id="question_now"]{
    @media (min-width: 1000px) {
      font-size: 2.3rem;
      line-height: 3.3rem;
    }
  }
  &[id="time-resting"] {
    @media (min-width: 1000px) {
     font-size: 2rem;
      text-align: left;
    }
  }
`
