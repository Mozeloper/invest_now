/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Text from "../../../../components/Typography/Typography";
import Button from "../../../../components/Button";
import { handleGetAllProducts } from "../../../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../components/loadingSkeleton";
import SideRightModal from "../../../../components/modals/SideRightModal";
import ProductDetails from "../components/productDetails";
import UtraceModal from "../components/utraceModal";
import MessageModal from "../../../../components/modals/MessageModal";
import Correct from "../../../../assets/icons/correct.svg";

export default function Securities() {
  const { setShowModal } = useOutletContext();
  const productsReducer = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productCode, setProductCode] = useState(null);
  const [uTraceModal, setUTraceModal] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState({
    details: null,
    successModal: false,
    errorText: false,
  });

  const handleShowKycMessage = () => {
    setShowModal(true);
  };

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetAllProducts());
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
              {productsReducer?.allProductData?.payload?.data?.data
                .filter((d) => d.name === "Securities")
                .map((product, i) => {
                  return (
                    <div key={i}>
                      <div key={product?.id} className="w-full mt-4 flex justify-between md:pr-[1%]">
                        <Text color="text-red" weight="bold" variant="h3">
                          {product?.name}
                        </Text>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-4">
                        <>
                          {product?.products.map((info, index) => {
                            return (
                              <div
                                key={index}
                                className={`h-[400px] w-[290px] bg-[${info?.bg_color ?? "#EEECFE"}] rounded-lg p-2`}
                              >
                                <img
                                  src={info?.imageUrlHome}
                                  alt="product_img"
                                  className="rounded-lg min-w-[270px] h-[171px]"
                                />
                                <div className="mt-3 flex flex-col justify-between h-[170px]">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: info?.introHtml.substring(0, 140).concat("..."),
                                    }}
                                  />

                                  <div className="w-full self-end flex justify-between items-center">
                                    <Text
                                      format="cursor-pointer"
                                      onClick={() => handleOpenProductDetailsModal(info?.code)}
                                      weight="bold"
                                      variant="h4"
                                    >
                                      Read More
                                    </Text>
                                    <div>
                                      <Button
                                        onClick={() => handleOpenProductDetailsModal(info?.code)}
                                        title={`${info?.name === "UTrace" ? "E-dividend Search" : "Open Account"}`}
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
                    </div>
                  );
                })}
            </>
          )}
      </div>
      <MessageModal bgColor={true} isOpen={showResponseModal?.successModal} modalWidth="400px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          {showResponseModal?.errorText ? (
            <Text format="text-center mt-3" variant="h3" color="text-[#465174]" weight="bold">
              !Oops
            </Text>
          ) : (
            <img src={Correct} alt="check-img" />
          )}
          <Text format="text-center mt-3" variant="h3" color="text-[#465174]" weight="bold">
            {showResponseModal?.details}
          </Text>
        </div>
        <div className="w-full flex justify-center">
          <div className="mt-8 w-[60%]">
            <Button
              onClick={() =>
                setShowResponseModal((prev) => ({ ...prev, successModal: false, errorText: false, details: null }))
              }
              title={`${showResponseModal?.errorText ? "Close" : "Continue"}`}
              className="cursor-pointer w-full"
              type="button"
            />
          </div>
        </div>
      </MessageModal>
      <SideRightModal isOpen={uTraceModal}>
        <UtraceModal setShowResponseModal={setShowResponseModal} setUTraceModal={setUTraceModal} />
      </SideRightModal>
      <SideRightModal isOpen={isModalOpen}>
        <ProductDetails
          handleShowKycMessage={() => handleShowKycMessage()}
          handleOpenProductDetailsModal={handleOpenProductDetailsModal}
          productCode={productCode}
          setUTraceModal={() => setUTraceModal(true)}
        />
      </SideRightModal>
    </>
  );
}
