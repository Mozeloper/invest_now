import React, { useEffect, useState } from "react";
import Text from "../../../components/Typography/Typography";
import rightArrow from "../../../assets/icons/big_chrevon_right.svg";
import downArrow from "../../../assets/icons/down_arrow.svg";

export default function PrivacyStatement() {
  const [isActive, setIsActive] = useState({
    privacy_policy: false,
  });

  const handleToggleAccordion = (type) => {
    setIsActive(false);
    setIsActive((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleToggleCloseAccordion = (type) => {
    setIsActive((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

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

  return (
    <div className="mt-[120px] min-h-[60vh] w-full">
      <div className="wrapper w-full">
        <Text weight="bold" variant="h1" format="tracking-wide mb-4">
          Privacy Statement
        </Text>
        <div className="my-5">
          <div
            onClick={() => {
              !!!isActive?.privacy_policy
                ? handleToggleAccordion("privacy_policy")
                : handleToggleCloseAccordion("privacy_policy");
            }}
            className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
          >
            <Text weight="bold" variant="h3" color="text-headerColor">
              Privacy Policy
            </Text>
            {isActive?.privacy_policy ? (
              <img src={downArrow} alt="down_arrow" />
            ) : (
              <img src={rightArrow} alt="right_arrow" />
            )}
          </div>
          {isActive?.privacy_policy && (
            <div className="px-[4%] flex flex-col gap-3 w-[85%]">
              <Text weight="bold" variant="h4" color="text-headerColor">
                What is this Privacy Notice
              </Text>
              <Text weight="normal" variant="body" color="text-headerColor">
                United Capital Plc (“United Capital”, “We”) values your Personal Data and we are committed to protecting
                your privacy whenever you interact with us. Please read this Privacy Notice (Notice) to understand our
                policies, processes and procedures regarding the processing of your personal data. By this Notice, we
                explain to you how your Personal Data is collected, used, managed and transferred by United Capital and
                also explains how you can update your Personal Data with us and exercise your rights in respect of the
                Personal Data provided to us.
              </Text>
              <Text weight="bold" variant="h4" color="text-headerColor">
                The Personal Data that We Collect
              </Text>
              <div className="text-headerColor font-normal text-sm">
                We collect Personal Data that you give to us, for example, where you create an account with us, request
                for further information about our product, fill a form, apply for a job through our website or you
                subscribe to newsletters on our website. We may also automatically collect some technical information
                when you visit our website such as your IP address, and information about your visit, such as the pages
                that you viewed. This information helps us understand customer interests and helps us improve our
                website. When you visit our site, the pages that you look at, and a short text file called a cookie, are
                downloaded to your computer. By visiting and using our website, you agree to our use of cookies in line
                with United Capital’s policies. For more details about Cookies, please read our Cookies Policy available
                through this{" "}
                <a
                  href="https://investnow.ng/cookiespolicy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary font-bold text-base cursor-pointer"
                >
                  link
                </a>
                .
              </div>
              <Text weight="bold" variant="h4" color="text-headerColor">
                What Purpose do We use your Personal Data?
              </Text>
              <Text weight="normal" variant="body" color="text-headerColor">
                We may process your Personal Data to communicate with you (including sending marketing or promotional
                materials to you), provide you with further information about our products and how we can serve you
                better, respond to your purchase orders or requests, process your application for employment with United
                Capital or to fulfil our contractual obligations with you. We may also process your Personal Data to
                comply with provisions of applicable laws.
              </Text>
              <Text weight="bold" variant="h4" color="text-headerColor">
                Who do we share your Personal Data with?
              </Text>
              <Text weight="normal" variant="body" color="text-headerColor">
                We respect your privacy and we limit disclosure of your Personal Data to third parties. We do not sell,
                give or trade any Personal Data that We obtain from you to any third party for data-mining or marketing
                purposes. However, we may share your Personal Data with companies within the United Capital Group,
                service providers engaged by us to provide services to United Capital subject to appropriate data
                security and protection. We may also share your information where there is a regulatory or statutory
                obligation to disclose such Personal Data in accordance with provisions of applicable laws.
              </Text>
              <Text weight="bold" variant="h4" color="text-headerColor">
                Security and Retention of your Personal Data
              </Text>
              <Text weight="normal" variant="body" color="text-headerColor">
                Your Personal Data is kept private and We make every effort to keep your Personal Data secure, including
                restricting access to your Personal Data with us on a need to know basis. We require our staff and any
                third parties who carry out any work on our behalf to comply with appropriate security standards to
                protect your Personal Data. We take appropriate measures to ensure that your Personal Data is only
                processed for the minimum period necessary in line with the purposes set out in this Notice or as
                required by applicable laws, until a time it is no longer required or has no use. Once your Personal
                Data is no longer required, we destroy it in a safe and secure manner.
              </Text>
              <Text weight="bold" variant="h4" color="text-headerColor">
                Your Rights
              </Text>
              <div>
                <Text weight="normal" variant="body" color="text-headerColor">
                  United Capital collects Personal Data only for the purposes identified in this Policy You can exercise
                  the following rights with respect to your Personal Data with United Capital:
                </Text>
                <div className="mt-2 flex flex-col gap-2 w-full ml-[2%]">
                  <p className="text-headerColor font-normal text-sm">
                    a) Request for and access your Personal Data collected and stored by United Capital; and such
                    information cannot be reused for another purpose that is incompatible with the original purpose.
                  </p>
                  <p className="text-headerColor font-normal text-sm">
                    b) Withdraw consent at any time. For example, you can withdraw your consent to receipt of our
                    marketing or promotional materials or unsubscribe to our newsletters;
                  </p>
                  <p className="text-headerColor font-normal text-sm">
                    c) object to automated decision making; request rectification and modification of Personal Data kept
                    by United Capital ;
                  </p>
                  <p className="text-headerColor font-normal text-sm">d) request for deletion of your Personal Data;</p>
                  <p className="text-headerColor font-normal text-sm">
                    e) be informed of and entitled to provide consent prior to the processing of Personal Data for
                    purposes other than that for which the Personal Data were collected;
                  </p>
                  <p className="text-headerColor font-normal text-sm">
                    f) request that United Capital restricts processing of your Personal Data; and
                  </p>
                  <p className="text-headerColor font-normal text-sm">
                    g) request for information regarding any specific processing of your personal data.
                  </p>
                </div>
              </div>
              <Text weight="bold" variant="h4" color="text-headerColor">
                Changes to our Privacy Notice
              </Text>
              <Text weight="normal" variant="body" color="text-headerColor">
                Due to constant changes in technology and regulatory requirements, we may need to change our privacy
                policies or update this Notice from time to time. You will always be able to find the most recent
                version of our updated privacy policy on this site.
              </Text>
              <Text weight="bold" variant="h4" color="text-headerColor">
                Contact & Communication
              </Text>
              <Text weight="normal" variant="body" color="text-headerColor">
                If you would like further information on this Notice, or to contact our Data Protection Officer, you may
                contact us at United Capital, United Capital Plc, 3rd and 4th Floor, Afriland Towers, 97/105 Broad
                Street, Lagos., Nigeria or at dpo@unitedcapitalplcgroup.com.
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
