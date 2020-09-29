import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import {sphere} from 'react-icons-kit/icomoon/sphere'
import {arrow_down} from 'react-icons-kit/ikons/arrow_down'
export default class Footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             langContent : false,
             langChose : 'English'
        }
    }
    handlerToggle = (e)=>{
        e.preventDefault();
        this.setState({
            langContent : !this.state.langContent,
            
        })
    }
    handlerPickLanguge = (lang) =>{
        this.setState({
            langContent : !this.state.langContent,
            langChose : lang
            
        })
    }
    render() {
        return (
            <FooterContainer>
                <span style={{display:'block', width: '75%' , margin: 'auto' ,  fontSize: '1.125rem'}}>Questions? <Link>Call 1-877-742-1335</Link></span>
                <div className="footer-columns">
                 <ul>
                 <li><Link>FAQ</Link></li>
                 <li><Link>Incestor Relations</Link></li>
                 <li><Link>Ways to Watch</Link></li>
                 <li><Link>Corporte Information</Link></li>
                 <li><Link>Netflix Originals</Link></li>
                 </ul>

               

                 <ul>
                 <li><Link>Help Center</Link></li>
                 <li><Link>Jobs</Link></li>
                 <li><Link>Terms of Use</Link></li>
                 <li><Link>Contact us</Link></li>
                 
                 </ul>

                 <ul>
                 <li><Link>Account </Link></li>
                 <li><Link>Redeem gift Cards</Link></li>
                 <li><Link>Privacy</Link></li>
                 <li><Link>Speed Test</Link></li>
                 
                 </ul>

                 <ul>
                 <li><Link>Media Center </Link></li>
                 <li><Link>Buy gift Cards</Link></li>
                 <li><Link>Cookie Perferences</Link></li>
                 <li><Link>Legal Notices</Link></li>
                 
                 </ul>

                 <div className = "lang-btn"  onClick = {this.handlerToggle}>
                <Icon icon={sphere} size ={20}/>
                <span>{this.state.langChose}</span>
                <Icon icon={arrow_down} size ={20}/>
                </div>
               </div>
               {this.state.langContent &&(
                <div className="lang-toggle">
                 <ul>
                 <li onClick ={()=> this.handlerPickLanguge("English")}>English</li>
                 <li onClick ={()=> this.handlerPickLanguge("Fretch")}>Fretch</li>
                 </ul>
                </div>
                )}
                
                <span style= {{margin:  "0 auto" ,fontSize: '0.9rem' ,width: '75%' ,display: 'block'}}>Netflix CANADA</span>
            </FooterContainer>
        )
    }
}


const FooterContainer = styled.div`
background : var(--main-deep-dark);
padding-top :10rem ;
padding-bottom : 3rem;
color : #999;
.footer-columns {
    width: 75%;
    margin : 1rem auto 0;
    font-size : 0.9rem;
    overflow : auto;
    display : grid ;
    grid-template-columns : repeat( 4 ,1fr);
}
ul {
    padding :0;

}
ul li{
    line-height : 2.5rem;

}
  a{
      color : #999;
  }
  a:hover{
      text-decoration : underline;
      cursor : pointer;
  }
span{
    margin : 0 .3rem;
}

//   lang
.lang-btn{
    background : transparent;
    border :  0.9px solid #333;
    padding : 1rem;
    width : 8rem;
    display : grid ;
    grid-template-columns : repeat(3 , 1fr);
    align-items : center;
    margin : 2rem 0 2rem;
    cursor : pointer;
}
.lang-toggle{
    margin-left : 12.3%;
    margin-top : -2rem;
    position : absolute;
    transform: translateY(-138%);

}
.lang-toggle ul{
    background : var(--main-deep-dark);
    width : 8.125rem;
    border : 1px solid #333;
    text-align : center;
    margin-top : 0;
}
.lang-toggle li:hover{
    background : #0085ff ;
    color:#fff;
}
`