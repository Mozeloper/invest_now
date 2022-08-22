import React, { useState } from "react";
import closeBtn from "../../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../../components/Button";
import MessageModal from "../../../../../../components/modals/MessageModal";
import Text from "../../../../../../components/Typography/Typography";
import Selfie from "../../../../../../assets/icons/selfie.svg";
import UploadJpeg from "../../../../../../assets/icons/upload_doc.svg";
import pictureIcon from "../../../../../../assets/icons/picture_taker.svg";
import Webcam from "react-webcam";
import ImageUploading from "react-images-uploading";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIdentityCard } from "../../../../../../store/slices/buyProductSlice";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

const WebcamCapture = ({ handleCloseUploadModals, customerId, isLoading }) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  const uploadValid = async () => {
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
      id: customerId,
      data: {
        id_base64: result,
      },
    };
    dispatch(setIdentityCard(data));
    handleCloseUploadModals();
    navigate("/products/new_bank_account");
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
          <Button
            isLoading={isLoading}
            onClick={() => {
              uploadValid();
            }}
            title="Save Picture"
            className="cursor-pointer w-full"
            type="button"
          />
        </>
      )}
    </div>
  );
};

export default function Uploader({ handleCloseModals }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState({
    valid_id: false,
    take_picture: false,
  });

  const [images, setImages] = useState("");
  const onChange = (imageList) => {
    setImages(imageList[0].data_url);
  };

  const handleOpenIdUpload = (type) => {
    switch (type) {
      case "take_picture":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      case "upload_picture":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
      default:
        break;
    }
  };

  const handleCloseIdUpload = (type) => {
    switch (type) {
      case "take_picture":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      case "upload_picture":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
      default:
        break;
    }
  };

  const uploadValid = async () => {
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

    dispatch(setIdentityCard(result));
    handleCloseIdUpload("upload_picture");
    handleCloseIdUpload("valid_id");
    handleCloseModals("open_valid_id_upload");
    handleCloseModals("open_valid_id_list");
    navigate("/products/new_bank_account");
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseIdUpload("valid_id")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-10">
        <Text variant="h2" weight="bold">
          ID Upload
        </Text>
        <Text variant="h4" weight="normal">
          Select the option you want for ID image
        </Text>
      </div>
      <div
        onClick={() => handleOpenIdUpload("take_picture")}
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
                handleOpenIdUpload("upload_picture");
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
                      handleCloseIdUpload("upload_picture");
                      setImages("");
                    }}
                    src={closeBtn}
                    alt="close_btn"
                    className="h-[40px] w-[40px] cursor-pointer"
                  />
                </div>
                <div className="w-full flex flex-col gap-2 mb-10">
                  <Text variant="h2" weight="bold">
                    Upload Valid Id
                  </Text>
                  <Text variant="h4" weight="normal">
                    Select the picture you want to use as your Valid ID
                  </Text>
                </div>
                {images !== "" && (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <img src={imageList} alt="img_preview" className="h-[300px] w-[300px]" />
                    <div className="w-[50%] mx-auto">
                      <Button
                        onClick={() => {
                          uploadValid();
                        }}
                        title="Save Picture"
                        className="cursor-pointer w-full mx-auto"
                        type="button"
                      />
                    </div>
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
            onClick={() => handleCloseIdUpload("take_picture")}
            src={closeBtn}
            alt="close_btn"
            className="h-[40px] w-[40px] cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col gap-2 mb-10">
          <Text variant="h2" weight="bold">
            ID Upload
          </Text>
          <Text variant="h4" weight="normal">
            Make sure your picture is centralised in the circle. When you are ready, click the camera button
          </Text>
        </div>
        <WebcamCapture
          handleCloseUploadModals={() => {
            handleCloseIdUpload("take_picture");
            handleCloseIdUpload("valid_id");
            handleCloseModals("open_valid_id_upload");
            handleCloseModals("open_valid_id_list");
          }}
        />
      </MessageModal>
    </>
  );
}