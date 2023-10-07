import { Star } from "lucide-react";
import "./ExploreRepo.css";

const ExploreRepo = () => {
  return (
    <div className="explore">
      <div className="exp-heading">Explore repositories</div>
      {[1, 2, 3].map((el) => (
        <div className="exp-item">
          <div className="exp-header">
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
              <div className="exp-repo-star">
                <Star size={15} strokeWidth={2} />
              </div>
            </div>
          </div>
          <div className="exp-body">
            Accelerate your web app development | Build fast. Run fast.
          </div>
          <div className="exp-footer">
            <div className="exp-rating">
              <Star size={14} />
              <span>53.7k</span>
            </div>
            <div className="language">
              <span className="color" />
              <span className="lang">Python</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreRepo;
