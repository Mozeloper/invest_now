import React, { useEffect } from "react";
import Text from "../../../components/Typography/Typography";
// import rightArrow from "../../../assets/icons/big_chrevon_right.svg";
// import downArrow from "../../../assets/icons/down_arrow.svg";

export default function PrivacyStatement() {
  // const [isActive, setIsActive] = useState({
  //   terms_and_conditions: false,
  // });

  // const handleToggleAccordion = (type) => {
  //   setIsActive(false);
  //   setIsActive((prev) => ({
  //     ...prev,
  //     [type]: true,
  //   }));
  // };

  // const handleToggleCloseAccordion = (type) => {
  //   setIsActive((prev) => ({
  //     ...prev,
  //     [type]: false,
  //   }));
  // };

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
          Terms and Conditions
        </Text>
        <div className="my-5">
          {/* <div
            onClick={() => {
              !!!isActive?.terms_and_conditions
                ? handleToggleAccordion("terms_and_conditions")
                : handleToggleCloseAccordion("terms_and_conditions");
            }}
            className="p-[1%] bg-[#EDEDED] my-3 flex justify-between cursor-pointer"
          >
            <Text weight="bold" variant="h3" color="text-headerColor">
              Terms and Conditions
            </Text>
            {isActive?.terms_and_conditions ? (
              <img src={downArrow} alt="down_arrow" />
            ) : (
              <img src={rightArrow} alt="right_arrow" />
            )}
          </div> */}
          {/* {isActive?.terms_and_conditions && ( */}
          <div className="px-[4%] flex flex-col gap-3 w-[85%]">
            <Text weight="bold" variant="h3" color="text-headerColor">
              INVESTNOW TERMS AND CONDITIONS
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE YOU PROCEED. BY USING THIS WEBSITE, YOU INDICATE
              THAT YOU UNCONDITIONALLY ACCEPT THE TERMS AND YOU AGREE TO ABIDE BY THEM. IF YOU DO NOT AGREE WITH THE
              TERMS, PLEASE DO NOT USE THIS WEBSITE
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              1. AGREEMENT AND ACCEPTANCE
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              1.1 All intending users and users are advised to read these terms and conditions carefully before using
              the features of this website (“this Website” or “the Website”). By using this Website, you indicate
              acceptance of these terms irrespective of whether you sign up for use of this Website or not. If these
              terms are not agreeable to you, please do not proceed to use this Website. 1.2 These terms and conditions
              may be revised/updated from time to time. Ensure you check regularly for any notification of an
              update/change to these terms. Kindly endeavor to review the terms as they will be binding on you if you
              continue to use this Website after such change.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              2. CONTENT AND USE
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              2.1 The Website which is provided to you without any charge is designed to allow you open an account with
              or us and/or access your account. Consequently, confidential information might be sent to you following
              activities initiated by you on this Website. This information will be sent to the email addresses provided
              by you at the point of onboarding or subsequently (“your email address”). United Capital Plc (the
              “Company”) presumes that all instructions received from your email address is valid and can be duly
              executed. YOU HEREBY AGREE TO INDEMNIFY THE COMPANY, ITS AFFILIATES, THEIR DIRECTORS, EMPLOYEES, AND
              OFFICERS (THE “INDEMNIFIED PERSONS”) AGAINST ALL CLAIMS, PROCEEDINGS, LIABILITIES, OBLIGATIONS AND COSTS
              RESULTING DIRECTLY OR INDIRECTLY FROM THE TRANSMISSION OF THE CONFIDENTIAL INFORMATION TO YOUR EMAIL
              ADDRESS.
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              2.2 Certain parts of this Website may be accessed only by use of a user identification and/or password. If
              you have access to any of these parts, you are responsible to ensure that your user identification and/or
              password are not disclosed to any other person. If you disclose your user identification and/or password
              to any other person or become aware of any unauthorized access, you are obliged to advise us immediately
              to enable us de-activate or otherwise restrict your account as may be required. YOU ARE RESPONSIBLE FOR
              AND HEREBY AGREE TO INDEMNIFY THE INDEMNIFIED PERSONS FROM AND AGAINST ALL CLAIMS, PROCEEDINGS,
              LIABILITIES, OBLIGATIONS, AND COSTS RESULTING DIRECTLY OR INDIRECTLY FROM THE USE OF YOUR IDENTIFICATION
              AND/OR PASSWORD BY THE PERSON TO WHOM YOU DISCLOSED THEM OR BY ANY OTHER PERSON.
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              2.3 We reserve the right to revise the content, display, or functionality of this Website as we deem
              necessary. Consequently, information may be changed, removed, or updated without prior notice to you.
              Also, disruptions to this Website may occur as a consequence of the need to revise its content, display or
              functionality, or for other related and/or unrelated reasons. Although we will try to minimize disruptions
              to the Website, we do not guarantee that this Website will be available at all times. We also reserve the
              right to remove this Website completely without prior notice to you.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              3. LIMITATION OF LIABILITY
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              IN NO EVENT SHALL ANY INDEMNIFIED PERSON BE LIABLE TO YOU FOR ANY DAMAGES WHATSOEVER, INCLUDING WITHOUT
              LIMITATION INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES, ARISING OUT OF OR IN
              CONNECTION WITH YOUR USE OF THIS WEBSITE, CONTENT AND/OR USER INFORMATION, INCLUDING BUT NOT LIMITED TO
              THE QUALITY, TIMELINESS, SUITABILITY, ACCURACY, OR UTILITY OF THE INFORMATION PROVIDED AS PART OF 2 OR
              THROUGH UNITED CAPITAL OR FOR ANY INVESTMENT DECISIONS MADE ON THE BASIS OF SUCH INFORMATION, WHETHER OR
              NOT THE DAMAGES ARE FORESEEABLE AND WHETHER OR NOT UNITED CAPITAL HAS BEEN ADVISED OF THE POSSIBILITY OF
              SUCH DAMAGES. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN
              THE APPLICABLE JURISDICTION AND IN NO EVENT SHALL UNITED CAPITAL'S CUMULATIVE LIABILITY TO YOU EXCEED THE
              AMOUNT PAID BY YOU TO US AS FEES.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              4. INTELLECTUAL PROPERTY
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              4.1 The Company maintains all copyrights and other Intellectual property rights with respect to materials,
              logos, graphic designs, and other works on this Website. 4.2 All materials contained on this Website are
              the Company’s registered/unregistered trademarks or those of third parties. Please note that being a user
              on this Website does not grant you the right to use any of the trademarks or intellectual property without
              prior consent given by the Company. 4.3 Regardless of the existence of copyright(s), the Company remains
              the owner/custodian of all the materials on this Website. You are not entitled to any right or title to
              the materials.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              5. FEATURES
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              5.1 This Website has various features that enable users carry out transactions including but not limited
              to the following: (a) account opening; (b) account funding; (c) withdrawals; (d) equities trading; (e)
              stock pricing list; (f) recurrent payments; (g) transactional and executional functions; (h) simple wills;
              and (i) chat room. 5.2 The features listed above may only be accessed by registered users of this website.
              A visitor may have access to general information but will not be able to carry out transactions of any
              kind.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              6. REGISTRATION/SIGN ON
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              6.1 To access the features of this Website, an intending user will need to open an account by selecting
              the type of account (s) they wish to open. On successful completion, an initial email will be sent
              informing the user that an account has been created. A second email will be sent stating the details of
              the account. 6.2 An activation request email may be generated by the system to the user which expires
              after 72 hours. 6.3 Alternatively, you may request log-in details by clicking on the “Request a login” tab
              above the welcome page. An email will be sent to your registered email address advising on the steps to
              take. 6.4 Please ensure that you use a strong password and avoid sharing same with third parties. A strong
              password shall include uppercase, lowercase, special characters, and a number. Use secure connections when
              signing in to prevent unauthorized access to your account. You have the sole responsibility of ensuring
              your password is secure. 6.5 Registration on this website is limited to a single user. No multi-party user
              registration is allowed.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              7. SERVICE ACCESS
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              7.1 Although this Website will be accessible 24 hours every day of the week, no Indemnified Person will be
              liable if it becomes unavailable. 7.2 Where there is a system failure, malware, maintenance, upgrade or
              for reasons beyond the Company’s control, access may be suspended provisionally without notice. 7.3 With
              respect to equities trading, the trade instructions/mandates hit the trading portal of the Nigerian
              Exchange Limited. The trading times are from 10:00 am to 2:30 pm Mondays to Fridays only (excluding public
              holidays). Instructions sent outside these times will not be processed until trading resumes.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              8. USER CONDUCT
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              8.1 You should ensure correctness and accuracy of the information you provide as this will be used in
              processing your transactions. 8.2 You are implored to avoid using any harmful device that has been exposed
              to malware such as trojan horses, viruses, worms, harmful components, corrupted data, or malicious
              software on this Website. The Company may terminate your use of this Website automatically if you breach
              this term or any other term.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              9. SENDING AND PROCESSING INFORMATION
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              Instructions, activities, and transactions received from you after you log in with your registered log-in
              details (Username and Password) will be deemed received from you and will be taken as being authorized by
              you and intended to have legal force and effect.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              10. CONFIRMATION OF RECEIPT OF INSTRUCTIONS
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              10.1 Transaction instructions are deemed received only when the Company has confirmed receipt to the user
              via email. Where no confirmation of receipt of instruction is received, please check your account or
              contact our Customer experience team (customerservice@unitedcapitalplcgroup.com) before resending the
              instruction to prevent duplication of instruction as the initial instruction may still be processed.
              Neither the Company nor any Indemnified Person will be liable for any duplicated transaction where the
              Company did not confirm receipt of the instruction(s). 10.2 Please be informed that for equities trading,
              instructions are linked directly to and executed on the portal of the Nigerian Exchange Limited. No
              Indemnified Person will be liable for any incorrect instruction given with respect to such transactions.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              11. NO SOLICITATION
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              The information on this Website was prepared for informational purposes only without regard to any
              particular user’s investment objectives, financial situation, or means, and we are not soliciting any
              action based upon it. Nothing on this Website or in these terms may be construed as a recommendation; or
              an offer to buy or sell; or the solicitation of an offer to buy or sell any security, financial product,
              or instrument; or to participate in any particular trading strategy in any jurisdiction in which such an
              offer or solicitation, or trading strategy would be illegal. Certain transactions give rise to substantial
              risk and are not suitable for all investors. Although this material is based upon information that we
              consider reliable and endeavor to keep current, we have not verified this information and do not represent
              that this material is accurate, current, or complete and it should not be relied upon as such.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              12. FEES/CHARGES
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              12.1 For funding of your United Capital Securities Limited Account, a 1.5% fee of the funding or a maximum
              of N2000.00 cap may be charged to the user by the payment gateway as service charges. 12.2 Any attempt to
              make transactions from unfunded accounts or with insufficient funds will be rejected. Users are encouraged
              to ensure their accounts are adequately funded for each transaction.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              13. LIABILITY FOR THE USE OF THE WEBSITE
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              13.1 You are advised to check carefully before transacting or investing in any product as the information
              on this Website may not always be up to date or complete. The Company will not be liable for any losses
              where you fail to verify before investing. If unsure of the products and services you want to subscribe
              for, please contact us or an independent financial adviser or broker. 13.2 The Company will take
              reasonable care to check the reliability of the information provided by third party sites linked through
              this website, we do not however have control of their content and will not be responsible for losses
              incurred because of the use of such websites.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              14. DISCLAIMER
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              14.1 Please note that the information contained in this Website are also for general purposes. Therefore,
              we shall endeavour to keep all such information up to date and correct. However, we make no warranties of
              any kind, either expressly or impliedly about the accuracy, completeness, suitability, or availability
              with respect to this Website or information on this Website or other products, services, or related
              graphics contained on this Website. Consequently, any reliance placed on such information is strictly at
              your risk. 14.2 The Company will not be liable for any loss or damage including without limitation,
              indirect or consequential loss or damage, or any loss or damage whatsoever, arising from loss of data or
              profits arising out of or in connection with the use of this Website. In addition, we shall endeavour to
              keep this Website up and running smoothly. However, we will neither be liable for nor take responsibility
              where this Website is temporarily unavailable due to technical hitches beyond our control. 14.3 Kindly
              ensure that all passwords and personal information or log in details are kept secure as the Company will
              not be liable for any loss or damage caused by any use of your log in details in connection with the use
              of this Website.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              15. GOVERNING LAW AND DISPUTE RESOLUTION
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              15.1 These Terms and Conditions are governed by Nigerian Law. All disputes and claims arising from this
              Agreement shall be resolved by Arbitration by a single Arbitrator in accordance with the Arbitration and
              Conciliation Act CAP A18, Laws of the Federation of Nigeria 2004, which Rules are deemed incorporated by
              reference to this Clause. The Arbitrator shall be appointed by the agreement of the Parties, failing which
              such appointment shall be done by the Chairman (for the time being) of the Nigerian Branch of the
              Chartered Institute of Arbitrators (UK), on the application of any Party, giving notice to the other
              Party. The seat of Arbitration shall be Lagos, Nigeria, and the language to be used in the arbitral
              proceedings shall be English. 15.2 The rules, procedures and award of the arbitration shall be binding on
              the Parties. The arbitral award shall be delivered within three (3) months after the appointment of the
              Arbitrator or within such period as may be agreed upon by the Parties. The fee of the Arbitrator shall be
              borne equally between both Parties. However, each Party shall bear its own cost and lawyer’s fees. 15.3
              The Arbitrator shall have the power to give default judgment where both Parties fail to make submissions
              within the stipulated notice period or on failure to appear for Arbitration. Any party dissatisfied with
              the decision of the Arbitrator may refer the matter to the Securities and Exchange Commission.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              16. SEVERABILITY
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              In the event that any provision of these terms is found to be unenforceable, illegal or invalid by a court
              of competent jurisdiction, the enforceability, legality and validity of the remaining provisions shall not
              in any way be affected or impaired thereby and such provision shall be ineffective only to the extent of
              such unenforceability, illegality or invalidity.
            </Text>
            <Text weight="bold" variant="h3" color="text-headerColor">
              17. HEADINGS
            </Text>
            <Text weight="normal" variant="h4" color="text-headerColor">
              The headings in this document have been provided for convenience only and do not affect the interpretation
              of the clauses.
            </Text>
          </div>
          {/* // )} */}
        </div>
      </div>
    </div>
  );
}
