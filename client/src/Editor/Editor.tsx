import React, { useMemo } from "react";
import { MonacoEditorReactComp } from '@typefox/monaco-editor-react';
import { File } from "../types";
import { getUserConfig } from "./user-config";
import '@codingame/monaco-vscode-julia-default-extension';


interface IEditor {
    file: File;
}

export const Editor = React.memo((props: IEditor) => {
    const { file } = props;

    const userConfig = useMemo(() => getUserConfig({ id: file.id, workspace: 'workspace', fileName: file.name }), [file.id]);

    return (
        <MonacoEditorReactComp
            userConfig={userConfig}
            style={{
                width: '100%',
                height: '100%'
            }}
        />
    );
});
