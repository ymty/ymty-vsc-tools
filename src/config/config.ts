import * as path from 'path';

export const EXTENSION_NAME = 'ymty';

const VENDOR_FOLDER = '.vscode';
export const CONGIF_FILENAME = 'ymty.json';
export const CONFIG_PATH = path.join(VENDOR_FOLDER, CONGIF_FILENAME);

export const CMD_HELLO = "ymty.hello"
export const CMD_OPEN_IN_REMOTE_TERMINAL = "openInRemoteTerminal"
export const CMD_COPY_NAME = "ymty.copyName"
export const CMD_COPY_FULL_NAME = "ymty.copyFullName"
export const CMD_CHECK_CONFIG = "ymty.config"

export const CFG_HELLO = "ymty.hello"