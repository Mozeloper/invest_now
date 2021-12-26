import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Text from "../../../../../components/Typography/Typography";
import MyInput from "../../../../../components/formFields/inputs/MyInput";
import SearchableSelect from "../../../../../components/formFields/selectField";
import PhoneInput from "react-phone-input-2";
import { handleGetGender } from "../../../../../store/slices/authSlices";
import { getRelationShipStatus } from "../../../../../store/slices/openAccountSlice";
import Button from "../../../../../components/Button";

export default function NextOfKin() {
  const authReducer = useSelector((state) => state.authReducer);
  const openAccountReducer = useSelector((state) => state.openAccountReducer);
  const genderType = authReducer?.gender;
  const genders = [];
  const relationship = [];
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        dispatch(handleGetGender());
        dispatch(getRelationShipStatus());
      }
    })();
    return () => {
      mounted = false;
    };
  }, [dispatch]);

  if (genderType?.success && genderType?.message === "Retrieved successfully") {
    genderType?.data.map((list) => {
      return genders.push({
        label: list?.name,
        value: list?.code,
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

  const nextOfKinSchema = Yup.object().shape({
    phone_number: Yup.string(),
    fullName: Yup.string().required("Full Name is Required"),
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
            fullName: "",
            relationship: "",
            phone_number: "",
            gender: "",
            email: "",
            address: "",
          }}
          validationSchema={nextOfKinSchema}
          enableReinitialize={true}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange, setFieldValue, values, touched, errors }) => (
            <Form onSubmit={handleSubmit} className="w-full h-full">
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder="Enter Name"
                    label="Full Name"
                    name="fullName"
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
    </div>
  );
}
