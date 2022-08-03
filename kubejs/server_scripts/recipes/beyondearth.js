// priority: 10
// ATP Friends: Minecraft Enhanced

/**
 * @file Beyond Earth recipe additions for ATP Friends: Minecraft Enhanced.
 * 
 * 
 * 
 */

onEvent('recipes', (event) => {

// ------------------ Nasa workbench ------------------ \\
    event.shaped('beyond_earth:nasa_workbench', [
      'AAA',
      'BCB',
      'DBD'
    ], {
      A: 'create:mechanical_arm',
      B: 'beyond_earth:compressed_steel',
      C: 'techreborn:assembly_machine',
      D: 'ae2:engineering_processor'
    });

// ------------------ Oxygen Tank ------------------ \\
    event.shaped('beyond_earth:oxygen_tank', [
      'BBB',
      'BAB',
      'BBB'
    ], {
      A: 'create:copper_backtank',
      B: 'beyond_earth:compressed_steel'
    });

// ------------------ Rocket Nose Cone ------------------ \\
    event.shaped('beyond_earth:rocket_nose_cone', [
      ' A ',
      ' B ',
      'BCB'
    ], {
      A: 'minecraft:lightning_rod',
      B: 'beyond_earth:compressed_steel',
      C: 'kubejs:wayfinder'
    });

// ------------------ Fuel Tanks ------------------ \\
    event.shaped('beyond_earth:steel_tank', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'beyond_earth:compressed_steel',
      B: 'techreborn:basic_tank_unit'
    });

    event.shaped('beyond_earth:desh_tank', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'beyond_earth:compressed_desh',
        B: 'beyond_earth:steel_tank'
    });

    event.shaped('beyond_earth:ostrum_tank', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'beyond_earth:compressed_ostrum',
        B: 'beyond_earth:desh_tank'
    });

    event.shaped('beyond_earth:calorite_tank', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'beyond_earth:compressed_calorite',
        B: 'beyond_earth:ostrum_tank'
    });


// ------------------ Engines ------------------ \\
    event.shaped('beyond_earth:steel_engine', [
      'ABA',
      ' C ',
      ' D '
    ], {
      A: 'beyond_earth:compressed_steel',
      B: 'techreborn:diesel_generator',
      C: 'beyond_earth:engine_frame',
      D: 'beyond_earth:engine_fan'
    });

    event.shaped('beyond_earth:desh_engine', [
        'ABA',
        ' C ',
        ' D '
    ], {
        A: 'beyond_earth:compressed_desh',
        B: 'techreborn:diesel_generator',
        C: 'beyond_earth:engine_frame',
        D: 'beyond_earth:engine_fan'
    });

    event.shaped('beyond_earth:ostrum_engine', [
        'ABA',
        ' C ',
        ' D '
    ], {
        A: 'beyond_earth:compressed_ostrum',
        B: 'techreborn:diesel_generator',
        C: 'beyond_earth:engine_frame',
        D: 'beyond_earth:engine_fan'
    });

    event.shaped('beyond_earth:calorite_engine', [
        'ABA',
        ' C ',
        ' D '
    ], {
        A: 'beyond_earth:compressed_calorite',
        B: 'techreborn:diesel_generator',
        C: 'beyond_earth:engine_frame',
        D: 'beyond_earth:engine_fan'
    });

});
  