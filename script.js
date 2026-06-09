// ОГРОМНЫЙ ФУНКЦИОНАЛЬНЫЙ АССОРТИМЕНТ С КАРТИНКАМИ (24 ПОЗИЦИИ)
const menuProducts = [
    // === ГРИЛЬ & BBQ ===
    { id: 1, category: "grill", title: "Стейк «Прораб»", desc: "Премиальная мраморная говядина на мощном гриле.", price: 450, img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=400" },
    { id: 2, category: "grill", title: "Ребра «Арматурные»", desc: "Свиные ребрышки тактического копчения в соусе барбекю.", price: 520, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400" },
    { id: 3, category: "grill", title: "Колбаски «Индустриальные»", desc: "Шашлычные колбаски со специями и дымком.", price: 410, img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=400" },
    { id: 4, category: "grill", title: "Шашлык «Железобетонный»", desc: "Классический сочный свиной шашлык на углях с луком.", price: 380, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400" },

    // === БУРГЕРЫ ===
    { id: 5, category: "burgers", title: "Бургер «Фундаментальный»", desc: "Двойная котлета, сыр чеддер, авторский соус на черной булке.", price: 390, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400" },
    { id: 6, category: "burgers", title: "Чикен-Лофт Бургер", desc: "Куриное филе в хрустящей панировке, майонез, салат.", price: 320, img: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=400" },
    { id: 7, category: "burgers", title: "Мега-Бургер «Бетон»", desc: "Огромный трехэтажный бургер для истинных строителей.", price: 590, img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=400" },
    { id: 8, category: "burgers", title: "Острый «Калибр»", desc: "Огненный бургер с перцем халапеньо и соусом чили.", price: 360, img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400" },

    // === ПИЦЦА & ВЫПЕЧКА ===
    { id: 9, category: "pizza", title: "Пицца «Кирпич-Пепперони»", desc: "Острая колбаса пепперони, много моцареллы, томатный соус.", price: 490, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400" },
    { id: 10, category: "pizza", title: "Пицца «4 Металла»", desc: "Четыре изысканных сыра на тонком хрустящем тесте.", price: 510, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400" },
    { id: 11, category: "pizza", title: "Пицца «Мастерок»", desc: "Домашняя пицца с ветчиной, грибами и зеленью.", price: 460, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=400" },
    { id: 12, category: "pizza", title: "Чесночный багет ДТС", desc: "Свежевыпеченный багет с ароматным чесночным маслом.", price: 140, img: "https://images.unsplash.com/photo-1619531029760-af969e6947e3?auto=format&fit=crop&q=80&w=400" },

    // === ДЕСЕРТЫ ===
    { id: 13, category: "desserts", title: "Пончик «Монтажная пена»", desc: "Нежный донат со сливочной глазурью и посыпкой.", price: 110, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400" },
    { id: 14, category: "desserts", title: "Торт «Шоколадный Уровень»", desc: "Многослойный шоколадный бисквит с насыщенным кремом.", price: 210, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" },
    { id: 15, category: "desserts", title: "Чизкейк «Шпаклевка»", desc: "Классический нью-йоркский нежный творожный десерт.", price: 190, img: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=400" },
    { id: 16, category: "desserts", title: "Вафли «Опалубка»", desc: "Бельгийские рифленые вафли с карамельным топпингом.", price: 160, img: "https://images.unsplash.com/photo-1562376502-6f769499c886?auto=format&fit=crop&q=80&w=400" },

    // === НАПИТКИ ===
    { id: 17, category: "drinks", title: "Лимонад «Энергетик ДТС»", desc: "Бодрящий газированный цитрусовый микс.", price: 150, img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=400" },
    { id: 18, category: "drinks", title: "Холодный Кофе «Сварщик»", desc: "Тонизирующий айс-латте с карамельным сиропом.", price: 180, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400" },
    { id: 19, category: "drinks", title: "Крафтовый Квас ДТС", desc: "Натуральный резвый квас на ржаном хлебе.", price: 120, img: "https://images.unsplash.com/photo-1582234372134-2b91d40b3d10?auto=format&fit=crop&q=80&w=400" },
    { id: 20, category: "drinks", title: "Горячий Чай «Анкер»", desc: "Крепкий черный листовой чай с бергамотом и лимоном.", price: 90, img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=400" },
    
    // === ДОПОЛНИТЕЛЬНОЕ НАПОЛНЕНИЕ ===
    { id: 21, category: "street", title: "Лапша WOK «Сварка»", desc: "Острая пшеничная лапша с овощами и курицей.", price: 350, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=400" },
    { id: 22, category: "pizza", title: "Мини-пицца «Детская»", desc: "Сырная пицца небольшого диаметра с сосисками.", price: 250, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400" },
    { id: 23, category: "desserts", title: "Круассан Французский", desc: "Слоеная воздушная выпечка с начинкой из сгущенки.", price: 130, img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400" },
    { id: 24, category: "grill", title: "Овощи на гриле ДТС", desc: "Болгарский перец, баклажаны и томаты с соусом песто.", price: 290, img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=400" }
];

let cart = [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let discountValue = 0;

window.onload = function() {
    renderMenu('all');
    updateAuthUI();
    updateCartUI();
    renderAccountData();
    renderReviews();
    navigateTo('hero');
};

function navigateTo(pageId) {
    const sections = ['hero', 'timer-module', 'menu-section', 'map', 'interesting', 'booking', 'reviews-section', 'account-section'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === pageId) ? 'block' : 'none';
    });

    if (pageId === 'hero') {
        ['timer-module', 'map', 'interesting', 'booking', 'reviews-section'].forEach(id => {
            document.getElementById(id).style.display = 'block';
        });
    }

    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if (pageId === 'hero') document.getElementById('nav-hero').classList.add('active');
    if (pageId === 'menu-section') document.getElementById('nav-menu').classList.add('active');
    if (pageId === 'map') document.getElementById('nav-map').classList.add('active');
    if (pageId === 'reviews-section') document.getElementById('nav-reviews').classList.add('active');
    if (pageId === 'account-section' && document.getElementById('nav-account')) document.getElementById('nav-account').classList.add('active');
    window.scrollTo(0, 0);
}

document.getElementById('nav-hero').onclick = function(e) { e.preventDefault(); navigateTo('hero'); };
document.getElementById('nav-menu').onclick = function(e) { e.preventDefault(); navigateTo('menu-section'); };
document.getElementById('nav-map').onclick = function(e) { e.preventDefault(); navigateTo('map'); };
document.getElementById('nav-reviews').onclick = function(e) { e.preventDefault(); navigateTo('reviews-section'); };
document.getElementById('nav-account').onclick = function(e) { e.preventDefault(); navigateTo('account-section'); };

function renderMenu(category) {
    const grid = document.getElementById('menuGrid');
    if (!grid) return; grid.innerHTML = '';
    const filtered = menuProducts.filter(p => category === 'all' || p.category === category);
    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="truck-card">
                <div style="height: 170px; overflow: hidden; background:#f1f3f4;">
                    <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.title}">
                </div>
                <div class="truck-content">
                    <h3>${p.title}</h3>
                    <p class="truck-desc">${p.desc}</p>
                    <div class="truck-footer"><span class="price">${p.price} ₽</span><button class="btn-card-action" onclick="addToCart(${p.id})">В корзину</button></div>
                </div>
            </div>`;
    });
}

function filterCategory(category, event) {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active')); event.target.classList.add('active');
    renderMenu(category);
}

function toggleCart() { document.getElementById('cartSidebar').classList.toggle('active'); }
function addToCart(productId) { cart.push(menuProducts.find(p => p.id === productId)); updateCartUI(); }

function updateCartUI() {
    document.getElementById('cartCount').innerText = cart.length;
    const itemsContainer = document.getElementById('cartItems');
    if(!itemsContainer) return; itemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => { total += item.price; itemsContainer.innerHTML += `<div class="cart-item"><div><strong>${item.title}</strong><p>${item.price} ₽</p></div><button onclick="removeFromCart(${idx})" style="background:none; border:none; color:var(--primary-red); cursor:pointer;">&times;</button></div>`; });
    
    const timeText = document.getElementById('estimatedTimeText');
    if (cart.length === 0) { timeText.innerText = "Корзина пуста"; } 
    else { const minTime = 15 + (cart.length * 4); const maxTime = 25 + (cart.length * 4); timeText.innerText = `Время ожидания: ${minTime}-${maxTime} мин.`; }

    let finalSum = total - (total * (discountValue / 100));
    document.getElementById('cartTotalSum').innerText = Math.round(finalSum) + ' ₽';
}

function removeFromCart(index) { cart.splice(index, 1); updateCartUI(); }

function applyPromo() {
    const code = document.getElementById('promoInput').value.trim().toUpperCase();
    const msg = document.getElementById('promoStatusMessage');
    msg.style.display = 'block';
    if (code === 'DTS2026' || code === 'FOODFEST') {
        discountValue = 15; msg.style.color = 'green'; msg.innerText = 'Промокод применен: Скидка 15%';
    } else {
        discountValue = 0; msg.style.color = 'var(--primary-red)'; msg.innerText = 'Неверный промокод!';
    }
    updateCartUI();
}

function checkoutOrder() {
    if (cart.length === 0) { alert('Корзина пуста!'); return; }
    if (!currentUser) { alert('Необходимо войти в аккаунт!'); toggleAuthModal(); toggleCart(); return; }
    const street = document.getElementById('deliveryStreet').value;
    const payment = document.getElementById('paymentType').value;
    const orderNumber = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    const totalSum = document.getElementById('cartTotalSum').innerText;

    const newOrder = { id: orderNumber, itemsCount: cart.length, sum: totalSum, date: new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}), street: street, payment: payment };
    let userOrders = JSON.parse(localStorage.getItem(`orders_${currentUser.email}`)) || [];
    userOrders.push(newOrder); localStorage.setItem(`orders_${currentUser.email}`, JSON.stringify(userOrders));

    alert(`Заказ ${orderNumber} успешно оформлен!`);
    cart = []; discountValue = 0; document.getElementById('promoInput').value = ''; document.getElementById('promoStatusMessage').style.display = 'none';
    updateCartUI(); toggleCart(); renderAccountData(); navigateTo('account-section');
}

function addReview(e) {
    e.preventDefault();
    const author = document.getElementById('reviewAuthor').value;
    const rating = document.getElementById('reviewRating').value;
    const text = document.getElementById('reviewText').value;
    let reviews = JSON.parse(localStorage.getItem('dts_reviews')) || [];
    reviews.unshift({ author, rating, text, date: new Date().toLocaleDateString() });
    localStorage.setItem('dts_reviews', JSON.stringify(reviews));
    document.getElementById('reviewForm').reset();
    renderReviews();
}

function renderReviews() {
    const list = document.getElementById('reviewsList');
    if(!list) return;
    let reviews = JSON.parse(localStorage.getItem('dts_reviews')) || [
        { author: "Алексей (Декан)", rating: "5", text: "Отличный интерфейс! Очень сочно, и корзина работает как реальный сервис.", date: "06.06.2026" },
        { author: "Владимир", rating: "5", text: "Промокод сработал, скидка 15% посчиталась правильно.", date: "05.06.2026" }
    ];
    list.innerHTML = '';
    reviews.forEach(r => {
        let stars = '⭐'.repeat(parseInt(r.rating));
        list.innerHTML += `<div class="review-item"><div class="review-meta"><span>${r.author}</span><span style="color:var(--primary-red)">${stars}</span></div><p style="font-size:0.9rem; color:var(--text-black);">${r.text}</p><p style="font-size:0.75rem; color:var(--text-muted); margin-top:6px; text-align:right;">${r.date}</p></div>`;
    });
}

function openModal(modalId) { const m = document.getElementById(modalId); if (m) m.style.display = 'flex'; }
// Переименовали, чтобы избежать конфликтов имен в глобальной области видимости
function closeModal(modalId) { const m = document.getElementById(modalId); if (m) m.style.display = 'none'; }
function toggleAuthModal() { openModal('loginModal'); }
function openRegisterFromLogin(e) { e.preventDefault(); closeModal('loginModal'); openModal('registerModal'); }
function openLoginFromRegister(e) { e.preventDefault(); closeModal('registerModal'); openModal('loginModal'); }

function register(e) {
    e.preventDefault(); const name = document.getElementById('regName').value; const email = document.getElementById('regEmail').value.toLowerCase(); const password = document.getElementById('regPassword').value;
    let base = JSON.parse(localStorage.getItem('dts_users_base')) || [];
    if (base.some(u => u.email === email)) { alert('Почта занята!'); return; }
    base.push({ name, email, password }); localStorage.setItem('dts_users_base', JSON.stringify(base));
    alert('Аккаунт создан!'); document.getElementById('registerForm').reset(); closeModal('registerModal'); openModal('loginModal'); document.getElementById('authEmail').value = email;
}

function login(e) {
    e.preventDefault(); const email = document.getElementById('authEmail').value.toLowerCase(); const password = document.getElementById('authPassword').value;
    if (email === 'admin@dts.ru' && password === '123456') { currentUser = { name: 'Администратор', email }; } 
    else {
        let base = JSON.parse(localStorage.getItem('dts_users_base')) || [];
        const u = base.find(x => x.email === email && x.password === password);
        if (!u) { alert('Ошибка входа!'); return; } currentUser = { name: u.name, email: u.email };
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser)); closeModal('loginModal'); updateAuthUI(); renderAccountData(); navigateTo('account-section');
}

function logout() { localStorage.removeItem('currentUser'); currentUser = null; updateAuthUI(); navigateTo('hero'); }
function updateAuthUI() {
    const btn = document.getElementById('authBtn'); const nav = document.getElementById('nav-account');
    if (currentUser) { btn.innerText = 'Выйти'; if(nav) nav.style.display = 'block'; } 
    else { btn.innerText = 'Войти'; if(nav) nav.style.display = 'none'; }
}

function renderAccountData() {
    if (!currentUser) return;
    document.getElementById('profileName').innerText = currentUser.name.toUpperCase(); document.getElementById('profileEmail').innerText = currentUser.email;
    const oList = document.getElementById('ordersList'); let orders = JSON.parse(localStorage.getItem(`orders_${currentUser.email}`)) || [];
    if(orders.length === 0) { oList.innerHTML = '<p class="text-muted">Заказов нет.</p>'; } 
    else { oList.innerHTML = ''; orders.forEach(o => { oList.innerHTML += `<div class="order-item-history"><div><strong>Заказ #${o.id}</strong><p style="font-size:0.75rem; color:var(--text-muted);">Адрес: ${o.street} | Оплата: ${o.payment}</p></div><span class="price" style="color:var(--primary-red); font-size:1.1rem;">${o.sum}</span></div>`; }); }
    
    const tList = document.getElementById('userTicketsList'); let tix = JSON.parse(localStorage.getItem(`tickets_${currentUser.email}`)) || [];
    if(tix.length === 0) { tList.innerHTML = '<p class="text-muted">Билетов нет.</p>'; } 
    else { tList.innerHTML = ''; tix.forEach(t => { tList.innerHTML += `<div class="order-item-history" style="border-left: 4px solid var(--primary-red);"><div><strong>Билет ${t.number}</strong><p style="font-size:0.8rem; color:var(--text-muted);">Зона: ${t.type}</p></div><span style="font-size:0.85rem; font-weight:700; background:#e8eaed; padding:4px 10px; border-radius:8px;">Активен</span></div>`; }); }
}

function generateTicket(e) {
    e.preventDefault(); const name = document.getElementById('userName').value; const email = document.getElementById('userEmail').value.toLowerCase(); const type = document.getElementById('ticketType').value; const ticketNumber = 'DTS-' + Math.floor(100000 + Math.random() * 900000);
    if(!currentUser || currentUser.email !== email) { currentUser = { name, email }; localStorage.setItem('currentUser', JSON.stringify(currentUser)); updateAuthUI(); }
    let tix = JSON.parse(localStorage.getItem(`tickets_${currentUser.email}`)) || []; tix.push({ number: ticketNumber, type }); localStorage.setItem(`tickets_${currentUser.email}`, JSON.stringify(tix));
    document.getElementById('ticketResult').innerHTML = `<div class="live-ticket"><div class="ticket-header"><strong>DTS FoodFest</strong><span class="ticket-type-badge">${type}</span></div><div class="ticket-body"><p>Владелец</p><h4>${name}</h4></div><div class="ticket-footer-live"><div><p>Билет №</p><strong>${ticketNumber}</strong></div><div class="qr-mock"></div></div></div>`;
    renderAccountData();
}

// ТАЙМЕР И КАРТА
const targetDate = new Date("Aug 1, 2026 00:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime(); const diff = targetDate - now;
    if (diff < 0) { document.getElementById('countdown').innerHTML = "<h3>ФЕСТИВАЛЬ ОТКРЫТ!</h3>"; return; }
    const d = Math.floor(diff / (1000*60*60*24)); const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60)); const m = Math.floor((diff % (1000*60*60)) / (1000*60)); const s = Math.floor((diff % (1000*60)) / 1000);
    document.getElementById('days').innerText = d<10?'0'+d:d; document.getElementById('hours').innerText = h<10?'0'+h:h; document.getElementById('minutes').innerText = m<10?'0'+m:m; document.getElementById('seconds').innerText = s<10?'0'+s:s;
}
setInterval(updateCountdown, 1000); updateCountdown();

const zonesData = {
    stage: { materials: "Металлоконструкции, Профнастил С8 ДТС", title: "Главная сцена DTS Stage", desc: "Центральная точка фестиваля, собранная из прочных металлоконструкций компании Дальторгсервис." },
    food: { materials: "Пиломатериалы, Брус ДТС", title: "Гастрономическая Аллея", desc: "Длинный ряд деревянных фуд-кортов, построенных из качественного бруса от Дальторгсервис." },
    lounge: { materials: "Европоддоны, Террасная доска ДТС", title: "Лаунж-зона от Дальторгсервис", desc: "Зона отдыха, полностью оборудованная дизайнерской мебелью из паллет ДТС." }
};
function switchZone(key, el) {
    document.querySelectorAll('.zone-btn').forEach(b => b.classList.remove('active')); el.classList.add('active');
    const d = document.getElementById('zoneDetails'); const z = zonesData[key];
    d.innerHTML = `<div class="badge-materials">Материалы: ${z.materials}</div><h3>${z.title}</h3><p>${z.desc}</p>`;
}