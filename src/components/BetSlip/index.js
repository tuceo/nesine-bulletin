import {Context} from "../../core/context";
import {useContext} from "react";

const BetSlip = () => {
	const {slipItems, totalOdds} = {...useContext(Context)};

	console.log("slipItems",slipItems)
	return (
		<div className={"bet-slip"}>
			{slipItems.map((item) =>
				<div className={"bet-slip-item"} key={item.code}>
					<div className={"bulletin-event-mbs"}>{item.mbs} </div>
					Kod: {item.code} Maç: {item.name}
					<span className={"bold"}>Oran: {item.odd}</span>
				</div>
			)}

			<span className={"bold"}> Toplam Tutar: {totalOdds.toFixed(2)} </span>
		</div>
	);
};

export default BetSlip;
