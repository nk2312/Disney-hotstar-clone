import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
      </Wrap>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap:25px;
  margin-top:50px;
`;

const Wrap = styled.div`
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: 0px 2px 8px;
border-radius: 23px;
height:100px;
transition :all 250ms cubic-bezier(0.25,0.46,0.45,0.9) 0s;
 img{
    width:100%;
    height:100%;
    object-fit:cover;
 }
 &:hover{
    transform:scale(1.05);
    border:3px solid rgba(249,249,249,0.8);
 }
`;

export default Viewers;
