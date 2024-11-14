document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Carregar o estado dos checkboxes do localStorage
    checkboxes.forEach(checkbox => {
        const id = checkbox.nextSibling.textContent.trim();
        const checked = localStorage.getItem(id) === 'true';
        checkbox.checked = checked;
    });

    // Salvar o estado dos checkboxes no localStorage
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const id = checkbox.nextSibling.textContent.trim();
            localStorage.setItem(id, checkbox.checked);
        });
    });
});
