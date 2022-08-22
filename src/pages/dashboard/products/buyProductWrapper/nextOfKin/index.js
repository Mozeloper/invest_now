import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { handleGetGender } from "../../../../../store/slices/authSlices";
import { getRelationShipStatus, handleCreateAccount } from "../../../../../store/slices/openAccountSlice";
import { handleGetProductDetails } from "../../../../../store/slices/productsSlice";
import Text from "../../../../../components/Typography/Typography";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import SearchableSelect from "../../../../../components/formFields/selectField";
import PhoneInput from "react-phone-input-2";
import Button from "../../../../../components/Button";
import { useNavigate } from "react-router-dom";
import { handleCustomerDetails } from "../../../../../store/slices/dashboardSlice";
import MessageModal from "../../../../../components/modals/MessageModal";
import SuccessAccountModal from "../components/successAccountModal";
import RatingModal from "../components/ratingModal";
import { setNextOfkin, setNextStep } from "../../../../../store/slices/buyProductSlice";
import FundAccount from "../components/FundAccount";

export default function NextOfKin() {
  const [isModalOpen, setIsModalOpen] = useState({
    error: false,
    success: false,
    showRating: false,
    showFundAccount: false,
    details: null,
  });

  const dashboardReducer = useSelector((state) => state?.dashboardReducer);
  const customerDetails = dashboardReducer?.customerDetails?.payload?.data?.data;
  const authReducer = useSelector((state) => state.authReducer);
  const openAccountReducer = useSelector((state) => state.openAccountReducer);
  const buyProductReducer = useSelector((state) => state.buyProductReducer);
  const productsReducer = useSelector((state) => state.productsReducer);
  const productData = productsReducer?.productDetailsData?.payload?.data?.data;
  const isBothTrue = productData?.category?.hasBeneficiary && productData?.category?.hasChnNumber;
  const isBothFalse = !productData?.category?.hasBeneficiary && !productData?.category?.hasChnNumber;
  const isbeneficiaryTrue = productData?.category?.hasBeneficiary && !productData?.category?.hasChnNumber;
  const isCHNTrue = productData?.category?.hasChnNumber && !productData?.category?.hasBeneficiary;
  const productCode = buyProductReducer?.productCode;
  const genderType = authReducer?.gender;
  const genders = [];
  const relationship = [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetGender());
        dispatch(getRelationShipStatus());
        dispatch(handleGetProductDetails(productCode));
        dispatch(handleCustomerDetails());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch, productCode]);

  if (genderType?.success && genderType?.message === "Retrieved successfully") {
    genderType?.data.map((list) => {
      return genders.push({
        label: list?.name,
        value: list?.name,
      });
    });
  }

  if (openAccountReducer?.relationshipData?.type === "openaccount/relationShipStatus/fulfilled") {
    openAccountReducer?.relationshipData?.payload?.data?.data.map((list) => {
      return relationship.push({
        label: list.next_of_kin_relation,
        value: list.next_of_kin_relation,
      });
    });
  }

  const handleBuyProductAccount = async (values) => {
    const data = {
      title: customerDetails?.title ?? "",
      first_name: customerDetails?.firstname ?? "",
      middle_name: customerDetails?.middlename ?? "",
      last_name: customerDetails?.lastname ?? "",
      mothers_maiden_name: customerDetails?.mothers_maiden_name ?? "",
      terms_and_conditions: 1,
      id_type: Number(customerDetails?.kycDetail[1]?.identity_type) ?? "",
      passport: customerDetails?.kycDetail[0]?.location ?? "",
      id_card: customerDetails?.kycDetail[1]?.location ?? "",
      signature_specimen: customerDetails?.kycDetail[2]?.location ?? "",
      utility_bill: customerDetails?.kycDetail[3]?.location ?? "",
      bank_id: buyProductReducer?.bankDetails?.bankSelected?.id ?? null,
      bank_acct_no: buyProductReducer?.bankDetails?.accountNumber ?? null,
      bank_acct_name: buyProductReducer?.bankDetails?.account_name ?? null,
      is_pep: customerDetails?.pep_status ?? false,
      is_minor: false,
      owner: true,
      nok_first_name: values?.firstName,
      nok_middle_name: values?.middleName,
      nok_last_name: values?.lastName,
      nok_gender: values?.gender,
      nok_relationship: values?.relationship,
      nok_address: values?.address,
      nok_phone: values?.phone_number,
      nok_email: values?.email,
      date_of_birth: customerDetails?.dob ?? "",
      birth_certificate_base64: "",
      beneficiary_fullname: "",
      beneficiary_dob: "",
      beneficiary_id_type: "",
      beneficiary_id: "",
      beneficiary_passport: "",
      chn_account_number: "",
      id_number: "",
      id_expiration_date: "",
      referral: buyProductReducer?.referralCode,
      account_type: productData?.code ?? "",
    };
    await dispatch(handleCreateAccount(data))
      .unwrap()
      .then((res) => {
        if (res?.data?.success) {
          setIsModalOpen((prev) => ({
            ...prev,
            success: true,
            details: res?.data?.message,
          }));
        }
      })
      .catch((error) => {
        setIsModalOpen((prev) => ({
          ...prev,
          error: true,
          details: error?.data?.message,
        }));
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen((prev) => ({
      ...prev,
      error: false,
      success: false,
      showRating: false,
      showFundAccount: false,
      details: null,
    }));
  };

  const nextOfKinSchema = Yup.object().shape({
    phone_number: Yup.string().required("Phone Number is Required"),
    firstName: Yup.string().required("Full Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    middleName: Yup.string(),
    gender: Yup.string().required("Gender is Required"),
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    relationship: Yup.string().required("Relationship is Required"),
    address: Yup.string().required("Address is Required"),
  });

  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="p-[4%]">
      <div className="flex flex-col gap-1 w-[60%]">
        <Text color="text-black" weight="bold" variant="h3">
          Next Of Kin
        </Text>
        <Text color="text-black" weight="normal" variant="h4" format="tracking-wide">
          This information helps us personalise and secure your InvestNow account
        </Text>
      </div>
      <div className="mt-8">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            middleName: "",
            relationship: "",
            phone_number: "",
            gender: "",
            email: "",
            address: "",
          }}
          validationSchema={nextOfKinSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            dispatch(setNextOfkin(values));
            if (isBothTrue) {
              dispatch(setNextStep(1));
              navigate(`/products/${productData?.name.toLowerCase().replaceAll(" ", "_")}`);
            } else if (isBothFalse) {
              handleBuyProductAccount(values);
            } else if (isbeneficiaryTrue) {
              dispatch(setNextStep(1));
              navigate(`/products/${productData?.name.toLowerCase().replaceAll(" ", "_")}`);
            } else if (isCHNTrue) {
              dispatch(setNextStep(2));
              navigate(`/products/${productData?.name.toLowerCase().replaceAll(" ", "_")}`);
            } else {
              return null;
            }
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className="w-full h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="Enter Name"
                    label="First Name"
                    name="firstName"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="Enter Last Name"
                    label="Last Name"
                    name="lastName"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="Enter Name"
                    label="Middle Name"
                    name="middleName"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="relationship" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Relationship
                  </label>
                  <SearchableSelect
                    options={relationship}
                    isLoading={openAccountReducer?.relationshipIsLoading}
                    name="relationship"
                    setFieldValue={setFieldValue}
                    value={values.relationship}
                    placeholder="Select relationship"
                  />
                  {errors.relationship && touched.relationship ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.relationship}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <label htmlFor="phone_number" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Phone Number
                  </label>
                  <PhoneInput
                    inputProps={{
                      name: "phone_number",
                      required: true,
                      autoFocus: true,
                    }}
                    inputStyle={{
                      width: "100%",
                      height: 56,
                      backgroundColor: "#F2F2F2",
                    }}
                    country={"ng"}
                    value={values.phone_number}
                    onChange={(e) => setFieldValue("phone_number", e)}
                  />
                  {errors.phone_number && touched.phone_number ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.phone_number}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full">
                  <label htmlFor="gender" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Gender
                  </label>
                  <SearchableSelect
                    options={genders}
                    isLoading={authReducer?.isGenderLoading}
                    name="gender"
                    setFieldValue={setFieldValue}
                    value={values.gender}
                    placeholder="Select gender"
                  />
                  {errors.gender && touched.gender ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.gender}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="w-[50%] mt-4">
                <MyInput
                  className="w-full"
                  placeholder="Enter Email Address"
                  label="Email Address"
                  name="email"
                  type="email"
                  handleChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-full mt-4">
                <label htmlFor="address" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Address
                </label>
                <Field className="w-[80%] h-[153px] p-4 outline-none bg-[#f2f2f2]" name="address" as="textarea" />
              </div>
              {errors.address && touched.address ? (
                <Text variant="small" weight="normal" color="text-red">
                  {errors.address}
                </Text>
              ) : null}
              <div className="mt-6 w-full flex justify-center">
                <div className="w-[30%]">
                  <Button
                    title="Submit"
                    className="cursor-pointer"
                    type="submit"
                    isLoading={openAccountReducer?.createAccountIsLoading}
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <MessageModal bgColor={true} isOpen={isModalOpen?.error} modalWidth="300px" modalHeight="auto">
        <div className="flex flex-col justify-center items-center w-full">
          <Text format="text-center mt-3" variant="h4" color="text-[#465174]" weight="bold">
            {isModalOpen?.details}
          </Text>
          <div className="mt-4 w-full">
            <Button onClick={() => handleCloseModal()} title="Close" className="cursor-pointer w-full" type="button" />
          </div>
        </div>
      </MessageModal>
      <MessageModal bgColor={true} isOpen={isModalOpen?.success}>
        <SuccessAccountModal handleCloseModal={handleCloseModal} setIsModalOpen={setIsModalOpen} />
      </MessageModal>
      <MessageModal modalHeight="auto" bgColor={true} isOpen={isModalOpen?.showRating}>
        <RatingModal handleCloseModal={handleCloseModal} setIsModalOpen={setIsModalOpen} />
      </MessageModal>
      <MessageModal modalHeight="100vh" bgColor={true} isOpen={isModalOpen?.showFundAccount}>
        <FundAccount handleCloseModal={handleCloseModal} setIsModalOpen={setIsModalOpen} />
      </MessageModal>
    </div>
  );
}
