import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import closeBtn from "../../../../../../assets/icons/close_btn.svg";
import Button from "../../../../../../components/Button";
import Loader from "../../../../../../components/loader";
import Text from "../../../../../../components/Typography/Typography";
import { setIdentityTypeId } from "../../../../../../store/slices/buyProductSlice";
import { getIdentityTypes } from "../../../../../../store/slices/settingsUpdateKycSlice";

export default function IdType({ handleCloseModals, handleOpenModals }) {
  const [validId, setValidId] = useState(null);
  const updateKycSliceReducer = useSelector((state) => state.updateKycSliceReducer);
  const identityType = updateKycSliceReducer?.identityTypeState?.payload?.data?.data;
  const dispatch = useDispatch();

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

  const handleValidIdenty = (e) => {
    setValidId(e.target.value);
    dispatch(setIdentityTypeId(e.target.value));
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
          onClick={() => handleCloseModals("open_valid_id_list")}
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
      <div className="flex flex-col justify-between">
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
          <div className="flex justify-center w-[70%] mx-auto mt-10">
            <Button
              onClick={() => handleOpenModals("open_valid_id_upload")}
              title="Next"
              className="cursor-pointer mt-5"
              type="button"
            />
          </div>
        )}
      </div>
    </>
  );
}
