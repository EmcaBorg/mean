export interface Country {
    code: string;
    shortname: string;
    name: string;
    en: string;
    de: string;
}

export class Countries {
    static LIST: Country[] = [
        {
            code: '1',
            shortname: 'AW',
            name: 'Aruba',
            en: 'Aruba',
            de: 'Aruba'
        },
        {
            code: '2',
            shortname: 'AF',
            name: 'Afghanistan',
            en: 'Afghanistan',
            de: 'Afghanistan'
        },
        {
            code: '3',
            shortname: 'AO',
            name: 'Angola',
            en: 'Angola',
            de: 'Angola'
        },
        {
            code: '4',
            shortname: 'AI',
            name: 'Anguilla',
            en: 'Anguilla',
            de: 'Anguilla'
        },
        {
            code: '5',
            shortname: 'AX',
            name: 'Åland Islands',
            en: 'Åland Islands',
            de: 'Åland'
        },
        {
            code: '6',
            shortname: 'AL',
            name: 'Albania',
            en: 'Albania',
            de: 'Albanien'
        },
        {
            code: '7',
            shortname: 'AD',
            name: 'Andorra',
            en: 'Andorra',
            de: 'Andorra'
        },
        {
            code: '8',
            shortname: 'AE',
            name: 'United Arab Emirates',
            en: 'United Arab Emirates',
            de: 'Vereinigte Arabische Emirate'
        },
        {
            code: '9',
            shortname: 'AR',
            name: 'Argentina',
            en: 'Argentina',
            de: 'Argentinien'
        },
        {
            code: '10',
            shortname: 'AM',
            name: 'Armenia',
            en: 'Armenia',
            de: 'Armenien'
        },
        {
            code: '11',
            shortname: 'AS',
            name: 'American Samoa',
            en: 'American Samoa',
            de: 'Amerikanisch-Samoa'
        },
        {
            code: '12',
            shortname: 'AQ',
            name: 'Antarctica',
            en: 'Antarctica',
            de: 'Antarktis'
        },
        {
            code: '13',
            shortname: 'TF',
            name: 'French Southern and Antarctic Lands',
            en: 'French Southern and Antarctic Lands',
            de: 'Französische Süd-und Antarktisgebiete'
        },
        {
            code: '14',
            shortname: 'AG',
            name: 'Antigua and Barbuda',
            en: 'Antigua and Barbuda',
            de: 'Antigua und Barbuda'
        },
        {
            code: '15',
            shortname: 'AU',
            name: 'Australia',
            en: 'Australia',
            de: 'Australien'
        },
        {
            code: '16',
            shortname: 'AT',
            name: 'Austria',
            en: 'Austria',
            de: 'Österreich'
        },
        {
            code: '17',
            shortname: 'AZ',
            name: 'Azerbaijan',
            en: 'Azerbaijan',
            de: 'Aserbaidschan'
        },
        {
            code: '18',
            shortname: 'BI',
            name: 'Burundi',
            en: 'Burundi',
            de: 'Burundi'
        },
        {
            code: '19',
            shortname: 'BE',
            name: 'Belgium',
            en: 'Belgium',
            de: 'Belgien'
        },
        {
            code: '20',
            shortname: 'BJ',
            name: 'Benin',
            en: 'Benin',
            de: 'Benin'
        },
        {
            code: '21',
            shortname: 'BF',
            name: 'Burkina Faso',
            en: 'Burkina Faso',
            de: 'Burkina Faso'
        },
        {
            code: '22',
            shortname: 'BD',
            name: 'Bangladesh',
            en: 'Bangladesh',
            de: 'Bangladesch'
        },
        {
            code: '23',
            shortname: 'BG',
            name: 'Bulgaria',
            en: 'Bulgaria',
            de: 'Bulgarien'
        },
        {
            code: '24',
            shortname: 'BH',
            name: 'Bahrain',
            en: 'Bahrain',
            de: 'Bahrain'
        },
        {
            code: '25',
            shortname: 'BS',
            name: 'Bahamas',
            en: 'Bahamas',
            de: 'Bahamas'
        },
        {
            code: '26',
            shortname: 'BA',
            name: 'Bosnia and Herzegovina',
            en: 'Bosnia and Herzegovina',
            de: 'Bosnien und Herzegowina'
        },
        {
            code: '27',
            shortname: 'BL',
            name: 'Saint Barthélemy',
            en: 'Saint Barthélemy',
            de: 'Saint-Barthélemy'
        },
        {
            code: '28',
            shortname: 'BY',
            name: 'Belarus',
            en: 'Belarus',
            de: 'Weißrussland'
        },
        {
            code: '29',
            shortname: 'BZ',
            name: 'Belize',
            en: 'Belize',
            de: 'Belize'
        },
        {
            code: '30',
            shortname: 'BM',
            name: 'Bermuda',
            en: 'Bermuda',
            de: 'Bermuda'
        },
        {
            code: '31',
            shortname: 'BO',
            name: 'Bolivia',
            en: 'Bolivia',
            de: 'Bolivien'
        },
        {
            code: '32',
            shortname: 'BR',
            name: 'Brazil',
            en: 'Brazil',
            de: 'Brasilien'
        },
        {
            code: '33',
            shortname: 'BB',
            name: 'Barbados',
            en: 'Barbados',
            de: 'Barbados'
        },
        {
            code: '34',
            shortname: 'BN',
            name: 'Brunei',
            en: 'Brunei',
            de: 'Brunei'
        },
        {
            code: '35',
            shortname: 'BT',
            name: 'Bhutan',
            en: 'Bhutan',
            de: 'Bhutan'
        },
        {
            code: '36',
            shortname: 'BV',
            name: 'Bouvet Island',
            en: 'Bouvet Island',
            de: 'Bouvetinsel'
        },
        {
            code: '37',
            shortname: 'BW',
            name: 'Botswana',
            en: 'Botswana',
            de: 'Botswana'
        },
        {
            code: '38',
            shortname: 'CF',
            name: 'Central African Republic',
            en: 'Central African Republic',
            de: 'Zentralafrikanische Republik'
        },
        {
            code: '39',
            shortname: 'CA',
            name: 'Canada',
            en: 'Canada',
            de: 'Kanada'
        },
        {
            code: '40',
            shortname: 'CC',
            name: 'Cocos (Keeling) Islands',
            en: 'Cocos (Keeling) Islands',
            de: 'Kokosinseln'
        },
        {
            code: '41',
            shortname: 'CH',
            name: 'Switzerland',
            en: 'Switzerland',
            de: 'Schweiz'
        },
        {
            code: '42',
            shortname: 'CL',
            name: 'Chile',
            en: 'Chile',
            de: 'Chile'
        },
        {
            code: '43',
            shortname: 'CN',
            name: 'China',
            en: 'China',
            de: 'China'
        },
        {
            code: '44',
            shortname: 'CI',
            name: 'Ivory Coast',
            en: 'Ivory Coast',
            de: 'Elfenbeinküste'
        },
        {
            code: '45',
            shortname: 'CM',
            name: 'Cameroon',
            en: 'Cameroon',
            de: 'Kamerun'
        },
        {
            code: '46',
            shortname: 'CD',
            name: 'DR Congo',
            en: 'DR Congo',
            de: 'Kongo (Dem. Rep.)'
        },
        {
            code: '47',
            shortname: 'CG',
            name: 'Republic of the Congo',
            en: 'Republic of the Congo',
            de: 'Kongo'
        },
        {
            code: '48',
            shortname: 'CK',
            name: 'Cook Islands',
            en: 'Cook Islands',
            de: 'Cookinseln'
        },
        {
            code: '49',
            shortname: 'CO',
            name: 'Colombia',
            en: 'Colombia',
            de: 'Kolumbien'
        },
        {
            code: '50',
            shortname: 'KM',
            name: 'Comoros',
            en: 'Comoros',
            de: 'Union der Komoren'
        },
        {
            code: '51',
            shortname: 'CV',
            name: 'Cape Verde',
            en: 'Cape Verde',
            de: 'Kap Verde'
        },
        {
            code: '52',
            shortname: 'CR',
            name: 'Costa Rica',
            en: 'Costa Rica',
            de: 'Costa Rica'
        },
        {
            code: '53',
            shortname: 'CU',
            name: 'Cuba',
            en: 'Cuba',
            de: 'Kuba'
        },
        {
            code: '54',
            shortname: 'CW',
            name: 'Curaçao',
            en: 'Curaçao',
            de: 'Curaçao'
        },
        {
            code: '55',
            shortname: 'CX',
            name: 'Christmas Island',
            en: 'Christmas Island',
            de: 'Weihnachtsinsel'
        },
        {
            code: '56',
            shortname: 'KY',
            name: 'Cayman Islands',
            en: 'Cayman Islands',
            de: 'Kaimaninseln'
        },
        {
            code: '57',
            shortname: 'CY',
            name: 'Cyprus',
            en: 'Cyprus',
            de: 'Zypern'
        },
        {
            code: '58',
            shortname: 'CZ',
            name: 'Czech Republic',
            en: 'Czech Republic',
            de: 'Tschechische Republik'
        },
        {
            code: '59',
            shortname: 'DE',
            name: 'Germany',
            en: 'Germany',
            de: 'Deutschland'
        },
        {
            code: '60',
            shortname: 'DJ',
            name: 'Djibouti',
            en: 'Djibouti',
            de: 'Dschibuti'
        },
        {
            code: '61',
            shortname: 'DM',
            name: 'Dominica',
            en: 'Dominica',
            de: 'Dominica'
        },
        {
            code: '62',
            shortname: 'DK',
            name: 'Denmark',
            en: 'Denmark',
            de: 'Dänemark'
        },
        {
            code: '63',
            shortname: 'DO',
            name: 'Dominican Republic',
            en: 'Dominican Republic',
            de: 'Dominikanische Republik'
        },
        {
            code: '64',
            shortname: 'DZ',
            name: 'Algeria',
            en: 'Algeria',
            de: 'Algerien'
        },
        {
            code: '65',
            shortname: 'EC',
            name: 'Ecuador',
            en: 'Ecuador',
            de: 'Ecuador'
        },
        {
            code: '66',
            shortname: 'EG',
            name: 'Egypt',
            en: 'Egypt',
            de: 'Ägypten'
        },
        {
            code: '67',
            shortname: 'ER',
            name: 'Eritrea',
            en: 'Eritrea',
            de: 'Eritrea'
        },
        {
            code: '68',
            shortname: 'EH',
            name: 'Western Sahara',
            en: 'Western Sahara',
            de: 'Westsahara'
        },
        {
            code: '69',
            shortname: 'ES',
            name: 'Spain',
            en: 'Spain',
            de: 'Spanien'
        },
        {
            code: '70',
            shortname: 'EE',
            name: 'Estonia',
            en: 'Estonia',
            de: 'Estland'
        },
        {
            code: '71',
            shortname: 'ET',
            name: 'Ethiopia',
            en: 'Ethiopia',
            de: 'Äthiopien'
        },
        {
            code: '72',
            shortname: 'FI',
            name: 'Finland',
            en: 'Finland',
            de: 'Finnland'
        },
        {
            code: '73',
            shortname: 'FJ',
            name: 'Fiji',
            en: 'Fiji',
            de: 'Fidschi'
        },
        {
            code: '74',
            shortname: 'FK',
            name: 'Falkland Islands',
            en: 'Falkland Islands',
            de: 'Falklandinseln'
        },
        {
            code: '75',
            shortname: 'FR',
            name: 'France',
            en: 'France',
            de: 'Frankreich'
        },
        {
            code: '76',
            shortname: 'FO',
            name: 'Faroe Islands',
            en: 'Faroe Islands',
            de: 'Färöer-Inseln'
        },
        {
            code: '77',
            shortname: 'FM',
            name: 'Micronesia',
            en: 'Micronesia',
            de: 'Mikronesien'
        },
        {
            code: '78',
            shortname: 'GA',
            name: 'Gabon',
            en: 'Gabon',
            de: 'Gabun'
        },
        {
            code: '79',
            shortname: 'GB',
            name: 'United Kingdom',
            en: 'United Kingdom',
            de: 'Vereinigtes Königreich'
        },
        {
            code: '80',
            shortname: 'GE',
            name: 'Georgia',
            en: 'Georgia',
            de: 'Georgien'
        },
        {
            code: '81',
            shortname: 'GG',
            name: 'Guernsey',
            en: 'Guernsey',
            de: 'Guernsey'
        },
        {
            code: '82',
            shortname: 'GH',
            name: 'Ghana',
            en: 'Ghana',
            de: 'Ghana'
        },
        {
            code: '83',
            shortname: 'GI',
            name: 'Gibraltar',
            en: 'Gibraltar',
            de: 'Gibraltar'
        },
        {
            code: '84',
            shortname: 'GN',
            name: 'Guinea',
            en: 'Guinea',
            de: 'Guinea'
        },
        {
            code: '85',
            shortname: 'GP',
            name: 'Guadeloupe',
            en: 'Guadeloupe',
            de: 'Guadeloupe'
        },
        {
            code: '86',
            shortname: 'GM',
            name: 'Gambia',
            en: 'Gambia',
            de: 'Gambia'
        },
        {
            code: '87',
            shortname: 'GW',
            name: 'Guinea-Bissau',
            en: 'Guinea-Bissau',
            de: 'Guinea-Bissau'
        },
        {
            code: '88',
            shortname: 'GQ',
            name: 'Equatorial Guinea',
            en: 'Equatorial Guinea',
            de: 'Äquatorialguinea'
        },
        {
            code: '89',
            shortname: 'GR',
            name: 'Greece',
            en: 'Greece',
            de: 'Griechenland'
        },
        {
            code: '90',
            shortname: 'GD',
            name: 'Grenada',
            en: 'Grenada',
            de: 'Grenada'
        },
        {
            code: '91',
            shortname: 'GL',
            name: 'Greenland',
            en: 'Greenland',
            de: 'Grönland'
        },
        {
            code: '92',
            shortname: 'GT',
            name: 'Guatemala',
            en: 'Guatemala',
            de: 'Guatemala'
        },
        {
            code: '93',
            shortname: 'GF',
            name: 'French Guiana',
            en: 'French Guiana',
            de: 'Französisch Guyana'
        },
        {
            code: '94',
            shortname: 'GU',
            name: 'Guam',
            en: 'Guam',
            de: 'Guam'
        },
        {
            code: '95',
            shortname: 'GY',
            name: 'Guyana',
            en: 'Guyana',
            de: 'Guyana'
        },
        {
            code: '96',
            shortname: 'HK',
            name: 'Hong Kong',
            en: 'Hong Kong',
            de: 'Hongkong'
        },
        {
            code: '97',
            shortname: 'HM',
            name: 'Heard Island and McDonald Islands',
            en: 'Heard Island and McDonald Islands',
            de: 'Heard und die McDonaldinseln'
        },
        {
            code: '98',
            shortname: 'HN',
            name: 'Honduras',
            en: 'Honduras',
            de: 'Honduras'
        },
        {
            code: '99',
            shortname: 'HR',
            name: 'Croatia',
            en: 'Croatia',
            de: 'Kroatien'
        },
        {
            code: '100',
            shortname: 'HT',
            name: 'Haiti',
            en: 'Haiti',
            de: 'Haiti'
        },
        {
            code: '101',
            shortname: 'HU',
            name: 'Hungary',
            en: 'Hungary',
            de: 'Ungarn'
        },
        {
            code: '102',
            shortname: 'ID',
            name: 'Indonesia',
            en: 'Indonesia',
            de: 'Indonesien'
        },
        {
            code: '103',
            shortname: 'IM',
            name: 'Isle of Man',
            en: 'Isle of Man',
            de: 'Insel Man'
        },
        {
            code: '104',
            shortname: 'IN',
            name: 'India',
            en: 'India',
            de: 'Indien'
        },
        {
            code: '105',
            shortname: 'IO',
            name: 'British Indian Ocean Territory',
            en: 'British Indian Ocean Territory',
            de: 'Britisches Territorium im Indischen Ozean'
        },
        {
            code: '106',
            shortname: 'IE',
            name: 'Ireland',
            en: 'Ireland',
            de: 'Irland'
        },
        {
            code: '107',
            shortname: 'IR',
            name: 'Iran',
            en: 'Iran',
            de: 'Iran'
        },
        {
            code: '108',
            shortname: 'IQ',
            name: 'Iraq',
            en: 'Iraq',
            de: 'Irak'
        },
        {
            code: '109',
            shortname: 'IS',
            name: 'Iceland',
            en: 'Iceland',
            de: 'Island'
        },
        {
            code: '110',
            shortname: 'IL',
            name: 'Israel',
            en: 'Israel',
            de: 'Israel'
        },
        {
            code: '111',
            shortname: 'IT',
            name: 'Italy',
            en: 'Italy',
            de: 'Italien'
        },
        {
            code: '112',
            shortname: 'JM',
            name: 'Jamaica',
            en: 'Jamaica',
            de: 'Jamaika'
        },
        {
            code: '113',
            shortname: 'JE',
            name: 'Jersey',
            en: 'Jersey',
            de: 'Jersey'
        },
        {
            code: '114',
            shortname: 'JO',
            name: 'Jordan',
            en: 'Jordan',
            de: 'Jordanien'
        },
        {
            code: '115',
            shortname: 'JP',
            name: 'Japan',
            en: 'Japan',
            de: 'Japan'
        },
        {
            code: '116',
            shortname: 'KZ',
            name: 'Kazakhstan',
            en: 'Kazakhstan',
            de: 'Kasachstan'
        },
        {
            code: '117',
            shortname: 'KE',
            name: 'Kenya',
            en: 'Kenya',
            de: 'Kenia'
        },
        {
            code: '118',
            shortname: 'KG',
            name: 'Kyrgyzstan',
            en: 'Kyrgyzstan',
            de: 'Kirgisistan'
        },
        {
            code: '119',
            shortname: 'KH',
            name: 'Cambodia',
            en: 'Cambodia',
            de: 'Kambodscha'
        },
        {
            code: '120',
            shortname: 'KI',
            name: 'Kiribati',
            en: 'Kiribati',
            de: 'Kiribati'
        },
        {
            code: '121',
            shortname: 'KN',
            name: 'Saint Kitts and Nevis',
            en: 'Saint Kitts and Nevis',
            de: 'Saint Christopher und Nevis'
        },
        {
            code: '122',
            shortname: 'KR',
            name: 'South Korea',
            en: 'South Korea',
            de: 'Südkorea'
        },
        {
            code: '123',
            shortname: 'XK',
            name: 'Kosovo',
            en: 'Kosovo',
            de: 'Kosovo'
        },
        {
            code: '124',
            shortname: 'KW',
            name: 'Kuwait',
            en: 'Kuwait',
            de: 'Kuwait'
        },
        {
            code: '125',
            shortname: 'LA',
            name: 'Laos',
            en: 'Laos',
            de: 'Laos'
        },
        {
            code: '126',
            shortname: 'LB',
            name: 'Lebanon',
            en: 'Lebanon',
            de: 'Libanon'
        },
        {
            code: '127',
            shortname: 'LR',
            name: 'Liberia',
            en: 'Liberia',
            de: 'Liberia'
        },
        {
            code: '128',
            shortname: 'LY',
            name: 'Libya',
            en: 'Libya',
            de: 'Libyen'
        },
        {
            code: '129',
            shortname: 'LC',
            name: 'Saint Lucia',
            en: 'Saint Lucia',
            de: 'Saint Lucia'
        },
        {
            code: '130',
            shortname: 'LI',
            name: 'Liechtenstein',
            en: 'Liechtenstein',
            de: 'Liechtenstein'
        },
        {
            code: '131',
            shortname: 'LK',
            name: 'Sri Lanka',
            en: 'Sri Lanka',
            de: 'Sri Lanka'
        },
        {
            code: '132',
            shortname: 'LS',
            name: 'Lesotho',
            en: 'Lesotho',
            de: 'Lesotho'
        },
        {
            code: '133',
            shortname: 'LT',
            name: 'Lithuania',
            en: 'Lithuania',
            de: 'Litauen'
        },
        {
            code: '134',
            shortname: 'LU',
            name: 'Luxembourg',
            en: 'Luxembourg',
            de: 'Luxemburg'
        },
        {
            code: '135',
            shortname: 'LV',
            name: 'Latvia',
            en: 'Latvia',
            de: 'Lettland'
        },
        {
            code: '136',
            shortname: 'MO',
            name: 'Macau',
            en: 'Macau',
            de: 'Macao'
        },
        {
            code: '137',
            shortname: 'MF',
            name: 'Saint Martin',
            en: 'Saint Martin',
            de: 'Saint Martin'
        },
        {
            code: '138',
            shortname: 'MA',
            name: 'Morocco',
            en: 'Morocco',
            de: 'Marokko'
        },
        {
            code: '139',
            shortname: 'MC',
            name: 'Monaco',
            en: 'Monaco',
            de: 'Monaco'
        },
        {
            code: '140',
            shortname: 'MD',
            name: 'Moldova',
            en: 'Moldova',
            de: 'Moldawie'
        },
        {
            code: '141',
            shortname: 'MG',
            name: 'Madagascar',
            en: 'Madagascar',
            de: 'Madagaskar'
        },
        {
            code: '142',
            shortname: 'MV',
            name: 'Maldives',
            en: 'Maldives',
            de: 'Malediven'
        },
        {
            code: '143',
            shortname: 'MX',
            name: 'Mexico',
            en: 'Mexico',
            de: 'Mexiko'
        },
        {
            code: '144',
            shortname: 'MH',
            name: 'Marshall Islands',
            en: 'Marshall Islands',
            de: 'Marshallinseln'
        },
        {
            code: '145',
            shortname: 'MK',
            name: 'Macedonia',
            en: 'Macedonia',
            de: 'Mazedonien'
        },
        {
            code: '146',
            shortname: 'ML',
            name: 'Mali',
            en: 'Mali',
            de: 'Mali'
        },
        {
            code: '147',
            shortname: 'MT',
            name: 'Malta',
            en: 'Malta',
            de: 'Malta'
        },
        {
            code: '148',
            shortname: 'MM',
            name: 'Myanmar',
            en: 'Myanmar',
            de: 'Myanmar'
        },
        {
            code: '149',
            shortname: 'ME',
            name: 'Montenegro',
            en: 'Montenegro',
            de: 'Montenegro'
        },
        {
            code: '150',
            shortname: 'MN',
            name: 'Mongolia',
            en: 'Mongolia',
            de: 'Mongolei'
        },
        {
            code: '151',
            shortname: 'MP',
            name: 'Northern Mariana Islands',
            en: 'Northern Mariana Islands',
            de: 'Nördliche Marianen'
        },
        {
            code: '152',
            shortname: 'MZ',
            name: 'Mozambique',
            en: 'Mozambique',
            de: 'Mosambik'
        },
        {
            code: '153',
            shortname: 'MR',
            name: 'Mauritania',
            en: 'Mauritania',
            de: 'Mauretanien'
        },
        {
            code: '154',
            shortname: 'MS',
            name: 'Montserrat',
            en: 'Montserrat',
            de: 'Montserrat'
        },
        {
            code: '155',
            shortname: 'MQ',
            name: 'Martinique',
            en: 'Martinique',
            de: 'Martinique'
        },
        {
            code: '156',
            shortname: 'MU',
            name: 'Mauritius',
            en: 'Mauritius',
            de: 'Mauritius'
        },
        {
            code: '157',
            shortname: 'MW',
            name: 'Malawi',
            en: 'Malawi',
            de: 'Malawi'
        },
        {
            code: '158',
            shortname: 'MY',
            name: 'Malaysia',
            en: 'Malaysia',
            de: 'Malaysia'
        },
        {
            code: '159',
            shortname: 'YT',
            name: 'Mayotte',
            en: 'Mayotte',
            de: 'Mayotte'
        },
        {
            code: '160',
            shortname: 'NA',
            name: 'Namibia',
            en: 'Namibia',
            de: 'Namibia'
        },
        {
            code: '161',
            shortname: 'NC',
            name: 'New Caledonia',
            en: 'New Caledonia',
            de: 'Neukaledonien'
        },
        {
            code: '162',
            shortname: 'NE',
            name: 'Niger',
            en: 'Niger',
            de: 'Niger'
        },
        {
            code: '163',
            shortname: 'NF',
            name: 'Norfolk Island',
            en: 'Norfolk Island',
            de: 'Norfolkinsel'
        },
        {
            code: '164',
            shortname: 'NG',
            name: 'Nigeria',
            en: 'Nigeria',
            de: 'Nigeria'
        },
        {
            code: '165',
            shortname: 'NI',
            name: 'Nicaragua',
            en: 'Nicaragua',
            de: 'Nicaragua'
        },
        {
            code: '166',
            shortname: 'NU',
            name: 'Niue',
            en: 'Niue',
            de: 'Niue'
        },
        {
            code: '167',
            shortname: 'NL',
            name: 'Netherlands',
            en: 'Netherlands',
            de: 'Niederlande'
        },
        {
            code: '168',
            shortname: 'NO',
            name: 'Norway',
            en: 'Norway',
            de: 'Norwegen'
        },
        {
            code: '169',
            shortname: 'NP',
            name: 'Nepal',
            en: 'Nepal',
            de: 'Népal'
        },
        {
            code: '170',
            shortname: 'NR',
            name: 'Nauru',
            en: 'Nauru',
            de: 'Nauru'
        },
        {
            code: '171',
            shortname: 'NZ',
            name: 'New Zealand',
            en: 'New Zealand',
            de: 'Neuseeland'
        },
        {
            code: '172',
            shortname: 'OM',
            name: 'Oman',
            en: 'Oman',
            de: 'Oman'
        },
        {
            code: '173',
            shortname: 'PK',
            name: 'Pakistan',
            en: 'Pakistan',
            de: 'Pakistan'
        },
        {
            code: '174',
            shortname: 'PA',
            name: 'Panama',
            en: 'Panama',
            de: 'Panama'
        },
        {
            code: '175',
            shortname: 'PN',
            name: 'Pitcairn Islands',
            en: 'Pitcairn Islands',
            de: 'Pitcairn'
        },
        {
            code: '176',
            shortname: 'PE',
            name: 'Peru',
            en: 'Peru',
            de: 'Peru'
        },
        {
            code: '177',
            shortname: 'PH',
            name: 'Philippines',
            en: 'Philippines',
            de: 'Philippinen'
        },
        {
            code: '178',
            shortname: 'PW',
            name: 'Palau',
            en: 'Palau',
            de: 'Palau'
        },
        {
            code: '179',
            shortname: 'PG',
            name: 'Papua New Guinea',
            en: 'Papua New Guinea',
            de: 'Papua-Neuguinea'
        },
        {
            code: '180',
            shortname: 'PL',
            name: 'Poland',
            en: 'Poland',
            de: 'Polen'
        },
        {
            code: '181',
            shortname: 'PR',
            name: 'Puerto Rico',
            en: 'Puerto Rico',
            de: 'Puerto Rico'
        },
        {
            code: '182',
            shortname: 'KP',
            name: 'North Korea',
            en: 'North Korea',
            de: 'Nordkorea'
        },
        {
            code: '183',
            shortname: 'PT',
            name: 'Portugal',
            en: 'Portugal',
            de: 'Portugal'
        },
        {
            code: '184',
            shortname: 'PY',
            name: 'Paraguay',
            en: 'Paraguay',
            de: 'Paraguay'
        },
        {
            code: '185',
            shortname: 'PS',
            name: 'Palestine',
            en: 'Palestine',
            de: 'Palästina'
        },
        {
            code: '186',
            shortname: 'PF',
            name: 'French Polynesia',
            en: 'French Polynesia',
            de: 'Französisch-Polynesien'
        },
        {
            code: '187',
            shortname: 'QA',
            name: 'Qatar',
            en: 'Qatar',
            de: 'Katar'
        },
        {
            code: '188',
            shortname: 'RE',
            name: 'Réunion',
            en: 'Réunion',
            de: 'Réunion'
        },
        {
            code: '189',
            shortname: 'RO',
            name: 'Romania',
            en: 'Romania',
            de: 'Rumänien'
        },
        {
            code: '190',
            shortname: 'RU',
            name: 'Russia',
            en: 'Russia',
            de: 'Russland'
        },
        {
            code: '191',
            shortname: 'RW',
            name: 'Rwanda',
            en: 'Rwanda',
            de: 'Ruanda'
        },
        {
            code: '192',
            shortname: 'SA',
            name: 'Saudi Arabia',
            en: 'Saudi Arabia',
            de: 'Saudi-Arabien'
        },
        {
            code: '193',
            shortname: 'SD',
            name: 'Sudan',
            en: 'Sudan',
            de: 'Sudan'
        },
        {
            code: '194',
            shortname: 'SN',
            name: 'Senegal',
            en: 'Senegal',
            de: 'Senegal'
        },
        {
            code: '195',
            shortname: 'SG',
            name: 'Singapore',
            en: 'Singapore',
            de: 'Singapur'
        },
        {
            code: '196',
            shortname: 'GS',
            name: 'South Georgia',
            en: 'South Georgia',
            de: 'Südgeorgien und die Südlichen Sandwichinseln'
        },
        {
            code: '197',
            shortname: 'SJ',
            name: 'Svalbard and Jan Mayen',
            en: 'Svalbard and Jan Mayen',
            de: 'Spitzbergen'
        },
        {
            code: '198',
            shortname: 'SB',
            name: 'Solomon Islands',
            en: 'Solomon Islands',
            de: 'Salomonen'
        },
        {
            code: '199',
            shortname: 'SL',
            name: 'Sierra Leone',
            en: 'Sierra Leone',
            de: 'Sierra Leone'
        },
        {
            code: '200',
            shortname: 'SV',
            name: 'El Salvador',
            en: 'El Salvador',
            de: 'El Salvador'
        },
        {
            code: '201',
            shortname: 'SM',
            name: 'San Marino',
            en: 'San Marino',
            de: 'San Marino'
        },
        {
            code: '202',
            shortname: 'SO',
            name: 'Somalia',
            en: 'Somalia',
            de: 'Somalia'
        },
        {
            code: '203',
            shortname: 'PM',
            name: 'Saint Pierre and Miquelon',
            en: 'Saint Pierre and Miquelon',
            de: 'Saint-Pierre und Miquelon'
        },
        {
            code: '204',
            shortname: 'RS',
            name: 'Serbia',
            en: 'Serbia',
            de: 'Serbien'
        },
        {
            code: '205',
            shortname: 'SS',
            name: 'South Sudan',
            en: 'South Sudan',
            de: 'Südsudan'
        },
        {
            code: '206',
            shortname: 'ST',
            name: 'São Tomé and Príncipe',
            en: 'São Tomé and Príncipe',
            de: 'São Tomé und Príncipe'
        },
        {
            code: '207',
            shortname: 'SR',
            name: 'Suriname',
            en: 'Suriname',
            de: 'Suriname'
        },
        {
            code: '208',
            shortname: 'SK',
            name: 'Slovakia',
            en: 'Slovakia',
            de: 'Slowakei'
        },
        {
            code: '209',
            shortname: 'SI',
            name: 'Slovenia',
            en: 'Slovenia',
            de: 'Slowenien'
        },
        {
            code: '210',
            shortname: 'SE',
            name: 'Sweden',
            en: 'Sweden',
            de: 'Schweden'
        },
        {
            code: '211',
            shortname: 'SZ',
            name: 'Swaziland',
            en: 'Swaziland',
            de: 'Swasiland'
        },
        {
            code: '212',
            shortname: 'SX',
            name: 'Sint Maarten',
            en: 'Sint Maarten',
            de: 'Sint Maarten'
        },
        {
            code: '213',
            shortname: 'SC',
            name: 'Seychelles',
            en: 'Seychelles',
            de: 'Seychellen'
        },
        {
            code: '214',
            shortname: 'SY',
            name: 'Syria',
            en: 'Syria',
            de: 'Syrien'
        },
        {
            code: '215',
            shortname: 'TC',
            name: 'Turks and Caicos Islands',
            en: 'Turks and Caicos Islands',
            de: 'Turks-und Caicosinseln'
        },
        {
            code: '216',
            shortname: 'TD',
            name: 'Chad',
            en: 'Chad',
            de: 'Tschad'
        },
        {
            code: '217',
            shortname: 'TG',
            name: 'Togo',
            en: 'Togo',
            de: 'Togo'
        },
        {
            code: '218',
            shortname: 'TH',
            name: 'Thailand',
            en: 'Thailand',
            de: 'Thailand'
        },
        {
            code: '219',
            shortname: 'TJ',
            name: 'Tajikistan',
            en: 'Tajikistan',
            de: 'Tadschikistan'
        },
        {
            code: '220',
            shortname: 'TK',
            name: 'Tokelau',
            en: 'Tokelau',
            de: 'Tokelau'
        },
        {
            code: '221',
            shortname: 'TM',
            name: 'Turkmenistan',
            en: 'Turkmenistan',
            de: 'Turkmenistan'
        },
        {
            code: '222',
            shortname: 'TL',
            name: 'Timor-Leste',
            en: 'Timor-Leste',
            de: 'Timor-Leste'
        },
        {
            code: '223',
            shortname: 'TO',
            name: 'Tonga',
            en: 'Tonga',
            de: 'Tonga'
        },
        {
            code: '224',
            shortname: 'TT',
            name: 'Trinidad and Tobago',
            en: 'Trinidad and Tobago',
            de: 'Trinidad und Tobago'
        },
        {
            code: '225',
            shortname: 'TN',
            name: 'Tunisia',
            en: 'Tunisia',
            de: 'Tunesien'
        },
        {
            code: '226',
            shortname: 'TR',
            name: 'Turkey',
            en: 'Turkey',
            de: 'Türkei'
        },
        {
            code: '227',
            shortname: 'TV',
            name: 'Tuvalu',
            en: 'Tuvalu',
            de: 'Tuvalu'
        },
        {
            code: '228',
            shortname: 'TW',
            name: 'Taiwan',
            en: 'Taiwan',
            de: 'Taiwan'
        },
        {
            code: '229',
            shortname: 'TZ',
            name: 'Tanzania',
            en: 'Tanzania',
            de: 'Tansania'
        },
        {
            code: '230',
            shortname: 'UG',
            name: 'Uganda',
            en: 'Uganda',
            de: 'Uganda'
        },
        {
            code: '231',
            shortname: 'UA',
            name: 'Ukraine',
            en: 'Ukraine',
            de: 'Ukraine'
        },
        {
            code: '232',
            shortname: 'UM',
            name: 'United States Minor Outlying Islands',
            en: 'United States Minor Outlying Islands',
            de: 'Kleinere Inselbesitzungen der Vereinigten Staaten'
        },
        {
            code: '233',
            shortname: 'UY',
            name: 'Uruguay',
            en: 'Uruguay',
            de: 'Uruguay'
        },
        {
            code: '234',
            shortname: 'US',
            name: 'United States',
            en: 'United States',
            de: 'Vereinigte Staaten von Amerika'
        },
        {
            code: '235',
            shortname: 'UZ',
            name: 'Uzbekistan',
            en: 'Uzbekistan',
            de: 'Usbekistan'
        },
        {
            code: '236',
            shortname: 'VA',
            name: 'Vatican City',
            en: 'Vatican City',
            de: 'Vatikanstadt'
        },
        {
            code: '237',
            shortname: 'VC',
            name: 'Saint Vincent and the Grenadines',
            en: 'Saint Vincent and the Grenadines',
            de: 'Saint Vincent und die Grenadinen'
        },
        {
            code: '238',
            shortname: 'VE',
            name: 'Venezuela',
            en: 'Venezuela',
            de: 'Venezuela'
        },
        {
            code: '239',
            shortname: 'VG',
            name: 'British Virgin Islands',
            en: 'British Virgin Islands',
            de: 'Britische Jungferninseln'
        },
        {
            code: '240',
            shortname: 'VI',
            name: 'United States Virgin Islands',
            en: 'United States Virgin Islands',
            de: 'Amerikanische Jungferninseln'
        },
        {
            code: '241',
            shortname: 'VN',
            name: 'Vietnam',
            en: 'Vietnam',
            de: 'Vietnam'
        },
        {
            code: '242',
            shortname: 'VU',
            name: 'Vanuatu',
            en: 'Vanuatu',
            de: 'Vanuatu'
        },
        {
            code: '243',
            shortname: 'WF',
            name: 'Wallis and Futuna',
            en: 'Wallis and Futuna',
            de: 'Wallis und Futuna'
        },
        {
            code: '244',
            shortname: 'WS',
            name: 'Samoa',
            en: 'Samoa',
            de: 'Samoa'
        },
        {
            code: '245',
            shortname: 'YE',
            name: 'Yemen',
            en: 'Yemen',
            de: 'Jemen'
        },
        {
            code: '246',
            shortname: 'ZA',
            name: 'South Africa',
            en: 'South Africa',
            de: 'Republik Südafrika'
        },
        {
            code: '247',
            shortname: 'ZM',
            name: 'Zambia',
            en: 'Zambia',
            de: 'Sambia'
        },
        {
            code: '248',
            shortname: 'ZW',
            name: 'Zimbabwe',
            en: 'Zimbabwe',
            de: 'Simbabwe'
        }]


}