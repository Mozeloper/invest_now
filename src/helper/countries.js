const countries = [
    {
    "name": "Afghanistan",
    "flag": "๐ฆ๐ซ",
    "code": "AF",
    "dial_code": "+93",
    "name_ar": "ุฃูุบุงูุณุชุงู"
    },
    {
    "name": "รland Islands",
    "flag": "๐ฆ๐ฝ",
    "code": "AX",
    "dial_code": "+358",
    "name_ar": "ุฌุฒุฑ ุฃููุงู"
    },
    {
    "name": "Albania",
    "flag": "๐ฆ๐ฑ",
    "code": "AL",
    "dial_code": "+355",
    "name_ar": "ุฃูุจุงููุง"
    },
    {
    "name": "Algeria",
    "flag": "๐ฉ๐ฟ",
    "code": "DZ",
    "dial_code": "+213",
    "name_ar": "ุงูุฌุฒุงุฆุฑ"
    },
    {
    "name": "American Samoa",
    "flag": "๐ฆ๐ธ",
    "code": "AS",
    "dial_code": "+1684",
    "name_ar": "ุณุงููุง ุงูุฃูุฑูููุฉ"
    },
    {
    "name": "Andorra",
    "flag": "๐ฆ๐ฉ",
    "code": "AD",
    "dial_code": "+376",
    "name_ar": "ุฃูุฏูุฑุง"
    },
    {
    "name": "Angola",
    "flag": "๐ฆ๐ด",
    "code": "AO",
    "dial_code": "+244",
    "name_ar": "ุฃูุฌููุง"
    },
    {
    "name": "Anguilla",
    "flag": "๐ฆ๐ฎ",
    "code": "AI",
    "dial_code": "+1264",
    "name_ar": "ุฃูุฌูููุง"
    },
    {
    "name": "Antarctica",
    "flag": "๐ฆ๐ถ",
    "code": "AQ",
    "dial_code": "+672",
    "name_ar": "ุงููุทุจ ุงูุฌููุจู"
    },
    {
    "name": "Antigua and Barbuda",
    "flag": "๐ฆ๐ฌ",
    "code": "AG",
    "dial_code": "+1268",
    "name_ar": "ุฃูุชูุฌูุง ูุจุฑุจูุฏุง"
    },
    {
    "name": "Argentina",
    "flag": "๐ฆ๐ท",
    "code": "AR",
    "dial_code": "+54",
    "name_ar": "ุงูุฃุฑุฌูุชูู"
    },
    {
    "name": "Armenia",
    "flag": "๐ฆ๐ฒ",
    "code": "AM",
    "dial_code": "+374",
    "name_ar": "ุฃุฑููููุง"
    },
    {
    "name": "Aruba",
    "flag": "๐ฆ๐ผ",
    "code": "AW",
    "dial_code": "+297",
    "name_ar": "ุขุฑูุจุง"
    },
    {
    "name": "Australia",
    "flag": "๐ฆ๐บ",
    "code": "AU",
    "dial_code": "+61",
    "name_ar": "ุฃุณุชุฑุงููุง"
    },
    {
    "name": "Austria",
    "flag": "๐ฆ๐น",
    "code": "AT",
    "dial_code": "+43",
    "name_ar": "ุงูููุณุง"
    },
    {
    "name": "Azerbaijan",
    "flag": "๐ฆ๐ฟ",
    "code": "AZ",
    "dial_code": "+994",
    "name_ar": "ุฃุฐุฑุจูุฌุงู"
    },
    {
    "name": "Bahamas",
    "flag": "๐ง๐ธ",
    "code": "BS",
    "dial_code": "+1242",
    "name_ar": "ุงูุจุงูุงูุง"
    },
    {
    "name": "Bahrain",
    "flag": "๐ง๐ญ",
    "code": "BH",
    "dial_code": "+973",
    "name_ar": "ุงูุจุญุฑูู"
    },
    {
    "name": "Bangladesh",
    "flag": "๐ง๐ฉ",
    "code": "BD",
    "dial_code": "+880",
    "name_ar": "ุจูุฌูุงุฏูุด"
    },
    {
    "name": "Barbados",
    "flag": "๐ง๐ง",
    "code": "BB",
    "dial_code": "+1246",
    "name_ar": "ุจุฑุจุงุฏูุณ"
    },
    {
    "name": "Belarus",
    "flag": "๐ง๐พ",
    "code": "BY",
    "dial_code": "+375",
    "name_ar": "ุฑูุณูุง ุงูุจูุถุงุก"
    },
    {
    "name": "Belgium",
    "flag": "๐ง๐ช",
    "code": "BE",
    "dial_code": "+32",
    "name_ar": "ุจูุฌููุง"
    },
    {
    "name": "Belize",
    "flag": "๐ง๐ฟ",
    "code": "BZ",
    "dial_code": "+501",
    "name_ar": "ุจููุฒ"
    },
    {
    "name": "Benin",
    "flag": "๐ง๐ฏ",
    "code": "BJ",
    "dial_code": "+229",
    "name_ar": "ุจููู"
    },
    {
    "name": "Bermuda",
    "flag": "๐ง๐ฒ",
    "code": "BM",
    "dial_code": "+1441",
    "name_ar": "ุจุฑููุฏุง"
    },
    {
    "name": "Bhutan",
    "flag": "๐ง๐น",
    "code": "BT",
    "dial_code": "+975",
    "name_ar": "ุจูุชุงู"
    },
    {
    "name": "Bolivia, Plurinational State of bolivia",
    "flag": "๐ง๐ด",
    "code": "BO",
    "dial_code": "+591",
    "name_ar": "ุจูููููุง"
    },
    {
    "name": "Bosnia and Herzegovina",
    "flag": "๐ง๐ฆ",
    "code": "BA",
    "dial_code": "+387",
    "name_ar": "ุงูุจูุณูุฉ ูุงููุฑุณู"
    },
    {
    "name": "Botswana",
    "flag": "๐ง๐ผ",
    "code": "BW",
    "dial_code": "+267",
    "name_ar": "ุจุชุณูุงูุง"
    },
    {
    "name": "Bouvet Island",
    "flag": "๐ง๐ป",
    "code": "BV",
    "dial_code": "+47",
    "name_ar": "ุฌุฒูุฑุฉ ุจูููู"
    },
    {
    "name": "Brazil",
    "flag": "๐ง๐ท",
    "code": "BR",
    "dial_code": "+55",
    "name_ar": "ุงูุจุฑุงุฒูู"
    },
    {
    "name": "British Indian Ocean Territory",
    "flag": "๐ฎ๐ด",
    "code": "IO",
    "dial_code": "+246",
    "name_ar": "ุงููุญูุท ุงูููุฏู ุงูุจุฑูุทุงูู"
    },
    {
    "name": "Brunei Darussalam",
    "flag": "๐ง๐ณ",
    "code": "BN",
    "dial_code": "+673",
    "name_ar": "ุจุฑููุงู"
    },
    {
    "name": "Bulgaria",
    "flag": "๐ง๐ฌ",
    "code": "BG",
    "dial_code": "+359",
    "name_ar": "ุจูุบุงุฑูุง"
    },
    {
    "name": "Burkina Faso",
    "flag": "๐ง๐ซ",
    "code": "BF",
    "dial_code": "+226",
    "name_ar": "ุจูุฑูููุง ูุงุณู"
    },
    {
    "name": "Burundi",
    "flag": "๐ง๐ฎ",
    "code": "BI",
    "dial_code": "+257",
    "name_ar": "ุจูุฑููุฏู"
    },
    {
    "name": "Cambodia",
    "flag": "๐ฐ๐ญ",
    "code": "KH",
    "dial_code": "+855",
    "name_ar": "ููุจูุฏูุง"
    },
    {
    "name": "Cameroon",
    "flag": "๐จ๐ฒ",
    "code": "CM",
    "dial_code": "+237",
    "name_ar": "ุงููุงููุฑูู"
    },
    {
    "name": "Canada",
    "flag": "๐จ๐ฆ",
    "code": "CA",
    "dial_code": "+1",
    "name_ar": "ููุฏุง"
    },
    {
    "name": "Cape Verde",
    "flag": "๐จ๐ป",
    "code": "CV",
    "dial_code": "+238",
    "name_ar": "ุงูุฑุฃุณ ุงูุฃุฎุถุฑ"
    },
    {
    "name": "Cayman Islands",
    "flag": "๐ฐ๐พ",
    "code": "KY",
    "dial_code": "+345",
    "name_ar": "ุฌุฒุฑ ุงููุงููู"
    },
    {
    "name": "Central African Republic",
    "flag": "๐จ๐ซ",
    "code": "CF",
    "dial_code": "+236",
    "name_ar": "ุฌูููุฑูุฉ ุงูุฑูููุง ุงููุณุทู"
    },
    {
    "name": "Chad",
    "flag": "๐น๐ฉ",
    "code": "TD",
    "dial_code": "+235",
    "name_ar": "ุชุดุงุฏ"
    },
    {
    "name": "Chile",
    "flag": "๐จ๐ฑ",
    "code": "CL",
    "dial_code": "+56",
    "name_ar": "ุดููู"
    },
    {
    "name": "China",
    "flag": "๐จ๐ณ",
    "code": "CN",
    "dial_code": "+86",
    "name_ar": "ุงูุตูู"
    },
    {
    "name": "Christmas Island",
    "flag": "๐จ๐ฝ",
    "code": "CX",
    "dial_code": "+61",
    "name_ar": "ุฌุฒูุฑุฉ ุงููุฑูุณูุงุณ"
    },
    {
    "name": "Cocos (Keeling) Islands",
    "flag": "๐จ๐จ",
    "code": "CC",
    "dial_code": "+61",
    "name_ar": "ุฌุฒุฑ ููููุณ"
    },
    {
    "name": "Colombia",
    "flag": "๐จ๐ด",
    "code": "CO",
    "dial_code": "+57",
    "name_ar": "ูููููุจูุง"
    },
    {
    "name": "Comoros",
    "flag": "๐ฐ๐ฒ",
    "code": "KM",
    "dial_code": "+269",
    "name_ar": "ุฌุฒุฑ ุงูููุฑ"
    },
    {
    "name": "Congo",
    "flag": "๐จ๐ฌ",
    "code": "CG",
    "dial_code": "+242",
    "name_ar": "ุงููููุบู - ุจุฑุงุฒุงููู"
    },
    {
    "name": "Congo, The Democratic Republic of the Congo",
    "flag": "๐จ๐ฉ",
    "code": "CD",
    "dial_code": "+243",
    "name_ar": "ุฌูููุฑูุฉ ุงููููุบู ุงูุฏูููุฑุงุทูุฉ"
    },
    {
    "name": "Cook Islands",
    "flag": "๐จ๐ฐ",
    "code": "CK",
    "dial_code": "+682",
    "name_ar": "ุฌุฒุฑ ููู"
    },
    {
    "name": "Costa Rica",
    "flag": "๐จ๐ท",
    "code": "CR",
    "dial_code": "+506",
    "name_ar": "ููุณุชุงุฑููุง"
    },
    {
    "name": "Cote d'Ivoire",
    "flag": "๐จ๐ฎ",
    "code": "CI",
    "dial_code": "+225",
    "name_ar": "ุณุงุญู ุงูุนุงุฌ"
    },
    {
    "name": "Croatia",
    "flag": "๐ญ๐ท",
    "code": "HR",
    "dial_code": "+385",
    "name_ar": "ูุฑูุงุชูุง"
    },
    {
    "name": "Cuba",
    "flag": "๐จ๐บ",
    "code": "CU",
    "dial_code": "+53",
    "name_ar": "ููุจุง"
    },
    {
    "name": "Cyprus",
    "flag": "๐จ๐พ",
    "code": "CY",
    "dial_code": "+357",
    "name_ar": "ูุจุฑุต"
    },
    {
    "name": "Czech Republic",
    "flag": "๐จ๐ฟ",
    "code": "CZ",
    "dial_code": "+420",
    "name_ar": "ุฌูููุฑูุฉ ุงูุชุดูู"
    },
    {
    "name": "Denmark",
    "flag": "๐ฉ๐ฐ",
    "code": "DK",
    "dial_code": "+45",
    "name_ar": "ุงูุฏุงููุฑู"
    },
    {
    "name": "Djibouti",
    "flag": "๐ฉ๐ฏ",
    "code": "DJ",
    "dial_code": "+253",
    "name_ar": "ุฌูุจูุชู"
    },
    {
    "name": "Dominica",
    "flag": "๐ฉ๐ฒ",
    "code": "DM",
    "dial_code": "+1767",
    "name_ar": "ุฏููููููุง"
    },
    {
    "name": "Dominican Republic",
    "flag": "๐ฉ๐ด",
    "code": "DO",
    "dial_code": "+1849",
    "name_ar": "ุฌูููุฑูุฉ ุงูุฏูููููู"
    },
    {
    "name": "Ecuador",
    "flag": "๐ช๐จ",
    "code": "EC",
    "dial_code": "+593",
    "name_ar": "ุงูุงููุงุฏูุฑ"
    },
    {
    "name": "Egypt",
    "flag": "๐ช๐ฌ",
    "code": "EG",
    "dial_code": "+20",
    "name_ar": "ูุตุฑ"
    },
    {
    "name": "El Salvador",
    "flag": "๐ธ๐ป",
    "code": "SV",
    "dial_code": "+503",
    "name_ar": "ุงูุณููุงุฏูุฑ"
    },
    {
    "name": "Equatorial Guinea",
    "flag": "๐ฌ๐ถ",
    "code": "GQ",
    "dial_code": "+240",
    "name_ar": "ุบูููุง ุงูุงุณุชูุงุฆูุฉ"
    },
    {
    "name": "Eritrea",
    "flag": "๐ช๐ท",
    "code": "ER",
    "dial_code": "+291",
    "name_ar": "ุงุฑูุชุฑูุง"
    },
    {
    "name": "Estonia",
    "flag": "๐ช๐ช",
    "code": "EE",
    "dial_code": "+372",
    "name_ar": "ุงุณุชูููุง"
    },
    {
    "name": "Ethiopia",
    "flag": "๐ช๐น",
    "code": "ET",
    "dial_code": "+251",
    "name_ar": "ุงุซููุจูุง"
    },
    {
    "name": "Falkland Islands (Malvinas)",
    "flag": "๐ซ๐ฐ",
    "code": "FK",
    "dial_code": "+500",
    "name_ar": "ุฌุฒุฑ ููููุงูุฏ"
    },
    {
    "name": "Faroe Islands",
    "flag": "๐ซ๐ด",
    "code": "FO",
    "dial_code": "+298",
    "name_ar": "ุฌุฒุฑ ูุงุฑู"
    },
    {
    "name": "Fiji",
    "flag": "๐ซ๐ฏ",
    "code": "FJ",
    "dial_code": "+679",
    "name_ar": "ููุฌู"
    },
    {
    "name": "Finland",
    "flag": "๐ซ๐ฎ",
    "code": "FI",
    "dial_code": "+358",
    "name_ar": "ููููุฏุง"
    },
    {
    "name": "France",
    "flag": "๐ซ๐ท",
    "code": "FR",
    "dial_code": "+33",
    "name_ar": "ูุฑูุณุง"
    },
    {
    "name": "French Guiana",
    "flag": "๐ฌ๐ซ",
    "code": "GF",
    "dial_code": "+594",
    "name_ar": "ุบููุงูุง"
    },
    {
    "name": "French Polynesia",
    "flag": "๐ต๐ซ",
    "code": "PF",
    "dial_code": "+689",
    "name_ar": "ุจูููููุฒูุง ุงููุฑูุณูุฉ"
    },
    {
    "name": "French Southern Territories",
    "flag": "๐น๐ซ",
    "code": "TF",
    "dial_code": "+262",
    "name_ar": "ุงูููุงุทุนุงุช ุงูุฌููุจูุฉ ุงููุฑูุณูุฉ"
    },
    {
    "name": "Gabon",
    "flag": "๐ฌ๐ฆ",
    "code": "GA",
    "dial_code": "+241",
    "name_ar": "ุงูุฌุงุจูู"
    },
    {
    "name": "Gambia",
    "flag": "๐ฌ๐ฒ",
    "code": "GM",
    "dial_code": "+220",
    "name_ar": "ุบุงูุจูุง"
    },
    {
    "name": "Georgia",
    "flag": "๐ฌ๐ช",
    "code": "GE",
    "dial_code": "+995",
    "name_ar": "ุฌูุฑุฌูุง"
    },
    {
    "name": "Germany",
    "flag": "๐ฉ๐ช",
    "code": "DE",
    "dial_code": "+49",
    "name_ar": "ุฃููุงููุง"
    },
    {
    "name": "Ghana",
    "flag": "๐ฌ๐ญ",
    "code": "GH",
    "dial_code": "+233",
    "name_ar": "ุบุงูุง"
    },
    {
    "name": "Gibraltar",
    "flag": "๐ฌ๐ฎ",
    "code": "GI",
    "dial_code": "+350",
    "name_ar": "ุฌุจู ุทุงุฑู"
    },
    {
    "name": "Greece",
    "flag": "๐ฌ๐ท",
    "code": "GR",
    "dial_code": "+30",
    "name_ar": "ุงููููุงู"
    },
    {
    "name": "Greenland",
    "flag": "๐ฌ๐ฑ",
    "code": "GL",
    "dial_code": "+299",
    "name_ar": "ุฌุฑูููุงูุฏ"
    },
    {
    "name": "Grenada",
    "flag": "๐ฌ๐ฉ",
    "code": "GD",
    "dial_code": "+1473",
    "name_ar": "ุฌุฑููุงุฏุง"
    },
    {
    "name": "Guadeloupe",
    "flag": "๐ฌ๐ต",
    "code": "GP",
    "dial_code": "+590",
    "name_ar": "ุฌูุงุฏููุจ"
    },
    {
    "name": "Guam",
    "flag": "๐ฌ๐บ",
    "code": "GU",
    "dial_code": "+1671",
    "name_ar": "ุฌูุงู"
    },
    {
    "name": "Guatemala",
    "flag": "๐ฌ๐น",
    "code": "GT",
    "dial_code": "+502",
    "name_ar": "ุฌูุงุชููุงูุง"
    },
    {
    "name": "Guernsey",
    "flag": "๐ฌ๐ฌ",
    "code": "GG",
    "dial_code": "+44",
    "name_ar": "ุบูุฑูุฒู"
    },
    {
    "name": "Guinea",
    "flag": "๐ฌ๐ณ",
    "code": "GN",
    "dial_code": "+224",
    "name_ar": "ุบูููุง"
    },
    {
    "name": "Guinea-Bissau",
    "flag": "๐ฌ๐ผ",
    "code": "GW",
    "dial_code": "+245",
    "name_ar": "ุบูููุง ุจูุณุงู"
    },
    {
    "name": "Guyana",
    "flag": "๐ฌ๐พ",
    "code": "GY",
    "dial_code": "+592",
    "name_ar": "ุบูุงูุง"
    },
    {
    "name": "Haiti",
    "flag": "๐ญ๐น",
    "code": "HT",
    "dial_code": "+509",
    "name_ar": "ูุงูุชู"
    },
    {
    "name": "Heard Island and Mcdonald Islands",
    "flag": "๐ญ๐ฒ",
    "code": "HM",
    "dial_code": "+672",
    "name_ar": "ุฌุฒูุฑุฉ ููุฑุฏ ููุงูุฏููุงูุฏ"
    },
    {
    "name": "Holy See (Vatican City State)",
    "flag": "๐ป๐ฆ",
    "code": "VA",
    "dial_code": "+379",
    "name_ar": "ุงููุงุชููุงู"
    },
    {
    "name": "Honduras",
    "flag": "๐ญ๐ณ",
    "code": "HN",
    "dial_code": "+504",
    "name_ar": "ููุฏูุฑุงุณ"
    },
    {
    "name": "Hong Kong",
    "flag": "๐ญ๐ฐ",
    "code": "HK",
    "dial_code": "+852",
    "name_ar": "ูููุฌ ูููุฌ ุงูุตูููุฉ"
    },
    {
    "name": "Hungary",
    "flag": "๐ญ๐บ",
    "code": "HU",
    "dial_code": "+36",
    "name_ar": "ุงููุฌุฑ"
    },
    {
    "name": "Iceland",
    "flag": "๐ฎ๐ธ",
    "code": "IS",
    "dial_code": "+354",
    "name_ar": "ุฃูุณููุฏุง"
    },
    {
    "name": "India",
    "flag": "๐ฎ๐ณ",
    "code": "IN",
    "dial_code": "+91",
    "name_ar": "ุงูููุฏ"
    },
    {
    "name": "Indonesia",
    "flag": "๐ฎ๐ฉ",
    "code": "ID",
    "dial_code": "+62",
    "name_ar": "ุงูุฏูููุณูุง"
    },
    {
    "name": "Iran, Islamic Republic of Persian Gulf",
    "flag": "๐ฎ๐ท",
    "code": "IR",
    "dial_code": "+98",
    "name_ar": "ุงูุฑุงู"
    },
    {
    "name": "Iraq",
    "flag": "๐ฎ๐ถ",
    "code": "IQ",
    "dial_code": "+964",
    "name_ar": "ุงูุนุฑุงู"
    },
    {
    "name": "Ireland",
    "flag": "๐ฎ๐ช",
    "code": "IE",
    "dial_code": "+353",
    "name_ar": "ุฃูุฑููุฏุง"
    },
    {
    "name": "Isle of Man",
    "flag": "๐ฎ๐ฒ",
    "code": "IM",
    "dial_code": "+44",
    "name_ar": "ุฌุฒูุฑุฉ ูุงู"
    },
    {
    "name": "Israel",
    "flag": "๐ฎ๐ฑ",
    "code": "IL",
    "dial_code": "+972",
    "name_ar": "ุงุณุฑุงุฆูู"
    },
    {
    "name": "Italy",
    "flag": "๐ฎ๐น",
    "code": "IT",
    "dial_code": "+39",
    "name_ar": "ุงูุทุงููุง"
    },
    {
    "name": "Jamaica",
    "flag": "๐ฏ๐ฒ",
    "code": "JM",
    "dial_code": "+1876",
    "name_ar": "ุฌุงูุงููุง"
    },
    {
    "name": "Japan",
    "flag": "๐ฏ๐ต",
    "code": "JP",
    "dial_code": "+81",
    "name_ar": "ุงููุงุจุงู"
    },
    {
    "name": "Jersey",
    "flag": "๐ฏ๐ช",
    "code": "JE",
    "dial_code": "+44",
    "name_ar": "ุฌูุฑุณู"
    },
    {
    "name": "Jordan",
    "flag": "๐ฏ๐ด",
    "code": "JO",
    "dial_code": "+962",
    "name_ar": "ุงูุฃุฑุฏู"
    },
    {
    "name": "Kazakhstan",
    "flag": "๐ฐ๐ฟ",
    "code": "KZ",
    "dial_code": "+7",
    "name_ar": "ูุงุฒุงุฎุณุชุงู"
    },
    {
    "name": "Kenya",
    "flag": "๐ฐ๐ช",
    "code": "KE",
    "dial_code": "+254",
    "name_ar": "ููููุง"
    },
    {
    "name": "Kiribati",
    "flag": "๐ฐ๐ฎ",
    "code": "KI",
    "dial_code": "+686",
    "name_ar": "ููุฑูุจุงุชู"
    },
    {
    "name": "Korea, Democratic People's Republic of Korea",
    "flag": "๐ฐ๐ต",
    "code": "KP",
    "dial_code": "+850",
    "name_ar": "ููุฑูุง ุงูุดูุงููุฉ"
    },
    {
    "name": "Korea, Republic of South Korea",
    "flag": "๐ฐ๐ท",
    "code": "KR",
    "dial_code": "+82",
    "name_ar": "ููุฑูุง ุงูุฌููุจูุฉ"
    },
    {
    "name": "Kosovo",
    "flag": "๐ฝ๐ฐ",
    "code": "XK",
    "dial_code": "+383",
    "name_ar": "ููุณููู"
    },
    {
    "name": "Kuwait",
    "flag": "๐ฐ๐ผ",
    "code": "KW",
    "dial_code": "+965",
    "name_ar": "ุงููููุช"
    },
    {
    "name": "Kyrgyzstan",
    "flag": "๐ฐ๐ฌ",
    "code": "KG",
    "dial_code": "+996",
    "name_ar": "ูุฑุบูุฒุณุชุงู"
    },
    {
    "name": "Laos",
    "flag": "๐ฑ๐ฆ",
    "code": "LA",
    "dial_code": "+856",
    "name_ar": "ูุงูุณ"
    },
    {
    "name": "Latvia",
    "flag": "๐ฑ๐ป",
    "code": "LV",
    "dial_code": "+371",
    "name_ar": "ูุงุชููุง"
    },
    {
    "name": "Lebanon",
    "flag": "๐ฑ๐ง",
    "code": "LB",
    "dial_code": "+961",
    "name_ar": "ูุจูุงู"
    },
    {
    "name": "Lesotho",
    "flag": "๐ฑ๐ธ",
    "code": "LS",
    "dial_code": "+266",
    "name_ar": "ููุณูุชู"
    },
    {
    "name": "Liberia",
    "flag": "๐ฑ๐ท",
    "code": "LR",
    "dial_code": "+231",
    "name_ar": "ููุจูุฑูุง"
    },
    {
    "name": "Libyan Arab Jamahiriya",
    "flag": "๐ฑ๐พ",
    "code": "LY",
    "dial_code": "+218",
    "name_ar": "ููุจูุง"
    },
    {
    "name": "Liechtenstein",
    "flag": "๐ฑ๐ฎ",
    "code": "LI",
    "dial_code": "+423",
    "name_ar": "ููุฎุชูุดุชุงูู"
    },
    {
    "name": "Lithuania",
    "flag": "๐ฑ๐น",
    "code": "LT",
    "dial_code": "+370",
    "name_ar": "ููุชูุงููุง"
    },
    {
    "name": "Luxembourg",
    "flag": "๐ฑ๐บ",
    "code": "LU",
    "dial_code": "+352",
    "name_ar": "ูููุณูุจูุฑุฌ"
    },
    {
    "name": "Macao",
    "flag": "๐ฒ๐ด",
    "code": "MO",
    "dial_code": "+853",
    "name_ar": "ูุงูุงู ุงูุตูููุฉ"
    },
    {
    "name": "Macedonia",
    "flag": "๐ฒ๐ฐ",
    "code": "MK",
    "dial_code": "+389",
    "name_ar": "ููุฏูููุง"
    },
    {
    "name": "Madagascar",
    "flag": "๐ฒ๐ฌ",
    "code": "MG",
    "dial_code": "+261",
    "name_ar": "ูุฏุบุดูุฑ"
    },
    {
    "name": "Malawi",
    "flag": "๐ฒ๐ผ",
    "code": "MW",
    "dial_code": "+265",
    "name_ar": "ููุงูู"
    },
    {
    "name": "Malaysia",
    "flag": "๐ฒ๐พ",
    "code": "MY",
    "dial_code": "+60",
    "name_ar": "ูุงููุฒูุง"
    },
    {
    "name": "Maldives",
    "flag": "๐ฒ๐ป",
    "code": "MV",
    "dial_code": "+960",
    "name_ar": "ุฌุฒุฑ ุงูููุฏูู"
    },
    {
    "name": "Mali",
    "flag": "๐ฒ๐ฑ",
    "code": "ML",
    "dial_code": "+223",
    "name_ar": "ูุงูู"
    },
    {
    "name": "Malta",
    "flag": "๐ฒ๐น",
    "code": "MT",
    "dial_code": "+356",
    "name_ar": "ูุงูุทุง"
    },
    {
    "name": "Marshall Islands",
    "flag": "๐ฒ๐ญ",
    "code": "MH",
    "dial_code": "+692",
    "name_ar": "ุฌุฒุฑ ุงููุงุฑุดุงู"
    },
    {
    "name": "Martinique",
    "flag": "๐ฒ๐ถ",
    "code": "MQ",
    "dial_code": "+596",
    "name_ar": "ูุงุฑุชูููู"
    },
    {
    "name": "Mauritania",
    "flag": "๐ฒ๐ท",
    "code": "MR",
    "dial_code": "+222",
    "name_ar": "ููุฑูุชุงููุง"
    },
    {
    "name": "Mauritius",
    "flag": "๐ฒ๐บ",
    "code": "MU",
    "dial_code": "+230",
    "name_ar": "ููุฑูุดููุณ"
    },
    {
    "name": "Mayotte",
    "flag": "๐พ๐น",
    "code": "YT",
    "dial_code": "+262",
    "name_ar": "ูุงููุช"
    },
    {
    "name": "Mexico",
    "flag": "๐ฒ๐ฝ",
    "code": "MX",
    "dial_code": "+52",
    "name_ar": "ุงูููุณูู"
    },
    {
    "name": "Micronesia, Federated States of Micronesia",
    "flag": "๐ซ๐ฒ",
    "code": "FM",
    "dial_code": "+691",
    "name_ar": "ูููุฑูููุฒูุง"
    },
    {
    "name": "Moldova",
    "flag": "๐ฒ๐ฉ",
    "code": "MD",
    "dial_code": "+373",
    "name_ar": "ูููุฏุงููุง"
    },
    {
    "name": "Monaco",
    "flag": "๐ฒ๐จ",
    "code": "MC",
    "dial_code": "+377",
    "name_ar": "ูููุงูู"
    },
    {
    "name": "Mongolia",
    "flag": "๐ฒ๐ณ",
    "code": "MN",
    "dial_code": "+976",
    "name_ar": "ููุบูููุง"
    },
    {
    "name": "Montenegro",
    "flag": "๐ฒ๐ช",
    "code": "ME",
    "dial_code": "+382",
    "name_ar": "ุงูุฌุจู ุงูุฃุณูุฏ"
    },
    {
    "name": "Montserrat",
    "flag": "๐ฒ๐ธ",
    "code": "MS",
    "dial_code": "+1664",
    "name_ar": "ูููุชุณุฑุงุช"
    },
    {
    "name": "Morocco",
    "flag": "๐ฒ๐ฆ",
    "code": "MA",
    "dial_code": "+212",
    "name_ar": "ุงููุบุฑุจ"
    },
    {
    "name": "Mozambique",
    "flag": "๐ฒ๐ฟ",
    "code": "MZ",
    "dial_code": "+258",
    "name_ar": "ููุฒูุจูู"
    },
    {
    "name": "Myanmar",
    "flag": "๐ฒ๐ฒ",
    "code": "MM",
    "dial_code": "+95",
    "name_ar": "ููุงููุงุฑ"
    },
    {
    "name": "Namibia",
    "flag": "๐ณ๐ฆ",
    "code": "NA",
    "dial_code": "+264",
    "name_ar": "ูุงููุจูุง"
    },
    {
    "name": "Nauru",
    "flag": "๐ณ๐ท",
    "code": "NR",
    "dial_code": "+674",
    "name_ar": "ููุฑู"
    },
    {
    "name": "Nepal",
    "flag": "๐ณ๐ต",
    "code": "NP",
    "dial_code": "+977",
    "name_ar": "ููุจุงู"
    },
    {
    "name": "Netherlands",
    "flag": "๐ณ๐ฑ",
    "code": "NL",
    "dial_code": "+31",
    "name_ar": "ููููุฏุง"
    },
    // {
    // "name": "Netherlands Antilles",
    // "flag": "",
    // "code": "AN",
    // "dial_code": "+599",
    // "name_ar": "Netherlands Antilles"
    // },
    {
    "name": "New Caledonia",
    "flag": "๐ณ๐จ",
    "code": "NC",
    "dial_code": "+687",
    "name_ar": "ูุงููุฏูููุง ุงูุฌุฏูุฏุฉ"
    },
    {
    "name": "New Zealand",
    "flag": "๐ณ๐ฟ",
    "code": "NZ",
    "dial_code": "+64",
    "name_ar": "ูููุฒููุงูุฏุง"
    },
    {
    "name": "Nicaragua",
    "flag": "๐ณ๐ฎ",
    "code": "NI",
    "dial_code": "+505",
    "name_ar": "ูููุงุฑุงุฌูุง"
    },
    {
    "name": "Niger",
    "flag": "๐ณ๐ช",
    "code": "NE",
    "dial_code": "+227",
    "name_ar": "ุงูููุฌุฑ"
    },
    {
    "name": "Nigeria",
    "flag": "๐ณ๐ฌ",
    "code": "NG",
    "dial_code": "+234",
    "name_ar": "ููุฌูุฑูุง"
    },
    {
    "name": "Niue",
    "flag": "๐ณ๐บ",
    "code": "NU",
    "dial_code": "+683",
    "name_ar": "ูููู"
    },
    {
    "name": "Norfolk Island",
    "flag": "๐ณ๐ซ",
    "code": "NF",
    "dial_code": "+672",
    "name_ar": "ุฌุฒูุฑุฉ ููุฑููู"
    },
    {
    "name": "Northern Mariana Islands",
    "flag": "๐ฒ๐ต",
    "code": "MP",
    "dial_code": "+1670",
    "name_ar": "ุฌุฒุฑ ูุงุฑูุงูุง ุงูุดูุงููุฉ"
    },
    {
    "name": "Norway",
    "flag": "๐ณ๐ด",
    "code": "NO",
    "dial_code": "+47",
    "name_ar": "ุงููุฑููุฌ"
    },
    {
    "name": "Oman",
    "flag": "๐ด๐ฒ",
    "code": "OM",
    "dial_code": "+968",
    "name_ar": "ุนูุงู"
    },
    {
    "name": "Pakistan",
    "flag": "๐ต๐ฐ",
    "code": "PK",
    "dial_code": "+92",
    "name_ar": "ุจุงูุณุชุงู"
    },
    {
    "name": "Palau",
    "flag": "๐ต๐ผ",
    "code": "PW",
    "dial_code": "+680",
    "name_ar": "ุจุงูุงู"
    },
    {
    "name": "Palestinian Territory, Occupied",
    "flag": "๐ต๐ธ",
    "code": "PS",
    "dial_code": "+970",
    "name_ar": "ููุณุทูู"
    },
    {
    "name": "Panama",
    "flag": "๐ต๐ฆ",
    "code": "PA",
    "dial_code": "+507",
    "name_ar": "ุจููุง"
    },
    {
    "name": "Papua New Guinea",
    "flag": "๐ต๐ฌ",
    "code": "PG",
    "dial_code": "+675",
    "name_ar": "ุจุงุจูุง ุบูููุง ุงูุฌุฏูุฏุฉ"
    },
    {
    "name": "Paraguay",
    "flag": "๐ต๐พ",
    "code": "PY",
    "dial_code": "+595",
    "name_ar": "ุจุงุฑุงุฌูุงู"
    },
    {
    "name": "Peru",
    "flag": "๐ต๐ช",
    "code": "PE",
    "dial_code": "+51",
    "name_ar": "ุจูุฑู"
    },
    {
    "name": "Philippines",
    "flag": "๐ต๐ญ",
    "code": "PH",
    "dial_code": "+63",
    "name_ar": "ุงููููุจูู"
    },
    {
    "name": "Pitcairn",
    "flag": "๐ต๐ณ",
    "code": "PN",
    "dial_code": "+64",
    "name_ar": "ุจุชูุงูุฑู"
    },
    {
    "name": "Poland",
    "flag": "๐ต๐ฑ",
    "code": "PL",
    "dial_code": "+48",
    "name_ar": "ุจูููุฏุง"
    },
    {
    "name": "Portugal",
    "flag": "๐ต๐น",
    "code": "PT",
    "dial_code": "+351",
    "name_ar": "ุงูุจุฑุชุบุงู"
    },
    {
    "name": "Puerto Rico",
    "flag": "๐ต๐ท",
    "code": "PR",
    "dial_code": "+1939",
    "name_ar": "ุจูุฑุชูุฑููู"
    },
    {
    "name": "Qatar",
    "flag": "๐ถ๐ฆ",
    "code": "QA",
    "dial_code": "+974",
    "name_ar": "ูุทุฑ"
    },
    {
    "name": "Romania",
    "flag": "๐ท๐ด",
    "code": "RO",
    "dial_code": "+40",
    "name_ar": "ุฑููุงููุง"
    },
    {
    "name": "Russia",
    "flag": "๐ท๐บ",
    "code": "RU",
    "dial_code": "+7",
    "name_ar": "ุฑูุณูุง"
    },
    {
    "name": "Rwanda",
    "flag": "๐ท๐ผ",
    "code": "RW",
    "dial_code": "+250",
    "name_ar": "ุฑูุงูุฏุง"
    },
    {
    "name": "Reunion",
    "flag": "๐ท๐ช",
    "code": "RE",
    "dial_code": "+262",
    "name_ar": "ุฑูููููู"
    },
    {
    "name": "Saint Barthelemy",
    "flag": "๐ง๐ฑ",
    "code": "BL",
    "dial_code": "+590",
    "name_ar": "ุณุงู ุจุงุฑุชูููู"
    },
    {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "flag": "๐ธ๐ญ",
    "code": "SH",
    "dial_code": "+290",
    "name_ar": "ุณุงูุช ููููุง"
    },
    {
    "name": "Saint Kitts and Nevis",
    "flag": "๐ฐ๐ณ",
    "code": "KN",
    "dial_code": "+1869",
    "name_ar": "ุณุงูุช ููุชุณ ูููููุณ"
    },
    {
    "name": "Saint Lucia",
    "flag": "๐ฑ๐จ",
    "code": "LC",
    "dial_code": "+1758",
    "name_ar": "ุณุงูุช ููุณูุง"
    },
    {
    "name": "Saint Martin",
    "flag": "๐ฒ๐ซ",
    "code": "MF",
    "dial_code": "+590",
    "name_ar": "ุณุงูุช ูุงุฑุชูู"
    },
    {
    "name": "Saint Pierre and Miquelon",
    "flag": "๐ต๐ฒ",
    "code": "PM",
    "dial_code": "+508",
    "name_ar": "ุณุงูุช ุจููุฑ ูููููููู"
    },
    {
    "name": "Saint Vincent and the Grenadines",
    "flag": "๐ป๐จ",
    "code": "VC",
    "dial_code": "+1784",
    "name_ar": "ุณุงูุช ููุณูุช ูุบุฑูุงุฏูู"
    },
    {
    "name": "Samoa",
    "flag": "๐ผ๐ธ",
    "code": "WS",
    "dial_code": "+685",
    "name_ar": "ุณุงููุง"
    },
    {
    "name": "San Marino",
    "flag": "๐ธ๐ฒ",
    "code": "SM",
    "dial_code": "+378",
    "name_ar": "ุณุงู ูุงุฑููู"
    },
    {
    "name": "Sao Tome and Principe",
    "flag": "๐ธ๐น",
    "code": "ST",
    "dial_code": "+239",
    "name_ar": "ุณุงู ุชููู ูุจุฑููุณูุจู"
    },
    {
    "name": "Saudi Arabia",
    "flag": "๐ธ๐ฆ",
    "code": "SA",
    "dial_code": "+966",
    "name_ar": "ุงูููููุฉ ุงูุนุฑุจูุฉ ุงูุณุนูุฏูุฉ"
    },
    {
    "name": "Senegal",
    "flag": "๐ธ๐ณ",
    "code": "SN",
    "dial_code": "+221",
    "name_ar": "ุงูุณูุบุงู"
    },
    {
    "name": "Serbia",
    "flag": "๐ท๐ธ",
    "code": "RS",
    "dial_code": "+381",
    "name_ar": "ุตุฑุจูุง"
    },
    {
    "name": "Seychelles",
    "flag": "๐ธ๐จ",
    "code": "SC",
    "dial_code": "+248",
    "name_ar": "ุณูุดู"
    },
    {
    "name": "Sierra Leone",
    "flag": "๐ธ๐ฑ",
    "code": "SL",
    "dial_code": "+232",
    "name_ar": "ุณูุฑุงูููู"
    },
    {
    "name": "Singapore",
    "flag": "๐ธ๐ฌ",
    "code": "SG",
    "dial_code": "+65",
    "name_ar": "ุณูุบุงููุฑุฉ"
    },
    {
    "name": "Slovakia",
    "flag": "๐ธ๐ฐ",
    "code": "SK",
    "dial_code": "+421",
    "name_ar": "ุณูููุงููุง"
    },
    {
    "name": "Slovenia",
    "flag": "๐ธ๐ฎ",
    "code": "SI",
    "dial_code": "+386",
    "name_ar": "ุณููููููุง"
    },
    {
    "name": "Solomon Islands",
    "flag": "๐ธ๐ง",
    "code": "SB",
    "dial_code": "+677",
    "name_ar": "ุฌุฒุฑ ุณูููุงู"
    },
    {
    "name": "Somalia",
    "flag": "๐ธ๐ด",
    "code": "SO",
    "dial_code": "+252",
    "name_ar": "ุงูุตููุงู"
    },
    {
    "name": "South Africa",
    "flag": "๐ฟ๐ฆ",
    "code": "ZA",
    "dial_code": "+27",
    "name_ar": "ุฌูููุฑูุฉ ุฌููุจ ุงูุฑูููุง"
    },
    {
    "name": "South Sudan",
    "flag": "๐ธ๐ธ",
    "code": "SS",
    "dial_code": "+211",
    "name_ar": "ุฌููุจ ุงูุณูุฏุงู"
    },
    {
    "name": "South Georgia and the South Sandwich Islands",
    "flag": "๐ฌ๐ธ",
    "code": "GS",
    "dial_code": "+500",
    "name_ar": "ุฌูุฑุฌูุง ุงูุฌููุจูุฉ ูุฌุฒุฑ ุณุงูุฏููุชุด ุงูุฌููุจูุฉ"
    },
    {
    "name": "Spain",
    "flag": "๐ช๐ธ",
    "code": "ES",
    "dial_code": "+34",
    "name_ar": "ุฃุณุจุงููุง"
    },
    {
    "name": "Sri Lanka",
    "flag": "๐ฑ๐ฐ",
    "code": "LK",
    "dial_code": "+94",
    "name_ar": "ุณุฑููุงููุง"
    },
    {
    "name": "Sudan",
    "flag": "๐ธ๐ฉ",
    "code": "SD",
    "dial_code": "+249",
    "name_ar": "ุงูุณูุฏุงู"
    },
    {
    "name": "Suriname",
    "flag": "๐ธ๐ท",
    "code": "SR",
    "dial_code": "+597",
    "name_ar": "ุณูุฑููุงู"
    },
    {
    "name": "Svalbard and Jan Mayen",
    "flag": "๐ธ๐ฏ",
    "code": "SJ",
    "dial_code": "+47",
    "name_ar": "ุณูุงูุจุงุฑุฏ ูุฌุงู ูุงูุงู"
    },
    {
    "name": "Swaziland",
    "flag": "๐ธ๐ฟ",
    "code": "SZ",
    "dial_code": "+268",
    "name_ar": "ุณูุงุฒููุงูุฏ"
    },
    {
    "name": "Sweden",
    "flag": "๐ธ๐ช",
    "code": "SE",
    "dial_code": "+46",
    "name_ar": "ุงูุณููุฏ"
    },
    {
    "name": "Switzerland",
    "flag": "๐จ๐ญ",
    "code": "CH",
    "dial_code": "+41",
    "name_ar": "ุณููุณุฑุง"
    },
    {
    "name": "Syrian Arab Republic",
    "flag": "๐ธ๐พ",
    "code": "SY",
    "dial_code": "+963",
    "name_ar": "ุณูุฑูุง"
    },
    {
    "name": "Taiwan",
    "flag": "๐น๐ผ",
    "code": "TW",
    "dial_code": "+886",
    "name_ar": "ุชุงููุงู"
    },
    {
    "name": "Tajikistan",
    "flag": "๐น๐ฏ",
    "code": "TJ",
    "dial_code": "+992",
    "name_ar": "ุทุงุฌูุณุชุงู"
    },
    {
    "name": "Tanzania, United Republic of Tanzania",
    "flag": "๐น๐ฟ",
    "code": "TZ",
    "dial_code": "+255",
    "name_ar": "ุชุงูุฒุงููุง"
    },
    {
    "name": "Thailand",
    "flag": "๐น๐ญ",
    "code": "TH",
    "dial_code": "+66",
    "name_ar": "ุชุงูููุฏ"
    },
    {
    "name": "Timor-Leste",
    "flag": "๐น๐ฑ",
    "code": "TL",
    "dial_code": "+670",
    "name_ar": "ุชูููุฑ ุงูุดุฑููุฉ"
    },
    {
    "name": "Togo",
    "flag": "๐น๐ฌ",
    "code": "TG",
    "dial_code": "+228",
    "name_ar": "ุชูุฌู"
    },
    {
    "name": "Tokelau",
    "flag": "๐น๐ฐ",
    "code": "TK",
    "dial_code": "+690",
    "name_ar": "ุชููููู"
    },
    {
    "name": "Tonga",
    "flag": "๐น๐ด",
    "code": "TO",
    "dial_code": "+676",
    "name_ar": "ุชููุฌุง"
    },
    {
    "name": "Trinidad and Tobago",
    "flag": "๐น๐น",
    "code": "TT",
    "dial_code": "+1868",
    "name_ar": "ุชุฑูููุฏุงุฏ ูุชูุจุงุบู"
    },
    {
    "name": "Tunisia",
    "flag": "๐น๐ณ",
    "code": "TN",
    "dial_code": "+216",
    "name_ar": "ุชููุณ"
    },
    {
    "name": "Turkey",
    "flag": "๐น๐ท",
    "code": "TR",
    "dial_code": "+90",
    "name_ar": "ุชุฑููุง"
    },
    {
    "name": "Turkmenistan",
    "flag": "๐น๐ฒ",
    "code": "TM",
    "dial_code": "+993",
    "name_ar": "ุชุฑููุงูุณุชุงู"
    },
    {
    "name": "Turks and Caicos Islands",
    "flag": "๐น๐จ",
    "code": "TC",
    "dial_code": "+1649",
    "name_ar": "ุฌุฒุฑ ุงูุชุฑู ูุฌุงูููุณ"
    },
    {
    "name": "Tuvalu",
    "flag": "๐น๐ป",
    "code": "TV",
    "dial_code": "+688",
    "name_ar": "ุชููุงูู"
    },
    {
    "name": "Uganda",
    "flag": "๐บ๐ฌ",
    "code": "UG",
    "dial_code": "+256",
    "name_ar": "ุฃูุบูุฏุง"
    },
    {
    "name": "Ukraine",
    "flag": "๐บ๐ฆ",
    "code": "UA",
    "dial_code": "+380",
    "name_ar": "ุฃููุฑุงููุง"
    },
    {
    "name": "United Arab Emirates",
    "flag": "๐ฆ๐ช",
    "code": "AE",
    "dial_code": "+971",
    "name_ar": "ุงูุงูุงุฑุงุช ุงูุนุฑุจูุฉ ุงููุชุญุฏุฉ"
    },
    {
    "name": "United Kingdom",
    "flag": "๐ฌ๐ง",
    "code": "GB",
    "dial_code": "+44",
    "name_ar": "ุงูููููุฉ ุงููุชุญุฏุฉ"
    },
    {
    "name": "United States",
    "flag": "๐บ๐ธ",
    "code": "US",
    "dial_code": "+1",
    "name_ar": "ุงูููุงูุงุช ุงููุชุญุฏุฉ ุงูุฃูุฑูููุฉ"
    },
    {
    "name": "Uruguay",
    "flag": "๐บ๐พ",
    "code": "UY",
    "dial_code": "+598",
    "name_ar": "ุฃูุฑุฌูุงู"
    },
    {
    "name": "Uzbekistan",
    "flag": "๐บ๐ฟ",
    "code": "UZ",
    "dial_code": "+998",
    "name_ar": "ุฃูุฒุจูุณุชุงู"
    },
    {
    "name": "Vanuatu",
    "flag": "๐ป๐บ",
    "code": "VU",
    "dial_code": "+678",
    "name_ar": "ูุงููุงุชู"
    },
    {
    "name": "Venezuela, Bolivarian Republic of Venezuela",
    "flag": "๐ป๐ช",
    "code": "VE",
    "dial_code": "+58",
    "name_ar": "ููุฒูููุง"
    },
    {
    "name": "Vietnam",
    "flag": "๐ป๐ณ",
    "code": "VN",
    "dial_code": "+84",
    "name_ar": "ููุชูุงู"
    },
    {
    "name": "Virgin Islands, British",
    "flag": "๐ป๐ฌ",
    "code": "VG",
    "dial_code": "+1284",
    "name_ar": "ุฌุฒุฑ ูุฑุฌูู ุงูุจุฑูุทุงููุฉ"
    },
    {
    "name": "Virgin Islands, U.S.",
    "flag": "๐ป๐ฎ",
    "code": "VI",
    "dial_code": "+1340",
    "name_ar": "ุฌุฒุฑ ูุฑุฌูู ุงูุฃูุฑูููุฉ"
    },
    {
    "name": "Wallis and Futuna",
    "flag": "๐ผ๐ซ",
    "code": "WF",
    "dial_code": "+681",
    "name_ar": "ุฌุฒุฑ ูุงูุณ ูููุชููุง"
    },
    {
    "name": "Yemen",
    "flag": "๐พ๐ช",
    "code": "YE",
    "dial_code": "+967",
    "name_ar": "ุงูููู"
    },
    {
    "name": "Zambia",
    "flag": "๐ฟ๐ฒ",
    "code": "ZM",
    "dial_code": "+260",
    "name_ar": "ุฒุงูุจูุง"
    },
    {
    "name": "Zimbabwe",
    "flag": "๐ฟ๐ผ",
    "code": "ZW",
    "dial_code": "+263",
    "name_ar": "ุฒููุจุงุจูู"
    }
    ]
    export default countries;