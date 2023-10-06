import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { TbMathGreater } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { VscIssues } from "react-icons/vsc";
import { BiGitPullRequest } from "react-icons/bi";
import { AiOutlineInbox } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="dashboard">
        <div className="dashboard-inner">
          <div className="hamburger">
            <GiHamburgerMenu />
          </div>
          <div className="logo">
            <BsGithub />
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "rgb(14, 17, 22)",
            }}
          >
            Dashboard
          </div>
        </div>
      </div>
      <div className="profile">
        <div className="search">
          <div
            style={{
              width: "80%",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "gray",
            }}
          >
            <GrSearch style={{ paddingLeft: "5px", fontSize: "20px" }} />
            <div className="type">
              Type
              <span
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "3px",
                    padding: "0 5px",
                  }}
                >
                  /
                </div>
                to search
              </span>
            </div>
          </div>
          <div
            style={{
              borderLeft: "1px solid black",
              width: "10%",
              height: "60%",
              margin: "auto",
              display: "flex",
              paddingLeft: "5px",
            }}
          >
            <TbMathGreater />_
          </div>
        </div>
        <div className="menu">
          <div className="menu-div">
            <AiOutlinePlus />
            <IoMdArrowDropdown />
          </div>
          <div className="menu-div">
            <VscIssues />
          </div>
          <div className="menu-div">
            <BiGitPullRequest />
          </div>
          <div className="menu-div">
            <AiOutlineInbox />
          </div>
          <div className="menu-div">
            <RxAvatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
