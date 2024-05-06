import { File } from "./types";


export const getNewFile = (idx: number): File => {
    return {
        id: `${Math.random() * Math.random()}`,
        name: `file ${idx + 1}`
    };
};
