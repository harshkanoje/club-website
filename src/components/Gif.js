import React, { Component } from 'react';
export class Gif extends Component {
  render() {
    return (     
      <div style={{ position: 'relative' }}>
        <style>
         { `
            .brain-image {
              max-width: 100%;
              max-height: 100%;
          }
          .image-text {
            position: absolute;
            top: 46%;
            left: 29%;
            transform: translate(-50%, -50%);
            color: #8843F2;
            font-size: 18px;
            font-weight: bold; 
            // text-shadow: 2px 2px #000;
          }
          
          .image-text-text {
            position: absolute;
            top: 26%;
            left: 4%;
            // transform: translate(50,50);
            font-weight: ;
            color: black;
            font-size: 50px;
            font-weight: bold; 
            text-shadow: 1px 1px #000;
          }
           .why{
              text-shadow: 2px 2px #000;
           }
           .down-text{
              position:absolute;
              top:550px;
              left:23%; 
              // text-align: center;                 
           }

           @media only screen and (max-width:300px){
            .image-text{
                display: block;
                
            }
        }

        @media only screen and (min-width: 300px) and (max-width:500px) {
          .image-text{
                display: block;
                
            }
        }

        @media (min-width: 500px) and (max-width:800px) {
          .image-text{
                display: block;
                
            }
        }

        @media (min-width: 800px)  {
          .image-text{
                display: block;
                
            }
          `}
        
            
        </style>
        <img src="./images/Data Science Club -3.png" className="brain-image" alt="brain" />
        <br/>
        {/* <div> <h2>Data Science Club</h2></div> */}
          {/* <div className='image-text-text'>  <h1>Data Science Club</h1>  </div>
          <div className="image-text">An Officially Recognized Community For Data Science From 
          <br/>  VIT Bhopal University. 
          <br/> <br/> 
          Welcome To The Universe Of Data So Called Data-Verse , A Community <br/>  Where We Learn, Create, Innovate To Counter Real Life Problems Using <br/>  Concepts Of Data Science And Other Computer Science Diciplines.</div>
        <div className='down-text'><h5>4 Guides | 25+ Team Strength | 2 Events Organized | Blogs- Coming soon </h5></div> <br/>       */}
        {/* <div className='cardhead'>  <h1>Why Data Science Club</h1>  </div> */}
      </div>
 
    );
  }
}
export default Gif;