import * as vscode from 'vscode';
import * as config from './config';
import * as path from 'path';

export const helloWorld = vscode.commands.registerCommand(
    config.HELLO_WORLD,
    async () => {
        vscode.window.showInformationMessage('what a beautiful day!');
    });

export const openInRemoteTerminal = vscode.commands.registerCommand(
    config.OPEN_IN_REMOTE_TERMINAL,
    async (uri: vscode.Uri) => {
        vscode.window.showInformationMessage('Hello World from ymty!');
        vscode.window.showInformationMessage(uri.path);
    });

export const copyName = vscode.commands.registerCommand(
    config.COPY_NAME,
    async (uri: vscode.Uri) => {
        if (uri == null) {
            return
        }
        let ext = path.extname(uri.path)
        let name = path.basename(uri.path, ext)
        vscode.env.clipboard.writeText(name)
    });