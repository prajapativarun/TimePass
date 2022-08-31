// import logo from './logo.svg';
import Carousel from './components/Carousel';
import NavBar from './components/navbar';
import DropDown from './components/dropdown';
import Counters from './components/counters';
import Form from './components/form';
import Card from './components/Card';

import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
class App extends Component {
  state = { 
     counters: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
 };
 constructor() {
  super();
  console.log('App - Constructor', );
  // this.state = this.props.something;
 };
 componentDidMount() {
  console.log('App - Mounted');
};
  handleIncrement = counter => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter};
    counters[index].value++;
    // console.log(this.state.counters[index]);
    this.setState({ counters });

 };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
};
 handleDelete = (counterId) => {
    // console.log('Event Handler Called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
};
 handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counter[index] = { ...counter };
  counters[index].value = counter[index].value > 0 ? (counters[index].value - 1) : 0;
  this.setState({ counters });
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
        e.preventDefault();
    }
};

<input               
  type="number"
  min="0"
  onKeyPress={preventMinus}
/>
  if(this.props.counters && this.state.counters === 0){
    this.setState({
        counter:0
    });
  }else {
    this.setState({
        counter: this.props.counters - 1
    });
  }
}

render() {
  console.log('App - Rendered');

  return (
    <React.Fragment>
      <div /*className='[<Carousel />]'*/ style={{backgroundColor: "lightblue"}}>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className='container' >
      <div style={{display: "flex", justifyContent: "space-evenly", margin: "10px" }}><Card /></div>
        <Counters 
        style={{}}
        onReset={this.handleReset}
        counters={this.state.counters}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        />
        <div style={{border: "dashed black 4px" , padding: "20px" , alignItems: "center" , backgroundColor: "grey" }}>
        <Form />
        </div>
      </main>   
      </div>
    </React.Fragment>
    );
  };
};
export default App;
