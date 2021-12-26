import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { useDispatch } from "react-redux";
import closeBtn from "../../../../../../assets/icons/close_btn.svg";
import UploadIcon from "../../../../../../assets/icons/upload_icon.svg";
import Button from "../../../../../../components/Button";
import Text from "../../../../../../components/Typography/Typography";
import { handleUploadBeneficiaryFile } from "../../../../../../store/slices/openAccountSlice";

export default function BeneficiaryPassport({ handleCloseModals }) {
  const [images, setImages] = useState("");
  const dispatch = useDispatch();

  const onChangeImage = (imageList) => {
    setImages(imageList[0].data_url);
  };

  const uploadBeneficiaryPassport = async () => {
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
      beneficiary_passport: result,
      type: "beneficiary_passport",
    };
    dispatch(handleUploadBeneficiaryFile({ data }));
    handleCloseModals("passport_photography");
  };

  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => handleCloseModals("passport_photography")}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <div className="flex justify-center gap-2 flex-col items-center w-full mb-2">
        <img src={UploadIcon} alt="close_btn" className="h-[40px] w-[40px]" />
        <Text variant="h3" weight="bold">
          Upload a passport photograph
        </Text>
      </div>
      <ImageUploading value={images} onChange={onChangeImage} dataURLKey="data_url" acceptType={["jpg", "png"]}>
        {({ onImageUpload, isDragging, dragProps }) => (
          // write your building UI
          <>
            <div className="flex justify-center flex-col items-center gap-3">
              {images === "" && (
                <>
                  <div
                    style={isDragging ? { border: "1px solid #E32526" } : null}
                    onClick={onImageUpload}
                    {...dragProps}
                    className="bg-[#F8F8F8] w-full h-[86px] cursor-pointer flex flex-col justify-center items-center"
                  >
                    <img src={UploadIcon} alt="close_btn" className="h-[20px] w-[20px]" />
                    <Text variant="body" weight="normal">
                      {` Click to select or Drag & drop a file here`}
                    </Text>
                  </div>
                  <div className="w-[80%]">
                    <Text variant="body" weight="normal" format="text-center">
                      Accepted file types are PDF , PNG or JPEG. File size must not be more than 5mb
                    </Text>
                  </div>
                </>
              )}
              {images !== "" && (
                <div className="flex flex-col items-center justify-center gap-4">
                  <img src={images} alt="img_preview" className="h-[200px] w-[200px]" />
                  <Button
                    onClick={() => uploadBeneficiaryPassport()}
                    title="Upload image"
                    className="cursor-pointer w-full"
                    type="button"
                    isLoading={false}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </ImageUploading>
    </>
  );
}
