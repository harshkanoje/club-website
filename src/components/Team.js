import React, { Component } from 'react'

export class Team extends Component {
  render() {
    return (
        <div class="card img-fluid" >
             
        <img className="card-img-top" src="./images/back-21.png" alt="gimage" style={{width:"100%"}}/>

        <div className="text-center card-img-overlay "> 
        <br/>
        <section class="section-white ">
 
    <div class="container ">
 
        <div class="row">
       
                    <div class="col-md-12 text-center">

                          <h2 class="section-title">The Team Behind Data Science Club</h2>

                          <p class="section-subtitle">A division of Data Science enthusiasts in the Data-verse</p>
                          
                    </div> 
             
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src="./images/blank-profile.png" class="team-img" alt="pic" />                   
                      <h3>DR. PON HARSHAVARDHANAN</h3>            
                      <div class="team-info"><p>Associate Professor</p></div>
                      <p>He Has 15 Years Of Teaching Experience From Engineering Institutions And 2 Years Of Industrial Experience From IT Industries. He Has Published 9 Research Articles In International And National Journals. </p>
                  
                      
                      
                  
                </div>
            </div> 
              
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src="./images/blank-profile.png" class="team-img" alt="pic" />
                     
                      <h3>Dr.Abha Trivedi</h3>
                      
                      <div class="team-info"><p>Assistant Professor</p></div>

                      <p>Her Interest Is Towards Utilizing An Emerging Technology Of Agent-Based Modelling And SimulationAnd Geographic Information Systems (GIS) To Deal With The Problems Existing In Social Scenarios.</p>
                  
                      
                      
                  </div>

            </div> 
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src="./images/blank-profile.png" class="team-img" alt="pic" />
                     
                      <h3>Charchit Jain</h3>
                      
                      <div class="team-info"><p>President</p></div>

                      <p>Charchit is 3rd Year Data Science And Computational Branch Student. I'm Well Versed With Programming Languages Like Python And Java. He is good At Handling Various Workspaces At Once. </p>
                  
                      
                  </div>

            </div> 
        
        </div> 
    
    </div> 

    </section>
    


      </div>
      </div>
    )
  }
}

export default Team
