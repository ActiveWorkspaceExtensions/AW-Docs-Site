import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import UserLinks from '../UserLinks'
import config from '../../../data/SiteConfig'

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${props => props.theme.branddarker};

  .nav-link {
    margin-right: 10px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    opacity: 0.6;
    -webkit-transition: opacity 0.08s ease-in;
    -moz-transition: opacity 0.08s ease-in;
    -o-transition: opacity 0.08s ease-in;
    transition: opacity 0.08s ease-in;
    text-decoration: none;
  }

  

  .nav-link:hover {
    opacity: 1;
    border-bottom: none;
  }

  .nav-link:focus {
    opacity: 1;
    border-bottom: none;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      margin-bottom: 20px;
    }

    span {
      display: none;
    }
  }
`

class Navigation extends React.Component {
  render() {
    return (
      <NavContainer>
        <section>
          <Link className="nav-link" to="/">
          <img src={config.myTCLogo} width="25px" alt="" />
            {' '}
            HOME{' '}
          </Link>
          <Link className="nav-link" to="/environment-setup">
            {' '}
            DOCS{' '}
          </Link>
          <Link className="nav-link" to="/about">
            {' '}
            ABOUT{' '}
          </Link>
        </section>
        <span>
          <UserLinks />
        </span>
      </NavContainer>
    )
  }
}

export default Navigation
