import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronRight, BsDash, BsGithub } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { TbMathGreater } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { VscIssues } from "react-icons/vsc";
import { BiGitPullRequest } from "react-icons/bi";
import { AiOutlineInbox } from "react-icons/ai";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="dashboard">
        <div className="dashboard-inner">
          <div className="hamburger">
            <CiMenuBurger strokeWidth={1} />
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
      <div className="nav-profile">
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
              <span>Type</span>
              <span className="type-empty">/</span>
              <span>to search</span>
            </div>
          </div>
          <div className="code-icon">
            <BsChevronRight strokeWidth={1} size={14} />
            <BsDash className="code-dash" strokeWidth={0.5} />
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
          <RxAvatar size={35} strokeWidth={0} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
