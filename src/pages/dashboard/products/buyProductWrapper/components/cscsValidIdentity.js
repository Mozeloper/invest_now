import React, { useEffect, useState } from "react";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../components/Button";
import MessageModal from "../../../../../components/modals/MessageModal";
import Text from "../../../../../components/Typography/Typography";
import Loader from "../../../../../components/loader";
import Selfie from "../../../../../assets/icons/selfie.svg";
import UploadJpeg from "../../../../../assets/icons/upload_doc.svg";
import pictureIcon from "../../../../../assets/icons/picture_taker.svg";
import Webcam from "react-webcam";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { getIdentityTypes } from "../../../../../store/slices/settingsUpdateKycSlice";
import { setCscsValidIdentity, setcscsValidIdentityType } from "../../../../../store/slices/buyProductSlice";
const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

const WebcamCapture = ({ handleCloseUploadModals, validId }) => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
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

    dispatch(setCscsValidIdentity(result));
    handleCloseUploadModals();
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
          <Button onClick={() => uploadValid()} title="Save Picture" className="cursor-pointer w-full" type="button" />
        </>
      )}
    </div>
  );
};

export default function CscsValidIdentity({ handleCloseModal }) {
  const [validId, setValidId] = useState(null);
  const updateKycSliceReducer = useSelector((state) => state.updateKycSliceReducer);
  const identityType = updateKycSliceReducer?.identityTypeState?.payload?.data?.data;

  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState({
    valid_id: false,
    take_picture: false,
  });

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        try {
          dispatch(getIdentityTypes());
        } catch (error) {
          console.log(error);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  const [images, setImages] = useState("");
  const onChange = (imageList) => {
    setImages(imageList[0].data_url);
  };

  const handleOpenIdUpload = (type) => {
    switch (type) {
      case "valid_id":
        setOpenModal((prev) => ({
          ...prev,
          [type]: true,
        }));
        break;
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
      case "valid_id":
        setOpenModal((prev) => ({
          ...prev,
          [type]: false,
        }));
        break;
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

  const handleValidIdenty = (e) => {
    setValidId(e.target.value);
    dispatch(setcscsValidIdentityType(e.target.value));
  };

  const uploadValid = () => {
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

    dispatch(setCscsValidIdentity(result));
    handleCloseIdUpload("valid_id");
    handleCloseModal();
  };

  const loadingState = () => {
    if (updateKycSliceReducer?.isLoading) {
      return <Loader />;
    }
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModal()}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-10">
        <Text variant="h2" weight="bold">
          Valid Id
        </Text>
        <Text variant="h4" weight="normal">
          Select which type of ID you want to upload
        </Text>
      </div>
      {loadingState()}
      {!!!updateKycSliceReducer?.isLoading &&
        updateKycSliceReducer?.identityTypeState?.type === "settings/identityTypes/fulfilled" && (
          <div className="bg-BACKGROUND_WHITE p-6 rounded-lg m-[1%]">
            {identityType.map(({ identity_type_name, id }) => {
              return (
                <div key={id} className="flex justify-between my-6">
                  <Text variant="h3" weight="normal">
                    {identity_type_name}
                  </Text>
                  <input
                    onChange={handleValidIdenty}
                    name="identity"
                    type="radio"
                    value={id}
                    className="accent-primary"
                  />
                </div>
              );
            })}
          </div>
        )}
      {validId !== null && (
        <Button
          onClick={() => handleOpenIdUpload("valid_id")}
          title="Next"
          className="cursor-pointer w-full mt-5"
          type="button"
        />
      )}
      <MessageModal bgColor={true} isOpen={openModal?.valid_id} modalHeight="625px" minWidth="320px">
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
                      <Button
                        onClick={() => {
                          uploadValid();
                        }}
                        title="Save Picture"
                        className="cursor-pointer w-full"
                        type="button"
                        isLoading={updateKycSliceReducer?.isLoading}
                      />
                    </div>
                  )}
                </MessageModal>
              </div>
            </>
          )}
        </ImageUploading>
      </MessageModal>
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
            handleCloseModal("valid_id");
          }}
          validId={validId}
        />
      </MessageModal>
    </>
  );
}
