export const appUrls = {
  loginURL: "auth/app-login",
  forgetPasswordURL: "api/v2/customers/generate-verification-code?",
  forgetPasswordOtpURL: "api/v2/customers/validate-verification-code?",
  forgetPasswordChangePasswordURL: "auth/forgot-password?",
  customerExistURL: "api/v2/onboarding/check-if-bvn-exists",
  smileIdentityURL: "v1/id_verification",
  genderURL: "api/v2/onboarding/get-gender-types",
  countryURL: "api/v2/onboarding/countries",
  stateURL: "api/v2/onboarding/states",
  createCustomerURL: "api/v2/onboarding/create-customer",
  resendOtpCodeURL: "api/v2/onboarding/generate-verification-code",
  validateOTPURL: "api/v2/onboarding/validate-verification-code",
  passwordCreationURL: "api/v2/onboarding/save-password",
  dashboardSummaryURL: "investnow/dashboard-summary",
  completionSummaryURL: "api/v2/customers/get-profile-completion-status",
  slidingRateURL: "product/mutual-fund-rates",
  activeReferralProductURL: "investnow/get-all-active-referral-by-product",
  referralCodeLinkURL: "investnow/referral-client-code",
  uploadUtilityBillURL: "api/v2/customers/upload-utility-bill",
  uploadSignatureURL: "api/v2/customers/upload-signature",
  identityTypesURL: "api/v2/onboarding/get-identity-types",
  uploadCustomerIdentity: "api/v2/customers/upload-id?",
  customerTitlesURL: "api/v2/title-type/list",
  religionURL: "api/v2/religion-type/list",
  maritalStatusURL: "api/v2/marital-status-type/list",
  saveBioDataURL: "api/v2/customers/save-profile",
  employementStatusURL: "api/v2/employment-status-type/list",
  salaryBandURL: "api/v2/salary-range-type/list",
  employementDetailsURL: "api/v2/customers/save-employment-details",
  noReasonTinURL: "api/v2/no-tin-reason-type/list",
  saveSelfCertificationURL: "api/v2/customers/save-self-certification",
  getAllProducts: "account/get-businesses",
  getProductDetails: "account/get_account_type?",
};
