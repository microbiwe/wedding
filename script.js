// URL вашего Google Apps Script веб-приложения
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxzwCCO3ssMG4fhk2yb7NZ5e36oiQR5x9kkid49vIUREEjKZq9xOv4l4qcxxx0ue2Zw/exec';

// Создание плавающих сердечек
function createHearts() {
    const container = document.getElementById('heartsContainer');
    const heartEmojis = ['❤️', '💕', '💗', '💖', '💝', '✨', '🕊️'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 500);
}

// Таймер обратного отсчета
function startCountdown() {
    const weddingDate = new Date('2025-07-15T16:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Отправка данных в Google Таблицу
async function sendToGoogleSheets(data) {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            redirect: 'follow'
        });
        
        return true;
    } catch (error) {
        console.error('Ошибка отправки в Google Sheets:', error);
        throw error;
    }
}

// Сохранение гостей локально
function saveGuestLocally(guestData) {
    let guests = JSON.parse(localStorage.getItem('weddingGuests') || '[]');
    guests.push({
        ...guestData,
        date: new Date().toISOString()
    });
    localStorage.setItem('weddingGuests', JSON.stringify(guests));
}

// Работа с формой
function handleRSVP() {
    const rsvpButton = document.querySelector('.rsvp-button');
    const formContainer = document.getElementById('rsvpForm');
    const closeButton = document.getElementById('closeForm');
    const form = document.getElementById('weddingForm');
    const thanksOverlay = document.getElementById('thanksOverlay');
    const backToSite = document.getElementById('backToSite');
    
    // Открытие формы
    rsvpButton.addEventListener('click', () => {
        formContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Закрытие формы
    function closeForm() {
        formContainer.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    closeButton.addEventListener('click', closeForm);
    formContainer.addEventListener('click', (e) => {
        if (e.target === formContainer) closeForm();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && formContainer.classList.contains('active')) {
            closeForm();
        }
    });
    
    // Закрытие страницы "Спасибо"
    backToSite.addEventListener('click', () => {
        thanksOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Отправка формы
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        // Собираем данные формы
        const selectedDrinks = [];
        document.querySelectorAll('input[name="drinks"]:checked').forEach(checkbox => {
            selectedDrinks.push(checkbox.value);
        });
        
        const guestData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            guests: document.querySelector('select[name="guests"]').value,
            drinks: selectedDrinks.join(', ') || 'Не указано',
            message: document.getElementById('message').value || 'Нет'
        };
        
        try {
            // Отправляем в Google Sheets
            await sendToGoogleSheets(guestData);
            
            // Сохраняем локально
            saveGuestLocally(guestData);
            
            // Закрываем форму
            closeForm();
            
            // Показываем страницу "Спасибо"
            thanksOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Очищаем форму
            form.reset();
            
            // Эффект конфетти
            createConfetti();
            
        } catch (error) {
            alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.');
            console.error('Ошибка:', error);
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

// Эффект конфетти
function createConfetti() {
    const colors = ['#f48fb1', '#f06292', '#ec407a', '#e91e63', '#c2185b'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '3000';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { 
                transform: 'translateY(0) rotate(0deg)',
                opacity: 1
            },
            { 
                transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`,
                opacity: 0
            }
        ], {
            duration: Math.random() * 2000 + 1000,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

// Экспорт списка гостей в CSV
function exportGuestsList() {
    const guests = JSON.parse(localStorage.getItem('weddingGuests') || '[]');
    
    if (guests.length === 0) {
        alert('Пока нет подтверждений');
        return;
    }
    
    let csv = '\uFEFFИмя,Email,Телефон,Гостей,Напитки,Пожелания,Дата\n';
    guests.forEach(guest => {
        csv += `"${guest.name}","${guest.email}","${guest.phone}","${guest.guests}","${guest.drinks || 'Не указано'}","${guest.message || ''}","${guest.date}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'список_гостей.csv';
    link.click();
}

// Плавная прокрутка
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Анимация появления при скролле
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.invitation-card, .detail-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
}

// Горячая клавиша для экспорта (Ctrl+Shift+E)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        const password = prompt('Введите пароль для экспорта списка гостей:');
        if (password === 'wedding2025') {
            exportGuestsList();
        }
    }
});

// Параллакс эффект для цветов
document.addEventListener('mousemove', (e) => {
    const flowers = document.querySelectorAll('.flower');
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    flowers.forEach((flower, index) => {
        const speed = (index + 1) * 20;
        flower.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
    });
});

// Инициализация всего
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    startCountdown();
    handleRSVP();
    initSmoothScroll();
    initScrollAnimations();
});
