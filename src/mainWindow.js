document.addEventListener('DOMContentLoaded', () => {
    const showHomeBtn = document.getElementById('homeButton');
    const showAddSiteBtn = document.getElementById('addSiteButton');
    const showEditSiteBtn = document.getElementById('editSiteButton');
    const showStatBtn = document.getElementById('showStatButton');
    const showReportBtn = document.getElementById('sendReportButton');
    const mapWindow = document.getElementById('mapWindow');
    const addWindow = document.getElementById('addWindow');
    const editWindow = document.getElementById('editWindow');
    const statWindow = document.getElementById('statWindow');
    const reportWindow = document.getElementById('reportWindow');

    showHomeBtn.addEventListener('click', () => {
        mapWindow.classList.add('active');
        addWindow.classList.remove('active');
        editWindow.classList.remove('active');
        statWindow.classList.remove('active');
        reportWindow.classList.remove('active');
    });

    showAddSiteBtn.addEventListener('click', () => {
        addWindow.classList.add('active');
        mapWindow.classList.remove('active');
        editWindow.classList.remove('active');
        statWindow.classList.remove('active');
        reportWindow.classList.remove('active');
    });

    showEditSiteBtn.addEventListener('click', () => {
        editWindow.classList.add('active');
        mapWindow.classList.remove('active');
        addWindow.classList.remove('active');
        statWindow.classList.remove('active');
        reportWindow.classList.remove('active');
    });

    showStatBtn.addEventListener('click', () => {
        statWindow.classList.add('active');
        mapWindow.classList.remove('active');
        addWindow.classList.remove('active');
        editWindow.classList.remove('active');
        reportWindow.classList.remove('active');
    });

    showReportBtn.addEventListener('click', () => {
        reportWindow.classList.add('active');
        mapWindow.classList.remove('active');
        addWindow.classList.remove('active');
        editWindow.classList.remove('active');
        statWindow.classList.remove('active');
    });
});