/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "../../../../components/Button";
import MyInput from "../../../../components/formFields/inputs/MyInput";
import close from "../../../../assets/icons/close_btn.svg";
import Logosmall from "../../../../assets/icons/logo.svg";
import Text from "../../../../components/Typography/Typography";
import { SearchBar } from "../../../../components/SearchBar";
import { handleGetAllSegment, handleSubmitUtrace } from "../../../../store/slices/productsSlice";
import Loader from "../../../../components/loadingSkeleton";

export default function UtraceModal({ setUTraceModal, setShowResponseModal }) {
  const dispatch = useDispatch();
  const productsReducer = useSelector((state) => state.productsReducer);
  const SegmentData = productsReducer?.productSegmentData?.payload?.data?.data;

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 800);
    };
  };

  const handleSearchSegment = (value) => {
    dispatch(handleGetAllSegment(value));
  };
  const optimizedFn = useCallback(debounce(handleSearchSegment), []);

  const handleSubmitUtraceRequest = async (values) => {
    const data = {
      firstName: values?.first_name,
      surname: values?.last_name,
      otherName: values?.other_name,
      phone: values?.phone_number,
      email: values?.email,
      equitiesToSearchFor: values?.segment,
    };
    await dispatch(handleSubmitUtrace(data))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          setShowResponseModal((prev) => ({
            ...prev,
            successModal: true,
            details: res?.data?.message,
          }));
          setUTraceModal(false);
        }
      })
      .catch((err) => {
        setShowResponseModal((prev) => ({
          ...prev,
          successModal: true,
          errorText: true,
          details: err?.data?.message,
        }));
      });
  };

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetAllSegment());
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const profileSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is Required"),
    last_name: Yup.string().required("Last Name is Required"),
    other_name: Yup.string(),
    // segment: Yup.array().required("Segment is Required.."),
    email: Yup.string().required("Email is Required"),
    phone_number: Yup.string().required("Phone Number is Required"),
  });

  return (
    <div className="p-[4%]">
      <div className="flex justify-end mb-3">
        <img
          className="cursor-pointer h-[50px] w-[50px]"
          src={close}
          alt="close_btn"
          onClick={() => setUTraceModal(false)}
        />
      </div>
      <div className="flex justify-center mt-2">
        <img src={Logosmall} alt="logo" />
      </div>
      <div className="flex justify-center mt-2">
        <Text color="text-primary" variant="h1" weight="bold" format="whitespace-nowrap font-bold">
          UTrace
        </Text>
      </div>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          other_name: "",
          email: "",
          phone_number: "",
          segment: [],
        }}
        validationSchema={profileSchema}
        enableReinitialize={true}
        onSubmit={async (values) => {
          handleSubmitUtraceRequest(values);
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit} className="w-full">
            <div className="flex md:flex-row flex-col gap-3 w-full mt-2">
              <div className="w-full">
                <MyInput
                  className="w-full"
                  placeholder="*First Name"
                  label="First Name"
                  name="first_name"
                  type="text"
                  handleChange={handleChange}
                />
              </div>
              <div className="w-full">
                <MyInput
                  className="w-full"
                  placeholder="*Last name"
                  label="Last name"
                  name="last_name"
                  type="text"
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full">
              <MyInput
                className="w-full"
                placeholder="*Other Name"
                label="Other Name"
                name="other_name"
                type="text"
                handleChange={handleChange}
              />
            </div>
            <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
              <div className="w-full">
                <MyInput
                  className="w-full"
                  placeholder="*Email"
                  label="Email"
                  name="email"
                  type="text"
                  handleChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label htmlFor="phone_number" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Phone Number
                </label>
                <PhoneInput
                  inputProps={{
                    name: "phone_number",
                    // required: true,
                    autoFocus: true,
                  }}
                  inputStyle={{
                    width: "100%",
                    height: 56,
                    backgroundColor: "#F2F2F2",
                  }}
                  country={"ng"}
                  disableCountryCode={true}
                  autoFormat={false}
                  value={values.phone_number}
                  onChange={(phone_number, country, e) => {
                    handleChange(e);
                  }}
                />
                {errors.phone_number && touched.phone_number ? (
                  <Text variant="small" weight="normal" color="text-red">
                    {errors.phone_number}
                  </Text>
                ) : null}
              </div>
            </div>
            <div className="mt-4 w-full flex flex-col gap-1">
              <Text variant="h4" weight="bold">
                Select Certificate(s)
              </Text>
              <Text variant="body" weight="normal">
                You can select as many Certificates you want to for
              </Text>
              <div className="w-full p-4 mb-4 overflow-hidden bg-[#F7F7F8] h-[300px]">
                <SearchBar
                  placeholder="Search for certificate"
                  widthSize="100%"
                  onChange={(e) => optimizedFn(e.target.value)}
                />
                {productsReducer?.productSegementsIsLoading && (
                  <div className="w-full mt-4">
                    <Loader width="100%" />
                  </div>
                )}
                {!!!productsReducer?.productSegementsIsLoading && (
                  <div className="overflow-y-auto overflow-hidden h-full mt-4 p-4">
                    {productsReducer?.productSegmentData?.type === "products/segments/fulfilled" &&
                      SegmentData?.map((list, index) => {
                        return (
                          <div key={index} className="flex items-center justify-between mt-2">
                            <Text variant="h4" weight="bold">
                              {list?.name}
                            </Text>
                            <Field
                              value={list?.symbol}
                              name="segment"
                              type="checkbox"
                              className="accent-primary outline-none"
                              onChange={handleChange}
                            />
                          </div>
                        );
                      })}
                  </div>
                )}
                {!!!productsReducer?.productSegementsIsLoading && SegmentData?.length <= 0 && (
                  <div className="mt-4 p-4">
                    <Text variant="h4" weight="bold">
                      No Data Availale
                    </Text>
                  </div>
                )}
              </div>
              {errors.segment && touched.segment ? (
                <Text variant="small" weight="normal" color="text-red">
                  {errors.segment}
                </Text>
              ) : null}
            </div>
            <div className="mt-8 w-[30%]">
              <Button
                title="Request Search"
                className="cursor-pointer w-full"
                type="submit"
                isLoading={productsReducer?.savingUtraceIsLoading}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
