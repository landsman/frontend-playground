// Parent Window Script - Iframe Dimensions Messaging
// This script handles receiving iframe dimensions in the parent window

const ALLOWED_ORIGIN = ['http://127.0.0.1:8081'];
console.log('[PARENT] Parent script loaded');

// 1. Store your handler in a variable
function handleMessage(event) {
    if (!ALLOWED_ORIGIN.includes(event.origin)) {
        console.error(
            '[PARENT] Message rejected due to origin mismatch!',
            'Sender: ' + event.origin,
            'Allowed: ' + ALLOWED_ORIGIN
        );
        event.stopPropagation();
        destroyParentMessaging();
        return;
    }

    const data = event.data;
    if (data.type === 'dimensions') {
        console.log('[PARENT] Received dimensions:', data);
        updateDimensionsDisplay(data.width, data.height);
    }
}

// 2. Add listener normally
function initParentMessaging() {
    console.log('[PARENT] Listening for iframe dimensions...');
    window.addEventListener('message', handleMessage);
}

// 3. Remove a listener when you want to "kill" it
function destroyParentMessaging() {
    window.removeEventListener('message', handleMessage);
}

// Update the dimensions display in the DOM
function updateDimensionsDisplay(width, height) {
    const iframe = document.getElementById('iframe');
    const widthElement = document.getElementById('iframeWidth');
    const heightElement = document.getElementById('iframeHeight');
    
    if (widthElement) {
        widthElement.textContent = width + 'px';
        iframe.style.width = width + 'px';
    }
    if (heightElement) {
        heightElement.textContent = height + 'px';
        iframe.style.height = height + 'px';
    }
}

// Initialize parent messaging when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initParentMessaging();
});