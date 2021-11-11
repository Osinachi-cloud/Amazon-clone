import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="image/amazon-logo.jpeg"/>
           
           <div className="home_row">
            <Product 
            id="1"
            title="Jacket"
            description ="Exquisite cotton Jackets that covers you from cold, very affordable, fitting and beautiful"
            price={60}
            rating={5}
            image="image/02.png"

             />
            <Product 
            id="2"
            title="suit"
            description ="like Exquisite cotton Jackets that covers you from cold, very affordable, fitting and beautiful"
            price={50}
            rating={4}
            image="image/01.png"
             />
           </div>
           
           <div className="home_row">
            <Product 
            id="3"
            title="Pull-Over"
            description ="like"
            price={40}
            rating={4}
            image="image/04.png"
            />
            <Product
            id="4"
            title="Black-sport"
            description ="like"
            price={30}
            rating={4}
            image="image/05.png"
            />

            <Product
            id="5"
            title="Orange-Sport"
            description ="like"
            price={20}
            rating={3}
            image="image/06.png"
            />

               
           </div>
           
           <div className="home_row">
           <Product
           id="6"
           title="Sneakers"
           description ="like"
           price={10}
           rating={4}
           image="image/07.png"
           />
           </div>
           
           
           
           
           
           
            </div>

            
        </div>
    )
}

export default Home

