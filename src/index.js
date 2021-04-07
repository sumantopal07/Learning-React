/* eslint-disable no-unused-vars */

import React from 'react';
/*
we need to add this component to 
index html
*/
import ReactDom from 'react-dom';
//CSS
import './index.css'
//this function is component [stateless functional component]
//then must be capital
function Greeting1() {
	//its jsx not html
	return (
		<>
			<div onClick>

			</div>
			<h4>Hola!!</h4>
			<h1>hihi</h1>
		</>
	);
}
/**
 * jsx rules:
 * --> return single element
 * --> section / article / React.fragment
 * --> use camelCase for html attribute
 * --> className instead of class
 * --> formatting 
 * close ever element
 *
 *
 *  
 **/
function Greeting2() {
	//its jsx not html
	return React.createElement(
		'div', {},
		React.createElement(
			'h1', {},
			'HOLAAAAAAA'
		)
	);
}
/**
 * Nested Components, React Tools
 */
function Greeting3() {
	return (
		<>
			<Person />
			<Profession />
		</>
	);
}
const Person = () => <h2>Sumanto Pal</h2>;
const Profession = () => <h2>Dev Intern</h2>;

/**
 * Short BookList Application
 */
const Books = [
	{
		id: 1,
		author: 'Amelia Hepworth',
		title: 'I Love You to the Moon and Back',
		img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg'
	},
	{
		id: 2,
		author: 'Shanon Olsen',
		title: 'Our Class is a Family',
		img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'
	}
]
function BookList() {
	const printAuthor =(author) =>{
		console.log(author);
	};
	const testFunction =(e) =>{
		console.log(e.target);
	};
	return <section className='booklist'>
		{
			Books.map((book) => {
				return (
				<Book {...book} key={book.id} >{/**React wants a unique keep  */}
					{/* {Books[0]} This does not works because returned  value must be properties not the object
					therefore {Books[0].author} works */}
					{/* children prop */}
					<p>Book Number : {book.id}</p>
					<p>{Math.floor(Math.random(book.id) * 100)} Number of books sold</p>
					<button type='button' onClick={()=> printAuthor(book.author)} >test1</button>
					<button type='button' onClick={testFunction} >test2</button>
				</Book>
				)
			}


			)}
	</section>
}
const Book = (props) => {
	const { img, title, author } = props;/**Props child */
	const { children } = props;
	return (
		<article className="book">
			<img src={img} alt="" height="204px" width="200px" />
			<h1>{title}</h1>
			<h4 >{author}</h4>
			{children}
		</article>
	);
	//JSX Css has higher priority than Core css
	// const Title = () => 
	// const Author = () => <h4 style={{color: '#617d98', fontSize: '0.75rem' ,marginTop: '0.25rem'}}>Amelia Hepworth</h4>
}


// ReactDom.render(<Greeting1/>, document.getElementById('root1'));
// ReactDom.render(<Greeting2 />, document.getElementById('root2'));
// ReactDom.render(<Greeting3 />, document.getElementById('root3'));
ReactDom.render(<BookList />, document.getElementById('root'));

