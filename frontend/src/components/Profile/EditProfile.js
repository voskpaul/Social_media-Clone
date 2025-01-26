import React, { useState } from 'react';
import API from '../../utils/api';

function EditProfile({ profile }) {
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/users/${profile._id}`, { name, bio });
      alert('Profile updated successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
}

export default EditProfile;

