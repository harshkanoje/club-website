import React, { Component } from 'react'

export class cards extends Component {
  render() {
    return (
      <div class="card img-fluid" >
        <img className="card-img-top" src="./images/back-2.jpg" alt="Card image" />
      <div className="text-center card-img-overlay">
       
      
        <br/>   
      <div><h2>Events</h2><br/>       
      <div className="d-flex justify-content-center">
        <div className="card mx-3" style={{ width: '29rem' , background:'white', color:'black',borderRadius:'6px',border: '2px solid black', height: "33rem"}}>
          <img
            src='./images/datalize.jpg'
            className="card-img-top"
            alt="..."
            style={{ height: '280px', objectFit: 'fill', borderRadius:'2px'}}/>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Datalize</h5>
            <p className="card-text">
            No large, global, heterogeneous, multi-business- and product-line enterprise can ever hope to clean up all of its data...
            <div class="collapse" id="collapseExample" style={{color:"grey", fontSize:'11px' }}>it’s always a continuous journey. The key is knowing what data sources feed your applications and how confident you are about the accuracy of data coming from each source."Be ready to be a part of one of the most exciting and insightful events DATALIZE to be conducted by the Data Science Club.</div></p>             
            <a class="btn btn-dark mt- mx-auto" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"  >Read more</a>
          </div>
        </div>
        <div className="card mx-3" style={{ width: '29rem' , background:'white', color:'black',borderRadius:'6px',border: '2px solid black', height: "33rem"}}>
          <img
            src="./images/DSA-dash.jpg"
            className="card-img-top"
            alt="..."
            style={{ height: '280px', objectFit: 'fill' , borderRadius:'2px'}}/>            
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">DSA Dash</h5>
            <p className="card-text">
            A platform to unleash your inquisitive intellect. A conspicuous event you cannot miss to be a part of!!
            <div class="collapse" id="collapseExample2" style={{color:"grey", fontSize:'11px' }}>The “Data Science Club” is gratified to welcome you all in the colossal “DSA Contest".Winners will be facilitated with amazing prizes. Participation certificate will be provided to all! Don’t blow the chance and play a part! Do join us.</div></p>              
            <a class="btn btn-dark mt- mx-auto" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2"  >Read more</a>
          </div>
        </div>
        <div className="card mx-3" style={{ width: '29rem' , background:'white', color:'black',borderRadius:'6px',border: '2px solid black', height: "33rem"}}>
          <img
            src="./images/sprint.png"
            className="card-img-top"
            alt="..."
            style={{ height: '280px', objectFit: 'fill', borderRadius:'2px' }}/>            
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">ML Sprint</h5>
            <p className="card-text">
            A platform to unleash your methodological intellect, A conspicuous event you cannot miss to be part of!!
            <div class="collapse" id="collapseExample3" style={{color:"grey", fontSize:'11px' }}> The “Data Science Club”of VIT Bhopal is gratified to welcome you all in the colossal “ ML-SPRINT HACKATHON ” under Annual Tech Fest AdVITya 2022. Do join us and get an opportunity to be a part of indifferent minds . Be the part and reap the guerdon. </div>
             </p>            
            <a class="btn btn-dark mt- mx-auto" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3"  > Read more </a>       
              </div>
        </div>
        </div>
 </div>
 </div>
 </div>
    )
}
}

export default cards
