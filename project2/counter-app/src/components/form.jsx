import React, { Component } from 'react';

class Form extends Component {
    // state = {  }
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',

        }
    } 
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        console.log("evernt",event);
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(this.state.username + " " + this.state.comments + " " + this.state.topic);
        event.preventdefault()
    } 
    render() { 
        const { username, comments, topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            
                <h1>Survey Form</h1>
                <br />
                <div>  
                    <label>Username:</label>
                    <br />
                    <input 
                    type="text"
                    value={username}
                    onChange={this.handleUsernameChange}
                     />
                </div>
                {/* <br /> */}
                <div> 
                    <label >Comments:</label>
                    <br />
                    <textarea value={comments} placeholder={"Select"} onChange={this.handleCommentsChange} ></textarea>
                </div>
                {/* <br /> */}
                <div>
                    <label>Topic:</label>
                    <br />
                    <select value={topic} onChange={this.handleTopicChange}>
                    <option disabled value="" selected>-Choose and option-</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br />
                <div></div>
                <button type="submit">Submit</button>
            
            </form>
        );
    }
}
 
export default Form;