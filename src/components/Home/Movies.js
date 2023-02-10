import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Movies() {
    const movies=useSelector((state)=>state.movie.movies)
  return (
    <Container>
        <h4>Recommended Movies For You</h4>
        <Content>
           {movies && movies.map(movie=>{return <Wrap key={movie.id}>
               <Link to={`/details/${movie.id}`}><img src={movie.cardImg}/></Link>
                <p>
                  <span>{movie.name}</span>
                  -
                  <span>{movie.year}</span>
                </p>
            </Wrap>})}
        </Content>
    </Container>
  )
}

const Container=styled.div`
margin-top:50px;
h4{
  font-size: 25px;
    font-family: ui-serif;
}`

const Content=styled.div`
display:grid;
grid-gap:55px;
grid-template-columns:repeat(4,minmax(0,1fr));
height:620px;`

const Wrap=styled.div`
width: 240px;
height: 240px;
border:3px solid rgba(249,249,249,0.1);
border-radius:10px;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition :all 250ms cubic-bezier(0.25,0.46,0.45,0.9) 0s;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
&:hover{
    transform:Scale(1.05);
    border:3px solid rgba(249,249,249,0.8);
}
p{
  text-align: center;
    width: 220px;
}
span{
  font-weight: bold;
    margin: 0 5px;
    font-size: 15px;
    font-family: cursive;
}`
export default Movies