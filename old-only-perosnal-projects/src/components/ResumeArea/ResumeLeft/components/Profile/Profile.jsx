import React from "react";
import "./profile.css";
import { RESUME_DATA } from "../../../../../config/";

const Profile = () => {
  return (
    <>
      <section
        className="profile section"
        id="profile"
        data-label="Profile"
        data-icon="BiUser"
      >
        <h2 className="section-title">Profile</h2>
        <div className="profile__description">
          {RESUME_DATA.profile__description.map((el, ind) => (
            <React.Fragment key={ind}>
              {el}
              <br />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default Profile;
