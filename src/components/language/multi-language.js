import React, { useEffect } from "react";
import "./multi-language.css";

const Multilang = () => {
  // const googleTranslateElementInit = () => {
  //     new window.google.translate.TranslateElement(
  //         {
  //             pageLanguage: "en",
  //             autoDisplay: true,
  //             layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
  //         },
  //         "google_translate_element"
  //     );
  // };

  // useEffect(() => {
  //     const googleTranslateElementInit = () => {
  //       new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
  //     };
  //     // Create and append the script element
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  //     document.head.appendChild(script);
  //     // Cleanup: remove the script when the component is unmounted
  //     return () => {
  //       document.head.removeChild(script);
  //     };
  //   }, []);

  // useEffect(() => {
  //   const loadGoogleTranslateScript = () => {
  //     // Create and append the script element
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = '//translate.google.com/translate_a/element.js';
  //     script.async = true;
  //     script.onload = () => {
  //       setTimeout(() => {
  //         if (window.google && window.google.translate) {
  //           new window.google.translate.TranslateElement(
  //             { pagelanguage: 'en', autoDisplay: false, },
  //             'google_translate_element'
  //           );
  //         } else {
  //           console.error('Failed to load Google Translate.');
  //         }
  //       }, 1000); // Adjust the delay as needed
  //     };
  //     document.head.appendChild(script);
  //   };
  //   loadGoogleTranslateScript();
  //   // Cleanup: remove the script when the component is unmounted
  //   return () => {
  //     const script = document.querySelector('script[src="//translate.google.com/translate_a/element.js"]');
  //     if (script) {
  //       document.head.removeChild(script);
  //     }
  //   };
  // }, []);
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     { pageLanguage: "en" },
  //     "google_translate_element"
  //   );
  // };

  return (
    <div className="mylang">
      <div className="multi-language">
        <div id="google_translate_element"></div>
      </div>
    </div>
  );
};

export default Multilang;
