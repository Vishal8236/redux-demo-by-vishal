import React, { Component } from 'react';
import {buycake} from '../redux/index';
import {connect} from 'react-redux'; 

function CakeConatiner(props) {
        return (
            <div>
                Number of cakes - {props.numberOfCake}<br/><br/>
                <button onClick={props.buycake}>Buy Cake</button>
            </div>
        );
}
const mapStateToProps = state =>{
    return{
        numberOfCake : state.numberOfCake
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buycake: () => dispatch(buycake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (CakeConatiner);