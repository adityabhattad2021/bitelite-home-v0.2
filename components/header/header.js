import { useState, useEffect } from "react";
import classes from "./header.module.css";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/router";

const links = [
	{
		title: "Home",
		path: "/",
		href: "",
	},
	{
		title: "About Us",
		path: "/about-us",
		href: "",
	},
];

function Header() {
	const router = useRouter();
	const [toggleMenu, setToggleMenu] = useState(false);
	const [scrollTop, setScrollTop] = useState();
	const [scrolling, setScrolling] = useState();
	useEffect(() => {
		const onScroll = (e) => {
			setScrollTop(e.target.documentElement.scrollTop);
			setScrolling(e.target.documentElement.scrollTop > scrollTop);
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollTop]);

	useEffect(() => {
		setToggleMenu(false);
	}, [scrolling]);

	return (
		<div className={`${classes.main__navbar} ${classes.container}`}>
			<div className={classes.navbar__links}>
				<div className={classes.navbar__link__logo}>
					<p className={classes.gradient__text} style={{cursor:"pointer"}}>BitElite</p>
				</div>
				<div className={classes.navbar_links_container}>
					{links.map((link,index) => (
						<p key={index}>
							{link.path.length > 0 ? (
								<a
									onClick={(e) => {
										e.preventDefault();
										router.push(link.path);
									}}
								>
									{link.title}
								</a>
							) : (
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									{link.title}
								</a>
							)}
						</p>
					))}
				</div>
			</div>
			<div className={classes.navbar__mobile__menu}>
				{toggleMenu ? (
					<RiCloseLine
						color="#ffff"
						size={27}
						onClick={() => {
							setToggleMenu(false);
						}}
					></RiCloseLine>
				) : (
					<RiMenuFill
						color="#ffff"
						size={27}
						onClick={() => {
							setToggleMenu(true);
						}}
					></RiMenuFill>
				)}

				{toggleMenu && (
					<div
						className={`${classes.mobile_menu_container} scale-up-tr`}
					>
						{links.map((link) => (
							<p>
								{link.path.length > 0 ? (
									<a
										onClick={(e) => {
											e.preventDefault();
											router.push(link.path);
										}}
									>
										{link.title}
									</a>
								) : (
									<a
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										{link.title}
									</a>
								)}
							</p>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;
