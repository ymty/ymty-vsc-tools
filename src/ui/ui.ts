import * as vscode from 'vscode';
import * as config from '../config/config';

let isShow = false;
// const outputChannel = vscode.window.createOutputChannel(config.EXTENSION_NAME);

export function show() {
    // outputChannel.show();
    isShow = true;
}

export function hide() {
    // outputChannel.hide();
    isShow = false;
}

export function toggle() {
    if (isShow) {
        hide();
    } else {
        show();
    }
}