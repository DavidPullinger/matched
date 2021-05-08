import "./Profile.css"
import userProfile from '../../assets/userProfile.jpg';

function Profile(props) {
    return (
        <div>
            <div className="picturesWrapper">
                <div className="headerContainer">
                    <img className="header" alt="profile header" src="https://images.unsplash.com/photo-1507805949908-c615a233b995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></img>
                    
                </div><img className="profile_pic" alt="profile pic" src={userProfile}></img>
            </div>
            <div className="detailsWrapper">
                <div><p>Name:</p><p>{props.user.name}</p></div>
                <div><p>Email:</p><p>{props.user.email}</p></div>
            </div>
        </div>
    );
}

export default Profile;