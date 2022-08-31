import { getByPlaceholderText } from '@testing-library/react';
import React, { Component } from 'react';
import DropDown from './dropdown';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }
    state = { 
        value: this.props.counter.value,
        tags: []
        // imageUrl: 'https://picsum.photos/200'
        
     };
        
    style = {
        fontSize: 10,
        fontWeight: "bold"
    };
    
    // constructor() {
    //     super(0);
    //     // console.log('Constructor', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement = () => {
    //     // console.log('Increment Clicked', this); 
    //     // this.state.count++;
    //     // console.log(product);
    //     this.setState({ value: this.state.value + 1 });
    // };
    

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1});
    // };

    // renderTags() {
        // console.log(this.state.tags);
        // if (this.state.tags === null) {
        //     console.log('IF');
        //     return <p>There are no tags!</p>;
        // } else {
        //     console.log('ELSE');
        //     return <ul>{this.state.tags?.map(tag => <li key={tag}>{tag}</li>)}</ul>;
        // }
    //     if (this.state.tags.length === 0) {
    //                 return <p>There are no tags!</p>;
    //             } else {
    //                 return (<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>);
    //             }
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatvalue() {
        const { value } = this.props.counter;
        
        return value === 0 ? 'Zero' : value;
        
    }
    render() {  
        console.log('Counter - Rendered');
        // let classes = this.getBadgeClasses();
        // console.log(this.props);

        return (
        <div className='border rounded m-2 p-2, bgcolor-dark' style={{backgroundImage: "linear-gradient(yellow,lightgreen)"}}>
            <p><b>Item Name:</b> Unknown</p>
            <p><b>$ 00.00</b></p>
            <DropDown className="m-3"/>
            {/* <img src={this.state.imageUrl} alt=""></img> */}
            {/* {this.props.childern}/ */}
            {/* <h4>{this.props.id}</h4> */}
            <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
            <button onClick={ () => this.props.onIncrement(this.props.counter) } 
            className="btn btn-secondary btn-sm">Increment +</button>
            <button onClick={ () => this.props.onDecrement(this.props.counter) }
            className="btn btn-secondary btn-sm m-2">Decrement -</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2">Delete</button>
            <button className='btn btn-dark rounded-circle btn-sm  m-2'>Info</button>
            {/* < form /> */}
            <span className={'this.myForm()'}></span>
            {/* <ul>
                { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
            </ul> */}
            {/* { this.state.tags.length === 0 && 'Please create a new tag!' }
            {this.renderTags()} */}
        </div>);
    }
    
}
// 
//  linear-gradient (white,red)
export default Counter;

// const myElement = <h1>React is{5 + 5} times better with JSX </h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);