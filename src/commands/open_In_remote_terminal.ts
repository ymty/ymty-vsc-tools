import * as vscode from 'vscode';
import * as config from '../config/config';
import * as utils from '../utils/utils';
import * as path from 'path';

export const openInRemoteTerminal = vscode.commands.registerCommand(
    config.CMD_OPEN_IN_REMOTE_TERMINAL,
    async (uri: vscode.Uri) => {
        vscode.window.showInformationMessage('Hello World from ymty!');
        vscode.window.showInformationMessage(uri.path);
    });
