import SportsHome from './SportsHome';
import giveToSliderPhoto from './SportsHome';
var React = require('react');
var Slider = require('react-slick');


var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      adaptiveHeight: true,
      className: 'slides',
      arrows: false,
      pauseOnHover: true,
      useCSS:true
    };

    console.log(this.props.articles)
    var imgURL = []
         {this.props.articles.map(function(article, index){
          imgURL.push(<div className="row" key={index}><a target="_blank" href={article.url}><img src={article.urlToImage} /></a></div>)}
        )}
    var titles = []
      {this.props.articles.map(function(article, index){
        titles.push(<div className="row"key={index}><a target="_blank" href={article.url}>{article.title}</a></div>)
      })}

    return (
 
      <div className="slider">
        <Slider{...settings}>
          <div>{imgURL[0]}<div>{titles[0]}</div></div>
          <div>{imgURL[1]}<div>{titles[1]}</div></div>
          <div>{imgURL[2]}<div>{titles[2]}</div></div>
          <div>{imgURL[3]}<div>{titles[3]}</div></div>
          <div>{imgURL[4]}<div>{titles[4]}</div></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider; 