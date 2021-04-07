/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import { Books } from './books';
import SpecificBook from './Book';

function BookList() {
	const printAuthor = (author) => {
		console.log(author);
	};
	const testFunction = (e) => {
		console.log(e.target);
	};
	return <section className='booklist'>
		{
			Books.map((book) => {
				return (
					<SpecificBook  {...book} key={book.id} >
						<p>Book  Number : {book.id}</p>
						<p>{Math.floor(Math.random(book.id) * 100)} Number of books sold</p>
						<button type='button' onClick={() => printAuthor(book.author)} >test1</button>
						<button type='button' onClick={testFunction} >test2</button>
					</SpecificBook>
				)
			}
			)}
	</section>
}
ReactDom.render(<BookList />, document.getElementById('root'));

