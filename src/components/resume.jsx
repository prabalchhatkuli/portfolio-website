import React from 'react';
import $ from 'jquery';
import '../libs/easing.js'
import resume from "./resume.pdf";

class Resume extends React.Component {
    componentDidMount(){

          document.querySelector('.back-to-top2').style.display = "block";
        // window.addEventListener('scroll', ()=>{
        //     if(window.pageYOffset > 100){
        //         document.querySelector('.back-to-top2').classList.remove("fadeOut");
        //         document.querySelector('.back-to-top2').style.display = "block";
        //         document.querySelector('.back-to-top2').classList.add("fadeIn");
        //     }else {
        //         document.querySelector('.back-to-top2').classList.remove("fadeIn");
        //         document.querySelector('.back-to-top2').classList.add("fadeOut");
        //     }
        // });
    }

    render(){
        return <a href={require("./resume.pdf")} target="_blank" className="back-to-top2">Resume<ion-icon name="document-attach" style={{fontSize:"45px"}}> </ion-icon></a>;
    }
}

export default Resume;


