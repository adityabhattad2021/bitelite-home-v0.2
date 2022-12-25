import React from 'react'
import classes from './AboutTeam.module.css'
import Teamcard from '../team-card/Teamcard';


function AboutTeam() {

    const teamArr = [
        {
            name: "Sudharson",
            github: "https://github.com/SudhanPlayz",
            image: "https://avatars.githubusercontent.com/u/55418697",
            linkedin: "https://www.linkedin.com/in/itzsudhan"
        },
        {
            name: "Aditya Bhattad",
            github: "https://github.com/adityabhattad2021",
            image: "https://avatars.githubusercontent.com/u/93488388",
            linkedin: "https://www.linkedin.com/in/aditya-bhattad-44188a22b/"
        },
        {
            name: "Mallikarjun Reddy",
            github: "https://github.com/rummuer",
            image: "https://avatars.githubusercontent.com/u/25072266",
            linkedin: "https://www.linkedin.com/in/mallikarjun-reddy-dorsala-12533663/"
        },
        {
            name: "Jithin KS",
            github: "https://github.com/JithinKS97",
            image: "https://avatars.githubusercontent.com/u/19987520",
            linkedin: "https://www.linkedin.com/in/jithinks112/"
        },
        {
            name: "Navil Rodrigues",
            github: "https://github.com/rodriguesnavil",
            image: "https://avatars.githubusercontent.com/u/32533176",
            linkedin: "https://www.linkedin.com/in/navil-rodrigues-295784a4/"
        },
    ]

    return (
        <div className={`${classes.section__padding} ${classes.hometeam_container}`}>
            <div className={classes.title}>
                <p className={`${classes.gradient__text} ${classes.title__text}`}>Our Team</p>
            </div>

            <div className={classes.team_members}>
                {teamArr.map((member, index) =>
                    <Teamcard key={index} {...member} />
                )}
            </div>
        </div>
    )
}

export default AboutTeam