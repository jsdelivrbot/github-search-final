import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class UserList extends Component {
    renderUsers(user) {
       return (
           <li className="list-group-item" key={user.id} data-id={ user.id }>
                <Link to={`/users/${user.login}`}>
                <img className="img-thumbnail" src={user.avatar_url}/>
                <h4 className="username">{user.login}</h4>
                </Link>
           </li>
       );
    }
    
    render(){
        // if(users.loading){
        //     return <h1>Loading.....</h1>;
        // }

        return(
            <div className="user-list">
                <ul className="list-group">
                    {this.props.users.payload.map(this.renderUsers)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({users}) {
    return { users };
}

export default connect(mapStateToProps)(UserList);