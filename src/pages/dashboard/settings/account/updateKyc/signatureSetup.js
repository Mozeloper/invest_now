import React, { useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import ImageUploading from "react-images-uploading";
import UploadJpeg from "../../../../../assets/icons/upload_doc.svg";
import closeBtn from "../../../../../assets/icons/close_btn.svg";
import Text from "../../../../../components/Typography/Typography";
import signatureLogo from "../../../../../assets/icons/signature_logo.svg";
import Button from "../../../../../components/Button";
import MessageModal from "../../../../../components/modals/MessageModal";
import { useDispatch, useSelector } from "react-redux";
import { handleSignatureUpload } from "../../../../../store/slices/settingsUpdateKycSlice";
import { handleCustomerDetails } from "../../../../../store/slices/dashboardSlice";

export default function SignatureSetup({ handleCloseModals }) {
  const dispatch = useDispatch();
  const updateKycSliceReducer = useSelector((state) => state.updateKycSliceReducer);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [images, setImages] = useState("");

  const onChange = (imageList) => {
    setImages(imageList[0].data_url);
  };

  const [openModal, setOpenMpdal] = useState({
    take_signature: false,
    upload_picture: false,
  });

  const handleOpenModals = (type) => {
    switch (type) {
      case "take_signature":
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
      case "take_signature":
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

  const signCanvas = useRef({});

  const handleSaveSignature = async () => {
    const constainsPng = "data:image/png;base64,";
    let signSig = signCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    let result;
    if (signSig.includes(constainsPng)) {
      result = signSig.replace("data:image/png;base64,", "");
    }
    const data = {
      signature_base64: result,
    };
    await dispatch(handleSignatureUpload(data))
      .unwrap()
      .then((res) => {
        dispatch(handleCustomerDetails());
        setMessage(res?.data?.message);
        setTimeout(() => {
          handleCloseUploadModals("take_signature");
          handleCloseModals("signature_setup");
        }, 2000);
      })
      .catch((error) => {
        setErrorMessage(error?.data?.message);
      });
  };

  const handleUploadSignature = async () => {
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
      signature_base64: result,
    };
    await dispatch(handleSignatureUpload(data))
      .unwrap()
      .then((res) => {
        dispatch(handleCustomerDetails());
        setMessage(res?.data?.message);
        setTimeout(() => {
          handleCloseModals("signature_setup");
          handleCloseUploadModals("upload_picture");
        }, 2000);
      })
      .catch((error) => {
        setErrorMessage(error?.data?.message);
      });
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("signature_setup")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-full flex flex-col gap-2 mb-10">
        <Text variant="h2" weight="bold">
          Upload Signature
        </Text>
        <Text variant="h4" weight="normal">
          Select the option you want for your signature
        </Text>
      </div>
      <div
        onClick={() => handleOpenModals("take_signature")}
        className="flex gap-3 w-full cursor-pointer px-4 py-2 bg-[#EBEBEB]"
      >
        <img src={signatureLogo} alt="upload_icon" />
        <Text variant="body" weight="normal" format="self-center">
          Sign electronically
        </Text>
      </div>
      <ImageUploading acceptType={["jpg", "png"]} value={images} onChange={onChange} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
          <div className="mt-4">
            <div
              onClick={() => {
                handleOpenModals("upload_picture");
                onImageUpload();
              }}
              className="flex gap-3 w-full cursor-pointer px-4 py-2 bg-[#EBEBEB]"
            >
              <img src={UploadJpeg} alt="upload_icon" />
              <Text variant="body" weight="normal" format="self-center">
                Upload a signature
              </Text>
            </div>
            <div className="image-item">
              <MessageModal bgColor={true} modalHeight="80vh" modalWidth="500px" isOpen={openModal?.upload_picture}>
                <div className="p-[5%]">
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
                      Upload Signature
                    </Text>
                    <Text variant="h4" weight="normal">
                      Sign here. The signature will be saved on your profile
                    </Text>
                  </div>
                  {images !== "" && (
                    <div className="flex flex-col items-center justify-center gap-4">
                      <img src={imageList} alt="img_preview" className="h-[300px] w-[300px]" />
                      <div className="flex justify-center gap-3  w-[300px]">
                        <div className="w-[50%]">
                          <Button
                            title="retake"
                            className="font-extrabold border border-[#65666A]"
                            type="button"
                            textColor="#65666A"
                            backgroundColor="none"
                            onClick={() => {
                              onImageUpload();
                              setImages("");
                            }}
                          />
                        </div>
                        <div className="w-[50%]">
                          <Button
                            onClick={() => {
                              handleUploadSignature();
                            }}
                            isLoading={updateKycSliceReducer?.isLoading}
                            title="Save"
                            className="cursor-pointer w-full"
                            type="button"
                          />
                        </div>
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
                </div>
              </MessageModal>
            </div>
          </div>
        )}
      </ImageUploading>
      <MessageModal bgColor={true} modalWidth="500px" modalHeight="80vh" isOpen={openModal?.take_signature}>
        <div className="p-[5%]">
          <div className="flex justify-end w-full">
            <img
              onClick={() => {
                handleCloseUploadModals("take_signature");
              }}
              src={closeBtn}
              alt="close_btn"
              className="h-[40px] w-[40px] cursor-pointer"
            />
          </div>
          <div className="w-full flex flex-col gap-2 mb-10">
            <Text variant="h2" weight="bold">
              Sign Electronically
            </Text>
            <Text variant="h4" weight="normal">
              Sign here. The signature will be saved on your profile
            </Text>
          </div>
          <div className="w-full flex justify-center">
            <SignaturePad ref={signCanvas} canvasProps={{ className: "signatureCanvas" }} />
          </div>
          <div className="w-[50%] mx-auto mt-6 flex justify-center">
            <Button
              onClick={() => {
                handleSaveSignature();
              }}
              isLoading={updateKycSliceReducer?.isLoading}
              title="Save"
              className="cursor-pointer w-full"
              type="button"
            />
            <Button
              onClick={() => {
                signCanvas.current.clear();
              }}
              title="clear"
              className="cursor-pointer w-full border-none outline-none"
              type="button"
              backgroundColor="none"
              textColor="#E32526"
            />
          </div>
        </div>
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
      </MessageModal>
    </>
  );
}
