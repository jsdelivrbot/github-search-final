import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchUsers(this.state.term);
        this.setState({term:''});
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="form-inline search-bar">
                <input 
                    type="text" 
                    className="form-control" 
                    id="search-input" 
                    value={this.state.term} 
                    onChange={this.onInputChange}
                />
                <button className="form-control btn btn-success">Search</button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchUsers}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);