import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import logoImage from '../../images/logo.png'
import banner from '../../images/banner11.jpg'

//import components
import DataBar from './DataBar/Databar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
 
// css ___________________________________________________________________

const Main = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Left = styled.div`
  height: 100vh;
  width: 40vw;
  display: flex;
  align-items: center;
  flex-direction: column; 
  padding: 60px 0 60px 60px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  width:100%;
`;
const Logo = styled.img`
  margin-right: 30px;
  height: 120px;
  width: auto;
`;
const Title = styled.h2`
  color: #F28D2C;
`;

const Text = styled.div`
  max-width: 350px;
  margin-top: 40px;
`;
const Right = styled.div`
  height: 100vh;
  width: 80vw;
  background-color:#20394E;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  clip-path: polygon(220px 0, 100% 0, 100% 100%, 0% 100%);    
  padding-left: 45px;
`;
const Photo = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-position: center;

  height: 100vh;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  clip-path: polygon(220px 0, 100% 0, 100% 100%, 0% 100%);
`;
const ChevronLeft = styled.div`
  cursor: pointer;
  position: absolute;
  top: calc(50vh - 20px);
  left: 20px;
  font-size: 40px;
  opacity: 0.8;
`;
const ChevronRight = styled.div`
  cursor: pointer;
  position: absolute;
  top: calc(50vh - 20px);
  right: 20px;
  font-size: 40px;
  color: white;
  z-index:1;
  opacity: 0.8;
`;
const LiveDots = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 40px;
  z-index:1;
  justify-content: center;
  div{
    height:10px;
    width: 10px;
    margin: 0 20px;
    border-radius:999px;
    background-color: white;
    opacity: 0.5;
    filter: drop-shadow(0px 0px 2px rgba(0,0,0,0.5));
    cursor: pointer;
  }
`;

function TopSlider(props) {

  // team texten
  const teamTexts = [
    {
      teamnaam: 'Tenderfeet MSE 1',
      text: 'MSE 1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br></br> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.<br></br> Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,<br></br> rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
    },
    {
      teamnaam: 'Tenderfeet VSE 1',
      teamcode: 538,
      text: 'VSE 1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br></br> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.<br></br> Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,<br></br> rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
    },
    {
      teamnaam: 'G-Team',
      text: 'G-Team Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br></br> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.<br></br> Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,<br></br> rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
    },
    {
      teamnaam: 'Heren recreanten',
      text: 'Heren Recreanten Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br></br> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.<br></br> Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,<br></br> rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
    }
  ]
  // state
  const [teams, setTeams] = useState(teamTexts);
  const [index, setIndex] = useState(0);


  
  // //component did mount
  // useEffect(() => {
  //   if(teams && teams.length >= 0){
  //     setTeams(teams => [props.teams[0], ...teams])
  //   }
  // }, [])



  function indexUp(){
    if(index >= teamTexts.length-1){
      setIndex(0)
    }
    else{
      setIndex(index + 1)
    }
  }

  function indexDown(){
    if(index <= 0){
      setIndex(teamTexts.length-1)
    }
    else{
      setIndex(index - 1)
    }
  }
  console.log(index,'index')


  return (
    <Main>
        <ChevronLeft>
          <FontAwesomeIcon onClick={indexDown} icon={faChevronLeft}/>
        </ChevronLeft>
        <ChevronRight>
          <FontAwesomeIcon onClick={indexUp} icon={faChevronRight}/>
        </ChevronRight>
        <Left>
          <Top>
            <Logo src={logoImage}/>
            <Title>{teamTexts[index]?.teamnaam}</Title>
          </Top>
          {/* <p>geladen {props.teams[0] && props.teams[0].teamnaam}</p> */}
          <Text>
            {/* {
              teams.map(function(item, i){
                if(teams && teams[index]?.text){
                  return(
                    <p key={i} dangerouslySetInnerHTML={{__html: `${item.text}`}} />
                  )
                }
              })
            } */}
            <p dangerouslySetInnerHTML={{__html: `${teamTexts[index]?.text}`}} />
          </Text>
        </Left>
        <Right>
          <Photo>

          </Photo>
        </Right>
        {  props.teams && props.teams.length > 0 && props.teams.map(function(item, i){
          console.log(item.teamcode)
          if(teamTexts[index]?.teamcode){
            return <DataBar pouleStand={props.pouleStand} team={teams[index]}/>
          }
        })
        }
        <LiveDots>
            {
              teamTexts.map(function(item, i){
                return(
                  <div style={index === i ? {opacity: 1} : null} onClick={() => {setIndex(i)}} id={"livedot"+i} key={i}></div>
                )
              })
            }
        </LiveDots>
    </Main>
  );
}

export default TopSlider;