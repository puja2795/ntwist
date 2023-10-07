import React from "react";
import "./HomePage.css";
import { ListFilter, MoveRight } from "lucide-react";
import ThreadCard from "../../Components/ThreadCard";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiGitRepositoryLine } from "react-icons/ri";
import RepoCard from "../../Components/Repocard";
import ChangeHistory from "../../Components/ChangeHistory";
import ExploreRepo from "../../Components/ExploreRepo";

const repos = [
  "puja2795/Shopon",
  "puja2795/shutpoint1924",
  "puja2795/mindlesswool6764",
  "puja2795/trikl",
  "puja2795/platformcommon",
  "puja2795/vigorouscrowd8463",
  "puja2795/ntwist",
  "puja2795/PostManagementSystemEval",
  "puja2795/Codehall",
  "puja2795/flam",
  "puja2795/revisionjsonserver",
  "puja2795/evaluationrepo",
];

const HomePage = () => {
  return (
    <div className="home">
      <div className="repos">
        {/* <button>Top</button>
        <button className="bottom-btn">Bottom</button> */}
        <div className="profile">
          <div className="repo-avatar">
            <img
              src="https://avatars.githubusercontent.com/u/112865126?v=4"
              alt="avatar"
              height={"100%"}
              style={{ borderRadius: "50%", border: "1px solid black" }}
            />
          </div>
          <div style={{ fontSize: "14px", fontWeight: "500" }}>puja2795</div>
          <MdOutlineArrowDropDown size={20} />
        </div>
        <div className="top-repo">
          <div className="all-text">Top Repositories</div>
          <button className="repo-btn">
            <RiGitRepositoryLine size={15} />
            <div>New</div>
          </button>
        </div>
        <input
          type="text"
          placeholder="Find a Repository..."
          className="find-repo"
        />
        {repos.map((repo, index) => {
          return <RepoCard repo={repo} key={index} />;
        })}
        <div style={{ marginTop: "20px" }} className="all-text">
          Recent activity
        </div>
        <div className="recent-div">
          When you take actions across GitHub, we’ll provide links to that
          activity here.
        </div>
        <div style={{ marginTop: "20px" }} className="all-text">
          Your teams
        </div>
        <input
          type="text"
          placeholder="Find a team..."
          className="find-repo"
          style={{ marginBottom: "40px" }}
        />
      </div>
      <div className="container">
        <div className="main-container">
          <div className="home-div">
            <div className="homecontent">Home</div>
            <div className="thread-heading">
              <a href="" className="feedback-link">
                Send Feedback
              </a>
              <button className="filter-btn">
                <ListFilter size={18} strokeWidth={2} />
                <div>Filter</div>
                <div className="thread-count">8</div>
              </button>
            </div>
          </div>
          <div className="threads">
            {[1, 2, 3, 4, 5].map((el) => (
              <ThreadCard key={el} />
            ))}
          </div>
        </div>
        <div className="extras">
          <div className="changes">
            <div
              style={{ fontSize: "14px", fontWeight: "600", marginLeft: "6px" }}
            >
              Latest Changes
            </div>
            <ChangeHistory />
            <div className="viewlog-link">
              <span>View changelog</span> <MoveRight size={12} />
            </div>
          </div>
          <ExploreRepo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
