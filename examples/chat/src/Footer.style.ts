import { css } from "@linaria/core";

export const info = css`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  row-gap: 1rem;

  & .subject {
    color: white;
    background-color: navy;
    padding: 0.25rem;
    border-radius: 0.25rem;
    user-select: none;
  }
`;
