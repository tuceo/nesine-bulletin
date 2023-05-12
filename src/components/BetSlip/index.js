import { Context } from "../../core/context";
import { useContext } from "react";

const BetSlip = () => {
	const { slipItems, totalOdds } = { ...useContext(Context) };

	return (
		<div className={"bet-slip"}>
			{slipItems.map((item) =>
				<div className={"bet-slip-item"} key={item.code}>
					<div>
						Kod: {item.code} Maç: {item.name}
						<span className={"bold"}> Oran: {item.odd}</span>
					</div>
					<div className={"bulletin-event-mbs"}>{item.mbs} </div>
				</div>
			)}

			<div className={"bet-slip-total"}> Toplam Tutar: {totalOdds.toFixed(2)} </div>
		</div>
	);
};

export default BetSlip;
