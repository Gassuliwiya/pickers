globals.showTransPanel =  ''
globals.showShapeLookup =  ''


function localInitialise () {
	}



var _h = {

end: {}
}


var keyboarddef = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q ු ූ|w අ උ|e ැ ෑ ඇ|r ර ඍ|t එ ඔ ඓ|y හ ශ|u ම ඹ|i ස ෂ|o ද ධ|p ච ඡ|[ ඤ ඥ|] ; :",
"a ් ෟ ේ|s ි ී|d ා ෘ ආ|f ෙ ෆ ෛ|g ට ඨ|h ය ්‍ය|j ව ළු|k න ණ|l ක ඛ|; ත ථ|' . ,|\\ ්‍",
"` ්‍ර ර්‍|z ' \"|x ං ඞ|c ජ ඣ|v ඩ ඪ|b ඉ ඊ|n බ භ|m ප ඵ|, ල ළ|. ග ඝ|/"
]

var keyboardUC = [
"§|1|2|3|4|5|6|7|8|9|0|-|=",
"q|w|e|r|t උ|y|u|i|o|p|[|]",
"a ඒ ඌ ඖ|s|d ො ඎ ෲ|f|g|h|j|k|l|;|'|\\",
"`|z|x|c|v|b|n|m|,|.|/"
]


function event_toggleKbdShift () {
    if (this.classList.contains('shiftKeyOn')) {
        makeKeyboard(keyboarddef, keyboardLCGuide)
        }
    else makeKeyboard(keyboardUC, keyboardUCGuide)
    }


var justLatinMap = `
a ā aʲ aʷ aː æ ǣ æː ɑ
A ạ ạʲ ạʷ ạ̄ æ̣ ǣ̣
d ḍ ɖ ʤ 
e ē eː ə
E ẹ ẹ̄
h ʰ ḥ h̽ ɦ
i ī iː
I ị ị̄
j ǰɲ
k kʰ
l ḷ l̥ l̥̄
m ṃ ᵐb m̌b
n ñ ŋ ŋ̽ ṅ ṇ ɲ
N ⁿd ⁿɖ ⁿʤ ᵑɡ ňd ňg ňḍ n̆j nd͡ʒa
o ō oː ọ ọ̄
r riː ruː r̥ r̥̄
s ʃ ʃ̇ ś ṣ
t ṭ tʰ ʈ ʧ
u ū uː
U ụ ụ̄
v ʋ
x ˣ
§ 1̣ 2̣ 3̣ 4̣ 5̣ 6̣ 7̣ 8̣ 9̣
[ ¶
* ͓
`



var translitCharacterMap = `
a ā ා æ ැ ǣ ෑ aʲ ෛ aʷ ෞ
A ạ අ ạ̄ ආ æ̣ ඇ ǣ̣ ඈ ạʲ ඓ ạʷ ඖ
b b බ
B bʰ භ
c c ච
C cʰ ඡ
d d ද ʤ ජ ɖ ඩ
D dʰ ධ ʤʰ ඣ ɖʰ ඪ
e e ෙ ē ේ
E ẹ එ ẹ̄ ඒ
f f ෆ
g g ග
G gʰ ඝ
h h හ h̽ ◌ඃ
i i ි ī ී
I ị ඉ ị̄ ඊ
j ǰɲ ඥ
k k ක
K kʰ ඛ
l l ල ḷ ළ
L l̥ ඏ l̥̄ ඐ l̥ ෟ l̥̄ ෳ
m m ම
M ᵐb ඹ
n n ණ ŋ ඞ ɲ ඤ ṅ න ŋ̽ ◌ං
N ᵑɡ ඟ ⁿɖ ඬ ⁿd ඳ ⁿʤ ඦ ᵑǰ ඥ
o o ො ō ෝ
O ọ ඔ ọ̄ ඕ
p p ප
P pʰ ඵ
r r ර
R r̥ ඍ r̥̄ ඎ r̥ ෘ r̥̄ ෲ
s s ස ʃ ශ ʃ̇ ෂ
t t ත ʈ ට
T tʰ ථ ʈʰ ඨ
u u ු ū ූ
U ụ උ ụ̄ ඌ
v v ව
x ˣ ්
y y ය
§ {10} 𑇪 {20} 𑇫 {30} 𑇬 {40} 𑇭 {50} 𑇮 {60} 𑇯 {70} 𑇰 {80} 𑇱 {90} 𑇲 {100} 𑇳
0 0 ෦
1 1 ෧ 1̣ 𑇡
2 2 ෨ 2̣ 𑇢
3 3 ෩ 3̣ 𑇣
4 4 ෪ 4̣ 𑇤
5 5 ෫ 5̣ 𑇥
6 6 ෬ 6̣ 𑇦
7 7 ෭ 7̣ 𑇧
8 8 ෮ 8̣ 𑇨
9 9 ෯ 9̣ 𑇩
± {1000} 𑇴
| ¶ ෴
* ͓ ්‍
`



globals.showISOCharMap = ''

var isoCharacterMap = `
a ā ා æ ැ ǣ ෑ ai ෛ au ෞ au \u0DD9\u0DDF
A a අ ā ආ æ ඇ ǣ ඈ ai ඓ au ඖ
b b බ
B bh භ
c c ච
C ch ඡ
d d ද ḍ ඩ
D dh ධ ḍh ඪ
e e ෙ ē ේ ē \u0DD9\u0DCA
E e එ ē ඒ
f f ෆ
g g ග
G gh ඝ
h h හ h ◌ඃ
i i ි ī ී
I i ඉ ī ඊ
j j ජ jñ ඥ
J jh ඣ
k k ක
K kh ඛ
l l ල ḷ ළ
m m ම
M m̌b ඹ
n n න ṇ ණ ṅ ඞ ñ ඤ n ◌ං
N ňg ඟ ňḍ ඬ ňd ඳ n̆ja ඦ
o o ො ō ෝ o \u0DD9\u0DCF ō \u0DDC\u0DCA ō \u{DD9}\u{DCF}\u{DCA}
O o ඔ ō ඕ
p p ප
P ph ඵ
r r ර
s s ස ś ශ ṣ ෂ
t t ත ṭ ට
T th ථ ṭh ඨ
u u ු ū ූ
U u උ ū ඌ
v v ව
y y ය
0 0 ෦
1 1 ෧ 1 𑇡
2 2 ෨ 2 𑇢
3 3 ෩ 3 𑇣
4 4 ෪ 4 𑇤
5 5 ෫ 5 𑇥
6 6 ෬ 6 𑇦
7 7 ෭ 7 𑇧
8 8 ෮ 8 𑇨
9 9 ෯ 9 𑇩
[ ¶ ෴
* ͓ ්‍
x ˣ ්
`

