import React from 'react';
import { Link } from "react-router-dom";

import s from './NavBar.module.scss';

class NavBar extends React.Component{

    componentDidMount(){
        window.addEventListener('scroll', this.toggleNav);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.toggleNav);
    }

    render(){
        return (
            <>
                <div className={s.wrap} ref={input=>this.nav=input}>
                    <div onClick={() => this.setTab(0)} className={s.wrap_child}>
                        <Link className={s.none} to='/'>
                            Home
                        </Link>
                        <span ref={input=>this.span=input} className={s.wrap_child_span}></span>
                    </div>
                    <div onClick={() => this.setTab(1)} className={s.wrap_child}>
                        <Link className={s.none} to='/state'>
                            State
                        </Link>
                    </div>
                    <div onClick={() => this.setTab(2)} className={s.wrap_child}>
                        <Link className={s.none} to='/patients'>
                            Patients
                        </Link>
                    </div>
                    <div onClick={() => this.setTab(3)} className={s.wrap_child}>
                        <Link className={s.none} to='/helplines'>
                            Helplines
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    toggleNav = () => {
        let lastScrollTop = 0;
        
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            this.nav.style.opacity = 1;
            this.nav.style.display = 'flex';
        } else {
            this.nav.style.display = 'none';
            this.nav.style.opacity = 0;
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }

    setTab = (activeTab) => {
        switch (activeTab) {
            case 0:
                this.span.style.left='1%';
                break;
            case 1:
                this.span.style.left='25%';
                break;
            case 2:
                this.span.style.left='50%';
                break;
            case 3:
                this.span.style.left='74%';
                break;
            default:
                break;
        }    
    }
}

export default NavBar;