import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function remove(arr,value){
	return arr.filter(function(ele){
		return ele !=value;
	});
}

class ItemLists extends React.Component {
	constructor(props){
		super(props);
		this.state={musicList:["item1","item2","item3"],likeList:[],listenList:[]};
	}
	handleLike(music){
		this.setState({likeCache:music});
		if (this.state.likeList.includes(this.state.likeCache)){
			this.state.likeList=remove(this.state.likeList,music);
			console.log(this.state.likeList);
		}
		else{this.state.likeList.push(this.state.likeCache);
			console.log(this.state.likeList);

		}
	}
	handleListen(music){
		this.setState({listenCache:music});
		if (this.state.listenList.includes(this.state.listenCache)){
			this.state.listenList=remove(this.state.listenList,music);
			console.log(this.state.listenList);
		}
		else{this.state.listenList.push(this.state.listenCache);
			console.log(this.state.listenList);

		}
	}



	render(){
		return (
			<div>
			<p>All Music</p>
			{this.state.musicList.map(x => <h1>{x}<button onClick={() =>this.handleLike(x)}>like{this.state.likeList}</button><button onClick={() =>this.handleListen(x)}>listen</button></h1>)}
			<p>Like Music</p>
			{this.state.likeList.map(x => <h1>{x}<button onClick={() =>this.handleLike(x)}>like{this.state.likeList}</button><button onClick={() =>this.handleListen(x)}>listen</button></h1>)}
			<p>All Music</p>
			{this.state.listenList.map(x => <h1>{x}<button onClick={() =>this.handleLike(x)}>like{this.state.listenList}</button><button onClick={() =>this.handleListen(x)}>listen</button></h1>)}
			</div>
			)
		
	}
}

const element = <ItemLists/>

ReactDOM.render(element,
	document.getElementById('root'));
