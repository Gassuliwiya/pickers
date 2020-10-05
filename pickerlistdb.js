var plist = [
    { tag:'adlm', name:'Adlam', url:'adlm/' },
    { tag:'arab', name:'Arabic', url:'arabic/' },
    { tag:'arab', name:'All&nbsp;Arabic', url:'arab-all/' },
    { tag:'syrc', name:'Assyrian&nbsp;Neo-Aramaic', url:'syrc-aii/' },
    { tag:'armi', name:'Aramaic', url:'armi/' },
    { tag:'armn', name:'Armenian', url:'armenian/' },
    { tag:'bali', name:'Balinese', url:'balinese/' },
    { tag:'bamu', name:'Bamum', url:'bamu/' },
    { tag:'bass', name:'Bassa Vah', url:'bass/' },
    { tag:'beng', name:'Bengali', url:'bengali/' },
    { tag:'bugi', name:'Buginese', url:'buginese/' },
    { tag:'buhd', name:'Buhid', url:'buhd/' },
    { tag:'mymr', name:'Burmese', url:'burmese/' },
    { tag:'cher', name:'Cherokee', url:'cherokee/' },
    { tag:'hani', name:'Chinese', url:'hani/' },
    { tag:'cyrl', name:'All Cyrillic', url:'cyrillic/' },
    { tag:'deva', name:'All Devanagari', url:'devanagari/' },
    { tag:'egyp', name:'Egyptian&nbsp;hieroglyphs', url:'egyptian/' },
    { tag:'elym', name:'Elymaic', url:'elym/' },
    { tag:'ethi', name:'All Ethiopic', url:'ethiopic/' },
    { tag:'geor', name:'Georgian', url:'geor-ka/' },
    { tag:'geor', name:'Khutsuri', url:'geok-ka/' },
    { tag:'geor', name:'All Georgian', url:'georgian/' },
    { tag:'grek', name:'Modern Greek', url:'greek/' },
    { tag:'gujr', name:'Gujarati', url:'gujarati/' },
    { tag:'guru', name:'Gurmukhi', url:'gurmukhi/' },
    { tag:'rohg', name:'Hanifi Rohingya', url:'rohg/' },
    { tag:'hano', name:'Hanunoo', url:'hano/' },
    { tag:'hatr', name:'Hatran', url:'hatr/' },
    { tag:'arab', name:'Hausa (ajami)', url:'arab-ha/' },
    { tag:'latn', name:'Hausa (boko)', url:'latn-ha/' },
    { tag:'hebr', name:'Hebrew', url:'hebrew/' },
    { tag:'deva', name:'Hindi', url:'deva-hi/' },
    { tag:'latn', name:'IPA', url:'ipa/' },
    { tag:'latn', name:'IPA&nbsp;2', url:'ipa2/' },
    { tag:'latn', name:'IPA&nbsp;3', url:'ipa3/' },
    { tag:'jpan', name:'Japanese', url:'jpan/' },
    { tag:'java', name:'Javanese', url:'javanese/' },
    { tag:'deva', name:'Kashmiri&nbsp;(deva)', url:'deva-ks/' },
    { tag:'arab', name:'Kashmiri&nbsp;(arab)', url:'arab-ks/' },
    { tag:'khmr', name:'Khmer', url:'khmer/' },
    { tag:'laoo', name:'Lao', url:'lao/' },
    { tag:'latn', name:'Latin&nbsp;&amp;&nbsp;diacritics', url:'latin/' },
    { tag:'lisu', name:'Lisu (Fraser script)', url:'lisu/' },
    { tag:'maka', name:'Makasar', url:'makasar/' },
    { tag:'mlym', name:'Malayalam', url:'malayalam/' },
    { tag:'mand', name:'Mandaic', url:'mandaic/' },
    { tag:'mend', name:'Mende Kikakui', url:'mend/' },
    { tag:'mong', name:'Mongolian', url:'mongolian/' },
    { tag:'nbat', name:'Nabataean', url:'nbat/' },
    { tag:'tfng', name:'Neo-tifinagh', url:'neotifinagh/' },
    { tag:'newa', name:'Newa', url:'newa/' },
    { tag:'talu', name:'New&nbsp;Tai&nbsp;Lue', url:'newtailue/' },
    { tag:'nkoo', name:"N'Ko", url:'nko/' },
    { tag:'lana', name:'Northern&nbsp;Thai', url:'lana-nod/' },
    { tag:'latn', name:'Old&nbsp;English', url:'oldenglish/' },
    { tag:'latn', name:'Old&nbsp;Norse', url:'oldnorse/' },
    { tag:'osge', name:'Osage', url:'osge/' },
    { tag:'palm', name:'Palmyrene', url:'palm/' },
    { tag:'latn', name:'Pan-African Latin', url:'latn-afr/' },
    { tag:'arab', name:'Pan-African Ajami', url:'arab-afr/' },
    { tag:'arab', name:'Persian', url:'persian/' },
    { tag:'phli', name:'Pahlavi', url:'phli/' },
    { tag:'prti', name:'Parthian', url:'prti/' },
    { tag:'phnx', name:'Phoenician', url:'phnx/' },
    { tag:'runr', name:'Runic', url:'runic/' },
    { tag:'cyrl', name:'Russian', url:'russian/' },
    { tag:'mymr', name:'Shan', url:'shan/' },
    { tag:'sinh', name:'Sinhala', url:'sinhala/' },
    { tag:'sund', name:'Sundanese', url:'sundanese/' },
    { tag:'syrc', name:'Syriac', url:'syriac/' },
    { tag:'tagb', name:'Tagbanwa', url:'tagb/' },
    { tag:'lana', name:'Tai&nbsp;Khün', url:'lana-kkh/' },
    { tag:'tale', name:'Tai&nbsp;Le', url:'taile/' },
    { tag:'tavt', name:'Tai&nbsp;Viet', url:'taiviet/' },
    { tag:'taml', name:'Tamil', url:'tamil/' },
    { tag:'telu', name:'Telugu', url:'telu/' },
    { tag:'thaa', name:'Thaana', url:'thaana/' },
    { tag:'thai', name:'Thai', url:'thai/' },
    { tag:'tibt', name:'Tibetan', url:'tibetan/' },
    { tag:'tfng', name:'All Tifinagh ', url:'tifinagh/' },
    { tag:'latn', name:'Tłı̨chǫ&nbsp;(Dogrib)', url:'tlicho/' },
    { tag:'syrc', name:'Turoyo', url:'syrc-tru/' },
    { tag:'ugar', name:'Ugaritic', url:'ugar/' },
    { tag:'arab', name:'Uighur', url:'arab-ug/' },
    { tag:'arab', name:'Urdu', url:'arab-ur/' },
    { tag:'vaii', name:'Vai', url:'vai/' },
    { tag:'cans', name:'Eastern Canadian Inuktitut', url:'cans-ike/' },
    { tag:'cans', name:'UCAS', url:'cans/' },
    { tag:'cans', name:'Plains Cree', url:'cans-crk/' },
    { tag:'latn', name:'Vietnamese', url:'vietnamese/' },
]



var plistByRegion = {
	'A':[
			['Adlam', 'adlm/'],
			  ['Arabic','arab-all/'],
			  ['['],
			  ['Standard Arabic','arabic/'],
			  ['Hausa', 'arab-ha/'],
			  ['Kashmiri', 'arab-ks/'],
			  ['Pan-African&nbsp;Ajami', 'arab-afr/'],
			  ['Persian', 'persian/'],
			  ['Uighur', 'arab-ug/'],
			  ['Urdu', 'arab-ur/'],
			  [']'],
			  ['Aramaic (Imperial)','armi/'],
			  ['Armenian','armenian/'],
			  ],
	'B':[
			   ['Balinese', 'balinese/'],
			   ['Bamum', 'bamu/'],
			  ['Bassa Vah', 'bass/'],
			  ['Bengali', 'bengali/'],
			   ['Buginese', 'buginese/'],
			   ['Buhid', 'buhd/'],
			  ],
	'C':[
				['Cherokee', 'cherokee/'],
			    ['Chinese', 'hani/'],
			  ['Cyrillic', 'cyrillic/'],
			  ['['],
			  ['Russian', 'russian/'],
			  [']'],
			  ],
	'D':[
			  ['Devanagari', 'devanagari/'],
			  ['['],
			  ['Hindi', 'deva-hi/'],
			  ['Kashmiri', 'deva-ks/'],
			  [']'],
			  ],
	'E':[
			  ['Egyptian&nbsp;hieroglyphs', 'egyptian/'],
			  ['Elymaic', 'elym/'],
			  ['Ethiopic', 'ethiopic/'],
			  ],
	'G':[
			  ['Georgian', 'georgian/'],
			  ['['],
			  ['Georgian (modern)', 'geor-ka/'],
			  ['Khutsuri', 'geok-ka/'],
			  [']'],
			  ['Greek', 'greek/'],
			  ['Gujarati', 'gujarati/'],
			  ['Gurmukhi', 'gurmukhi/'],
			  ],
	'H':[
			['Hanifi Rohingya', 'rohg/'],
			['Hanunoo', 'hano/'],
			['Hatran', 'hatr/'],
			['Hebrew', 'hebrew/'],
			],
	'I':[
			['IPA', 'ipa/'],
			['IPA2', 'ipa2/'],
			['IPA3', 'ipa3/'],
			],
	'J':[
			  ['Japanese', 'jpan/'],
			   ['Javanese', 'javanese/'],
			  ],
	'K':[
			   ['Khmer', 'khmer/'],
			  ],
	'L':[
			   ['Lao', 'lao/'],
			  ['Latin & diacritics','latin/'],
			  ['['],
			  ['Hausa (boko)', 'latn-ha/'],
			  ['Old English', 'oldenglish/'],
			  ['Old Norse', 'oldnorse/'],
			  ['Pan-African&nbsp;Latin', 'latn-afr/'],
			  ['Tłı̨chǫ&nbsp;(Dogrib)', 'tlicho/'],
			  ['Vietnamese', 'vietnamese/'],
			  [']'],
			  ['Lisu (Fraser script)', 'lisu/'],
			  ],
	'M':[
			  ['Makasar', 'makasar/'],
			  ['Malayalam', 'malayalam'],
			  ['Mandaic', 'mandaic/'],
			  ['Mende Kikakui', 'mend/'],
			  ['Mongolian', 'mongolian/'],
			  ['• Myanmar ['],
			   ['Burmese', 'burmese/'],
			   ['Shan', 'shan/'],
			  [']'],
			  ],
	'N':[
			['Nabataean', 'nbat/'],
			['N’Ko', 'nko/'],
			['New&nbsp;Tai&nbsp;Lü', 'newtailue/'],
			['Newa', 'newa/'],
			],
	'O':[
				['Osage', 'osge/'],
			  ],
	'P':[
				['Palmyrene', 'palm/'],
				['Phoenician', 'phnx/'],
				['Pahlavi', 'phli/'],
				['Parthian', 'prti/'],
			  ],
	'R':[
				['Runic', 'runic/'],
			  ],
	'S':[
			  ['Sinhala', 'sinhala/'],
			   ['Sundanese', 'sundanese/'],
			  ['Syriac', 'syriac/'],
			  ['['],
			  ['Assyrian&nbsp;Neo-Aramaic', 'syrc-aii/'],
			  ['Turoyo', 'syrc-tru/'],
			  [']'],
			  ],
	'T':[
			   ['Tagbanwa', 'tagb/'],
			   ['Tai&nbsp;Le', 'taile/'],
			  ['• Tai Tham ['],
			   ['Northern&nbsp;Thai', 'lana-nod/'],
			   ['Tai&nbsp;Khün', 'lana-kkh/'],
			  [']'],
			   ['Tai&nbsp;Viet', 'taiviet/'],
			  ['Tamil', 'tamil/'],
			  ['Telugu', 'telu/'],
			  ['Thaana/Dhivehi', 'thaana/'],
			   ['Thai', 'thai/'],
			  ['Tibetan', 'tibetan/'],
			  ['Tifinagh', 'tifinagh/'],
			  ['['],
			  ['Neo-tifinagh', 'neotifinagh/'],
			  [']'],
			  ],
	'U':[
			['UCAS', 'cans/'],
			['['],
			['Eastern Canadian Inuktitut', 'cans-ike/'],
			['Plains Cree', 'cans-crk/'],
			[']'],
			['Ugaritic', 'ugar/'],
			],
	'V':[
			  ['Vai', 'vai/'],
			   ['Vietnamese', 'vietnamese/'],
			  ],
	}
