import React from "react";
// import Styled from "styled-components";
import Styling from "./styles.module.css";

/*      CSS USED USING STYLED COMPONENTS
const Nav = Styled.div`
    width : 100%;
    // height : 70px;
    background-color : grey;
    display : flex;
    justify-content : space-between;
    // padding : 20px 20px;
    padding-top : 20px;
    padding-bottom : 20px;
`;
const Title = Styled.div`
    padding-top : 10px;
    padding-left : 20px;
    color: rgb(180, 18, 180);
    font-size : 25px;
    font-weight : 900;
    text-transform : uppercase;
    // font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    &:hover{color : darkgrey}
`;
const CartIconContainer = Styled.div`
    cursor : pointer;
`;
const CartIcon = Styled.img`
    height : 50px;
    width : 50px;
`;
const CartCount = Styled.span`
    position : relative;
    top : -30px;
    left : -10px;
    background-color : red;
    border-radius : 50%;
    color : yellow;
`;
*/
// class Navbar extends React.Component{
//     render(){
//         return (
//             <>
//                 {/* <div style={styles.nav}> */}
//                 <Nav>
//                     {/* <div>Movie App</div> */}
//                     <Title>Movie-app</Title>
//                     <CartIconContainer>
//                         <CartIcon alt = "cart-icon" src = "https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-4425841-3668061.png?f=webp&w=512"/>
//                         <CartCount>0</CartCount>
//                     </CartIconContainer>
//                 </Nav>
//             </>
//         )
//     }
// }

class Navbar extends React.Component{
    render(){
        const {cartNum} = this.props;
        return (
            <>
                {/* Styling done using CSS module. */}
                <div className={Styling.Nav}>
                    <div className={Styling.Title}>Movie-App</div>
                    <div className={Styling.CartIconContainer}>
                        <img className={Styling.CartIcon} alt="cart-icon" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-4425841-3668061.png?f=webp&w=512" />
                        <span className={Styling.CartCount}>{cartNum}</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;

/*
const styles = {
    nav : {
        background : "red",
        width : "100%",
        height : 70,
        display : "flex",
        justifyContent : "space-between",
        padding : "20px"
    },
    icon : {
        height : "50px",
        width : "50px"
    }
}
*/