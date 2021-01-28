import http from '../http-common';

const GetAll = () => {
    return http.get('/Films');
};

const GetFilmsFromDb = () => {
    return http.get('/Home');
}

const GetFilmById = id => {
    return http.get(`/Home/${id}`);
}
const AddFilmToDb = data => {
    return http.post('/Home', data);
};


const UpdateFilm = (id, data) => {
    return http.put(`/Home/${id}`, data);
}
const  DeleteFilm = id => {
    return http.delete(`/Home/${id}`);
};

const FindByTitle = title => {
    return http.get(`/Home?${title}`);
};
export default {GetAll,
    GetFilmsFromDb,
    GetFilmById,
    AddFilmToDb,
    DeleteFilm,
    UpdateFilm,
    FindByTitle
};