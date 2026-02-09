import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import { SearchAddon } from '@xterm/addon-search';
import '@xterm/xterm/css/xterm.css';


let term = new Terminal({
    fontFamily: 'Cascadia Code, Consolas, monospace',
    fontSize: 14,
    cursorBlink: true,
    cursorStyle: 'block',
    theme: {
        background: '#0c0c0c',
        foreground: '#cccccc',
        cursor: '#ffffff',
        selection: '#3a3d41',
        black: '#0c0c0c',
        red: '#c50f1f',
        green: '#13a10e',
        yellow: '#c19c00',
        blue: '#0037da',
        magenta: '#881798',
        cyan: '#3a96dd',
        white: '#cccccc'
    }
})
const fitAddon = new FitAddon();
const webaddon = new WebLinksAddon();
const searchaddon = new SearchAddon();
term.loadAddon(fitAddon);
term.loadAddon(webaddon);
term.loadAddon(searchaddon);

term.open(document.getElementById("terminal"));
term.write("Welcome to my portfolio, Type: \r\n`More`: To get more information about me\r\n`clear`: To erase Terminal");
term.write('\r\nPS C:\\Users\\Name>');

let input = ""

term.onData(data => {

    if (data === '\x7f') {
        if (input.length > 0) {
            input = input.slice(0, -1);
            term.write("\b \b");
        }
        return;
    }

    if (data === '\x03') {
        term.write("^C");
        term.write("\r\n");
        term.write("\r\nPS C:\\> ")
        return;
    }

    if (data === '\r') {

        term.write('\r\n');

        if (input === "More") {
            term.write('\r\n');
            term.write(`Hello i am Satyansh Chand\r\nCurrently Pursuing my degree in B.tech CS from Buddha institute of Technology\r\n`);
            term.write(`Github: https://github.com/satyansh2004 \r\n`);
            term.write(`Twiiter/x.com: https://x.com/SatyanshChand \r\n`);
            term.write(`Latest Project: https://chartstudio.netlify.app \r\n`);
        }
        else if (input === "clear") {
            term.clear();
            term.write("Welcom to my portfolio, Type: \r\n`More`: To get more information about me\r\n`clear`: To erase Terminal");
        }
        else {
            term.write(`You typed: ${input} which is invalid!\r\n`);
            term.write(`Write More to get more info`);
        }

        term.write('\r\nPS C:\\> ');
        input = '';
        return;

    }

    input += data;
    term.write(data);

})

fitAddon.fit()