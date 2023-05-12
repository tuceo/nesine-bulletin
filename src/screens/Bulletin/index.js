import {useEffect, useState} from "react";
import Event from "../../components/Event";
import EventHeader from "../../components/EventHeader";
import BetSlip from "../../components/BetSlip";
import ContextProvider from "../../core/context";

const Bulletin = () => {
	const [data, setData] = useState([]);
	const [loadedData, setLoadedData] = useState([]);

	const handleIsBottom = () => document.documentElement.scrollTop + window.innerHeight + 100 >= document.documentElement.scrollHeight;

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
