import React from 'react';
import { connect } from 'react-redux';


class SmurfForm extends React.Component {

    handleChanges = event => {
        // updates state using event changes 

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitItem = event => {
        // allows tasks to be added 
        event.preventDefault();

        this.post.id = Date.now();

        this.postSmurfData(this.post);
    };

    render() {
        return (
            <div className="todo-form-container">
                <form onSubmit={this.submitItem} className="todo-form">
                    <input
                        type="text"
                        value={this.post.name}
                        name="item"
                        onChange={this.handleChanges}
                        className="input"
                        placeholder="Enter Smurf Name"
                    />

                    <input
                        type="text"
                        value={this.post.age}
                        name="item"
                        onChange={this.handleChanges}
                        className="input"
                        placeholder="Enter Smurf Age"
                    />

                    <input
                        type="text"
                        value={this.post.height}
                        name="item"
                        onChange={this.handleChanges}
                        className="input"
                        placeholder="Enter Smurf Height (without units)"
                    />  

                    <button id="add">Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoadingPost: state.isLoadingSmurf,
        post: state.post
    };
};
  
export default connect(
    mapStateToProps,
    { postSmurfData }
)(SmurfForm);
