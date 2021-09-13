import React from 'react'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function ScrollToTop(props) {

    const {pathname} = useLocation();

    //Scroll back to top after refresh the page
    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    }

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
}
