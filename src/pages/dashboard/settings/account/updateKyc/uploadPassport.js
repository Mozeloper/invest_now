import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import pictureIcon from "../../../../../assets/icons/picture_taker.svg";
import Webcam from "react-webcam";
import Button from "../../../../../components/Button";
import { handleUploadPassport } from "../../../../../store/slices/settingsUpdateKycSlice";
import { handleCustomerDetails } from "../../../../../store/slices/dashboardSlice";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};

export default function UploadPassport({ handleCloseModals }) {
  const updateKycSliceReducer = useSelector((state) => state.updateKycSliceReducer);
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
      passport_base64: result,
    };
    await dispatch(handleUploadPassport(data))
      .unwrap()
      .then((res) => {
        dispatch(handleCustomerDetails());
        setTimeout(() => {
          handleCloseModals("upload_passport");
          setMessage("");
        }, 2000);
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
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("upload_passport")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-10">
        <Text variant="h2" weight="bold">
          Take Selfie
        </Text>
        <Text variant="h4" weight="normal">
          Make sure your picture is centralised in the circle. When you are ready, click the camera button
        </Text>
      </div>
      {image === "" && (
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <Webcam
            height="230px"
            width="230px"
            ref={webcamRef}
            videoConstraints={videoConstraints}
            screenshotFormat="image/jpeg"
          />
          <img className="cursor-pointer" src={pictureIcon} alt="icon" onClick={capture} />
        </div>
      )}
      {image !== "" && (
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <img src={image} alt="img" className="h-[200px] w-[230px]" />
          <div className="w-[50%]">
            <Button
              onClick={() => utilityBillSefie()}
              title="Save Picture"
              className="cursor-pointer w-full"
              type="button"
              isLoading={updateKycSliceReducer?.isLoadingPassport}
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
          <Text variant="h4" color="text-red-500">
            {errorMessage}
          </Text>
        </div>
      )}
    </>
  );
}
