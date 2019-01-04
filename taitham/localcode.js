globals.showTranslit =  ''

function localInitialise () {

	}



var _h = {
'E01': ['E20', 'E24', 'E20'],
'E02': ['E0A', 'E0B', 'E03'],
'E04': ['E14', 'E28', 'E15', 'E05'],
'E06': ['E11', 'E21'],
'E08': ['E27', 'E25'],
'E0A': ['E02', 'E0B', 'E03'],
'E0C': ['E13', 'E0D'],
'E15': ['E05', 'E04', 'E14'],
'E0F': ['E0E'],
'E10': ['E23', 'E18'],
'E11': ['E06'],
'E16': ['E24', 'E20', 'E01', 'E26'],
'E17': ['E11'],
'E18': ['E23', 'E10'],
'E1B': ['E1A', 'E29'],
'E1C': ['E1E', 'E1D', 'E1F', 'E2C'],
'E1E': ['E1C', 'E1D', 'E1F', 'E2C'],
'E20': ['E16', 'E24', 'E01', 'E26'],
'E1A': ['E1B', 'E29'],
'E0E': ['E0F', 'E24', 'E26'],
'E14': ['E04', 'E28', 'E15'],
'E0B': ['E0A', 'E02', 'E03'],
'E28': ['E04', 'E14', 'E15'],
'E29': ['E1A'],
'E2A': ['E25', 'E09'],
'E1F': ['E1D', 'E1C', 'E1E', 'E2C'],
'E1D': ['E1F', 'E1C', 'E1E', 'E2C'],
'E2B': ['E17', 'E19'],
'E2E': ['E2D'],
'E25': ['E2A', 'E2FE25E2F'],
'E2C': ['E1D', 'E1F', 'E1C', 'E1E'],
'E23': ['E18', 'E10'],
'E0D': ['E13', 'E0C'],
'E27': ['E08', 'E07'],
'E2D': ['E2E'],
'E19': ['E21', 'E2B'],
'E13': ['E0C', 'E0D'],
'E21': ['E19', 'E17', 'E2B'],
'E07': ['E27'],
'E24': ['E26', 'E20', 'E16', 'E01'],
'E2F': ['E5A'],
'E5A': ['E2F'],
'E32': ['E45', 'E33'],
'E45': ['E32', 'E33'],
'E33': ['E32', 'E45', 'E4D'],
'E4D': ['E33'],
'E2FE25E2F': ['E2A', 'E25'],
'E05': ['E15'],
'E03': ['E02', 'E0B', 'E0A'],
'E26': ['E24', 'E20', 'E01', 'E16'],

end: {}
}


var keyboarddef = [
"§|1 ᩕ ᪁ ᪑|2 ᩏ ᪂ ᪒|3 ᩑ ᪃ ᪓|4 ᨽ ᪄ ᪔|5 ᨳ ᪅ ᪕|6 ᩩ ᩪ ᩐ|7 ᩧ ᪆ ᪖|8 ᨣ ᪇ ᪗|9 ᨲ ᪈ ᪘|0 ᨧ ᪉ ᪙|- ᨡ ᪀ ᪐|= ᨩ ᩛ",
"q ᪧ ᩭ|w ᪩ ᩲ|e ᩣᩴ ᩻|r ᨻ ᨰ ᩚ|t ᨵ ᩡ ᩹|y ᩫ ᩴ ᩸|u ᩦ ᩳ ᩷|i ᩁ ᨱ ᩺|o ᨶ ᪫ ᪪|p ᨿ ᨬ|[ ᨷ ᨮ|] ᩃ ᩓ ᩖ",
"a ᨼ ᩀ|s ᩉ ᨥ|d ᨠ ᨭ|f ᨯ ᩰ ᩒ|g ᩮ ᨫ|h ᩢ ᩶|j ᩠ ᩵ ᩆ|k ᩣ ᩤ ᩇ|l ᩈ ᩔ ᩞ|; ᩅ ᨪ|' ᨦ ᪨ ᩙ|\\ ᨤ ᩘ",
"`|z ᨹ (|x ᨸ )|c ᩯ ᨨ|v ᩋ ᩌ ᩬ|b ᩥ ᩿ ᩍ|n ᩨ ᩼ ᩎ|m ᨴ ?|, ᨾ ᩗ ᩜ|. ᩱ ᩊ ᩄ|/ ᨺ ᩖ ᩂ"
]




var justLatinMap = `
; ̲ ̆ ̃ ̇ ̄ ̽ ᷇ ˖ ͍ ̣ ̥ ̱
' ̥ ̱ ‘ ⁎ ′ ″ ˘ ˟ ˽ ː
[ ¹ ² ³ ⁴ ⁵ ⁶
? ʔ
a á ä ā aː aj aʲ äʲ
e ë ẹ eː ɛ ɛː
i ī ị ị̄ iː
o ò ö ō ọ oː ɔ ɔː ɔːj
u ū ụ ụ̄ uː ɯ ɯ̄ ɯː
c c̱ cʰ c̱ʰ
f f̱
h ẖ
] ʻ
k k̇ ḵ kʰ k̇ʰ ḵʰ
l l̆ ḷ̱ ḻ l̥ₔ lɛː lɯː
m m̽ m̱
n ṅ̽ ṇ̱ ṉ ṉ̃ ṉ̇ ṉ̇̽ ŋ ŋ̄ ɲ ŋ̄
p p̆ p̄ pʰ p̄ʰ ᵽ
r r̆ r̥ₔ rɯː
s ś ṣ ṡ̱
t ṭ ṯ ʨ tʰ ṭʰ ṭ̲ʰ ṯʰ
w w̱
x x
y ȳ
0 0̣
1 1̣
2 2̣
3 3̣
4 4̣
5 5̣
6 6̣
7 7̣
8 8̣
9 9̣
`



var translitCharacterMap = `
? ʔ̯ ᩋ
a a ᩡ á ᩢ ä ᩤ ā ᩣ aʲ ᩱ
e e ᩮ ẹ ᩑ ɛ ᩯ
i i ᩥ ī ᩦ ị ᩍ ị̄ ᩎ
o o ᩰ ọ ᩒ oʲ ᩭ ɔ ᩲ ɔ̂ ᩳ ɔ̈ ᩫ ɔ̱ ᩬ
u u ᩩ ū ᩏ ụ ᩏ ụ̄ ᩐ ɯ ᩧ ɯ̄ ᩨ
[ ¹ ᩵ ² ᩶
b b̯ ᨷ
c c ᨧ c̱ ᨩ
d d̯ ᨯ
f f ᨺ f̱ ᨼ
h h ᩉ ẖ ᩌ
k k ᨠ ḵ ᨣ
l l̆ ᩖ ḷ̱ ᩊ l̥ ᩄ ḻ ᩃ lₔ ᩓ
m m̽ ᩜ m̱ ᨾ
n ṇ̱ ᨱ ṉ ᨶ ɲ̱ ᨬ ŋ̊ ᩴ ŋ̽ ᩙ ŋ̣̽ ᩘ ŋ̱ ᨦ
p p ᨸ p̆ ᩚ p̄ ᨻ pʰ ᨹ p̄ʰ ᨽ ᵽ ᩛ
r r ᩁ r̆ ᩕ r̥ ᩂ
s s ᩈ S ᩔ ś ᩆ ŝ ᨨ ṣ ᩇ ŝ̱ ᨫ ṡ̱ ᨪ
t t ᨲ ṭ ᨭ ṯ ᨴ tʰ ᨳ ṭʰ ᨮ ṭ̲ʰ ᨰ ṯʰ ᨵ
w w̱ ᩅ
x x ᨡ ẋ ᨢ x̱ ᨥ ẋ̱ ᨤ
y y ᩀ ȳ ᨿ
; ˖ ᩠ ˟ ᩺ ˚ ᩼ ʻ ᩻ ˽ ᩿
0 0 ᪀ 0̣ ᪐
1 1 ᪁ 1̣ ᪑
2 2 ᪂ 2̣ ᪒
3 3 ᪃ 3̣ ᪓
4 4 ᪄ 4̣ ᪔
5 5 ᪅ 5̣ ᪕
6 6 ᪆ 6̣ ᪖
7 7 ᪇ 7̣ ᪗
8 8 ᪈ 8̣ ᪘
9 9 ᪉  9̣ ᪙
`







