import * as vscode from 'vscode';
import * as config from '../config/config';
import * as utils from '../utils/utils';
import * as path from 'path';

export const hello = vscode.commands.registerCommand(
    config.CMD_HELLO,
    async () => {
        const text = vscode.workspace.getConfiguration().get<string>(config.CFG_HELLO, "waht a beautiful day");
        vscode.window.showInformationMessage(text);
    });