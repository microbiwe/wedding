// Дата дедлайна подтверждения
const DEADLINE_DATE = new Date('2026-06-01T23:59:59').getTime();

// Проверка, не прошёл ли дедлайн
function isDeadlinePassed() {
    return new Date().getTime() > DEADLINE_DATE;
}

// Блокировка кнопки после дедлайна
function checkDeadline() {
    const rsvpButton = document.getElementById('rsvpButton');
    
    if (isDeadlinePassed()) {
        rsvpButton.textContent = 'Подтверждение закрыто';
        rsvpButton.disabled = true;
        rsvpButton.style.opacity = '0.5';
        rsvpButton.style.cursor = 'not-allowed';
        rsvpButton.style.borderColor = '#666';
        rsvpButton.style.color = '#666';
        rsvpButton.title = 'Приём подтверждений завершён 01.06.2026';
    }
}

// Обработчики модального окна
function initModal() {
    const rsvpButton = document.getElementById('rsvpButton');
    const modal = document.getElementById('rsvpModal');
    const closeBtn = document.getElementById('modalClose');
    const thanksOverlay = document.getElementById('thanksOverlay');
    const backBtn = document.getElementById('backToSite');
    const hiddenIframe = document.querySelector('iframe[name="hidden_iframe"]');
    const form = document.getElementById('weddingForm');
    
    // Открытие (только если дедлайн не прошёл)
    rsvpButton.addEventListener('click', () => {
        if (isDeadlinePassed()) {
            return; // Не открываем форму
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Закрытие по X
    closeBtn.addEventListener('click', closeModal);
    
    // Закрытие по клику вне формы
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Закрытие страницы "Спасибо"
    backBtn.addEventListener('click', () => {
        thanksOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Отслеживаем отправку формы через iframe
    if (hiddenIframe) {
        hiddenIframe.addEventListener('load', () => {
            saveGuestLocally();
            closeModal();
            thanksOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            form.reset();
        });
    }
    
    // Предотвращаем стандартную отправку
    form.addEventListener('submit', (e) => {
        if (isDeadlinePassed()) {
            e.preventDefault();
            alert('Приём подтверждений завершён 01.06.2026');
            return;
        }
        
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправка...';
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Отправить';
        }, 3000);
    });
}

// Сохранение локально
function saveGuestLocally() {
    const form = document.getElementById('weddingForm');
    const formData = new FormData(form);
    
    const guestData = {
        name: formData.get('name') || 'Не указано',
        email: formData.get('email') || 'Не указано',
        phone: formData.get('phone') || 'Не указано',
        guests: formData.get('guests') || 'Не указано',
        transfer: formData.get('transfer') || 'Не указано',
        food: formData.get('food') || 'Не указано',
        alcohol: formData.getAll('alcohol').join(', ') || 'Не указано',
        child: formData.get('child') || 'Не указано',
        message: formData.get('message') || 'Нет',
        date: new Date().toISOString()
    };
    
    let guests = JSON.parse(localStorage.getItem('weddingGuests') || '[]');
    guests.push(guestData);
    localStorage.setItem('weddingGuests', JSON.stringify(guests));
}

// Экспорт CSV
function exportGuestsList() {
    const guests = JSON.parse(localStorage.getItem('weddingGuests') || '[]');
    
    if (guests.length === 0) {
        alert('Пока нет подтверждений');
        return;
    }
    
    let csv = '\uFEFFИмя,Email,Телефон,Гостей,Трансфер,Еда,Алкоголь,Ребёнок,Пожелания,Дата\n';
    guests.forEach(g => {
        csv += `"${g.name}","${g.email}","${g.phone}","${g.guests}","${g.transfer}","${g.food}","${g.alcohol}","${g.child}","${g.message}","${g.date}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'список_гостей.csv';
    link.click();
}

// Горячая клавиша для экспорта (Ctrl+Shift+E)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault();
        const password = prompt('Введите пароль:');
        if (password === 'wedding2026') {
            exportGuestsList();
        }
    }
});

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    checkDeadline();
    initModal();
});
