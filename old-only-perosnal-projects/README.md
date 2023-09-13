### [Visit-portfolio-and-download-this-CV](https://lokeshvishwakarma-cv.netlify.app)

#### - LokeshVishwakarma_CV_inDarkMode-minimal

![LokeshVishwakarma_CV_inDarkMode-minimal](https://github.com/lexuscreations/lokeshvishwakarma-cv/assets/72046165/8a3666ac-8a62-4927-8be8-bd3dacc9dfea)

#### - LokeshVishwakarma_CV_inLightMode-minimal

![LokeshVishwakarma_CV_inLightMode-minimal](https://github.com/lexuscreations/lokeshvishwakarma-cv/assets/72046165/f15b7142-5713-4476-8add-c1230adbecc7)

#### - LokeshVishwakarma-CV-inLightMode-full

![LokeshVishwakarma-CV-inLightMode-full](https://github.com/lexuscreations/lokeshvishwakarma-cv/assets/72046165/ece102c1-4286-4891-bb92-c742a3915bb7)

#### - LokeshVishwakarma-CV-inDarkMode-full

![LokeshVishwakarma-CV-inDarkMode-full](https://github.com/lexuscreations/lokeshvishwakarma-cv/assets/72046165/481aaae6-f7bd-4efc-b9f0-8487c007f644)

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
