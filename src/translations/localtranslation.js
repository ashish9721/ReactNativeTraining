// import * as RNLocalize from 'react-native-localize';
// import i18n from 'i18n-js';
// //@ts-ignore
// import en from '../translations./en.json';

// const translations = { en };

// const { languageTag } = RNLocalize.findBestAvailableLanguage(
//   Object.keys(translations)
// ) || { languageTag: 'en' };

// i18n.locale = languageTag;
// i18n.fallbacks = true;
// i18n.translations = translations;

// export default i18n;
import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";
import fr from "./fr"
import en from "./en";
import ar from "./ar"


const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  fr,
  ar
};

export default I18n;







// import React from "react";
// import * as RNLocalize from "react-native-localize";
// import i18n from "i18n-js";
// import memoize from "lodash.memoize"; // Use for caching/memoize for better performance

// import {
//   I18nManager,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View
// } from "react-native";
// const translationGetters = {
//     // lazy requires (metro bundler does not support symlinks)
//     ar: () => require("../translations/ar.json"),
//     en: () => require("../translations/en.json"),
//     fr: () => require("../translations/fr.json")
//   };
  
//   const translate = memoize(
//     (key, config) => i18n.t(key, config),
//     (key, config) => (config ? key + JSON.stringify(config) : key)
//   );
  
//   const setI18nConfig = () => {
//     // fallback if no available language fits
//     const fallback = { languageTag: "en", isRTL: false };
  
//     const { languageTag, isRTL } =
//       RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
//       fallback;
  
//     // clear translation cache
//     translate.cache.clear();
//     // update layout direction
//     I18nManager.forceRTL(isRTL);
//     // set i18n-js config
//     i18n.translations = { [languageTag]: translationGetters[languageTag]() };
//     i18n.locale = languageTag;
//   };

//   export default class Local extends React.Component {
//     constructor(props) {
//       super(props);
//       setI18nConfig(); // set initial config
//     }
  
//     componentDidMount() {
//       RNLocalize.addEventListener("change", this.handleLocalizationChange);
//     }
  
//     componentWillUnmount() {
//       RNLocalize.removeEventListener("change", this.handleLocalizationChange);
//     }
  
//     handleLocalizationChange = () => {
//       setI18nConfig();
//       this.forceUpdate();
//     };
//     translateTheString = (text ,callback)=>{
//            translate(text)
          
//     }

//      render() {
//         return (
//           <SafeAreaView style={styles.safeArea}>
//             <Text style={styles.value}>{translate("hello")}</Text>
//           </SafeAreaView>
//         );
//       }
//   }
//   const styles = StyleSheet.create({
//     safeArea: {
//       backgroundColor: "white",
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center"
//     },
//     value: {
//       fontSize: 18
//     }
//   });