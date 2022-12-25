import  FeaturePoint  from "../feature-point/featurePoint";
import classes from "./homeKeyFeatures.module.css";

function Homekeyfeatures() {
	const features = [
        {
            image: "feature1.png",
            content:
                "In the traditional storage model used by web2 providers such as Dropbox or Google Drive, users are charged for storage on a per GB basis. This means that if you and a friend both subscribe to a service and store the same file on your respective accounts, you will both be charged for the storage of that file.",
        },
        {
            image: "feature2.png",
            content:
                "Our project aims to address the issue of storage pricing in traditional web2 solutions such as Dropbox or Google Drive, where users are charged for storage on a per GB basis and may incur multiple charges for storing the same file. With Filecoin, we propose a solution where multiple users can share the cost of storing a file on the network. This means that rather than each user being charged individually for their own copy of a file, they can split the cost of storing a single copy of the file among themselves.",
        },
        {
            image: "feature3.png",
            content:
                "This shared storage model has several potential benefits. It can make storage more affordable for users, as they are able to split the cost of storing a file with others. It can also make the storage market more efficient, as there is less duplication of data and resources are used more efficiently. Additionally, it can help to reduce the overall storage demand on the network, as users are incentivized to share resources rather than storing multiple copies of the same file.",       
        }
    ];

	return (
		<div
			className={`${classes.section__padding} ${classes.homekeyfeatures_container}`}
			id="features"
		>
			<div className={classes.title}>
				<p className={`${classes.gradient__text} ${classes.title__text}`}>
					Overview
				</p>

				{features.map((point, arrIndex) => {
					point["index"] = arrIndex;
					return (<FeaturePoint key={arrIndex} {...point} />);
				})}
			</div>
		</div>
	);
}

export default Homekeyfeatures;
