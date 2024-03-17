import './ProfileAvatar.css';

export default function ProfileAvatar(props) {
  console.log("props (not undefined)",props)
  const backgroundImage = `url("https://assets.ohary37.com/avatars/${props.id}.jpg")`;
  const styles = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div 
      className="profile-avatar"
      style={styles}
    ></div>
  );
}