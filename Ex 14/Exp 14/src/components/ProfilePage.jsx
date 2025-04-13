import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'A passionate web developer.',
    profileImage: 'https://via.placeholder.com/150',
    posts: ['My first post', 'Learning React', 'Building awesome apps'],
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <ProfileImage src={user.profileImage} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
