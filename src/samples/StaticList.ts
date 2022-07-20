import { Data, View } from '../modicum/all';

export default function staticList() {

	/* Create a list view in page body */
	const view = new View(View.body, {

		/* Its markup includes a `<h3>` for the title and a `<ul>` for the list */
		markup: `<div>
			<h3>[[listTitle]]</h3>
			<ul aka="listRoot"></ul>
		</div>`,

		/* When data arrives, set its title */
		ondata: (v: View, d) => v.set('listTitle', d.title),

		/* Make nested views receive the `items` property in the datasource */
		childrendata: (v: View, d) => d.items
	});

	/* Create a list item inside the list */
	const item = new View(view, {

		/* Should be appended to `listRoot` slot */
		plug: 'listRoot',

		/* Its markup will display item title and value */
		markup: `<li>[[itemTitle]]: [[itemValue]]</li>`,

		/*
			When data arrives, reflect set its title and value.
			Since data is an array, this view will be replicated as needed.
		*/
		ondata: (v: View, d) => {
			v.set('itemTitle', d.title);
			v.set('itemValue', d.count);
		}

	});
	
	/* Create a simple data source to feed the list */
	new Data({
		title: 'Mail',
		items: [
			{ title: 'Inbox', count: 10 },
			{ title: 'Flagged', count: 4 },
			{ title: 'Drafts', count: 3 },
			{ title: 'Sent', count: 7 },
			{ title: 'Spam', count: 4 },
			{ title: 'Trash', count: 1 },
			{ title: 'Archive', count: 0 },
		]
	}).addConsumer(view);
}
