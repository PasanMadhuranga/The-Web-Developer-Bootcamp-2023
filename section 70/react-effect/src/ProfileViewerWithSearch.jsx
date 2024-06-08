import { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";
import { ThreeDots } from "react-loader-spinner";

const BASE_URL = "https://api.github.com/users";

/** GitHub Profile Component --- shows info from GH API */

function ProfileViewerWithSearch() {
  const [username, setUsername] = useState("colt");
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  useEffect(
    function fetchUserOnUsernameChange() {
      async function fetchUser() {
        const userResult = await axios.get(`${BASE_URL}/${username}`);
        setProfile({ data: userResult.data, isLoading: false });
      }
      fetchUser();
    },
    [username]
  );

  function search(username) {
    setProfile({ data: null, isLoading: true });
    setUsername(username);
  }

  if (profile.isLoading)
    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="white"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );

  return (
    <div>
      <ProfileSearchForm search={search} />
      <b>{profile.data.name}</b>
      <img src={profile.data.avatar_url} />
    </div>
  );
}

export default ProfileViewerWithSearch;
