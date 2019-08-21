import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import './style.css';

import Filter from '../Filter';

class Main extends Component {

  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };

    return (
      <>
       <Filter/>

        <div className="main-container">
            <h2>Merchan</h2>
            <AliceCarousel
            duration={400}
            autoPlay={false}
            startIndex = {1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={false}
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlayActionDisabled={false}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
            buttonsDisabled={true}
            dotsDisabled={true}
        >
                <div className="yours-custom-class"><h2>1</h2></div>
                <div className="yours-custom-class"><h2>2</h2></div>
                <div className="yours-custom-class"><h2>3</h2></div>
                <div className="yours-custom-class"><h2>4</h2></div>
                <div className="yours-custom-class"><h2>5</h2></div>
        </AliceCarousel>
        </div>

         <div className="descount-container">
            <h2>Desconto</h2>
            <AliceCarousel
            duration={400}
            autoPlay={false}
            startIndex = {1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={false}
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlayActionDisabled={false}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
            buttonsDisabled={true}
            dotsDisabled={true}
        >
                <div className="yours-custom-class"><h2>1</h2></div>
                <div className="yours-custom-class"><h2>2</h2></div>
                <div className="yours-custom-class"><h2>3</h2></div>
                <div className="yours-custom-class"><h2>4</h2></div>
                <div className="yours-custom-class"><h2>5</h2></div>
                <div className="yours-custom-class"><h2>6</h2></div>
                <div className="yours-custom-class"><h2>7</h2></div>
                <div className="yours-custom-class"><h2>8</h2></div>

        </AliceCarousel>
        </div>

        <div className="category-container">
        <h2>Categorias</h2>
           <ul>
             <li>1</li>
             <li>2</li>
             <li>3</li>
             <li>4</li>
             <li>5</li>
           </ul>

        </div>


        <div className="mostwanted-container">
          <h2>Mais pedidos</h2>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>9</div>
          <div>9</div>
          <div>9</div>
        </div>

        </>
      
    );
  }
}

export default Main;