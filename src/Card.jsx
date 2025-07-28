import profilePic from "./assets/profile.jpg";

function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6 text-center">
      <img
        src={profilePic}
        alt="Profile picture"
        className="h-40 w-40 mx-auto rounded-full object-cover mb-4"
      />
      <h1 className="text-xl font-semibold text-gray-800">Shamsudheen</h1>
      <p className="text-gray-600">Full Stack Developer</p>
    </div>
  );
}

export default Card;
