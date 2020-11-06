var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Aramaic WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "26";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'arc' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Aramaic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "24";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'armiPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Aramaic WF" ]


var template = {}
	template.title = 'Aramaic character app'
	template.sample = "𐡁 𐡛𐡚𐡘 𐡋𐡀𐡐 𐡄𐡅 𐡉𐡅𐡌 𐡛𐡚𐡚𐡚 𐡋𐡐𐡇𐡍𐡎 𐡔𐡍𐡕 𐡜𐡚𐡙 𐡀𐡓𐡕𐡇𐡔𐡎𐡔 𐡌𐡋𐡊𐡀 𐡀𐡌𐡓 𐡐𐡉𐡉𐡏 𐡁𐡓 𐡐𐡇𐡉 𐡀𐡓𐡃𐡉𐡊𐡋 𐡋𐡎𐡅𐡍 𐡁𐡉𐡓𐡕𐡀 𐡋𐡌𐡁𐡈𐡇𐡉𐡄 𐡁𐡓𐡕 𐡌𐡇𐡎𐡉𐡄 𐡓𐡁 𐡉𐡃𐡍𐡉𐡀 𐡀𐡓𐡌𐡉𐡀 𐡆𐡉 𐡎𐡅𐡍 𐡋𐡃𐡂𐡋 𐡅𐡓𐡉𐡆𐡕 𐡏𐡋 𐡃𐡉𐡍𐡀 𐡆𐡉 𐡏𐡁𐡃𐡍 𐡍𐡐𐡃𐡕 𐡀𐡋 𐡊𐡎𐡐"
	template.blocklocation= 'armi'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'armi'
	template.scriptcode = 'Armi'
	template.fontLocale = "armi"
	template.hints = true



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Aramaic text to a latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Make<br/>vocab", "alt":"Expand to create a line for a vocab file.", "code":`_output=document.getElementById('output'); 
input=replaceSlash(getHighlightedText(_output),'|').split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

term = input[0];
meaning = input[1];
ipa = input[2]? input[2] : '';
alt = input[3]? input[3] : '';
notes = input[4]? input[4] : '';

add(getVocabWithAlt(term, meaning, ipa, notes, alt));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},
]



var pulldown = [
//{"title":"Trans-<br/>scribe", "alt":"Convert hindi text to a latin transcription.", "code":"doTranscription('transcription')"},
//{"title":"Hindi<br/>to ISO", "alt":"Convert hindi text to a ISO 15919 transcription.", "code":"doTranscription('toISO15919')"},
//{"title":"ISO to<br/>Hindi", "alt":"Convert an ISO 15919 transcription to hindi text.", "code":"doTranscription('toDeva')"}

{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Aramaic text.", "code":"doTranscription('revTransliterate')"},

{"title":"Vocab to<br>Markup", "alt":"Convert a vocab sequence to example markup.", "code":"vocab2Markup(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Aramaic from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Aramaic from the keyboard via reverse transliteration."},

//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
