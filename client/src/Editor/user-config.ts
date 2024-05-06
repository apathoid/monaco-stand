import * as vscode from 'vscode';
import { UserConfig } from "monaco-editor-wrapper";


const worker = new Worker(new URL('./lsp-worker/web-worker.ts', import.meta.url), { type: 'module' });

export const getUserConfig = (args: { id: string; fileName: string; workspace: string; }) => {
    const { id, fileName, workspace } = args;

    const userConfig: UserConfig = {
        id,
        languageClientConfig: {
            options: {
                name: 'Julia Language Server',
                $type: 'WorkerDirect',
                worker
            },
            clientOptions: {
                documentSelector: ['julia'],
                workspaceFolder: {
                    index: 0,
                    name: workspace,
                    uri: vscode.Uri.parse(`/${workspace}/`),
                }
            }
        },
        wrapperConfig: {
            editorAppConfig: {
                $type: 'extended',
                languageId: 'julia',
                codeUri: `/${workspace}/${fileName}.jl`,
                useDiffEditor: false
            }
        }
    }

    return userConfig;
};
