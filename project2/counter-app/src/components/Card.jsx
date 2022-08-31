import React, { Component } from 'react';
import Counter from './counter';
import Counters from './counters';

class Card extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div style={{float: "left", display: "flex"}}>
                <div class="card" style={{width: "18rem"}}>
                <img src="image/car1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"></li>
                    <li class="list-group-item">
                    {/* <button onClick={ () => this.props.onIncrement(this.props.counter) } 
            className="btn btn-secondary btn-sm">Increment +</button> */}
                    </li>
                    <li class="list-group-item">
                    {/* <button onClick={ () => this.props.onDecrement(this.props.counter) }
            className="btn btn-secondary btn-sm m-2">Decrement -</button> */}
                    </li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>
            </div>
            <br/>
            <div  >
                <div class="card" style={{width: "18rem"}}>
                <img src="image/car2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>
            </div>
            <br/>
            <div  >
                <div class="card" style={{width: "18rem"}}>
                <img src="image/car5.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>
            </div>
            <br/>
            <div  >
                <div class="card" style={{width: "18rem"}}>
                <img src="image/car4.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
                </div>
            </div>
        </>
        );
    }
}
 
export default Card;