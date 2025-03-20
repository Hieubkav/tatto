// Takeout Menu System

const takeoutMenu = {
    categories: [
        {
            id: "popular",
            name: "人気メニュー",
            items: [
                {
                    name: "チーズタッカルビ",
                    price: 3800,
                    description: "2時間飲み放題付き！たっぷりチーズの人気メニュー",
                    image: "https://cdn.r-corona.jp/prd.rb.r-corona.jp/assets/site_files/m8nukshu/20518471/gwb8_w500h500.jpg",
                    orderLimit: 10
                },
                {
                    name: "サムギョプサルセット",
                    price: 1580,
                    description: "1人前200g 野菜付き",
                    image: "https://cdn.r-corona.jp/prd.rb.r-corona.jp/assets/site_files/m8nukshu/20518481/gu12_w500h500.jpg",
                    orderLimit: 5
                }
            ]
        },
        {
            id: "main",
            name: "メイン料理",
            items: [
                {
                    name: "韓国風もつ鍋",
                    price: 2480,
                    description: "2人前〜",
                    image: "path-to-image.jpg",
                    orderLimit: 3
                }
            ]
        }
    ],
    orderingHours: {
        start: "11:30",
        end: "22:00",
        lastOrder: "21:30"
    },
    paymentMethods: [
        "現金",
        "クレジットカード",
        "電子マネー",
        "QRコード決済"
    ],
    pickupTimes: [
        "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
        "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
        "20:00", "20:30", "21:00", "21:30", "22:00"
    ]
};

// Create takeout menu UI
const createTakeoutMenu = () => {
    const container = document.createElement('div');
    container.classList.add('takeout-container', 'py-12');
    
    let html = `
        <div class="container mx-auto px-4">
            <h2 class="text-center mb-12">
                <span class="block text-3xl font-bold">TAKEOUT</span>
                <span class="text-sm text-gray-600">テイクアウト</span>
            </h2>

            <div class="max-w-4xl mx-auto">
                <!-- Ordering hours -->
                <div class="bg-red-50 rounded-lg p-6 mb-8">
                    <h3 class="font-bold mb-4">ご注文受付時間</h3>
                    <p class="text-sm">
                        ${takeoutMenu.orderingHours.start} 〜 ${takeoutMenu.orderingHours.end}
                        (ラストオーダー ${takeoutMenu.orderingHours.lastOrder})
                    </p>
                </div>

                <!-- Menu categories -->
                <div class="space-y-12">
    `;

    // Add each category
    takeoutMenu.categories.forEach(category => {
        html += `
            <section>
                <h3 class="text-xl font-bold mb-6">${category.name}</h3>
                <div class="grid md:grid-cols-2 gap-6">
        `;

        // Add items in category
        category.items.forEach(item => {
            html += `
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="aspect-w-16 aspect-h-9">
                        <img src="${item.image}" 
                             alt="${item.name}" 
                             class="w-full h-full object-cover">
                    </div>
                    <div class="p-4">
                        <h4 class="font-bold mb-2">${item.name}</h4>
                        <p class="text-primary font-bold mb-2">
                            ${item.price.toLocaleString()}円(税込)
                        </p>
                        <p class="text-sm text-gray-600 mb-4">
                            ${item.description}
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <button class="quantity-btn minus">-</button>
                                <input type="number" 
                                       min="0" 
                                       max="${item.orderLimit}" 
                                       value="0" 
                                       class="quantity-input">
                                <button class="quantity-btn plus">+</button>
                            </div>
                            <button class="add-to-cart-btn">
                                カートに入れる
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </section>
        `;
    });

    html += `
                </div>

                <!-- Payment methods -->
                <div class="mt-12 p-6 bg-gray-50 rounded-lg">
                    <h3 class="font-bold mb-4">お支払い方法</h3>
                    <ul class="list-disc list-inside text-sm">
                        ${takeoutMenu.paymentMethods.map(method => `
                            <li>${method}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
    return container;
};

// Handle quantity changes
const handleQuantityChange = (input, increment) => {
    let value = parseInt(input.value) + increment;
    const max = parseInt(input.max);
    value = Math.max(0, Math.min(value, max));
    input.value = value;
};

// Initialize takeout system
const initializeTakeout = () => {
    const menuContainer = createTakeoutMenu();
    document.getElementById('takeout-section').appendChild(menuContainer);

    // Add event listeners
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.parentElement.querySelector('.quantity-input');
            const increment = btn.classList.contains('plus') ? 1 : -1;
            handleQuantityChange(input, increment);
        });
    });
};

// Cart management
const cart = {
    items: [],
    
    addItem(item) {
        this.items.push(item);
        this.updateCartUI();
    },
    
    removeItem(index) {
        this.items.splice(index, 1);
        this.updateCartUI();
    },
    
    updateCartUI() {
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = this.items.length;
    }
};

export { initializeTakeout };