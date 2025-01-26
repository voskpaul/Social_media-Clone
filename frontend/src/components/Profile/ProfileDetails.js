import React from 'react';

function ProfileDetails({ profile }) {
  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
    </div>
  );
}

export default ProfileDetails;

