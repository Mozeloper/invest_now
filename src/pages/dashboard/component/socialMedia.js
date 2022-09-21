import React from "react";
import closeBtn from "../../../assets/icons/close_btn.svg";
import facebook from "../../../assets/icons/share_facebook.svg";
import instagram from "../../../assets/icons/share_instagram.svg";
import twitter from "../../../assets/icons/share_twitter.svg";
import youtube from "../../../assets/icons/share_youtube.svg";
import whatsapp from "../../../assets/icons/share_whatsapp.png";
import Text from "../../../components/Typography/Typography";

export default function SocialMedia({ setIsSocialMediaModalOpen }) {
  return (
    <>
      <div className="flex justify-end w-full">
        <img
          onClick={() => setIsSocialMediaModalOpen(false)}
          src={closeBtn}
          alt="close_btn"
          className="h-[40px] w-[40px] cursor-pointer"
        />
      </div>
      <Text variant="body" weight="bold" format="w-full">
        Share
      </Text>
      <div className="w-full flex gap-8 flex-wrap mt-4">
        <div className="flex flex-col gap-1">
          <div className="bg-red p-2 rounded-xl cursor-pointer flex justify-center">
            <a href="https://web.facebook.com" target="_blank" rel="noreferrer">
              <img className="w-[24px] h-[24px]" src={facebook} alt="facebook" />
            </a>
          </div>
          <Text variant="sub" weight="normal">
            Facebook
          </Text>
        </div>
        <div className="flex flex-col gap-1">
          <div className="bg-red p-2 rounded-xl cursor-pointer flex justify-center">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img className="w-[24px] h-[24px]" src={instagram} alt="instagram" />
            </a>
          </div>
          <Text variant="sub" weight="normal">
            Instagram
          </Text>
        </div>
        <div className="flex flex-col gap-1">
          <div className="bg-red p-2 rounded-xl cursor-pointer flex justify-center">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img className="w-[24px] h-[24px]" src={twitter} alt="twitter" />
            </a>
          </div>
          <Text variant="sub" weight="normal">
            Twitter
          </Text>
        </div>
        <div className="flex flex-col gap-1">
          <div className="bg-red p-2 rounded-xl cursor-pointer flex justify-center">
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <img className="w-[24px] h-[24px]" src={youtube} alt="youtube" />
            </a>
          </div>
          <Text variant="sub" weight="normal">
            Youtube
          </Text>
        </div>
        <div className="flex flex-col gap-1">
          <div className="bg-red p-2 rounded-xl cursor-pointer flex justify-center">
            <a href="https://api.whatsapp.com" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="whatsapp" className="w-[24px] h-[24px]" />
            </a>
          </div>
          <Text variant="sub" weight="normal">
            WhatsApp
          </Text>
        </div>
      </div>
    </>
  );
}
