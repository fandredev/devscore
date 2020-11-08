import styled from 'styled-components'
export const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: "28px",
    height: "25px",
    left: "21px",
    top: "13px",
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#212737'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export const Container = styled.section`
  > figure {
    > img {
      width: 70%;
    }
  }
  > ol {
    line-height: 4rem;
    margin: 1rem auto;
  }
`
export const Navigate = styled.a`text-decoration: none`

Object.freeze(styles)
