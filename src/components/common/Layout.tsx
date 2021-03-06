import React from 'react';
import { createGlobalStyle } from 'styled-components';
import colors from '../../lib/styles/colors';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <GlobalStyled />
      {children}
    </React.Fragment>
  );
}

const GlobalStyled = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: auto;
    background: ${colors.black};
    font-family: -apple-system, BlinkMacSystemFont, 'Jua', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }

  a, a:link, a:visited, a:hover, a:focus {
		text-decoration: none;
		color: unset;
	}

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Layout;
