import {marketList} from "../../core/constants";

const EventHeader = ({eventData}) => {
	return (
		<tr>
			<td className={"bulletin-event-name"}>{eventData.D} {eventData.DAY} <br />{eventData.LN}</td>
			{marketList.map((market) => market.OC.map((odd) => <td key={odd.ID}>{odd.N}</td>))}
		</tr>
	);
};

export default EventHeader;
