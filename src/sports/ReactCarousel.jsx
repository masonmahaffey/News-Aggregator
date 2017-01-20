import React from 'react'; 
import $ from 'jquery';

var ReactCarousel = React.createClass({
      currentIndex: 0,
      items: {this.props.article.url},
      itemAmt: items.length,

    function cycleItems() {
      var item = $('.container div').eq(currentIndex);
      items.hide();
      item.css('display','inline-block');
    }

    var autoSlide = setInterval(function() {
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    }, 3000);

    $('.next').click(function() {
      clearInterval(autoSlide);
      currentIndex += 1;
      if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
      }
      cycleItems();
    });

    $('.prev').click(function() {
      clearInterval(autoSlide);
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
      }
      cycleItems();
    });



    render: function() {
        var settings = {
          dots: true
        }
        return (
          <section className="slider_section" style={{display:'inline-block'}}>
            <div className='container slider'>
              <button className="next">Next</button>
              <button className="previous">Previous</button>
              <div classname="container">
                <div><img id='one' src='http://placekitten.com/g/400/200' /></div>
                <div><img id='two'src='http://placekitten.com/g/400/200' /></div>
                <div><img id='three' src='http://placekitten.com/g/400/200' /></div>
                <div><img id='four' src='http://placekitten.com/g/400/200' /></div>
              </div>
             </div>
          </section>
        );
  }
});

export default ReactCarousel;



