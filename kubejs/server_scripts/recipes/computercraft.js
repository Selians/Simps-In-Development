// priority: 10
// ATP Friends: Minecraft Enhanced

/**
 * @file Computer Craft recipe additions for ATP Friends: Minecraft Enhanced.
 * 
 * 
 * 
 */

onEvent('recipes', (event) => {

    // ------------------ Normal computers ------------------ \\

    event.shaped('computercraft:computer_normal', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: '#c:plates/iron',
      B: 'techreborn:computer_cube'
    });

    event.shaped('computercraft:pocket_computer_normal', [
        ' A ',
        'ABA',
        ' A '
      ], {
        A: 'techreborn:red_cell_battery',
        B: 'computercraft:computer_normal'
      });

      event.shaped('computercraft:disk_drive', [
        'AAA',
        'ABA',
        'AAA'
      ], {
        A: '#c:plates/iron',
        B: 'minecraft:jukebox'
      });

      event.shaped('computercraft:monitor_normal', [
        'AAA',
        'ABA',
        'AAA'
      ], {
        A: '#c:plates/iron',
        B: 'techreborn:digital_display'
      });

      event.shaped('computercraft:turtle_normal', [
        'ADA',
        'DBC',
        'ADA'
      ], {
        A: 'ae2:printed_engineering_processor',
        B: 'computercraft:computer_normal',
        C: 'create:brass_hand',
        D: '#c:plates/iron'
      });

      event.shaped('computercraft:wireless_modem_normal', [
        ' A ',
        ' B ',
        '   '
      ], {
        A: 'techreborn:frequency_transmitter',
        B: 'computercraft:wired_modem'
      });

    
    // ------------------ Advanced computers ------------------ \\

    event.shaped('computercraft:computer_advanced', [
        'AAA',
        'ABA',
        'AAA'
      ], {
        A: '#c:plates/gold',
        B: 'computercraft:computer_normal'
      });

      event.shaped('computercraft:pocket_computer_advanced', [
        'AAA',
        'ABA',
        'AAA'
      ], {
        A: '#c:plates/gold',
        B: 'computercraft:pocket_computer_normal'
      });

      event.shaped('computercraft:monitor_advanced', [
        'AAA',
        'ABA',
        'AAA'
      ], {
        A: '#c:plates/gold',
        B: 'computercraft:monitor_normal'
      });

      event.shaped('computercraft:turtle_advanced', [
        'AAA',
        'ABA',
        'AAA'
      ], {
        A: '#c:plates/gold',
        B: 'computercraft:turtle_normal'
      });

      event.shaped('computercraft:wireless_modem_advanced', [
        'AAA',
        'ABA',
        'AAA'
      ], {
        A: '#c:plates/gold',
        B: 'computercraft:wireless_modem_normal'
      });
  
  });
  