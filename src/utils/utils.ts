import * as vscode from 'vscode';
import * as path from 'path';
import * as config from '../config/config';
import * as ymty_config from '../config/ymty_config';
import * as ui from '../ui/ui';
import * as fse from 'fs-extra';


export function getWorkspaceFolders() {
    return vscode.workspace.workspaceFolders;
}

export async function showConfirmMessage(
    message: string,
    confirmLabel: string = 'Yes',
    cancelLabel: string = 'No'
) {
    const result = await vscode.window.showInformationMessage(
        message,
        { title: confirmLabel },
        { title: cancelLabel }
    );

    return Boolean(result && result.title === confirmLabel);
}

export function showErrorMessage(message: string, ...items: string[]) {
    return vscode.window.showErrorMessage(message, ...items);
}

export function openFolder(uri?: vscode.Uri, newWindow?: boolean) {
    return executeCommand('vscode.openFolder', uri, newWindow);
}

export function executeCommand(command: string, ...rest: any[]): Thenable<any> {
    return vscode.commands.executeCommand(command, ...rest);
}

export function showOpenDialog(options: vscode.OpenDialogOptions) {
    return vscode.window.showOpenDialog(options);
}

export function addWorkspaceFolder(...workspaceFoldersToAdd: { uri: vscode.Uri; name?: string }[]) {
    return vscode.workspace.updateWorkspaceFolders(0, 0, ...workspaceFoldersToAdd);
}

export function showTextDocument(uri: vscode.Uri, option?: vscode.TextDocumentShowOptions) {
    return vscode.window.showTextDocument(uri, option);
}

function getConfigPath(basePath: string) {
    return path.join(basePath, config.CONFIG_PATH);
}

export function reportError(err: Error | string, ctx?: string) {
    let errorString: string;
    if (err instanceof Error) {
        errorString = err.message;
    } else {
        errorString = err;
    }
    showErrorMessage(errorString, 'Detail').then(result => {
        if (result === 'Detail') {
            ui.show();
        }
    });
    return;
}

export function newConfig(basePath: string) {
    const configPath = getConfigPath(basePath);

    return fse.pathExists(configPath).then(exist => {
        if (exist) {
            return showTextDocument(vscode.Uri.file(configPath));
        }
        return fse.outputJson(configPath, ymty_config.ymtyConfig, { spaces: 4 }
        ).then(() => showTextDocument(vscode.Uri.file(configPath)));
    }).catch(reportError);
}