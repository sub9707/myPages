import React from "react";
import styles from "./FileContent.module.scss";

import file1Icon from "/src/assets/icons/file.svg";
import file2Icon from "/src/assets/icons/file.svg";
import file3Icon from "/src/assets/icons/file.svg";

interface FileContentProps {
    fileType: string;
    title: string;
}

const FileContent: React.FC<FileContentProps> = ({ fileType, title }) => {
    let iconSrc;

    switch (fileType) {
        case "file1":
            iconSrc = file1Icon;
            break;
        case "file2":
            iconSrc = file2Icon;
            break;
        case "file3":
            iconSrc = file3Icon;
            break;
        default:
            iconSrc = file1Icon; // 기본 아이콘
    }

    return (
        <div className={styles.fileContent}>
            <img className={styles.fileIcon} src={iconSrc} alt="icon" />
            <p>{title}</p>
        </div>
    );
};

export default FileContent;
