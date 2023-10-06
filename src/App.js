import React from "react";
import MovieList from "./MovieList"
import Navbar from "./Navbar"
import {movies} from "./moviesData";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
        // title : "The Avengers !!",
        // plot : "We got super powers",
        // price : 199,
        // rating : 9.2,
        // stars : 0,
        // favourite : false,
        // cart : false
        movies : movies,
        cartNum : 0
    }
  }

  addInc = (movie) => {
      const {movies} = this.state;
      const movieIndex = movies.indexOf(movie);
      
      if(movies[movieIndex].stars >= 5){
          return ;
      }
      
      movies[movieIndex].stars += 0.5;


      this.setState({
          movies : movies
      })
  }

  addDec = (movie) => {
      const {movies} = this.state;
      // console.log(movies);
      const movieIdx = movies.indexOf(movie);
      
      if(movies[movieIdx].stars <= 0){
          return ;
      }

      movies[movieIdx].stars -= 0.5;

      this.setState({
          movies : movies
      })
  }

  favBtn = (movie) => {
      const {movies} = this.state;
      const idx = movies.indexOf(movie);
      movies[idx].favourite = !movies[idx].favourite;
      this.setState({
          movies : movies
      })
  }

  cartBtn = (movie) => {
      let {movies,cartNum} = this.state;
      const idx = movies.indexOf(movie);

      movies[idx].cart = !movies[idx].cart;
      if(movies[idx].cart === true){
        cartNum += 1;
      }
      else{
        cartNum -= 1;
      }
      this.setState({
          movies : movies,
          cartNum : cartNum
      })
  }

  render(){
    const {movies, cartNum} = this.state;
    return (
      <>
      {/* <h1>Movie app</h1> */}
  
      <Navbar cartNum={cartNum}/>
  
      <MovieList movies={movies}
                  addStars = {this.addInc}
                  decStars = {this.addDec}
                  toggleFav = {this.favBtn}
                  toggleCart = {this.cartBtn}
                  />
      </>
    )
  }
}

// function App() {
//   return (
//     <>
//     {/* <h1>Movie app</h1> */}

//     <Navbar />

//     <MovieList />
//     </>
//   );
// }

export default App; 