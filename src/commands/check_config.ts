import * as vscode from 'vscode';
import * as config from '../config/config';
import * as utils from '../utils/utils';
import * as path from 'path';

export const checkConfig = vscode.commands.registerCommand(
    config.CMD_CHECK_CONFIG,
    async () => {
        vscode.window.showInformationMessage('what a beautiful day!');
        const workspaceFolders = utils.getWorkspaceFolders();
        if (!workspaceFolders) {
            const result = await utils.showConfirmMessage(
                'ymty expects to work at a folder.',
                'Open Folder',
                'Ok'
            );

            if (!result) {
                return;
            }

            return utils.openFolder();
        }

        if (workspaceFolders.length <= 0) {
            const result = await utils.showConfirmMessage(
                'There are no available folders in current workspace.',
                'Add Folder to Workspace',
                'Ok'
            );

            if (!result) {
                return;
            }

            const resources = await utils.showOpenDialog({
                canSelectFiles: false,
                canSelectFolders: true,
                canSelectMany: true,
            });

            if (!resources) {
                return;
            }

            utils.addWorkspaceFolder(...resources.map(uri => ({ uri })));
            return;
        }

        if (workspaceFolders.length === 1) {
            utils.newConfig(workspaceFolders[0].uri.fsPath);
            return;
        }

        const initDirs = workspaceFolders.map(folder => ({
            value: folder.uri.fsPath,
            label: folder.name,
            description: folder.uri.fsPath,
        }));

        vscode.window.showQuickPick(initDirs, {
            placeHolder: 'Select a folder...',
        }).then(item => {
            if (item === undefined) {
                return;
            }
            utils.newConfig(item.value);
        });
    },
);