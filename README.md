# Terminal Portfolio Website

An interactive terminal-based portfolio website that simulates a command-line interface in your browser. Built with modern web technologies to provide a unique and engaging user experience.

## 🌟 Features

- **Interactive Terminal Interface**: Full-featured terminal emulator running in the browser
- **Command-Based Navigation**: Type commands to explore portfolio information
- **Responsive Design**: Works seamlessly across different screen sizes
- **Web Links Support**: Clickable links in the terminal output
- **Custom Theme**: Dark terminal theme with customizable colors
- **Keyboard Shortcuts**: Full keyboard support including Ctrl+C and backspace

## 🚀 Technologies Used

- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for fast development
- **[xterm.js](https://xtermjs.org/)**: Terminal emulator library for the web
- **Vanilla JavaScript**: Pure JavaScript with ES6+ modules
- **CSS3**: Modern styling with flexbox

### xterm.js Addons

- `@xterm/addon-fit`: Automatically fits the terminal to container
- `@xterm/addon-web-links`: Makes URLs clickable
- `@xterm/addon-search`: Search functionality within the terminal

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/satyansh2004/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## 🎮 Usage

Once the application is running, you'll see a terminal interface. Use the following commands:

### Available Commands

- **`More`**: Display detailed information about the portfolio owner, including:
  - Name and current education
  - GitHub profile
  - Twitter/X.com profile
  - Latest projects

- **`clear`**: Clear the terminal screen

## 🛠️ Development

### Development Server

Run the development server with hot module replacement:
```bash
npm run dev
```

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── script.js           # Terminal logic and commands
├── style.css           # Styling for the terminal
├── package.json        # Project dependencies and scripts
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## 🎨 Customization

### Modifying Commands

Edit `script.js` to add new commands or modify existing ones. The command handling logic is in the `term.onData()` event handler.

### Changing Terminal Theme

Modify the theme object in `script.js` to customize colors:
```javascript
theme: {
    background: '#0c0c0c',
    foreground: '#cccccc',
    cursor: '#ffffff',
    // ... other colors
}
```

### Updating Personal Information

Update the portfolio information in the `"More"` command section in `script.js`.

## 👨‍💻 Author

**Satyansh Chand**
- GitHub: [@satyansh2004](https://github.com/satyansh2004)
- Twitter: [@SatyanshChand](https://x.com/SatyanshChand)
- Latest Project: [Chart Studio](https://chartstudio.netlify.app)

## 📄 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ using xterm.js and Vite