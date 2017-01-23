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


            // return(
            //   <div key={index}>
            //     {/*return the first ESPN headline as a BIG picture*/}
            //     <div key={index} style={{ marginBottom: 5, fontSize: 30, margin:'4%'}}>
            //       <a target="_blank" href={article.url}><img src={article.urlToImage} alt='s' style={{width:'100%', height:'80%', border: '1px solid black'}} /></a>
            //       <a target="_blank" className="big_espn_title" href={article.url}>{article.title}</a>
            //     </div>    
            //     <div className="espn_desc" style={{borderBottom:'1px solid lightgrey'}}>
            //       {article.description}
            //     </div>
            //   </div>
            // )

{/*

class ArticleColTwo extends React.Component{
  //this returns ESPN individual articles and photos
  render (){
    return(
      <div className="espn_articles">
        {this.props.articles.map(function(article, index){
          if(index == 0){
            return(
              <div key={index}>

                <div key={index} style={{ marginBottom: 5, fontSize: 30, margin:'4%'}}>
                  <a target="_blank" href={article.url}>
                    <img src={article.urlToImage} alt='s' style={{width:'100%', height:'80%', border: '1px solid black'}} />
                  </a>
                  <a target="_blank" className="big_espn_title" href={article.url}>{article.title}</a>
                </div>    
                <div className="espn_desc" style={{borderBottom:'1px solid lightgrey'}}>
                  {article.description}
                </div>
              </div>
            )

          }else if(index !== 0){
            //return the other ESPN headlines as smaller
            return(
              <div key={index} style={{marginBottom: 10}} className='row' style={{borderBottom:'1px solid lightgrey'}}>
                <div style={{fontSize: 16, margin:'4%'}}><a target="_blank" href={article.url}>
                  <img src={article.urlToImage} alt='s' style={{width:'50%', height:'35%', border:'1px solid black'}} /></a>
                  <a target="_blank" style={{color:'black', fontWeight:500, fontSize:15}} href={article.url}>{article.title}</a>
                </div>  
                <div className="espn_desc" style={{paddingBottom: 10, marginBottom: 10}}>
                  {article.description}
                </div>
              </div>
            )
          }
        })}
      </div>
    )
  }
}*/}

export default SimpleSlider; 