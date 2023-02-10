import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {useEffect,useState} from 'react';

function Details() {

  const [movieObj,setMovieObj]=useState();
  const movies=useSelector((state)=>state.movie.movies)
  const {id}=useParams();
  console.log(id);

  useEffect(()=>{
    console.log(movies);
    const obj=movies.filter((movie)=>{return movie.id==id})
    const obj2=obj[0];
    setMovieObj(obj2);
  },[])

  return (
    <Container>
    {movieObj && <div>  <Background>
        <img src={movieObj.cardImg} />
      </Background>
      <ImageTitle>
        <h3>{movieObj.name}</h3>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" />
        </GroupButton>
      </Controls>
      <Subtitle>
       {movieObj.year} .150m . Family .Fantasy ,Kids, Animation
      </Subtitle>
      <Description>
       {movieObj.description}
      </Description>
      </div>}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 80px);
  padding: 0 calc(3.5vw + 5px);
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.7;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  font-size: 2.2rem;
  letter-spacing: 2px;
  font-family: fangsong;
  h3{
    color:yellow;
    font-size:80px;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items:center;
`;
const PlayButton = styled.button`
  background-color: white;

  height: 50px;
  border-radius: 4px;
  color: black;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 15px;
  margin-right: 25px;
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: transparent;
  border: 1px solid black;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
`;
const AddButton = styled.button`
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  width: 40px;
  height: 40px;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
`;
const GroupButton = styled(AddButton)``;

const Subtitle=styled.div`font-size:25px;
margin-top:20px;`

const Description=styled.div`text-transform: capitalize;
margin-top:20px;
    color: snow;`

export default Details;
