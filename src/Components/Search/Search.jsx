import React, { useState, useEffect } from "react";
import FilmService from "../../Services/filmService";
import { MDBCol, MDBIcon, MDBFormInline, MDBContainer } from "mdbreact";

import './Search.css';


const Search = () => {

    const [films, setFilms] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchResult, setSearchResult] = useState([]);



    useEffect(() => {
        FindByTitle();
        const results = films.filter(f =>
            f.title.toLowerCase().includes(searchTitle.toLowerCase())
        );
        setSearchResult(results);
    }, [searchTitle]);


    const FindByTitle = () => {
        FilmService.GetFilmById(searchTitle)
            .then(response => {
                setFilms(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const onChangeSearchTitle = e => {
        setSearchTitle(e.target.value);
    };


    return (
       
         <MDBContainer>
        <div className="text-center">
            <MDBCol md="12">
                <MDBFormInline className="md-form">
                    <MDBIcon icon="search"/>
                    <input className="form-control form-control-sm ml-3 w-75"
                     type="text" 
                     placeholder="Search"
                    aria-label="Search"
                    value={searchTitle}
                    onChange={onChangeSearchTitle}  />
                </MDBFormInline>
            </MDBCol>
 
            </div>
            
            {
                <ul>
                    {searchTitle ? (
                        searchResult.map(item => (
                            <div key={item.id} ><br /><a className="searchResult" href={["/Film/"] + item.id}> {item.title} </a></div>
                        ))) : null}
                </ul>
            }
       </MDBContainer>
    );


}


export default Search;


