import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://portfolyoni.com";
const SITE_NAME = "studYoni";

const seoByPath = {
  "/": {
    title: "פיתוח אתרים ומערכות WordPress בהתאמה אישית | studYoni",
    description:
      "פיתוח ובניית אתרי WordPress, מערכות מידע, פורטלים ופאנלים מותאמים בקוד, לצד שדרוג ותחזוקת אתרים לעסקים, מוסדות חינוך וארגונים.",
    schemaType: "WebPage",
  },

  "/about": {
    title: "אודות studYoni | פיתוח ובניית אתרים בהתאמה אישית",
    description:
      "יוני, מפתחת ובונה אתרים עם התמחות ב-WordPress ובפיתוח מותאם בקוד. אפיון, בנייה, שדרוג ותחזוקת אתרים ומערכות בליווי אישי.",
    schemaType: "AboutPage",
  },

  "/portfolio": {
    title: "תיק עבודות | אתרים, WooCommerce ומערכות מותאמות | studYoni",
    description:
      "פרויקטים נבחרים בפיתוח אתרים ומערכות: פאנלים מותאמים בקוד, אתרי למידה, חנויות WooCommerce, אתרי תדמית ושדרוג אתרים קיימים.",
    schemaType: "CollectionPage",
  },

  "/systems": {
    title: "פיתוח מערכות מידע ופאנלים מותאמים בקוד | studYoni",
    description:
      "דוגמאות למערכות מידע ופאנלים שפיתחתי בקוד: מעקב תלמידים, ניהול משימות, בדיקת מבחנים, דוחות, פילוח נתונים ופאנלים לצוותי הוראה והנהלה.",
    schemaType: "CollectionPage",
  },

  "/development-services": {
    title: "שירותי פיתוח, שדרוג ותחזוקת אתרים | studYoni",
    description:
      "פיתוח מותאם בקוד, שדרוג ותחזוקת אתרי WordPress, בניית דפי נחיתה, אתרי תדמית וחנויות WooCommerce בהתאמה לצורכי העסק או הארגון.",
    schemaType: "Service",
  },

  "/contact": {
    title: "יצירת קשר | studYoni פיתוח ובניית אתרים",
    description:
      "רוצה לבנות אתר, לשדרג מערכת קיימת או לפתח פתרון מותאם בקוד? אפשר ליצור קשר עם studYoni ולקבל ייעוץ והצעת מחיר.",
    schemaType: "ContactPage",
  },

  "/blog": {
    title: "מדריכי WordPress ו-WooCommerce | הבלוג של studYoni",
    description:
      "מדריכים וטיפים לניהול אתרי WordPress ו-WooCommerce, העלאת מוצרים, הגדרת משלוחים, סוגי אתרים וניהול עצמאי ונוח יותר של האתר.",
    schemaType: "Blog",
  },

  "/blog/website-types": {
    title: "סוגי אתרים: דף נחיתה, אתר תדמית וחנות | studYoni",
    description:
      "מה ההבדל בין דף נחיתה, אתר תדמית וחנות אונליין, ומה מתאים לעסק שלך? מדריך לבחירת סוג האתר לפי המטרות והצרכים של העסק.",
    schemaType: "TechArticle",
  },

  "/blog/woocommerce-add-product": {
    title: "איך להוסיף מוצר ל-WooCommerce | מדריך מלא | studYoni",
    description:
      "מדריך שלב אחר שלב להוספת מוצר לחנות WooCommerce, כולל תמונות, מחיר, מלאי, משלוח, מוצרים מקושרים ומוצרים עם וריאציות.",
    schemaType: "TechArticle",
  },

  "/blog/woocommerce-shipping": {
    title: "איך להגדיר משלוחים ב-WooCommerce | מדריך | studYoni",
    description:
      "מדריך להגדרת אזורי ושיטות משלוח ב-WooCommerce, כולל תעריף קבוע, איסוף מקומי ומשלוח חינם לפי סכום הזמנה.",
    schemaType: "TechArticle",
  },

  "/privacy": {
    title: "מדיניות פרטיות | studYoni",
    description:
      "מדיניות הפרטיות של studYoni: איסוף ושימוש במידע, אבטחת מידע, ספקי שירות וזכויות המשתמשים באתר.",
    schemaType: "WebPage",
  },
};

const defaultSEO = {
  title: "עמוד לא נמצא | studYoni",
  description: "העמוד המבוקש לא נמצא באתר studYoni.",
  schemaType: "WebPage",
  noindex: true,
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
  element.setAttribute("data-seo", "true");
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
  canonical.setAttribute("data-seo", "true");
}

function createSchema(seo, canonicalUrl) {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#yoni`,
    name: "יוני וינוגרד",
    url: SITE_URL,
    worksFor: {
      "@id": `${SITE_URL}/#business`,
    },
    knowsAbout: [
      "WordPress",
      "WooCommerce",
      "Web Development",
      "Custom Web Applications",
      "Information Systems",
      "Website Maintenance",
    ],
  };

  const business = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    founder: {
      "@id": `${SITE_URL}/#yoni`,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "he-IL",
    publisher: {
      "@id": `${SITE_URL}/#business`,
    },
  };

  let pageSchema;

  if (seo.schemaType === "TechArticle") {
    pageSchema = {
      "@type": "TechArticle",
      "@id": `${canonicalUrl}#article`,
      headline: seo.title.replace(" | studYoni", ""),
      description: seo.description,
      url: canonicalUrl,
      mainEntityOfPage: canonicalUrl,
      inLanguage: "he-IL",
      author: {
        "@id": `${SITE_URL}/#yoni`,
      },
      publisher: {
        "@id": `${SITE_URL}/#business`,
      },
    };
  } else if (seo.schemaType === "Service") {
    pageSchema = {
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: seo.title.replace(" | studYoni", ""),
      description: seo.description,
      url: canonicalUrl,
      provider: {
        "@id": `${SITE_URL}/#business`,
      },
      areaServed: {
        "@type": "Country",
        name: "Israel",
      },
    };
  } else {
    pageSchema = {
      "@type": seo.schemaType,
      "@id": `${canonicalUrl}#page`,
      url: canonicalUrl,
      name: seo.title,
      description: seo.description,
      inLanguage: "he-IL",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#business`,
      },
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [website, business, person, pageSchema],
  };
}

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const seo = seoByPath[pathname] || defaultSEO;

    const canonicalUrl =
      pathname === "/" ? SITE_URL + "/" : SITE_URL + pathname;

    document.documentElement.lang = "he";
    document.documentElement.dir = "rtl";

    document.title = seo.title;

    setMeta("name", "description", seo.description);
    setMeta(
      "name",
      "robots",
      seo.noindex ? "noindex,follow" : "index,follow"
    );

    setCanonical(canonicalUrl);

    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta(
      "property",
      "og:type",
      seo.schemaType === "TechArticle" ? "article" : "website"
    );
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "he_IL");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);

    const oldSchema = document.head.querySelector(
      'script[data-seo-schema="true"]'
    );

    if (oldSchema) {
      oldSchema.remove();
    }

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.setAttribute("data-seo-schema", "true");
    schemaScript.textContent = JSON.stringify(
      createSchema(seo, canonicalUrl)
    );

    document.head.appendChild(schemaScript);

    let readyMarker = document.head.querySelector(
      'meta[name="seo-prerender-ready"]'
    );

    if (!readyMarker) {
      readyMarker = document.createElement("meta");
      readyMarker.name = "seo-prerender-ready";
      document.head.appendChild(readyMarker);
    }

    readyMarker.content = pathname;
  }, [location.pathname]);

  return null;
}