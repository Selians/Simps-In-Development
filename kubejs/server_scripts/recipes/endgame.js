// priority: 10
// ATP Friends: Minecraft Enhanced

/**
 * @file Beyond Earth recipe additions for ATP Friends: Minecraft Enhanced.
 * 
 * 
 * 
 */

onEvent('recipes', (event) => {

// ------------------ Neutron Reflector ------------------ \\
  event.shaped('techreborn:neutron_reflector', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'beyond_earth:compressed_ostrum',
    B: 'techreborn:titanium_plate',
    C: 'beyond_earth:compressed_calorite'
  });

});
  