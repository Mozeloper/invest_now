import React, { useRef, useState } from "react";
import close from "../../../../../../../assets/icons/close_btn.svg";
import signatureLogo from "../../../../../../../assets/icons/signature_logo.svg";
import UploadJpeg from "../../../../../../../assets/icons/upload_doc.svg";
import Button from "../../../../../../../components/Button";
import ImageUploading from "react-images-uploading";
import Text from "../../../../../../../components/Typography/Typography";
import SideRightModal from "../../../../../../../components/modals/SideRightModal";
import SignaturePad from "react-signature-canvas";

export default function SignatureSetup({ handleCloseModals }) {
  const [openModal, setOpenMpdal] = useState({
    take_signature: false,
    upload_picture: false,
  });
  const signCanvas = useRef({});
  const [images, setImages] = useState("");

  const handleSaveSignature = () => {
    console.log(signCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  };

  const onChange = (imageList) => {
    setImages(imageList[0].data_url);
  };
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

  return (
    <>
      <div className="p-[5%]">
        <div className="w-full flex justify-end">
          <img
            onClick={() => handleCloseModals("signature_setup")}
            src={close}
            alt="correct"
            className="w-[40px] h-[40px] cursor-pointer"
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
                        Upload Signature
                      </Text>
                      <Text variant="h4" weight="normal">
                        Sign here. The signature will be saved on your profile
                      </Text>
                    </div>
                    {images !== "" && (
                      <div className="flex flex-col items-center justify-center gap-4">
                        <img src={imageList} alt="img_preview" className="h-[300px] w-[300px]" />
                        <div className="w-[50%]">
                          <Button
                            onClick={() => {
                              handleCloseModals("signature_setup");
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
      </div>
      <SideRightModal bgColor={true} modalWidth="500px" isOpen={openModal?.take_signature}>
        <div className="p-[5%]">
          <div className="flex justify-end w-full">
            <img
              onClick={() => {
                handleCloseUploadModals("take_signature");
              }}
              src={close}
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
                handleCloseUploadModals("take_signature");
                handleCloseModals("signature_setup");
              }}
              isLoading={false}
              title="Save"
              className="cursor-pointer w-full"
              type="button"
            />
          </div>
        </div>
      </SideRightModal>
    </>
  );
}
