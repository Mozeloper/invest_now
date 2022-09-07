export const appUrls = {
  loginURL: "api/v2/auth/login",
  customerDetails: "api/v2/customers/get",
  forgetPasswordURL: "api/v2/customers/generate-verification-code?",
  forgetPasswordOtpURL: "api/v2/customers/validate-verification-code?",
  forgetPasswordChangePasswordURL: "auth/forgot-password?",
  customerExistURL: "api/v2/onboarding/check-if-bvn-exists",
  smileIdentityURL: "v1/id_verification",
  genderURL: "api/v2/onboarding/get-gender-types",
  relationShipURL: "api/v2/onboarding/get-next-of-kin-types",
  createAccountURL: "api/v2/customers/create-account",
  ratingExperience: "customer/customer-rating/rate",
  portfolioItemDetail: "api/v2/customers/get-portfolio-item-detail?",
  paymentFrequency: "payment/frequencies",
  countryURL: "api/v2/onboarding/countries",
  stateURL: "api/v2/onboarding/states",
  createCustomerURL: "api/v2/onboarding/create-customer",
  resendOtpCodeURL: "api/v2/onboarding/generate-verification-code",
  validateOTPURL: "api/v2/onboarding/validate-verification-code",
  passwordCreationURL: "api/v2/onboarding/save-password",
  dashboardSummaryURL: "investnow/dashboard-summary",
  completionSummaryURL: "api/v2/customers/get-profile-completion-status",
  slidingRateURL: "product/mutual-fund-rates",
  uploadProfilePicURL: "api/v2/customers/upload-profile-pic",
  activeReferralProductURL: "investnow/get-all-active-referral-by-product",
  referralCodeLinkURL: "investnow/referral-client-code",
  uploadUtilityBillURL: "api/v2/customers/upload-utility-bill",
  uploadPassport: "api/v2/customers/upload-passport",
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
  resetPasswordURL: "api/v2/customers/change-password",
  getAllProducts: "account/get-businesses",
  getProductDetails: "account/get_account_type?",
  bankListURL: "api/v2/onboarding/get-all-banks",
  verifyBankAccountURL: "api/v2/onboarding/resolve-account-number?",
  getPortfolioTransactionURL: "investnow/paystack-deposits",
  initializePaymentURL: "payment-tokenize/initialize",
  recurrentPaymentURL: "payment-tokenize/setup-recurrent",
  verifyPaymentURL: "payment-tokenize/verify",
  existingCashAccountUrl: "api/v2/customers/get-cash-accounts",
  existingCashAccountDetailsUrl: "api/v2/customers/get-cash-account-detail",
  getPortfolioPerfomanceURL: "api/v2/customers/get-portfolio-detail",
  getPortfolioDetailsURL: "api/v2/customers/get-portfolio-item-detail",
  saveWithdrawalRequestURL: "investnow/save-withdrawal-request",
  getPortfolioStatisticsURL: "api/v2/customers/get-statistics",
  getPortfolioSummaryURL: "api/v2/customers/get-performance-summary",
  getPortfolioStatementAccountURL: "investnow/get-portfolio?type=mutual-funds",
  getCashStatmentAccountURL: "investnow/get-cash-accounts",
  requestPortfolioStatementURL: "api/v2/customers/download-portfolio-statement",
  requestCashStatementURL: "api/v2/customers/download-cash-account-statement",
  transactionStatistics: "api/v2/customers/get-transaction-statistics",
  depositHistoryURL: "investnow/paystack-deposits",
  withdrawalHistoryPendingURL: "investnow/get-pending-withdrawal-requests",
  withdrawalHistoryCompletedURL: "investnow/get-withdrawal-requests",
  getActiveRecurringPaymentURL: "investnow/get-active-recurrent",
  disableRecurringPaymentURL: "investnow/disable-recurrent",
  getSegmentURL: "json/stock-broking/get-equity-list",
  saveUtraceURL: "utrace/save",
};
