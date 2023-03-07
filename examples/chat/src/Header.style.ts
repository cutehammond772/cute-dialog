import { css } from "@linaria/core";

export const title = css`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  line-height: 100%;
  user-select: none;
  white-space: nowrap;

  & > .main {
    font-weight: bold;
    font-size: 1.5rem;
  }

  & > .subject {
    background-color: bisque;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const menu = css`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  line-height: 100%;

  & > .github {
    color: white;
    background-color: navy;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
  }
`;
