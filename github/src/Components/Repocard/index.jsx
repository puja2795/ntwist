import React from "react";
import "./RepoCard.css";

const RepoCard = ({ repo }) => {
  return (
    <div className="repocard">
      <div className="repo-subavatar">
        <img
          src="https://avatars.githubusercontent.com/u/112865126?v=4"
          alt="avatar"
          height={"100%"}
          style={{ borderRadius: "50%", border: "1px solid black" }}
        />
        <div>{repo}</div>
      </div>
    </div>
  );
};

export default RepoCard;
