import React from 'react';
import s from './Footer.module.scss';



class Footer extends React.Component{
    
    sendTop = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    }
    
    render(){
        return ( 
            <footer className={s.wrap}>
                <div className={s.wrap_content}>
                    <div className={s.wrap_content_quote}>
                        Lets fight the coronavirus as a team.
                    </div>
                    <div className={s.wrap_content_words}>
                        Data provided by:
                    </div>
                    <a className={s.wrap_content_credit} href="https://api.covid19india.org" target="_blank" rel="noopener noreferrer">covid19india</a>
                    <a href='https://github.com/arnavozil/covid' target="_blank" rel="noopener noreferrer" className={s.wrap_content_button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        <div className={s.wrap_content_button_text}>Project source code on github</div>
                    </a>
                </div>
                <div className={s.wrap_void}></div>
            </footer>
        )
    }
}
 
export default Footer;


/*

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>


*/