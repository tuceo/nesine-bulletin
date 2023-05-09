import {useContext} from "react";
import {Context} from "../../core/context";
import {marketList} from "../../core/constants";

const Event = ({eventData}) => {
	const {slipItems, handleAddItemToSlip} = {...useContext(Context)};
	const selectedEvent = slipItems.find(slipItem => slipItem.code === eventData.C)

	return (
		<tr>
			<td className={"bulletin-event-name"}>
				<span className={"bold"}>{eventData.C}</span> {eventData.T} {eventData.N}
				<div className={"bulletin-event-mbs"}>{eventData.OCG[1].MBS}</div>
			</td>
			{marketList.map((market) => (
				market.OC.map((odds) => {
					const odd = eventData?.OCG?.[market.ID]?.OC?.[odds.ID]?.O;
					const isActive = selectedEvent && selectedEvent?.marketId === market.ID && selectedEvent?.odd === odd;
					return <td key={odds.ID}
						onClick={() => odd && handleAddItemToSlip(eventData.OCG[1].MBS, eventData.N, eventData.C, market.ID, odd)}
						className={`bulletin-event-odd ${isActive && "active-odd"}`}>{odd}</td>
				})))}
		</tr>
	);
};

export default Event;
