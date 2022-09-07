import React from "react";
import { useNavigate } from "react-router-dom";
import Text from "../../../../components/Typography/Typography";
import Logo from "../../../../assets/icons/logo.svg";
import Button from "../../../../components/Button";

export default function TermsOfService({ setShowMessageAlert }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-y-auto overflow-hidden no-scrollbar">
      <div className="flex flex-col gap-3 text-center">
        <img loading="lazy" src={Logo} alt="logo-investnow" className="w-80 h-10 self-center" />
        <Text variant="h3" weight="extrabold" color="#000000">
          Terms Of Service
        </Text>
        <Text variant="h4" weight="bold" color="#000000">
          By clicking on the I AGREE Button, I hereby affirm that in line with the relevant Data Protection laws in
          Nigeria, I consent to the collection and processing of my personal data/information in the absence of any
          fraud, duress, undue influence or coercion, for the purpose of this account opening and other necessary data
          processing activities which may arise therefrom, including for the performance of the relationship between
          myself and United Capital. I affirm that I have the requisite capacity under the law to consent to the
          collection and processing of my personal data. I affirm that I am aware and take cognizance of my rights under
          the relevant Data Protection laws in Nigeria which include the right to request for access, amendment,
          rectification or cancellation or destruction of my personal data/ information, the right to lodge a complaint
          with the relevant authority as well as the right to object to the processing of my personal data. I further
          consent to the processing of my personal data (within or outside Nigeria), including transfer of my personal
          data to any third party for reasons associated with the purpose for which the data is being processed as
          stated above, including but not limited to data collection, processing and storage.
        </Text>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <Button
          textColor="#FE0000"
          backgroundColor="rgba(254, 0, 0, 0.1)"
          title="Decline"
          onClick={() => navigate("/")}
          className="py-4 font-extrabold"
        />
        <Button title="I Agree" onClick={setShowMessageAlert} className="py-4 font-extrabold" />
      </div>
    </div>
  );
}
