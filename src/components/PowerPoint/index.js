import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// References the PowerPoint stored on the public website. (cics110.github.io) 
// If the PowerPoint you want to display exists locally, but not on the github, it will not work.
// The best way to test this (currently) is to just push and hope it shows up on the website.
// Worst case scenario, the only issue will be that the iframe won't display the PowerPoint.

export const PowerPoint = ({ lec_src }) => {
    const global_src = useDocusaurusContext().siteConfig.url + lec_src;
    const iframe_src = `https://view.officeapps.live.com/op/embed.aspx?src=${global_src}`;
    return (
        <div style={{ marginBottom: "4rem" }}>
            <iframe src={iframe_src} width='100%' height='600px' frameborder='0' />
            <a href={lec_src} target="_blank" rel="noopener noreferrer">Download Powerpoint</a>
        </div>
    )
};