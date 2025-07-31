# Iframe-Parent Communication Example

This example project demonstrates how to use the standard **cross-document messaging** technique via the [`postMessage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to enable secure communication between a parent window and an embedded iframe.

## Overview

Modern web applications often embed content from different origins using iframes. To communicate safely between the iframe and its parent window, the [`window.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method is used. This allows messages to be sent and received securely across origins.

This example shows a simple use-case:
- The **parent window** sends a message to the iframe.
- The **iframe** listens for messages from the parent, processes them, and can also send back responses.

## Project Structure

```
/src/parent/index.html         - The parent window containing the iframe
/src/parent/parent-script.js   - JavaScript for parent window messaging logic
/src/parent/index.style.css    - Styles for the parent window
/src/iframe/iframe.html        - The iframe content page
/src/iframe/iframe-script.js   - JavaScript for iframe messaging logic
/src/iframe/iframe.style.css   - Styles for the iframe content
```

## How It Works

1. The parent window accesses the iframe DOM element and sends a message using `iframe.contentWindow.postMessage()`.
2. The iframe listens for the `message` event, validates the message origin, and processes the data.
3. The iframe can optionally send a response message back to the parent using the same `postMessage` method.
4. Both sides verify the origins of messages to ensure security.

## Running the Example

### Running Locally on macOS

1. **Start a local web server** (required for cross-origin messaging):
   ```bash
   cd cross-document-messaging
   npm install
   npm serve
   ```

2. **Open in your browser**: Navigate to `http://localhost:8081/index.html`

3. **View the demo**: The iframe will automatically send its dimensions to the parent window.

4. **Test responsiveness**: Try resizing the browser window to see the dimensions update in real-time.

## Troubleshooting

### Port Already in Use Error

If you encounter an error like `EADDRINUSE: address already in use`, it means another process is using the port:

1. **Find the process using the port**:
   ```bash
   lsof -i :8081
   ```

2. **Kill the process** (replace PID with the actual process ID):
   ```bash
   kill <PID>
   ```

3. **Or use a different port**:
   ```bash
   npm start -- -p 8082
   ```

### Alternative Server Options

If you prefer using Python's built-in server:
```bash
python3 -m http.server 8081
```

## Notes

- Replace `'http://localhost'` with the actual origin of your pages in production.
- Always verify `event.origin` to avoid security issues.
- `postMessage` can send any serializable data, such as objects or strings.

## References

- [MDN: Window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
- [HTML5 Cross-document messaging specification](https://html.spec.whatwg.org/multipage/web-messaging.html)

---

Feel free to experiment and extend this example to fit your project needs!