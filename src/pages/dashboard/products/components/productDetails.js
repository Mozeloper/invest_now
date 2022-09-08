import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../../assets/icons/backButton.svg";
import Button from "../../../../components/Button";
import Loader from "../../../../components/loadingSkeleton";
import Text from "../../../../components/Typography/Typography";
import { handleGetProductDetails } from "../../../../store/slices/productsSlice";
import Skeleton from "@mui/material/Skeleton";
import { handleCustomerDetails } from "../../../../store/slices/dashboardSlice";
import { setProductCode } from "../../../../store/slices/buyProductSlice";

export default function ProductDetails({
  handleShowKycMessage,
  handleOpenProductDetailsModal,
  setUTraceModal,
  productCode,
}) {
  const productsReducer = useSelector((state) => state.productsReducer);
  const dashboardReducer = useSelector((state) => state.dashboardReducer);
  const productData = productsReducer?.productDetailsData?.payload?.data?.data;
  const customerKycStep =
    dashboardReducer?.customerDetails?.payload?.data?.data?.tier_status === "TIER_0" ? true : false;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted && productCode !== null) {
        dispatch(handleCustomerDetails());
        dispatch(handleGetProductDetails(productCode));
      }
    })();
    return () => {
      mounted = false;
    };
  }, [productCode, dispatch]);

  const handleOpenUtraceModal = () => {
    handleOpenProductDetailsModal(null);
    setUTraceModal(true);
  };

  const handleRouting = () => {
    switch (customerKycStep) {
      case true:
        handleShowKycMessage();
        handleOpenProductDetailsModal(null);
        break;
      case false:
        navigate("/products/buy_product");
        dispatch(setProductCode(productCode));
        // navigate("/products/open_account", { state: productCode });
        break;
      default:
        break;
    }
  };

  return (
    <>
      {productsReducer?.productDetailIsLoading && (
        <div className="w-full flex flex-wrap gap-4 p-2">
          <div className="w-full">
            <Loader width="100%" />
          </div>
          <div className="w-full">
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </div>
        </div>
      )}
      {!!!productsReducer?.productDetailIsLoading &&
        productsReducer?.productDetailsData?.type === "products/productDetail/fulfilled" && (
          <>
            <div className="relative">
              <img src={productData?.imageUrlHome} alt="product_img" loading="lazy" className="w-full h-[277px]" />
              <img
                onClick={() => handleOpenProductDetailsModal(null)}
                className="w-[100px] h-[100px] cursor-pointer absolute top-5 left-5"
                src={BackButton}
                alt="back_Button"
                loading="lazy"
              />
            </div>
            <div className="mt-6 px-[6%]">
              <Text color="text-red" variant="h2" weight="bold" format="mb-3">
                {productData?.name}
              </Text>
              <div
                className="text-sm text-[#465174]"
                dangerouslySetInnerHTML={{
                  __html: productData?.html,
                }}
              />

              {/* <Text variant="h3" weight="bold" format="my-3 tracking-wider">
                Historical Performance
              </Text>
              <div className="flex gap-3 md:w-[60%] w-full">
                <div className="w-[137px] h-[68px] bg-[#FFD8D8] p-3"></div>
                <div className="w-[137px] h-[68px] bg-[#DCF8EE] p-3"></div>
              </div> */}
              {/* <div className="bg-[#FBFBFB] w-full h-[212px] mt-4 py-[3%] px-[5%]">
                <Text color="text-red" variant="h3" weight="bold">
                  Benefits
                </Text>
                <ul className="mt-1 px-[5%] list-disc text-base text-[#465174]">
                  <li className="text-base">Start with a minimum of just N10,000</li>
                  <li className="text-base">Low risk and competitive return</li>
                  <li className="text-base">Quarterly dividends</li>
                  <li className="text-base">24-hour redemption</li>
                  <li className="text-base">Minimum holding period of 30 days</li>
                </ul>
              </div> */}
              {productData?.data !== null && (
                <div className="md:w-[50%] w-full flex self-start justify-start my-6">
                  <Button
                    onClick={() => (productData?.name === "UTrace" ? handleOpenUtraceModal() : handleRouting())}
                    title={`${productData?.name === "UTrace" ? "Request Search" : "Open Account"}`}
                    textColor="#fff"
                    className="px-3 font-bold outline-none self-start"
                  />
                </div>
              )}
            </div>
          </>
        )}
    </>
  );
}
