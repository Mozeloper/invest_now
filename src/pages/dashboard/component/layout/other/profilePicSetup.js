/* eslint-disable react-hooks/exhaustive-deps */
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
import { useDispatch, useSelector } from "react-redux";
import { handleCustomerDetails, handleUploadProfilePic } from "../../../../../store/slices/dashboardSlice";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

const WebcamCapture = ({ handleCloseWebCaptureUploadModals }) => {
  const dashboardReducer = useSelector((state) => state.dashboardReducer);
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  const utilityBillSefie = async () => {
    const containsJpeg = "data:image/jpeg;base64,";
    const constainsPng = "data:image/png;base64,";
    let result;

    if (image.includes(containsJpeg)) {
      result = image.replace(containsJpeg, "");
    } else if (image.includes(constainsPng)) {
      result = image.replace(constainsPng, "");
    } else {
      result = image;
    }

    const data = {
      profile_pic_base64: result,
    };
    await dispatch(handleUploadProfilePic(data))
      .unwrap()
      .then((res) => {
        setTimeout(() => {
          handleCloseWebCaptureUploadModals();
          setMessage("");
        }, 2000);
        dispatch(handleCustomerDetails());
        setMessage(res?.data?.message);
      })
      .catch((error) => {
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        setErrorMessage(error?.data?.message);
      });
  };

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
          <div className="w-[50%]">
            <Button
              onClick={() => utilityBillSefie()}
              title="Save Picture"
              className="cursor-pointer w-full"
              type="button"
              isLoading={dashboardReducer?.profileIsUploading}
            />
          </div>
        </>
      )}
      {message !== "" && (
        <div className="w-full text-center mt-4">
          <Text variant="h4" color="text-green-600">
            {message}
          </Text>
        </div>
      )}
      {errorMessage !== "" && (
        <div className="w-full text-center mt-4">
          <Text variant="h4" color="text-red">
            {errorMessage}
          </Text>
        </div>
      )}
    </div>
  );
};

export default function UploadUtilityBill({ handleCloseModals }) {
  const dispatch = useDispatch();
  const dashboardReducer = useSelector((state) => state.dashboardReducer);
  const [openModal, setOpenMpdal] = useState({
    take_picture: false,
    upload_picture: false,
  });

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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

  const uploadProfilePicture = async () => {
    const containsJpeg = "data:image/jpeg;base64,";
    const constainsPng = "data:image/png;base64,";
    let result;

    if (images.includes(containsJpeg)) {
      result = images.replace("data:image/jpeg;base64,", "");
    } else if (images.includes(constainsPng)) {
      result = images.replace("data:image/png;base64,", "");
    } else {
      result = images;
    }

    const data = {
      profile_pic_base64: result,
    };

    await dispatch(handleUploadProfilePic(data))
      .unwrap()
      .then((res) => {
        setTimeout(() => {
          handleCloseUploadModals("take_picture");
          handleCloseModals("upload_profile_pic");
          setMessage("");
        }, 2000);
        dispatch(handleCustomerDetails());
        setMessage(res?.data?.message);
      })
      .catch((error) => {
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        setErrorMessage(error?.data?.message);
      });
  };

  return (
    <div>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("upload_profile_pic")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
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
          Take a selfie
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
                          uploadProfilePicture();
                        }}
                        isLoading={dashboardReducer?.profileIsUploading}
                        title="Save Picture"
                        className="cursor-pointer w-full"
                        type="button"
                      />
                    </div>
                  </div>
                )}
                {message !== "" && (
                  <div className="w-full text-center mt-4">
                    <Text variant="h4" color="text-green-600">
                      {message}
                    </Text>
                  </div>
                )}
                {errorMessage !== "" && (
                  <div className="w-full text-center mt-4">
                    <Text variant="h4" color="text-red">
                      {errorMessage}
                    </Text>
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
            Profile Setup
          </Text>
          <Text variant="h4" weight="normal">
            Make sure your picture is centralised in the circle. When you are ready, click the camera button
          </Text>
        </div>
        <WebcamCapture
          handleCloseWebCaptureUploadModals={() => {
            handleCloseUploadModals("take_picture");
            handleCloseModals("upload_profile_pic");
          }}
        />
      </MessageModal>
    </div>
  );
}
