// priority: 0

console.info('Marcel > Kris')

onEvent('item.registry', event => {
	// Register new items here
	//event.create('void_pearl').maxStackSize(16).rarity('Legendary')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	//event.create('slab_dirt', 'slab').material('dirt').hardness(0.5);
})