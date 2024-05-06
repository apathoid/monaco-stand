import { useState } from "react";
import { File } from "./types";
import { Tabs } from "./Tabs/Tabs";
import { Editor } from "./Editor/Editor";


function App() {
    const [openedFiles, setOpenedFiles] = useState<File[]>([]);
    const [selected, setSelected] = useState<File['id']>();

    return (
        <div style={{ height: '80vh', width: '100%', border: '1px solid gray' }}>
            <Tabs
                selected={selected}
                setSelected={setSelected}
                openedFiles={openedFiles}
                setOpenedFiles={setOpenedFiles}
            />
            
            {openedFiles.map(file => (
                <div
                    key={file.id}
                    style={{ width: '100%', height: '100%', display: selected !== file.id ? 'none' : undefined }}
                >
                    <Editor file={file} />
                </div>
            ))}
        </div>
    );
}


export default App;
