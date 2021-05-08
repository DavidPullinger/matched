import { useState } from 'react'
import userProfile from '../../assets/userProfile.jpg'
import chatIcon from '../../assets/ChatIcon.png'
import './UserFeed.css';

function UserFeed(props) {
    const [users, setUsers] = useState([
        {
            name: "David Pullinger",
            email: "PLLDAV003@uct.ac.za",
            interests: ['drinking coffee', 'backgammon','chess']
        },
        {
            name: "Owen Venter",
            email: "VNTOWE001@myuct.ac.za",
            interests: ['coding', 'backgammon']
        },
        {
            name: "Nivan Poken",
            email: "PKNNIV001@myuct.ac.za",
            interests: ['chess', 'drinking tea','baseball']
        },
        {
            name: "Chloe Davies",
            email: "DVSCHL001@myuct.ac.za",
            interests: ['chess','creative writing','macrame','photography']
        },
        {
            name: "Meriam Elabor",
            email: "ELBMER012@myuct.ac.za",
            interests: ['coding','macrame','drinking tea']

        },
        {
            name: "Melissa Slaymaker",
            email: "SLYMEL024@myUCT.ac.za",
            interests: ['collecting artwork','ceramics','chess','drinking coffee']

        },
        {
            name: "Zandile Keebine",
            email: "KBNZAN001@myuct.ac.za",
            interests: ['gardening','hiking','chess','photography']
        },
        {
            name: "Micaela Dale",
            email: "DLXMIC001@myuct.ac.za",
            interests: ['reading','animals','drinking tea']

        },
        {
            name: "John smith",
            email: "SMTJOH001@myuct",
            interests: ['hiking', 'creative writing','animals','drinking coffee']
        },
        {
            name: "Jane deKlerk",
            email: "DKLJAN@myuct.ac.za",
            interests: ['collecting artwork', 'ceramics','chess','tennis']
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
        <div>
            <div className="cardDetails">
                <div>
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
                <div className="chat">
                    <img src={chatIcon}></img>
                </div>
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