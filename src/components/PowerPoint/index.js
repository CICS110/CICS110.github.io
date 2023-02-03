import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Note: The preview does not work locally, only on the actual site

export const PowerPoint = ({ lec_src }) => {
    const { siteConfig } = useDocusaurusContext();
    const { url } = siteConfig;
    const global_src = url + lec_src;
    const iframe_src = `https://view.officeapps.live.com/op/embed.aspx?src=${global_src}`;
    return (
        <>
            <iframe src={iframe_src} width='100%' height='600px' frameborder='0'></iframe>
            <a href={lec_src} target="_blank" rel="noopener noreferrer">Download Powerpoint</a>
        </>
    )
};