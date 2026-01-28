JEIEvents.hideItems(event => {
    const materials = [
        'iron', 'gold', 'copper', 
        'zinc', 'brass', 
        'tin', 'lead', 'silver', 'nickel', 'uranium', 'aluminum', 'steel',
        'bronze', 'electrum', 'constantan', 'invar',
        'osmium'
    ]

    materials.forEach(material => {
        // --- CREATE ---
        // On ne cache pas les originaux si EE n'existe pas, mais ici on assume que EE couvre tout.
        if (material !== 'copper' && material !== 'zinc' && material !== 'brass') {
             // Create n'a pas beaucoup de métaux, mais on cache ce qu'il a en trop si EE le remplace
        }
        // Create Specifics (Doublons Plaques/Nuggets)
        event.hide(`create:${material}_sheet`) 
        event.hide(`create:${material}_nugget`)
        // Zinc Create vs Zinc EE : On garde EE
        if (material === 'zinc') {
            event.hide('create:zinc_ingot')
            event.hide('create:raw_zinc')
            event.hide('create:zinc_nugget')
            event.hide('create:zinc_block')
        }
        if (material === 'brass') {
            event.hide('create:brass_ingot')
            event.hide('create:brass_nugget')
            event.hide('create:brass_block')
        }

        // --- IMMERSIVE ENGINEERING ---
        event.hide(`immersiveengineering:ingot_${material}`)
        event.hide(`immersiveengineering:plate_${material}`)
        event.hide(`immersiveengineering:dust_${material}`)
        event.hide(`immersiveengineering:nugget_${material}`)
        event.hide(`immersiveengineering:raw_${material}`)
        event.hide(`immersiveengineering:storage_${material}`)
        event.hide(`immersiveengineering:raw_block_${material}`)

        // --- ORITECH ---
        event.hide(`oritech:${material}_ingot`)
        event.hide(`oritech:${material}_plate`)
        event.hide(`oritech:${material}_dust`)
        event.hide(`oritech:${material}_nugget`)
        event.hide(`oritech:raw_${material}`)

        // --- ENDER IO ---
        event.hide(`enderio:ingot_${material}`)
        event.hide(`enderio:nugget_${material}`)
        event.hide(`enderio:powder_${material}`) // Poudre/Dust
        event.hide(`enderio:gear_${material}`)
    })

    // --- EXTRAS ---
    // Cacher les poudres vanilla doublons si EnderIO en ajoute
    event.hide('enderio:powder_coal')
    event.hide('enderio:powder_iron')
    event.hide('enderio:powder_gold')
    event.hide('enderio:powder_copper')
    event.hide('enderio:powder_obsidian')
})