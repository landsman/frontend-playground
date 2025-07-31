// Iframe Script - Iframe Dimensions Messaging
// This script handles sending iframe dimensions to the parent window

const plog = '🟢 [IFRAME]';
let debounceTimer = null;

console.log(`${plog} Iframe script loaded`);

// Send dimensions to a parent window
function sendDimensions() {
    const message = {
        type: 'dimensions',
        height: window.document.body.scrollHeight + 50
    };

    try {
        window.parent.postMessage(message, '*');
        console.log(`${plog} Sent dimensions:`, message);
    } catch (error) {
        console.error(`${plog} Error sending dimensions:`, error);
    }
}

// Debounced version of sendDimensions to prevent loops
function sendDimensionsDebounced() {
    if (debounceTimer) {
        clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
        sendDimensions();
        debounceTimer = null;
    }, 100); // 100ms debounce delay
}

// Initialize iframe messaging
function initIframeMessaging() {
    console.log(`${plog} Sending dimensions to parent...`);

    // Send dimensions immediately
    sendDimensions();

    // Send dimensions when a window resizes (debounced to prevent loops)
    window.addEventListener('resize', sendDimensionsDebounced);
}

// Initialize iframe messaging when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initIframeMessaging();
});