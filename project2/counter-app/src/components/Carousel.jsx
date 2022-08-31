import React, { Component } from 'react'

const Carousel = props => {
    console.log('Carousel - Rendered');
    

    return ( 
        
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://picsum.photos/100" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://picsum.photos/100" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://picsum.photos/100" alt="Third slide"/>
    </div>
  </div>
</div>
    )
};

export default Carousel;