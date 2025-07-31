// Iframe Script - Iframe Dimensions Messaging
// This script handles sending iframe dimensions to the parent window

const plog = '🟢 [IFRAME]';

console.log(`${plog} Iframe script loaded`);

// Send dimensions to a parent window
function sendDimensions() {
    // Get the container element dimensions instead of window dimensions
    const container = document.getElementById('content');
    let width, height;
    
    if (container) {
        const rect = container.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
    } else {
        console.error(`${plog} Container element not found! Please check your HTML!`);
        // Fallback to window dimensions if container not found
        width = window.innerWidth;
        height = window.innerHeight;
    }
    
    const message = {
        type: 'dimensions',
        width: width,
        height: height
    };

    try {
        window.parent.postMessage(message, '*');
        console.log(`${plog} Sent dimensions:`, message);
    } catch (error) {
        console.error(`${plog} Error sending dimensions:`, error);
    }
}

// Initialize iframe messaging
function initIframeMessaging() {
    console.log(`${plog} Sending dimensions to parent...`);

    // Send dimensions immediately
    sendDimensions();

    // Send dimensions when a window resizes
    window.addEventListener('resize', sendDimensions);
}

// Initialize iframe messaging when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initIframeMessaging();
});