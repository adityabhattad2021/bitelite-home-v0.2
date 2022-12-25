import classes from './footer.module.css';
import { useRouter } from 'next/router';


function Footer() {
    
    const router = useRouter();
    return (
        <div className={`${classes.footerContainer} ${classes.section__padding}`}>
            <div className={classes.siteDetails}>
                <div className={classes.site_map}>
                    <p className={classes.f_title}>Sitemap</p>
                    <p>
                        <a
                            className={classes.link}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/');
                            }}
                        >Home</a>
                    </p>
                    <p>
                        <a
                            className={classes.link}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/about-us');
                            }}
                        >About Us</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer