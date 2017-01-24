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
      autoplaySpeed: 4000,
      adaptiveHeight: true,
      className: 'indiv_slidee',
      arrows: false,
      pauseOnHover: true,
      useCSS: true,
      centerMode: true,
      variableWidth: true
  
    };

    // console.log(this.props.articles)
    var imgURL = []
         {this.props.articles.map(function(article, index){
          imgURL.push(<div className="anna" key={index}><a target="_blank" href={article.url}>
                        <img src={article.urlToImage} styles={{padding:0}}/></a></div>)}
        )}
    var titles = []
      {this.props.articles.map(function(article, index){
        titles.push(<div className="row slider_titles" key={index}><a target="_blank" href={article.url}>{article.title}</a></div>)
      })}

    return (
      
      <div className="slider">
        <Slider{...settings}>
          <div>
            <div >{imgURL[0]}</div>
            <div>{titles[0]}</div>
          </div>
          <div>
            <div>{imgURL[1]}</div>
            <div>{titles[1]}</div>
          </div>
          <div>
            <div>{imgURL[2]}</div>
            <div>{titles[2]}</div>
          </div>
          <div>
            <div>{imgURL[3]}</div>
            <div>{titles[3]}</div>
          </div>
          <div>
            <div>{imgURL[4]}</div>
            <div>{titles[4]}</div>
          </div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider; 