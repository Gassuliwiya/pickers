var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Buginese WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "32";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "150"; // px height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'bug' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Buginese WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u00A0";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours
	factoryDefaults.hints = "none" // type of hint to show alongside characters in the grids


var thisPicker = 'buginesePicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
 
var webFonts = [ "Noto Sans Buginese WF" ]


var template = {}
	template.title = 'Buginese character app'
	template.sample = "ᨔᨗᨊᨗᨊ ᨑᨘᨄ ᨈᨕᨘ ᨑᨗ ᨍᨍᨗᨕᨂᨗ ᨑᨗᨒᨗᨊᨚᨕᨙ ᨊᨄᨘᨊᨕᨗ ᨆᨊᨙᨂᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨒᨙᨅᨗᨑᨙ᨞"
	template.blocklocation= 'buginese'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script
	template.github = 'bugi'
	template.scriptcode = 'Bugi'
	template.fontLocale = 'bugi'
	template.hints = true

// ᨔᨗᨔᨗᨊᨗᨊ ᨑᨘᨄ ᨈᨕᨘ ᨑᨗ ᨍᨍᨗᨕᨂᨗ ᨑᨗᨒᨗᨊᨚᨕᨙ ᨊᨄᨘᨊᨕᨗ ᨆᨊᨙᨂᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨒᨙᨅᨗᨑᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨀᨒᨙ᨞ ᨊᨄᨘᨊᨕᨗ ᨑᨗᨕᨔᨙᨂᨙ ᨕᨈᨗ ᨆᨑᨙᨊᨗ ᨊ ᨔᨗᨅᨚᨒᨙ ᨅᨚᨒᨙᨊ ᨄᨉ ᨔᨗᨄᨀᨈᨕᨘ ᨄᨉ ᨆᨔᨒᨔᨘᨑᨙ᨞ 



var controls = [
{"title":"Trans-<br/>literate", "alt":"Convert Buginese text to a one-to-one Latin transliteration.", "code":"doTranscription('transliterate')"},
]



var pulldown = [
{"title":"Reverse<br/>transliterate", "alt":"Convert a Latin transliteration to Buginese text.", "code":"doTranscription('revTransliterate')", "warning":"The Latin text must follow the transliteration scheme developed for this app."},

{"title":"Buginese<br/>to Latin", "alt":"Convert Buginese text to a Latin transcription.", "code":"doTranscription('toLatin')"},
]


var inputAids = [
//{"title":"Shape-based lookup", "dataVar":"showShapeLookup", "dataLocn":"shapelist", "dataShortTitle":"S", "type":"shape", "desc":"Click on a panel of shapes to find similar characters."},

//{"title":"Hint at similar shapes", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H", "type":"hint", "desc":"Show similar shapes as you mouse over a character."},

{"title":"Type assist", "dataVar":"typeAssist", "dataLocn":"transcriptionPalette", "dataShortTitle":"T", "type":"palette", "initialCode":"setUpTypeAssist(false, '', typeAssistMap)", "desc":"Use ASCII characters to type Buginese from the keyboard."},

{"title":"Latin type-assist", "dataVar":"showLatinTrans", "dataLocn":"transcriptionPalette", "dataShortTitle":"L", "type":"palette", "initialCode":"setUpTypeAssist(true, latinTypeAssistMap, latinTypeAssistMap)", "desc":"Show characters needed for IPA or other transcriptions and transliterations."},

{"title":"Reverse transliteration", "dataVar":"showTranslit", "dataLocn":"transcriptionPalette", "dataShortTitle":"R", "type":"palette", "initialCode":"setUpTypeAssist(false, typeAssistMap, typeAssistMap)", "desc":"Use ASCII characters to type Buginese from the keyboard via reverse transliteration."},

{"title":"Keyboard", "dataVar":"showKeyboard", "dataLocn":"keyboard", "dataShortTitle":"K", "type":"keyboard", "desc":"Select characters from a keyboard layout."}
]




// this indicates which items are to be described in the help
// options include: intro,shape,hinting,typeAssist,latin,reverse & keyboard
var inputAidsHelp = 'showIntro,'
for (let i=0;i<inputAids.length;i++) {
	if (inputAids[i].dataVar) inputAidsHelp += ','+inputAids[i].dataVar
	}
