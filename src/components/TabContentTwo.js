import React from 'react'
import {Button} from './Button'
import styled from 'styled-components'
import ImgTv from '../images/tab-tv.png'
import ImgTablet from '../images/tab-tablet.png'
import ImgMac from '../images/tab-macbook.png'
export default function TabContentTwo() {
    return (
        <TabContainer>
            <div className = "tab-content">
            <div className= "tab-top-content">
            <span>Watch TV shows and movies enytime , anywhere - 
            personalized for you.
            </span>
             <Button>try it now</Button>
            </div>
            </div>
           <div className = "tab-bottom-content">
           {
               //tv
           }    
           <div>
           <img src={ImgTv} alt="" style = {{width : '18.75rem'}} />
           <h3>Watch on your TV</h3>
           <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, blu-ray and more.</p>
           </div>
           {
            //table
        }    
        <div>
        <img src={ImgTablet} alt="" style = {{width : '18.75rem',paddingTop:'0.625rem'}} />
        <h3>Watch on your TV</h3>
        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, blu-ray and more.</p>
        </div>
        {
            //mac
        }    
        <div>
        <img src={ImgMac} alt="" style = {{width : '18.75rem',paddingTop:'0.625rem',paddingBottom:'0.625rem' }} />
        <h3>Watch on your TV</h3>
        <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, blu-ray and more.</p>
        </div>
           </div>
        </TabContainer>
    )
}

// const  main
 

const TabContainer  = styled.div`
  background : var(--main-deep-dark);

  .tab-content{
      margin : 0 15%;

  }
//   tab top content
.tab-top-content{
    display : flex ;
    justify-content : space-around;
    align-items : center ;
    padding : 2.5rem 0;
}
//  tab btom 
 .tab-bottom-content{
    margin : 0 15%;
     display: grid ;
    grid-template-columns : repeat(3, 1fr);
    grid-gap : 2rem;
    text-align : center;
    margin-top : 2rem;
 }
 h3{
     margin : 0.5rem 0;
 }
 p{
     color : var(--main-grey);

 }
`
