import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
        console.log('Counter - Rendered');
        return (
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">Reset</button>
                    { counters.map((counter, index) => ( 
                        <div key={index}>
                            <Counter 
                            key={counter.id} 
                            onDelete={onDelete} 
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            counter= {counter}>
                            </Counter>
                        </div>
                        ))}
            </div>
        );
    };
}
 
export default Counters ;