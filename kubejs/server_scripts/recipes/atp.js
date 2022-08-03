// priority: 10
// ATP Friends: Minecraft Enhanced



/**
 * @file ATP recipe additions for ATP Friends: Minecraft Enhanced.
 * 
 * 
 * 
 */
 
onEvent('recipes', (event) => {

// ------------------ Wayfinder ------------------ \\
    
	event.recipes.createSequencedAssembly([
        'kubejs:wayfinder'
    ], 
    'minecraft:compass',
    [ //Sequence
    event.recipes.createDeploying(
        'kubejs:unfinished_wayfinder', 
        ['kubejs:unfinished_wayfinder', 'create:precision_mechanism']),
    event.recipes.createDeploying(
        'kubejs:unfinished_wayfinder', 
        ['kubejs:unfinished_wayfinder', 'betterend:eternal_crystal']), 
    event.recipes.createPressing(
        'kubejs:unfinished_wayfinder', 
        'kubejs:unfinished_wayfinder')
    ])
    .transitionalItem('kubejs:unfinished_wayfinder')
    .loops(1);
	
// ------------------ Butterscotch -> Caramel ------------------ \\

//event.campfireCooking('croptopia:caramel', 'sprout:butterscotch').cookingTime(200);
	event.smoking('croptopia:caramel', 'sprout:butterscotch');
});
  