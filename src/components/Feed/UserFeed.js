import { useState } from 'react'
import './UserFeed.css';

function UserFeed() {
    const [users, setUsers] = useState([
        {
            name: "John Doe 1",
            email: "johndoe1@email.com",
            interests: ['chess', 'drinking tea']
        },
        {
            name: "John Doe 2",
            email: "johndoe2@email.com",
            interests: ['drinking coffee', 'backgammon',]
        },
        {
            name: "John Doe 3",
            email: "johndoe3@email.com",
            interests: ['coding', 'backgammon',]
        },
    ])
    return (
        <div className="wrapper">
            <h1>Your User Feed</h1>
            {users.map((user) => {
                return <UserCard user={user} />
            })}
        </div>
    )
}

function UserCard(props) {
    return (
        <div className="cardDetails">
            <div><p>Name:</p><p>{props.user.name}</p></div>
            <div><p>Email:</p><p>{props.user.email}</p></div>
            <div>
                <p>Interests:</p>
                <div className="interestList">{props.user.interests.map((interest) => { return <Interest interest={interest} /> })}</div>
            </div>
        </div>
    )
}

function Interest(props) {
    return (
        <div className="interestWrapper">
            <p>{props.interest}</p>
        </div>
    )
}

export default UserFeed;