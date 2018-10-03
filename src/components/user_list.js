import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class UserList extends Component {
    renderUsers(user) {
       return (
           <li className="list-group-item" key={user.id}>
                <img className="img-thumbnail" src={user.avatar_url}/>
                <h4 className="username">{user.login}</h4>
           </li>
       );
    }
    
    render(){
        return(
            <div className="user-list">
                <ul className="list-group">
                    {this.props.users.map(this.renderUsers)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return { users };
}

export default connect(mapStateToProps)(UserList);