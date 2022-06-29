const countries = [
    {
    "name": "Afghanistan",
    "flag": "🇦🇫",
    "code": "AF",
    "dial_code": "+93",
    "name_ar": "أفغانستان"
    },
    {
    "name": "Åland Islands",
    "flag": "🇦🇽",
    "code": "AX",
    "dial_code": "+358",
    "name_ar": "جزر أولان"
    },
    {
    "name": "Albania",
    "flag": "🇦🇱",
    "code": "AL",
    "dial_code": "+355",
    "name_ar": "ألبانيا"
    },
    {
    "name": "Algeria",
    "flag": "🇩🇿",
    "code": "DZ",
    "dial_code": "+213",
    "name_ar": "الجزائر"
    },
    {
    "name": "American Samoa",
    "flag": "🇦🇸",
    "code": "AS",
    "dial_code": "+1684",
    "name_ar": "ساموا الأمريكية"
    },
    {
    "name": "Andorra",
    "flag": "🇦🇩",
    "code": "AD",
    "dial_code": "+376",
    "name_ar": "أندورا"
    },
    {
    "name": "Angola",
    "flag": "🇦🇴",
    "code": "AO",
    "dial_code": "+244",
    "name_ar": "أنجولا"
    },
    {
    "name": "Anguilla",
    "flag": "🇦🇮",
    "code": "AI",
    "dial_code": "+1264",
    "name_ar": "أنجويلا"
    },
    {
    "name": "Antarctica",
    "flag": "🇦🇶",
    "code": "AQ",
    "dial_code": "+672",
    "name_ar": "القطب الجنوبي"
    },
    {
    "name": "Antigua and Barbuda",
    "flag": "🇦🇬",
    "code": "AG",
    "dial_code": "+1268",
    "name_ar": "أنتيجوا وبربودا"
    },
    {
    "name": "Argentina",
    "flag": "🇦🇷",
    "code": "AR",
    "dial_code": "+54",
    "name_ar": "الأرجنتين"
    },
    {
    "name": "Armenia",
    "flag": "🇦🇲",
    "code": "AM",
    "dial_code": "+374",
    "name_ar": "أرمينيا"
    },
    {
    "name": "Aruba",
    "flag": "🇦🇼",
    "code": "AW",
    "dial_code": "+297",
    "name_ar": "آروبا"
    },
    {
    "name": "Australia",
    "flag": "🇦🇺",
    "code": "AU",
    "dial_code": "+61",
    "name_ar": "أستراليا"
    },
    {
    "name": "Austria",
    "flag": "🇦🇹",
    "code": "AT",
    "dial_code": "+43",
    "name_ar": "النمسا"
    },
    {
    "name": "Azerbaijan",
    "flag": "🇦🇿",
    "code": "AZ",
    "dial_code": "+994",
    "name_ar": "أذربيجان"
    },
    {
    "name": "Bahamas",
    "flag": "🇧🇸",
    "code": "BS",
    "dial_code": "+1242",
    "name_ar": "الباهاما"
    },
    {
    "name": "Bahrain",
    "flag": "🇧🇭",
    "code": "BH",
    "dial_code": "+973",
    "name_ar": "البحرين"
    },
    {
    "name": "Bangladesh",
    "flag": "🇧🇩",
    "code": "BD",
    "dial_code": "+880",
    "name_ar": "بنجلاديش"
    },
    {
    "name": "Barbados",
    "flag": "🇧🇧",
    "code": "BB",
    "dial_code": "+1246",
    "name_ar": "بربادوس"
    },
    {
    "name": "Belarus",
    "flag": "🇧🇾",
    "code": "BY",
    "dial_code": "+375",
    "name_ar": "روسيا البيضاء"
    },
    {
    "name": "Belgium",
    "flag": "🇧🇪",
    "code": "BE",
    "dial_code": "+32",
    "name_ar": "بلجيكا"
    },
    {
    "name": "Belize",
    "flag": "🇧🇿",
    "code": "BZ",
    "dial_code": "+501",
    "name_ar": "بليز"
    },
    {
    "name": "Benin",
    "flag": "🇧🇯",
    "code": "BJ",
    "dial_code": "+229",
    "name_ar": "بنين"
    },
    {
    "name": "Bermuda",
    "flag": "🇧🇲",
    "code": "BM",
    "dial_code": "+1441",
    "name_ar": "برمودا"
    },
    {
    "name": "Bhutan",
    "flag": "🇧🇹",
    "code": "BT",
    "dial_code": "+975",
    "name_ar": "بوتان"
    },
    {
    "name": "Bolivia, Plurinational State of bolivia",
    "flag": "🇧🇴",
    "code": "BO",
    "dial_code": "+591",
    "name_ar": "بوليفيا"
    },
    {
    "name": "Bosnia and Herzegovina",
    "flag": "🇧🇦",
    "code": "BA",
    "dial_code": "+387",
    "name_ar": "البوسنة والهرسك"
    },
    {
    "name": "Botswana",
    "flag": "🇧🇼",
    "code": "BW",
    "dial_code": "+267",
    "name_ar": "بتسوانا"
    },
    {
    "name": "Bouvet Island",
    "flag": "🇧🇻",
    "code": "BV",
    "dial_code": "+47",
    "name_ar": "جزيرة بوفيه"
    },
    {
    "name": "Brazil",
    "flag": "🇧🇷",
    "code": "BR",
    "dial_code": "+55",
    "name_ar": "البرازيل"
    },
    {
    "name": "British Indian Ocean Territory",
    "flag": "🇮🇴",
    "code": "IO",
    "dial_code": "+246",
    "name_ar": "المحيط الهندي البريطاني"
    },
    {
    "name": "Brunei Darussalam",
    "flag": "🇧🇳",
    "code": "BN",
    "dial_code": "+673",
    "name_ar": "بروناي"
    },
    {
    "name": "Bulgaria",
    "flag": "🇧🇬",
    "code": "BG",
    "dial_code": "+359",
    "name_ar": "بلغاريا"
    },
    {
    "name": "Burkina Faso",
    "flag": "🇧🇫",
    "code": "BF",
    "dial_code": "+226",
    "name_ar": "بوركينا فاسو"
    },
    {
    "name": "Burundi",
    "flag": "🇧🇮",
    "code": "BI",
    "dial_code": "+257",
    "name_ar": "بوروندي"
    },
    {
    "name": "Cambodia",
    "flag": "🇰🇭",
    "code": "KH",
    "dial_code": "+855",
    "name_ar": "كمبوديا"
    },
    {
    "name": "Cameroon",
    "flag": "🇨🇲",
    "code": "CM",
    "dial_code": "+237",
    "name_ar": "الكاميرون"
    },
    {
    "name": "Canada",
    "flag": "🇨🇦",
    "code": "CA",
    "dial_code": "+1",
    "name_ar": "كندا"
    },
    {
    "name": "Cape Verde",
    "flag": "🇨🇻",
    "code": "CV",
    "dial_code": "+238",
    "name_ar": "الرأس الأخضر"
    },
    {
    "name": "Cayman Islands",
    "flag": "🇰🇾",
    "code": "KY",
    "dial_code": "+345",
    "name_ar": "جزر الكايمن"
    },
    {
    "name": "Central African Republic",
    "flag": "🇨🇫",
    "code": "CF",
    "dial_code": "+236",
    "name_ar": "جمهورية افريقيا الوسطى"
    },
    {
    "name": "Chad",
    "flag": "🇹🇩",
    "code": "TD",
    "dial_code": "+235",
    "name_ar": "تشاد"
    },
    {
    "name": "Chile",
    "flag": "🇨🇱",
    "code": "CL",
    "dial_code": "+56",
    "name_ar": "شيلي"
    },
    {
    "name": "China",
    "flag": "🇨🇳",
    "code": "CN",
    "dial_code": "+86",
    "name_ar": "الصين"
    },
    {
    "name": "Christmas Island",
    "flag": "🇨🇽",
    "code": "CX",
    "dial_code": "+61",
    "name_ar": "جزيرة الكريسماس"
    },
    {
    "name": "Cocos (Keeling) Islands",
    "flag": "🇨🇨",
    "code": "CC",
    "dial_code": "+61",
    "name_ar": "جزر كوكوس"
    },
    {
    "name": "Colombia",
    "flag": "🇨🇴",
    "code": "CO",
    "dial_code": "+57",
    "name_ar": "كولومبيا"
    },
    {
    "name": "Comoros",
    "flag": "🇰🇲",
    "code": "KM",
    "dial_code": "+269",
    "name_ar": "جزر القمر"
    },
    {
    "name": "Congo",
    "flag": "🇨🇬",
    "code": "CG",
    "dial_code": "+242",
    "name_ar": "الكونغو - برازافيل"
    },
    {
    "name": "Congo, The Democratic Republic of the Congo",
    "flag": "🇨🇩",
    "code": "CD",
    "dial_code": "+243",
    "name_ar": "جمهورية الكونغو الديمقراطية"
    },
    {
    "name": "Cook Islands",
    "flag": "🇨🇰",
    "code": "CK",
    "dial_code": "+682",
    "name_ar": "جزر كوك"
    },
    {
    "name": "Costa Rica",
    "flag": "🇨🇷",
    "code": "CR",
    "dial_code": "+506",
    "name_ar": "كوستاريكا"
    },
    {
    "name": "Cote d'Ivoire",
    "flag": "🇨🇮",
    "code": "CI",
    "dial_code": "+225",
    "name_ar": "ساحل العاج"
    },
    {
    "name": "Croatia",
    "flag": "🇭🇷",
    "code": "HR",
    "dial_code": "+385",
    "name_ar": "كرواتيا"
    },
    {
    "name": "Cuba",
    "flag": "🇨🇺",
    "code": "CU",
    "dial_code": "+53",
    "name_ar": "كوبا"
    },
    {
    "name": "Cyprus",
    "flag": "🇨🇾",
    "code": "CY",
    "dial_code": "+357",
    "name_ar": "قبرص"
    },
    {
    "name": "Czech Republic",
    "flag": "🇨🇿",
    "code": "CZ",
    "dial_code": "+420",
    "name_ar": "جمهورية التشيك"
    },
    {
    "name": "Denmark",
    "flag": "🇩🇰",
    "code": "DK",
    "dial_code": "+45",
    "name_ar": "الدانمرك"
    },
    {
    "name": "Djibouti",
    "flag": "🇩🇯",
    "code": "DJ",
    "dial_code": "+253",
    "name_ar": "جيبوتي"
    },
    {
    "name": "Dominica",
    "flag": "🇩🇲",
    "code": "DM",
    "dial_code": "+1767",
    "name_ar": "دومينيكا"
    },
    {
    "name": "Dominican Republic",
    "flag": "🇩🇴",
    "code": "DO",
    "dial_code": "+1849",
    "name_ar": "جمهورية الدومينيك"
    },
    {
    "name": "Ecuador",
    "flag": "🇪🇨",
    "code": "EC",
    "dial_code": "+593",
    "name_ar": "الاكوادور"
    },
    {
    "name": "Egypt",
    "flag": "🇪🇬",
    "code": "EG",
    "dial_code": "+20",
    "name_ar": "مصر"
    },
    {
    "name": "El Salvador",
    "flag": "🇸🇻",
    "code": "SV",
    "dial_code": "+503",
    "name_ar": "السلفادور"
    },
    {
    "name": "Equatorial Guinea",
    "flag": "🇬🇶",
    "code": "GQ",
    "dial_code": "+240",
    "name_ar": "غينيا الاستوائية"
    },
    {
    "name": "Eritrea",
    "flag": "🇪🇷",
    "code": "ER",
    "dial_code": "+291",
    "name_ar": "اريتريا"
    },
    {
    "name": "Estonia",
    "flag": "🇪🇪",
    "code": "EE",
    "dial_code": "+372",
    "name_ar": "استونيا"
    },
    {
    "name": "Ethiopia",
    "flag": "🇪🇹",
    "code": "ET",
    "dial_code": "+251",
    "name_ar": "اثيوبيا"
    },
    {
    "name": "Falkland Islands (Malvinas)",
    "flag": "🇫🇰",
    "code": "FK",
    "dial_code": "+500",
    "name_ar": "جزر فوكلاند"
    },
    {
    "name": "Faroe Islands",
    "flag": "🇫🇴",
    "code": "FO",
    "dial_code": "+298",
    "name_ar": "جزر فارو"
    },
    {
    "name": "Fiji",
    "flag": "🇫🇯",
    "code": "FJ",
    "dial_code": "+679",
    "name_ar": "فيجي"
    },
    {
    "name": "Finland",
    "flag": "🇫🇮",
    "code": "FI",
    "dial_code": "+358",
    "name_ar": "فنلندا"
    },
    {
    "name": "France",
    "flag": "🇫🇷",
    "code": "FR",
    "dial_code": "+33",
    "name_ar": "فرنسا"
    },
    {
    "name": "French Guiana",
    "flag": "🇬🇫",
    "code": "GF",
    "dial_code": "+594",
    "name_ar": "غويانا"
    },
    {
    "name": "French Polynesia",
    "flag": "🇵🇫",
    "code": "PF",
    "dial_code": "+689",
    "name_ar": "بولينيزيا الفرنسية"
    },
    {
    "name": "French Southern Territories",
    "flag": "🇹🇫",
    "code": "TF",
    "dial_code": "+262",
    "name_ar": "المقاطعات الجنوبية الفرنسية"
    },
    {
    "name": "Gabon",
    "flag": "🇬🇦",
    "code": "GA",
    "dial_code": "+241",
    "name_ar": "الجابون"
    },
    {
    "name": "Gambia",
    "flag": "🇬🇲",
    "code": "GM",
    "dial_code": "+220",
    "name_ar": "غامبيا"
    },
    {
    "name": "Georgia",
    "flag": "🇬🇪",
    "code": "GE",
    "dial_code": "+995",
    "name_ar": "جورجيا"
    },
    {
    "name": "Germany",
    "flag": "🇩🇪",
    "code": "DE",
    "dial_code": "+49",
    "name_ar": "ألمانيا"
    },
    {
    "name": "Ghana",
    "flag": "🇬🇭",
    "code": "GH",
    "dial_code": "+233",
    "name_ar": "غانا"
    },
    {
    "name": "Gibraltar",
    "flag": "🇬🇮",
    "code": "GI",
    "dial_code": "+350",
    "name_ar": "جبل طارق"
    },
    {
    "name": "Greece",
    "flag": "🇬🇷",
    "code": "GR",
    "dial_code": "+30",
    "name_ar": "اليونان"
    },
    {
    "name": "Greenland",
    "flag": "🇬🇱",
    "code": "GL",
    "dial_code": "+299",
    "name_ar": "جرينلاند"
    },
    {
    "name": "Grenada",
    "flag": "🇬🇩",
    "code": "GD",
    "dial_code": "+1473",
    "name_ar": "جرينادا"
    },
    {
    "name": "Guadeloupe",
    "flag": "🇬🇵",
    "code": "GP",
    "dial_code": "+590",
    "name_ar": "جوادلوب"
    },
    {
    "name": "Guam",
    "flag": "🇬🇺",
    "code": "GU",
    "dial_code": "+1671",
    "name_ar": "جوام"
    },
    {
    "name": "Guatemala",
    "flag": "🇬🇹",
    "code": "GT",
    "dial_code": "+502",
    "name_ar": "جواتيمالا"
    },
    {
    "name": "Guernsey",
    "flag": "🇬🇬",
    "code": "GG",
    "dial_code": "+44",
    "name_ar": "غيرنزي"
    },
    {
    "name": "Guinea",
    "flag": "🇬🇳",
    "code": "GN",
    "dial_code": "+224",
    "name_ar": "غينيا"
    },
    {
    "name": "Guinea-Bissau",
    "flag": "🇬🇼",
    "code": "GW",
    "dial_code": "+245",
    "name_ar": "غينيا بيساو"
    },
    {
    "name": "Guyana",
    "flag": "🇬🇾",
    "code": "GY",
    "dial_code": "+592",
    "name_ar": "غيانا"
    },
    {
    "name": "Haiti",
    "flag": "🇭🇹",
    "code": "HT",
    "dial_code": "+509",
    "name_ar": "هايتي"
    },
    {
    "name": "Heard Island and Mcdonald Islands",
    "flag": "🇭🇲",
    "code": "HM",
    "dial_code": "+672",
    "name_ar": "جزيرة هيرد وماكدونالد"
    },
    {
    "name": "Holy See (Vatican City State)",
    "flag": "🇻🇦",
    "code": "VA",
    "dial_code": "+379",
    "name_ar": "الفاتيكان"
    },
    {
    "name": "Honduras",
    "flag": "🇭🇳",
    "code": "HN",
    "dial_code": "+504",
    "name_ar": "هندوراس"
    },
    {
    "name": "Hong Kong",
    "flag": "🇭🇰",
    "code": "HK",
    "dial_code": "+852",
    "name_ar": "هونج كونج الصينية"
    },
    {
    "name": "Hungary",
    "flag": "🇭🇺",
    "code": "HU",
    "dial_code": "+36",
    "name_ar": "المجر"
    },
    {
    "name": "Iceland",
    "flag": "🇮🇸",
    "code": "IS",
    "dial_code": "+354",
    "name_ar": "أيسلندا"
    },
    {
    "name": "India",
    "flag": "🇮🇳",
    "code": "IN",
    "dial_code": "+91",
    "name_ar": "الهند"
    },
    {
    "name": "Indonesia",
    "flag": "🇮🇩",
    "code": "ID",
    "dial_code": "+62",
    "name_ar": "اندونيسيا"
    },
    {
    "name": "Iran, Islamic Republic of Persian Gulf",
    "flag": "🇮🇷",
    "code": "IR",
    "dial_code": "+98",
    "name_ar": "ايران"
    },
    {
    "name": "Iraq",
    "flag": "🇮🇶",
    "code": "IQ",
    "dial_code": "+964",
    "name_ar": "العراق"
    },
    {
    "name": "Ireland",
    "flag": "🇮🇪",
    "code": "IE",
    "dial_code": "+353",
    "name_ar": "أيرلندا"
    },
    {
    "name": "Isle of Man",
    "flag": "🇮🇲",
    "code": "IM",
    "dial_code": "+44",
    "name_ar": "جزيرة مان"
    },
    {
    "name": "Israel",
    "flag": "🇮🇱",
    "code": "IL",
    "dial_code": "+972",
    "name_ar": "اسرائيل"
    },
    {
    "name": "Italy",
    "flag": "🇮🇹",
    "code": "IT",
    "dial_code": "+39",
    "name_ar": "ايطاليا"
    },
    {
    "name": "Jamaica",
    "flag": "🇯🇲",
    "code": "JM",
    "dial_code": "+1876",
    "name_ar": "جامايكا"
    },
    {
    "name": "Japan",
    "flag": "🇯🇵",
    "code": "JP",
    "dial_code": "+81",
    "name_ar": "اليابان"
    },
    {
    "name": "Jersey",
    "flag": "🇯🇪",
    "code": "JE",
    "dial_code": "+44",
    "name_ar": "جيرسي"
    },
    {
    "name": "Jordan",
    "flag": "🇯🇴",
    "code": "JO",
    "dial_code": "+962",
    "name_ar": "الأردن"
    },
    {
    "name": "Kazakhstan",
    "flag": "🇰🇿",
    "code": "KZ",
    "dial_code": "+7",
    "name_ar": "كازاخستان"
    },
    {
    "name": "Kenya",
    "flag": "🇰🇪",
    "code": "KE",
    "dial_code": "+254",
    "name_ar": "كينيا"
    },
    {
    "name": "Kiribati",
    "flag": "🇰🇮",
    "code": "KI",
    "dial_code": "+686",
    "name_ar": "كيريباتي"
    },
    {
    "name": "Korea, Democratic People's Republic of Korea",
    "flag": "🇰🇵",
    "code": "KP",
    "dial_code": "+850",
    "name_ar": "كوريا الشمالية"
    },
    {
    "name": "Korea, Republic of South Korea",
    "flag": "🇰🇷",
    "code": "KR",
    "dial_code": "+82",
    "name_ar": "كوريا الجنوبية"
    },
    {
    "name": "Kosovo",
    "flag": "🇽🇰",
    "code": "XK",
    "dial_code": "+383",
    "name_ar": "كوسوفو"
    },
    {
    "name": "Kuwait",
    "flag": "🇰🇼",
    "code": "KW",
    "dial_code": "+965",
    "name_ar": "الكويت"
    },
    {
    "name": "Kyrgyzstan",
    "flag": "🇰🇬",
    "code": "KG",
    "dial_code": "+996",
    "name_ar": "قرغيزستان"
    },
    {
    "name": "Laos",
    "flag": "🇱🇦",
    "code": "LA",
    "dial_code": "+856",
    "name_ar": "لاوس"
    },
    {
    "name": "Latvia",
    "flag": "🇱🇻",
    "code": "LV",
    "dial_code": "+371",
    "name_ar": "لاتفيا"
    },
    {
    "name": "Lebanon",
    "flag": "🇱🇧",
    "code": "LB",
    "dial_code": "+961",
    "name_ar": "لبنان"
    },
    {
    "name": "Lesotho",
    "flag": "🇱🇸",
    "code": "LS",
    "dial_code": "+266",
    "name_ar": "ليسوتو"
    },
    {
    "name": "Liberia",
    "flag": "🇱🇷",
    "code": "LR",
    "dial_code": "+231",
    "name_ar": "ليبيريا"
    },
    {
    "name": "Libyan Arab Jamahiriya",
    "flag": "🇱🇾",
    "code": "LY",
    "dial_code": "+218",
    "name_ar": "ليبيا"
    },
    {
    "name": "Liechtenstein",
    "flag": "🇱🇮",
    "code": "LI",
    "dial_code": "+423",
    "name_ar": "ليختنشتاين"
    },
    {
    "name": "Lithuania",
    "flag": "🇱🇹",
    "code": "LT",
    "dial_code": "+370",
    "name_ar": "ليتوانيا"
    },
    {
    "name": "Luxembourg",
    "flag": "🇱🇺",
    "code": "LU",
    "dial_code": "+352",
    "name_ar": "لوكسمبورج"
    },
    {
    "name": "Macao",
    "flag": "🇲🇴",
    "code": "MO",
    "dial_code": "+853",
    "name_ar": "ماكاو الصينية"
    },
    {
    "name": "Macedonia",
    "flag": "🇲🇰",
    "code": "MK",
    "dial_code": "+389",
    "name_ar": "مقدونيا"
    },
    {
    "name": "Madagascar",
    "flag": "🇲🇬",
    "code": "MG",
    "dial_code": "+261",
    "name_ar": "مدغشقر"
    },
    {
    "name": "Malawi",
    "flag": "🇲🇼",
    "code": "MW",
    "dial_code": "+265",
    "name_ar": "ملاوي"
    },
    {
    "name": "Malaysia",
    "flag": "🇲🇾",
    "code": "MY",
    "dial_code": "+60",
    "name_ar": "ماليزيا"
    },
    {
    "name": "Maldives",
    "flag": "🇲🇻",
    "code": "MV",
    "dial_code": "+960",
    "name_ar": "جزر الملديف"
    },
    {
    "name": "Mali",
    "flag": "🇲🇱",
    "code": "ML",
    "dial_code": "+223",
    "name_ar": "مالي"
    },
    {
    "name": "Malta",
    "flag": "🇲🇹",
    "code": "MT",
    "dial_code": "+356",
    "name_ar": "مالطا"
    },
    {
    "name": "Marshall Islands",
    "flag": "🇲🇭",
    "code": "MH",
    "dial_code": "+692",
    "name_ar": "جزر المارشال"
    },
    {
    "name": "Martinique",
    "flag": "🇲🇶",
    "code": "MQ",
    "dial_code": "+596",
    "name_ar": "مارتينيك"
    },
    {
    "name": "Mauritania",
    "flag": "🇲🇷",
    "code": "MR",
    "dial_code": "+222",
    "name_ar": "موريتانيا"
    },
    {
    "name": "Mauritius",
    "flag": "🇲🇺",
    "code": "MU",
    "dial_code": "+230",
    "name_ar": "موريشيوس"
    },
    {
    "name": "Mayotte",
    "flag": "🇾🇹",
    "code": "YT",
    "dial_code": "+262",
    "name_ar": "مايوت"
    },
    {
    "name": "Mexico",
    "flag": "🇲🇽",
    "code": "MX",
    "dial_code": "+52",
    "name_ar": "المكسيك"
    },
    {
    "name": "Micronesia, Federated States of Micronesia",
    "flag": "🇫🇲",
    "code": "FM",
    "dial_code": "+691",
    "name_ar": "ميكرونيزيا"
    },
    {
    "name": "Moldova",
    "flag": "🇲🇩",
    "code": "MD",
    "dial_code": "+373",
    "name_ar": "مولدافيا"
    },
    {
    "name": "Monaco",
    "flag": "🇲🇨",
    "code": "MC",
    "dial_code": "+377",
    "name_ar": "موناكو"
    },
    {
    "name": "Mongolia",
    "flag": "🇲🇳",
    "code": "MN",
    "dial_code": "+976",
    "name_ar": "منغوليا"
    },
    {
    "name": "Montenegro",
    "flag": "🇲🇪",
    "code": "ME",
    "dial_code": "+382",
    "name_ar": "الجبل الأسود"
    },
    {
    "name": "Montserrat",
    "flag": "🇲🇸",
    "code": "MS",
    "dial_code": "+1664",
    "name_ar": "مونتسرات"
    },
    {
    "name": "Morocco",
    "flag": "🇲🇦",
    "code": "MA",
    "dial_code": "+212",
    "name_ar": "المغرب"
    },
    {
    "name": "Mozambique",
    "flag": "🇲🇿",
    "code": "MZ",
    "dial_code": "+258",
    "name_ar": "موزمبيق"
    },
    {
    "name": "Myanmar",
    "flag": "🇲🇲",
    "code": "MM",
    "dial_code": "+95",
    "name_ar": "ميانمار"
    },
    {
    "name": "Namibia",
    "flag": "🇳🇦",
    "code": "NA",
    "dial_code": "+264",
    "name_ar": "ناميبيا"
    },
    {
    "name": "Nauru",
    "flag": "🇳🇷",
    "code": "NR",
    "dial_code": "+674",
    "name_ar": "نورو"
    },
    {
    "name": "Nepal",
    "flag": "🇳🇵",
    "code": "NP",
    "dial_code": "+977",
    "name_ar": "نيبال"
    },
    {
    "name": "Netherlands",
    "flag": "🇳🇱",
    "code": "NL",
    "dial_code": "+31",
    "name_ar": "هولندا"
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
    "flag": "🇳🇨",
    "code": "NC",
    "dial_code": "+687",
    "name_ar": "كاليدونيا الجديدة"
    },
    {
    "name": "New Zealand",
    "flag": "🇳🇿",
    "code": "NZ",
    "dial_code": "+64",
    "name_ar": "نيوزيلاندا"
    },
    {
    "name": "Nicaragua",
    "flag": "🇳🇮",
    "code": "NI",
    "dial_code": "+505",
    "name_ar": "نيكاراجوا"
    },
    {
    "name": "Niger",
    "flag": "🇳🇪",
    "code": "NE",
    "dial_code": "+227",
    "name_ar": "النيجر"
    },
    {
    "name": "Nigeria",
    "flag": "🇳🇬",
    "code": "NG",
    "dial_code": "+234",
    "name_ar": "نيجيريا"
    },
    {
    "name": "Niue",
    "flag": "🇳🇺",
    "code": "NU",
    "dial_code": "+683",
    "name_ar": "نيوي"
    },
    {
    "name": "Norfolk Island",
    "flag": "🇳🇫",
    "code": "NF",
    "dial_code": "+672",
    "name_ar": "جزيرة نورفوك"
    },
    {
    "name": "Northern Mariana Islands",
    "flag": "🇲🇵",
    "code": "MP",
    "dial_code": "+1670",
    "name_ar": "جزر ماريانا الشمالية"
    },
    {
    "name": "Norway",
    "flag": "🇳🇴",
    "code": "NO",
    "dial_code": "+47",
    "name_ar": "النرويج"
    },
    {
    "name": "Oman",
    "flag": "🇴🇲",
    "code": "OM",
    "dial_code": "+968",
    "name_ar": "عمان"
    },
    {
    "name": "Pakistan",
    "flag": "🇵🇰",
    "code": "PK",
    "dial_code": "+92",
    "name_ar": "باكستان"
    },
    {
    "name": "Palau",
    "flag": "🇵🇼",
    "code": "PW",
    "dial_code": "+680",
    "name_ar": "بالاو"
    },
    {
    "name": "Palestinian Territory, Occupied",
    "flag": "🇵🇸",
    "code": "PS",
    "dial_code": "+970",
    "name_ar": "فلسطين"
    },
    {
    "name": "Panama",
    "flag": "🇵🇦",
    "code": "PA",
    "dial_code": "+507",
    "name_ar": "بنما"
    },
    {
    "name": "Papua New Guinea",
    "flag": "🇵🇬",
    "code": "PG",
    "dial_code": "+675",
    "name_ar": "بابوا غينيا الجديدة"
    },
    {
    "name": "Paraguay",
    "flag": "🇵🇾",
    "code": "PY",
    "dial_code": "+595",
    "name_ar": "باراجواي"
    },
    {
    "name": "Peru",
    "flag": "🇵🇪",
    "code": "PE",
    "dial_code": "+51",
    "name_ar": "بيرو"
    },
    {
    "name": "Philippines",
    "flag": "🇵🇭",
    "code": "PH",
    "dial_code": "+63",
    "name_ar": "الفيلبين"
    },
    {
    "name": "Pitcairn",
    "flag": "🇵🇳",
    "code": "PN",
    "dial_code": "+64",
    "name_ar": "بتكايرن"
    },
    {
    "name": "Poland",
    "flag": "🇵🇱",
    "code": "PL",
    "dial_code": "+48",
    "name_ar": "بولندا"
    },
    {
    "name": "Portugal",
    "flag": "🇵🇹",
    "code": "PT",
    "dial_code": "+351",
    "name_ar": "البرتغال"
    },
    {
    "name": "Puerto Rico",
    "flag": "🇵🇷",
    "code": "PR",
    "dial_code": "+1939",
    "name_ar": "بورتوريكو"
    },
    {
    "name": "Qatar",
    "flag": "🇶🇦",
    "code": "QA",
    "dial_code": "+974",
    "name_ar": "قطر"
    },
    {
    "name": "Romania",
    "flag": "🇷🇴",
    "code": "RO",
    "dial_code": "+40",
    "name_ar": "رومانيا"
    },
    {
    "name": "Russia",
    "flag": "🇷🇺",
    "code": "RU",
    "dial_code": "+7",
    "name_ar": "روسيا"
    },
    {
    "name": "Rwanda",
    "flag": "🇷🇼",
    "code": "RW",
    "dial_code": "+250",
    "name_ar": "رواندا"
    },
    {
    "name": "Reunion",
    "flag": "🇷🇪",
    "code": "RE",
    "dial_code": "+262",
    "name_ar": "روينيون"
    },
    {
    "name": "Saint Barthelemy",
    "flag": "🇧🇱",
    "code": "BL",
    "dial_code": "+590",
    "name_ar": "سان بارتيلمي"
    },
    {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "flag": "🇸🇭",
    "code": "SH",
    "dial_code": "+290",
    "name_ar": "سانت هيلنا"
    },
    {
    "name": "Saint Kitts and Nevis",
    "flag": "🇰🇳",
    "code": "KN",
    "dial_code": "+1869",
    "name_ar": "سانت كيتس ونيفيس"
    },
    {
    "name": "Saint Lucia",
    "flag": "🇱🇨",
    "code": "LC",
    "dial_code": "+1758",
    "name_ar": "سانت لوسيا"
    },
    {
    "name": "Saint Martin",
    "flag": "🇲🇫",
    "code": "MF",
    "dial_code": "+590",
    "name_ar": "سانت مارتين"
    },
    {
    "name": "Saint Pierre and Miquelon",
    "flag": "🇵🇲",
    "code": "PM",
    "dial_code": "+508",
    "name_ar": "سانت بيير وميكولون"
    },
    {
    "name": "Saint Vincent and the Grenadines",
    "flag": "🇻🇨",
    "code": "VC",
    "dial_code": "+1784",
    "name_ar": "سانت فنسنت وغرنادين"
    },
    {
    "name": "Samoa",
    "flag": "🇼🇸",
    "code": "WS",
    "dial_code": "+685",
    "name_ar": "ساموا"
    },
    {
    "name": "San Marino",
    "flag": "🇸🇲",
    "code": "SM",
    "dial_code": "+378",
    "name_ar": "سان مارينو"
    },
    {
    "name": "Sao Tome and Principe",
    "flag": "🇸🇹",
    "code": "ST",
    "dial_code": "+239",
    "name_ar": "ساو تومي وبرينسيبي"
    },
    {
    "name": "Saudi Arabia",
    "flag": "🇸🇦",
    "code": "SA",
    "dial_code": "+966",
    "name_ar": "المملكة العربية السعودية"
    },
    {
    "name": "Senegal",
    "flag": "🇸🇳",
    "code": "SN",
    "dial_code": "+221",
    "name_ar": "السنغال"
    },
    {
    "name": "Serbia",
    "flag": "🇷🇸",
    "code": "RS",
    "dial_code": "+381",
    "name_ar": "صربيا"
    },
    {
    "name": "Seychelles",
    "flag": "🇸🇨",
    "code": "SC",
    "dial_code": "+248",
    "name_ar": "سيشل"
    },
    {
    "name": "Sierra Leone",
    "flag": "🇸🇱",
    "code": "SL",
    "dial_code": "+232",
    "name_ar": "سيراليون"
    },
    {
    "name": "Singapore",
    "flag": "🇸🇬",
    "code": "SG",
    "dial_code": "+65",
    "name_ar": "سنغافورة"
    },
    {
    "name": "Slovakia",
    "flag": "🇸🇰",
    "code": "SK",
    "dial_code": "+421",
    "name_ar": "سلوفاكيا"
    },
    {
    "name": "Slovenia",
    "flag": "🇸🇮",
    "code": "SI",
    "dial_code": "+386",
    "name_ar": "سلوفينيا"
    },
    {
    "name": "Solomon Islands",
    "flag": "🇸🇧",
    "code": "SB",
    "dial_code": "+677",
    "name_ar": "جزر سليمان"
    },
    {
    "name": "Somalia",
    "flag": "🇸🇴",
    "code": "SO",
    "dial_code": "+252",
    "name_ar": "الصومال"
    },
    {
    "name": "South Africa",
    "flag": "🇿🇦",
    "code": "ZA",
    "dial_code": "+27",
    "name_ar": "جمهورية جنوب افريقيا"
    },
    {
    "name": "South Sudan",
    "flag": "🇸🇸",
    "code": "SS",
    "dial_code": "+211",
    "name_ar": "جنوب السودان"
    },
    {
    "name": "South Georgia and the South Sandwich Islands",
    "flag": "🇬🇸",
    "code": "GS",
    "dial_code": "+500",
    "name_ar": "جورجيا الجنوبية وجزر ساندويتش الجنوبية"
    },
    {
    "name": "Spain",
    "flag": "🇪🇸",
    "code": "ES",
    "dial_code": "+34",
    "name_ar": "أسبانيا"
    },
    {
    "name": "Sri Lanka",
    "flag": "🇱🇰",
    "code": "LK",
    "dial_code": "+94",
    "name_ar": "سريلانكا"
    },
    {
    "name": "Sudan",
    "flag": "🇸🇩",
    "code": "SD",
    "dial_code": "+249",
    "name_ar": "السودان"
    },
    {
    "name": "Suriname",
    "flag": "🇸🇷",
    "code": "SR",
    "dial_code": "+597",
    "name_ar": "سورينام"
    },
    {
    "name": "Svalbard and Jan Mayen",
    "flag": "🇸🇯",
    "code": "SJ",
    "dial_code": "+47",
    "name_ar": "سفالبارد وجان مايان"
    },
    {
    "name": "Swaziland",
    "flag": "🇸🇿",
    "code": "SZ",
    "dial_code": "+268",
    "name_ar": "سوازيلاند"
    },
    {
    "name": "Sweden",
    "flag": "🇸🇪",
    "code": "SE",
    "dial_code": "+46",
    "name_ar": "السويد"
    },
    {
    "name": "Switzerland",
    "flag": "🇨🇭",
    "code": "CH",
    "dial_code": "+41",
    "name_ar": "سويسرا"
    },
    {
    "name": "Syrian Arab Republic",
    "flag": "🇸🇾",
    "code": "SY",
    "dial_code": "+963",
    "name_ar": "سوريا"
    },
    {
    "name": "Taiwan",
    "flag": "🇹🇼",
    "code": "TW",
    "dial_code": "+886",
    "name_ar": "تايوان"
    },
    {
    "name": "Tajikistan",
    "flag": "🇹🇯",
    "code": "TJ",
    "dial_code": "+992",
    "name_ar": "طاجكستان"
    },
    {
    "name": "Tanzania, United Republic of Tanzania",
    "flag": "🇹🇿",
    "code": "TZ",
    "dial_code": "+255",
    "name_ar": "تانزانيا"
    },
    {
    "name": "Thailand",
    "flag": "🇹🇭",
    "code": "TH",
    "dial_code": "+66",
    "name_ar": "تايلند"
    },
    {
    "name": "Timor-Leste",
    "flag": "🇹🇱",
    "code": "TL",
    "dial_code": "+670",
    "name_ar": "تيمور الشرقية"
    },
    {
    "name": "Togo",
    "flag": "🇹🇬",
    "code": "TG",
    "dial_code": "+228",
    "name_ar": "توجو"
    },
    {
    "name": "Tokelau",
    "flag": "🇹🇰",
    "code": "TK",
    "dial_code": "+690",
    "name_ar": "توكيلو"
    },
    {
    "name": "Tonga",
    "flag": "🇹🇴",
    "code": "TO",
    "dial_code": "+676",
    "name_ar": "تونجا"
    },
    {
    "name": "Trinidad and Tobago",
    "flag": "🇹🇹",
    "code": "TT",
    "dial_code": "+1868",
    "name_ar": "ترينيداد وتوباغو"
    },
    {
    "name": "Tunisia",
    "flag": "🇹🇳",
    "code": "TN",
    "dial_code": "+216",
    "name_ar": "تونس"
    },
    {
    "name": "Turkey",
    "flag": "🇹🇷",
    "code": "TR",
    "dial_code": "+90",
    "name_ar": "تركيا"
    },
    {
    "name": "Turkmenistan",
    "flag": "🇹🇲",
    "code": "TM",
    "dial_code": "+993",
    "name_ar": "تركمانستان"
    },
    {
    "name": "Turks and Caicos Islands",
    "flag": "🇹🇨",
    "code": "TC",
    "dial_code": "+1649",
    "name_ar": "جزر الترك وجايكوس"
    },
    {
    "name": "Tuvalu",
    "flag": "🇹🇻",
    "code": "TV",
    "dial_code": "+688",
    "name_ar": "توفالو"
    },
    {
    "name": "Uganda",
    "flag": "🇺🇬",
    "code": "UG",
    "dial_code": "+256",
    "name_ar": "أوغندا"
    },
    {
    "name": "Ukraine",
    "flag": "🇺🇦",
    "code": "UA",
    "dial_code": "+380",
    "name_ar": "أوكرانيا"
    },
    {
    "name": "United Arab Emirates",
    "flag": "🇦🇪",
    "code": "AE",
    "dial_code": "+971",
    "name_ar": "الامارات العربية المتحدة"
    },
    {
    "name": "United Kingdom",
    "flag": "🇬🇧",
    "code": "GB",
    "dial_code": "+44",
    "name_ar": "المملكة المتحدة"
    },
    {
    "name": "United States",
    "flag": "🇺🇸",
    "code": "US",
    "dial_code": "+1",
    "name_ar": "الولايات المتحدة الأمريكية"
    },
    {
    "name": "Uruguay",
    "flag": "🇺🇾",
    "code": "UY",
    "dial_code": "+598",
    "name_ar": "أورجواي"
    },
    {
    "name": "Uzbekistan",
    "flag": "🇺🇿",
    "code": "UZ",
    "dial_code": "+998",
    "name_ar": "أوزبكستان"
    },
    {
    "name": "Vanuatu",
    "flag": "🇻🇺",
    "code": "VU",
    "dial_code": "+678",
    "name_ar": "فانواتو"
    },
    {
    "name": "Venezuela, Bolivarian Republic of Venezuela",
    "flag": "🇻🇪",
    "code": "VE",
    "dial_code": "+58",
    "name_ar": "فنزويلا"
    },
    {
    "name": "Vietnam",
    "flag": "🇻🇳",
    "code": "VN",
    "dial_code": "+84",
    "name_ar": "فيتنام"
    },
    {
    "name": "Virgin Islands, British",
    "flag": "🇻🇬",
    "code": "VG",
    "dial_code": "+1284",
    "name_ar": "جزر فرجين البريطانية"
    },
    {
    "name": "Virgin Islands, U.S.",
    "flag": "🇻🇮",
    "code": "VI",
    "dial_code": "+1340",
    "name_ar": "جزر فرجين الأمريكية"
    },
    {
    "name": "Wallis and Futuna",
    "flag": "🇼🇫",
    "code": "WF",
    "dial_code": "+681",
    "name_ar": "جزر والس وفوتونا"
    },
    {
    "name": "Yemen",
    "flag": "🇾🇪",
    "code": "YE",
    "dial_code": "+967",
    "name_ar": "اليمن"
    },
    {
    "name": "Zambia",
    "flag": "🇿🇲",
    "code": "ZM",
    "dial_code": "+260",
    "name_ar": "زامبيا"
    },
    {
    "name": "Zimbabwe",
    "flag": "🇿🇼",
    "code": "ZW",
    "dial_code": "+263",
    "name_ar": "زيمبابوي"
    }
    ]
    export default countries;