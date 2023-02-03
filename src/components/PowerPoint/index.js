import React from 'react';

// Note: The preview does not work locally, only on a server

export const PowerPoint = ({ src }) => {
    let file_link = `${window.location.origin}${src}`;
    // file_link = 'https://tmpfiles.org/dl/901685/lecture1.pptx'
    // console.log(file_link);
    const iframe_src = `https://view.officeapps.live.com/op/embed.aspx?src=${file_link}`;
    return (
        <>
            <iframe src={iframe_src} width='100%' height='600px' frameborder='0'></iframe>
            <a href={file_link} target="_blank" rel="noopener noreferrer">Download Powerpoint</a>
        </>
    )
};