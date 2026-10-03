const { app, BrowserWindow, session, shell, systemPreferences } = require('electron');
const path = require('node:path');

const APP_URL = process.env.MIC2_APP_URL || 'https://mic-2-0.lovable.app';
const TRUSTED_HOST = new URL(APP_URL).hostname;

function isTrusted(value) {
  try {
    const u = new URL(value);
    return u.protocol === 'https:' && u.hostname === TRUSTED_HOST;
  } catch {
    return false;
  }
}

function configurePermissions() {
  const ses = session.defaultSession;

  ses.setPermissionCheckHandler((_webContents, permission, requestingOrigin) => {
    if (!isTrusted(requestingOrigin)) return false;
    return permission === 'media' || permission === 'speaker-selection';
  });

  ses.setPermissionRequestHandler((_webContents, permission, callback, details) => {
    const origin = details?.requestingUrl || details?.requestingOrigin || APP_URL;
    const allowed = isTrusted(origin) && (permission === 'media' || permission === 'speaker-selection');
    callback(allowed);
  });
}

async function ensureMacMicrophonePermission() {
  if (process.platform !== 'darwin') return;
  try {
    const status = systemPreferences.getMediaAccessStatus('microphone');
    if (status === 'not-determined') {
      await systemPreferences.askForMediaAccess('microphone');
    }
  } catch (error) {
    console.warn('Could not request macOS microphone permission:', error);
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1040,
    height: 820,
    minWidth: 820,
    minHeight: 640,
    title: 'Mic 2.0',
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#FAF9F5',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true
    }
  });

  win.once('ready-to-show', () => win.show());

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (isTrusted(url)) return { action: 'allow' };
    if (/^https?:/i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  win.webContents.on('will-navigate', (event, url) => {
    if (!isTrusted(url)) {
      event.preventDefault();
      if (/^https?:/i.test(url)) shell.openExternal(url);
    }
  });

  win.webContents.on('did-fail-load', (_event, errorCode, errorDescription, validatedURL, isMainFrame) => {
    if (!isMainFrame || errorCode === -3) return;
    const html = `<!doctype html><meta charset="utf-8"><title>Mic 2.0</title><style>body{font-family:-apple-system,BlinkMacSystemFont,sans-serif;background:#faf9f5;color:#262521;display:grid;place-items:center;min-height:100vh;margin:0}.c{max-width:520px;padding:40px}.b{font-weight:650;font-size:28px;margin-bottom:12px}p{line-height:1.55;color:#666}button{border:0;border-radius:999px;background:#252421;color:#fff;padding:12px 20px;font:inherit;cursor:pointer}</style><div class="c"><div class="b">Mic 2.0 couldn't connect.</div><p>Check your internet connection and try again.</p><button onclick="location.href='${APP_URL}'">Try again</button></div>`;
    win.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(html)}`);
    console.warn('Load failed', { errorCode, errorDescription, validatedURL });
  });

  win.loadURL(APP_URL);
}

app.whenReady().then(async () => {
  app.setName('Mic 2.0');
  configurePermissions();
  await ensureMacMicrophonePermission();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
