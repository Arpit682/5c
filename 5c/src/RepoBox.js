import React from 'react';

class RepoBox extends React.Component {

    render () {
        const {
            name,
            description
        } = this.props.repo;
        const {
            avatar_url
        } = this.props.repo.owner;
        return (
            <div className="repoBox" onClick={() => {this.props.openRepo(this.props.repo)}}>
                <span>{name}</span>
                <span>{description}</span>
                <img width="30px" height="30px" src={avatar_url} />
            </div>
        );
    };
} 

export default RepoBox;