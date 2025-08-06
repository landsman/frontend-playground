// Iframe Script - Iframe Dimensions Messaging
// This script handles sending iframe dimensions to the parent window

const plog = '🟢 [IFRAME]';
let debounceTimer = null;

console.log(`${plog} Iframe script loaded`);

/**
 * Sends the dimensions of the document body, including a fixed additional height,
 * to the parent window using the postMessage API. The message includes the type
 * ('dimensions') and the calculated height.
 *
 * @return {void} Does not return any value.
 */
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

/**
 * Debounced version of sendDimensions to prevent loops.
 *
 * @return {void} This function does not return any value.
 */
function sendDimensionsDebounced() {
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(() => {
    sendDimensions();
    debounceTimer = null;
  }, 100); // 100ms debounce delay
}

/**
 * Initializes messaging with the parent iframe by sending the current dimensions
 * of the iframe and setting up a listener to send updated dimensions on resize events.
 *
 * @return {void} No return value.
 */
function initIframeMessaging() {
  console.log(`${plog} Sending dimensions to parent...`);

  // Send dimensions immediately
  sendDimensions();

  // Send dimensions when a window resizes (debounced to prevent loops)
  window.addEventListener('resize', sendDimensionsDebounced);
}

/**
 * Initialize iframe messaging when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function () {
  initIframeMessaging();

  /* hide scrollbars */
  document.body.style.overflow = 'hidden';
});
