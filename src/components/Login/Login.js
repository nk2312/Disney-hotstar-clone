import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
   <Container>
    <Content>
    <Names  src="/images/cta-logo-one.svg"/>
    <Button>
        GET All THERE
    </Button> 
    <Wrap>
        <img src="/images/cta-logo-two.png"/>
    </Wrap>
    </Content>
   </Container>
  )
}
const Content=styled.div`
background-color:transparent;
width:50%;
height:40%;`

const Container=styled.div`
height: calc(100vh - 80px);
position:relative;
display:flex;
justify-content:center;
align-items:center;
&:before {
    z-index:-1;
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:url("/images/login-background.jpg") center center / cover no-repeat fixed;
}
`
const Names=styled.img``
const Wrap=styled.div`
margin-top:50px;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}`

const Button=styled.button`
background-color:blue;
text-align:center;
border:none;
width:97%;
height:38px;
border-radius:5px;
color:#fff;
font-weight:500;
font-size:13px;
margin:10px 5px;
`

export default Login