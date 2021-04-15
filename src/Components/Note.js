import React from "react";
import { useHistory } from "react-router-dom";
const Note = () =>{
    const history = useHistory();
    const push = (e, url) => {
        e.preventDefault();
        if (document.getElementById("check-box")) {
          document.getElementById("check-box").checked = false;
        }
        history.push(url);
      };

    return (
        <>
          <div className="note">
              <p>Piratescorp.com is Under Construction , Click <a  onClick={(e) => push(e, "contact")} href="/contact">Here</a> to Contact us</p>
          </div>
        </>
    )
}

export default Note;