# Iframe-Parent Communication Example

This example project demonstrates how to use the standard **cross-document messaging** technique via the [`postMessage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to enable secure communication between a parent window and an embedded iframe.

## Overview

Modern web applications often embed content from different origins using iframes. To communicate safely between the iframe and its parent window, the [`window.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method is used. This allows messages to be sent and received securely across origins.

This example shows a simple use-case:
- The **parent window** sends a message to the iframe.
- The **iframe** listens for messages from the parent, processes them, and can also send back responses.

## Project Structure

```
/index.html       - The parent window containing the iframe
/iframe.html      - The iframe content page
/script.js        - JavaScript to handle messaging logic for both parent and iframe
```

## How It Works

1. The parent window accesses the iframe DOM element and sends a message using `iframe.contentWindow.postMessage()`.
2. The iframe listens for the `message` event, validates the message origin, and processes the data.
3. The iframe can optionally send a response message back to the parent using the same `postMessage` method.
4. Both sides verify the origins of messages to ensure security.

## Running the Example

1. Serve the project files using a local web server (this is necessary for cross-origin messaging).
2. Open `index.html` in your browser.
3. The parent window will send a greeting message to the iframe.
4. Check the browser console in both the parent and iframe to see the communication logs.

## Notes

- Replace `'http://localhost'` with the actual origin of your pages in production.
- Always verify `event.origin` to avoid security issues.
- `postMessage` can send any serializable data, such as objects or strings.

## References

- [MDN: Window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
- [HTML5 Cross-document messaging specification](https://html.spec.whatwg.org/multipage/web-messaging.html)

---

Feel free to experiment and extend this example to fit your project needs!