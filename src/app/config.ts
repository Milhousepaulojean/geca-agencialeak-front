
function makeAppConfig() {
    const date = new Date();
    const year = date.getFullYear();

    const AppConfig = {
        brand: 'Intranet',
        user: 'Lisa',
        year,
        layoutBoxed: false,               // true, false
        navCollapsed: true,              // true, false
        navBehind: false,                 // true, false
        fixedHeader: false,                // true, false
        sidebarWidth: 'small',           // small, middle, large
        theme: 'light',                   // light, gray, dark
        colorOption: '31',                // 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
        AutoCloseMobileNav: true,         // true, false. Automatically close sidenav on route change (Mobile only)
        productLink: 'https://themeforest.net/item/material-design-angular-2-admin-web-app-with-bootstrap-4/19421267'
    };

    return AppConfig;
}

export const APPCONFIG = makeAppConfig();
