
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
