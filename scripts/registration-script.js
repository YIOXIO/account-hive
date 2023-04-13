document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.registration__tabs');
    const tabsButton = document.querySelectorAll('.registration__tabs-button');
    const tabsContent = document.querySelectorAll('.registration__tabs-content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('registration__tabs-button')) {
                const tabsPath = e.target.dataset.tabsPath;

                tabsButton.forEach(el => {
                    el.classList.remove('registration__tabs-button_active')
                });
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('registration__tabs-button_active');
                tabsHandler(tabsPath);
            }
        });
    }

    const tabsHandler = (path) => {
        tabsContent.forEach(el => {
            el.classList.remove('registration__tabs-content_active')
        });
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('registration__tabs-content_active');
    }

        ;
});