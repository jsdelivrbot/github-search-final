import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class UserList extends Component {
    renderUsers() {
        console.log(this.props.users);
        return <div>Okay then!</div>;
    }
    
    render(){
        return(
            <div>{this.renderUsers()}</div>
        );
    }
}

function mapStateToProps({users}) {
    return { users };
}

export default connect(mapStateToProps)(UserList);