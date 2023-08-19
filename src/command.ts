import * as vscode from 'vscode';
import * as config from './config';

export const helloWorld = vscode.commands.registerCommand(
    config.HELLO_WORLD,
    async (uri: vscode.Uri) => {
        vscode.window.showInformationMessage('what a beautiful day!');
    });

export const openInRemoteTerminal = vscode.commands.registerCommand(
    config.OPEN_IN_REMOTE_TERMINAL,
    async (uri: vscode.Uri) => {
        vscode.window.showInformationMessage('Hello World from ymty!');
        vscode.window.showInformationMessage(uri.path);
    });