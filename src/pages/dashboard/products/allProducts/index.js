/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../../../components/Typography/Typography";
import Button from "../../../../components/Button";
import { handleGetAllProducts } from "../../../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../components/loadingSkeleton";
import SideRightModal from "../../../../components/modals/SideRightModal";
import ProductDetails from "../components/productDetails";

export default function AllProducts() {
  const productsReducer = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productCode, setProductCode] = useState(null);

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        try {
          dispatch(handleGetAllProducts());
        } catch (error) {
          console.log(error);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const handleOpenProductDetailsModal = (code) => {
    setProductCode(code);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="2000">
        {productsReducer?.allProductIsLoading && (
          <div className="w-full flex flex-wrap gap-4">
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </div>
        )}
        {!!!productsReducer?.allProductIsLoading &&
          productsReducer?.allProductData?.type === "products/allProducts/fulfilled" && (
            <>
              {productsReducer?.allProductData?.payload?.data?.data.map((product) => {
                return (
                  <>
                    <div key={product?.id} className="w-full mt-4 flex justify-between md:pr-[1%]">
                      <Text color="text-red" weight="bold" variant="h3">
                        {product?.name}
                      </Text>
                      <Text
                        onClick={() =>
                          navigate(
                            `${
                              product?.name === "Mutual Funds"
                                ? "/products/mutual_funds"
                                : product?.name === "Trust"
                                ? "/products/trust"
                                : product?.name === "Securities"
                                ? "/products/securities"
                                : "/products/all"
                            }`
                          )
                        }
                        variant="h4"
                        format="cursor-pointer"
                        weight="bold"
                        color="text-[#465174]"
                      >
                        See All
                      </Text>
                    </div>
                    <div className="mt-4 flex overflow-hidden overflow-x-auto no-scrollbar gap-4">
                      <>
                        {product?.products.map((info, index) => {
                          return (
                            <div
                              key={index}
                              className={`h-[400px] w-[290px] ${
                                index % 2 ? "bg-[#EEECFE]" : "bg-[#E7F5FF]"
                              }  rounded-lg p-2`}
                            >
                              <div
                                style={{
                                  backgroundImage: `url(${info?.imageUrlHome})`,
                                  height: "171px",
                                  width: "270px",
                                  borderRadius: "10px",
                                  padding: "3px",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                {/* <div className="p-2 mt-3 bg-BACKGROUND_GREEN w-[60%] rounded-lg self-end flex gap-3 justify-end">
                                  <p className="text-sm font-bold text-white">2012</p>
                                  <p className="text-sm font-bold text-white">Gains</p>
                                  <p className="text-sm font-bold text-white">22.5%</p>
                                </div> */}
                              </div>
                              <div className="mt-3 flex flex-col justify-between h-[170px]">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: info?.introHtml.substring(0, 200).concat("..."),
                                  }}
                                />

                                <div className="self-end flex justify-end">
                                  <div>
                                    <Button
                                      onClick={() => handleOpenProductDetailsModal(info?.code)}
                                      title="Open Account"
                                      textColor="#fff"
                                      className="px-3 font-bold outline-none"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    </div>
                  </>
                );
              })}
            </>
          )}
      </div>
      <SideRightModal isOpen={isModalOpen}>
        <ProductDetails handleOpenProductDetailsModal={handleOpenProductDetailsModal} productCode={productCode} />
      </SideRightModal>
    </>
  );
}
