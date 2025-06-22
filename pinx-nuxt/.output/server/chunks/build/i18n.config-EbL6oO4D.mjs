const locales$6 = { "it": "Italienisch", "en": "Englisch", "jp": "Japanisch", "fr": "Franz\xF6sisch", "de": "Deutsch", "es": "Spanisch" };
const sun_description$5 = "Die Sonne ist ein mittelgro\xDFer Stern, der sich im Zentrum unseres Sonnensystems befindet. Sie ist eine Quelle von Licht und W\xE4rme, die das Leben auf der Erde erm\xF6glicht. Haupts\xE4chlich aus Wasserstoff und Helium bestehend, erzeugt sie Energie durch Kernfusion. Ihre Masse und Gravitation halten die Planeten und andere Himmelsk\xF6rper in einer Umlaufbahn um sie.";
const de = {
  locales: locales$6,
  sun_description: sun_description$5
};
const locales$5 = { "en": "English", "es": "Spanish" };
const sun_description$4 = "The sun is a medium-sized star located at the center of our solar system. It is a source of light and heat that sustains life on Earth. Composed mainly of hydrogen and helium, it generates energy through nuclear fusion. Its mass and gravity keep the planets and other celestial bodies in orbit around it.";
const en = {
  locales: locales$5,
  sun_description: sun_description$4
};
const locales$4 = { "it": "Italiano", "en": "Ingl\xE9s", "jp": "Japon\xE9s", "fr": "Franc\xE9s", "de": "Alem\xE1n", "es": "Espa\xF1ol" };
const sun_description$3 = "El sol es una estrella de tama\xF1o medio ubicada en el centro de nuestro sistema solar. Es una fuente de luz y calor que sustenta la vida en la Tierra. Compuesto principalmente por hidr\xF3geno y helio, genera energ\xEDa a trav\xE9s de la fusi\xF3n nuclear. Su masa y gravedad mantienen en \xF3rbita a los planetas y otros cuerpos celestes en el sistema solar.";
const es = {
  locales: locales$4,
  sun_description: sun_description$3
};
const locales$3 = { "it": "Italien", "en": "Anglais", "jp": "Japonais", "fr": "Fran\xE7ais", "de": "Allemand", "es": "Espagnol" };
const sun_description$2 = "Le soleil est une \xE9toile de taille moyenne situ\xE9e au centre de notre syst\xE8me solaire. Il est une source de lumi\xE8re et de chaleur qui permet la vie sur Terre. Principalement compos\xE9 d'hydrog\xE8ne et d'h\xE9lium, il g\xE9n\xE8re de l'\xE9nergie par fusion nucl\xE9aire. Sa masse et sa gravit\xE9 maintiennent en orbite les plan\xE8tes et autres corps c\xE9lestes du syst\xE8me solaire.";
const fr = {
  locales: locales$3,
  sun_description: sun_description$2
};
const locales$2 = { "it": "Italiano", "en": "Inglese", "jp": "Giapponese", "fr": "Francese", "de": "Tedesco", "es": "Spagnolo" };
const sun_description$1 = "Il sole \xE8 una stella di dimensioni medie che si trova al centro del nostro sistema solare. \xC8 una sorgente di luce e calore che permette la vita sulla Terra. Composto principalmente da idrogeno e elio, genera energia attraverso la fusione nucleare. La sua massa e la sua gravit\xE0 mantengono in orbita i pianeti e gli altri corpi celesti nel sistema solare.";
const it = {
  locales: locales$2,
  sun_description: sun_description$1
};
const locales$1 = { "it": "\u30A4\u30BF\u30EA\u30A2\u8A9E (Italiago)", "en": "\u82F1\u8A9E (Eigo)", "jp": "\u65E5\u672C\u8A9E (Nihongo)", "fr": "\u30D5\u30E9\u30F3\u30B9\u8A9E (Furansugo)", "de": "\u30C9\u30A4\u30C4\u8A9E (Doitsugo)", "es": "\u30B9\u30DA\u30A4\u30F3\u8A9E (Supeingo)" };
const sun_description = "\u592A\u967D\u306F\u3001\u592A\u967D\u7CFB\u306E\u4E2D\u5FC3\u306B\u4F4D\u7F6E\u3059\u308B\u4E2D\u7A0B\u5EA6\u306E\u5927\u304D\u3055\u306E\u661F\u3067\u3059\u3002\u5730\u7403\u4E0A\u306E\u751F\u547D\u3092\u7DAD\u6301\u3059\u308B\u5149\u3068\u71B1\u306E\u6E90\u3067\u3059\u3002\u4E3B\u306B\u6C34\u7D20\u3068\u30D8\u30EA\u30A6\u30E0\u3067\u69CB\u6210\u3055\u308C\u3001\u6838\u878D\u5408\u306B\u3088\u3063\u3066\u30A8\u30CD\u30EB\u30AE\u30FC\u3092\u751F\u6210\u3057\u307E\u3059\u3002\u305D\u306E\u8CEA\u91CF\u3068\u91CD\u529B\u306B\u3088\u3063\u3066\u3001\u60D1\u661F\u3084\u4ED6\u306E\u5929\u4F53\u306F\u592A\u967D\u306E\u5468\u308A\u3092\u8ECC\u9053\u4E0A\u306B\u4FDD\u3061\u307E\u3059\u3002";
const jp = {
  locales: locales$1,
  sun_description
};
const locales = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  de,
  en,
  es,
  fr,
  it,
  jp
}, Symbol.toStringTag, { value: "Module" }));
function getI18NConf() {
  const localesEntries = Object.entries(locales);
  const messages = localesEntries.reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return acc;
  }, {});
  return {
    legacy: false,
    locale: "en",
    messages
  };
}
const i18n_config = () => getI18NConf();

export { i18n_config as default };
//# sourceMappingURL=i18n.config-EbL6oO4D.mjs.map
