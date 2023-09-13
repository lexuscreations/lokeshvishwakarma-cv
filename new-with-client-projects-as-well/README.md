### [Visit-portfolio-and-download-this-CV](https://lokeshvishwakarma-cv.netlify.app)

#### - LokeshVishwakarma-CV-inLightMode-full

![LokeshVishwakarma-CV-inLightMode-full](https://github.com/lexuscreations/lokeshvishwakarma-cv/assets/72046165/5647d8a0-623c-44f4-892b-4528a0e3737f)

#### - LokeshVishwakarma-CV-inDarkMode-full

![LokeshVishwakarma-CV-inDarkMode-full](https://github.com/lexuscreations/lokeshvishwakarma-cv/assets/72046165/e468674d-3aa0-4abf-be8a-4b51cad2c1ba)

<hr />

    import {
    ...
    // BiUpload,
    } from "react-icons/bi";

    // const [image, setImage] = useState(null);
    // const [isPreviewing, setIsPreviewing] = useState(false);

    // const handleImageChange = (e) => {
    // const file = e.target.files[0];

    // if (file) {
    // const reader = new FileReader();
    // reader.onloadend = () => {
    // setImage({
    // data_url: reader.result,
    // });
    // };
    // reader.readAsDataURL(file);
    // } else {
    // setImage(null);
    // }
    // };

    // const handleOverlayClick = () =>
    // document.getElementById("upload-input").click();

<hr />

    {/* {!isPreviewing ? (
      <div className="image-upload-container">
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
          multiple={false}
        />
        {image && image.data_url ? (
          <div
            className="selected-image-container"
            onClick={handleOverlayClick}
          >
            <img src={image.data_url} alt="" className="home__img" />
            <div className="image-overlay" />
            <div className="upload-icon">
              <BiUpload
                size={35}
                style={{
                  background: "#faf9fb",
                  padding: "8px",
                  borderRadius: "50%",
                  strokeWidth: "0.71px",
                }}
              />
            </div>
          </div>
        ) : (
          <div
            className="image-placeholder"
            onClick={handleOverlayClick}
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="upload-icon noselect">
              <BiUpload
                size={35}
                style={{
                  background: "#faf9fb",
                  padding: "8px",
                  borderRadius: "50%",
                  strokeWidth: "0.71px",
                }}
              />
            </div>
          </div>
        )}
      </div>
    ) : (
      <img
        src={image?.data_url || profilePic}
        alt="ProfilePic"
        className="home__img"
      />
    )} */}

<hr />

If you are in development/testing mode and want to preview how this will appear after downloading:

1. In `\src\config\index.jsx`, go to `APP_CONFIG` and set `add_intentionally_CV_adjust_class_on_body_for_testing` to `true`.

2. In `\src\redux\isAdjustingState.js`, within the `initialState`, set `isAdjusting` to `true`.
