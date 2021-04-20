import React, { useState, useMemo,useEffect } from 'react';
function slowFunction(num) {
	console.log("Calling Slow Function");
	for (let i = 0; i <= 1e9; i++) {

	}
	return num * 2;
}
/**
 * 		PROBLEM it is solving: 
 * updating leads to 
 * rerender the whole component
 * even if its the small portion 
 * of the whole component
 * 
 * ANOTHER USE CASE:
 * reference vs value
 * after each render, the new object
 * is created with new address
 * thus new reference is created but
 * address poiting the value is same
 *  
 */
/**
 * Solution : 
 * useMemo, caches the value
 * 
 */
/**
 * WHEN NOT TO USE USEMEMO:
 * ** Performace overhead;
 * ** Memory overhead;
 * ** execution of useMemo of every single component
 * 
 */
function App() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);
	/**
	 * BAD
	 * const doubleNumber = slowFunction(number);  
	 */
	/**GOOD => */
	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]);
	/**
	 * [..] => is the dependence
	 * as number is same as last time, thus we 
	 * will not execute this again
	 */

	/**GOOD  */
	const themeStyles = useMemo(() => {
		return {
			backgroundColor: dark ? 'black' : 'white',
			color: dark ? 'white' : 'black'
		}
	}, [dark]);
	/**BAD  */
	// const themeStyles = {
	// 		backgroundColor: dark ? 'black' : 'white',
	// 		color: dark ? 'white' : 'black'
	// 	};
	useEffect(()=>{
		console.log('theme changes');
	},[themeStyles]);
	return (
		<>
			<input type="number"
				value={number} onChange=
				{e => setNumber(parseInt(e.target.value))} />
			<button onClick={() => setDark(prevDark => !prevDark)}>
				Change Theme
		</button>
			<div style={themeStyles}>
				{doubleNumber}
			</div>
		</>
	);
}

export default App;
