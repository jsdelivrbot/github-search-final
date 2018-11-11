import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';

class UserDetail extends Component {
    componentDidMount() {
        const username = this.props.match.params.username;
        this.props.fetchUser(username);
    }

    render(){
        const user = this.props.user;

        if(!user){
            return <h1>Loading....</h1>;
        }

        return (
            <div>
                <h1>{user.login}</h1>
                <img className="img-thumbnail" src={user.avatar_url}/>
                <h3>Public Repos: {user.public_repos}</h3>
                <h3>Followers: {user.followers}</h3>
                <h3>Following: {user.following}</h3>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return { user : users };
}

export default connect(mapStateToProps, { fetchUser })(UserDetail);