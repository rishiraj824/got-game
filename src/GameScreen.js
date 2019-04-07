import React, { Component } from "react";
import "./App.css";
import immunitiesMap from "./reducers/immunities";

export default ( { game, action }) => {
	const { scene = {}, coins, immunities, end } = game;
	console.log(game);
	return (
		<div className="board-container">
			<div className="board">
			{end?<div>
				<p>Just like your Kingdom, your Business also needs Insurance.</p>
				<div className="image-container">
					<img className="image" alt="img" src={'https://lh3.googleusercontent.com/FmObpY0Ufs_Ht9rDkS6KyDCNFG9qRUbsDqQ9OpcoMFPa7sV7oKtazTDkRLicjZFJ2l4sdhKrrM6Tg-ilFPaWWa4=s0'} />
				</div>
				<br />
				<br />
				<button key={0} onClick={()=>window.open('https://lendingkart.com')} className="eightbit-btn"> Go Risk Free with Lendking Kart. </button>
				<br />
				{/*<button key={2} onClick={()=>window.open('https://www.policybazaar.com/corporate-insurance/articles/corporate-insurance-and-features/')} className="eightbit-btn eightbit-btn--reset">Learn More about available corporate insurance policies.</button>*/}
				<br/>
				<button key={1} onClick={!end ? action.bind(null, scene.opt2.action) : action.bind(null, "RESTART")} className="eightbit-btn eightbit-btn--reset"> Play Again </button>
			</div> : <div>
				<div className='meta'>
					<p style={{display: 'flex', 
					lineHeight: '30px'}}>
						<img src="https://lh3.googleusercontent.com/5gzPMI5yTHGAklykPSzmj_DvuA00qIjC58k9QwhK2JqJsXj_k33VbDqWM-3rb8hnMRcGnQnSwS9vqMDrquTG1MQ=s0"/> {coins}
					</p>
					<div className='immunity'>{immunities.map((immunity,index)=> <img key={index} src={immunitiesMap[immunity].url}/>)}</div>
				</div>
				<div className="image-container">
					<img className="image" alt="img" src={scene.url} />
				</div>
				<br />
				<p>
				{scene.desc}
				</p>
				<br />
				{scene.opt1 && <button key={0} onClick={action.bind(null, scene.opt1.action)} className="eightbit-btn"> {scene.opt1.desc} </button> }
				<br />
				<br />
				{scene.opt2 && <button key={1} onClick={action.bind(null, scene.opt2.action)} className="eightbit-btn eightbit-btn--reset"> {scene.opt2.desc} </button>}				
			</div>}			
		</div>
		</div>
	);
};
