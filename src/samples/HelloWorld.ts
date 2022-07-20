import { Data, View } from '../modicum/all';

export default function helloWorld() {

	/* Create a view inside page body */
	const view = new View(View.body, {

		/* Its markup contains a dynamic text named `elapsedSeconds` */
		markup: `<div>Seconds: [[elapsedSeconds]]</div>`,

		/* When it receives some data, it updates the dynamic text */
		ondata: (v: View, d) => v.set('elapsedSeconds', d)
	});

	/*
		Create a minimal dataset which contains just a number, initially zero,
		and add our view as a data consumer. This means each time this dataset is
		updated (via `setData()`) the view will receive the new data.
	*/
	const count = new Data(0).addConsumer(view);

	/* Create a timer to increment the dataset value every second */
	setInterval(() => count.setData(count.data + 1), 1000);

}
