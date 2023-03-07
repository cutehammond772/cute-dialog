import { css } from "@linaria/core";
import { styled } from "@linaria/react";

export const App = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 5rem 1fr 5rem;
  grid-template-columns: 1fr minmax(auto, 1024px) 1fr;
  row-gap: 2rem;
`;

export const Header = styled.div`
  grid-area: 1 / 1 / 2 / 4;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 1024px) 1fr;
  background-color: white;

  & > * {
    grid-area: 1 / 2 / 2 / 3;
  }
`;

export const Content = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 2rem;
`;

export const Section = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 1rem;

  & > .title {
    font-size: 3.5rem;
    font-weight: bold;
    white-space: nowrap;
  }

  & > .content {
    font-size: 2rem;
    min-height: 50rem;
  }
`;

export const Footer = styled.div`
  grid-area: 3 / 1 / 4 / 4;
  background-color: black;
  color: white;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 1024px) 1fr;

  & > * {
    grid-area: 1 / 2 / 2 / 3;
  }
`;
