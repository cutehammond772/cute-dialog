import { styled } from "@linaria/react";

const GlobalStyles = styled.div`
  @import "https://fonts.googleapis.com/css2?family=Inter&display=swap";

  :global() {
    html {
      box-sizing: border-box;
      font-family: Inter, sans-serif;
    }

    html,
    body {
      margin: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }
`;

export default GlobalStyles;
