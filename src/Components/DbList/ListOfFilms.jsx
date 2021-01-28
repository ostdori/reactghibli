import React, { useState, useEffect } from "react";
import FilmService from "../../Services/filmService";
import { Link } from "react-router-dom";
import { MDBContainer, MDBCardHeader, MDBMask, MDBBtn, MDBCard, MDBCardFooter, MDBIcon, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from "mdbreact";
import './ListOfFilms.css';
import { MDBChip } from 'mdbreact';
import Search from "../Search/Search";


const ListOfFilms = () => {
    const [films, setFilms] = useState([]);
    const [currentFilm, setCurrentFilm] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);


    useEffect(() => {
        retrieveFilms();
    }, []);

    const retrieveFilms = () => {
        FilmService.GetFilmsFromDb()
            .then(response => {
                setFilms(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveFilms();
        setCurrentFilm(null);
        setCurrentIndex(-1);
    };

    const setActiveFilm = (film, index) => {
        setCurrentFilm(film);
        setCurrentIndex(index);
    };

    return (
        <div className="padTop">


              
           

            <MDBContainer className="padTop">
               
                <MDBCardHeader className="form-header rare-wind-gradient rounded">

                    <h3 className="my-3">
                        GHIBLI FILMS - DB
                </h3>
                </MDBCardHeader>
                <Search />
                <br />
                <br />
                <br />

                {films && films.map((film, index) => (

                    <MDBRow >

                        <MDBCol >

                            <MDBCard className={"card-group-item " + (index === currentIndex ? "active" : " ")
                            }
                                onClick={() => setActiveFilm(film, index)}
                                key={index}>
                                <MDBCardHeader className="form-header white rounded">
                                    <h3 className="my-3">
                                        <MDBIcon icon="film" /> {film.title}
                                    </h3>
                                </MDBCardHeader>
                                <MDBCardImage alt="fluid" className="img-fluid" src="https://images.hdqwalls.com/wallpapers/anime-city-hd-zt.jpg" waves />
                                <MDBCardBody>

                                    <MDBCardTitle></MDBCardTitle>
                                    <h5><MDBIcon icon="calendar-alt"></MDBIcon> {film.releaseDate}</h5>
                                    <MDBCardText className="black-text text-center">
                                        {film.description}
                                    </MDBCardText>
                                    {/* <MDBChip size="lg"  alt="Contact Person" bgColor="success-color"
                                        text="white" waves>
                                       {film.director}
                                     </MDBChip> */}
                                    <div className="text-center">
                                        <MDBCardText className=" black-text text-center " color='purple lighten-1' ><MDBIcon icon="bullhorn" /> Director:  {film.director}</MDBCardText>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="text-center"><Link to={["/Film/"] + film.id}
                                            className="btn sunny-morning-gradient white-text"><MDBIcon far icon="edit" />  EDIT
                                    </Link>
                                    </div>
                                </MDBCardBody>
                                <MDBCardFooter className='text-muted text-center'><MDBIcon icon="star"></MDBIcon> {film.rate}</MDBCardFooter>
                            </MDBCard>
                            <br />
                            <br />
                            <br />

                        </MDBCol>
                    </MDBRow>

                ))}



            </MDBContainer>
        </div>

    );

};

export default ListOfFilms;