import SportsHome from './SportsHome';
import giveToSliderPhoto from './SportsHome';
var React = require('react');
var Slider = require('react-slick');


var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    console.log(this.props.articles)
    var imgURL = []
         {this.props.articles.map(function(article, index){
          imgURL.push(<div key={index}><img src={article.urlToImage} /></div>)}
        )}
    
    return (
 
      <div className="slider">
        <Slider{...settings}>
          <div>{imgURL[0]}</div>
          <div>{imgURL[1]}</div>
          <div>{imgURL[2]}</div>
          <div>{imgURL[3]}</div>
          <div>{imgURL[4]}</div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider; 