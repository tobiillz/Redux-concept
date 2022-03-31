import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        console.log(this.props.ctr)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} /> 
                 {/* {() => this.counterChangedHandler( 'inc' )} */}
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                 {/* () => this.counterChangedHandler( 'dec' ) */}
                <CounterControl label="Add 10" clicked={this.props.addFiveCounter}  />
                 {/* () => this.counterChangedHandler( 'add', 5 ) */}
                <CounterControl label="Subtract 15" clicked={this.props.subFiveCounter}  />
                 {/* () => this.counterChangedHandler( 'sub', 5 ) */}
                 <hr />
                 <button onClick={this.props.onStoreResult}>Store Result</button>
                 <ul>
                     
                     {this.props.storedResults.map(val => 
                     <li onClick= {this.props.onDeleteResult}>{val}</li>)
                     }
                 </ul>

            </div>
        );
    }
}
const mapStateToProps = (stateName) => {
    console.log('New:',stateName)
    return({
        ctr: stateName.initialCounter,
        storedResults: stateName.results
    }) ;
};

const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        addFiveCounter: () => dispatch({type: 'ADD', payload : 10}),
        subFiveCounter: () => dispatch({type: 'SUB', payload : 15}),
        onStoreResult:  () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})
        
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);