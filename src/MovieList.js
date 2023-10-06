import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component{
    
    render(){
        // const {title, plot, price, rating, stars, favourite, cart} = this.state;
        const {movies, addStars, decStars, toggleFav, toggleCart} = this.props;
        return(
            <>
                {/* <MovieCard title = {title}
                            plot = {plot}
                            price = {price}
                            rating = {rating}
                            stars = {stars}
                            favourite = {favourite}
                            cart = {cart} /> */}

                {movies.map((movie, idx) => <MovieCard key={idx} movies = {movie} 
                                                  addStars = {addStars} 
                                                  decStars = {decStars}
                                                  toggleCart = {toggleCart}
                                                  toggleFav = {toggleFav}
                                                  />)}
            </>
        );
    }
}

export default MovieList;