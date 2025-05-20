import React from "react";
import html from "../../Images/html5.svg";
import css from "../../Images/css3.svg";
import javaScript from "../../Images/javascript.svg";
import react from "../../Images/react.svg";
import vite from "../../Images/vite.svg";
import git from "../../Images/git.svg";
import gitHub from "../../Images/github.svg";
import postman from "../../Images/postman.svg";
import spring from "../../Images/spring.svg";
import java from "../../Images/java.svg";
export default function Skills() {
  return (
    <div className="container">
      <div className="skill_container">
        <img className="html" src={html} />
        <img className="css" src={css} />
        <img className="javaScript" src={javaScript} />
        <img className="react" src={react} />
        <img className="vite" src={vite} />
        <img className="git" src={git} />
        <img className="gitHub" src={gitHub} />
        <img className="postman" src={postman} />
        <img className="spring" src={spring} />
        <img className="java" src={java} />
      </div>
    </div>
  );
}
