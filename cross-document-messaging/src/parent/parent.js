// Parent Window Script - Iframe Dimensions Messaging
// This script handles receiving iframe dimensions in the parent window

console.log('[PARENT] Parent script loaded');

// Listen for dimension messages from iframe
function initParentMessaging() {
    console.log('[PARENT] Listening for iframe dimensions...');
    
    window.addEventListener('message', function(event) {
        const data = event.data;
        
        // Only handle dimension messages
        if (data.type === 'dimensions') {
            console.log('[PARENT] Received dimensions:', data);
            updateDimensionsDisplay(data.width, data.height);
        }
    });
}

// Update the dimensions display in the DOM
function updateDimensionsDisplay(width, height) {
    const widthElement = document.getElementById('iframeWidth');
    const heightElement = document.getElementById('iframeHeight');
    
    if (widthElement) widthElement.textContent = width + 'px';
    if (heightElement) heightElement.textContent = height + 'px';
}

// Initialize parent messaging when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initParentMessaging();
});