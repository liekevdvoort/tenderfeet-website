import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import '../Variables.scss'


function Sponsors(props) {
 
  // css ___________________________________________________________________

  const Main = styled.div`
    padding: 60px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    background-color: #EDEFF4;
    h2{
      margin-bottom: 30px;
    }
  `;

  return (
    <Main>
      <h2>Sponsoren</h2>
    </Main>
  );
}

export default Sponsors;
