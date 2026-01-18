"use strict";

// --- БЛОК ЗАХИСТУ ВІД КОПІЮВАННЯ ---

// Заборона правої кнопки миші (контекстного меню)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.warn("Security Alert: Context menu is disabled.");
});

// Заборона копіювання (Ctrl+C, Ctrl+U, Ctrl+S)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'C')) {
        e.preventDefault();
        alert("Security: Copying and source viewing is restricted.");
    }
});

// --- БЛОК АВТОМАТИЧНОГО ПЕРЕМИКАННЯ ---

// Через 30 секунд (30000 мс) перенаправляємо на головну
setTimeout(() => {
    // Перевіряємо, чи ми вже не на головній, щоб не перезавантажувати циклічно
    if (!window.location.href.includes("index.html")) {
        window.location.href = "index.html";
    }
}, 30000);

console.log("System Brain: Active. Protection and Autopilot engaged.");