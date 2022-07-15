import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../../assets/icons/backButton.svg";
import Button from "../../../../components/Button";
import Loader from "../../../../components/loadingSkeleton";
import Text from "../../../../components/Typography/Typography";
import { handleGetProductDetails } from "../../../../store/slices/productsSlice";
import Skeleton from "@mui/material/Skeleton";

export default function ProductDetails({ handleOpenProductDetailsModal, productCode }) {
  const productsReducer = useSelector((state) => state.productsReducer);
  const productData = productsReducer?.productDetailsData?.payload?.data?.data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted && productCode !== null) {
        try {
          dispatch(handleGetProductDetails(productCode));
        } catch (error) {
          console.log(error);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [productCode, dispatch]);

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
            <div
              style={{
                backgroundImage: `url(${productData?.imageUrlHome})`,
                height: "277px",
                width: "100%",
                padding: "3px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                onClick={() => handleOpenProductDetailsModal(null)}
                className="w-[100px] h-[100px] cursor-pointer"
                src={BackButton}
                alt="back_Button"
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
                    onClick={() => navigate("/products/open_account", { state: productCode })}
                    title="Open Account"
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
