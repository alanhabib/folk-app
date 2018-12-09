import React, { Component } from "react";
import InputList from "../../Component/InputList/InputList";
import "./UserInput.css";

class userInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            email: "",
            address: "",
            textCollection: []
        }
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef()
    }

    textValueHandler = (event) => {
        console.log(event)
        // put target value as the target name which we will get later in our inputs
        this.setState({ [event.target.name]: event.target.value })
    }

    inputTextHandler = (event) => {
        event.preventDefault()
        if (this.state.text === "") {
            console.log("You have to write something")
        } else {
            this.setState({
                text: "",
                address: "",
                textCollection: [...this.state.textCollection,
                this.state.text,
                this.state.email,
                this.state.address
                ]
            })
            // Reset the text input using the raw DOM API
            // Note: here I am accessing "current" to get the DOM node
            this.textInput.current.reset();
        }
    }

    render() {

        return (
            <React.Fragment>
                <form className="userInputForm" onSubmit={this.inputTextHandler} ref={this.textInput} >
                    <input placeholder="Write some text..." type="text" name="text" onChange={this.textValueHandler} />
                    <input type="email" placeholder="Write your email..." name="email" onChange={this.textValueHandler} />
                    <input type="text" placeholder="Write your address..." name="address" onChange={this.textValueHandler} />
                    <button className="userInputButton">Submit</button>
                </form>
                <InputList textCollection={this.state.textCollection} className="pleaseWork" />
            </React.Fragment>
        )
    }
}

export default userInput;