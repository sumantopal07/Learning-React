import React from 'react';

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
}

export default Book;