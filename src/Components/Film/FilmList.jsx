import React, { useState, useEffect } from "react";
import {  Container,  Header } from "semantic-ui-react";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBContainer } from
    'mdbreact';

import filmService from "../../Services/filmService";
import './FilmList.css';
const FilmList = ({ maxHeight, children }) => {

    const [films, setFilms] = useState([]);

    useEffect(() => { GetFilms(); }, []);

    const GetFilms = () => {
        filmService.GetAll()
            .then(response => {
                setFilms(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e)
            });
    };

    return (
        <MDBContainer fluid>
            <br />
            <br />
            <br />
            <Container>
                <Header as='h1'>Films</Header>

            </Container>

            <br />


            <MDBRow>
               
                    {films && films.map((film) => (
                        <MDBContainer>
                            <MDBCol style={{ maxWidth: "100rem", maxHeight: "100rem"  }} size="12">
                                <MDBCard reverse className="cardSpace">
                                    <MDBCardImage
                                        className="img-thumbnail"
                                        top
                                        src="https://images.hdqwalls.com/wallpapers/anime-city-hd-zt.jpg"
                                        overlay='white-slight'
                                        hover
                                        waves
                                        alt='MDBCard image cap'
                                        cascade style={{ height: '30rem'}}
                                    />
                                    <MDBCardBody className='rounded-bottom text-center'>
                                        <MDBCardTitle key={film.id}></MDBCardTitle>
                                        <h5 className="indigo-text " ><strong>{film.title}</strong></h5>
                                        <hr className='hr-light' />
                                        <Container>
                                            <MDBCardText className=''>
                                                {film.description}
                                            </MDBCardText>
                                        </Container>
                                        <MDBCardText className=''>
                                            Director : {film.director}
                                        </MDBCardText>
                                        <MDBCardText>
                                            Release Date : {film.release_date}
                                        </MDBCardText>
                                        <MDBCardText>
                                            Rate : {film.rt_score}
                                        </MDBCardText>

                                    </MDBCardBody>
                                </MDBCard>

                            </MDBCol>

                        </MDBContainer>

                    ))}

               
            </MDBRow>
        
        
        </MDBContainer>
    )


}
export default FilmList;