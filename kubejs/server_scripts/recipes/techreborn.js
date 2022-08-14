// priority: 10
// Valhelsia: Enhanced Vanilla

/**
 * @file Tech Reborn Additions & Compatibility
 */

/**
 * Tech Reborn Recipe Event Handler
 */
onEvent('recipes', (event) => {
  
  // Grinder Recipe Template
  const grind = (output, input, power, time) => {
    event.custom({
      type: 'techreborn:grinder',
      power: power,
      time: time,
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      results: [
        Item.of(output).toJson()
      ]
    });
  };

  // Implosion Compressor Recipe Template
  const implosion = (outputs, inputs, power, time) => {
    event.custom({
      type: 'techreborn:implosion_compressor',
      power: power,
      time: time,
      ingredients: inputs,
      results: outputs
    });
  };

  // ----- Grinder Recipes -----
  grind('techreborn:marble_dust', 'blockus:marble', 2, 1440);
  grind('minecraft:andesite', 'minecraft:stone', 2, 240);

  // ----- Implosion Compressor Recipes -----
  implosion(['8x ae2:sky_stone_block', '16x techreborn:dark_ashes_dust'], ['8x minecraft:crying_obsidian', '16x minecraft:tnt'], 30, 2000);
  implosion(['8x ae2:sky_stone_block', '4x techreborn:ender_eye_small_dust'], ['8x minecraft:crying_obsidian', '4x minecraft:end_crystal'], 30, 2000);    event.recipes.createPressing('techreborn:refined_iron_plate', 'techreborn:refined_iron_ingot');  event.recipes.createPressing('techreborn:advanced_alloy_plate', 'techreborn:advanced_alloy_ingot');  event.recipes.createPressing('techreborn:aluminium_plate', 'techreborn:aluminium_ingot');  event.recipes.createPressing('techreborn:bronze_plate', 'techreborn:bronze_ingot');  event.recipes.createPressing('techreborn:carbon_plate', 'techreborn:carbon_mesh');  event.recipes.createPressing('techreborn:chrome_plate', 'techreborn:chrome_ingot');  event.recipes.createPressing('techreborn:coal_plate', 'techreborn:coal_dust');  event.recipes.createPressing('techreborn:diamond_plate', 'techreborn:diamond_dust');  event.recipes.createPressing('techreborn:electrum_plate', 'techreborn:electrum_ingot');  event.recipes.createPressing('techreborn:emerald_plate', 'techreborn:emerald_dust');  event.recipes.createPressing('techreborn:invar_plate', 'techreborn:invar_ingot');  event.recipes.createPressing('techreborn:iridium_alloy_plate', 'techreborn:iridium_alloy_ingot');  event.recipes.createPressing('techreborn:iridium_plate', 'techreborn:iridium_ingot');  event.recipes.createPressing('techreborn:lapis_plate', 'minecraft:lapis_block');  event.recipes.createPressing('techreborn:lazurite_plate', 'techreborn:lazurite_dust');  event.recipes.createPressing('techreborn:lead_plate', 'techreborn:lead_ingot');  event.recipes.createPressing('techreborn:nickel_plate', 'techreborn:nickel_ingot');  event.recipes.createPressing('techreborn:obsidian_plate', 'techreborn:obsidian_dust');  event.recipes.createPressing('techreborn:peridot_plate', 'techreborn:peridot_dust');  event.recipes.createCrushing(['1x techreborn:peridot_dust'], 'techreborn:peridot_gem');  event.recipes.createCrushing(['2x techreborn:peridot_dust', Item.of('techreborn:peridot_dust').withChance(0.25)], 'techreborn:peridot_ore');  event.recipes.createPressing('techreborn:platinum_plate', 'techreborn:platinum_ingot');  event.recipes.createPressing('techreborn:quartz_plate', 'techreborn:quartz_dust');  event.recipes.createPressing('techreborn:red_garnet_plate', 'techreborn:red_garnet_dust');  event.recipes.createCrushing(['1x techreborn:red_garnet_dust'], 'techreborn:red_garnet_gem');  event.recipes.createPressing('techreborn:redstone_plate', 'minecraft:redstone_block');  event.recipes.createPressing('techreborn:ruby_plate', 'techreborn:ruby_dust');  event.recipes.createCrushing(['1x techreborn:ruby_dust'], 'techreborn:ruby_gem');  event.recipes.createCrushing(['2x techreborn:ruby_dust', Item.of('techreborn:ruby_dust').withChance(0.25)], 'techreborn:ruby_ore');  event.recipes.createPressing('techreborn:sapphire_plate', 'techreborn:sapphire_dust');  event.recipes.createCrushing(['1x techreborn:sapphire_dust'], 'techreborn:sapphire_gem');  event.recipes.createCrushing(['2x techreborn:sapphire_dust', Item.of('techreborn:sapphire_dust').withChance(0.25)], 'techreborn:sapphire_ore');  event.recipes.createPressing('techreborn:silver_plate', '#c:silver_ingots');  event.recipes.createPressing('techreborn:steel_plate', '#c:steel_ingots');  event.recipes.createPressing('techreborn:tin_plate', 'techreborn:tin_ingot');  event.recipes.createPressing('techreborn:titanium_plate', 'techreborn:titanium_ingot');  event.recipes.createPressing('techreborn:tungsten_plate', 'techreborn:tungsten_ingot');  event.recipes.createPressing('techreborn:tungstensteel_plate', 'techreborn:tungstensteel_ingot');  event.recipes.createPressing('techreborn:yellow_garnet_plate', 'techreborn:yellow_garnet_gem');  event.recipes.createCrushing(['2x techreborn:yellow_garnet_dust'], 'techreborn:yellow_garnet_gem');  
});