* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background: #0a0a0a;
    color: #ffffff;
    line-height: 1.8;
    overflow-x: hidden;
}

.main-container {
    max-width: 800px;
    margin: 0 auto;
    background: #111111;
    min-height: 100vh;
}

/* ===== Hero Section ===== */
.hero-section {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
}

.hero-photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.main-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(0.6);
}

.photo-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%);
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 60px 30px;
    animation: fadeUp 2s ease-out;
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.names {
    font-family: 'Playfair Display', serif;
    font-size: 52px;
    font-weight: 400;
    font-style: italic;
    color: #ffffff;
    margin-bottom: 20px;
    letter-spacing: 3px;
    text-shadow: 0 0 40px rgba(255,255,255,0.3);
}

.hero-subtitle {
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #cccccc;
    margin-bottom: 15px;
}

.hero-date {
    font-size: 22px;
    font-weight: 300;
    color: #ffffff;
    letter-spacing: 2px;
}

/* ===== Text Sections ===== */
.text-block {
    padding: 80px 40px;
    text-align: center;
}

.text-block h2 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 30px;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
}

.text-block h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background: #ffffff;
    margin: 20px auto 0;
    opacity: 0.5;
}

.text-block p {
    font-size: 16px;
    font-weight: 300;
    color: #cccccc;
    max-width: 500px;
    margin: 0 auto 15px;
    line-height: 2;
}

.text-block p strong {
    color: #ffffff;
    font-weight: 500;
}

.text-small {
    font-size: 13px !important;
    opacity: 0.7;
    margin-top: 25px !important;
}

/* ===== CTA Block ===== */
.cta-block {
    margin-top: 40px;
}

.cta-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px !important;
    color: #ffffff !important;
    margin-bottom: 30px !important;
    letter-spacing: 2px;
}

/* ===== RSVP Button ===== */
.rsvp-button {
    background: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    padding: 16px 50px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 4px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.rsvp-button:hover {
    background: #ffffff;
    color: #000000;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255,255,255,0.2);
}

/* ===== Schedule ===== */
.schedule-item {
    display: flex;
    align-items: flex-start;
    gap: 25px;
    padding: 25px 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    text-align: left;
}

.schedule-time {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 400;
    color: #ffffff;
    min-width: 70px;
    padding-top: 2px;
}

.schedule-info {
    flex: 1;
}

.schedule-title {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 5px;
}

.schedule-place {
    font-size: 14px;
    font-weight: 400;
    color: #cccccc;
}

.schedule-address {
    font-size: 12px;
    color: #999999;
    font-weight: 300;
}

/* ===== Modal ===== */
.rsvp-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    z-index: 1000;
    justify-content: center;
    align-items: flex-start;
    overflow-y: auto;
}

.rsvp-modal.active {
    display: flex;
}

.modal-content {
    background: #1a1a1a;
    border: 1px solid #333;
    padding: 50px 40px;
    margin: 40px 0;
    max-width: 600px;
    width: 90%;
    position: relative;
    animation: modalIn 0.5s ease;
}

@keyframes modalIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 32px;
    cursor: pointer;
    color: #666;
    transition: color 0.3s;
    line-height: 1;
}

.modal-close:hover {
    color: #ffffff;
}

.modal-content h3 {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 15px;
    text-align: center;
}

.modal-subtitle {
    font-size: 13px;
    color: #999;
    text-align: center;
    margin-bottom: 35px;
    font-style: italic;
}

/* ===== Form ===== */
.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #999;
    margin-bottom: 10px;
    font-weight: 500;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid #333;
    color: #ffffff;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-bottom-color: #ffffff;
}

.form-group select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23999'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0 center;
    background-size: 16px;
    cursor: pointer;
}

.form-group select option {
    background: #1a1a1a;
    color: #ffffff;
}

.form-group textarea {
    resize: vertical;
    min-height: 80px;
}

/* Radio Group */
.radio-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.radio-group label {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #cccccc;
    cursor: pointer;
    text-transform: none;
    letter-spacing: 0;
    font-weight: 400;
    margin: 0;
}

.radio-group input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #555;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    flex-shrink: 0;
}

.radio-group input[type="radio"]:checked {
    border-color: #ffffff;
}

.radio-group input[type="radio"]:checked::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    background: #ffffff;
    border-radius: 50%;
}

/* Submit Button */
.submit-btn {
    width: 100%;
    padding: 16px;
    background: #ffffff;
    color: #000000;
    border: none;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 4px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    transition: all 0.3s;
    margin-top: 20px;
}

.submit-btn:hover {
    background: #cccccc;
    transform: translateY(-2px);
}

.submit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* ===== Thanks Overlay ===== */
.thanks-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.95);
    z-index: 2000;
    justify-content: center;
    align-items: center;
}

.thanks-overlay.active {
    display: flex;
}

.thanks-card {
    text-align: center;
    padding: 60px 40px;
    animation: modalIn 0.5s ease;
}

.thanks-icon {
    font-size: 60px;
    margin-bottom: 25px;
}

.thanks-card h2 {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    margin-bottom: 20px;
}

.thanks-card p {
    color: #cccccc;
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 35px;
}

.back-btn {
    background: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    padding: 14px 40px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    transition: all 0.3s;
}

.back-btn:hover {
    background: #ffffff;
    color: #000000;
}

/* ===== Divider ===== */
.divider {
    width: 40px;
    height: 1px;
    background: rgba(255,255,255,0.3);
    margin: 0 auto;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
    .names {
        font-size: 38px;
    }
    
    .hero-subtitle {
        font-size: 12px;
        letter-spacing: 3px;
    }
    
    .hero-date {
        font-size: 18px;
    }
    
    .text-block {
        padding: 60px 25px;
    }
    
    .text-block h2 {
        font-size: 28px;
    }
    
    .modal-content {
        padding: 35px 25px;
    }
    
    .schedule-item {
        gap: 15px;
    }
    
    .schedule-time {
        font-size: 20px;
        min-width: 55px;
    }
}
