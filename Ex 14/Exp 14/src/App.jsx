import React from 'react';
import ImageDisplay from './components/ImageDisplay';
import './App.css';
import NovellServicesLogin from './components/NovellServicesLogin';
import ProfileImage from './components/ProfileImage';
import UserInfo from './components/UserInfo';
import UserPosts from './components/UserPosts';

export const ProfilePage = () => {
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

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* <ImageDisplay /> */}
      {/* <NovellServicesLogin /> */}
      <ProfilePage />
    </div>
  );
};

export default App;
