import React from "react";
import "./Uploadingphoto.scss";
import downchevron from "../../assets/svg/downchevron.svg";
import noname from "../../assets/images/noname.png";

const UploadingPhoto = () => {
  return (
    <div>
      <div className="Uploadingphoto-container">
        <div className="User-Form">
          <div className="firs-last-name">
            <div className="First-Name">
              <p>First Name</p>
              <input type="text" placeholder="label" />
            </div>
            <div className="Last-name">
              <p>Last name</p>
              <input type="text" placeholder="label" />
            </div>
          </div>
          <div className="Headline-input">
            <p>Headline </p>
            <input type="text" placeholder="label" />
          </div>
          <div className="Description">
            <p>Description</p>
            <input type="text" placeholder="label" />
          </div>
          <div className="Language">
            <p>Language</p>
            <div className="Language-input">
              <input type="text" placeholder="label" />
              <img className="downchevronn" src={downchevron} alt="" />
            </div>
          </div>
        </div>
        <div className="Image-Preview">
          <h2>Image Preview</h2>
          <div className="img-container">
            <img src={noname} alt="" />
          </div>
          <div className="Add-Change-Image">
            <h3>Add/Change Image</h3>
            <div className="input-button">
              <input type="text" placeholder="Label" />
              <button>label</button>
            </div>
            <button className="button-blac">label</button>
          </div>
        </div>
        <div className="Links-input">
          <h4>Links</h4>
          <div className="Links-input1">
            <p>Website</p>
            <input type="text" placeholder="label" />
          </div>
          <div className="Links-input1">
            <p>X(Formerly twitter)</p>
            <input type="text" placeholder="label" />
          </div>
          <div className="Links-input1">
            <p>Linkdin</p>
            <input type="text" placeholder="label" />
          </div>
          <div className="Links-input1">
            <p>Youtube</p>
            <input type="text" placeholder="label" />
          </div>
          <div className="Links-input1">
            <p>Facebook</p>
            <input type="text" placeholder="label" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadingPhoto;
