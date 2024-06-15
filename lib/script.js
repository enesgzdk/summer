document.addEventListener('DOMContentLoaded', (event) => {
    // Notlar Textarea içeriğini yükle
    const notesTextarea = document.getElementById('notesTextarea');
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notesTextarea.value = savedNotes;
    }

    // Planlar Textarea içeriğini yükle
    const plansTextarea = document.getElementById('plansTextarea');
    const savedPlans = localStorage.getItem('plans');
    if (savedPlans) {
        plansTextarea.value = savedPlans;
    }

    // Değişiklikleri kaydet
    notesTextarea.addEventListener('input', () => {
        localStorage.setItem('notes', notesTextarea.value);
    });

    plansTextarea.addEventListener('input', () => {
        localStorage.setItem('plans', plansTextarea.value);
    });
});
import { createNightowl } from '@bufferhead/nightowl'

createNightowl({
    defaultMode: 'dark',
    toggleButtonMode: 'newState'
})