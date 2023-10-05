import React from "react";
import MovieCard from "./Moviecard";

class MovieList extends React.Component{
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
            movies : [
                {
                    title : 'Tere Naam',
                    plot : 'Best romantic and unsuccesful love story',
                    poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgkpnP4NY6ntmp_sR44NGercw9v0z46fXYJMlMjukftDUDPvr',
                    rating : '10.0',
                    price : 99,
                    stars : 0,
                    favourite : false,
                    cart : false
                },
                {
                    title : 'New York',
                    plot : 'Hero heroine dead at the end and her lover takes care of their child',
                    poster : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKAan2bJJROo75ULowNHOXEeokDge3Cmd0BOirQuhr_VmtirUX',
                    rating : '10.0',
                    price : 299,
                    stars : 0,
                    favourite : false,
                    cart : false
                },
                {
                    title : 'Shiddat',
                    plot : 'Hero struggles a lot to get back to her who is in  London but dies before meeting her ',
                    poster : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQewm3_NaAxomX0OMWhlBpv2fnBsdbaZ60DUpZfV7mhZUxpZ_0j',
                    rating : '10.0',
                    price : 459,
                    stars : 0,
                    favourite : false,
                    cart : false
                },
                {
                    title : 'Tadap',
                    plot : 'The girl in the story is a bitch',
                    poster : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRUAQ_bqJLFV2TohnQWVBu3gMQA1cqLPoWmjvmfDRH824Dp5QRa',
                    rating : '10.0',
                    price : 50,
                    stars : 0,
                    favourite : false,
                    cart : false
                },
                {
                    title : 'Sanam Teri Kasam',
                    plot : 'Good movie but the girl dies at the end. It will make ur eyess wet.',
                    poster : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFviCeSv_FbORvRd_kLOF7OVzesXK4_-hEnKkK8_HPNeaU14WE',
                    rating : '10.0',
                    price : 99,
                    stars : 0,
                    favourite : false,
                    cart : false
                }
            ]
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
        const {movies} = this.state;
        const idx = movies.indexOf(movie);

        movies[idx].cart = !movies[idx].cart;
        this.setState({
            movies : movies
        })
    }
    render(){
        // const {title, plot, price, rating, stars, favourite, cart} = this.state;
        const {movies} = this.state;
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
                                                  addStars = {this.addInc} 
                                                  decStars = {this.addDec}
                                                  toggleCart = {this.cartBtn}
                                                  toggleFav = {this.favBtn}
                                                  />)}
            </>
        );
    }
}

export default MovieList;