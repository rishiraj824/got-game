import { combineReducers } from 'redux';
import types from './types';
import immunityMap from './immunities';
import attacks from './attacks';
import scenes from './scenes';

const DEFAULT_STATE = {
    coins: 1000,
    immunities: [],
    scene: {
        desc: 'You have inherited 1000 coins from the King. Hail the king!',
        "url": "https://lh3.googleusercontent.com/xDai9XiuDsh8azL0mqm9HL-yF9n1ERM5pwo3co4yY9x4fL9P5OjniW-UmhI9O65pkyFnSU8zggk9iyKc7_BdKIs=s0",
        opt1: {
            desc : "Hail the king",
            action: types.SKIP,
        }
    }    
}

const nextScene = () => {
    return scenes[Math.floor(Math.random()*scenes.length)];
};

const calculateCoins = (coins, attackType, currentImmunities)  => {
    const immunityPresent = currentImmunities.indexOf(attackType.immunity) ;
    if(immunityPresent> -1){
        return coins - attacks[attackType].damage + 2 * immunityMap[currentImmunities[immunityPresent].type].cost; 
    }
    return  coins - attacks[attackType].damage;
}
const game = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.ADD_CASH:
            return {
                ...state,
                coins: state.coins + state.scene.coins,
                scene: nextScene(state),
                end: state.coins + state.scene.coins <= 0  
            }
        case types.SUB_CASH:
            return {
                ...state,
                coins: state.coins - state.scene.coins,
                scene: nextScene(state),
                end: state.coins - state.scene.coins <= 0  ,
            }
        case types.ATTACK:
            const type = state.scene.attack_type;
            return {
                ...state,
                coins: calculateCoins(state.coins, type, state.immunities),
                scene: nextScene(state),
                end: calculateCoins(state.coins, type, state.immunities) <= 0  ,
            } 
        case types.BUY_IMMUNITY:
            const immunity_type  = state.scene.immunity_type || '';
            return {
                ...state,
                coins: state.coins - immunityMap[immunity_type].cost,
                immunities: [...state.immunities, immunity_type],
                scene: nextScene(state), 
                end: state.coins - immunityMap[immunity_type].cost <= 0  ,
            }        
        case types.SKIP:
            return {
                ...state,
                scene: nextScene(state),
                end: state.coins <= 0
            }
        case types.END:
            return {
                ...state,
                end: true
            }
        case types.RESTART:
            return DEFAULT_STATE
        default:
            return state
    }

}
export default combineReducers({
    game,
    
})