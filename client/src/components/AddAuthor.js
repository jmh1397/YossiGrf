import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorQuery , addAuthorMutation } from '../queries/queries';

class AddAuthor extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
        };
    }
    submitForm(e){
        e.preventDefault()
        // use the addBookMutation
        this.props.AddAuthorMutation({
            variables: {
                name: this.state.name,
                age: this.state.age
            },
            refetchQueries: [{ query: getAuthorQuery }]
        });
    }
    render(){
        return(
            <form id="add-author" onSubmit={ this.submitForm.bind(this) } >
                <div className="field">
                    <label>Author Name:</label>
                    <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="field">
                    <label>Age:</label>
                    <input type="number" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(addAuthorMutation, { name: "addAuthorMutation" })
)(AddAuthor);
