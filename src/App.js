import React, { Component } from "react";
import NavBar from "./Components/Navbar/NavBar";
import FilmList from "./Components/Film/FilmList";

import AddFilm from "./Components/DbList/AddFilm";
import ListOfFilms from "./Components/DbList/ListOfFilms";
import Film from "./Components/DbList/Film";

import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />

          <Route exact path="/" exact component={Home} />
          <Route  path='/AddFilm' component={AddFilm} />
          <Route path='/ListOfFilms' component={ListOfFilms} />
          <Route path="/FilmList" component={FilmList}/>
          <Route path="/Film/:id" component={Film}/>
         

          

         
        </Router>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <NavBar />
//         <FilmList />
//       </header>
//     </div>
//   );
// }

// export default App;
