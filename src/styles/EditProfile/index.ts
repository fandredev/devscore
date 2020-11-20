import styled from 'styled-components'
import { fullCenter } from '../../styles/functions'

import colors from '../../constants/colors'

export const Container = styled.div`
  > form, span[id="edit-profile-span"] {
    padding: 0 2rem;
  }
  > form section[id="items-edit-profile"] {
    ${fullCenter}; 

    > div {
      background: #ddd;
      height: 50px;
      width: 50px;
    }
    > span {
      color: ${colors.gray};
      font-weight: 400;
    }
  }
`