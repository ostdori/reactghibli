import React, { useState } from "react";
import filmService from "../../Services/filmService";
import { MDBBtn, MDBInput, MDBContainer, MDBCardHeader, MDBIcon, MDBTypography, MDBBox } from "mdbreact";

import { Link } from 'react-router-dom';

import "./AddFilm.css";

const AddFilm = () => {

    const InitialFilmState = {
        id: null,
        title: "",
        description: "",
        director: "",
        releaseDate: "",
        rate: "",

    };

    const [film, setFilm] = useState(InitialFilmState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFilm({ ...film, [name]: value });
    };

    const saveFilm = () => {
        var data = {
            title: film.title,
            description: film.description,
            director: film.director,
            releaseDate: film.releaseDate,
            rate: film.rate,
        };

        filmService.AddFilmToDb(data)
            .then((response) => {
                setFilm({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
                    director: response.data.director,
                    releaseDate: response.data.releaseDate,
                    rate: response.data.rate,

                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const newFilm = () => {
        setFilm(InitialFilmState);
        setSubmitted(false);
    };

    return (
        <div>
            <br />
            <br />
            <br />
            <MDBContainer>
                <br />
                <br />
                <br />
                <MDBCardHeader className="form-header form deep-blue-gradient rounded">
                    <h3 className="my-3">
                        <MDBIcon icon="film" /> Edit Film
                </h3>
                </MDBCardHeader>
                <br />


                <div className="jumbotron">
                    {submitted ? (
                        <MDBContainer >
                            <MDBTypography blockquote bqColor='success'>
                                <MDBBox tag='p' mb={0} className='bq-title'>
                                    <h4>Successful Submit!</h4>                                    
                                </MDBBox>
                                <p className="text-lg" green>"Deny Death, And You Deny Life."
                                     - Tales From Earthsea (2006)</p>

                            </MDBTypography>

                            <div className="tetx-center">
                                <MDBBtn
                                    color="success"
                                    onClick={newFilm}
                                    className="btn btn-greent">
                                    Add New Film
                                </MDBBtn>
                                <MDBBtn
                                    href="/ListOfFilms"
                                    color="secondary"
                                    className="btn btn-warning">
                                    Back to Films
                                </MDBBtn>
                            </div>
                        </MDBContainer>

                    ) : (

                            <div className="form-group text-center">
                                <MDBInput type="text" label="Title" size="lg" outline required name="title" valueDefault={film.title} onChange={handleInputChange} />
                                <MDBInput type="textarea" row="5" label="Description" size="lg" outline required name="description" valueDefault={film.description} onChange={handleInputChange} />
                                <MDBInput type="text" label="Director" size="lg" outline required name="director" valueDefault={film.director} onChange={handleInputChange} />
                                <MDBInput type="text" label="Release Date" size="lg" outline required name="releaseDate" valueDefault={film.releaseDate} onChange={handleInputChange} />
                                <MDBInput type="text" label="Rate" size="lg" outline required name="rate" valueDefault={film.rate} onChange={handleInputChange} />

                                <MDBBtn center
                                    color="success"
                                    onClick={saveFilm}
                                    className="btn btn-success btn-lg">
                                    Save Film
                             </MDBBtn>

                                <MDBBtn
                                    href="/ListOfFilms"
                                    color="secondary"
                                    className="btn btn-warning btn-lg">
                                    Back to Film
                            </MDBBtn>
                            </div>
                        )}
                </div>



            </MDBContainer>
        </div>
    );

};

export default AddFilm;