// SEO and metadata configuration
const siteMeta = {
    title: "韓国居酒屋 古里屋 秋葉原店",
    description: "秋葉原駅徒歩1分！本場の韓国料理とお酒が楽しめる居酒屋。2時間飲み放題付コース2,900円〜。個室・お座敷でゆったりとお食事を。",
    keywords: "韓国料理,居酒屋,秋葉原,飲み放題,個室,チーズタッカルビ,サムギョプサル",
    ogImage: "https://cdn.r-corona.jp/prd.rb.r-corona.jp/assets/site_files/m8nukshu/20518301/2ejd_.png",
    twitterCard: "summary_large_image",
    canonicalUrl: "https://koriya-akiba.owst.jp/",
    address: "東京都千代田区神田佐久間町１-1-15 川初ビル4F",
    telephone: "03-3526-2338",
    openingHours: {
        weekday: "11:30-15:00, 17:00-23:00",
        weekend: "11:30-15:00, 17:00-23:00"
    },
    priceRange: "¥2,000 ~ ¥4,000",
    acceptsReservations: true,
    paymentAccepted: [
        "Cash",
        "Credit Card",
        "PayPay",
        "Electronic Money"
    ],
    languages: [
        "ja",
        "en",
        "ko",
        "zh-TW",
        "zh-CN"
    ]
};

// Schema.org structured data
const generateSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": siteMeta.title,
        "image": siteMeta.ogImage,
        "description": siteMeta.description,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteMeta.address,
            "addressLocality": "千代田区",
            "addressRegion": "東京都",
            "postalCode": "101-0025",
            "addressCountry": "JP"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 35.69772483019275,
            "longitude": 139.77187561525905
        },
        "telephone": siteMeta.telephone,
        "openingHours": [
            "Mo-Su " + siteMeta.openingHours.weekday
        ],
        "priceRange": siteMeta.priceRange,
        "servesCuisine": ["Korean", "Asian"],
        "acceptsReservations": siteMeta.acceptsReservations,
        "paymentAccepted": siteMeta.paymentAccepted.join(", ")
    };
};

// Apply metadata to document
const applyMetadata = () => {
    document.title = siteMeta.title;
    
    // Basic meta tags
    const metaTags = [
        { name: "description", content: siteMeta.description },
        { name: "keywords", content: siteMeta.keywords },
        { property: "og:title", content: siteMeta.title },
        { property: "og:description", content: siteMeta.description },
        { property: "og:image", content: siteMeta.ogImage },
        { property: "og:url", content: siteMeta.canonicalUrl },
        { name: "twitter:card", content: siteMeta.twitterCard }
    ];

    metaTags.forEach(tag => {
        const meta = document.createElement('meta');
        const key = Object.keys(tag)[0];
        meta.setAttribute(key, tag[key]);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
    });

    // Canonical URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = siteMeta.canonicalUrl;
    document.head.appendChild(canonical);

    // Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(generateSchema());
    document.head.appendChild(script);
};

export { siteMeta, applyMetadata };