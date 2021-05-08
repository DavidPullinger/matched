import { useState } from 'react'
import userProfile from '../../assets/userProfile.jpg'
import chatIcon from '../../assets/ChatIcon.png'
import './UserFeed.css';
<<<<<<< Updated upstream
import pp1 from '../../assets/profile4.jpg';
import pp2 from '../../assets/profile8.jpg';
import pp3 from '../../assets/profile6.jpg';
import pp4 from '../../assets/profile5.jpg';
import pp5 from '../../assets/profile2.png';
import pp6 from '../../assets/profile3.png';
import pp7 from '../../assets/profile1.png';
import pp8 from '../../assets/profile7.jpg';
import pp9 from '../../assets/profile9.jpg';
import pp10 from '../../assets/profile10.jpg';

=======
import { useHistory } from 'react-router';
>>>>>>> Stashed changes

function UserFeed(props) {
    const [users, setUsers] = useState([
         {
            name: "Owen Venter",
            email: "VNTOWE001@myuct.ac.za",
            interests: ['coding', 'backgammon'],
            pp: pp2
        },
        {
            name: "Meriam Elabor",
            email: "ELBMER012@myuct.ac.za",
            interests: ['coding','macrame','drinking tea'],
            pp: pp5

        },

        {
            name: "David Pullinger",
            email: "PLLDAV003@uct.ac.za",
            interests: ['coffee', 'backgammon','chess'],
            pp: pp1
        },
      
        {
            name: "Nivan Poken",
            email: "PKNNIV001@myuct.ac.za",
            interests: ['chess', 'drinking tea','baseball'],
            pp: pp3
        },
        {
            name: "Melissa Slaymaker",
            email: "SLYMEL024@myUCT.ac.za",
            interests: ['collecting art','ceramics','chess','coffee'],
            pp: pp6

        },
         {
            name: "Micaela Dale",
            email: "DLXMIC001@myuct.ac.za",
            interests: ['reading','animals','drinking tea'],
            pp: pp8

        },
        {
            name: "John Smith",
            email: "SMTJOH001@myuct",
            interests: ['hiking', 'writing','animals','coffee'],
            pp: pp9
        },
        {
            name: "Chloe Davies",
            email: "DVSCHL001@myuct.ac.za",
            interests: ['chess','writing','macrame','photography'],
            pp: pp4
        },
        
        
        {
            name: "Zandile Keebine",
            email: "KBNZAN001@myuct.ac.za",
            interests: ['gardening','hiking','chess','photography'],
            pp: pp7
        },
       
        {
            name: "Jane deKlerk",
            email: "DKLJAN@myuct.ac.za",
            interests: ['collecting art', 'ceramics','chess','tennis'],
            pp: pp10
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
    const history = useHistory();

    return (
        <div>
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
                <div className="chat">
                    <img onClick={()=> history.push("/chat")} src={chatIcon}></img>
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