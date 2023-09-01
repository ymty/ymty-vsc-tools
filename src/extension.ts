// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as hello_world from './commands/hello';
import * as copy_name from './commands/copy_name';
import * as open_In_remote_terminal from './commands/open_In_remote_terminal';
import * as check_config from './commands/check_config';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(hello_world.hello);
	context.subscriptions.push(open_In_remote_terminal.openInRemoteTerminal);
	context.subscriptions.push(copy_name.copyName);
	context.subscriptions.push(copy_name.copyFullName);
	context.subscriptions.push(check_config.checkConfig);
}

// This method is called when your extension is deactivated
export function deactivate() { }
