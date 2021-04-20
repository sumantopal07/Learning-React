// the two big use

// cases for a use memo the first and most

// obvious is when you want to make a slow

// function we wrap it in this use memo so

// that doesn't recompute every single time

// you render your component and it only

// computes when you actually need the

// value from that function since the

// inputs actually changed the second use

// case which is a little bit trickier is

// this idea of a referential equality

// whenever you want to make sure the

// reference of an object or an array is

// exactly the same as it was the last time

// you rendered if none of the internal

// workings changed you're gonna want to

// use memo here to make sure that you only

// update the reference of that object

// whenever the actual contents of the

// object change instead of updating every

// single time you render and that's all

// there is to the used memo hook
import React, { useState, useMemo, useEffect } from 'react';
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
	useEffect(() => {
		console.log('theme changes');
	}, [themeStyles]);
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
