import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetProductDetails } from "../../../store/slices/productsSlice";
import Button from "../../../components/Button";
import Text from "../../../components/Typography/Typography";

export default function LandingPageProduct() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productsReducer = useSelector((state) => state.productsReducer);
  const productData = productsReducer?.productDetailsData?.payload?.data?.data;

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted && state !== null) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        dispatch(handleGetProductDetails(state));
      }
    })();
    return () => {
      mounted = false;
    };
  }, [state, dispatch]);

  return (
    <div className="mt-[150px] min-h-[60vh] w-full">
      <div className="wrapper w-full">
        <div className="w-full relative">
          <img
            src={productData?.imageUrlHome}
            alt="bg"
            loading="lazy"
            className="max-w-[90%] w-full h-[300px] rounded-lg"
          />
          <Text weight="bold" color="text-white" variant="h0" format="tracking-wide absolute top-24 left-20">
            {productData?.name}
          </Text>
          <div
            className="text-base text-white font-bold absolute tracking-wide top-40 left-20 w-[70%]"
            dangerouslySetInnerHTML={{
              __html: productData?.introHtml.substring(0, 140).concat("..."),
            }}
          />
        </div>

        <div className="wrapper w-full mt-5 flex flex-col gap-5">
          <Text weight="bold" color="text-[#65666A]" variant="h2" format="tracking-wide">
            Benefits and features of {productData?.name}
          </Text>
          <div
            className="text-sm text-[#465174]"
            dangerouslySetInnerHTML={{
              __html: productData?.html,
            }}
          />
        </div>
        <div className="w-[30%] mt-[3%] mb-[10%] wrapper">
          <Button
            title="Create an account"
            onClick={() => navigate("/bvn_verification")}
            className="px-12 py-4 whitespace-nowrap font-extrabold capitalize"
            style={{ border: "3px solid #E32526" }}
          />
        </div>
      </div>
    </div>
  );
}
