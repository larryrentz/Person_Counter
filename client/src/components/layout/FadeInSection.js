import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/styles'
export default function FadeInSection(props) {
    const useStyles = makeStyles({
        root: {
            fadeInSection: {
                opacity: "0",
                transform: "translateY(20vh)",
                visibility: "hidden",
                transition: "opacity 0.6s ease- out, transform 1.2s ease- out",
                willChange: "opacity, visibility",
            },
            isVisible: {
                opacity: "1",
                transform: "none",
                visibility: "visible",
            }
        }
    });
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    const classes = useStyles();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    const emptyString = "";
    return (
        <React.Fragment
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </React.Fragment>
    );
}