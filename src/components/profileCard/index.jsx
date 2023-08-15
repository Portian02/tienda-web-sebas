import "./styles.css";

const ProfileCard = ({ userInfo }) => {
  const { image, title, character, currency, value } = userInfo;

  return (
    <div className="profile-card">
      <img src={image?.img} alt="Profile" className="profile-picture" />
      <div className="profile-details">
        <h2>{`${title?.title} `}</h2>
        <p>Character:{character.character}</p>
        <p>{`${currency}${value}`}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
