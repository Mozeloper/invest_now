import React, { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button";
import MyInput from "../../../components/formFields/inputs/MyInput";
import SearchableSelect from "../../../components/formFields/selectField";
import Text from "../../../components/Typography/Typography";
import MessageIcon from "../../../assets/icons/message_icon.svg";
import OperationIcon from "../../../assets/icons/operation_icon.svg";
import LocationIcon from "../../../assets/icons/location_icon.svg";

export default function ContactUsForm() {
  useEffect(() => {
    let mounted = false;
    (async () => {
      mounted = true;
      if (mounted) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const contactUsSchema = Yup.object().shape({
    phone_number: Yup.string().required("Phone Number is Required"),
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
    firstName: Yup.string().required("Full Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    subject: Yup.string().required("Subject is Required"),
    category: Yup.string().required("Category is Required"),
    message: Yup.string().required("message is Required"),
  });

  return (
    <div className="mt-[120px] min-h-[60vh] w-full">
      <div className="px-[6%] md:px-[10%] w-full">
        <Text weight="bold" variant="h0" format="tracking-wide mb-2">
          Contact Us
        </Text>
        <Text weight="bold" variant="h3" format="tracking-wide mb-10">
          We would love to hear from you
        </Text>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone_number: "",
            category: "",
            subject: "",
            message: "",
          }}
          validationSchema={contactUsSchema}
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
                    placeholder=""
                    label="First Name"
                    name="firstName"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder=""
                    label="Last Name"
                    name="lastName"
                    type="text"
                    handleChange={handleChange}
                  />
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
                  <MyInput
                    className="w-full"
                    placeholder=""
                    label="Email Address"
                    name="email"
                    type="text"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-3 w-full mt-4">
                <div className="w-full">
                  <label htmlFor="category" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                    Select Category
                  </label>
                  <SearchableSelect
                    options={[]}
                    isLoading={false}
                    name="category"
                    setFieldValue={setFieldValue}
                    value={values.category}
                    placeholder=""
                  />
                  {errors.category && touched.category ? (
                    <Text variant="small" weight="normal" color="text-red">
                      {errors.category}
                    </Text>
                  ) : null}
                </div>
                <div className="w-full">
                  <MyInput
                    className="w-full"
                    placeholder=""
                    label="subject"
                    name="subject"
                    type="email"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full mt-4">
                <label htmlFor="message" className="font-normal text-sm text-NEUTRAL-_900 pb-2">
                  Your Message
                </label>
                <Field className="w-[50%] h-[153px] p-4 outline-none bg-[#f2f2f2]" name="message" as="textarea" />
              </div>
              {errors.message && touched.message ? (
                <Text variant="small" weight="normal" color="text-red">
                  {errors.message}
                </Text>
              ) : null}
              <div className="mt-6 w-full">
                <div className="w-[20%]">
                  <Button title="Submit" className="cursor-pointer outline-none" type="submit" isLoading={false} />
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="my-12 flex justify-between md:flex-row flex-col gap-4">
          <div className="flex flex-col items-center gap-3 w-full">
            <img src={MessageIcon} alt="message_icon" className="w-[80px] h-[80px]" />
            <Text weight="bold" variant="h3" color="text-[#000000]">
              Send us a message
            </Text>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 justify-center">
                <div className="font-normal text-base text-[#000000] text-center">Whatsapp Contact:</div>
                <a
                  className="font-bold text-base text-primary text-center"
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/08168282396"
                >
                  08168282396
                </a>
              </div>
              <div className="flex gap-2 justify-center">
                <div className="font-normal text-base text-[#000000] text-center">Email:</div>
                <a
                  className="font-bold text-base text-primary text-center"
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:UnitedCustomerService@unitedcapitalplcgroup.com?subject = Feedback&body = Message"
                >
                  UnitedCustomerService@unitedcapitalplcgroup.com
                </a>
              </div>
            </div>
            <Text weight="normal" variant="h4" color="text-[#000000]" format="w-[50%] text-center">
              8am - 4pm Support 070000INVEST (07000468378) 014631130 014631131
            </Text>
          </div>
          <div className="flex flex-col items-center gap-3 w-full">
            <img src={OperationIcon} alt="message_icon" className="w-[80px] h-[80px] text-center" />
            <Text weight="bold" variant="h3" color="text-[#000000]">
              Hours of operation
            </Text>
            <Text weight="normal" variant="h4" color="text-[#000000]" format="w-[50%] text-center">
              Monday - Friday 08:00am – 04:00pm
            </Text>
          </div>
          <div className="flex flex-col items-center gap-3 w-full">
            <img src={LocationIcon} alt="message_icon" className="w-[80px] h-[80px]" />
            <Text weight="bold" variant="h3" color="text-[#000000]">
              Our location
            </Text>
            <Text weight="normal" variant="h4" color="text-[#000000]" format="w-[50%] text-center">
              Headquarters 3rd and 4th Floor, Afriland Towers, 97/105 Broad Street, Lagos, Nigeria.
            </Text>
            <Text weight="normal" variant="h4" color="text-[#000000]" format="w-[50%] text-center">
              Western Region UBA Building, Lbanon/Jubilee Market Street, Dugbe, Ibadan Nigeria.
            </Text>
            <Text weight="normal" variant="h4" color="text-[#000000]" format="w-[50%] text-center">
              Abuja No.33 Monrovia Street, Wuse 2, Abuja, Nigeria.
            </Text>
            <Text weight="normal" variant="h4" color="text-[#000000]" format="w-[50%] text-center">
              Port Harcourt No.14 Azikiwe Road, Port Harcourt, Nigeria.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
