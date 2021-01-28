import React, { useState, useEffect } from 'react';
import FilmService from "../../Services/filmService";


import './Film.css';
import { MDBContainer, MDBRow, MDBCardHeader, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCardTitle, MDBCardImage, MDBCardText, MDBCard, MDBCardBody } from 'mdbreact';
const Film = (props) => {
    const initialFilmState = {
        id: null,
        title: '',
        description: '',
        director: '',
        producer: '',
        release_Date: '',
        rate_Score: '',

    };
    const [currentFilm, setCurrentFilm] = useState(initialFilmState);
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const getFilm = id => {
        FilmService.GetFilmById(id)
            .then(response => {
                setCurrentFilm(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    useEffect(() => {
        getFilm(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentFilm({ ...currentFilm, [name]: value });
    };
    const updatePublished = status => {
        var data = {
            id: currentFilm.id,
            title: currentFilm.title,
            director: currentFilm.director,

            description: currentFilm.description,
            releaseDate: currentFilm.releaseDate,
            rate: currentFilm.rate,

        };

        FilmService.UpdateFilm(currentFilm.id, data)
            .then(response => {
                setCurrentFilm({
                    ...currentFilm
                });

                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const UpdateFilm = () => {
        FilmService.UpdateFilm(currentFilm.id, currentFilm)
            .then(response => {
                console.log(response.data);
                setMessage("Movie Has Been updated successfully!");
                setSubmitted(true);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const DeleteFilm = () => {
        FilmService.DeleteFilm(currentFilm.id)
            .then(response => {
                console.log(response.data);
                props.history.push("/ListOfFilms");
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <MDBContainer>
                <MDBCardHeader className="form-header form deep-blue-gradient rounded">
                    <h3 className="my-3">
                        <MDBIcon icon="film" /> Edit Film
                </h3>
                </MDBCardHeader>
                <br />
                <br />
                <br />
                <br />
                {submitted ? (
                    <MDBContainer>
                        <div className="text-center" >
                            <MDBCard style={{ border: "2px" }}>

                                <MDBCardBody>
                                    <br />
                                    <br />
                                    <MDBCardTitle className="text-lg-center"> <strong>{message}</strong></MDBCardTitle>
                                    <br />
                                    <br />
                                    <MDBBtn
                                        href="/ListOfFilms"
                                        color="secondary"
                                        className="btn btn-warning btn-lg">
                                        Back to Films
                            </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBContainer>

                ) : (
                        <MDBRow>
                            <MDBContainer className="center">
                                <MDBCol style={{ maxWidth: "100rem" }} size="12">
                                    <form >
                                        <br />
                                        <div>
                                            {currentFilm ? (
                                                <div className="edit-form">
                                                    <div className="white-text">
                                                        <MDBInput label="Title" size="lg" name="title" validate error="wrong"
                                                            success="right" value={currentFilm.title}
                                                            onChange={handleInputChange} outline />


                                                        <MDBInput label="Director" group type="text" size="lg" validate name="director" error="wrong"
                                                            success="right" value={currentFilm.director}
                                                            onChange={handleInputChange} outline />

                                                        <MDBInput label="Release Date" group type="text" size="lg" validate name="releaseDate" error="wrong"
                                                            success="right" value={currentFilm.releaseDate}
                                                            onChange={handleInputChange} outline />
                                                        <MDBInput label="Rate Score" group type="text" size="lg" validate name="rate" error="wrong"
                                                            success="right" value={currentFilm.rate}
                                                            onChange={handleInputChange} outline />
                                                        <MDBInput type="textarea" rows="5" label="Description" size="lg" validate name="description" error="wrong"
                                                            success="right" value={currentFilm.description}
                                                            onChange={handleInputChange} outline />
                                                        <br />

                                                    </div>

                                                    <div className="text-center">
                                                        <MDBCardBody>

                                                            <br />
                                                            <br />

                                                            <MDBBtn size="lg" gradient="peach" color="orange" onClick={UpdateFilm}>
                                                                Update
                                                        <MDBIcon far icon="edit" className="ml-1" />
                                                            </MDBBtn>
                                                            <MDBBtn size="lg" gradient="lady-lips" color="red" onClick={DeleteFilm} >
                                                                Delete
                                                        <MDBIcon far icon="trash-alt" className="ml-1" />
                                                            </MDBBtn>
                                                        <MDBBtn
                                                            href="/ListOfFilms"
                                                            color="light-blue"
                                                            className="btn btn-warning btn-lg">
                                                            Back to Films <MDBIcon icon="list-alt" />
                                                        </MDBBtn>
                                                            {/* <MDBBtn
                                                        href="/ListOfFilms"
                                                        gradient="rare-wind-gradient"
                                                        className="btn btn-warning btn-lg">
                                                        <strong>Back To List</strong>
                                                        <MDBIcon far icon="list-alt" />
                                                    </MDBBtn> */}

                                                        </MDBCardBody>




                                                    </div>

                                                </div>

                                            ) : (

                                                    <div>
                                                        <br />
                                                        <p>Click a seminar...</p>
                                                    </div>
                                                )}
                                        </div>
                                    </form>
                                </MDBCol>
                            </MDBContainer>
                        </MDBRow>
                    )}
            </MDBContainer>
        </div>
    );
};
export default Film;