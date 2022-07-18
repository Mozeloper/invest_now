import React, { useState } from "react";
import Webcam from "react-webcam";
import ImageUploading from "react-images-uploading";
import close from "../../../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../../../components/Typography/Typography";
import Selfie from "../../../../../../../assets/icons/selfie.svg";
import UploadJpeg from "../../../../../../../assets/icons/upload_doc.svg";
import pictureIcon from "../../../../../../../assets/icons/picture_taker.svg";

import Button from "../../../../../../../components/Button";
import SideRightModal from "../../../../../../../components/modals/SideRightModal";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

const WebcamCapture = ({ handleCloseWebCaptureUploadModals }) => {
  const [image, setImage] = useState("");
  //   const [message, setMessage] = useState("");
  //   const [errorMessage, setErrorMessage] = useState("");

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      {image === "" && (
        <>
          <Webcam
            height="230px"
            width="230px"
            ref={webcamRef}
            videoConstraints={videoConstraints}
            screenshotFormat="image/jpeg"
          />
          <img className="cursor-pointer" src={pictureIcon} alt="icon" onClick={capture} />
        </>
      )}
      {image !== "" && (
        <>
          <img src={image} alt="img" className="h-[200px] w-[230px]" />
          <div className="w-[50%] mt-6">
            <Button
              onClick={() => handleCloseWebCaptureUploadModals()}
              title="Save"
              className="cursor-pointer w-full"
              type="button"
              isLoading={false}
            />
          </div>
        </>
      )}
      {/* {message !== "" && (
        <div className="w-full text-center mt-4">
          <Text variant="h4" color="text-green-600">
            {message}
          </Text>
        </div>
      )}
      {errorMessage !== "" && (
        <div className="w-full text-center mt-4">
          <Text variant="h4" color="text-red-500">
            {errorMessage}
          </Text>
        </div>
      )} */}
    </div>
  );
};

export default function PictureSetup({ handleCloseModals }) {
  const [openModal, setOpenMpdal] = useState({
    take_picture: false,
    upload_picture: false,
  });

  const [images, setImages] = useState("");

  const onChange = (imageList) => {
    setImages(imageList[0].data_url);
  };

  const handleOpenModals = (type) => {
    switch (type) {
      case "take_picture":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "upload_picture":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      default:
        break;
    }
  };
  const handleCloseUploadModals = (type) => {
    switch (type) {
      case "take_picture":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "upload_picture":
        setOpenMpdal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="p-[5%]">
        <div className="w-full flex justify-end">
          <img
            onClick={() => handleCloseModals("profile_setup")}
            src={close}
            alt="correct"
            className="w-[40px] h-[40px] cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col gap-2 mb-10">
          <Text variant="h2" weight="bold">
            Profile Setup
          </Text>
          <Text variant="h4" weight="normal">
            Select the option you want for your profile image
          </Text>
        </div>
        <div
          onClick={() => handleOpenModals("take_picture")}
          className="flex gap-3 w-full cursor-pointer px-4 py-2 bg-[#EBEBEB]"
        >
          <img src={Selfie} alt="upload_icon" />
          <Text variant="body" weight="normal" format="self-center">
            Take a picture
          </Text>
        </div>
      </div>
      <SideRightModal bgColor={true} modalWidth="500px" isOpen={openModal?.take_picture}>
        <div className="p-[5%]">
          <div className="flex justify-end w-full">
            <img
              onClick={() => handleCloseUploadModals("take_picture")}
              src={close}
              alt="close_btn"
              className="h-[40px] w-[40px] cursor-pointer"
            />
          </div>
          <div className="w-full flex flex-col gap-2 mb-10">
            <Text variant="h2" weight="bold">
              Profile Setup
            </Text>
            <Text variant="h4" weight="normal">
              Make sure your face is centralised in the circle. When you are ready, click the camera button
            </Text>
          </div>
          <WebcamCapture
            handleCloseWebCaptureUploadModals={() => {
              handleCloseModals("profile_setup");
              handleCloseUploadModals("take_picture");
            }}
          />
        </div>
      </SideRightModal>
      <ImageUploading acceptType={["jpg", "png"]} value={images} onChange={onChange} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
          <div className="px-[5%]">
            <div
              onClick={() => {
                handleOpenModals("upload_picture");
                onImageUpload();
              }}
              className="flex gap-3 w-full cursor-pointer px-4 py-2 bg-[#EBEBEB]"
            >
              <img src={UploadJpeg} alt="upload_icon" />
              <Text variant="body" weight="normal" format="self-center">
                Upload a PNG or JPG file
              </Text>
            </div>
            <div className="image-item">
              <SideRightModal bgColor={true} modalWidth="500px" isOpen={openModal?.upload_picture}>
                <div className="p-[5%]">
                  <div className="flex justify-end w-full">
                    <img
                      onClick={() => {
                        handleCloseUploadModals("upload_picture");
                        setImages("");
                      }}
                      src={close}
                      alt="close_btn"
                      className="h-[40px] w-[40px] cursor-pointer"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2 mb-10">
                    <Text variant="h2" weight="bold">
                      Profile Setup
                    </Text>
                    <Text variant="h4" weight="normal">
                      Make sure your face is centralised in the circle. When you are ready, click the camera button
                    </Text>
                  </div>
                  {images !== "" && (
                    <div className="flex flex-col items-center justify-center gap-4">
                      <img src={imageList} alt="img_preview" className="h-[300px] w-[300px]" />
                      <div className="w-[50%]">
                        <Button
                          onClick={() => {
                            handleCloseModals("profile_setup");
                            handleCloseUploadModals("upload_picture");
                          }}
                          isLoading={false}
                          title="Save"
                          className="cursor-pointer w-full"
                          type="button"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </SideRightModal>
            </div>
          </div>
        )}
      </ImageUploading>
    </>
  );
}
