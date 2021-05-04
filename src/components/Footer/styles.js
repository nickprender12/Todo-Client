import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
  /* flex-shrink: 0; */
  padding-top: 1rem;
  color: black;
  margin-top: 12rem;
  /* background: red; */
  /* @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (max-width: 900px) {
    display: none;
  } */
`;

export const SocialButtons = styled.div`
  color: grey;
  background-color: transparent;
`;

export const Button = styled.button`
  color: grey;
  fill: grey;
  background-color: transparent;
  border: none;
  text-decoration: none;
`;

export const Text = styled.div`
  color: grey;
  font-size: small;
`;
