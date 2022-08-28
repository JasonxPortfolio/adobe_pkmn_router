//! SPECIAL CASE
// Don't render images for the entire eevee family

export const pokemonByType = {
  bug: [
    ["Caterpie", "Metapod", "Butterfree"],
    ["Weedle", "Kakuna", "Beedrill"],
    ["Paras", "Parasect"],
    ["Venonat", "Venomoth"],
    ["Scyther", "Scizor"],
    ["Pinsir"],
    ["Ledyba", "Ledian"],
    ["Spinarak", "Ariados"],
    ["Yanma"],
    ["Pineco", "Forretress"],
    ["Shuckle"],
    ["Heracross"],
    ["Wurmple", "Silcoon", "Beautifly"],
    ["Wurmple", "Cascoon", "Dustox"],
    ["Surskit", "Masquerain"],
    ["Nincada", "Ninjask", "Shedinja"],
    ["Volbeat"],
    ["Illumise"],
    ["Anorith", "Armaldo"],
  ],
  dark: [
    ["Umbreon"],
    ["Murkrow"],
    ["Sneasel"],
    ["Houndour", "Houndoom"],
    ["Tyranitar"],
    ["Poochyena", "Mightyena"],
    ["Nuzleaf", "Shiftry"],
    ["Sableye"],
    ["Carvanha", "Sharpedo"],
    ["Cacturne"],
    ["Crawdaunt"],
    ["Absol"],
  ],
  dragon: [
    ["Dratini", "Dragonair", "Dragonite"],
    ["Kingdra"],
    ["Vibrava", "Flygon"],
    ["Altaria"],
    ["Bagon", "Shelgon", "Salamence"],
    ["Latias"],
    ["Latios"],
    ["Rayquaza"],
  ],
  electric: [
    ["Pichu", "Pikachu", "Raichu"],
    ["Magnemite", "Magneton"],
    ["Voltorb", "Electrode"],
    ["Elekid", "Electabuzz"],
    ["Jolteon"],
    ["Zapdos"],
    ["Chinchou", "Lanturn"],
    ["Mareep", "Flaaffy", "Ampharos"],
    ["Raikou"],
    ["Electrike", "Manectric"],
    ["Plusle"],
    ["Minun"],
  ],
  fighting: [
    ["Mankey", "Primeape"],
    ["Poliwrath"],
    ["Machop", "Machoke", "Machamp"],
    ["Tyrogue", "Hitmonlee", "Hitmonchan", "Hitmontop"],
    ["Heracross"],
    ["Combusken", "Blaziken"],
    ["Breloom"],
    ["Makuhita", "Hariyama"],
    ["Meditite", "Medicham"],
  ],
  fire: [
    ["Charmander", "Charmeleon", "Charizard"],
    ["Vulpix", "Ninetales"],
    ["Growlithe", "Arcanine"],
    ["Ponyta", "Rapidash"],
    ["Magby", "Magmar"],
    ["Flareon"],
    ["Moltres"],
    ["Cyndaquil", "Quilava", "Typhlosion"],
    ["Slugma", "Magcargo"],
    ["Houndour", "Houndoom"],
    ["Entei"],
    ["Ho-Oh"],
    ["Torchic", "Combusken", "Blaziken"],
    ["Numel", "Camerupt"],
    ["Torkoal"],
  ],
  flying: [
    ["Charizard"],
    ["Butterfree"],
    ["Pidgey", "Pidgeotto", "Pidgeot"],
    ["Spearow", "Fearow"],
    ["Zubat", "Golbat", "Crobat"],
    ["Farfetch'd"],
    ["Doduo", "Dodrio"],
    ["Scyther"],
    ["Gyarados"],
    ["Aerodactyl"],
    ["Articuno"],
    ["Zapdos"],
    ["Moltres"],
    ["Dragonite"],
    ["Hoothoot", "Noctowl"],
    ["Ledyba", "Ledian"],

    ["Togetic"],
    ["Natu", "Xatu"],
    ["Hoppip", "Skiploom", "Jumpluff"],
    ["Yanma"],
    ["Murkrow"],
    ["Gligar"],
    ["Delibird"],
    ["Mantine"],
    ["Skarmory"],
    ["Lugia"],
    ["Ho-Oh"],
    ["Beautifly"],
    ["Taillow", "Swellow"],
    ["Wingull", "Pelipper"],
    ["Masquerain"],
    ["Ninjask"],
    ["Swablu", "Altaria"],
    ["Tropius"],
    ["Salamence"],
    ["Rayquaza"],
  ],
  ghost: [
    ["Gastly", "Haunter", "Gengar"],
    ["Misdreavus"],
    ["Shedinja"],
    ["Sableye"],
    ["Shuppet", "Banette"],
    ["Duskull", "Dusclops"],
  ],
  grass: [
    ["Bulbasaur", "Ivysaur", "Venusaur"],
    ["Oddish", "Gloom", "Vileplume", "Bellossom"],
    ["Paras", "Parasect"],
    ["Bellsprout", "Weepinbell", "Victreebel"],
    ["Exeggcute", "Exeggutor"],
    ["Tangela"],
    ["Chikorita", "Bayleef", "Meganium"],
    ["Hoppip", "Skiploom", "Jumpluff"],
    ["Sunkern", "Sunflora"],
    ["Celebi"],
    ["Treecko", "Grovyle", "Sceptile"],
    ["Lotad", "Lombre", "Ludicolo"],
    ["Seedot", "Nuzleaf", "Shiftry"],
    ["Shroomish", "Breloom"],
    ["Roselia"],
    ["Cacnea", "Cacturne"],
    ["Lileep", "Cradily"],
    ["Tropius"],
  ],
  ground: [
    ["Sandshrew", "Sandslash"],
    ["Nidoqueen"],
    ["Nidoking"],
    ["Diglett", "Dugtrio"],
    ["Geodude", "Graveler", "Golem"],
    ["Onix", "Steelix"],
    ["Cubone", "Marowak"],
    ["Rhyhorn", "Rhydon"],
    ["Wooper", "Quagsire"],
    ["Gligar"],
    ["Swinub", "Piloswine"],
    ["Phanpy", "Donphan"],
    ["Larvitar", "Pupitar"],
    ["Marshtomp", "Swampert"],
    ["Nincada"],
    ["Numel", "Camerupt"],
    ["Trapinch", "Vibrava", "Flygon"],
    ["Barboach", "Whiscash"],
    ["Baltoy", "Claydol"],
    ["Groudon"],
  ],
  ice: [
    ["Dewgong"],
    ["Cloyster"],
    ["Lapras"],
    ["Articuno"],
    ["Sneasel"],
    ["Swinub", "Piloswine"],
    ["Delibird"],
    ["Smoochum", "Jynx"],
    ["Snorunt", "Glalie"],
    ["Spheal", "Sealeo", "Walrein"],
    ["Regice"],
  ],
  normal: [
    ["Pidgey", "Pidgeotto", "Pidgeot"],
    ["Rattata", "Raticate"],
    ["Spearow", "Fearow"],
    ["Cleffa", "Clefairy", "Clefable"],
    ["Igglybuff", "Jigglypuff", "Wigglytuff"],
    ["Meowth", "Persian"],
    ["Farfetch'd"],
    ["Doduo", "Dodrio"],
    ["Lickitung"],
    ["Chansey", "Blissey"],
    ["Kangaskhan"],
    ["Tauros"],
    ["Ditto"],
    ["Eevee"],
    ["Porygon", "Porygon2"],
    ["Snorlax"],
    ["Sentret", "Furret"],
    ["Hoothoot", "Noctowl"],
    ["Togepi", "Togetic"],
    ["Aipom"],
    ["Girafarig"],
    ["Dunsparce"],
    ["Snubbull", "Granbull"],
    ["Teddiursa", "Ursaring"],
    ["Stantler"],
    ["Smeargle"],
    ["Miltank"],
    ["Zigzagoon", "Linoone"],
    ["Taillow", "Swellow"],
    ["Slakoth", "Vigoroth", "Slaking"],
    ["Whismur", "Loudred", "Exploud"],
    ["Azurill"],
    ["Skitty", "Delcatty"],
    ["Spinda"],
    ["Swablu"],
    ["Zangoose"],
    ["Castform"],
    ["Kecleon"],
  ],
  poison: [
    ["Bulbasaur", "Ivysaur", "Venusaur"],
    ["Weedle", "Kakuna", "Beedrill"],
    ["Ekans", "Arbok"],
    ["Nidoran(f)", "Nidorina", "Nidoqueen"],
    ["Nidoran(m)", "Nidorino", "Nidoking"],
    ["Zubat", "Golbat", "Crobat"],
    ["Oddish", "Gloom", "Vileplume"],
    ["Venonat", "Venomoth"],
    ["Bellsprout", "Weepinbell", "Victreebel"],
    ["Tentacool", "Tentacruel"],
    ["Grimer", "Muk"],
    ["Gastly", "Haunter", "Gengar"],
    ["Koffing", "Weezing"],
    ["Spinarak", "Ariados"],
    ["Qwilfish"],
    ["Dustox"],
    ["Roselia"],
    ["Gulpin", "Swalot"],
    ["Seviper"],
  ],
  psychic: [
    ["Abra", "Kadabra", "Alakazam"],
    ["Slowpoke", "Slowbro", "Slowking"],
    ["Drowzee", "Hypno"],
    ["Exeggcute", "Exeggutor"],
    ["Starmie"],
    ["Mr. Mime"],
    ["Smoochum", "Jynx"],
    ["Mewtwo"],
    ["Mew"],
    ["Natu", "Xatu"],
    ["Espeon"],
    ["Unown"],
    ["Wynaut", "Wobbuffet"],
    ["Girafarig"],
    ["Lugia"],
    ["Celebi"],
    ["Ralts", "Kirlia", "Gardevoir"],
    ["Meditite", "Medicham"],
    ["Spoink", "Grumpig"],
    ["Lunatone"],
    ["Solrock"],
    ["Baltoy", "Claydol"],
    ["Chimecho"],
    ["Beldum", "Metang", "Metagross"],
    ["Latias"],
    ["Latios"],
    ["Jirachi"],
    ["Deoxys"],
  ],
  rock: [
    ["Geodude", "Graveler", "Golem"],
    ["Onix"],
    ["Rhyhorn", "Rhydon"],
    ["Omanyte", "Omastar"],
    ["Kabuto", "Kabutops"],
    ["Aerodactyl"],
    ["Sudowoodo"],
    ["Shuckle"],
    ["Magcargo"],
    ["Corsola"],
    ["Larvitar", "Pupitar", "Tyranitar"],
    ["Nosepass"],
    ["Aron", "Lairon", "Aggron"],
    ["Lunatone"],
    ["Solrock"],
    ["Lileep", "Cradily"],
    ["Anorith", "Armaldo"],
    ["Relicanth"],
    ["Regirock"],
  ],
  steel: [
    ["Magnemite", "Magneton"],
    ["Forretress"],
    ["Steelix"],
    ["Scizor"],
    ["Skarmory"],
    ["Mawile"],
    ["Aron", "Lairon", "Aggron"],
    ["Beldum", "Metang", "Metagross"],
    ["Registeel"],
    ["Jirachi"],
  ],
  water: [
    ["Squirtle", "Wartortle", "Blastoise"],
    ["Psyduck", "Golduck"],
    ["Poliwag", "Poliwhirl", "Poliwrath", "Politoed"],
    ["Tentacool", "Tentacruel"],
    ["Slowpoke", "Slowbro", "Slowking"],
    ["Seel", "Dewgong"],
    ["Shellder", "Cloyster"],
    ["Krabby", "Kingler"],
    ["Horsea", "Seadra", "Kingdra"],
    ["Goldeen", "Seaking"],
    ["Staryu", "Starmie"],
    ["Magikarp", "Gyarados"],
    ["Lapras"],
    ["Vaporeon"],
    ["Omanyte", "Omastar"],
    ["Kabuto", "Kabutops"],
    ["Totodile", "Croconaw", "Feraligatr"],
    ["Chinchou", "Lanturn"],
    ["Marill", "Azumarill"],
    ["Wooper", "Quagsire"],
    ["Qwilfish"],
    ["Corsola"],
    ["Remoraid", "Octillery"],
    ["Mantine"],
    ["Suicune"],
    ["Mudkip", "Marshtomp", "Swampert"],
    ["Lotad", "Lombre", "Ludicolo"],
    ["Wingull", "Pelipper"],
    ["Surskit"],
    ["Carvanha", "Sharpedo"],
    ["Wailmer", "Wailord"],
    ["Barboach", "Whiscash"],
    ["Corphish", "Crawdaunt"],
    ["Feebas", "Milotic"],
    ["Spheal", "Sealeo", "Walrein"],
    ["Clamperl", "Huntail", "Gorebyss"],
    ["Relicanth"],
    ["Luvdisc"],
    ["Kyogre"],
  ],
};