import React, { useState, useEffect } from 'react';
import './Preloader.css';
import { jellyTriangle } from 'ldrs';
jellyTriangle.register();

function Preloader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setLoaded(true);
            document.body.classList.add("loaded");
        };

        // If content is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <div className={`preload ${loaded ? 'loaded' : ''}`} data-preaload>
            <l-jelly-triangle
                size="50"
                speed="1.75"
                color="#fcf9ee"
            ></l-jelly-triangle>
        </div>
    );
}

export default Preloader;