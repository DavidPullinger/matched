import { useState } from 'react'
import userProfile from '../../assets/userProfile.jpg'
import './UserFeed.css';

function UserFeed(props) {
    const [users, setUsers] = useState([
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
        {
            name: "John Doe 1",
            email: "johndoe1@email.com",
            interests: ['chess', 'drinking tea']
        },
    ])

    return (
        <div className="wrapper">
            <h1>Your User Feed</h1>
            {users.map((user) => {
                return <UserCard currentUser={props.currentUser} user={user} />
            })}
        </div>
    )
}

function useInterests(currentUser, user) {
    const userInterests = currentUser.interests;
    let count = 0;
    for (const interest of user.interests) {
        if (userInterests.includes(interest)) {
            count++;
        }
    }
    return count;
}

function UserCard(props) {
    const count = useInterests(props.currentUser, props.user);
    return (
        <div className="cardDetails">
            <div><img alt="profile pic" src={userProfile}></img></div>
            <div><p>Name:</p><p>{props.user.name}</p></div>
            <div><p>Email:</p><p>{props.user.email}</p></div>
            <div>
                <p>Interests you have in common:</p><p>{count}</p>
            </div>
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
            <p>#{props.interest}</p>
        </div>
    )
}

export default UserFeed;