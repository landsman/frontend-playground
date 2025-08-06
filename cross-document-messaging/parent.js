// Parent Window Script - Iframe Dimensions Messaging
// This script handles receiving iframe dimensions in the parent window

/**
 * A list of allowed origins for cross-origin resource sharing (CORS).
 * This array specifies the domains that are permitted to access the server's resources.
 *
 * The entries in this list represent trusted URLs from which requests can originate.
 * It is used to enforce security policies by restricting access to specified domains.
 *
 * Note that this variable should be updated cautiously to prevent unauthorized access
 * from untrusted origins.
 */
const ALLOWED_ORIGIN = [
  'http://127.0.0.1:8080',
  'http://localhost:8080',
  'https://landsman.github.io',
];

console.log('[PARENT] Parent script loaded');

/**
 * 1. Store your handler in a variable
 * Handles incoming messages from an event listener.
 *
 * @param {MessageEvent} event The message event object containing the data and origin of the sender.
 * @return {void} No return value. Performs actions based on the event data and origin.
 */
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
    updateDimensionsDisplay(data.height);
  }
}

/**
 * 2. Initializes the parent messaging system to listen for messages from an iframe.
 * This method sets up an event listener to handle incoming messages.
 *
 * @return {void} Does not return a value.
 */
function initParentMessaging() {
  console.log('[PARENT] Listening for iframe dimensions...');
  window.addEventListener('message', handleMessage);
}

/**
 * 3. Removes the event listener for the 'message' event,
 * effectively stopping inter-window or iframe communication handled by the `handleMessage` function.
 *
 * @return {void} Does not return a value.
 */
function destroyParentMessaging() {
  window.removeEventListener('message', handleMessage);
}

/**
 * Updates the display and style of an iframe's height based on the provided height value.
 *
 * @param {number} height - The new height value to set for the iframe and its display.
 * @return {void} This method does not return a value.
 */
function updateDimensionsDisplay(height) {
  const iframe = document.getElementById('iframe');
  const heightElement = document.getElementById('iframeHeight');

  if (heightElement) {
    heightElement.textContent = height + 'px';
    iframe.style.height = height + 'px';
  }
}

// Initialize parent messaging when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  initParentMessaging();
});
