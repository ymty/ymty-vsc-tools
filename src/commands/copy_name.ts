import * as vscode from 'vscode';
import * as config from '../config/config';
import * as utils from '../utils/utils';
import * as path from 'path';

export const copyName = vscode.commands.registerCommand(
    config.CMD_COPY_NAME,
    async (uri: vscode.Uri) => {
        if (uri == null) {
            return
        }
        let ext = path.extname(uri.path)
        let name = path.basename(uri.path, ext)
        vscode.env.clipboard.writeText(name)
    });

export const copyFullName = vscode.commands.registerCommand(
    config.CMD_COPY_FULL_NAME,
    async (uri: vscode.Uri) => {
        if (uri == null) {
            return
        }
        let name = path.basename(uri.path)
        vscode.env.clipboard.writeText(name)
    });