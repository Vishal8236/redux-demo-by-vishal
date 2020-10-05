import {BUY_CAKE} from './cakeType';

const initialstate={
    numberOfCake : 10
}

const cakeReducer = (state = initialstate, action) =>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numberOfCake : state.numberOfCake-1
            }
        default : return state    
    }
}
export default cakeReducer;