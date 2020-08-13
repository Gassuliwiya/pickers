function localtranscribe (direction, str) {
	
	if (direction == 'transliterate') { return transliterate(str) }
	if (direction == 'toLatin') { return toLatin(str) }
	if (direction == 'reverse') { return reverse(str) }
	}
		



function transliterate (str) {

str = ' '+str

var strArray = [...str]
var exclusions = new Set(['(',')','[',']','.',' '])

for (i=0;i<strArray.length;i++) {
	if (exclusions.has(strArray[i])) continue
	if (! autoTranslitArray[strArray[i]]) continue
	re = new RegExp(strArray[i],'g')
	str = str.replace(re, autoTranslitArray[strArray[i]])
	}


return str.trim()
}




function toLatin (str) {
	
str = str.replace(/𞠀/g, "ki")
str = str.replace(/𞠁/g, "ka")
str = str.replace(/𞠂/g, "ku")
str = str.replace(/𞠃/g, "ke")
str = str.replace(/𞠄/g, "kɛ")
str = str.replace(/𞠅/g, "ko")
str = str.replace(/𞠆/g, "kɔ")
str = str.replace(/𞠇/g, "kua")
str = str.replace(/𞠈/g, "wi")
str = str.replace(/𞠉/g, "wa")
str = str.replace(/𞠊/g, "wu")
str = str.replace(/𞠋/g, "we")
str = str.replace(/𞠌/g, "wɛ")
str = str.replace(/𞠍/g, "wo")
str = str.replace(/𞠎/g, "wɔ")
str = str.replace(/𞠏/g, "wui")
str = str.replace(/𞠐/g, "wei")
str = str.replace(/𞠑/g, "wvi")
str = str.replace(/𞠒/g, "wva")
str = str.replace(/𞠓/g, "wve")
str = str.replace(/𞠔/g, "min")
str = str.replace(/𞠕/g, "man")
str = str.replace(/𞠖/g, "mun")
str = str.replace(/𞠗/g, "men")
str = str.replace(/𞠘/g, "mon")
str = str.replace(/𞠙/g, "muan")
str = str.replace(/𞠚/g, "muen")
str = str.replace(/𞠛/g, "bi")
str = str.replace(/𞠜/g, "ba")
str = str.replace(/𞠝/g, "bu")
str = str.replace(/𞠞/g, "be")
str = str.replace(/𞠟/g, "bɛ")
str = str.replace(/𞠠/g, "bo")
str = str.replace(/𞠡/g, "bɔ")
str = str.replace(/𞠢/g, "i")
str = str.replace(/𞠣/g, "a")
str = str.replace(/𞠤/g, "u")
str = str.replace(/𞠥/g, "e")
str = str.replace(/𞠦/g, "ɛ")
str = str.replace(/𞠧/g, "o")
str = str.replace(/𞠨/g, "ɔ")
str = str.replace(/𞠩/g, "ɛi")
str = str.replace(/𞠪/g, "in")
str = str.replace(/𞠫/g, "in")
str = str.replace(/𞠬/g, "an")
str = str.replace(/𞠭/g, "ɛn")
str = str.replace(/𞠮/g, "si")
str = str.replace(/𞠯/g, "sa")
str = str.replace(/𞠰/g, "su")
str = str.replace(/𞠱/g, "se")
str = str.replace(/𞠲/g, "sɛ")
str = str.replace(/𞠳/g, "so")
str = str.replace(/𞠴/g, "sɔ")
str = str.replace(/𞠵/g, "sia")
str = str.replace(/𞠶/g, "li")
str = str.replace(/𞠷/g, "la")
str = str.replace(/𞠸/g, "lu")
str = str.replace(/𞠹/g, "le")
str = str.replace(/𞠺/g, "lɛ")
str = str.replace(/𞠻/g, "lo")
str = str.replace(/𞠼/g, "lɔ")
str = str.replace(/𞠽/g, "lɛɛ")
str = str.replace(/𞠾/g, "di")
str = str.replace(/𞠿/g, "da")
str = str.replace(/𞡀/g, "du")
str = str.replace(/𞡁/g, "de")
str = str.replace(/𞡂/g, "do")
str = str.replace(/𞡃/g, "dɔ")
str = str.replace(/𞡄/g, "ti")
str = str.replace(/𞡅/g, "ta")
str = str.replace(/𞡆/g, "tu")
str = str.replace(/𞡇/g, "te")
str = str.replace(/𞡈/g, "tɛ")
str = str.replace(/𞡉/g, "to")
str = str.replace(/𞡊/g, "tɔ")
str = str.replace(/𞡋/g, "ji")
str = str.replace(/𞡌/g, "ja")
str = str.replace(/𞡍/g, "ju")
str = str.replace(/𞡎/g, "je")
str = str.replace(/𞡏/g, "jɛ")
str = str.replace(/𞡐/g, "jo")
str = str.replace(/𞡑/g, "jɔ")
str = str.replace(/𞡒/g, "jɔɔ")
str = str.replace(/𞡓/g, "yi")
str = str.replace(/𞡔/g, "ya")
str = str.replace(/𞡕/g, "yu")
str = str.replace(/𞡖/g, "ye")
str = str.replace(/𞡗/g, "yɛ")
str = str.replace(/𞡘/g, "yo")
str = str.replace(/𞡙/g, "yɔ")
str = str.replace(/𞡚/g, "fi")
str = str.replace(/𞡛/g, "fa")
str = str.replace(/𞡜/g, "fu")
str = str.replace(/𞡝/g, "fe")
str = str.replace(/𞡞/g, "fɛ")
str = str.replace(/𞡟/g, "fo")
str = str.replace(/𞡠/g, "fɔ")
str = str.replace(/𞡡/g, "fua")
str = str.replace(/𞡢/g, "fan")
str = str.replace(/𞡣/g, "nin")
str = str.replace(/𞡤/g, "nan")
str = str.replace(/𞡥/g, "nun")
str = str.replace(/𞡦/g, "nɛn")
str = str.replace(/𞡧/g, "nɔn")
str = str.replace(/𞡨/g, "hi")
str = str.replace(/𞡩/g, "ha")
str = str.replace(/𞡪/g, "hu")
str = str.replace(/𞡫/g, "he")
str = str.replace(/𞡬/g, "hɛ")
str = str.replace(/𞡭/g, "ho")
str = str.replace(/𞡮/g, "hɔ")
str = str.replace(/𞡯/g, "heei")
str = str.replace(/𞡰/g, "hoou")
str = str.replace(/𞡱/g, "hin")
str = str.replace(/𞡲/g, "han")
str = str.replace(/𞡳/g, "hun")
str = str.replace(/𞡴/g, "hɛn")
str = str.replace(/𞡵/g, "hɔn")
str = str.replace(/𞡶/g, "huan")
str = str.replace(/𞡷/g, "nggi")
str = str.replace(/𞡸/g, "ngga")
str = str.replace(/𞡹/g, "nggu")
str = str.replace(/𞡺/g, "ngge")
str = str.replace(/𞡻/g, "nggɛ")
str = str.replace(/𞡼/g, "nggo")
str = str.replace(/𞡽/g, "nggɔ")
str = str.replace(/𞡾/g, "nggaa")
str = str.replace(/𞡿/g, "nggua")
str = str.replace(/𞢀/g, "nggɛɛ")
str = str.replace(/𞢁/g, "nggoo")
str = str.replace(/𞢂/g, "ngɔɔ")
str = str.replace(/𞢃/g, "gi")
str = str.replace(/𞢄/g, "ga")
str = str.replace(/𞢅/g, "gu")
str = str.replace(/𞢆/g, "ge")
str = str.replace(/𞢇/g, "guei")
str = str.replace(/𞢈/g, "guan")
str = str.replace(/𞢉/g, "ngɛn")
str = str.replace(/𞢊/g, "ngɔn")
str = str.replace(/𞢋/g, "nguan")
str = str.replace(/𞢌/g, "pi")
str = str.replace(/𞢍/g, "pa")
str = str.replace(/𞢎/g, "pu")
str = str.replace(/𞢏/g, "pe")
str = str.replace(/𞢐/g, "pɛ")
str = str.replace(/𞢑/g, "po")
str = str.replace(/𞢒/g, "pɔ")
str = str.replace(/𞢓/g, "mbi")
str = str.replace(/𞢔/g, "mba")
str = str.replace(/𞢕/g, "mbu")
str = str.replace(/𞢖/g, "mbe")
str = str.replace(/𞢗/g, "mbee")
str = str.replace(/𞢘/g, "mbɛ")
str = str.replace(/𞢙/g, "mbo")
str = str.replace(/𞢚/g, "mbɔ")
str = str.replace(/𞢛/g, "mbuu")
str = str.replace(/𞢜/g, "mbɛɛ")
str = str.replace(/𞢝/g, "mboo")
str = str.replace(/𞢞/g, "mbɔɔ")
str = str.replace(/𞢟/g, "kpi")
str = str.replace(/𞢠/g, "kpa")
str = str.replace(/𞢡/g, "kpu")
str = str.replace(/𞢢/g, "kpe")
str = str.replace(/𞢣/g, "kpɛ")
str = str.replace(/𞢤/g, "kpo")
str = str.replace(/𞢥/g, "kpɔ")
str = str.replace(/𞢦/g, "gbi")
str = str.replace(/𞢧/g, "gba")
str = str.replace(/𞢨/g, "gbu")
str = str.replace(/𞢩/g, "gbe")
str = str.replace(/𞢪/g, "gbɛ")
str = str.replace(/𞢫/g, "gbo")
str = str.replace(/𞢬/g, "gbɔ")
str = str.replace(/𞢭/g, "r")
str = str.replace(/𞢮/g, "ndi")
str = str.replace(/𞢯/g, "nda")
str = str.replace(/𞢰/g, "ndu")
str = str.replace(/𞢱/g, "nde")
str = str.replace(/𞢲/g, "ndɛ")
str = str.replace(/𞢳/g, "ndo")
str = str.replace(/𞢴/g, "ndɔ")
str = str.replace(/𞢵/g, "nja")
str = str.replace(/𞢶/g, "nju")
str = str.replace(/𞢷/g, "nje")
str = str.replace(/𞢸/g, "njo")
str = str.replace(/𞢹/g, "vi")
str = str.replace(/𞢺/g, "va")
str = str.replace(/𞢻/g, "vu")
str = str.replace(/𞢼/g, "ve")
str = str.replace(/𞢽/g, "vɛ")
str = str.replace(/𞢾/g, "vo")
str = str.replace(/𞢿/g, "vɔ")
str = str.replace(/𞣀/g, "nyin")
str = str.replace(/𞣁/g, "nyan")
str = str.replace(/𞣂/g, "nyun")
str = str.replace(/𞣃/g, "nyɛn")
str = str.replace(/𞣄/g, "nyɔn")
str = str.replace(/𞣇/g, "1")
str = str.replace(/𞣈/g, "2")
str = str.replace(/𞣉/g, "3")
str = str.replace(/𞣊/g, "4")
str = str.replace(/𞣋/g, "5")
str = str.replace(/𞣌/g, "6")
str = str.replace(/𞣍/g, "7")
str = str.replace(/𞣎/g, "8")
str = str.replace(/𞣏/g, "9")


return str.trim()
}


function reverse (str) { 
    
str += '  '

str = str.replace(/kpe/g, "ꔉ")
str = str.replace(/mgbe/g, "ꔊ")
str = str.replace(/gbe/g, "ꔋ")
str = str.replace(/mɓe/g, "ꔈ")
str = str.replace(/nɗe/g, "ꔕ")
str = str.replace(/nʤe/g, "ꔜ")
str = str.replace(/ŋge/g, "ꔟ")
str = str.replace(/ẹ̃/g, "ꔁ")
str = str.replace(/ẹ/g, "ꔀ")
str = str.replace(/he/g, "ꔂ")
str = str.replace(/wẽ/g, "ꔄ")
str = str.replace(/we/g, "ꔃ")
str = str.replace(/pe/g, "ꔅ")
str = str.replace(/be/g, "ꔆ")
str = str.replace(/ɓe/g, "ꔇ")
str = str.replace(/fe/g, "ꔌ")
str = str.replace(/ve/g, "ꔍ")
str = str.replace(/te/g, "ꔎ")
str = str.replace(/θe/g, "ꔏ")
str = str.replace(/de/g, "ꔐ")
str = str.replace(/ðe/g, "ꔑ")
str = str.replace(/le/g, "ꔒ")
str = str.replace(/re/g, "ꔓ")
str = str.replace(/ɗe/g, "ꔔ")
str = str.replace(/se/g, "ꔖ")
str = str.replace(/ʃe/g, "ꔗ")
str = str.replace(/ze/g, "ꔘ")
str = str.replace(/ʒe/g, "ꔙ")
str = str.replace(/ʧe/g, "ꔚ")
str = str.replace(/ʤe/g, "ꔛ")
str = str.replace(/je/g, "ꔝ")
str = str.replace(/ke/g, "ꔞ")
str = str.replace(/ge/g, "ꔠ")
str = str.replace(/mẽ/g, "ꔡ")
str = str.replace(/nẽ/g, "ꔢ")
str = str.replace(/ɲẽ/g, "ꔣ")

str = str.replace(/mɓi/g, "ꔭ")
str = str.replace(/kpi/g, "ꔮ")
str = str.replace(/mgbi/g, "ꔯ")
str = str.replace(/gbi/g, "ꔰ")
str = str.replace(/nɗi/g, "ꔺ")
str = str.replace(/nʤi/g, "ꕁ")
str = str.replace(/ŋgi/g, "ꕄ")
str = str.replace(/ị̃/g, "ꔥ")
str = str.replace(/ị/g, "ꔤ")
str = str.replace(/hĩ/g, "ꔧ")
str = str.replace(/hi/g, "ꔦ")
str = str.replace(/wĩ/g, "ꔩ")
str = str.replace(/wi/g, "ꔨ")
str = str.replace(/pi/g, "ꔪ")
str = str.replace(/bi/g, "ꔫ")
str = str.replace(/ɓi/g, "ꔬ")
str = str.replace(/fi/g, "ꔱ")
str = str.replace(/vi/g, "ꔲ")
str = str.replace(/ti/g, "ꔳ")
str = str.replace(/θi/g, "ꔴ")
str = str.replace(/di/g, "ꔵ")
str = str.replace(/ði/g, "ꔶ")
str = str.replace(/li/g, "ꔷ")
str = str.replace(/ri/g, "ꔸ")
str = str.replace(/ɗi/g, "ꔹ")
str = str.replace(/si/g, "ꔻ")
str = str.replace(/ʃi/g, "ꔼ")
str = str.replace(/zi/g, "ꔽ")
str = str.replace(/ʒi/g, "ꔾ")
str = str.replace(/ʧi/g, "ꔿ")
str = str.replace(/ʤi/g, "ꕀ")
str = str.replace(/ji/g, "ꕂ")
str = str.replace(/ki/g, "ꕃ")
str = str.replace(/gi/g, "ꕅ")
str = str.replace(/mĩ/g, "ꕆ")
str = str.replace(/nĩ/g, "ꕇ")
str = str.replace(/ɲĩ/g, "ꕈ")

str = str.replace(/mɓa/g, "ꕓ")
str = str.replace(/kpã/g, "ꕕ")
str = str.replace(/kpa/g, "ꕔ")
str = str.replace(/mgba/g, "ꕖ")
str = str.replace(/gba/g, "ꕗ")
str = str.replace(/nɗa/g, "ꕡ")
str = str.replace(/nʤa/g, "ꕨ")
str = str.replace(/ŋga/g, "ꕬ")
str = str.replace(/ạ̃/g, "ꕊ")
str = str.replace(/ạ/g, "ꕉ")
str = str.replace(/ŋã/g, "ꕋ")
str = str.replace(/hã/g, "ꕍ")
str = str.replace(/ha/g, "ꕌ")
str = str.replace(/wã/g, "ꕏ")
str = str.replace(/wa/g, "ꕎ")
str = str.replace(/pa/g, "ꕐ")
str = str.replace(/ba/g, "ꕑ")
str = str.replace(/ɓa/g, "ꕒ")
str = str.replace(/fa/g, "ꕘ")
str = str.replace(/va/g, "ꕙ")
str = str.replace(/ta/g, "ꕚ")
str = str.replace(/θa/g, "ꕛ")
str = str.replace(/da/g, "ꕜ")
str = str.replace(/ða/g, "ꕝ")
str = str.replace(/la/g, "ꕞ")
str = str.replace(/ra/g, "ꕟ")
str = str.replace(/ɗa/g, "ꕠ")
str = str.replace(/sa/g, "ꕢ")
str = str.replace(/ʃa/g, "ꕣ")
str = str.replace(/za/g, "ꕤ")
str = str.replace(/ʒa/g, "ꕥ")
str = str.replace(/ʧa/g, "ꕦ")
str = str.replace(/ʤa/g, "ꕧ")
str = str.replace(/ja/g, "ꕩ")
str = str.replace(/kã/g, "ꕫ")
str = str.replace(/ka/g, "ꕪ")
str = str.replace(/ga/g, "ꕭ")
str = str.replace(/mã/g, "ꕮ")
str = str.replace(/nã/g, "ꕯ")
str = str.replace(/ɲã/g, "ꕰ")

str = str.replace(/mɓo/g, "ꕹ")
str = str.replace(/kpo/g, "ꕺ")
str = str.replace(/mgbo/g, "ꕻ")
str = str.replace(/gbo/g, "ꕼ")
str = str.replace(/nɗo/g, "ꖆ")
str = str.replace(/nʤo/g, "ꖍ")
str = str.replace(/ŋgo/g, "ꖐ")
str = str.replace(/ọ̃/g, "ꕲ")
str = str.replace(/ọ/g, "ꕱ")
str = str.replace(/ho/g, "ꕳ")
str = str.replace(/wõ/g, "ꕵ")
str = str.replace(/wo/g, "ꕴ")
str = str.replace(/po/g, "ꕶ")
str = str.replace(/bo/g, "ꕷ")
str = str.replace(/ɓo/g, "ꕸ")
str = str.replace(/fo/g, "ꕽ")
str = str.replace(/vo/g, "ꕾ")
str = str.replace(/to/g, "ꕿ")
str = str.replace(/θo/g, "ꖀ")
str = str.replace(/do/g, "ꖁ")
str = str.replace(/ðo/g, "ꖂ")
str = str.replace(/lo/g, "ꖃ")
str = str.replace(/ro/g, "ꖄ")
str = str.replace(/ɗo/g, "ꖅ")
str = str.replace(/so/g, "ꖇ")
str = str.replace(/ʃo/g, "ꖈ")
str = str.replace(/zo/g, "ꖉ")
str = str.replace(/ʒo/g, "ꖊ")
str = str.replace(/ʧo/g, "ꖋ")
str = str.replace(/ʤo/g, "ꖌ")
str = str.replace(/jo/g, "ꖎ")
str = str.replace(/ko/g, "ꖏ")
str = str.replace(/go/g, "ꖑ")
str = str.replace(/mõ/g, "ꖒ")
str = str.replace(/nõ/g, "ꖓ")
str = str.replace(/ɲõ/g, "ꖔ")

str = str.replace(/mɓu/g, "ꖞ")
str = str.replace(/kpu/g, "ꖟ")
str = str.replace(/mgbu/g, "ꖠ")
str = str.replace(/gbu/g, "ꖡ")
str = str.replace(/nɗu/g, "ꖫ")
str = str.replace(/nʤu/g, "ꖲ")
str = str.replace(/ŋgu/g, "ꖵ")
str = str.replace(/ụ̃/g, "ꖖ")
str = str.replace(/ụ/g, "ꖕ")
str = str.replace(/hũ/g, "ꖘ")
str = str.replace(/hu/g, "ꖗ")
str = str.replace(/wũ/g, "ꖚ")
str = str.replace(/wu/g, "ꖙ")
str = str.replace(/pu/g, "ꖛ")
str = str.replace(/bu/g, "ꖜ")
str = str.replace(/ɓu/g, "ꖝ")
str = str.replace(/fu/g, "ꖢ")
str = str.replace(/vu/g, "ꖣ")
str = str.replace(/tu/g, "ꖤ")
str = str.replace(/θu/g, "ꖥ")
str = str.replace(/du/g, "ꖦ")
str = str.replace(/ðu/g, "ꖧ")
str = str.replace(/lu/g, "ꖨ")
str = str.replace(/ru/g, "ꖩ")
str = str.replace(/ɗu/g, "ꖪ")
str = str.replace(/su/g, "ꖬ")
str = str.replace(/ʃu/g, "ꖭ")
str = str.replace(/zu/g, "ꖮ")
str = str.replace(/ʒu/g, "ꖯ")
str = str.replace(/ʧu/g, "ꖰ")
str = str.replace(/ʤu/g, "ꖱ")
str = str.replace(/ju/g, "ꖳ")
str = str.replace(/ku/g, "ꖴ")
str = str.replace(/gu/g, "ꖶ")
str = str.replace(/mũ/g, "ꖷ")
str = str.replace(/nũ/g, "ꖸ")
str = str.replace(/ɲũ/g, "ꖹ")

str = str.replace(/mɓɔ/g, "ꗄ")
str = str.replace(/kpɔ/g, "ꗅ")
str = str.replace(/mgbɔ/g, "ꗆ")
str = str.replace(/gbɔ̃/g, "ꗈ")
str = str.replace(/gbɔ/g, "ꗇ")
str = str.replace(/nɗɔ/g, "ꗒ")
str = str.replace(/nʤɔ/g, "ꗙ")
str = str.replace(/ŋgɔ/g, "ꗜ")
str = str.replace(/ɔ̣̃/g, "ꖻ")
str = str.replace(/ɔ̣/g, "ꖺ")
str = str.replace(/ŋɔ/g, "ꖼ")
str = str.replace(/hɔ̃/g, "ꖾ")
str = str.replace(/hɔ/g, "ꖽ")
str = str.replace(/wɔ̃/g, "ꗀ")
str = str.replace(/wɔ/g, "ꖿ")
str = str.replace(/pɔ/g, "ꗁ")
str = str.replace(/bɔ/g, "ꗂ")
str = str.replace(/ɓɔ/g, "ꗃ")
str = str.replace(/fɔ/g, "ꗉ")
str = str.replace(/vɔ/g, "ꗊ")
str = str.replace(/tɔ/g, "ꗋ")
str = str.replace(/θɔ/g, "ꗌ")
str = str.replace(/dɔ/g, "ꗍ")
str = str.replace(/ðɔ/g, "ꗎ")
str = str.replace(/lɔ/g, "ꗏ")
str = str.replace(/rɔ/g, "ꗐ")
str = str.replace(/ɗɔ/g, "ꗑ")
str = str.replace(/sɔ/g, "ꗓ")
str = str.replace(/ʃɔ/g, "ꗔ")
str = str.replace(/zɔ/g, "ꗕ")
str = str.replace(/ʒɔ/g, "ꗖ")
str = str.replace(/ʧɔ/g, "ꗗ")
str = str.replace(/ʤɔ/g, "ꗘ")
str = str.replace(/jɔ/g, "ꗚ")
str = str.replace(/kɔ/g, "ꗛ")
str = str.replace(/gɔ/g, "ꗝ")
str = str.replace(/mɔ̃/g, "ꗞ")
str = str.replace(/nɔ̃/g, "ꗟ")
str = str.replace(/ɲɔ̃/g, "ꗠ")

str = str.replace(/mɓɛ/g, "ꗫ")
str = str.replace(/kpɛ̃/g, "ꗭ")
str = str.replace(/kpɛ/g, "ꗬ")
str = str.replace(/mgbɛ/g, "ꗮ")
str = str.replace(/gbɛ̃/g, "ꗰ")
str = str.replace(/gbɛ/g, "ꗯ")
str = str.replace(/nɗɛ/g, "ꗺ")
str = str.replace(/nʤɛ/g, "ꘁ")
str = str.replace(/ŋgɛ̃/g, "ꘅ")
str = str.replace(/ŋgɛ/g, "ꘄ")
str = str.replace(/ɛ̣̃/g, "ꗢ")
str = str.replace(/ɛ̣/g, "ꗡ")
str = str.replace(/ŋɛ̃/g, "ꗣ")
str = str.replace(/hɛ̃/g, "ꗥ")
str = str.replace(/hɛ/g, "ꗤ")
str = str.replace(/wɛ̃/g, "ꗧ")
str = str.replace(/wɛ/g, "ꗦ")
str = str.replace(/pɛ/g, "ꗨ")
str = str.replace(/bɛ/g, "ꗩ")
str = str.replace(/ɓɛ/g, "ꗪ")
str = str.replace(/fɛ/g, "ꗱ")
str = str.replace(/vɛ/g, "ꗲ")
str = str.replace(/tɛ/g, "ꗳ")
str = str.replace(/θɛ/g, "ꗴ")
str = str.replace(/dɛ/g, "ꗵ")
str = str.replace(/ðɛ/g, "ꗶ")
str = str.replace(/lɛ/g, "ꗷ")
str = str.replace(/rɛ/g, "ꗸ")
str = str.replace(/ɗɛ/g, "ꗹ")
str = str.replace(/sɛ/g, "ꗻ")
str = str.replace(/ʃɛ/g, "ꗼ")
str = str.replace(/zɛ/g, "ꗽ")
str = str.replace(/ʒɛ/g, "ꗾ")
str = str.replace(/ʧɛ/g, "ꗿ")
str = str.replace(/ʤɛ/g, "ꘀ")
str = str.replace(/jɛ/g, "ꘂ")
str = str.replace(/kɛ/g, "ꘃ")
str = str.replace(/gɛ̃/g, "ꘇ")
str = str.replace(/gɛ/g, "ꘆ")
str = str.replace(/mɛ̃/g, "ꘈ")
str = str.replace(/nɛ̃/g, "ꘉ")
str = str.replace(/ɲɛ̃/g, "ꘊ")

// syllable finals
str = str.replace(/ŋ̽/g, "ꘋ")
str = str.replace(/–/g, "ꘌ")

// logograms
str = str.replace(/FAA/g, "ꘘ")
str = str.replace(/FENG/g, "ꘓ")

str = str.replace(/FEŊ/g, "ꘓ")
str = str.replace(/KEŊ/g, "ꘔ")
str = str.replace(/TIŊ/g, "ꘕ")
str = str.replace(/NII/g, "ꘖ")
str = str.replace(/BAŊ/g, "ꘗ")
str = str.replace(/TAA/g, "ꘙ")
str = str.replace(/DAŊ/g, "ꘚ")
str = str.replace(/DOŊ/g, "ꘛ")
str = str.replace(/KUŊ/g, "ꘜ")
str = str.replace(/TƆŊ/g, "ꘝ")
str = str.replace(/DƆƆ̣/g, "ꘞ")
str = str.replace(/JƆŊ/g, "ꘟ")


// punctuation
str = str.replace(/,/g, "꘍")
str = str.replace(/!/g, "꘎꘎")
str = str.replace(/\./g, "꘎")
str = str.replace(/\?/g, "꘏")

// numbers
str = str.replace(/0/g, "꘠")
str = str.replace(/1/g, "꘡")
str = str.replace(/2/g, "꘢")
str = str.replace(/3/g, "꘣")
str = str.replace(/4/g, "꘤")
str = str.replace(/5/g, "꘥")
str = str.replace(/6/g, "꘦")
str = str.replace(/7/g, "꘧")
str = str.replace(/8/g, "꘨")
str = str.replace(/9/g, "꘩")



return str.trim()
}




/*
function transliterate (str) { 
    
str += '  '

str = str.replace(/ꔀ/g, "ẹ")
str = str.replace(/ꔁ/g, "ẹ̃")
str = str.replace(/ꔂ/g, "he")
str = str.replace(/ꔃ/g, "we")
str = str.replace(/ꔄ/g, "wẽ")
str = str.replace(/ꔅ/g, "pe")
str = str.replace(/ꔆ/g, "be")
str = str.replace(/ꔇ/g, "ɓe")
str = str.replace(/ꔈ/g, "mɓe")
str = str.replace(/ꔉ/g, "kpe")
str = str.replace(/ꔊ/g, "mgbe")
str = str.replace(/ꔋ/g, "gbe")
str = str.replace(/ꔌ/g, "fe")
str = str.replace(/ꔍ/g, "ve")
str = str.replace(/ꔎ/g, "te")
str = str.replace(/ꔏ/g, "θe")
str = str.replace(/ꔐ/g, "de")
str = str.replace(/ꔑ/g, "ðe")
str = str.replace(/ꔒ/g, "le")
str = str.replace(/ꔓ/g, "re")
str = str.replace(/ꔔ/g, "ɗe")
str = str.replace(/ꔕ/g, "nɗe")
str = str.replace(/ꔖ/g, "se")
str = str.replace(/ꔗ/g, "ʃe")
str = str.replace(/ꔘ/g, "ze")
str = str.replace(/ꔙ/g, "ʒe")
str = str.replace(/ꔚ/g, "ʧe")
str = str.replace(/ꔛ/g, "ʤe")
str = str.replace(/ꔜ/g, "nʤe")
str = str.replace(/ꔝ/g, "je")
str = str.replace(/ꔞ/g, "ke")
str = str.replace(/ꔟ/g, "ŋge")
str = str.replace(/ꔠ/g, "ge")
str = str.replace(/ꔡ/g, "mẽ")
str = str.replace(/ꔢ/g, "nẽ")
str = str.replace(/ꔣ/g, "ɲẽ")

str = str.replace(/ꔤ/g, "ị")
str = str.replace(/ꔥ/g, "ị̃")
str = str.replace(/ꔦ/g, "hi")
str = str.replace(/ꔧ/g, "hĩ")
str = str.replace(/ꔨ/g, "wi")
str = str.replace(/ꔩ/g, "wĩ")
str = str.replace(/ꔪ/g, "pi")
str = str.replace(/ꔫ/g, "bi")
str = str.replace(/ꔬ/g, "ɓi")
str = str.replace(/ꔭ/g, "mɓi")
str = str.replace(/ꔮ/g, "kpi")
str = str.replace(/ꔯ/g, "mgbi")
str = str.replace(/ꔰ/g, "gbi")
str = str.replace(/ꔱ/g, "fi")
str = str.replace(/ꔲ/g, "vi")
str = str.replace(/ꔳ/g, "ti")
str = str.replace(/ꔴ/g, "θi")
str = str.replace(/ꔵ/g, "di")
str = str.replace(/ꔶ/g, "ði")
str = str.replace(/ꔷ/g, "li")
str = str.replace(/ꔸ/g, "ri")
str = str.replace(/ꔹ/g, "ɗi")
str = str.replace(/ꔺ/g, "nɗi")
str = str.replace(/ꔻ/g, "si")
str = str.replace(/ꔼ/g, "ʃi")
str = str.replace(/ꔽ/g, "zi")
str = str.replace(/ꔾ/g, "ʒi")
str = str.replace(/ꔿ/g, "ʧi")
str = str.replace(/ꕀ/g, "ʤi")
str = str.replace(/ꕁ/g, "nʤi")
str = str.replace(/ꕂ/g, "ji")
str = str.replace(/ꕃ/g, "ki")
str = str.replace(/ꕄ/g, "ŋgi")
str = str.replace(/ꕅ/g, "gi")
str = str.replace(/ꕆ/g, "mĩ")
str = str.replace(/ꕇ/g, "nĩ")
str = str.replace(/ꕈ/g, "ŋĩ")

str = str.replace(/ꕉ/g, "ạ")
str = str.replace(/ꕊ/g, "ạ̃")
str = str.replace(/ꕋ/g, "ŋã")
str = str.replace(/ꕌ/g, "ha")
str = str.replace(/ꕍ/g, "hã")
str = str.replace(/ꕎ/g, "wa")
str = str.replace(/ꕏ/g, "wã")
str = str.replace(/ꕐ/g, "pa")
str = str.replace(/ꕑ/g, "ba")
str = str.replace(/ꕒ/g, "ɓa")
str = str.replace(/ꕓ/g, "mɓa")
str = str.replace(/ꕔ/g, "kpa")
str = str.replace(/ꕕ/g, "kpã")
str = str.replace(/ꕖ/g, "mgba")
str = str.replace(/ꕗ/g, "gba")
str = str.replace(/ꕘ/g, "fa")
str = str.replace(/ꕙ/g, "va")
str = str.replace(/ꕚ/g, "ta")
str = str.replace(/ꕛ/g, "θa")
str = str.replace(/ꕜ/g, "da")
str = str.replace(/ꕝ/g, "ða")
str = str.replace(/ꕞ/g, "la")
str = str.replace(/ꕟ/g, "ra")
str = str.replace(/ꕠ/g, "ɗa")
str = str.replace(/ꕡ/g, "nɗa")
str = str.replace(/ꕢ/g, "sa")
str = str.replace(/ꕣ/g, "ʃa")
str = str.replace(/ꕤ/g, "za")
str = str.replace(/ꕥ/g, "ʒa")
str = str.replace(/ꕦ/g, "ʧa")
str = str.replace(/ꕧ/g, "ʤa")
str = str.replace(/ꕨ/g, "nʤa")
str = str.replace(/ꕩ/g, "ja")
str = str.replace(/ꕪ/g, "ka")
str = str.replace(/ꕫ/g, "kã")
str = str.replace(/ꕬ/g, "ŋga")
str = str.replace(/ꕭ/g, "ga")
str = str.replace(/ꕮ/g, "mã")
str = str.replace(/ꕯ/g, "nã")
str = str.replace(/ꕰ/g, "ɲã")

str = str.replace(/ꕱ/g, "ọ")
str = str.replace(/ꕲ/g, "ọ̃")
str = str.replace(/ꕳ/g, "ho")
str = str.replace(/ꕴ/g, "wo")
str = str.replace(/ꕵ/g, "wõ")
str = str.replace(/ꕶ/g, "po")
str = str.replace(/ꕷ/g, "bo")
str = str.replace(/ꕸ/g, "ɓo")
str = str.replace(/ꕹ/g, "mɓo")
str = str.replace(/ꕺ/g, "kpo")
str = str.replace(/ꕻ/g, "mgbo")
str = str.replace(/ꕼ/g, "gbo")
str = str.replace(/ꕽ/g, "fo")
str = str.replace(/ꕾ/g, "vo")
str = str.replace(/ꕿ/g, "to")
str = str.replace(/ꖀ/g, "θo")
str = str.replace(/ꖁ/g, "do")
str = str.replace(/ꖂ/g, "ðo")
str = str.replace(/ꖃ/g, "lo")
str = str.replace(/ꖄ/g, "ro")
str = str.replace(/ꖅ/g, "ɗo")
str = str.replace(/ꖆ/g, "nɗo")
str = str.replace(/ꖇ/g, "so")
str = str.replace(/ꖈ/g, "ʃo")
str = str.replace(/ꖉ/g, "zo")
str = str.replace(/ꖊ/g, "ʒo")
str = str.replace(/ꖋ/g, "ʧo")
str = str.replace(/ꖌ/g, "ʤo")
str = str.replace(/ꖍ/g, "nʤo")
str = str.replace(/ꖎ/g, "jo")
str = str.replace(/ꖏ/g, "ko")
str = str.replace(/ꖐ/g, "ŋgo")
str = str.replace(/ꖑ/g, "go")
str = str.replace(/ꖒ/g, "mõ")
str = str.replace(/ꖓ/g, "nõ")
str = str.replace(/ꖔ/g, "ɲõ")

str = str.replace(/ꖕ/g, "ụ")
str = str.replace(/ꖖ/g, "ụ̃")
str = str.replace(/ꖗ/g, "hu")
str = str.replace(/ꖘ/g, "hũ")
str = str.replace(/ꖙ/g, "wu")
str = str.replace(/ꖚ/g, "wũ")
str = str.replace(/ꖛ/g, "pu")
str = str.replace(/ꖜ/g, "bu")
str = str.replace(/ꖝ/g, "ɓu")
str = str.replace(/ꖞ/g, "mɓu")
str = str.replace(/ꖟ/g, "kpu")
str = str.replace(/ꖠ/g, "mgbu")
str = str.replace(/ꖡ/g, "gbu")
str = str.replace(/ꖢ/g, "fu")
str = str.replace(/ꖣ/g, "vu")
str = str.replace(/ꖤ/g, "tu")
str = str.replace(/ꖥ/g, "θu")
str = str.replace(/ꖦ/g, "du")
str = str.replace(/ꖧ/g, "ðu")
str = str.replace(/ꖨ/g, "lu")
str = str.replace(/ꖩ/g, "ru")
str = str.replace(/ꖪ/g, "ɗu")
str = str.replace(/ꖫ/g, "nɗu")
str = str.replace(/ꖬ/g, "su")
str = str.replace(/ꖭ/g, "ʃu")
str = str.replace(/ꖮ/g, "zu")
str = str.replace(/ꖯ/g, "ʒu")
str = str.replace(/ꖰ/g, "ʧu")
str = str.replace(/ꖱ/g, "ʤu")
str = str.replace(/ꖲ/g, "nʤu")
str = str.replace(/ꖳ/g, "ju")
str = str.replace(/ꖴ/g, "ku")
str = str.replace(/ꖵ/g, "ŋgu")
str = str.replace(/ꖶ/g, "gu")
str = str.replace(/ꖷ/g, "mũ")
str = str.replace(/ꖸ/g, "nũ")
str = str.replace(/ꖹ/g, "ɲũ")

str = str.replace(/ꖺ/g, "ɔ̣")
str = str.replace(/ꖻ/g, "ɔ̣̃")
str = str.replace(/ꖼ/g, "ŋɔ")
str = str.replace(/ꖽ/g, "hɔ")
str = str.replace(/ꖾ/g, "hɔ̃")
str = str.replace(/ꖿ/g, "wɔ")
str = str.replace(/ꗀ/g, "wɔ̃")
str = str.replace(/ꗁ/g, "pɔ")
str = str.replace(/ꗂ/g, "bɔ")
str = str.replace(/ꗃ/g, "ɓɔ")
str = str.replace(/ꗄ/g, "mɓɔ")
str = str.replace(/ꗅ/g, "kpɔ")
str = str.replace(/ꗆ/g, "mgbɔ")
str = str.replace(/ꗇ/g, "gbɔ")
str = str.replace(/ꗈ/g, "gbɔ̃")
str = str.replace(/ꗉ/g, "fɔ")
str = str.replace(/ꗊ/g, "vɔ")
str = str.replace(/ꗋ/g, "tɔ")
str = str.replace(/ꗌ/g, "θɔ")
str = str.replace(/ꗍ/g, "dɔ")
str = str.replace(/ꗎ/g, "ðɔ")
str = str.replace(/ꗏ/g, "lɔ")
str = str.replace(/ꗐ/g, "rɔ")
str = str.replace(/ꗑ/g, "ɗɔ")
str = str.replace(/ꗒ/g, "nɗɔ")
str = str.replace(/ꗓ/g, "sɔ")
str = str.replace(/ꗔ/g, "ʃɔ")
str = str.replace(/ꗕ/g, "zɔ")
str = str.replace(/ꗖ/g, "ʒɔ")
str = str.replace(/ꗗ/g, "ʧɔ")
str = str.replace(/ꗘ/g, "ʤɔ")
str = str.replace(/ꗙ/g, "nʤɔ")
str = str.replace(/ꗚ/g, "jɔ")
str = str.replace(/ꗛ/g, "kɔ")
str = str.replace(/ꗜ/g, "ŋgɔ")
str = str.replace(/ꗝ/g, "gɔ")
str = str.replace(/ꗞ/g, "mɔ̃")
str = str.replace(/ꗟ/g, "nɔ̃")
str = str.replace(/ꗠ/g, "ɲɔ̃")

str = str.replace(/ꗡ/g, "ɛ̣")
str = str.replace(/ꗢ/g, "ɛ̣̃")
str = str.replace(/ꗣ/g, "ŋɛ̃")
str = str.replace(/ꗤ/g, "hɛ")
str = str.replace(/ꗥ/g, "hɛ̃")
str = str.replace(/ꗦ/g, "wɛ")
str = str.replace(/ꗧ/g, "wɛ̃")
str = str.replace(/ꗨ/g, "pɛ")
str = str.replace(/ꗩ/g, "bɛ")
str = str.replace(/ꗪ/g, "ɓɛ")
str = str.replace(/ꗫ/g, "mɓɛ")
str = str.replace(/ꗬ/g, "kpɛ")
str = str.replace(/ꗭ/g, "kpɛ̃")
str = str.replace(/ꗮ/g, "mgbɛ")
str = str.replace(/ꗯ/g, "gbɛ")
str = str.replace(/ꗰ/g, "gbɛ̃")
str = str.replace(/ꗱ/g, "fɛ")
str = str.replace(/ꗲ/g, "vɛ")
str = str.replace(/ꗳ/g, "tɛ")
str = str.replace(/ꗴ/g, "θɛ")
str = str.replace(/ꗵ/g, "dɛ")
str = str.replace(/ꗶ/g, "ðɛ")
str = str.replace(/ꗷ/g, "lɛ")
str = str.replace(/ꗸ/g, "rɛ")
str = str.replace(/ꗹ/g, "ɗɛ")
str = str.replace(/ꗺ/g, "nɗɛ")
str = str.replace(/ꗻ/g, "sɛ")
str = str.replace(/ꗼ/g, "ʃɛ")
str = str.replace(/ꗽ/g, "zɛ")
str = str.replace(/ꗾ/g, "ʒɛ")
str = str.replace(/ꗿ/g, "ʧɛ")
str = str.replace(/ꘀ/g, "ʤɛ")
str = str.replace(/ꘁ/g, "nʤɛ")
str = str.replace(/ꘂ/g, "jɛ")
str = str.replace(/ꘃ/g, "kɛ")
str = str.replace(/ꘄ/g, "ŋgɛ")
str = str.replace(/ꘅ/g, "ŋgɛ̃")
str = str.replace(/ꘆ/g, "gɛ")
str = str.replace(/ꘇ/g, "gɛ̃")
str = str.replace(/ꘈ/g, "mɛ̃")
str = str.replace(/ꘉ/g, "nɛ̃")
str = str.replace(/ꘊ/g, "ɲɛ̃")

// syllable finals
str = str.replace(/ꘋ/g, "ŋ̽")
str = str.replace(/ꘌ/g, "–")

// logograms
str = str.replace(/ꘘ/g, "FAA")
str = str.replace(/ꘓ/g, "FEŊ")
str = str.replace(/ꘔ/g, "KEŊ")
str = str.replace(/ꘕ/g, "TIŊ")
str = str.replace(/ꘖ/g, "NII")
str = str.replace(/ꘗ/g, "BAŊ")
str = str.replace(/ꘙ/g, "TAA")
str = str.replace(/ꘚ/g, "DAŊ")
str = str.replace(/ꘛ/g, "DOŊ")
str = str.replace(/ꘜ/g, "KUŊ")
str = str.replace(/ꘝ/g, "TƆŊ")
str = str.replace(/ꘞ/g, "DƆƆ̣")
str = str.replace(/ꘟ/g, "JƆŊ")


// punctuation
str = str.replace(/꘍/g, ",")
str = str.replace(/꘎꘎/g, "!")
str = str.replace(/꘎/g, ".")
str = str.replace(/꘏/g, "?")

// numbers
str = str.replace(/꘠/g, "0")
str = str.replace(/꘡/g, "1")
str = str.replace(/꘢/g, "2")
str = str.replace(/꘣/g, "3")
str = str.replace(/꘤/g, "4")
str = str.replace(/꘥/g, "5")
str = str.replace(/꘦/g, "6")
str = str.replace(/꘧/g, "7")
str = str.replace(/꘨/g, "8")
str = str.replace(/꘩/g, "9")



return str.trim()
}
*/

