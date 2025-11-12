import React from "react";

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        followers: 0,
        avatar_url: null,
        bio: "",
      },
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/siddhantsin343");
      const json = await data.json();

      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const { name, location, followers, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About Me</h1>

          {avatar_url && (
            <img
              src={avatar_url}
              alt={name}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-md"
            />
          )}

          <h2 className="text-xl font-semibold text-gray-700">👤 {name}</h2>
          <h3 className="text-gray-600 mt-1">📍 {location}</h3>

          <p className="mt-3 text-gray-700 italic">
            {bio || "No bio available"}
          </p>

          <div className="mt-4 bg-blue-50 rounded-lg p-3 text-blue-800 font-medium">
            Followers: {followers}
          </div>

          <a
            href="https://github.com/siddhantsin343"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Visit GitHub Profile
          </a>

          <p className="mt-4 text-gray-500 text-sm">
            Contact: <span className="font-semibold">@siddhantsin343</span>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
