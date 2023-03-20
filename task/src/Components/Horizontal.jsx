import React from "react";
import './Horizontal.css'

function Horizontal(props) {
  return (
    <div className="horizontal">
      <div className="header">
        <div className="dash">{props.head}</div>
        <div className="profile">
          <img className="profileImg" src="/images/profile.gif" alt="" />
          <div className="profileName">
            Koushik
            <div className="subName">Super Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horizontal;
