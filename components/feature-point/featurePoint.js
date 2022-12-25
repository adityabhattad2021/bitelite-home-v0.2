import { useEffect, useState } from "react";
import classes from "./featurePoint.module.css";

function FeaturePoint({ image, content, index }) {
	const [width, setWidth] = useState(0);
	useEffect(() => {
	    const { innerWidth: width } = window;
        setWidth(width);
	}, [width]);


	return (
		<div
			className={`${classes.featurepoint_container}  ${
				index % 2 === 0
					? classes.container_row
					: classes.container_rowReverse
			}`}
		>
			<div className={classes.image_container}>
				<img src={image} alt="feature_image" />
			</div>
			<div className={classes.text_container}>
				<div
					className={classes.description}
					style={
						width > 800
							? index % 2 === 0
								? { textAlign: "right" }
								: { textAlign: "left" }
							: { textAlign: "center" }
					}
				>
					{content}
				</div>
			</div>
		</div>
	);
}

export default FeaturePoint;
