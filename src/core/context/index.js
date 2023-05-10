import {createContext, useEffect, useState} from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
	const [slipItems, setSlipItems] = useState([])
	const [totalOdds, setTotalOdds] = useState(0)

	const handleAddItemToSlip = (mbs, eventName, eventCode, marketId, odd) => {
		const selectedEvent = slipItems.find(slipItem => slipItem.code === eventCode)

		if (selectedEvent) { // event exist in slip
			if (selectedEvent?.marketId === marketId && selectedEvent?.odd === odd) { // same odd selected
				setSlipItems([
					...slipItems.filter(slipItem => slipItem.code !== eventCode)
				])
			} else { // different odd selected
				setSlipItems([
					...slipItems.filter(slipItem => slipItem.code !== eventCode),
					{mbs, name: eventName, code: eventCode, marketId, odd}
				])
			}
		} else {
			setSlipItems([
				...slipItems,
				{mbs, name: eventName, code: eventCode, marketId, odd}
			])
		}
	};

	useEffect(() => {
		const total = slipItems.reduce((total, item) => total * item?.odd, 1);
		setTotalOdds(total === 1 ? 0 : total)
	}, [slipItems])

	return (
		<Context.Provider value={{
			slipItems,
			totalOdds,
			handleAddItemToSlip,
		}}>
			{props.children}
		</Context.Provider>
	)
}

export default ContextProvider;
