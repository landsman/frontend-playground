# Iframe-Parent Communication Example

This example project demonstrates how to use the standard **cross-document messaging** technique via the [`postMessage` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to enable secure communication between a parent window and an embedded iframe.

## Overview

Modern web applications often embed content from different origins using iframes. To communicate safely between the iframe and its parent window, the [`window.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) method is used. This allows messages to be sent and received securely across origins.

This example shows a simple use-case:
- The **iframe** automatically sends its dimensions to the parent window.
- The **parent window** listens for messages from the iframe and updates the display accordingly.

## Project Structure

```
cross-document-messaging/
├── README.md                   # Project documentation
├── package.json                # Node.js dependencies and scripts
├── package-lock.json           # Dependency lock file
└── src/
    ├── index.html              # 🏠 Main parent window (entry point)
    ├── parent.js               # 📤 Parent window messaging logic
    ├── parent.css              # 🎨 Parent window styles
    └── iframe/
        ├── iframe.html         # 🖼️  Embedded iframe content
        ├── iframe.js           # 📥 Iframe messaging logic
        └── iframe.css          # 🎨 Iframe content styles
```

## How It Works

1. The iframe automatically calculates its content dimensions when loaded and on window resize.
2. The iframe sends dimension data to the parent window using `window.parent.postMessage()`.
3. The parent window listens for the `message` event, validates the message origin, and processes the dimension data.
4. The parent window updates the iframe's height and displays the received dimensions.
5. Both sides verify the origins of messages to ensure security.

## Running the Example

### Running Locally on macOS

1. **Start a local web server** (required for cross-origin messaging):
   ```bash
   cd cross-document-messaging
   npm install
   npm start
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