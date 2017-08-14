var defaults = new Object
var factoryDefaults = new Object
	factoryDefaults.font = 'Noto Naskh Arabic WF'; // text area font name (a single font, no quotes)
	factoryDefaults.size = "50";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'ar' // language to use for examples
	factoryDefaults.blocklocation= '/scripts/arabic/block'  // blocklocation to use for examples
	factoryDefaults.uifont = 'Noto Naskh Arabic WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "40";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "◌";  // default base for combining characters
	factoryDefaults.direction = "rtl" // indicates whether this is a picker for a RTL script
	factoryDefaults.uidir = "rtl" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'arabicblockPicker'

if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
else  defaults = factoryDefaults
