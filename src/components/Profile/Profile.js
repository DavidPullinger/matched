import "./Profile.css"
import userProfile from '../../assets/userProfile.jpg';

function Profile() {
    return (
        <div>
            <div className="picturesWrapper">
                <img className="header" alt="profile header" src="https://images.unsplash.com/photo-1507805949908-c615a233b995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"></img>
                <img className="profile_pic" alt="profile pic" src={userProfile}></img>
            </div>
            <div className="detailsWrapper">
                <p>Name:</p>
                <p>Email:</p>
            </div>
        </div>
    );
}

export default Profile;