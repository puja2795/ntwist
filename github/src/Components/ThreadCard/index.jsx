import { MoreHorizontal, Star, ChevronDown } from "lucide-react";
import "./ThreadCard.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

const ThreadCard = () => {
  return (
    <div className="card-body">
      <div className="card-heading">
        <div className="tinfo">
          <div className="avatar">
            <img
              src="https://avatars.githubusercontent.com/u/112865126?v=4"
              alt=""
              height={"100%"}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="infowrap">
            <div className="info">
              <span>
                <a href="">eraltafs</a>
              </span>
              <span>created a repository</span>
            </div>
            <div className="time">14 hours ago</div>
          </div>
        </div>
        <button className="more-btn">
          <MoreHorizontal />
        </button>
      </div>
      <div className="repo-info">
        <div className="repo-wrap">
          <div className="path-wrap">
            <div className="avatar small-avatar">
              <img
                src="https://avatars.githubusercontent.com/u/112865126?v=4"
                alt=""
                height={"100%"}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <span className="path">eraltafs/Indi.gg</span>
          </div>
          <div className="creds">
            <Star size={15} strokeWidth={2} />
            Star
            <div className="dropdown">
              <MdOutlineArrowDropDown size={20} />
            </div>
          </div>
        </div>
        <div className="desc">
          An E-Commerce website with todo by using html ,css and javascript
        </div>
        <div className="languages">
          {["JavaScript", "React", "CSS"].map((lan) => (
            <div className="language">
              <span className="color" />
              <span className="lang">{lan}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
