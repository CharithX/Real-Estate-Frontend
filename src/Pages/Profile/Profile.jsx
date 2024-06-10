import { useNavigate } from "react-router-dom";
import Chat from "../../components/Chat/Chat";
import List from "../../components/List/List";
import APIRequest from "../../lib/APIRequest";
import "./Profile.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const  { updateUser, currentUser} = useContext(AuthContext)

  const navigate  = useNavigate()
  const handleLogout = async () => {
    try {
       await APIRequest.post("/auth/logout")
      updateUser(null)
       navigate("/")
    } catch (error) {
       console.log(error)
  }
  }
    return (
      <div className="profilePage">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <button>Update Profile</button>
            </div>
            <div className="info">
              <span>
                Avatar:
                <img src={currentUser.avatar || "./noavatar.jpg"} alt="" />
              </span>
              <span>
                Username: <b>{currentUser.username}</b>
              </span>
              <span>
                E-mail: <b>{currentUser.email}</b>
              </span>
              <button onClick={handleLogout}> Log out</button>
            </div>
            <div className="title">
              <h1>My List</h1>
              <button>Create New Post</button>
            </div>
            <List />
            <div className="title">
              <h1>Saved List</h1>
            </div>
            <List />
          </div>
        </div>
        <div className="chatContainer">
          <div className="wrapper">
            <Chat />
          </div>
        </div>
      </div>
    );
}

export default Profile;
