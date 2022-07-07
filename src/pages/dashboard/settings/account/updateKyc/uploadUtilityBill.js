import React, { useState } from "react";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Selfie from "../../../../../assets/icons/selfie.svg";
import UploadJpeg from "../../../../../assets/icons/upload_doc.svg";
import pictureIcon from "../../../../../assets/icons/picture_taker.svg";
import Text from "../../../../../components/Typography/Typography";
import MessageModal from "../../../../../components/modals/MessageModal";

import Webcam from "react-webcam";
import ImageUploading from "react-images-uploading";
import Button from "../../../../../components/Button";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

const WebcamCapture = ({ handleCloseUploadModals }) => {
  const [image, setImage] = useState("");
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
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
          <Button
            onClick={() => handleCloseUploadModals()}
            title="Save Picture"
            className="cursor-pointer w-full"
            type="button"
          />
        </>
      )}
    </div>
  );
};

export default function UploadUtilityBill({ handleCloseModals }) {
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
    <div>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("utility_bill")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-10">
        <Text variant="h2" weight="bold">
          Upload Utility Bill
        </Text>
        <Text variant="h4" weight="normal">
          Select Select File type you want to Upload
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

      <ImageUploading acceptType={["jpg", "png"]} value={images} onChange={onChange} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
          <>
            <div
              onClick={() => {
                handleOpenModals("upload_picture");
                onImageUpload();
              }}
              className="flex gap-3 w-full cursor-pointer px-4 py-2 my-4 bg-[#EBEBEB]"
            >
              <img src={UploadJpeg} alt="upload_icon" />
              <Text variant="body" weight="normal" format="self-center">
                Upload a PNG or JPG file
              </Text>
            </div>
            <div className="image-item">
              <MessageModal bgColor={true} modalHeight="625px" isOpen={openModal?.upload_picture}>
                <div className="flex justify-end w-full">
                  <img
                    onClick={() => {
                      handleCloseUploadModals("upload_picture");
                      setImages("");
                    }}
                    src={closeBtn}
                    alt="close_btn"
                    className="h-[40px] w-[40px] cursor-pointer"
                  />
                </div>
                <div className="w-full flex flex-col gap-2 mb-10">
                  <Text variant="h2" weight="bold">
                    Upload Utility Bill
                  </Text>
                  <Text variant="h4" weight="normal">
                    Select the picture you want to use as your utility bill
                  </Text>
                </div>
                {images !== "" && (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <img src={imageList} alt="img_preview" className="h-[300px] w-[300px]" />
                    <Button
                      onClick={() => {
                        handleCloseUploadModals("take_picture");
                        handleCloseModals("utility_bill");
                      }}
                      title="Save Picture"
                      className="cursor-pointer w-full"
                      type="button"
                    />
                  </div>
                )}
              </MessageModal>
            </div>
          </>
        )}
      </ImageUploading>

      <MessageModal bgColor={true} modalHeight="625px" isOpen={openModal?.take_picture}>
        <div className="flex justify-end w-full">
          <img
            onClick={() => handleCloseUploadModals("take_picture")}
            src={closeBtn}
            alt="close_btn"
            className="h-[40px] w-[40px] cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col gap-2 mb-10">
          <Text variant="h2" weight="bold">
            Upload Utility Bill
          </Text>
          <Text variant="h4" weight="normal">
            Make sure your picture is centralised in the circle. When you are ready, click the camera button
          </Text>
        </div>
        <WebcamCapture
          handleCloseUploadModals={() => {
            handleCloseUploadModals("take_picture");
            handleCloseModals("utility_bill");
          }}
        />
      </MessageModal>
    </div>
  );
}
