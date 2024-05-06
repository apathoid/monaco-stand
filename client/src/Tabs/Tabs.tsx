import React from "react";
import { File } from "../types";
import { getNewFile } from "../static-data";


interface ITabs {
    selected: File['id'] | undefined;
    setSelected: React.Dispatch<React.SetStateAction<File['id'] | undefined>>;
    openedFiles: File[];
    setOpenedFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export const Tabs = React.memo((props: ITabs) => {
    const { selected, setSelected, openedFiles, setOpenedFiles } = props;

    return (
        <ul
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                listStyle: 'none'
            }}
        >
            {openedFiles.map(file => (
                <li
                    key={file.id}
                    style={{
                        border: '1px solid lightgray',
                        width: '100px',
                        textAlign: 'center',
                        backgroundColor: selected === file.id ? 'lightgray' : 'transparent',
                        cursor: 'pointer'
                    }}
                    onClick={() => setSelected(file.id)}
                >
                    {file.name}
                </li>
            ))}

            <button
                onClick={() => {
                    const newFile = getNewFile(openedFiles.length);
                    setOpenedFiles(prev => [...prev, newFile]);
                    setSelected(newFile.id);
                }}
            >
                add new file
            </button>
        </ul>
    );
});
