import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import close from "../../../../../assets/icons/close_btn.svg";
import checked from "../../../../../assets/icons/correct_two.svg";
import ratingHand from "../../../../../assets/icons/rating_hand.svg";
import Button from "../../../../../components/Button";
import Text from "../../../../../components/Typography/Typography";

export default function RatingExperienceModal({ setIsRatingOpen, setIsPaymentModalOpen }) {
  const [feedback, setFeedback] = useState(false);

  return (
    <>
      <div className="w-full flex justify-end">
        <img
          onClick={() => setIsRatingOpen(false)}
          src={close}
          alt="correct"
          className="w-[40px] h-[40px] cursor-pointer"
        />
      </div>
      {!!!feedback && (
        <>
          <div className="w-full flex justify-center">
            <img src={ratingHand} alt="correct" className="w-[60px] h-[60px]" />
          </div>
          <div className="w-full flex flex-col gap-2 items-center justify-center mt-3">
            <Text weight="bold" variant="h3" color="text-[#465174]" format="tracking-wide text-center">
              Hello! Now that your onboarding is complete, we would like you to rate us
            </Text>
          </div>
          <div className="w-full flex flex-col gap-2 items-center justify-center mt-3">
            <Text weight="normal" variant="h4" color="text-[#465174]" format="tracking-wide text-center">
              How happy are you with our service?
            </Text>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
          <div className="w-full flex flex-col gap-2 mt-3">
            <Text weight="bold" variant="body" color="text-[#465174]" format="tracking-wide">
              How could we improve ?
            </Text>
          </div>
          <div className="flex flex-col w-full mt-4">
            <textarea className="w-full p-4 outline-none bg-white" id="improve" name="improve" rows="4" cols="50" />
          </div>
          <div className="mt-10 w-full flex justify-center">
            <div className="w-[50%]">
              <Button onClick={() => setFeedback(true)} title="Submit" className="cursor-pointer" type="button" />
            </div>
          </div>
        </>
      )}
      {feedback && (
        <>
          <div className="w-full flex justify-center">
            <img src={checked} alt="correct" className="w-[60px] h-[60px]" />
          </div>
          <div className="w-full flex flex-col gap-2 items-center justify-center mt-3">
            <Text weight="bold" variant="h2" color="text-[#465174]" format="tracking-wide">
              Thank you for the feedback
            </Text>
            <Text weight="normal" variant="body" color="text-[#465174]" format="tracking-wide text-center">
              You now have a United Capital Trust Fund Account. An activation Link has been sent to your mail. Use it to
              activate your account and create a password
            </Text>
          </div>
          <div className="mt-10 w-full flex justify-center">
            <div className="w-[50%]">
              <Button
                onClick={() => {
                  setIsPaymentModalOpen(true);
                  setIsRatingOpen(false);
                }}
                title="Continue to payment"
                className="cursor-pointer"
                type="button"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
