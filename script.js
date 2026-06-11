// Функция плавного скролла к разделам по ТЗ
function scrollToBlock(blockId) {
    const target = document.getElementById(blockId);
    if (!target) return;
    
    // Вычисляем отступ с учетом фиксированной липкой шапки (80px)
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// Логика кликов в меню
function menuLinkClick(blockId) {
    event.preventDefault();
    scrollToBlock(blockId);
    
    // Закрываем мобильное бургер-меню при клике
    const nav = document.getElementById('navLinks');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
}

// Переключение мобильного бургера
function toggleMobileMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// Обработка отправки формы партнеров по ТЗ
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('partnerName').value;
    const email = document.getElementById('partnerEmail').value;
    const company = document.getElementById('partnerCompany').value;
    const type = document.getElementById('participationType').value;

    // Валидация структуры email на фронтенде уже работает за счет type="email"
    if(name && email && company) {
        // Данные уходят (имитируем отправку на сервер организатора hello@zazhevo.ru)
        console.log("Заявка отправлена:", { name, email, company, type });
        
        // Показываем всплывающее окно об успехе по ТЗ
        document.getElementById('successModal').style.display = 'flex';
        
        // Сбрасываем форму
        document.getElementById('partnerForm').reset();
    }
}

// Функции модалки успеха
function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
}