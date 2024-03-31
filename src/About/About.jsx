
import style from './About.module.css'


function Sbout () {

    return(
        <section className={style.s1} id='abot'>
        <div className={style.s11}>
            <img src="./src/assets/me.png" alt="My image."/>
        </div>
        <div className={style.s12}>
                <h3>Know</h3>
                <h2>About Project</h2>
                <hr/>
                <p>
                This is Project to Manage and Organise Employee Details.
                We use ReactJS framework to develope this project.This is my second project on react.
                I hope you will like it.
                    </p><br/>
                <p className={style.btngrp}>
                    <button id={style.btnw}><a href="#">Explore More</a></button>
                </p>
                
        </div>  
    </section>
    )
}

        
    


export default Sbout