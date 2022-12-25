import classes from './Teamcard.module.css'
import { IoLogoLinkedin,IoLogoGithub } from 'react-icons/io'

function Teamcard({ name, linkedin, image,github }) {
    return (
        <div className={classes.team_card_container}>
            <img style={{
                borderRadius: "50%",
                width: "220px",
                height: "220px",
                objectFit: "cover",
                objectPosition: "center",
            }} src={image} alt="member" />

            <div className={classes.member_info}>
                <p className={classes.member_name}>
                    {name}
                </p>

                <div className={classes.member_name}>
                    {
                        linkedin && <IoLogoLinkedin className={classes.social_icon} onClick={() => window.open(linkedin, "_blank")} />
                    }
                    {
                        github && <IoLogoGithub className={classes.social_icon} onClick={() => window.open(github, "_blank")} />
                    }
                </div>

            </div>

        </div>
    )
}

export default Teamcard