import { Redirect } from "react-router"

const Profile = ({ user }) => {

    if(user) {
        return (
            <div>
                <h1>{user.displayName}'s Profile</h1>
                <img src={user.photos[0].value} alt="profile"/>
                <p>Logged in from {user.provider}</p>
            </div>
        )
    } else {
        return <Redirect to="/login" />
    }
}

export default Profile