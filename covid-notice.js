// COVID-19 Safety Notice Component

const safetyMeasures = {
    customerMeasures: [
        {
            category: "入店時",
            items: [
                "体調不良の方への自粛呼びかけあり",
                "店内に消毒液設置",
                "混雑時入店お断り"
            ]
        },
        {
            category: "客席へのご案内",
            items: [
                "テーブル毎に仕切りあり",
                "席毎に一定間隔あり" 
            ]
        },
        {
            category: "テーブル/カウンターサービス",
            items: [
                "オーダー時にお客様と一定間隔保持",
                "個室に換気設備あり"
            ]
        },
        {
            category: "会計処理",
            items: [
                "非接触型決済あり"
            ]
        },
        {
            category: "テイクアウトサービス",
            items: [
                "テイクアウト用待ちスペースあり"
            ]
        }
    ],
    staffMeasures: [
        "勤務時の検温",
        "マスク着用",
        "頻繁な手洗い"
    ],
    storeMeasures: [
        "換気設備の設置と換気",
        "多数の人が触れる箇所の消毒",
        "備品/卓上設置物の消毒"
    ]
};

// Create notice banner
const createNoticeBanner = () => {
    const banner = document.createElement('div');
    banner.classList.add('covid-notice-banner', 'fixed', 'bottom-0', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'z-50');
    
    banner.innerHTML = `
        <div class="container mx-auto px-4 py-3 flex items-center justify-between">
            <p class="text-sm">
                <span class="font-bold">感染症対策実施中</span>
                - 安心してご利用いただけます
            </p>
            <button class="text-sm text-primary hover:text-red-700 transition" onclick="showSafetyDetails()">
                詳しく見る →
            </button>
        </div>
    `;
    
    document.body.appendChild(banner);
};

// Create detailed modal
const createSafetyModal = () => {
    const modal = document.createElement('div');
    modal.id = 'safety-modal';
    modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'z-50', 'hidden');
    
    let measuresHtml = `
        <div class="bg-white rounded-lg max-w-3xl mx-auto mt-20 p-6">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-xl font-bold">感染症対策について</h3>
                <button onclick="closeSafetyModal()" class="text-gray-500 hover:text-gray-700">
                    ✕
                </button>
            </div>
            
            <div class="space-y-6">
    `;
    
    // Add customer measures
    measuresHtml += `
        <section>
            <h4 class="font-bold mb-3">お客様への取り組み</h4>
            <div class="space-y-4">
    `;
    
    safetyMeasures.customerMeasures.forEach(category => {
        measuresHtml += `
            <div>
                <h5 class="font-bold text-sm mb-2">[${category.category}]</h5>
                <ul class="list-disc list-inside space-y-1">
                    ${category.items.map(item => `<li class="text-sm">${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    measuresHtml += `
            </div>
        </section>
    `;
    
    // Add staff measures
    measuresHtml += `
        <section>
            <h4 class="font-bold mb-3">従業員の安全衛生管理</h4>
            <ul class="list-disc list-inside space-y-1">
                ${safetyMeasures.staffMeasures.map(item => `<li class="text-sm">${item}</li>`).join('')}
            </ul>
        </section>
    `;
    
    // Add store measures
    measuresHtml += `
        <section>
            <h4 class="font-bold mb-3">店舗の衛生管理</h4>
            <ul class="list-disc list-inside space-y-1">
                ${safetyMeasures.storeMeasures.map(item => `<li class="text-sm">${item}</li>`).join('')}
            </ul>
        </section>
    `;
    
    measuresHtml += `
            </div>
        </div>
    `;
    
    modal.innerHTML = measuresHtml;
    document.body.appendChild(modal);
};

// Show/Hide modal functions
window.showSafetyDetails = () => {
    document.getElementById('safety-modal').classList.remove('hidden');
};

window.closeSafetyModal = () => {
    document.getElementById('safety-modal').classList.add('hidden');
};

// Initialize notices
const initializeSafetyNotices = () => {
    createNoticeBanner();
    createSafetyModal();
};

export { initializeSafetyNotices };