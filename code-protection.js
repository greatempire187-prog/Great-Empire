// Code Protection Script - Prevents users from viewing source code
(function() {
    'use strict';

    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (view source / devtools)
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 123 ||
            (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
            (e.ctrlKey && e.keyCode === 85)) {
            e.preventDefault();
            return false;
        }
    });

    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable print functionality
    window.addEventListener('beforeprint', function(e) {
        e.preventDefault();
    });

    // Disable iframe embedding
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }

    // Console warning
    console.clear();
    console.log('%cSTOP!', 'color: red; font-size: 50px; font-weight: bold;');
    console.log('%cThis is a protected system. Unauthorized access is prohibited!', 'color: red; font-size: 16px; font-weight: bold;');
    console.log('%cGreat Empire Team - Protected Content', 'color: #ffb703; font-size: 18px; font-weight: bold;');
    console.log('%c© 2026 Great Empire Team. All rights reserved.', 'color: #023047; font-size: 13px;');

})();
