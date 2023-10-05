import React from 'react';
// import MovieList from "./MovieList";

class Moviecard extends React.Component{

//  THESE FUNCTIONS WILL NOT WORK NOW SINCE WE MOVED ALL THE STATES TO THE MOVIELIST COMPONENT.

    // addStars = () => { //This is a fn inside class so no need of writing function keyword
    //     // console.log(this);
    //     if(this.state.stars >= 5){
    //         return ;
    //     }
    //     this.setState({
    //         stars : this.state.stars + 0.5
    //     });
    //     // this.state.stars += 0.5;
    //     // console.log(this.state.stars);
    // }
    // subStars = () => {
    //     if(this.state.stars <= 0){
    //         return ;
    //     }
    //     this.setState({
    //         stars : this.state.stars - 0.5
    //     });
    // }
    // addFav = () => {
    //     this.setState({
    //         favourite : !this.state.favourite
    //     })
    // }
    // addCart = () => {
    //     this.setState({
    //         cart : !this.state.cart
    //     })
    // }
    render(){
        // console.log("I am getting rendered");
        // console.log(this.props);
        const {movies, addStars, decStars, toggleFav, toggleCart} = this.props;
        const {title, plot, price, poster, rating, stars, favourite, cart} = this.props.movies;
        return (
            <div className='main'>
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster-img" src={poster} />
                        {/* <img alt='poster' src='https://m.media-amazon.com/images/I/91byk9kP3RL._AC_UL640_FMwebp_QL65_.jpg'/> */}
                    </div>
                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs. {price}</div>
                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img className='str-btn' alt="decrease" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" onClick={() => {decStars(movies)}}/>
                                <img className='stars' alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" />
                                <img className='str-btn' alt="increase" src="https://cdn-icons-png.flaticon.com/128/32/32563.png" onClick={() => {addStars(movies)}} />
                                <span>{stars}</span>
                            </div>

                            {/* Conditionally checking whether favourite or unfavourite button to display */}
{/*Pehla Tareeka*/}        {/*} {favourite?<button className='unfavourite-btn' onClick={this.addFav}>Un-favourite</button> : <button className='favourite-btn' onClick={this.addFav}>Favourite</button>}  */}

{/*Doosra Tareeka*/}        <button className={favourite? "unfavourite-btn" : "favourite-btn"} onClick={() => {toggleFav(movies)}}>{favourite? "Un-favourite" : "Favourite"}</button>

                            <button className={cart?'remove-cart-btn' : 'cart-btn'} onClick={() => {toggleCart(movies)}}>{cart? "Remove from cart" : "Add to card"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Moviecard;