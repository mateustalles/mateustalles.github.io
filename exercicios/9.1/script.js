window.addEventListener("load", () => {
  let style = ""
  Object.keys(localStorage).forEach(key => style += ` ${key}: ${localStorage.getItem(key)};`)
  document.body.style = style
})

const fontListString = "Abadi MT Condensed Light, Aharoni, Aharoni Bold, Aldhabi, AlternateGothic2 BT, Andale Mono, Andalus, Angsana New, AngsanaUPC, Aparajita, Apple Chancery, Arabic Typesetting, Arial, Arial Black, Arial narrow, Arial Nova, Arial Rounded MT Bold, Arnoldboecklin, Avanta Garde, Bahnschrift, Bahnschrift Light, Bahnschrift SemiBold, Bahnschrift SemiLight, Baskerville, Batang, BatangChe, Big Caslon, BIZ UDGothic, BIZ UDMincho Medium, Blippo, Bodoni MT, Book Antiqua, Book Antiqua, Bookman, Bradley Hand, Browallia New, BrowalliaUPC, Brush Script MT, Brush Script Std, Brushstroke, Calibri, Calibri Light, Calisto MT, Cambodian, Cambria, Cambria Math, Candara, Century Gothic, Chalkduster, Cherokee, Comic Sans, Comic Sans MS, Consolas, Constantia, Copperplate, Copperplate Gothic Light, Copperplate Gothic Bold, Corbel, Cordia New, CordiaUPC, Coronetscript, Courier, Courier New, DaunPenh, David, DengXian, DFKai-SB, Didot, DilleniaUPC, DokChampa, Dotum, DotumChe, Ebrima, Estrangelo Edessa, EucrosiaUPC, Euphemia, FangSong, Florence, Franklin Gothic Medium, FrankRuehl, FreesiaUPC, Futara, Gabriola, Gadugi, Garamond, Gautami, Geneva, Georgia, Georgia Pro, Gill Sans, Gill Sans Nova, Gisha, Goudy Old Style, Gulim, GulimChe, Gungsuh, GungsuhChe, Hebrew, Hoefler Text, HoloLens MDL2 Assets, Impact, Ink Free, IrisUPC, Iskoola Pota, Japanese, JasmineUPC, Javanese Text, Jazz LET, KaiTi, Kalinga, Kartika, Khmer UI, KodchiangUPC, Kokila, Korean, Lao, Lao UI, Latha, Leelawadee, Leelawadee UI, Leelawadee UI Semilight, Levenim MT, LilyUPC, Lucida Bright, Lucida Console, Lucida Handwriting, Lucida Sans, Lucida Sans Typewriter, Lucida Sans Unicode, Lucidatypewriter, Luminari, Malgun Gothic, Malgun Gothic Semilight, Mangal, Marker Felt, Marlett, Meiryo, Meiryo UI, Microsoft Himalaya, Microsoft JhengHei, Microsoft JhengHei UI, Microsoft New Tai Lue, Microsoft PhagsPa, Microsoft Sans Serif, Microsoft Tai Le, Microsoft Uighur, Microsoft YaHei, Microsoft YaHei UI, Microsoft Yi Baiti, MingLiU, MingLiU_HKSCS, MingLiU_HKSCS-ExtB, MingLiU-ExtB, Miriam, Monaco, Mongolian Baiti, MoolBoran, MS Gothic, MS Mincho, MS PGothic, MS PMincho, MS UI Gothic, MV Boli, Myanmar Text, Narkisim, Neue Haas Grotesk Text Pro, New Century Schoolbook, News Gothic MT, Nirmala UI, No automatic language associations, Noto, NSimSun, Nyala, Oldtown, Optima, Palatino, Palatino Linotype, papyrus, Parkavenue, Perpetua, Plantagenet Cherokee, PMingLiU, Raavi, Rockwell, Rockwell Extra Bold, Rockwell Nova, Rockwell Nova Cond, Rockwell Nova Extra Bold, Rod, Sakkal Majalla, Sanskrit Text, Segoe MDL2 Assets, Segoe Print, Segoe Script, Segoe UI, Segoe UI Emoji, Segoe UI Historic, Segoe UI Symbol, Shonar Bangla, Shruti, SimHei, SimKai, Simplified Arabic, Simplified Chinese, SimSun, SimSun-ExtB, Sitka, Snell Roundhan, Stencil Std, Sylfaen, Symbol, Tahoma, Thai, Times New Roman, Traditional Arabic, Traditional Chinese, Trattatello, Trebuchet MS, Tunga, UD Digi Kyokasho, UD Digi KyoKasho NK-R, UD Digi KyoKasho NP-R, UD Digi KyoKasho N-R, Urdu Typesetting, URW Chancery, Utsaah, Vani, Verdana, Verdana Pro, Vijaya, Vrinda, Webdings, Westminster, Wingdings, Yu Gothic, Yu Gothic UI, Yu Mincho, Zapf Chancery"

const fontListArray = fontListString.split(", ")
const selectFontFamily = document.getElementById("font-family-list")

fontListArray.forEach(family => {
  const newFamily = document.createElement("option")
  newFamily.innerHTML = family
  newFamily.value = family
  selectFontFamily.appendChild(newFamily)
})

const documentBody = document.getElementsByTagName("body")
const fontFamilyChoose = document.getElementById('font-family-list')
fontFamilyChoose.addEventListener("change", (event) => {
  document.body.style.fontFamily = event.target.value
  localStorage.setItem('font-family', event.target.value)
})

const backgroundColor = document.getElementById('background-color')
backgroundColor.addEventListener("change", (event) => {
  document.body.style.backgroundColor = event.target.value
  localStorage.setItem('background-color', event.target.value)
})

const textColor = document.getElementById('text-color')
textColor.addEventListener("change", (event) => {
  document.body.style.color = event.target.value
  localStorage.setItem('color', event.target.value)
})

const textSize = document.getElementById('text-size')
textSize.addEventListener("change", (event) => {
  document.body.style.fontSize = `${event.target.value}px`
  localStorage.setItem('font-size', `${event.target.value}px`)
})

const lineHeight = document.getElementById('line-height')
lineHeight.addEventListener("change", (event) => {
  document.body.style.lineHeight = event.target.value
  localStorage.setItem('line-height', event.target.value)
})

const reset = document.getElementById('reset')
reset.addEventListener("click", () => localStorage.clear())
