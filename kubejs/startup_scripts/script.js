// priority: 0

console.info('Simps cant read')

onEvent('item.registry', event => {
	// Register new items here
	event.create('shifting_artifact').displayName('Shifting artifact');
	event.create('shifting_arms').displayName('Shifting arms');
	event.create('shifting_cloak').displayName('Shifting cloak');
	event.create('shifting_goo').displayName('Shifting goo');
	event.create('shifting_mail').displayName('Shifting mail');
	event.create('wayfinder').displayName('Wayfinder');

})

console.info('But Simp did load all normal items');

//Special Types
onEvent('item.registry', event => {
	// Register new items here
	event.create('unfinished_wayfinder').type('create:sequenced_assembly').displayName('Unfinished Wayfinder');
})

console.info('And the ones with a special type now too');

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	//event.create('slab_dirt', 'slab').material('dirt').hardness(0.5);
})