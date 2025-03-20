// Global configuration for Koriya website

const config = {
    // Site information
    site: {
        name: "韓国居酒屋 古里屋 秋葉原店",
        nameKana: "かんこくいざかや こりや あきはばらてん",
        phone: "03-3526-2338",
        address: {
            postal: "101-0025",
            full: "東京都千代田区神田佐久間町１-1-15 川初ビル4F"
        },
        hours: {
            lunch: "11:30～15:00",
            dinner: "17:00～23:00",
            lastOrder: {
                food: "22:30",
                drinks: "22:30"
            }
        }
    },

    // Theme colors
    colors: {
        primary: "#B70000",
        secondary: "#333333",
        accent: "#940000",
        background: "#FFFFFF",
        text: {
            primary: "#333333",
            secondary: "#666666",
            light: "#999999"
        }
    },

    // Font settings
    fonts: {
        main: "'Yu Gothic', 'Noto Sans JP', sans-serif",
        sizes: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem"
        },
        weights: {
            normal: "400",
            medium: "500",
            bold: "700"
        }
    },

    // Animation settings
    animations: {
        duration: {
            fast: "150ms",
            normal: "300ms",
            slow: "500ms"
        },
        easing: {
            default: "cubic-bezier(0.4, 0, 0.2, 1)",
            in: "cubic-bezier(0.4, 0, 1, 1)",
            out: "cubic-bezier(0, 0, 0.2, 1)",
            "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
        }
    },

    // Breakpoints
    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
    },

    // API endpoints
    api: {
        reservation: "/api/reservation",
        takeout: "/api/takeout",
        contact: "/api/contact"
    },

    // Social media links
    social: {
        facebook: "https://www.facebook.com/share.php?u=https://koriya-akiba.owst.jp/",
        twitter: "https://twitter.com/intent/tweet?url=https://koriya-akiba.owst.jp/",
        instagram: "#"
    },

    // Google Maps
    maps: {
        apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
        center: {
            lat: 35.69772483019275,
            lng: 139.77187561525905
        },
        zoom: 17
    },

    // Menu prices
    prices: {
        lunch: {
            min: 501,
            max: 1000
        },
        dinner: {
            min: 2001,
            max: 3000
        }
    },

    // Feature flags
    features: {
        onlineReservation: true,
        takeout: true,
        delivery: false,
        englishSupport: false
    },

    // Image assets paths
    images: {
        logo: "https://cdn.r-corona.jp/prd.rb.r-corona.jp/assets/site_files/m8nukshu/20518263/vk5v_w140h140.jpg",
        hero: [
            "https://cdn.r-corona.jp/prd.rb.r-corona.jp/assets/site_files/m8nukshu/20518301/2ejd_.png",
            "https://cdn.r-corona.jp/prd.rb.r-corona.jp/assets/site_files/m8nukshu/20518303/cdgv_.jpg",
            "https://cdn.r-corona.jp/prd.rb.r-corona.jp/assets/site_files/m8nukshu/29310405/6n1b_.jpg",
            "https://cdn.r-corona.jp/prd.rb.r-corona.jp/assets/site_files/m8nukshu/29310414/2llq_.jpg"
        ]
    },

    // Default SEO settings
    seo: {
        title: "韓国居酒屋 古里屋 秋葉原店 - 本場韓国料理と飲み放題",
        description: "秋葉原駅徒歩1分の韓国料理店。チーズタッカルビやサムギョプサルなど本場の味をお楽しみください。個室・座敷あり。",
        keywords: ["韓国料理", "居酒屋", "秋葉原", "チーズタッカルビ", "飲み放題", "個室"]
    }
};

// Helper functions
const getImageUrl = (key) => {
    return config.images[key];
};

const getBreakpoint = (size) => {
    return config.breakpoints[size];
};

const getColor = (path) => {
    return path.split('.').reduce((obj, key) => obj[key], config.colors);
};

export { config, getImageUrl, getBreakpoint, getColor };