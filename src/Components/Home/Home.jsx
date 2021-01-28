// import React from 'react';






// import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle } from "mdbreact";


// export default function Home() {
//     return (
//         <div>
//             <MDBContainer>
//                 <MDBRow>
//                     <MDBCol>
//                         <h4 className="text text-center my-h4">Welcome to SignToSeminar for Healthy Life Style</h4>
//                         <MDBJumbotron style={{ padding: 0 }}>
//                             <MDBCol className="text-white text-center py-5 px-4 my-5 header-img">
//                                 <MDBCol className="py-5">
//                                     <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold header-text">Herbal products are medicines derived from plants</MDBCardTitle>
//                                     <p className="mx-5 mb-5 header-text-pp">
//                                     </p>
//                                     <p className="mx-5 mb-5 header-text-p">

//                                         An yat cala silninquita, as lor nalanta etéraettul,
//                                         tata ataqua aratar mi mir. Yalúmëa tellaurë sa qua.
//                                         Né apa nírë silma. Handa goneheca má yav, pio cíla linta sí.
//                                         Terca oment
//                                     </p>
//                         <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold"></MDBCardTitle>
                                    
//                                     <MDBBtn  gradient="peach"
//                                         size="lg"
//                                         className="mb-5 homeBtn"
                                       
//                                         href="/seminar/">
//                                         <MDBIcon icon="leaf" className="mr-2">
//                                         </MDBIcon>Check Our Seminars</MDBBtn>
//                                 </MDBCol>
//                             </MDBCol>
//                         </MDBJumbotron>
//                         <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold"></MDBCardTitle>

//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
         
//         </div>
//     )
// }

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from 'mdbreact';
import './Home.css';

class MinimalisticIntro extends React.Component {
  


  render() {
    
  
    
    return (
      <div id='minimalistintro'>
        
        <MDBView src='https://img.wallpapersafari.com/desktop/1600/900/39/53/3Y2zBj.png'>
          {/* <MDBMask className='rgba-black-light' /> */}
      
        
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '5rem' }}>
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                  G H I B L I - F I L M S
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text'>
                  <strong>WELCOME TO OUR PAGE</strong>
                </h5>
                
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </MDBCol>
            </MDBRow>
            </MDBContainer>
          
       
        <MDBContainer>
        <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
              <MDBBtn outline color='white' size='lg'>
                  Films List
                </MDBBtn>
                <MDBBtn outline color='white'size='lg'>
                  ABOUT US
                </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default MinimalisticIntro;