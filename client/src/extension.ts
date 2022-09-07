import * as path from "path";

import { workspace, ExtensionContext } from 'vscode';
import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
    
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
}