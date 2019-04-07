import React, { Component } from "react";
import "./App.css";
import GameScreen from "./GameScreen";
import  { connect } from 'react-redux';
import actions from './reducers/actions';

class App extends Component {
	componentDidMount(){
		this.audio.onloadedmetadata = (e)=>{
			this.audio && this.audio.play()
		}
	}
	render() {
		const { game, action } = this.props;

		return (
			<div className="App">
				<audio ref={node=>this.audio = node} src="https://storage.googleapis.com/assetlib/3a4b2832-e9aa-4c23-a13d-bdaea0a8bd43.mp3" />
				<GameScreen action={action} game={game}/>
			</div>
		);
	}
}

export default connect(state => {
	return {
		...state
	}
},{
	...actions
})(App);
