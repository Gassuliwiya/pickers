var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Phoenician WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.4"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'phn' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Phoenician WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'phnxPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Phoenician WF" ]


var template = {}
	template.title = 'Phoenician character app'
	template.sample = "𐤀𐤍𐤊 𐤟 𐤌𐤔𐤏 𐤟 𐤁𐤍 𐤟 𐤊𐤌𐤔𐤌𐤋𐤊 𐤟 𐤌𐤋𐤊 𐤟 𐤌𐤀𐤁 𐤟 𐤄𐤃𐤉𐤁𐤍𐤉 | 𐤊𐤁𐤉 𐤟 𐤌𐤋𐤊 𐤟 𐤏𐤋 𐤟 𐤌𐤀𐤁 𐤟 𐤔𐤋𐤔𐤍 𐤟 𐤔𐤕 𐤟 𐤅𐤀𐤍𐤊 𐤟 𐤌𐤋𐤊𐤕𐤉 𐤟 𐤀𐤇𐤓 𐤟 𐤀𐤁𐤉 |"
	template.blocklocation= 'phnx'  // blocklocation to use for examples
	template.direction = "rtl" // indicates whether this is a picker for a RTL script
	template.github = 'phnx'
	template.scriptcode = 'Phnx'
	template.fontLocale = "phnx"



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Phoenician text to a latin transliteration.", "code":"doTranscription('transliterate')"},

{"title":"Make<br/>vocab", "alt":"Expand text to create a line for a vocab file.", "code":`_output=document.getElementById('output'); 
input=getHighlightedText(_output).split('|'); 
if (! hasHighlight(_output)) _output.value=''; 

ipa = input[2]? input[2] : ''; 
notes = input[3]? input[3] : ''; 

add(getVocab(input[0], input[1], notes, ipa));
vocab2Example(getHighlightedText(document.getElementById('output')));
_output.focus();`},
]



var pulldown = [
//{"title":"Trans-<br/>scribe", "alt":"Convert hindi text to a latin transcription.", "code":"doTranscription('transcription')"},
//{"title":"Hindi<br/>to ISO", "alt":"Convert hindi text to a ISO 15919 transcription.", "code":"doTranscription('toISO15919')"},
//{"title":"ISO to<br/>Hindi", "alt":"Convert an ISO 15919 transcription to hindi text.", "code":"doTranscription('toDeva')"}

{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Phoenician text.", "code":"doTranscription('revTransliterate')"},

{"title":"Vocab to<br>Example", "alt":"Convert a vocab sequence to example markup.", "code":"vocab2Example(getHighlightedText(document.getElementById('output')))"},
]



var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Phoenician from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Phoenician from the keyboard via reverse transliteration."},

//{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]
