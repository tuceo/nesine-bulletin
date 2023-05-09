import {useEffect, useState} from "react";
import Event from "../Event";
import EventHeader from "../EventHeader";
import BetSlip from "../BetSlip";
import ContextProvider from "../../core/context";

const Bulletin = () => {
	const [data, setData] = useState([]);
	const [loadedData, setLoadedData] = useState([]);

	const handleIsBottom = () => {
		const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
		return scrollTop + window.innerHeight + 70 >= scrollHeight;
	};

	const handleScroll = () => {
		if (loadedData.length <= data?.length && handleIsBottom()) {
			setLoadedData([...loadedData, ...data.slice(loadedData.length, loadedData.length + 50)]);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	useEffect(() => {
		fetch("https://nesine-case-study.onrender.com/bets")
			.then(response => response.json())
			.then(data => {
				setData(data);
				setLoadedData(data.slice(0, 50));
			});
	}, []);

	return (
		<ContextProvider>
			{data?.length > 0 && (
				<table>
					{loadedData.map((item) => (
						<>
							<EventHeader key={item.D + item.DAY} eventData={item}/>
							<Event key={item.NID} eventData={item} />
						</>
					))}
				</table>
			)}

			<BetSlip/>
		</ContextProvider>
	)
};

export default Bulletin;
