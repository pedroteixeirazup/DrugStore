import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './style.css'

class Main extends React.Component {

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
        <div className="main-container">
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
      
    );
  }
}

export default Main;