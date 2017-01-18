import React from 'react';
import './sports.css';

var ESPN = React.createClass({
	render: function(){
		return(
			<div className='firstsports' >
			Go Pack Go! 
			</div>
		)
	}
})

var SecondSportsComponent = React.createClass({
	render: function(){
		return(
			<div className='secondsports'>
			<p>Spicy jalapeno bacon ipsum dolor amet landjaeger deserunt minim alcatra, kevin do tenderloin eu. Pork chop spare ribs nulla prosciutto incididunt cupim. Esse biltong leberkas adipisicing non ham eu. Anim laborum kielbasa, voluptate eu turkey id hamburger.

			Boudin pancetta in pariatur quis culpa ipsum short ribs deserunt, tenderloin frankfurter andouille spare ribs chuck. Qui in tail, consequat proident pork chop shank eu ipsum beef ribs porchetta ullamco officia boudin kevin. Minim andouille consequat pig, officia incididunt shoulder aute. Proident in incididunt cupim, ipsum leberkas jerky bacon.

			Voluptate deserunt laboris labore. Ex hamburger swine meatloaf cupim, dolore tempor id magna nostrud short ribs exercitation irure. Ham pork drumstick, proident exercitation flank excepteur tenderloin sirloin spare ribs ex corned beef. Do dolore magna brisket, shank alcatra hamburger strip steak aliqua boudin pariatur in ham. Jerky veniam sint aliqua fatback hamburger laborum jowl deserunt enim ham in ipsum dolore corned beef. In boudin hamburger, rump ham hock ut filet mignon meatloaf ground round sed bacon ut fugiat. In ut pig beef, pariatur landjaeger meatloaf boudin non pork loin.

			Quis non reprehenderit, exercitation enim esse cow elit pig strip steak. Drumstick sunt swine bresaola, beef officia boudin pig prosciutto tenderloin sirloin frankfurter non shankle commodo. Chuck kevin dolore ut biltong ex ipsum. Leberkas t-bone in, filet mignon brisket proident fugiat ad eiusmod flank ham fatback.

			Frankfurter ad prosciutto incididunt kielbasa, swine anim chicken sirloin chuck nostrud bacon id. Capicola sunt pariatur cow. Ball tip ut shank velit elit. Dolore labore aute spare ribs, ullamco rump ball tip beef turkey ham shank velit cow magna. Beef ribs lorem sunt drumstick. Nostrud pastrami ground round landjaeger sed jerky dolore pig boudin do incididunt ball tip kevin frankfurter dolor.

			Beef culpa short ribs duis cillum consequat ut tempor lorem flank tenderloin swine. Bresaola in shank anim lorem ribeye short ribs pork. Dolore fugiat voluptate hamburger, picanha officia nisi pig jowl enim pastrami tongue. Duis pork belly aliqua fatback frankfurter sunt exercitation officia minim. Bacon biltong flank excepteur dolor meatball irure drumstick sint. Meatball ut boudin pancetta tail, in swine culpa proident strip steak beef ribs nisi alcatra venison. Non eu shank tenderloin pariatur spare ribs.

			Pork chop ball tip mollit pork loin ut laborum. Pork chop venison in eu porchetta cupim ham fugiat ipsum do aliqua in andouille. Elit filet mignon tempor ham porchetta short ribs. Alcatra incididunt ad, aliquip aute shank ipsum quis dolor occaecat. Sed ad qui jowl, enim reprehenderit velit lorem pork chop corned beef. Biltong irure qui landjaeger consequat et tongue dolor cupim chuck aliquip reprehenderit bacon velit.

			Qui bacon meatball jowl, burgdoggen salami ipsum rump. Filet mignon pork loin in mollit. Aute pariatur alcatra turkey pork belly dolor. Nisi pariatur meatball flank, ham hock sunt chicken in labore veniam aliqua. Culpa frankfurter shoulder aliqua jerky.
			</p></div>
		)
	}
})

var ThirdSportsComponent = React.createClass({
	render: function(){
		return(
			<div className='thirdsports'>
			Third Sports Component
			</div>
		)
	}
})

var Sports = React.createClass({
	render: function(){
		return(
			<div>
				<ESPN />
				<SecondSportsComponent />
				<ThirdSportsComponent />
			</div>
		)
	}
})

export default Sports;


// class Fortune extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {articlesArray: []};
// 		this.componentDidMount = this.componentDidMount.bind(this);
// 	}
// 	componentDidMount () {
// 		var apiSource = 'fortune';
// 		var url = apiMain + apiSource + apiTail + newsApiKey;
// 		$.getJSON(url, (newsData) =>{
// 			this.setState({articlesArray: newsData.articles})});	
// 	}
// 	render (){
// 		return(
// 			<div className="col-xs-11 col-sm-7 col-md-3" style={{float:'right', margin:5}}>
// 				<div style={{height:'100%'}}>
// 					<img alt='b' src={require('./images/fortune.png')} style={{
// 					float:'left',width:'50%', height:'50%', margin:'20px 23% 20px'}} />
// 				</div>
// 				<ArticleImages articles={this.state.articlesArray} />
// 			</div>
// 		);
// 	}
// }