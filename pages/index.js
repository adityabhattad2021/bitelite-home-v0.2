import Head from "next/head";
import classes from "../styles/Home.module.css";
import Header from "../components/header/header";
import Homebanner from "../components/home-banner/HomeBanner";
import Homekeyfeatures from "../components/home-keyfeatures/homeKeyFeatures";
import Footer from "../components/footer/footer";

export default function Home() {
	return (
		<div className={classes.body}>
			<Head>
				<title>BitElite</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={classes.homepage}>
				<div className={classes.bg_pattern2}></div>
				<div className={classes.bg_pattern3}></div>
				<div className={classes.bg_pattern4}></div>
				<div className={classes.bg_pattern5}></div>
				<Header />
				<Homebanner />
				<Homekeyfeatures/>
				<Footer/>
			</div>
		</div>
	);
}