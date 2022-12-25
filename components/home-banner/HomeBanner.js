import classes from "./homeBanner.module.css";

function Homebanner() {
	return (
		<div
			className={`${classes.section__padding} ${classes.banner_container}`}
			id="home"
		>
			<div className={classes.bannerOverlay}></div>
			<div className={classes.homebanner}>
				<div className={classes.title}>
					<p
						className={`${classes.gradient__text} ${classes.title__text}`}
					>
						Deduplication Layer on Filecoin
					</p>

					<p className={classes.description__text}>
						Sharing the cost of storage for greater efficiency and
						affordability.
					</p>
				</div>
			</div>

			<div className={classes.banner_Image}>
				<img src="world.png" alt="BannerImage" />
			</div>
		</div>
	);
}

export default Homebanner;
