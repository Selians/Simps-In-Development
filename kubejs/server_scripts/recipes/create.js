// priority: 10
// ATP Friends: Minecraft Enhanced

/**
 * @file Create recipe additions for ATP Friends: Minecraft Enhanced.
 * 
 * 
 * 
 */
/**

crushing wheel example, output[], input[]
onEvent('recipes', (event) => {
	event.recipes.createCrushing([
		'2x minecraft:cobblestone',
		'minecraft:redstone',
	Item.of('minecraft:redstone').withChance(0.5)
	], 
	'minecraft:redstone_ore')
});
*/
onEvent('recipes', (event) => {
	event.recipes.createCrushing([
		'4x ae2:certus_quartz_crystal',
		'5x ae2:certus_quartz_dust',
		Item.of('3x ae2:certus_quartz_crystal').withChance(0.5)
	], 
	'ae2:quartz_ore');
	//Crushing Recipes for Crushing Wheels
	event.recipes.createCrushing([
		'4x ae2:certus_quartz_crystal',
		'5x ae2:certus_quartz_dust',
		Item.of('3x ae2:certus_quartz_crystal').withChance(0.5)
	], 
	'ae2:deepslate_quartz_ore');
	event.recipes.createCrushing([
		'4x ae2:certus_quartz_dust',
		Item.of('2x ae2:certus_quartz_dust').withChance(0.5)
	], 
	'ae2:certus_quartz_crystal');
	
	event.recipes.createCrushing([
		'9x techreborn:lead_nugget',
	], 
	'techreborn:raw_lead');
	
	event.recipes.createCrushing([
		'9x techreborn:silver_nugget',
	], 
	'techreborn:raw_silver');
	
	event.recipes.createCrushing([
		'9x techreborn:tin_nugget',
	], 
	'techreborn:raw_tin');
	
	event.recipes.createCrushing([
		'9x techreborn:iridium_nugget',
	], 
	'techreborn:raw_iridium');
	
	event.recipes.createCrushing([
		'9x techreborn:tungsten_nugget',
	], 
	'techreborn:raw_tungsten');
	
	event.recipes.createCrushing([
		'2x minecraft:netherite_scrap',
		Item.of('5x minecraft:gold_nugget').withChance(0.5)
	], 
	'minecraft:ancient_debris');
	
	event.recipes.createCrushing([
		'2x techreborn:raw_silver',
		Item.of('techreborn:raw_silver').withChance(0.25)
	], 
	'techreborn:silver_ore');
	
	event.recipes.createCrushing([
		'3x techreborn:raw_silver',
		Item.of('techreborn:raw_silver').withChance(0.25)
	], 
	'techreborn:deepslate_silver_ore');
	
	event.recipes.createCrushing([
		'2x techreborn:raw_tin',
		Item.of('techreborn:raw_tin').withChance(0.25)
	], 
	'techreborn:tin_ore');
	
	event.recipes.createCrushing([
		'3x techreborn:raw_tin',
		Item.of('techreborn:raw_tin').withChance(0.25)
	], 
	'techreborn:deepslate_tin_ore');
	
	event.recipes.createCrushing([
		'2x techreborn:raw_lead',
		Item.of('techreborn:raw_lead').withChance(0.25)
	], 
	'techreborn:lead_ore');
	
	event.recipes.createCrushing([
		'3x techreborn:raw_lead',
		Item.of('techreborn:raw_lead').withChance(0.25)
	], 
	'techreborn:deepslate_lead_ore');
	
	event.recipes.createCrushing([
		'2x techreborn:raw_iridium',
		Item.of('techreborn:raw_iridium').withChance(0.25)
	], 
	'techreborn:iridium_ore');
	
	event.recipes.createCrushing([
		'3x techreborn:raw_iridium',
		Item.of('techreborn:raw_iridium').withChance(0.25)
	], 
	'techreborn:deepslate_iridium_ore');
	
	event.recipes.createCrushing([
		'2x techreborn:galena_dust',
		Item.of('techreborn:galena_dust').withChance(0.25)
	], 
	'techreborn:galena_ore');
	
	event.recipes.createCrushing([
		'3x techreborn:galena_dust',
		Item.of('techreborn:galena_dust').withChance(0.25)
	], 
	'techreborn:deepslate_galena_ore');
	
	event.recipes.createCrushing([
		'2x techreborn:bauxite_dust',
		Item.of('techreborn:bauxite_dust').withChance(0.25)
	], 
	'techreborn:bauxite_ore');
	
	event.recipes.createCrushing([
		'3x techreborn:bauxite_dust',
		Item.of('techreborn:bauxite_dust').withChance(0.25)
	], 
	'techreborn:deepslate_bauxite_dust');
	
	event.recipes.createCrushing([
		'1x techreborn:platinum_dust',
		Item.of('techreborn:platinum_dust').withChance(0.33)
	], 
	'techreborn:sheldonite_ore');
	
	event.recipes.createCrushing([
		'1x minecraft:red_sand'
	], 
	'minecraft:red_terracotta');
	
	event.recipes.createCrushing([
		'1x minecraft:red_sand',
		Item.of('minecraft:sand').withChance(0.50)
	], 
	'minecraft:orange_terracotta');
	
	event.recipes.createCrushing([
		'1x minecraft:sand'
	], 
	'minecraft:yellow_terracotta');
	
	event.recipes.createCrushing([
		'1x minecraft:sand'
	], 
	'minecraft:white_terracotta');
	
	//Bulk Washing recipes for Encased Fan behind a Water Source
	//Output[], Input[]
	event.recipes.createSplashing([
		'9x techreborn:lead_nugget',
		Item.of('techreborn:lead_nugget').withChance(0.75)
	], 'techreborn:raw_lead');
	
	event.recipes.createSplashing([
		'9x techreborn:tin_nugget',
		Item.of('techreborn:tin_nugget').withChance(0.75)
	], 'techreborn:raw_tin');
	
	event.recipes.createSplashing([
		'9x techreborn:silver_nugget',
		Item.of('techreborn:silver_nugget').withChance(0.75)
	], 'techreborn:raw_silver');
	
	event.recipes.createSplashing([
		'9x techreborn:iridium_nugget',
		Item.of('techreborn:iridium_nugget').withChance(0.75)
	], 'techreborn:raw_iridium');
	
	event.recipes.createSplashing([
		'9x techreborn:tungsten_nugget',
		Item.of('techreborn:tungsten_nugget').withChance(0.75)
	], 'techreborn:raw_tungsten');	
	//Mixing Recipes for in Basin
	//Output[], input[]
	event.recipes.createMixing('2x ae2:fluix_dust', [		{fluidTag: 'minecraft:water', amount: 27000},
		'minecraft:redstone',		'ae2:certus_quartz_crystal',		'minecraft:quartz',	]);
	
	event.recipes.createMixing('2x ae2:fluix_crystal', [
		{fluidTag: 'minecraft:water', amount: 27000},
		'ae2:fluix_dust',
		'#c:sand'
	]);
	
	//Milling Recipes	
	//Crafting Grid Recipes	event.shapeless('2x minecraft:andesite', ['minecraft:cobblestone', 'create:veridium']);	event.shapeless('2x minecraft:andesite', ['minecraft:cobblestone', 'create:crimsite']);	event.shapeless('2x minecraft:andesite', ['minecraft:cobblestone', 'create:asurine']);	event.shapeless('2x minecraft:andesite', ['minecraft:cobblestone', 'create:ochrum']);	event.shapeless('2x minecraft:andesite', ['minecraft:cobblestone', 'create:scoria']);	event.shapeless('2x minecraft:andesite', ['minecraft:cobblestone', 'create:scorchia']);	event.shapeless('2x minecraft:andesite', ['minecraft:cobblestone', 'minecraft:tuff']);	event.shapeless('2x minecraft:andesite', ['minecraft:cobblestone', 'minecraft:granite']);	event.shapeless('2x minecraft:andesite', ['minecraft:cobblestone', 'minecraft:deepslate']);
});