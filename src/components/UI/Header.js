import styled from "styled-components";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {signIn,signOutUser} from '../../features/UserSlice';
import { auth, provider } from "../../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Header() {
  const uname = useSelector((state) => state.user.name);
  const uphoto = useSelector((state) => state.user.photo);
  const [user,setUser]=useState();

  let navigate=useNavigate();

  const dispatch = useDispatch();

  useEffect(()=>{auth.onAuthStateChanged(async (user)=>{
    if(user){
        dispatch(signIn(user));
        navigate('/');
    }
  })},[])

  const LoginHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);

        const userDetail={
            name:result.user.displayName,
            email:result.user.email,
            photo:result.user.photoURL
        }
        setUser(userDetail);
        dispatch(signIn(userDetail));
        navigate('/');
        
        
      
      
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // // IdP data available using getAdditionalUserInfo(result)
        // // ...
      })
     
  };

  const LogoutHandler=()=>{
    signOut(auth).then(()=>{dispatch(signOutUser())});
    navigate('/login');
  }
  return (
    <Navbar>
      <Logo src="./images/logo.svg" />
      {uname ? (
        <>
          <NavMenu>
            <a>
              <img src="./images/home-icon.svg" />
              <span>Home</span>
            </a>
            <a>
              <img src="./images/original-icon.svg" />
              <span>Original</span>
            </a>
            <a>
              <img src="./images/watchlist-icon.svg" />
              <span>Watchlist</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" />
              <span>Search</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>Movies</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" />
              <span>Series</span>
            </a>
          </NavMenu>
          <ProfileImg onClick={LogoutHandler}>
            <img src={uphoto} />
          </ProfileImg>
        </>
      ) : (
        <LoginContainer>
          <Login onClick={LoginHandler}>Login</Login>
        </LoginContainer>
      )}
    </Navbar>
  );
}

const Navbar = styled.nav`
  background-color: #090b13;
  height: 80px;
  display: flex;
  overflow-x: hidden;
`;

const Logo = styled.img`
  margin-bottom: 20px;
  margin-left: 10px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;

  a {
    display: flex;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 15px;
      letter-spacing: 1px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        transform: translateX(0);
        transform-origin: left center;
        transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.9) 0s;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: translateX(1);
      }
    }
  }
`;
const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  margin: 15px 72px 0px 43px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const LoginConatiner = styled.div``;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 8px 20px;
  border-radius: 5px;

  &:hover {
    border: transparent;
    background-color: #f9f9f9;
    color: black;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  height: 40px;
  margin: 20px 20px 0px;
`;
export default Header;
