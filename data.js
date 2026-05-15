const edexcelBio = [
  {
    "unit": 1,
    "title": "Organisms and Life Processes",
    "chapters": [
      { "chapterId": "4BI1_01", "num": 1, "title": "Life Processes" },
      { "chapterId": "4BI1_02", "num": 2, "title": "The Variety of Living Organisms" }
    ]
  },
  {
    "unit": 2,
    "title": "Animal Physiology",
    "chapters": [
      { "chapterId": "4BI1_03", "num": 3, "title": "Breathing and Gas Exchange" },
      { "chapterId": "4BI1_04", "num": 4, "title": "Food and Digestion" },
      { "chapterId": "4BI1_05", "num": 5, "title": "Blood and Circulation" },
      { "chapterId": "4BI1_06", "num": 6, "title": "Coordination" },
      { "chapterId": "4BI1_07", "num": 7, "title": "Chemical Coordination" },
      { "chapterId": "4BI1_08", "num": 8, "title": "Homeostasis and Excretion" },
      { "chapterId": "4BI1_09", "num": 9, "title": "Reproduction in Humans" }
    ]
  },
  {
    "unit": 3,
    "title": "Plant Physiology",
    "chapters": [
      { "chapterId": "4BI1_10", "num": 10, "title": "Plants and Food" },
      { "chapterId": "4BI1_11", "num": 11, "title": "Transport in Plants" },
      { "chapterId": "4BI1_12", "num": 12, "title": "Chemical Coordination in Plants" },
      { "chapterId": "4BI1_13", "num": 13, "title": "Reproduction in Plants" }
    ]
  },
  {
    "unit": 4,
    "title": "Ecology and the Environment",
    "chapters": [
      { "chapterId": "4BI1_14", "num": 14, "title": "Ecosystems" },
      { "chapterId": "4BI1_15", "num": 15, "title": "Human Influences on the Environment" }
    ]
  },
  {
    "unit": 5,
    "title": "Variation and Selection",
    "chapters": [
      { "chapterId": "4BI1_16", "num": 16, "title": "Chromosomes, Genes and DNA" },
      { "chapterId": "4BI1_17", "num": 17, "title": "Cell Division" },
      { "chapterId": "4BI1_18", "num": 18, "title": "Genes and Inheritance" },
      { "chapterId": "4BI1_19", "num": 19, "title": "Natural Selection and Evolution" },
      { "chapterId": "4BI1_20", "num": 20, "title": "Selective Breeding" }
    ]
  },
  {
    "unit": 6,
    "title": "Microorganisms and Genetic Modification",
    "chapters": [
      { "chapterId": "4BI1_21", "num": 21, "title": "Using Microorganisms" },
      { "chapterId": "4BI1_22", "num": 22, "title": "Genetic Modification" }
    ]
  }
]

const cieBio = [
  {
    chapters: [
      { chapterId: "0610_01", num: 1, title: "Characteristics and classification of living organisms" },
      { chapterId: "0610_02", num: 2, title: "Organisation of the organism" },
      { chapterId: "0610_03", num: 3, title: "Movement into and out of cells" },
      { chapterId: "0610_04", num: 4, title: "Biological molecules" },
      { chapterId: "0610_05", num: 5, title: "Enzymes" },
      { chapterId: "0610_06", num: 6, title: "Plant nutrition" },
      { chapterId: "0610_07", num: 7, title: "Human nutrition" },
      { chapterId: "0610_08", num: 8, title: "Transport in plants" },
      { chapterId: "0610_09", num: 9, title: "Transport in animals" },
      { chapterId: "0610_10", num: 10, title: "Diseases and immunity" },
      { chapterId: "0610_11", num: 11, title: "Gas exchange in humans" },
      { chapterId: "0610_12", num: 12, title: "Respiration" },
      { chapterId: "0610_13", num: 13, title: "Excretion in humans" },
      { chapterId: "0610_14", num: 14, title: "Coordination and response" },
      { chapterId: "0610_15", num: 15, title: "Drugs" },
      { chapterId: "0610_16", num: 16, title: "Reproduction" },
      { chapterId: "0610_17", num: 17, title: "Inheritance" },
      { chapterId: "0610_18", num: 18, title: "Variation and selection" },
      { chapterId: "0610_19", num: 19, title: "Organisms and their environment" },
      { chapterId: "0610_20", num: 20, title: "Human influences on ecosystems" },
      { chapterId: "0610_21", num: 21, title: "Biotechnology and genetic modification" }
    ]
  }
]

const syllabusData = {
  edexcelBio: { prefix: "4BI1", data: edexcelBio },
  cieBio: { prefix: "0610", data: cieBio }
};

const bioNotes = [
  {
    "description": "",
    "id": "0610_01_01",
    "label": "Characteristics of living organisms",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Term|Definition\nMovement|an action by an organism causing a change in position or place\r\nRespiration|the chemical reactions in cells that break down nutrient molecules and release energy for metabolism\r\nSensitivity|the ability to detect and respond to changes in the internal or external environment\r\nGrowth|a permanent increase in size and dry mass\r\nReproduction|the process that make more of the same kind of organism\r\nExcretion|the removal of waste products of metabolism and substances in excess of requirements\r\nNutrition|taking in of materials for energy, growth and development",
    "id": "0610_01_01",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "0610_01_02",
    "label": "Classification systems",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The binomial nomenclature of naming organisms is an internationally agreed system in which the scientific name of an organism is made up of two parts showing the genus and species.",
    "id": "0610_01_02",
    "label": "Binomial nomenclature",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "A genus is a group of species that have similar or specific characteristics.",
    "label": "Genus",
    "id": "0610_01_02",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "A species is a group of organisms that can reproduce to produce a fertile offspring.",
    "label": "Species",
    "id": "0610_01_02",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Keys simplify the process of identification.\r\nEach key is made up of pairs of contrasting features.\r\nKeys start with quite general characteristics and move on to more specific ones.",
    "label": "Dichotomous keys",
    "id": "0610_01_02",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "All vertebrates share the same basic anatomy; a body with four limbs and one head (two ears, two eyes, two nostrils, one mouth).\nThe forelimb has humerus, radius, ulna, carpals, metacarpals and phalanges.\nEmbryos of different species can have similarities that are not visible when the organisms are fully formed.\nMany animals have body parts that they no longer need.",
    "label": "Anatomical relationship",
    "id": "0610_01_02",
    "type": "list",
    "order": 6,
    "status": "show"
  },
  {
    "description": "Comparing broad similarities in DNA can determine which organisms are closely related.\nGenetic evidence is likely to be more accurate.\nThe shorter branch represents fewer DNA differences and less time for mutation or evolution.",
    "label": "DNA sequencing",
    "id": "0610_01_02",
    "type": "list",
    "order": 7,
    "status": "show"
  },
  {
    "description": "Animalia\nPlantae\nFungi\nProtoctista\nProkaryotes",
    "id": "0610_01_02",
    "label": "Five-kingdom system",
    "type": "list",
    "status": "show",
    "order": 8
  },
  {
    "description": "",
    "id": "0610_01_02",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 9
  },
  {
    "description": "",
    "id": "0610_01_03",
    "label": "The Animal kingdom",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "eukaryotic\nmulticellular\nheterotrophs (animals get energy by eating other plants and animals)\nanimal cells do not have chloroplasts and cell walls\nanimals usually have nervous coordination and are able to move from one place to another\nstore carbohydrates as glycogen\nmost animals reproduce sexually",
    "label": "",
    "id": "0610_01_03",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Insects|Arachnids|Crustacea|Myriapods\r\ndragonfly, wasp|spider, mite|crab, woodlouse|centipede, millipede\r\n3 pairs of legs|4 pairs of legs|5 or more pairs of limbs|10 or more pairs of legs\r\n3 body cavities (head, thorax and abdomen)|2 body cavities (cephalothorax and abdomen)|2 body cavities (cephalothorax and abdomen)|No distinct body cavity\r\n1 pair of antennae|no antennae|2 pairs of antennae|1 pair of antennae\r\n1 pair of compound eyes|several pairs of simple eyes|one pair of compound eyes|simple eyes\r\n2 pairs of wings|pair of pedipalps for biting and poisoning preys|exoskeleton covers over most of the body|",
    "label": "Key features of arthropods",
    "id": "0610_01_03",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Class|Characteristic features\nFish|live in water, breath through gills covered by operculum, have fins and scales, lay jelly-covered eggs in water\nAmphibians|live on land and in water, smooth and moist skin, breathe through lungs and skin, lays jelly-covered eggs in water\nReptiles|dry and scaly skin, breathe through lungs, lays eggs on land with a rubbery and water-proof shells\nBirds|have feathers and wings, breathe through lungs lay eggs with hard shells, have beaks\nMammals|have external ears (pinnae), have hair or fur, breathe through lungs, give birth to live young, feed young with milk",
    "label": "Key features of vertebrates",
    "id": "0610_01_03",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_01_04",
    "label": "The Plant kingdom",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "eukaryotic\nmulticellular\r\nautotrophs (plant cells have chloroplasts and they make their own food by photosynthesis)\r\nplant cells have cell walls made up of cellulose\r\nstore glucose as starch",
    "id": "0610_01_04",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "non-flowering plants\r\nreproduce by spores (not seeds)\r\nhave xylem and phloem like tissues\r\nsporangia are formed on the lower side of the leaf (fronds)\r",
    "id": "0610_01_04",
    "label": "Key features of ferns",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Feature|Monocotyledon|Dicotyledon\nleaf shape|long and narrow|broad\nleaf veins|parallel|branching\ncotyledons|one|two\ngrouping of flower parts|multiple of three|multiple of five",
    "label": "Key features of monocots and dicots",
    "id": "0610_01_04",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "The Fungi kingdom",
    "id": "0610_01_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "eukaryotic\nmostly multicellular\norganised into a mycelium made from thread-like structures called hyphae, which contain many nuclei\ncell walls made of chitin.\nsaprotrophs; they feed by extracellular secretion of digestive enzymes onto food material and absorption of the digested products\ne.g. Mucor is a typical fungus with hyphae and yeast is a single-celled fungus.",
    "id": "0610_01_05",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "0610_01_06",
    "label": "The Protoctist kingdom",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "eukaryotic\nunicellular\nsome are heterotrophic; they have features like an animal cell (e.g. Amoeba)\nsome are autotrophic; and they have features like a plant cell (e.g. Chlorella)\nsome are pathogens (e.g. Plasmodium causes malaria)",
    "id": "0610_01_06",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "0610_01_07",
    "label": "The Prokaryote kingdom",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "unicellular\nchromosomes are not organised into a nucleus\ne.g. bacteria and the blue-green algae",
    "id": "0610_01_07",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "label": "Viruses",
    "id": "0610_01_08",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "have a protein coat and contain either DNA or RNA (viruses are not cells)\nmuch smaller than bacteria\nreproduce only inside living cells\ndo not feed, respire, excrete or grow",
    "label": "",
    "id": "0610_01_08",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Cell structure",
    "id": "0610_02_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "0610_02_01",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Structure|Function\ncell membrane|controls substances in and out of the cells (selectively permeable)\ncytoplasm|jelly-like part, where many chemical reactions occur\nnucleus|contains genetic materials and controls the activity of the cell\nribosomes|protein synthesis\nmitochondria|provide ATP from aerobic respiration\nendoplasmic reticulum|transports proteins to part of the cells where they are needed\ncell wall|prevent the cell from bursting, allow water and salts to pass through (freely permeable)\ncentral vacuole|stores salts and sugars, and helps to keep plant cell firm\nchloroplasts|traps light energy for photosynthesis",
    "label": "Parts of a cell",
    "id": "0610_02_01",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Structure|Plant cell|Animal cell\ncell membrane|✓|✓\ncytoplasm|✓|✓\nnucleus|✓|✓\nribosomes|✓|✓\nmitochondria|✓|✓\nendoplasmic reticulum|✓|✓\ncell wall|✓|✗\ncentral vacuole|✓|✗\nchloroplasts|✓|✗",
    "label": "Similarities and differences in the structure of plant and animal cells",
    "id": "0610_02_01",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Structure|Function\ncell membrane|controls substances in and out of the cells (selectively permeable)\ncytoplasm|jelly-like part, where many chemical reactions occur\ncircular DNA|controls cell division, cell development and cell activities\nplasmids|contain gene that help the process of survival and reproduction of the bacterium\nribosomes|protein synthesis\ncell wall|prevent the cell from bursting, allow water and salts to pass through (freely permeable)\nflagellum|helps movement in some bacteria",
    "id": "0610_02_01",
    "label": "Structure of a bacterial cell",
    "type": "table",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "id": "0610_02_02",
    "label": "Specialised cells",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "When cells are specialised: they do one special job, they develop a distinct shape and special kinds of chemical changes take place in their cytoplasm.",
    "label": "",
    "id": "0610_02_02",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "0610_02_02",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Specialised cell|Special feature|Special function\nRoot hair cell|hair-like projection|increases surface area for absorption\nPalisade mesophyll cell|columnar shape and packed with chloroplasts|traps light energy for photosynthesis\nCiliated cell|cilia (tiny cytoplasmic hairs)|sweeps dust and bacteria in the bronchi and trachea away from the lungs\nNerve cell|very long fibres (axon and dendrite)|conducts electrical impulses to and from the brain and spinal cord\nRed blood cells|biconcave disc-shaped cells containing haemoglobin, no nucleus|transport oxygen around the body\nSperm cell|acrosome in head, mitochondria in midpiece, and a flagellum|fertilisation; acrosome releases enzymes to digest the egg membrane, mitochondria provide energy for movement, flagellum helps the sperm to swim\nEgg cell|large cytoplasm containing food reserves|fertilisation",
    "label": "",
    "id": "0610_02_02",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_02_03",
    "label": "Levels of organisation in organisms",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "organelles → cells → tissue → organ → organ system → organism",
    "id": "0610_02_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "An organelle is a specialized component within a cell that performs specific function.",
    "id": "0610_02_03",
    "label": "Organelle",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "All living organisms are made up of cells. Cells are basic structure and organization in all living organisms. All cells arise from the original cell.",
    "id": "0610_02_03",
    "label": "Cell",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "A tissue is a group of cells with similar structures working together to perform a specific function.",
    "id": "0610_02_03",
    "label": "Tissue",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "An organ is a group of tissues working together to perform a specific function.",
    "label": "Organ",
    "id": "0610_02_03",
    "type": "text",
    "order": 6,
    "status": "show"
  },
  {
    "description": "An organ system is a group of organs with related functions working together to perform a body function.",
    "label": "Organ system",
    "id": "0610_02_03",
    "type": "text",
    "order": 7,
    "status": "show"
  },
  {
    "description": "An organism a living thing that has an organised structure, can react to stimuli, reproduce, grow, adapt and maintain homeostasis.",
    "label": "Organism",
    "id": "0610_02_03",
    "type": "text",
    "order": 8,
    "status": "show"
  },
  {
    "description": "",
    "label": "Microscopy",
    "id": "0610_02_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Magnification is the observed size of an image divided by the actual size of the image.",
    "label": "Magnification",
    "id": "0610_02_04",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "1 mm = 1000 µm\n1 cm = 10 mm\r\n1 m = 100 cm",
    "label": "Converting measurements",
    "id": "0610_02_04",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Diffusion",
    "id": "0610_03_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Diffusion is the net movement of particles from a region of their higher concentration to a region of their lower concentration (down a concentration gradient), as a result of their random movement.",
    "label": "",
    "id": "0610_03_01",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Gas exchange\nTranspiration\nGlucose absorption (both by diffusion and active transport)\nAbsorption of water soluble vitamins",
    "label": "Diffusion in living organisms",
    "id": "0610_03_01",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Particles move around randomly using kinetic energy. The speed with which a particle diffuses through a cell wall or cell membrane will depend on many conditions.",
    "label": "",
    "id": "0610_03_01",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Factor|Effect on rate of diffusion\nSurface area to volume ratio|A larger surface area to volume ratio allows more particles to diffuse at once.\nTemperature|Higher temperature gives particles more kinetic energy, making them move and diffuse faster.\nConcentration gradient|A greater concentration difference increases the rate of diffusion.\nDiffusion distance|A shorter distance allows particles to cross more quickly.",
    "label": "Factors affecting the rate of diffusion",
    "id": "0610_03_01",
    "type": "table",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_03_02",
    "label": "Osmosis",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Osmosis is the net movement of water from a region of higher water potential to a region of lower water potential across the partially permeable membrane.",
    "id": "0610_03_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "If an animal cell is surrounded by distilled water, water enters the cell making it swell up. Unless the extra water is removed, the cell will burst.\r\nIf an animal cell is surrounded by a concentrated solution, water leaves the cell making it shrink.",
    "id": "0610_03_02",
    "label": "Effect of osmosis on animal cells",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "If a plant cell is surrounded by distilled water, water enters the cell. The vacuole expands and the cell becomes turgid.\r\nIf a plant cell is surrounded by a concentrated solution, water leaves the cell. The vacuole shrinks and the cell becomes flaccid. Eventually, the cell membrane is detached from the cell wall (plasmolysis).",
    "id": "0610_03_02",
    "label": "Effect of osmosis on plant cells",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_03_03",
    "label": "Active transport",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Active transport is the movement of particles from a region of lower concentration to a region of higher concentration against the concentration gradient using energy from respiration.",
    "label": "",
    "id": "0610_03_03",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "During active transport, a substance binds to the carrier protein molecule in the cell membrane. The carrier protein changes shape using energy from aerobic respiration to transport the substance into the cell.",
    "label": "",
    "id": "0610_03_03",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Biological molecules",
    "id": "0610_04_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Polymers|Element|Examples|Sub-units\nCarbohydrates|C, H, O|starch, glycogen, cellulose, sucrose|glucose\nFat, oil|C, H, O|vegetable oil, animal fats|fatty acids and glycerol\nProtein|C, H, O, N|enzymes, muscle, haemoglobin, cell membrane proteins|amino acids",
    "label": "",
    "id": "0610_04_01",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Structure of DNA",
    "id": "0610_04_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A DNA molecule is made up of long chains of nucleotides, formed into double-helix.",
    "id": "0610_04_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "A nucleotide is a complex molecule which contains a sugar molecule joined to a phosphate group and an organic base. The organic bases are adenine (A), thymine (T), cytosine (C) and guanine (G). The nucleotides are joined by the complementary base pairing rule: A always pairs with T and C always pairs with G.",
    "id": "0610_04_02",
    "label": "Nucleotide",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "0610_04_03",
    "label": "Food tests",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Biomolecule|Reagent|Observation\nStarch|iodine solution|If starch is present, iodine solution turns brown to blue-black.\nReducing sugar|Benedict's solution and then heat|If glucose is present, the solution turns blue to green, yellow, orange or brick-red.\nProtein|biuret solution|If protein is present, biuret solution turns blue to purple (lilac).\nFat|ethanol and cool water|If fat is present, a white cloudy layer (emulsion) is formed above water.",
    "id": "0610_04_03",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "0610_05_01",
    "label": "Enzymes",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Enzymes are proteins that function as biological catalysts that increase the rate of a metabolic reaction without being used up.",
    "label": "",
    "id": "0610_05_01",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Enzymes are important because they control the reactions in the cell. They make sure that these reactions occur quickly enough for the cell to function.",
    "label": "",
    "id": "0610_05_01",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "0610_05_01",
    "type": "image",
    "order": 4,
    "status": "show"
  },
  {
    "description": "A catalyst is a substance that increases the rate of a chemical reaction and is not changed by the reaction.",
    "label": "Catalyst",
    "id": "0610_05_01",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "The substance on which an enzyme works is called its substrate and the molecules produced are called the products. The part of an enzyme molecule that is responsible for combining with a substrate is called the active site. The active site of an enzyme complementary to a specific substrate so enzymes are specific to one type of chemical reaction. The product is released from the enzyme’s active site and the enzyme is then free to repeat the reaction with more substrate molecules.",
    "id": "0610_05_01",
    "label": "The role of enzymes in reactions",
    "type": "text",
    "status": "show",
    "order": 6
  },
  {
    "description": "temperature\npH\nconcentration of substrate\nthe presence of inhibitors",
    "id": "0610_05_01",
    "label": "Factors affecting rate of enzyme reaction",
    "type": "list",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "id": "0610_05_02",
    "label": "Effect of temperature on the enzyme function",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "0610_05_02",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "As temperature increases, the molecules have more kinetic energy and move faster. Enzymes and substrates collide more often and more enzyme-substrate complexes are formed. As a result, the rate of reaction increases up to the optimum temperature.",
    "id": "0610_05_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "The rate of reaction is fastest at the optimum temperature.",
    "id": "0610_05_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "When the temperature rises beyond optimum temperature, the enzymes become denatured. The shape of the active site changes and it is no longer complementary to the substrate. An enzyme-substrate complex cannot be formed. The rate of reaction decreases.",
    "id": "0610_05_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "id": "0610_05_03",
    "label": "Effect of pH on the enzyme function",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "0610_05_03",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "The rate of reaction is highest at optimum pH.",
    "label": "",
    "id": "0610_05_03",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Extreme pH levels denature enzymes. The shape of the active site changes and it is no longer complementary to the substrate. An enzyme-substrate complex cannot be formed. The rate of reaction decreases.",
    "label": "",
    "id": "0610_05_03",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Most enzymes work best in neutral conditions (pH 7), inside the cells. Pepsin works best at an acidity of pH 2 in the stomach. Pancreatic lipase works best at a slightly alkaline condition (pH 8) in the duodenum.",
    "label": "",
    "id": "0610_05_03",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_06_01",
    "label": "Photosynthesis",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Photosynthesis is the process by which plants synthesise carbohydrates from raw materials using energy from light.",
    "id": "0610_06_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "carbon dioxide + water → glucose + oxygen",
    "label": "Word equation",
    "id": "0610_06_01",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂",
    "label": "Balanced chemical equation",
    "id": "0610_06_01",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Water is absorbed from the soil by roots and transported to leaves through the xylem.\nCarbon dioxide enters the leaf from the air through stomata.\nPhotosynthesis takes place in chloroplasts within leaf cells.\nChlorophyll (green pigment) absorbs light energy from the Sun.\nLight energy is used to split water molecules into hydrogen and oxygen.\nOxygen is released from the leaf as a waste product.\nHydrogen combines with carbon dioxide to form sugar (glucose).\nLight energy is converted into chemical energy stored in carbohydrates.",
    "label": "The process of photosynthesis",
    "id": "0610_06_01",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "stored as starch, which is insoluble in water, compact, and can be broken down into glucose when needed\nconverted into cellulose to form the cell wall\nbroken down during respiration to release energy\nconverted into sucrose for transport in the phloem vessels (translocation)\nused to produce nectar to attract insects for pollination",
    "id": "0610_06_01",
    "label": "Uses of glucose in plants",
    "type": "list",
    "status": "show",
    "order": 6
  },
  {
    "description": "",
    "id": "0610_06_02",
    "label": "Plant minerals",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Mineral|Uses\nnitrates|to make amino acids and proteins\nmagnesium|to make chlorophyll\nphosphate|making DNA and part of cell membranes\npotassium|making enzymes of respiration",
    "id": "0610_06_02",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "label": "Limiting factors of photosynthesis",
    "id": "0610_06_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A limiting factor is the condition or substance that is in the lowest supply and limits the rate of photosynthesis. The rate of photosynthesis is affected by three main limiting factors: carbon dioxide concentration, light intensity, and temperature.",
    "label": "",
    "id": "0610_06_03",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Photosynthesis increases as carbon dioxide levels rise, but beyond a certain point, the rate no longer increases because another factor becomes limiting. Under most conditions, carbon dioxide is the limiting factor for photosynthesis.",
    "id": "0610_06_03",
    "label": "Carbon dioxide",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "More light provides more energy for photosynthesis, increasing the rate until the chloroplasts work at maximum capacity. Light is the limiting factor of photosynthesis in shaded conditions or at night.",
    "id": "0610_06_03",
    "label": "Light intensity",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "Temperature becomes a limiting factor for photosynthesis when it is too low or too high. The rate of photosynthesis speeds up with temperature, but if temperature becomes too high, the enzymes denature and the rate decreases.",
    "id": "0610_06_03",
    "label": "Temperature",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "id": "0610_06_04",
    "label": "Leaf structure",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "0610_06_04",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Their broad, flat shape gives a large surface area for the absorption of sunlight and carbon dioxide.\nMost leaves are thin, so the carbon dioxide only needs to diffuse across short distances to reach the inner cells.",
    "label": "Adaptation for photosynthesis",
    "id": "0610_06_04",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Part|Detail\ncuticle|A waxy layer secreted by the upper epidermis. It is waterproof and helps reduce water loss.\nupper epidermis|A thin, transparent layer that allows light to pass through. It does not contain chloroplasts and acts as a barrier against disease-causing organisms.\npalisade mesophyll|The main region for photosynthesis. Cells are long and column-shaped, and are packed with chloroplasts to absorb light energy. They receive carbon dioxide by diffusion from the air spaces in the spongy mesophyll.\nspongy mesophyll|Made up of loosely packed, irregularly shaped cells. These cells contain fewer chloroplasts than palisade cells. Large air spaces between the cells allow efficient gas exchange (carbon dioxide in and oxygen out).\nvascular bundle|A leaf vein consisting of xylem and phloem. The xylem transports water and mineral ions to the leaf, while the phloem transports sugars and amino acids away from the leaf (translocation).\nlower epidermis|A protective layer that contains stomata. It helps regulate water loss through transpiration and controls gas exchange by diffusion.\nstomata|Tiny pores surrounded by a pair of guard cells, which control opening and closing. Water vapour diffuses out during transpiration, while carbon dioxide diffuses in and oxygen diffuses out during photosynthesis.",
    "label": "",
    "id": "0610_06_04",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Balanced diet",
    "id": "0610_07_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A balanced diet is a diet that contains all the essential nutrients in the correct proportions to maintain good health.",
    "id": "0610_07_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "carbohydrate\nfat\nprotein\nvitamins\nminerals\nfibre (roughage)\nwater.",
    "id": "0610_07_01",
    "label": "Nutrients",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "0610_07_02",
    "label": "Carbohydrates",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Good food sources: rice, potato, yam, cassava, bread, millet, sugary foods (cake, jam, honey)",
    "label": "",
    "id": "0610_07_02",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "source of energy\nstorage (as starch in plants, as glycogen in animals)\nmaking cellulose in plants",
    "label": "Functions",
    "id": "0610_07_02",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Dietary fibre",
    "id": "0610_07_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Cellulose cannot be digested and form fibre or roughage in the alimentary canal. Fibre increases the contents of the colon and helps to retain water. This softens the faeces and prevents constipation.",
    "label": "",
    "id": "0610_07_03",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Lipid (fat or oil)",
    "id": "0610_07_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Fats are solid at room temperature. Oils are liquid at room temperature.",
    "id": "0610_07_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Good food sources: butter, milk, cheese, egg-yolk, animal fat, groundnuts (peanuts)",
    "id": "0610_07_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "source of energy (twice as much as carbohydrate)\r\ninsulation against heat loss\r\ninsulation of nerve fibres\r\nmaking some hormones (oestrogen, progesterone, testosterone)\r\nmaking cell membranes",
    "id": "0610_07_04",
    "label": "Functions",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_07_05",
    "label": "Protein",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Good food sources: meat, fish, eggs, soya, groundnuts, milk, Quorn, cowpeas, falafel",
    "id": "0610_07_05",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "growth and repair of body tissue\r\nmaking enzymes and some hormones (insulin)\r\nmaking cell membrane channels and carriers\r\ncan be broken down to provide energy",
    "label": "Functions",
    "id": "0610_07_05",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Vitamins",
    "id": "0610_07_06",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "water-soluble vitamin\ngood food sources: oranges, lemons, grapefruit, fresh green vegetables, potatoes\nmaking connective tissues of skin, blood vessels, gums\nprevents scurvy (bleeding gum, poor wound healing)",
    "label": "Vitamin C (ascorbic acid)",
    "id": "0610_07_06",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "fat-soluble vitamin\r\ngood food sources: butter, milk, cheese, egg-yolk, liver, fish-liver oil\r\nhelps calcium absorption from the intestine and calcium salt deposition in the bones\r\nprevents rickets (soft and deformed bones) in children",
    "label": "Vitamin D (calciferol)",
    "id": "0610_07_06",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Mineral ions",
    "id": "0610_07_07",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "good food sources: milk, cheese, fish\r\nhealthy bones and teeth\r\nnormal blood clotting\r\nprevents rickets and osteoporosis",
    "label": "Calcium",
    "id": "0610_07_07",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "good food sources: red meat, liver, kidney, eggs, green vegetables\nformation of haemoglobin in red blood cells, for transport of oxygen\nprevents anaemia",
    "id": "0610_07_07",
    "label": "Iron",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "0610_07_08",
    "label": "Water",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "component of most tissues (70% water)\r\ncomponent of body fluids, blood, lymph and tissue fluids\r\ntransport medium for nutrients and waste products (in the blood)\r\nreactant and solvent for chemical reactions (metabolism)\r\nlost as evaporation, sweating, urinating and breathing",
    "label": "",
    "id": "0610_07_08",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Human digestive system",
    "id": "0610_07_09",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A - mouth\nB - salivary gland\nC - oesophagus\nD - stomach\nE - duodenum\nF - ileum\nG - colon\nH - rectum\nI - anus\nJ - liver\nK - gall bladder\nL - pancreas",
    "label": "",
    "id": "0610_07_09",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Function|Definition\nIngestion|the taking of substances, e.g. food and drink, into the body through the mouth\nPhysical digestion|the breakdown of food into smaller pieces without chemical change to the food molecules (chewing food in the mouth, action of muscles in the stomach, emulsification of fats by bile)\nChemical digestion|the breakdown of large insoluble molecules into small soluble molecules\nAbsorption|the movement of nutrients from the intestines into the blood\nAssimilation|the uptake and use of nutrients by cells\nEgestion|the passing out of food that has not been digested or absorbed as faeces through the anus",
    "id": "0610_07_09",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "Structure|Function\nmouth|ingestion; physical digestion by teeth; chemical digestion of starch into maltose by amylase\nsalivary gland|produces saliva which contains amylase; lubricate food and make small pieces stick together\noesophagus|transfers food from the mouth to the stomach by peristalsis\nstomach|produces gastric juice which contains hydrochloric acid and pepsin; hydrochloric acid kills bacteria; chemical digestion of protein into amino acids by pepsin; physical digestion by peristalsis (churn food into a liquid)\nduodenum|receives pancreatic juice for chemical digestion of proteins, fats and starch; receives bile to emulsify fats (physical digestion)\nileum|chemical digestion of proteins, fats and starch; absorption of digested food molecules and water\ncolon|absorption of water from undigested food; absorption of bile salts to send back to the liver\nrectum|store faeces\nanus|egestion of faeces\nliver|makes bile containing salts to emulsify fats (physical digestion); assimilation of digested food; deamination of excess amino acids\ngall bladder|stores bile which is be secreted into the duodenum through the bile duct\npancreas|secretes pancreatic juice into the duodenum through the pancreatic duct; pancreatic juice contains trypsin for chemical digestion of proteins into amino acids, lipase for chemical digestion of fats into glycerol and fatty acids and amylase for chemical digestion of starch into maltose",
    "id": "0610_07_09",
    "label": "Parts of the digestive system",
    "type": "table",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_07_10",
    "label": "Human teeth",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "label": "",
    "id": "0610_07_10",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "|position in the mouth|shape|function\nA - incisors|front|chisel-shaped|biting off pieces of food\nB - canine|either side of incisors|more pointed|biting off pieces of food\nC - premolar|behind canines|have 2 cusps, 1-2 roots|chewing and grinding\nD - molar|back|have 4-5 cusps, 2-3 roots|chewing and grinding",
    "label": "",
    "id": "0610_07_10",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "A - enamel (a very hard layer)\r\nB - dentine\r\nC - pulp cavity (contains nerve and blood vessels)\r\nD - cement\r\nE - crown\r\nF - gum\r\nG - root",
    "id": "0610_07_10",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_07_11",
    "label": "Bile",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Bile made in the liver and stored in the gall bladder, and secreted into duodenum through the bile duct.\nIt contains bile salts, but does not contain enzymes.\nBile salts emulsify the fats, breaking into small droplets with a large surface area for more efficient digestion by lipase.\nBile is slightly alkaline, neutralising the acidic mixture of food and gastric juices in the duodenum. The enzymes secreted into duodenum work best under alkaline conditions.",
    "id": "0610_07_11",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "0610_07_12",
    "label": "Chemical digestion",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Saliva contains amylase, which begins the digestion of starch into maltose in the mouth.\r\nIn the stomach, carbohydrates are not chemically digested.\r\nThe pancreas secretes amylase into the duodenum, where it continues the digestion of starch into maltose.\r\nThe membranes of the epithelial cells lining the villi contain maltase, which breaks down maltose into glucose.",
    "id": "0610_07_12",
    "label": "Chemical digestion of carbohydrates",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "label": "",
    "id": "0610_07_12",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "In the stomach, pepsin breaks down proteins into peptides.\r\nThe pancreas secretes trypsin into the duodenum, where it continues the digestion of proteins into peptides.\r\nThe membranes of the epithelial cells lining the villi contain peptidase, which breaks down peptides into amino acids.",
    "label": "Chemical digestion of proteins",
    "id": "0610_07_12",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "0610_07_12",
    "type": "image",
    "order": 5,
    "status": "show"
  },
  {
    "description": "enzyme|source of enzyme|digestive action|site of action\namylase|salivary glands|starch → maltose|mouth\npepsin|stomach|proteins → peptides|stomach\namylase|pancreas|starch → maltose|small intestine\ntrypsin|pancreas|proteins → peptides|small intestine\nlipase|pancrease|lipids → glycerol and fatty acids|small intestine\nmaltase|wall of small intestine|maltose → glucose| small intestine\npeptidases|wall of small intestine|peptides → amino acids|small intestine",
    "label": "",
    "id": "0610_07_12",
    "type": "table",
    "order": 6,
    "status": "show"
  },
  {
    "description": "",
    "label": "Absorption of nutrients",
    "id": "0610_07_13",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Ileum absorbs nearly all of digested food and most of the water. Glucose and amino acids are absorbed into capillaries, which joins up to form the hepatic portal vein. Fats and a large proportion of fatty acids and glycerol are absorbed into lacteals, which flows into the lymphatic system.",
    "label": "",
    "id": "0610_07_13",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "a long tube that provides a large surface to absorb the digested food\r\ninternal surface contains folds, which contains tiny projections called villi\r\nlining epithelium is very thin and outer membrane of each epithelial cell has microvilli\r\neach villus contains a dense network of blood capillaries and lacteal",
    "id": "0610_07_13",
    "label": "Adaptive features of ileum",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "0610_07_13",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_09_01",
    "label": "Circulatory systems",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The circulatory system is a system of blood vessels with a pump and valves to ensure a one-way flow of blood.",
    "id": "0610_09_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "The blood goes through the heart once for each complete circulation of the body.",
    "id": "0610_09_01",
    "label": "Single circulatory system",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "A - The atrium receives blood.\nB - The ventricle pumps blood.\nC - Blood is oxygenated in the gills.\nD - The blood flows to all parts of the body before returning to the heart.",
    "label": "",
    "id": "0610_09_01",
    "type": "image",
    "order": 4,
    "status": "show"
  },
  {
    "description": "The blood passes twice through the heart during one complete circuit: once on its way to the body and again on its way to the lungs.",
    "label": "Double circulatory system",
    "id": "0610_09_01",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "A - atria\r\nB - ventricles\r\nC - pulmonary circuit\r\nD - systemic circuit\r\nE - septum\r",
    "label": "",
    "id": "0610_09_01",
    "type": "image",
    "order": 6,
    "status": "show"
  },
  {
    "description": "septum prevents mixing of oxygenated and deoxygenated blood\r\nhigher blood pressure in the systemic circuit to provide oxygenated blood and nutrients to body cells\r\nlower pressure in the pulmonary circuit to prevent damage to capillaries in the lungs",
    "id": "0610_09_01",
    "label": "Advantages of double circulation",
    "type": "list",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "id": "0610_09_02",
    "label": "Heart",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "RA - right atrium\r\nRV - right ventricle\r\nLA - left atrium\r\nLV - left ventricle\r\nVC - vena cava\r\nPA - pulmonary artery\r\nPV - pulmonary vein\r\nA - aorta\r\nAV - atrioventricular valve\r\nSV - semilunar valve\r\nS - septum\r\nM - muscle",
    "label": "Vertical section of the heart",
    "id": "0610_09_02",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "RA - right atrium\r\nRV - right ventricle\r\nLA - left atrium\r\nLV - left ventricle\r\nVC - vena cava\r\nPA - pulmonary artery\r\nPV - pulmonary vein\r\nA - aorta\r\nC - coronary artery",
    "label": "External view of the heart",
    "id": "0610_09_02",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "The wall of the chambers are made up of cardiac muscle. The atria have thinner muscle walls than ventricles. The left ventricle wall is thicker than the right ventricle wall because the left ventricle needs to produce enough pressure to pump blood to all main organs of the body.",
    "label": "",
    "id": "0610_09_02",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "The vena cava brings deoxygenated blood from the body tissues into the right atrium.\r\nThe blood passes from the right atrium into the left ventricle below.\r\nThe left ventricle pumps blood into the pulmonary arteries.\r\nBlood is oxygenated in the lungs.\r\nThe pulmonary veins bring oxygenated blood from the lungs into the left atrium.\r\nThe blood passes from the left atrium into the left ventricle below.\r\nThe left ventricle pumps blood into the aorta, which carries oxygenated blood to the body.",
    "id": "0610_09_02",
    "label": "Cardiac cycle",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "The septum separates oxygenated blood in the left chambers mixing with deoxygenated blood in the right chambers.",
    "id": "0610_09_02",
    "label": "Septum",
    "type": "text",
    "status": "show",
    "order": 6
  },
  {
    "description": "The atrioventricular valves and the semilunar valves prevent blood flowing backwards.",
    "id": "0610_09_02",
    "label": "Valves",
    "type": "text",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "label": "Effect of physical activity on the heart rate",
    "id": "0610_09_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Heart is the number of heart beats per minute.\nHeart rate can be monitored by measuring pulse rate, listening to heart sound or ECG.\nAt rest, the heart beats 70 times a minute.\nExercise increases heart rate to supply more oxygen and glucose to muscles.\nAfter exercise, the heart rate gradually drops to its resting state.\nAdrenaline released during exercise or stress also increases heart rate.",
    "label": "",
    "id": "0610_09_03",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Coronary heart disease",
    "id": "0610_09_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Coronary arteries supply oxygenated blood to the cardiac muscle.",
    "label": "",
    "id": "0610_09_04",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Coronary heart disease is a condition where the coronary arteries cannot deliver enough oxygenated blood to the heart muscle, due to the deposition of fatty substances.",
    "label": "",
    "id": "0610_09_04",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Genetics: family history of coronary heart disease\r\nOlder age\r\nMale gender: oestrogen has some protection from coronary heart disease in women\r\nUnhealthy diet: too much fat or energy\r\nEmotional stress\r\nLack of physical exercise\r\nSmoking\r\nHigh blood pressure\r\nDiabetes\r",
    "label": "Risk factors of coronary heart disease",
    "id": "0610_09_04",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Eat a balanced diet (low in saturated fats, cholesterol and salt)\r\nStay at a healthy body weight\r\nRegular physical exercise\r\nQuit smoking\r\nControl high blood pressure\r\nControl blood glucose level",
    "label": "Prevention of coronary heart disease",
    "id": "0610_09_04",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "Comparison of blood vessels",
    "id": "0610_09_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Structure|Related function\nthick and tough wall with muscles, elastic fibres and fibrous tissue|prevents bursting and maintains pressure wave\nnarrow lumen|helps to maintain blood pressure\nno valve|high pressure prevents blood flowing backwards",
    "label": "Artery",
    "id": "0610_09_05",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Structure|Related function\nthin wall, mainly fibrous tissue with little muscle or elastic fibres|carries blood at low pressure\nlarge lumen|to reduce resistance to blood flow\nvalves present|to prevent back-flow of blood",
    "label": "Vein",
    "id": "0610_09_05",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Structure|Related function\npermeable wall, one cell thick, with no muscle or elastic tissue|allows diffusion of materials between the capillary and surrounding tissues\nlumen approximately one red blood cell wide|blood cells pass through slowly to allow diffusion of materials and tissue fluid",
    "id": "0610_09_05",
    "label": "Capillary",
    "type": "table",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_09_06",
    "label": "Major blood vessels in human circulation",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A - pulmonary artery (highest CO₂ concentration;\r\nlowest O₂ concentration )\r\nB - pulmonary vein (highest O₂ concentration;\r\nlowest CO₂ concentration )\r\nC - aorta (thickest wall; highest pressure)\r\nD - vena cava\r\nE - hepatic artery\r\nF - hepatic vein (highest urea concentration)\r\nG - hepatic portal vein (highest concentration of nutrients after meal)\r\nH - renal artery\r\nI - renal vein (lowest urea concentration)",
    "label": "",
    "id": "0610_09_06",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Blood",
    "id": "0610_09_07",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Blood consists of red blood cells, white blood cells and platelets, floating in plasma.",
    "label": "",
    "id": "0610_09_07",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "biconcave (disc-like) shape\r\nno nucleus\r\ncontains haemoglobin, which combines with oxygen\r\nlives for 4 months, then broken down into bilirubin and excreted in bile",
    "id": "0610_09_07",
    "label": "Red blood cells",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "larger than red blood cells\nlymphocytes have large and rounded nuclei, and produce antibodies specific to the pathogen\nphagocytes have an irregular-shaped nuclei, and engulf and destroy harmful bacteria and cell debris (phagocytosis)",
    "id": "0610_09_07",
    "label": "White blood cells",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "pieces of blood cells\r\nhelp to clot blood at wounds, stop bleeding and prevent pathogen entering the body",
    "id": "0610_09_07",
    "label": "Platelets",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "Plasma is the liquid part of the blood, which transports dissolved substances around the body.",
    "label": "Plasma",
    "id": "0610_09_07",
    "type": "list",
    "order": 6,
    "status": "show"
  },
  {
    "description": "Substance|From|To\r\noxygen|lungs|whole body\r\ncarbon dioxide|whole body|lungs\r\nurea|liver|kidneys\r\nhormones|endocrine glands|target organs\r\ndigested food|intestine|whole body\r\nheat|liver and muscles|whole body",
    "label": "",
    "id": "0610_09_07",
    "type": "table",
    "order": 7,
    "status": "show"
  },
  {
    "description": "",
    "label": "Blood clotting",
    "id": "0610_09_08",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "When blood vessels are damaged, platelets clump together and block smaller capillaries.\nSoluble fibrinogen is changed into insoluble fibrin by the action of enzymes.\nFibrin forms a network (mash) trapping red blood vessels to form a blood clot.\nThe clot stops further loss of blood and prevents entry of pathogens into the wound.",
    "id": "0610_09_08",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "0610_10_01",
    "label": "Pathogens and transmission",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A pathogen is a disease-causing organism.",
    "id": "0610_10_01",
    "label": "Pathogen",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "A transmissible disease is a disease in which the pathogen can be passed from one host to another.",
    "id": "0610_10_01",
    "label": "Transmissible disease",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "Pathogens responsible for transmissible diseases can be spread either through direct contact or indirectly.",
    "id": "0610_10_01",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "Transmission|Description|Example\nDirect contact|transfer of pathogens through direct contact with blood or other body fluids|HIV\nIndirect contact|infection caused by pathogens present on contaminated surfaces|food poisoning\nAirborne, droplet or aerosol infection|infection caused by inhaling droplets containing viruses or bacteria|colds, flu, measles, chickenpox\nContamination by houseflies|transmission of pathogens by houseflies from waste to food|Food poisoning, amoebic dysentery, polio",
    "label": "",
    "id": "0610_10_01",
    "type": "table",
    "order": 5,
    "status": "show"
  },
  {
    "description": "clean water supply\nwater treatment\nhygienic food preparation\ngood personal hygiene\nwaste disposal\nsewage treatment",
    "label": "Controlling disease",
    "id": "0610_10_01",
    "type": "list",
    "order": 6,
    "status": "show"
  },
  {
    "description": "",
    "label": "Cholera",
    "id": "0610_10_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Cholera is an infectious disease caused by bacteria, Vibrio cholera.",
    "label": "",
    "id": "0610_10_02",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "When Vibrio cholera is ingested, they invade epithelial cells in the small intestine, where they reproduce rapidly and release toxins.\nToxins reach the large intestine and cause the secretion of chloride ions into the lumen.\nWater potential inside the lumen decreases.\nWater is drawn into the lumen by osmosis.\nFaeces become watery, leading to serious diarrhoea.\nLoss of body fluids and salt leads to dehydration and kidney failure.",
    "label": "Pathophysiology",
    "id": "0610_10_02",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_10_02",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 4
  },
  {
    "description": "rehydration and replacement of the salts lost by oral rehydration solution\nantibiotics",
    "id": "0610_10_02",
    "label": "Management",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "id": "0610_10_03",
    "label": "Immunity",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Immunity is the ability of the body to resist or fight against pathogens.",
    "id": "0610_10_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Defense mechanism|Example\nMechanical barriers|skin and nose hair\nChemical barriers|stomach acid and mucus layer\nCellular immunity|phagocytosis and antibody production",
    "id": "0610_10_03",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "|Active immunity|Passive immunity\nDefinition|the defence against a pathogen by antibody production in the body|defence against pathogens by antibodies acquired from another individual\nResponse|slower|faster\nDuration|long-lasting|short-lived\nMemory cells|formed|not formed\nExamples|infection (natural), vaccination (artificial)|antibodies from mother (natural), antibody injection (artificial)",
    "id": "0610_10_03",
    "label": "Differences between active and passive immunity",
    "type": "table",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_10_04",
    "label": "Vaccination",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A vaccine contains antigens, killed microorganisms, harmless forms of microorganisms, or a toxoid (an inactivated toxin).\nWhen a vaccine is given, it stimulates lymphocytes to produce antibodies against a specific antigen. Some lymphocytes develop into memory cells.\nIf the person later encounters the same antigen, these memory cells enable lymphocytes to produce a large number of antibodies rapidly, triggering a secondary immune response.\nThese antibodies bind to the antigens on the pathogen and neutralise them.",
    "id": "0610_10_04",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "Specific antibodies have complementary shapes that fit particular antigens. Therefore, each antibody is highly specific to a particular antigen. They bind to these antigens, causing bacteria to clump together or neutralising the toxins (poisonous proteins) they produce.",
    "label": "Antibodies",
    "id": "0610_10_04",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "When a large proportion of the population is vaccinated, the spread of infection is greatly reduced. As a result, even unvaccinated individuals are protected. This community protection is called herd immunity.",
    "label": "Herd immunity",
    "id": "0610_10_04",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Human breathing system",
    "id": "0610_11_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_11_01",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Structure|Function\nnose/nasal cavity|filters, warm and moistens air\npharynx|passage for air from nose to trachea\nepiglottis|prevents food and water entering the airway during swallowing\nlarynx (voice box)|contains vocal cords, joins onto trachea\ntrachea (wind pipe)|carries air to and from the lungs\nbronchi|two main branches of trachea leading to each lung\nbronchioles|smaller branches of bronchi inside the lungs\nalveoli|tiny air sacs adapted for gas exchange by diffusion\npleural membrane|double layer surrounding the lungs\nribs and sternum|protects the lungs and heart, move to ventilate the lungs",
    "id": "0610_11_01",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "0610_11_02",
    "label": "Trachea",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "C-shaped cartilage rings in the trachea and bronchi prevents the collapse of the airway during breathing.",
    "id": "0610_11_02",
    "label": "Cartilage",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Goblet cells secrete mucus, which traps pathogens and dust, preventing them from entering the alveoli.",
    "id": "0610_11_02",
    "label": "Goblet cells",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "Ciliated cells have cilia, which move in a flicking motion to sweep the mucus upwards and away from the lungs.",
    "label": "Ciliated epithelium",
    "id": "0610_11_02",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Alveoli",
    "id": "0610_11_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "0610_11_03",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Alveoli in the lungs provide a very large surface area for gas exchange by diffusion.\nAlveoli are surrounded by a network of capillaries, which increases the surface area for gas exchange.\nVentilation of the lungs and blood flow in the capillaries maintain high oxygen and low carbon dioxide concentration inside the alveoli.\nAir in the alveoli and blood are separated by only two layers of thin cells: the alveolar wall and the capillary endothelium.\nOxygen dissolves in the thin film of moisture before diffusing across the alveolar wall.",
    "label": "",
    "id": "0610_11_03",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Ventilation of the lungs",
    "id": "0610_11_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Ventilation is the process of moving air in and out of the lungs to help gas exchange between the alveoli and the capillaries.",
    "id": "0610_11_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "The diaphragm contracts and flattens.\nExternal intercostal muscles contract while internal intercostal muscles relax, pulling the ribcage upwards and outwards.\nThe volume of the thorax increases, and the lungs expand.\nAir pressure in the lungs decreases, and air is drawn in through the nose and trachea to equalise the air pressure.",
    "id": "0610_11_04",
    "label": "Inhalation",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "The diaphragm relaxes and returns to its dome shape.\nExternal intercostal muscles relax while internal intercostal muscles contract, pulling the ribcage downwards.\nThe lungs are elastic, and they shrink back to their relaxed volume.\nAir pressure in the lungs increases, and air is forced out of the lungs to equalise the air pressure.",
    "id": "0610_11_04",
    "label": "Exhalation",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_11_05",
    "label": "Differences in composition of inspired and expired air",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "|Inhaled air|Exhaled air\nOxygen|21%|16%|O₂ is absorbed into the blood during gas exchange and body cells use oxygen for respiration\nCarbon dioxide|0.04%|4%|CO₂ is produced during respiration and released from blood into alveoli\nWater vapour|variable|saturated|Air is warmed and moistened in the alveoli\nTemperature|variable|warmer|",
    "id": "0610_11_05",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "Limewater is used as a test for the presence of carbon dioxide. It turns milky.",
    "label": "",
    "id": "0610_11_05",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Effects of physical activity on the rate and depth of breathing",
    "id": "0610_11_06",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "At rest, the breathing rate is about 12 breaths per minute, with about 500 cm³ of air exchanged each breath. During exercise, the rate and depth of breathing increase.",
    "id": "0610_11_06",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "During exercise, muscles carry out more aerobic respiration, producing more carbon dioxide in the blood.\nThe medulla detects the increase in carbon dioxide and signals the diaphragm and intercostal muscles to contract and relax more rapidly.\nFaster and deeper breathing supplies extra oxygen to the muscles and removes excess carbon dioxide.",
    "label": "",
    "id": "0610_11_06",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Respiration",
    "id": "0610_12_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Respiration is the chemical reactions in living cells that release energy from glucose.",
    "label": "",
    "id": "0610_12_01",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "muscle contraction\nprotein synthesis\ncell division\nactive transport\ngrowth\nnerve impulse transmission\nmaintenance of a constant body temperature",
    "id": "0610_12_01",
    "label": "Uses of energy released in respiration",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "0610_12_02",
    "label": "Aerobic respiration",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Aerobic respiration is the term for the chemical reactions in cells that use oxygen to break down nutrient molecules to release energy.",
    "id": "0610_12_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "glucose + oxygen → carbon dioxide + water",
    "label": "Word equation for aerobic respiration",
    "id": "0610_12_02",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
    "label": "Balanced chemical equation for aerobic respiration",
    "id": "0610_12_02",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Anaerobic respiration",
    "id": "0610_12_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Anaerobic respiration is the chemical reactions in cells that break down nutrient molecules to release energy without using oxygen.",
    "label": "",
    "id": "0610_12_03",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "glucose → ethanol + carbon dioxide",
    "id": "0610_12_03",
    "label": "Word equation for anaerobic respiration in yeast",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂",
    "label": "Balanced chemical equation for anaerobic respiration in yeast",
    "id": "0610_12_03",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "glucose → lactate",
    "label": "Word equation for anaerobic respiration in muscles",
    "id": "0610_12_03",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "During vigorous exercise, oxygen demand is very high and muscle cells respire anaerobically and produce lactate.\r\nLactate builds up in the muscles and is transported in the blood to the liver.\r\nOxygen is required to remove lactate in the liver.\r\nThe volume of oxygen needed to completely oxidize the lactate is called oxygen debt.\r\nThe person continues to breathe faster and deeper to repay the oxygen debt.",
    "label": "Oxygen debt",
    "id": "0610_12_03",
    "type": "text",
    "order": 6,
    "status": "show"
  },
  {
    "description": "",
    "label": "Differences between aerobic respiration and anaerobic respiration",
    "id": "0610_12_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "|Aerobic Respiration|Anaerobic respiration\nsubstrate|glucose + oxygen|glucose\nproduct (in animals)|carbon dioxide + water|lactate\nproduct (in yeast)|carbon dioxide + water|ethanol + carbon dioxide\nenergy released|large amount of ATP|low amount of ATP\nsite|mitochondria|cytoplasm",
    "label": "",
    "id": "0610_12_05",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Excretion",
    "id": "0610_13_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Excretion is the removal of waste products of metabolism and substances in excess of requirements.",
    "id": "0610_13_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Organ|Waste products\nLungs|excrete carbon dioxide, water vapour\nKidneys|excrete urea, excess water, ions, hormones and drugs\nLiver|breaks down excess amino acids and produces urea, detoxifis chemicals and excretes bile",
    "id": "0610_13_01",
    "label": "Excretory organs",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "0610_13_02",
    "label": "The renal system",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "label": "",
    "id": "0610_13_02",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Organ|Function\nkidneys|filter the blood to form urine\nrenal arteries|supply blood to the kidneys\nrenal veins|carry blood away from the kidneys\nureter|allows the flow of urine from the kidneys to the bladder\nbladder|temporarily stores urine until it is released\nurethra|carries urine out of the body.",
    "label": "",
    "id": "0610_13_02",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "The kidney tissue consists of many capillaries and tiny tubes, called renal tubules, held together with connective tissue.",
    "label": "Microscopic structure of the kidneys",
    "id": "0610_13_02",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_13_02",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 5
  },
  {
    "description": "Part|Description\ncortex|the outer region of the kidney\nmedulla|the middle layer of the kidney\npelvis|the funnel like structure",
    "id": "0610_13_02",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 6
  },
  {
    "description": "",
    "id": "0610_13_03",
    "label": "Nephron",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A nephron is a single glomerulus with its renal capsule, renal tubule and blood capillaries.",
    "id": "0610_13_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "0610_13_03",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 3
  },
  {
    "description": "Structure|Description\nglomerulus|a network of capillaries where blood is filtered under high pressure\nbasement membrane|a thin layer that filters small molecules but preventing proteins from passing\nBowman’s capsule|a cup-shaped structure that surrounds the glomerulus and collects the filtrate\nproximal convoluted tubule|a coiled tubule that selectively reabsorbs glucose, amino acids, and water and salts from the ultrafiltrate\nLoop of Henle|a U-shaped section that reabsorbs most water\ndistal convoluted tubule|a coiled tubule that fine-tunes ion and pH balance under hormonal control\ncollecting duct|a tube that regulates water reabsorption under ADH control before passing it to the renal pelvis",
    "label": "",
    "id": "0610_13_03",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "The blood in the glomerulus is filtered into Bowman's capsule under high pressure.\nThe glomerular filtrate contains water and small molecules such as urea, glucose, and ions.\nThe concentrations of urea and glucose in the filtrate are the same as in the plasma.\nThe glomerular filtrate does not contain protein because they are large and they cannot pass through the basement membrane.",
    "label": "Filtration",
    "id": "0610_13_03",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "The proximal convoluted tubule reabsorbs useful substances (glucose, water and some of the ions) into the blood.\nAll glucose is selectively reabsorbed into the blood at the proximal convoluted tubule by active transport.\nThe urine contains no glucose.",
    "id": "0610_13_03",
    "label": "Reabsorption at the proximal convoluted urine",
    "type": "list",
    "status": "show",
    "order": 6
  },
  {
    "description": "More water and ions are reabsorbed into the blood in the loop of Henle, which helps to concentrate the urine.\nThe collecting duct regulates the reabsorption of water to control urine concentration under the influence of ADH.\nThe urine contains urea, water and excess mineral ions.",
    "id": "0610_13_03",
    "label": "Formation of urine",
    "type": "list",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "id": "0610_13_04",
    "label": "Liver",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The liver absorbs amino acids from the blood and uses them to build proteins. This process is called assimilation, where amino acids are converted into body proteins such as plasma proteins (e.g. fibrinogen), which are important for blood clotting.",
    "label": "Assimilation",
    "id": "0610_13_04",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "The body cannot store excess amino acids. In the liver, they are broken down in a process called deamination.",
    "label": "Deamination",
    "id": "0610_13_04",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "The nitrogen-containing part is removed and converted into ammonia, then changed into urea.\nUrea is carried in the blood to the kidneys and excreted in urine.\nThe remaining part of the amino acid can be used to form carbohydrates or fats or used in respiration.",
    "label": "",
    "id": "0610_13_04",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Drugs",
    "id": "0610_15_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A drug is any substance taken into the body that modifies or affects chemical reactions in the body.",
    "label": "",
    "id": "0610_15_01",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Antibiotics are substances produced by microorganisms such as bacteria or fungi. Antibiotics kill bacteria by disrupting the production of cell wall or stop the growth of bacteria by interfering with protein synthesis..",
    "label": "Antibiotics",
    "id": "0610_15_01",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Viruses have a different structure to bacteria, so they are not affected by antibiotics.",
    "id": "0610_15_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_15_02",
    "label": "Antibiotic-resistant bacteria",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "MRSA (methicillin-resistant Staphylococcus aureus) is one type of  bacteria resistant to several antibiotics (superbugs).",
    "id": "0610_15_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "There is variation within a population of bacteria due to mutations. Some bacteria may have a mutation that gives resistance to an antibiotic.\nWhen an antibiotic is used, it acts as a selection pressure.\nNon-resistant bacteria are killed by the antibiotic, while antibiotic-resistant bacteria survive.\nThe antibiotic-resistant bacteria reproduce asexually by binary fission, passing the resistance gene to their offspring.\nOver many generations, the number of antibiotic-resistant bacteria increases.\nEventually, most of the bacterial population becomes resistant to the antibiotic by natural selection.\nOveruse and misuse of antibiotics increase the development of antibiotic-resistant bacteria.",
    "id": "0610_15_02",
    "label": "Development of antibiotic-resistant bacteria",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Use antibiotics only when necessary (prescribed by doctors)\nComplete the full course of treatment\nDo not use antibiotics for viral infections",
    "id": "0610_15_02",
    "label": "Reducing antibiotic-resistant bacteria",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_15_01",
    "label": "Inheritance",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A chromosome is a DNA molecule made up of sections called genes.",
    "id": "0610_15_01",
    "label": "Chromosome",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "A haploid nucleus is a nucleus containing a single set of unpaired chromosomes (e.g. in sperm and egg cells).\r\nA diploid nucleus is a nucleus containing two sets of chromosomes (e.g. in body cells).",
    "id": "0610_15_01",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "A gene is a length of DNA that codes for a protein.",
    "id": "0610_15_01",
    "label": "Gene",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "An allele is an alternative form of a gene.",
    "label": "Allele",
    "id": "0610_15_01",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_15_02",
    "label": "Sex inheritance",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The sex of a person is determined by X and Y chromosomes, called the sex chromosomes.",
    "id": "0610_15_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "XX in female body cells and females produce gametes (eggs) that all carry an X chromosome.\nXY in male body cells and males produce two types of gametes (sperm): 50% carry X chromosome and 50% carry Y chromosome",
    "id": "0610_15_02",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "X (egg) + X (sperm) → XX = female\nX (egg) + Y (sperm) → XY = male",
    "id": "0610_15_02",
    "label": "Sex determination",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "The ratio of male to female offspring is 1 : 1.",
    "id": "0610_15_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "label": "Protein synthesis",
    "id": "0610_15_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Protein synthesis happens in two main stages: transcription and translation.",
    "label": "",
    "id": "0610_15_03",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Transcription occurs in the nucleus.\nDNA unwinds and mRNA is formed using DNA as a template.\nmRNA has complementary bases to the DNA template strand.\nmRNA leaves nucleus through nuclear pore and DNA remains in the nucleus.",
    "label": "Transcription",
    "id": "0610_15_03",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Translation occurs in the cytoplasm.\nmRNA attaches to ribosome.\nRibosome reads mRNA codons.\ntRNA brings specific amino acids.\nAmino acids join to form a polypeptide chain",
    "label": "Translation",
    "id": "0610_15_03",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "DNA is made of nucleotides containing bases: A, T, C, G.\nThe sequence of bases forms a genetic code.\nA gene is a sequence of DNA bases that codes for one protein.\nEvery 3 bases (a triplet / codon) codes for one amino acid\nEach protein is made of amino acids joined in a specific order.",
    "label": "Genetic code",
    "id": "0610_15_03",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "DNA contains genes.\nA gene control which amino acids are used and the sequence of amino acids.\nDifferent amino acid sequences gives different folding which create a specific 3D shape.\nThe shape determines function of a protein (e.g. enzymes, antibodies, membrane carriers, receptors)",
    "id": "0610_15_03",
    "label": "DNA and cell function",
    "type": "list",
    "status": "show",
    "order": 6
  },
  {
    "description": "All body cells contain the same genes in their nuclei. Only some genes are switched on (expressed) in a cell and unused genes are switched off. Cells make only the proteins they need and this allows cells to become specialised.",
    "id": "0610_15_03",
    "label": "Gene expression",
    "type": "text",
    "status": "show",
    "order": 7
  },
  {
    "description": "DNA gene → mRNA → ribosome → amino acid chain → protein → cell function",
    "id": "0610_15_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 8
  },
  {
    "description": "",
    "id": "0610_15_04",
    "label": "Mitosis",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Mitosis is nuclear division giving rise to genetically identical cells.",
    "id": "0610_15_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Before mitosis, each chromosome is copied to form two identical chromatids.\nDuring mitosis, chromosomes separate, maintaining the chromosome number in each daughter cell that is formed.\nEach daughter cell has the same number of chromosomes as the parent cell.",
    "id": "0610_15_04",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Growth: increases number of cells in an organism\nRepair: replaces damaged or worn-out cells\nReplacement: replaces old cells (e.g. skin cells)\nAsexual reproduction: produces genetically identical offspring",
    "label": "Role of mitosis",
    "id": "0610_15_04",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Stem cells are unspecialised cells.\nThey can divide by mitosis.\nThey produce new cells that can become specialised.",
    "label": "Stem cells",
    "id": "0610_15_04",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_15_05",
    "label": "Meiosis",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Meiosis is a reduction division in which the chromosome number is halved from diploid to haploid, resulting in genetically different cells.",
    "id": "0610_15_05",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Meiosis takes place in the testes and ovaries of mammals, and the anthers and ovules of flowering plants. The cells formed are gametes (sperm and egg cell in mammals; ovule and pollen grain nuclei in flowering plants).",
    "id": "0610_15_05",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "During fertilisation, a sperm cell and an egg cell fuse to form a zygote, which restore the diploid number of chromosomes.",
    "label": "Role of meiosis",
    "id": "0610_15_05",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_15_06",
    "label": "Comparison of mitosis and meiosis",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Feature|Mitosis|Meiosis\nDNA replication before cell division|Yes|Yes\nNumber of cell divisions|One|Two\nNumber of daughter cells produces|Two|Four\nPloidy|Diploid|Haploid\nGenetic variation in the daughter cells|No|Yes",
    "id": "0610_15_06",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "0610_15_07",
    "label": "Monohybrid inheritance",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Monohybrid inheritance is the inheritance of a single characteristic controlled by one gene with two alleles.",
    "id": "0610_15_07",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Term|Definition\nInheritance|the transmission of genetic information from generation to generation\nGenotype|the genetic make-up of an organism in terms of the alleles present\nPhenotype|the observable features of an organism\nHomozygous|having two identical alleles of a particular gene\nHeterozygous|having two different alleles of a particular gene\nDominant|an allele that is expressed if it is present in the genotype\nRecessive|an allele that is only expressed when there is no dominant allele of the gene present in the genotype\nCodominance|both alleles in heterozygous organisms contribute to the phenotype\nSex-linked characteristic|a feature in which the gene responsible is located on a sex chromosome, which makes it more common in one sex than in other",
    "label": "",
    "id": "0610_15_07",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Let A = dominant allele, and a = recessive allele",
    "id": "0610_15_07",
    "label": "Patterns of monohybrid inheritance",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "Genotype of parents|Genotype of offsprings|Phenotype of offsprings\nAA × AA|AA|all dominant\naa × aa|aa|all recessive\nAA × aa|Aa|all dominant\nAA × Aa|1AA : 1Aa|all dominant\nAa × aa|1Aa : 1aa|1 dominant : 1 recessive\nAa × Aa|1AA : 2Aa : 1aa|3 dominant : 1 recessive",
    "id": "0610_15_07",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 5
  },
  {
    "description": "When all the offspring have the same characteristic as the parents, this is called pure breeding for this characteristic.",
    "id": "0610_15_07",
    "label": "Pure breeding",
    "type": "text",
    "status": "show",
    "order": 6
  },
  {
    "description": "",
    "id": "0610_15_08",
    "label": "Pedigrees",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A pedigree diagram shows how a genetic trait is inherited through generations.",
    "label": "",
    "id": "0610_15_08",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "0610_15_08",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Step|Description\nIdentify possible genotypes|recessive condition (aa); dominant condition (AA or Aa)\nLook for carriers (recessive traits)|unaffected individuals with affected parents or children must be heterozygous carriers (Aa)",
    "label": "Interpreting family pedigrees",
    "id": "0610_15_08",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Test-cross",
    "id": "0610_15_09",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A test cross is a genetic cross used to find out whether an organism with a dominant phenotype is homozygous dominant (AA) or heterozygous (Aa). It is done by crossing the unknown organism with a homozygous recessive (aa) individual.",
    "label": "",
    "id": "0610_15_09",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "If all offspring show dominant trait, parent is AA.\nIf offspring show 1:1 ratio, parent is Aa.",
    "label": "",
    "id": "0610_15_09",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_15_10",
    "label": "ABO blood group inheritance",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The ABO blood group is controlled by three alleles: Iᴬ, Iᴮ and Iᵒ.\nIᴬ and Iᴮ are codominant\nIᵒ is recessive",
    "id": "0610_15_10",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "Genotype|Blood group\nIᴬIᴬ or IᴬIᵒ|A\nIᴮIᴮ or IᴮIᵒ|B\nIᴬIᴮ|AB\nIᵒIᵒ|O",
    "label": "",
    "id": "0610_15_10",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "0610_15_10",
    "type": "image",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Red-green colour blind inheritance",
    "id": "0610_15_11",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "sex-linked recessive condition\ngene is located the X chromosome\nmales are more affected than females",
    "id": "0610_15_11",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "In males, only need one faulty allele is needed to express the condition. Females need two faulty alleles to be colour blind.",
    "id": "0610_15_11",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "0610_16_01",
    "label": "Variation",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Variation is the differences between individuals of the same species.",
    "id": "0610_16_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Type of variation|Definition|Example\nContinuous variation|results in a range of phenotypes between two extremes, usually controlled by a number of genes and can be influenced by the environment|height, body mass\nDiscontinuous variation|limited number of phenotypes with no intermediates, caused by a single gene and cannot be changed by the environment|tongue rolling, eye colour, ABO blood group",
    "id": "0610_16_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "label": "Mutation",
    "id": "0610_16_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Gene mutation is a random change in the base sequence of DNA.",
    "id": "0610_16_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "0610_19_01",
    "label": "Food webs and food chains",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The Sun is the principal source of energy for food chains.",
    "id": "0610_19_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Term|Definition\nfood chain|the diagram that shows the transfer of energy from one organism to the next; a food chain always begins with a producer\nfood web|a network of interconnected food chains\r\nproducer|an organism that makes its own organic nutrients from sunlight through photosynthesis\r\nconsumer|an organism that gets energy by feeding on other organisms\r\nherbivore|an animal that gets energy by eating plants\r\ncarnivore|an animal that gets energy by eating other animals\r\ndecomposer|an organism that gets energy from dead or waste organic material\r\ntrophic level|the position of an organism in a food chain, food web or ecological pyramid",
    "id": "0610_19_01",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "label": "Ecological pyramids",
    "id": "0610_19_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "The pyramid of numbers represents the relative number of organisms at each trophic level. Sometimes the pyramid of numbers is upside down, for example fleas feeding on a bird like a bee-eater.",
    "label": "Pyramid of numbers",
    "id": "0610_19_02",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "The pyramid of biomass represents the proportion of dry mass of organisms at each trophic level. The pyramid of biomass is nearly always the correct pyramid shape.",
    "label": "Pyramid of biomass",
    "id": "0610_19_02",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "The pyramid of energy represents the proportion of energy available at each trophic level. Producers have the greatest amount of energy. Each successive level shows a reduced amount of energy. Approximately 10% of the energy is transferred to the next trophic level.",
    "label": "Pyramid of energy",
    "id": "0610_19_02",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "not every organism in that trophic level is eaten\r\nnot all of the organism is eaten\r\nnot all of the organism is digested and energy lost in faeces\r\nsome energy is lost as heat during respiration\r\nsome energy is lost in movement",
    "label": "",
    "id": "0610_19_02",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_19_03",
    "label": "The carbon cycle",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "0610_19_03",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Process|Description\nPhotosynthesis|Plants take in carbon dioxide and convert it into glucose using light energy.\nFossilisation|Dead organisms are buried and, over millions of years, form fossil fuels containing carbon.\nRespiration|Living organisms release carbon dioxide into the atmosphere by breaking down glucose.\nDecomposition|Microorganisms break down dead organisms and release carbon dioxide back into the air.\nCombustion|Burning fossil fuels or biomass releases carbon dioxide into the atmosphere.",
    "id": "0610_19_03",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "label": "The nitrogen cycle",
    "id": "0610_19_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Plants absorb nitrates to make amino acids and proteins\r\nAnimals eat the proteins.\r\nProteins are broken down to remove the nitrogen by the process of deamination.\r\nSoil nitrates are derived naturally from excretory products of animals and the dead remains of living organisms.\r\nMicroorganisms are an important part in the nitrogen cycle. They are involved in decomposition, nitrification, denitrification and nitrogen fixation.\r",
    "label": "",
    "id": "0610_19_04",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "0610_19_04",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Process|Chemical change|Microorganisms\nDecomposition|organic compounds → ammonia|breakdown of organic compounds by decomposers\nNitrification|NH4+ → NO2− → NO3−|oxidation of nitrogen compounds by nitrifying bacteria\nDenitrification|nitrogen compounds → N2 (gas)|breakdown of nitrates into nitrogen gas by denitrifying bacteria\nNitrogen fixation|N2 (gas) → nitrogen compounds|conversion of nitrogen gas into ammonia by nitrogen fixing bacteria in root nodules of legumes; formation of oxides of nitrogen by lightning",
    "id": "0610_19_04",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_19_05",
    "label": "Ecosystem",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "An ecosystem is a community of organisms and their environment, interacting together.",
    "id": "0610_19_05",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "A habitat is the environment where an organism lives. A habitat provides organisms with food, water, shelter, and space.",
    "id": "0610_19_05",
    "label": "Habitat",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "A community is all the populations of different species in an ecosystem.",
    "id": "0610_19_05",
    "label": "Community",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "A population is a group of organisms of one species, living and interacting in the same area, at the same time.",
    "label": "Population",
    "id": "0610_19_05",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "a good food supply increases the population size\r\ncompetition among same species or different species limits the population growth\r\nincrease in predator decreases the population of preys\r\ndiseases decrease the population size",
    "id": "0610_19_05",
    "label": "Factors affecting population growth",
    "type": "text",
    "status": "show",
    "order": 6
  },
  {
    "description": "Phase|Reason\nLag phase|slow population growth as organisms adapt to new environment\r\nExponential phase|rapid population growth where reproduction rate is much faster than mortality rate, and very little competition for availability of nutrients\r\nStationary phase|growth rate is the same as death rate as there is not enough resources to support increasing population\r\nDeath phase|reproduction rate is slower than mortality rate as there is increased competition for nutrients, accumulation of waste products and spread of diseases",
    "id": "0610_19_05",
    "label": "Population growth curve",
    "type": "table",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "id": "0610_19_05",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 8
  },
  {
    "description": "",
    "id": "0610_20_01",
    "label": "Methods of increasing food supply",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "intensificaiton of agriculture\nuse of chemical fertilisers to improve yield\nuse of pesticides and herbicides to reduce pests and weeds\nselective breeding to improve yield\nmonoculture\nintensive livestock production",
    "label": "",
    "id": "0610_20_01",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Monoculture",
    "id": "0610_20_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Monoculture is the growing of one crop species over a large area. It replaces natural vegetation (trees, shrubs, grasses) with a single crop.",
    "label": "",
    "id": "0610_20_02",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Higher yield\nEasier use of machinery\nMore efficient and profitable\nLess competition for crops",
    "label": "Advantages",
    "id": "0610_20_02",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Reduces biodiversity (loss of natural habitats)\nDisrupts natural ecosystems\nCrops are more vulnerable to disease, drought, or flooding\nCauses soil nutrient depletion\nLeads to soil erosion and degradation\nWildlife is restricted to small uncultivated areas",
    "label": "Negative impacts of monoculture",
    "id": "0610_20_02",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Intensive livestock production",
    "id": "0610_20_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Intensive livestock farming is also called factory farming where animals (e.g. chickens, calves) are kept in large indoor sheds.",
    "id": "0610_20_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Very high yield\nAutomated systems (feeding, milking, egg collection)\nLess labour required\nEasier management and protection",
    "id": "0610_20_03",
    "label": "Advantages",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Waste can enter rivers and cause eutrophication.\nOvergrazing occurs when grass is eaten down to the roots and the soil is compacted by hooves, leading to soil erosion.\nDiseases spread more easily because animals are kept in crowded conditions.\nAnimals are less able to cope with extreme conditions.",
    "id": "0610_20_03",
    "label": "Negative impacts of intensive livestock production",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_20_04",
    "label": "Habitats and biodiversity",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Biodiversity is the number of different species that live in an area.",
    "id": "0610_20_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Intensive agriculture: removal of hedgerows to create larger fields, and monoculture crops replace diverse plant communities\nUrbanisation: building towns and cities destroys habitats\nExtraction of natural resources: to meet the increasing demand for raw materials and energy\nChemical pollution: industrial waste, sewage, and fertilisers, which can lead to bioaccumulation\nPlastic pollution: non-biodegradable plastics can have detrimental\r\neffects on aquatic and terrestrial ecosystems.",
    "label": "Causes of habitat loss",
    "id": "0610_20_04",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Habitat destruction can disrupt food chains and food webs.\nIf one species is lost, organisms that depend on it for food may also decline.\nLoss of a predator can cause prey populations to increase uncontrollably.\nThis leads to imbalance in ecosystems and reduced biodiversity.\nIndirect effects can be severe, even if only one species is removed.",
    "label": "Negative effects of habitat destruction on food chains and food webs",
    "id": "0610_20_04",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Loss of habitats and food sources leads to extinction and reduced biodiversity\nSoil erosion increases, damaging land and aquatic habitats\nFlooding becomes more frequent and disrupts ecosystems\nCarbon dioxide increases due to fewer trees, causing global warming and climate change",
    "label": "Negative effects of deforestation",
    "id": "0610_20_04",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "Eutrophication",
    "id": "0610_20_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "0610_20_05",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Main sources of pollutants are chemical fertilisers and untreated sewage.\nNitrates are highly soluble in water and are washed out of the soil by rain (leaching), leading to excess nitrates in water and causing eutrophication.\nExcess nutrients cause rapid growth of algae (algal bloom). The algae form a thick layer on the water surface, blocking sunlight.\nWhen the algae die, they are decomposed by bacteria, which use up the dissolved oxygen in the water.\nLow oxygen levels cause aquatic plants and animals to die. At extremely low oxygen levels, only anaerobic bacteria can survive.",
    "id": "0610_20_05",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "label": "Greenhouse effect and climate change",
    "id": "0610_20_06",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Carbon dioxide increases due to deforestation, burning fossil fuels, and increasing number of animals.\nCarbon dioxide (and methane) traps heat, causing the enhanced greenhouse effect and global warming.\nEffects include ice melting, sea level rise, extreme weather, and species extinction.\nSince the Industrial Revolution, carbon dioxide levels have steadily increased due to human activity.",
    "label": "",
    "id": "0610_20_06",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Conservation programmes",
    "id": "0610_20_07",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A sustainable resource is one that can be removed from the environment without it running out.",
    "label": "Sustainable resource",
    "id": "0610_20_07",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Education\nProtected areas\nLegal quotas\nReplanting",
    "id": "0610_20_07",
    "label": "Conservation of forests",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Education\nClosed seasons\nProtected areas\nControl of net types and mesh size\nLegal quotas\nMonitoring species population",
    "id": "0610_20_07",
    "label": "Conservation of fish stocks",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "Using laws to protect the habitat\nUsing wardens to protect the habitat\nReducing public access to the habitat\nControlling water drainage or grazing to protect habitat destruction\nEducation\nCaptive breeding and reintroduction\nSeed banks (for plants)\nUse of Artificial Insemenation (AI) and In Vitro Fertilisation (IVF)  in captive breeding programmes",
    "label": "Conservation of endangered species",
    "id": "0610_20_07",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "Reduced genetic variation and increased disease vulnerablility\nInbreeding and appearance of recessive traits\nHigher risk of extinction",
    "label": "Effects of decreasing population of a species",
    "id": "0610_20_07",
    "type": "list",
    "order": 6,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_20_08",
    "label": "Reason for conservation programmes",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Preserve a wide range of species\nMaintain genetic variation within species\nProtect habitats so more species can survive\nUse breeding programmes to increase variation",
    "label": "Increasing biodiversity",
    "id": "0610_20_08",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Protect endangered species from dying out\nUse captive breeding programmes (AI and IVF)\nReintroduce species into the wild\nStore seeds and genes in gene banks or seed banks",
    "label": "Reducing extinction",
    "id": "0610_20_08",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Protect fragile habitats (e.g. wetlands, forests)\nCreate national parks and nature reserves\nPrevent habitat destruction (deforestation, drainage)\nRestore damaged ecosystems",
    "label": "Protecting vulnerable ecosystems",
    "id": "0610_20_08",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Maintain food chains and predator-prey balance\nPrevent overpopulation or removal of key species\nKeep nutrient cycles working properly\nAvoid ecosystem imbalance caused by human activity",
    "label": "Maintaining ecosystem functions",
    "id": "0610_20_08",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "Biotechnology",
    "id": "0610_21_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Biotechnology is the application of biological organisms, systems or processes to manufacturing and service industries.",
    "id": "0610_21_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Products|Examples\nFood and drink|Yoghurt; Bread (yeast fermentation); Lactose-free milk (using lactase); Fruit juice (using pectinase); Mycoprotein\nMedical products|Insulin; Vaccine; Antibiotics (e.g. Penicillin from Penicillium)\nAgricultural products|Golden rice\nIndustrial products|Biofuel; Enzymes in biological washing powders",
    "id": "0610_21_01",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "Bacteria can be grown easily and raise few ethical concerns.\nAll organisms share the same genetic code, so genes can be transferred.\nThey reproduce very quickly and produce large amounts of useful products in a short time.\nThey are very small and do not take much space.\nBacteria contain plasmids which can be used in genetic modification.\nThey can make complex molecules (e.g. insulin)",
    "id": "0610_21_01",
    "label": "Bacteria in biotechnology",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "Yeast respires without oxygen (fermentation)\nGlucose → ethanol + carbon dioxide\nBiofuels: ethanol is used as a renewable fuel\nBread-making: carbon dioxide makes dough rise (ethanol evaporates during baking)",
    "label": "Anaerobic respiration in yeast",
    "id": "0610_21_01",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "Pectinase breaks down pectin in plant cell walls\nIncreases juice yield\nProduces clearer juice",
    "id": "0610_21_01",
    "label": "Pectinase in fruit juice production",
    "type": "list",
    "status": "show",
    "order": 6
  },
  {
    "description": "Remove stains effectively at low temperatures\nProtease breaks down proteins into amino acids\nLipase breaks down fats into fatty acids and glycerol\nAmylase breaks down starch into sugars",
    "label": "Biological washing powders",
    "id": "0610_21_01",
    "type": "list",
    "order": 7,
    "status": "show"
  },
  {
    "description": "Lactase breaks down lactose into glucose and galactose\nMakes milk suitable for lactose-intolerant people\nMilk tastes sweeter",
    "label": "Lactase in lactose-free milk",
    "id": "0610_21_01",
    "type": "list",
    "order": 8,
    "status": "show"
  },
  {
    "description": "Penicillium is grown and reproduced in suitable conditions.\nThe microorganism is inoculated into a sterile fermenter.\nIt undergoes exponential growth in the fermenter.\nNutrients, oxygen, temperature, and pH are carefully controlled.\nPenicillin is produced as a byproduct during growth.\nSamples are taken regularly to check when penicillin production is maximum.\nThe culture is removed from the fermenter.\nPenicillin is extracted, filtered, and purified.",
    "label": "Penicillin",
    "id": "0610_21_01",
    "type": "list",
    "order": 9,
    "status": "show"
  },
  {
    "description": "",
    "label": "Industrial fermenter",
    "id": "0610_21_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "An industrial fermenter is a large vessel used to grow microorganisms (like yeast or bacteria) under controlled conditions to produce useful products such as antibiotics, enzymes, alcohol, and food additives.",
    "label": "",
    "id": "0610_21_02",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "0610_21_02",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Nutrients|Nutrients are added into the fermenter through an inlet.\nAir|If the organism respire aerobically, filtered air is supplied through air inlet. The air is filtered to prevent contamination.\nTemperature|Respiration produces heat. To prevent overheating, the fermenter is surrounded by a water jacket, through which cold water circulates, keeping the temperature at the best level for growth.\npH|The pH of the contents can be adjusted by adding acid or alkali to keep it constant.\nStirring paddles|Stirring paddles mix up contents. This keeps the microorganisms in the suspension in the liquid to get more exposure to nutrients and to keep the temperature even throughout the vessel.\nWaste products|Gases such as carbon dioxide may be produced and are removed through an outlet, as they can be toxic to the cultured microorganisms.\nSterilisation|Before the fermenter is filled with nutrients and culture, it is cleaned and sterilised using very hot steam under high pressure. This prevents bacteria or fungi from competing with the cultured organism and avoids contamination by unwanted microorganisms.",
    "id": "0610_21_02",
    "label": "Conditions controlled in a fermenter",
    "type": "table",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "0610_21_03",
    "label": "Genetic modification",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Genetic modification involves the transfer of genes from one organism to an unrelated species.",
    "id": "0610_21_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "0610_21_03",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 3
  },
  {
    "description": "Plasmids are isolated from a bacterium and are opened with a specific restriction enzyme.\nThe gene to be transferred is cut from the donor DNA using the same restriction enzyme to produce matching sticky ends with complementary base sequences.\nThe opened-up plasmid and the isolated gene are mixed with a DNA ligase enzyme to create recombinant plasmids.\nBacteria are incubated with the recombinant plasmids. Some bacteria will take up plasmids.\nThe bacterium containing plasmid could be used to produce useful products.\nThe inserted gene is expresse and bacteria are cultered in fermenters to produce large amount of products.",
    "label": "Producing genetically modified bacteria",
    "id": "0610_21_03",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "0610_21_04",
    "label": "Genetically-modified crops",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Resistant to herbicides and pesticides\nResistant to diseases and pests\nCan tolerate harsh environmental conditions (e.g. drought, flooding, cold)\nCan be modified to provide additional nutrients (e.g. vitamin A, iron)\nIncrease crop yield, quality, and appearance\nReduce the need for fertilisers (e.g. nitrogen-fixing crops)",
    "id": "0610_21_04",
    "label": "Advantages",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "Modified genes may spread to wild plants through pollination\nSeeds are often expensive\nFarmers may not be able to save and reuse seeds\nMay reduce biodiversity\nAdded nutrients may not be sufficient to solve deficiencies\nSome consumers are unwilling to buy GM products",
    "id": "0610_21_04",
    "label": "Disadvantages",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_01_01",
    "label": "Characteristics of living organisms",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Term|Definition\nMovement|an action by an organism causing a change in position or place\r\nRespiration|the chemical reactions in cells that break down nutrient molecules and release energy for metabolism\r\nSensitivity|the ability to detect and respond to changes in the internal or external environment\r\nGrowth|a permanent increase in size and dry mass\r\nReproduction|the process that make more of the same kind of organism\r\nExcretion|the removal of waste products of metabolism and substances in excess of requirements\r\nNutrition|taking in of materials for energy, growth and development",
    "id": "4BI1_01_01",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_01_02",
    "label": "Structure and function of cell components",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_01_02",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Structure|Function\ncell membrane|controls substances in and out of the cells (selectively permeable)\ncytoplasm|jelly-like part, where many chemical reactions occur\nnucleus|contains genetic materials and controls the activity of the cell\nribosomes|protein synthesis\nmitochondria|provide ATP from aerobic respiration\nendoplasmic reticulum|transports proteins to part of the cells where they are needed\ncell wall|prevent the cell from bursting, allow water and salts to pass through (freely permeable)\ncentral vacuole|stores salts and sugars, and helps to keep plant cell firm\nchloroplasts|traps light energy for photosynthesis",
    "id": "4BI1_01_02",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "Structure|Plant cell|Animal cell\ncell membrane|✓|✓\ncytoplasm|✓|✓\nnucleus|✓|✓\nribosomes|✓|✓\nmitochondria|✓|✓\nendoplasmic reticulum|✓|✓\ncell wall|✓|✗\ncentral vacuole|✓|✗\nchloroplasts|✓|✗",
    "label": "Similarities and differences in the structure of plant and animal cells",
    "id": "4BI1_01_02",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Enzymes",
    "id": "4BI1_01_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Enzymes are proteins that function as biological catalysts that increase the rate of a metabolic reaction without being used up.",
    "id": "4BI1_01_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Enzymes are important because they control the reactions in the cell. They make sure that these reactions occur quickly enough for the cell to function.",
    "id": "4BI1_01_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_01_03",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 4
  },
  {
    "description": "A catalyst is a substance that increases the rate of a chemical reaction and is not changed by the reaction.",
    "id": "4BI1_01_03",
    "label": "Catalyst",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "The substance on which an enzyme works is called its substrate and the molecules produced are called the products. The part of an enzyme molecule that is responsible for combining with a substrate is called the active site. The active site of an enzyme complementary to a specific substrate so enzymes are specific to one type of chemical reaction. The product is released from the enzyme’s active site and the enzyme is then free to repeat the reaction with more substrate molecules.",
    "id": "4BI1_01_03",
    "label": "The role of enzymes in reactions",
    "type": "text",
    "status": "show",
    "order": 6
  },
  {
    "description": "temperature\npH\nconcentration of substrate\nthe presence of inhibitors",
    "id": "4BI1_01_03",
    "label": "Factors affecting rate of enzyme reaction",
    "type": "list",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "id": "4BI1_01_04",
    "label": "Effect of temperature on the enzyme function",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_01_04",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "As temperature increases, the molecules have more kinetic energy and move faster. Enzymes and substrates collide more often and more enzyme-substrate complexes are formed. As a result, the rate of reaction increases up to the optimum temperature.",
    "id": "4BI1_01_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "The rate of reaction is fastest at the optimum temperature.",
    "id": "4BI1_01_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "When the temperature rises beyond optimum temperature, the enzymes become denatured. The shape of the active site changes and it is no longer complementary to the substrate. An enzyme-substrate complex cannot be formed. The rate of reaction decreases.",
    "id": "4BI1_01_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "id": "4BI1_01_05",
    "label": "Effect of pH on the enzyme function",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_01_05",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "The rate of reaction is highest at optimum pH.",
    "id": "4BI1_01_05",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "Extreme pH levels denature enzymes. The shape of the active site changes and it is no longer complementary to the substrate. An enzyme-substrate complex cannot be formed. The rate of reaction decreases.",
    "label": "",
    "id": "4BI1_01_05",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Most enzymes work best in neutral conditions (pH 7), inside the cells. Pepsin works best at an acidity of pH 2 in the stomach. Pancreatic lipase works best at a slightly alkaline condition (pH 8) in the duodenum.",
    "label": "",
    "id": "4BI1_01_05",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_01_06",
    "label": "Investigating the effect of temperature on the activity of amylase",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_01_06",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Place equal volumes of starch solution and amylase into a test tube.\r\nPut the test tube into a water bath at a 30°C temperature.\r\nEvery 30 seconds, take a small sample of the mixture and place it on a spotting tile containing a drop of iodine solution.\r\nRecord the time it takes for the iodine to stop turning blue-black.\r\nRepeat the experiment at several different temperatures (e.g. 0°C, 20°C, 37°C, 60°C).\r",
    "id": "4BI1_01_06",
    "label": "Procedure",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "The time taken for starch to disappear changes with temperature. It is fastest at around 37°C temperature and slower at lower or higher temperatures.",
    "id": "4BI1_01_06",
    "label": "Observation",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "Enzyme activity increases with temperature up to an optimum temperature (around 37°C for most human enzymes). Above this temperature, the enzyme is denatured and it can no longer function.",
    "id": "4BI1_01_06",
    "label": "Conclusion",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "label": "Investigating the effect of pH on the activity of amylase",
    "id": "4BI1_01_07",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_01_07",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Add amylase solution, starch solution, and a buffer solution of a specific pH into a test tube.\r\nEvery 30 seconds, take a small sample from the mixture and place it on a spotting tile containing a drop of iodine solution.\r\nRecord the time when iodine stops turning blue-black.\r\nRepeat the experiment using buffers of different pH values.\r",
    "id": "4BI1_01_07",
    "label": "Procedure",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "The time taken for starch to disappear changes with pH. Enzyme activity is around pH 7 and slower at values above or below this.",
    "id": "4BI1_01_07",
    "label": "Observation",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "Enzyme works best at optimum pH 7 for amylase. At extreme pH, the enzyme denatures and can no longer function properly.",
    "id": "4BI1_01_07",
    "label": "Conclusion",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "label": "Cellular respiration",
    "id": "4BI1_01_08",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Respiration is the breakdown of glucose to release the stored chemical energy in the form of adenosine triphosphate (ATP).",
    "label": "",
    "id": "4BI1_01_08",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "|Aerobic Respiration|Anaerobic respiration\nsubstrate|glucose + oxygen|glucose\nproduct (in animals)|carbon dioxide + water|lactic acid\nproduct (in yeast)|carbon dioxide + water|ethanol + carbon dioxide\nenergy released|large amount of ATP|low amount of ATP\nsite|mitochondria|cytoplasm",
    "id": "4BI1_01_08",
    "label": "Differences between aerobic and anaerobic respiration",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "glucose + oxygen → carbon dioxide + water",
    "id": "4BI1_01_08",
    "label": "Word equation for aerobic respiration",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O",
    "id": "4BI1_01_08",
    "label": "Balanced chemical equation for aerobic respiration",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "glucose → lactate",
    "label": "Word equation for anaerobic respiration in animals",
    "id": "4BI1_01_08",
    "type": "text",
    "order": 6,
    "status": "show"
  },
  {
    "description": "glucose → ethanol + carbon dioxide",
    "id": "4BI1_01_08",
    "label": "Word equation for anaerobic respiration in yeasts",
    "type": "text",
    "status": "show",
    "order": 7
  },
  {
    "description": "During vigorous exercise, oxygen demand is very high and muscle cells respire anaerobically and produce lactate.\r\nLactate builds up in the muscles and is transported in the blood to the liver.\r\nOxygen is required to remove lactate in the liver.\r\nThe volume of oxygen needed to completely oxidize the lactate is called oxygen debt.\r\nThe person continues to breathe faster and deeper to repay the oxygen debt.",
    "id": "4BI1_01_08",
    "label": "Oxygen debt",
    "type": "text",
    "status": "show",
    "order": 8
  },
  {
    "description": "",
    "id": "4BI1_01_10",
    "label": "Investigating the production of carbon dioxide by small living organisms",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_01_10",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Place small organisms on a gauze platform inside a stoppered boiling tube.\nAdd hydrogen carbonate indicator solution below the gauze so the organisms are not in direct contact with it.\nSeal the tube with a stopper.\nObserve the colour of the indicator over time.\nRepeat the setup for each type of organism and include a control tube with no organisms.",
    "label": "Procedure",
    "id": "4BI1_01_10",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "The hydrogen carbonate indicator changes from orange to yellow as carbon dioxide is produced. The speed of colour change differs between organisms.",
    "label": "Observation",
    "id": "4BI1_01_10",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Respiration in organisms produces carbon dioxide gas. There are differences in respiration rates among the organisms.",
    "label": "Conclusion",
    "id": "4BI1_01_10",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_01_11",
    "label": "Investigating the production of heat by respiration",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_01_11",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Soak one batch of peas in water for 24 hours to allow them to germinate.\nBoil a second batch of peas to kill them.\nWash both batches with dilute bleach, then rinse with distilled water to remove any bleach.\nPlace each batch into separate inverted vacuum flasks with a thermometer inserted.\nPlug the neck with cotton wool to allow gas exchange.\nRecord the initial temperature in both flasks.\nLeave the apparatus for a few days, then record the final temperature.",
    "label": "Procedure",
    "id": "4BI1_01_11",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "The temperature in the flask with germinating peas increases, while the temperature in the flask with dead peas remains the same.",
    "label": "Observation",
    "id": "4BI1_01_11",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Respiration in germinating peas releases heat energy.",
    "label": "Conclusion",
    "id": "4BI1_01_11",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "Movement of substances into and out of cells",
    "id": "4BI1_01_12",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration down a concentration gradient, as a result of their random movement.",
    "label": "Diffusion",
    "id": "4BI1_01_12",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Gas exchange\r\nTranspiration\r\nGlucose absorption (both by diffusion and active transport)\r\nAbsorption of water soluble vitamins\r",
    "id": "4BI1_01_12",
    "label": "Diffusion in living organisms",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Surface area to volume ratio:  A larger surface area to volume ratio allows more particles to diffuse at once.\nTemperature: Higher temperature gives particles more kinetic energy, making them move and diffuse faster.\nConcentration gradient: A greater concentration difference increases the rate of diffusion.\nDiffusion distance: A shorter distance allows particles to cross more quickly.",
    "id": "4BI1_01_12",
    "label": "Factors affecting the rate of diffusion",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "Osmosis is the net movement of water from a region of higher water potential to a region of lower water potential across the partially permeable membrane.",
    "id": "4BI1_01_12",
    "label": "Osmosis",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "label": "Investigating the rate of diffusion in a jelly",
    "id": "4BI1_01_13",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_01_13",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Cut agar blocks into cubes of different sizes.\r\nAdd enough dye solution to fully cover the agar blocks and start the stopwatch immediately.\r\nWatch until each cube turns completely coloured (no clear region in the centre).\r\nStop the stopwatch and record the time taken for full colour penetration.\r\nRepeat each size at least 3 times and calculate an average time.\r",
    "id": "4BI1_01_13",
    "label": "Procedure",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "The smaller the cube, the faster the colour spreads to the centre.",
    "id": "4BI1_01_13",
    "label": "Observation",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "Particles diffuse from high concentration to low concentration. Smaller blocks have a larger surface area-to-volume ratio and particles diffuse quickly.",
    "id": "4BI1_01_13",
    "label": "Conclusion",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "Active transport is the movement of particles from a region of lower concentration to a region of higher concentration against the concentration gradient using energy from respiration.\nDuring active transport, a substance binds to the carrier protein molecule in the cell membrane.\nThe carrier protein changes shape using energy from aerobic respiration. Substance is released into the cell.",
    "id": "4BI1_01_12",
    "label": "Active transport",
    "type": "list",
    "status": "show",
    "order": 6
  },
  {
    "description": "",
    "id": "4BI1_01_14",
    "label": "Cell differentiation",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "When a stem cell specializes to perform specific functions, some of the genes are switched on and some genes are switched off. Specialised cells have a special feature to perform a special function due to special chemical changes occurring in their cytoplasm.",
    "label": "",
    "id": "4BI1_01_14",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_01_14",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Specialised cell|Special feature|Special function\nRoot hair cell|hair-like projection|increases surface area for absorption\nPalisade mesophyll cell|columnar shape and packed with chloroplasts|traps light energy for photosynthesis\nCiliated cell|cilia (tiny cytoplasmic hairs)|sweeps dust and bacteria in the bronchi and trachea away from the lungs\nNerve cell|very long fibres (axon and dendrite)|conducts electrical impulses to and from the brain and spinal cord\nRed blood cells|biconcave disc-shaped cells containing haemoglobin, no nucleus|transport oxygen around the body\nSperm cell|acrosome in head, mitochondria in midpiece, and a flagellum|fertilisation; acrosome releases enzymes to digest the egg membrane, mitochondria provide energy for movement, flagellum helps the sperm to swim\nEgg cell|large cytoplasm containing food reserves|fertilisation",
    "label": "Specialised cells",
    "id": "4BI1_01_14",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Stem cell",
    "id": "4BI1_01_15",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A stem cell is a cell that can divide many times by mitosis without differentiation. It can differentiate into specialized cells (e.g. neurones, muscle cells).",
    "label": "",
    "id": "4BI1_01_15",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Embryonic stem cells are found in the early stage of development of the embryo.\nThey can differentiate into any type of cell.\nThey can be used to treat almost all diseases (e.g. type 1 diabetes, Parkinson disease).\nUsing an embryonic stem cell may kill the embryo and is considered unethical.",
    "label": "Embryonic stem cell",
    "id": "4BI1_01_15",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Adult stem cells are found in bone marrow, skin and the lining of the intestine.\nThey can be differentiated into certain types of cells (blood cells, skin cells, epithelial cells).\nThey can be used to treat certain diseases (e.g. anaemia, leukaemia).\nUsing adult stem cells does not need to kill the embryo.\nThere is less or no risk of rejection if the stem cell is taken from the same person.",
    "id": "4BI1_01_15",
    "label": "Adult stem cell",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "Stem cell therapy has a risk of uncontrolled cell division leading to cancer.",
    "id": "4BI1_01_15",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "label": "Role of ATP in living organisms",
    "id": "4BI1_01_09",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_01_09",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "During respiration, energy from the oxidation of glucose is used to add a phosphate group to adenosine diphosphate (ADP) to form adenosine triphosphate (ATP). ATP can be broken down into ADP and one phosphate group, releasing chemical energy, which can be used for cellular processes.",
    "label": "",
    "id": "4BI1_01_09",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_02_01",
    "label": "Levels of organisation in organisms",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "organelles → cells → tissue → organ → organ system → organism",
    "id": "4BI1_02_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "An organelle is a specialized component within a cell that performs specific function.",
    "id": "4BI1_02_01",
    "label": "Organelle",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "All living organisms are made up of cells. Cells are basic structure and organization in all living organisms. All cells arise from the original cell.",
    "id": "4BI1_02_01",
    "label": "Cell",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "contraction of muscle cells for movement\r\nactive transport of molecules and ions\r\nbuilding large molecules, such as proteins\r\nDNA replication and cell division\r",
    "label": "Uses of energy in living organisms",
    "id": "4BI1_02_01",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_02_02",
    "label": "Differences between eukaryotic and prokaryotic cells",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "|Eukaryotic cells|Prokaryotic cells\nnucleus|present|absent\nmembrane-bound organelles|present|absent|\nsize|larger|smaller\nDNA|surrounded by nuclear membrane|freely floating in cytoplasm\nplasmid|absent|present\nExamples|animal cells, plant cells|bacteria",
    "id": "4BI1_02_02",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "Kingdom|Example\nPlant|maize, peas and beans\nAnimal|mamals and insects\nFungi|Mucor and yeasts\nProtoctista|Amoeba, Chlorella and Plasmodium\nProkaryotae|Bacteria such as Lactobacillus and Pneumococcus",
    "id": "4BI1_02_02",
    "label": "Kingdoms of life",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_02_02",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 4
  },
  {
    "description": "A tissue is a group of cells with similar structures working together to perform a specific function.",
    "id": "4BI1_02_02",
    "label": "Tissue",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "An organ is a group of tissues working together to perform a specific function.",
    "label": "Organ",
    "id": "4BI1_02_02",
    "type": "text",
    "order": 6,
    "status": "show"
  },
  {
    "description": "An organ system is a group of organs with related functions working together to perform a body function.",
    "label": "Organ system",
    "id": "4BI1_02_02",
    "type": "text",
    "order": 7,
    "status": "show"
  },
  {
    "description": "An organism a living thing that has an organised structure, can react to stimuli, reproduce, grow, adapt and maintain homeostasis.",
    "label": "Organism",
    "id": "4BI1_02_02",
    "type": "text",
    "order": 8,
    "status": "show"
  },
  {
    "description": "",
    "label": "Plants",
    "id": "4BI1_02_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "eukaryotic\nmulticellular\r\nautotrophs (plant cells have chloroplasts and they make their own food by photosynthesis)\r\nplant cells have cell walls made up of cellulose\r\nstore glucose as starch",
    "label": "",
    "id": "4BI1_02_03",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Animals",
    "id": "4BI1_02_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_02_05",
    "label": "Fungi",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "eukaryotic\nmulticellular\nheterotrophs (animals get energy by eating other plants and animals)\nanimal cells do not have chloroplasts and cell walls\nanimals usually have nervous coordination and are able to move from one place to another\nstore carbohydrates as glycogen\nmost animals reproduce sexually",
    "id": "4BI1_02_04",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "eukaryotic\nmostly multicellular\norganised into a mycelium made from thread-like structures called hyphae, which contain many nuclei\ncell walls made of chitin.\nsaprotrophs; they feed by extracellular secretion of digestive enzymes onto food material and absorption of the digested products\ne.g. Mucor is a typical fungus with hyphae and yeast is a single-celled fungus.",
    "label": "",
    "id": "4BI1_02_05",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Protoctist",
    "id": "4BI1_02_06",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "eukaryotic\nunicellular\nsome are heterotrophic; they have features like an animal cell (e.g. Amoeba)\nsome are autotrophic; and they have features like a plant cell (e.g. Chlorella)\nsome are pathogens (e.g. Plasmodium causes malaria)",
    "label": "",
    "id": "4BI1_02_06",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_02_07",
    "label": "Prokaryote",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "unicellular\nchromosomes are not organised into a nucleus\ne.g. bacteria and the blue-green algae",
    "id": "4BI1_02_07",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "Structure|Function\ncell membrane|controls substances in and out of the cells (selectively permeable)\ncytoplasm|jelly-like part, where many chemical reactions occur\ncircular DNA|controls cell division, cell development and cell activities\nplasmids|contain gene that help the process of survival and reproduction of the bacterium\nribosomes|protein synthesis\ncell wall|prevent the cell from bursting, allow water and salts to pass through (freely permeable)\nflagellum|helps movement in some bacteria",
    "id": "4BI1_02_07",
    "label": "Structure of a bacterial cell",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_02_08",
    "label": "Viruses",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "have a protein coat and contain either DNA or RNA (viruses are not cells)\nmuch smaller than bacteria\nreproduce only inside living cells\ndo not feed, respire, excrete or grow\ne.g. influenza virus, HIV, tobacco mosiac virus",
    "id": "4BI1_02_08",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "label": "Human breathing system",
    "id": "4BI1_03_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_03_01",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Structure|Function\nnose/nasal cavity|filters, warm and moistens air\npharynx|passage for air from nose to trachea\nepiglottis|prevents food and water entering the airway during swallowing\nlarynx (voice box)|contains vocal cords, joins onto trachea\ntrachea (wind pipe)|carries air to and from the lungs\nbronchi|two main branches of trachea leading to each lung\nbronchioles|smaller branches of bronchi inside the lungs\nalveoli|tiny air sacs adapted for gas exchange by diffusion\npleural membrane|double layer surrounding the lungs\nribs and sternum|protects the lungs and heart, move to ventilate the lungs",
    "label": "",
    "id": "4BI1_03_01",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Trachea",
    "id": "4BI1_03_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "C-shaped cartilage rings in the trachea and bronchi prevents the collapse of the airway during breathing.",
    "label": "Cartilage",
    "id": "4BI1_03_02",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Goblet cells secrete mucus, which traps pathogens and dust, preventing them from entering the alveoli.",
    "label": "Goblet cells",
    "id": "4BI1_03_02",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Ciliated cells have cilia, which move in a flicking motion to sweep the mucus upwards and away from the lungs.",
    "id": "4BI1_03_02",
    "label": "Ciliated epithelium",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "4BI1_03_03",
    "label": "Ventilation of the lungs",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Ventilation is the process of moving air in and out of the lungs to help gas exchange between the alveoli and the capillaries.",
    "id": "4BI1_03_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "The diaphragm contracts and flattens.\nExternal intercostal muscles contract while internal intercostal muscles relax, pulling the ribcage upwards and outwards.\nThe volume of the thorax increases, and the lungs expand.\nAir pressure in the lungs decreases, and air is drawn in through the nose and trachea to equalise the air pressure.",
    "id": "4BI1_03_03",
    "label": "Inhalation",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "The diaphragm relaxes and returns to its dome shape.\nExternal intercostal muscles relax while internal intercostal muscles contract, pulling the ribcage downwards.\nThe lungs are elastic, and they shrink back to their relaxed volume.\nAir pressure in the lungs increases, and air is forced out of the lungs to equalise the air pressure.",
    "id": "4BI1_03_03",
    "label": "Exhalation",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "label": "Gas exchange in the alveoli",
    "id": "4BI1_03_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "|Inhaled air|Exhaled air\nOxygen|21%|16%|O₂ is absorbed into the blood during gas exchange and body cells use oxygen for respiration\nCarbon dioxide|0.04%|4%|CO₂ is produced during respiration and released from blood into alveoli\nWater vapour|variable|saturated|Air is warmed and moistened in the alveoli\nTemperature|variable|warmer|",
    "label": "Differences in composition of inspired and expired air",
    "id": "4BI1_03_04",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Alveoli in the lungs provide a very large surface area for gas exchange by diffusion.\nAlveoli are surrounded by a network of capillaries, which increases the surface area for gas exchange.\nVentilation of the lungs and blood flow in the capillaries maintain high oxygen and low carbon dioxide concentration inside the alveoli.\nAir in the alveoli and blood are separated by only two layers of thin cells: the alveolar wall and the capillary endothelium.\nOxygen dissolves in the thin film of moisture before diffusing across the alveolar wall.",
    "id": "4BI1_03_04",
    "label": "Alveoli",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "label": "Comparing the carbon dioxide content of inhaled and exhaled air",
    "id": "4BI1_03_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_03_05",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Fill two test tubes with equal amounts of limewater.\r\nConnect the tubes with rubber tubing and connect with a mouthpiece so that air passes into tube A and out through tube B.\r\nBreathe in and out through the mouthpiece so that inhaled air passes through tube A and exhaled air through tube B.\r",
    "id": "4BI1_03_05",
    "label": "Procedure",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "The limewater in tube B turns milky faster than in tube A.",
    "label": "Observation",
    "id": "4BI1_03_05",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Exhaled air contains more carbon dioxide than inhaled air.",
    "label": "Conclusion",
    "id": "4BI1_03_05",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_03_06",
    "label": "Investigating the effect of exercise on breathing rate",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Sit still and count the number of breaths taken in one minute (resting breathing rate).\r\nPerform moderate exercise (e.g. jogging on the spot) for 2 minutes.\r\nImmediately count the number of breaths per minute again.\r\nContinue exercise for another 6 min and count the number of breaths every 2 minutes.\r\nAllow the volunteer to rest and record breathing rate every 2 minutes until it returns to normal.",
    "id": "4BI1_03_06",
    "label": "Procedure",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "Breathing rate increases after exercise and gradually returns to normal after rest.",
    "label": "Observation",
    "id": "4BI1_03_06",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "The breathing rate increases to remove more carbon dioxide produced during respiration and supply more oxygen to muscles.",
    "label": "Conclusion",
    "id": "4BI1_03_06",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Smoking",
    "id": "4BI1_03_07",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Carbon monoxide binds strongly to haemoglobin to form carboxyhaemoglobin.\nAs a result, oxygen cannot bind to haemoglobin, and the oxygen level in the blood decreases",
    "label": "Carbon monoxide",
    "id": "4BI1_03_07",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Nicotine is an addictive chemical that damages blood vessels and causes high blood pressure.",
    "label": "Nicotine",
    "id": "4BI1_03_07",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Tar is a sticky substance that damages cilia and alveoli and causes goblet cells to secrete more mucus. However, the mucus cannot be effectively removed from the air passages. This increases the risk of infection and chronic bronchitis. When alveoli are destroyed, the surface area for gas exchange decreases, leading to emphysema.",
    "id": "4BI1_03_07",
    "label": "Tar",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "Cigarette smoke contains carcinogens, which increase the risk of cancer.",
    "id": "4BI1_03_07",
    "label": "Carcinogens",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "Lung cancer\r\nBronchitis\r\nEmphysema\r\nCoronary heart disease\r\nUlcers of the stomach and intestines\r\nLow birth weight in babies if a pregnant mother smokes\r",
    "id": "4BI1_03_07",
    "label": "Harmful effects of smoking",
    "type": "list",
    "status": "show",
    "order": 6
  },
  {
    "description": "",
    "id": "4BI1_04_01",
    "label": "Balanced diet",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A balanced diet is a diet that contains all the essential nutrients in the correct proportions to maintain good health.",
    "id": "4BI1_04_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "carbohydrate\nfat\nprotein\nvitamins\nminerals\nfibre (roughage)\nwater.",
    "id": "4BI1_04_01",
    "label": "Nutrients",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Polymers|Element|Examples|Sub-units\nCarbohydrates|C, H, O|starch, glycogen, cellulose, sucrose|glucose\nFat, oil|C, H, O|vegetable oil, animal fats|fatty acids and glycerol\nProtein|C, H, O, N|enzymes, muscle, haemoglobin, cell membrane proteins|amino acids",
    "label": "",
    "id": "4BI1_04_01",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Food tests",
    "id": "4BI1_04_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Biomolecule|Reagent|Observation\nStarch|iodine solution|If starch is present, iodine solution turns brown to blue-black.\nReducing sugar|Benedict's solution and then heat|If glucose is present, the solution turns blue to green, yellow, orange or brick-red.\nProtein|biuret solution|If protein is present, biuret solution turns blue to purple (lilac).\nFat|ethanol and cool water|If fat is present, a white cloudy layer (emulsion) is formed above water.",
    "label": "",
    "id": "4BI1_04_02",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Carbohydrates",
    "id": "4BI1_04_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Good food sources: rice, potato, yam, cassava, bread, millet, sugary foods (cake, jam, honey)",
    "label": "",
    "id": "4BI1_04_03",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "source of energy\nstorage (as starch in plants, as glycogen in animals)\nmaking cellulose in plants",
    "id": "4BI1_04_03",
    "label": "Functions",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_04_04",
    "label": "Dietary fibre",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Cellulose cannot be digested and form fibre or roughage in the alimentary canal. Fibre increases the contents of the colon and helps to retain water. This softens the faeces and prevents constipation.",
    "id": "4BI1_04_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "label": "Lipid (fat or oil)",
    "id": "4BI1_04_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Fats are solid at room temperature. Oils are liquid at room temperature.",
    "label": "",
    "id": "4BI1_04_05",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Good food sources: butter, milk, cheese, egg-yolk, animal fat, groundnuts (peanuts)",
    "id": "4BI1_04_05",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "source of energy (twice as much as carbohydrate)\r\ninsulation against heat loss\r\ninsulation of nerve fibres\r\nmaking some hormones (oestrogen, progesterone, testosterone)\r\nmaking cell membranes",
    "id": "4BI1_04_05",
    "label": "Functions",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "4BI1_04_06",
    "label": "Protein",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Good food sources: meat, fish, eggs, soya, groundnuts, milk, Quorn, cowpeas, falafel",
    "id": "4BI1_04_06",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "growth and repair of body tissue\r\nmaking enzymes and some hormones (insulin)\r\nmaking cell membrane channels and carriers\r\ncan be broken down to provide energy",
    "id": "4BI1_04_06",
    "label": "Functions",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_04_07",
    "label": "Vitamins",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "fat-soluble vitamin\r\ngood food sources: fish liver oils, liver, butter, margarine, carrots\r\nmaking a chemical in the retina and protects the surface of the eye\nprevent night blindness and damaged cornea",
    "label": "Vitamin A",
    "id": "4BI1_04_07",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "water-soluble vitamin\ngood food sources: oranges, lemons, grapefruit, fresh green vegetables, potatoes\nmaking connective tissues of skin, blood vessels, gums\nprevents scurvy (bleeding gum, poor wound healing)",
    "label": "Vitamin C (ascorbic acid)",
    "id": "4BI1_04_07",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "fat-soluble vitamin\r\ngood food sources: butter, milk, cheese, egg-yolk, liver, fish-liver oil\r\nhelps calcium absorption from the intestine and calcium salt deposition in the bones\r\nprevents rickets (soft and deformed bones) in children",
    "label": "Vitamin D (calciferol)",
    "id": "4BI1_04_07",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Mineral ions",
    "id": "4BI1_04_08",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "good food sources: milk, cheese, fish\r\nhealthy bones and teeth\r\nnormal blood clotting\r\nprevents rickets and osteoporosis",
    "label": "Calcium",
    "id": "4BI1_04_08",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "good food sources: red meat, liver, kidney, eggs, green vegetables\nformation of haemoglobin in red blood cells, for transport of oxygen\nprevents anaemia",
    "id": "4BI1_04_08",
    "label": "Iron",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_04_10",
    "label": "Energy from food",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Energy requirements vary depending on factors such as activity level, age, and pregnancy.",
    "id": "4BI1_04_10",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Physically active people require more energy to support increased muscle activity.\nChildren and teenagers need higher energy intake to support growth and development.\nPregnant women require additional energy, as well as more iron and calcium, to support the growth of the foetus.\nYoung women need more iron to compensate for blood loss during menstruation.",
    "id": "4BI1_04_10",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_04_11",
    "label": "Human digestive system",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A - mouth\nB - salivary gland\nC - oesophagus\nD - stomach\nE - duodenum\nF - ileum\nG - colon\nH - rectum\nI - anus\nJ - liver\nK - gall bladder\nL - pancreas",
    "label": "",
    "id": "4BI1_04_11",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Function|Definition\nIngestion|the taking of substances, e.g. food and drink, into the body through the mouth\nPhysical digestion|the breakdown of food into smaller pieces without chemical change to the food molecules (chewing food in the mouth, action of muscles in the stomach, emulsification of fats by bile)\nChemical digestion|the breakdown of large insoluble molecules into small soluble molecules\nAbsorption|the movement of nutrients from the intestines into the blood\nAssimilation|the uptake and use of nutrients by cells\nEgestion|the passing out of food that has not been digested or absorbed as faeces through the anus",
    "label": "",
    "id": "4BI1_04_11",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Structure|Function\nmouth|ingestion; physical digestion by teeth; chemical digestion of starch into maltose by amylase\nsalivary gland|produces saliva which contains amylase; lubricate food and make small pieces stick together\noesophagus|transfers food from the mouth to the stomach by peristalsis\nstomach|produces gastric juice which contains hydrochloric acid and pepsin; hydrochloric acid kills bacteria; chemical digestion of protein into amino acids by pepsin; physical digestion by peristalsis (churn food into a liquid)\nduodenum|receives pancreatic juice for chemical digestion of proteins, fats and starch; receives bile to emulsify fats (physical digestion)\nileum|chemical digestion of proteins, fats and starch; absorption of digested food molecules and water\ncolon|absorption of water from undigested food; absorption of bile salts to send back to the liver\nrectum|store faeces\nanus|egestion of faeces\nliver|makes bile containing salts to emulsify fats (physical digestion); assimilation of digested food; deamination of excess amino acids\ngall bladder|stores bile which is be secreted into the duodenum through the bile duct\npancreas|secretes pancreatic juice into the duodenum through the pancreatic duct; pancreatic juice contains trypsin for chemical digestion of proteins into amino acids, lipase for chemical digestion of fats into glycerol and fatty acids and amylase for chemical digestion of starch into maltose",
    "label": "Parts of the digestive system",
    "id": "4BI1_04_11",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_04_12",
    "label": "Peristalsis",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The food bolus moves along the gastrointestinal tract by peristalsis, which is the coordinated movement of muscles around the gut, stimulated by the food bolus.",
    "id": "4BI1_04_12",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "circular muscles behind the food contract, and longitudinal muscles relax\r\ncircular muscles in front of the food relax, and longitudinal muscles contracts\r\nfood bolus is pushed forward\r",
    "id": "4BI1_04_12",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "label": "Digestive enzymes",
    "id": "4BI1_04_13",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "enzyme|source of enzyme|digestive action|site of action\namylase|salivary glands|starch → maltose|mouth\npepsin|stomach|proteins → peptides|stomach\namylase|pancreas|starch → maltose|small intestine\ntrypsin|pancreas|proteins → peptides|small intestine\nlipase|pancrease|lipids → glycerol and fatty acids|small intestine\nmaltase|wall of small intestine|maltose → glucose| small intestine\npeptidases|wall of small intestine|peptides → amino acids|small intestine",
    "label": "",
    "id": "4BI1_04_13",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_04_14",
    "label": "Bile",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Bile made in the liver and stored in the gall bladder, and secreted into duodenum through the bile duct.\nIt contains bile salts, but does not contain enzymes.\nBile salts emulsify the fats, breaking into small droplets with a large surface area for more efficient digestion by lipase.\nBile is slightly alkaline, neutralising the acidic mixture of food and gastric juices in the duodenum. The enzymes secreted into duodenum work best under alkaline conditions.",
    "id": "4BI1_04_14",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_04_15",
    "label": "Absorption of nutrients",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Ileum absorbs nearly all of digested food and most of the water. Glucose and amino acids are absorbed into capillaries, which joins up to form the hepatic portal vein. Fats and a large proportion of fatty acids and glycerol are absorbed into lacteals, which flows into the lymphatic system.",
    "label": "",
    "id": "4BI1_04_15",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "a long tube that provides a large surface to absorb the digested food\r\ninternal surface contains folds, which contains tiny projections called villi\r\nlining epithelium is very thin and outer membrane of each epithelial cell has microvilli\r\neach villus contains a dense network of blood capillaries and lacteal",
    "label": "Adaptive features of ileum",
    "id": "4BI1_04_15",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_04_15",
    "type": "image",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Measuring the energy content of a food",
    "id": "4BI1_04_16",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Measure the mass of the food sample using a balance.\r\nPut 20 cm³ of water in the boiling tube.\r\nRecord the temperature of water using a thermometer.\r\nMount the food on the food holder and ignite the food.\r\nOnce the food is alight, quickly place the food under the boiling tube.\r\nAfter the food is completely burned, measure the final temperature of water.\r",
    "label": "Procedure",
    "id": "4BI1_04_16",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "total energy in food = mass of water × 4.2 × temperature difference of water\nenergy per gram = total energy in food/mass of the food",
    "id": "4BI1_04_16",
    "label": "Calculation",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "heat lost to the surrounding\r\nfood might not be burnt completely\r\nforget to stir\r\nheat lost due to lack of lid",
    "id": "4BI1_04_16",
    "label": "Possible sources of error",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "The heating element and oxygen supply ensure complete combustion of food.\r\nHeat proof container and lid prevent heat loss to the surrounding.\r\nStirrers distribute heat evenly.\r\nTemperature change can be detected precisely.",
    "label": "Advantages of using a food calorimeter",
    "id": "4BI1_04_16",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "Water",
    "id": "4BI1_04_09",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "component of most tissues (70% water)\r\ncomponent of body fluids, blood, lymph and tissue fluids\r\ntransport medium for nutrients and waste products (in the blood)\r\nreactant and solvent for chemical reactions (metabolism)\r\nlost as evaporation, sweating, urinating and breathing",
    "label": "",
    "id": "4BI1_04_09",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Transport in unicellular organisms",
    "id": "4BI1_05_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Simple unicellular organisms rely on diffusion for movement of substances in and out of the cell.\nThey are very small, so they have a large surface area to volume ratio, allowing efficient exchange.\nThe diffusion distance is short (no complex transport systems needed).\nThey have a thin cell membrane, so substances can pass through quickly.\nTheir metabolic demands are relatively low, so diffusion is sufficient to supply oxygen and nutrients.",
    "id": "4BI1_05_01",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_05_02",
    "label": "Circulatory systems",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The circulatory system is a system of blood vessels with a pump and valves to ensure a one-way flow of blood.",
    "id": "4BI1_05_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "The blood goes through the heart once for each complete circulation of the body.",
    "id": "4BI1_05_02",
    "label": "Single circulatory system",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "A - The atrium receives blood.\nB - The ventricle pumps blood.\nC - Blood is oxygenated in the gills.\nD - The blood flows to all parts of the body before returning to the heart.",
    "id": "4BI1_05_02",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 4
  },
  {
    "description": "The blood passes through the heart two times in one circulation. (e.g. mammals)\nPulmonary circulation (right ventricle → pulmonary arteries → lungs → pulmonary vein → left atrium)\r\nSystemic circulation (left ventricle → aorta → arteries → body → veins → vena cava → right atrium)",
    "label": "Double circulatory system",
    "id": "4BI1_05_02",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "A - atria\r\nB - ventricles\r\nC - pulmonary circuit\r\nD - systemic circuit\r\nE - septum\r",
    "label": "",
    "id": "4BI1_05_02",
    "type": "image",
    "order": 6,
    "status": "show"
  },
  {
    "description": "septum prevents mixing of oxygenated and deoxygenated blood\r\nhigher blood pressure in the systemic circuit to provide oxygenated blood and nutrients to body cells\r\nlower pressure in the pulmonary circuit to prevent damage to capillaries in the lungs",
    "id": "4BI1_05_02",
    "label": "Advantages of double circulation",
    "type": "list",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "id": "4BI1_05_03",
    "label": "Human heart",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "RA - right atrium\r\nRV - right ventricle\r\nLA - left atrium\r\nLV - left ventricle\r\nVC - vena cava\r\nPA - pulmonary artery\r\nPV - pulmonary vein\r\nA - aorta\r\nAV - atrioventricular valve\r\nSV - semilunar valve\r\nS - septum\r\nM - muscle",
    "id": "4BI1_05_03",
    "label": "Vertical section of the heart",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "RA - right atrium\r\nRV - right ventricle\r\nLA - left atrium\r\nLV - left ventricle\r\nVC - vena cava\r\nPA - pulmonary artery\r\nPV - pulmonary vein\r\nA - aorta\r\nC - coronary artery",
    "label": "External view of the heart",
    "id": "4BI1_05_03",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "The wall of the chambers are made up of cardiac muscle. The atria have thinner muscle walls than ventricles. The left ventricle wall is thicker than the right ventricle wall because the left ventricle needs to produce enough pressure to pump blood to all main organs of the body.",
    "label": "",
    "id": "4BI1_05_03",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "The vena cava brings deoxygenated blood from the body tissues into the right atrium.\r\nThe blood passes from the right atrium into the left ventricle below.\r\nThe left ventricle pumps blood into the pulmonary arteries.\r\nBlood is oxygenated in the lungs.\r\nThe pulmonary veins bring oxygenated blood from the lungs into the left atrium.\r\nThe blood passes from the left atrium into the left ventricle below.\r\nThe left ventricle pumps blood into the aorta, which carries oxygenated blood to the body.",
    "label": "Cardiac cycle",
    "id": "4BI1_05_03",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "The septum separates oxygenated blood in the left chambers mixing with deoxygenated blood in the right chambers.",
    "id": "4BI1_05_03",
    "label": "Septum",
    "type": "text",
    "status": "show",
    "order": 6
  },
  {
    "description": "The atrioventricular valves and the semilunar valves prevent blood flowing backwards.",
    "id": "4BI1_05_03",
    "label": "Valves",
    "type": "text",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "label": "Coronary heart disease",
    "id": "4BI1_05_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Coronary arteries supply oxygenated blood to the cardiac muscle.",
    "label": "",
    "id": "4BI1_05_04",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Coronary heart disease is a condition where the coronary arteries cannot deliver enough oxygenated blood to the heart muscle, due to the deposition of fatty substances.",
    "label": "",
    "id": "4BI1_05_04",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Genetics: family history of coronary heart disease\r\nOlder age\r\nMale gender: oestrogen has some protection from coronary heart disease in women\r\nUnhealthy diet: too much fat or energy\r\nEmotional stress\r\nLack of physical exercise\r\nSmoking\r\nHigh blood pressure\r\nDiabetes\r",
    "label": "Risk factors of coronary heart disease",
    "id": "4BI1_05_04",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Eat a balanced diet (low in saturated fats, cholesterol and salt)\r\nStay at a healthy body weight\r\nRegular physical exercise\r\nQuit smoking\r\nControl high blood pressure\r\nControl blood glucose level",
    "label": "Prevention of coronary heart disease",
    "id": "4BI1_05_04",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "Heart rate",
    "id": "4BI1_05_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Heart is the number of heart beats per minute.\nHeart rate can be monitored by measuring pulse rate, listening to heart sound or ECG.\nAt rest, the heart beats 70 times a minute.\nExercise increases heart rate to supply more oxygen and glucose to muscles.\nAfter exercise, the heart rate gradually drops to its resting state.\nAdrenaline released during exercise or stress also increases heart rate.",
    "label": "",
    "id": "4BI1_05_05",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Coronary heart disease",
    "id": "4BI1_05_06",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Coronary arteries supply oxygenated blood to the cardiac muscle.",
    "label": "",
    "id": "4BI1_05_06",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Coronary heart disease is a condition where the coronary arteries cannot deliver enough oxygenated blood to the heart muscle, due to the deposition of fatty substances.",
    "label": "",
    "id": "4BI1_05_06",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Genetics: family history of coronary heart disease\r\nOlder age\r\nMale gender: oestrogen has some protection from coronary heart disease in women\r\nUnhealthy diet: too much fat or energy\r\nEmotional stress\r\nLack of physical exercise\r\nSmoking\r\nHigh blood pressure\r\nDiabetes\r",
    "label": "Risk factors of coronary heart disease",
    "id": "4BI1_05_06",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Eat a balanced diet (low in saturated fats, cholesterol and salt)\r\nStay at a healthy body weight\r\nRegular physical exercise\r\nQuit smoking\r\nControl high blood pressure\r\nControl blood glucose level",
    "label": "Prevention of coronary heart disease",
    "id": "4BI1_05_06",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "Comparison of blood vessels",
    "id": "4BI1_05_07",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Structure|Related function\nthick and tough wall with muscles, elastic fibres and fibrous tissue|prevents bursting and maintains pressure wave\nnarrow lumen|helps to maintain blood pressure\nno valve|high pressure prevents blood flowing backwards",
    "label": "Artery",
    "id": "4BI1_05_07",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Structure|Related function\nthin wall, mainly fibrous tissue with little muscle or elastic fibres|carries blood at low pressure\nlarge lumen|to reduce resistance to blood flow\nvalves present|to prevent back-flow of blood",
    "label": "Vein",
    "id": "4BI1_05_07",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Structure|Related function\npermeable wall, one cell thick, with no muscle or elastic tissue|allows diffusion of materials between the capillary and surrounding tissues\nlumen approximately one red blood cell wide|blood cells pass through slowly to allow diffusion of materials and tissue fluid",
    "label": "Capillary",
    "id": "4BI1_05_07",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_05_08",
    "label": "Major blood vessels in human circulation",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A - pulmonary artery (highest CO₂ concentration;\r\nlowest O₂ concentration )\r\nB - pulmonary vein (highest O₂ concentration;\r\nlowest CO₂ concentration )\r\nC - aorta (thickest wall; highest pressure)\r\nD - vena cava\r\nE - hepatic artery\r\nF - hepatic vein (highest urea concentration)\r\nG - hepatic portal vein (highest concentration of nutrients after meal)\r\nH - renal artery\r\nI - renal vein (lowest urea concentration)",
    "id": "4BI1_05_08",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "label": "Blood",
    "id": "4BI1_05_09",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Blood consists of red blood cells, white blood cells and platelets, floating in plasma.",
    "label": "",
    "id": "4BI1_05_09",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "biconcave (disc-like) shape\r\nno nucleus\r\ncontains haemoglobin, which combines with oxygen\r\nlives for 4 months, then broken down into bilirubin and excreted in bile",
    "label": "Red blood cells",
    "id": "4BI1_05_09",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "larger than red blood cells\nlymphocytes have large and rounded nuclei, and produce antibodies specific to the pathogen\nphagocytes have an irregular-shaped nuclei, and engulf and destroy harmful bacteria and cell debris (phagocytosis)",
    "id": "4BI1_05_09",
    "label": "White blood cells",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "pieces of blood cells\r\nhelp to clot blood at wounds, stop bleeding and prevent pathogen entering the body",
    "id": "4BI1_05_09",
    "label": "Platelets",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "Plasma is the liquid part of the blood, which transports dissolved substances around the body.",
    "id": "4BI1_05_09",
    "label": "Plasma",
    "type": "list",
    "status": "show",
    "order": 6
  },
  {
    "description": "Substance|From|To\r\noxygen|lungs|whole body\r\ncarbon dioxide|whole body|lungs\r\nurea|liver|kidneys\r\nhormones|endocrine glands|target organs\r\ndigested food|intestine|whole body\r\nheat|liver and muscles|whole body",
    "id": "4BI1_05_09",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "id": "4BI1_05_10",
    "label": "Vaccination",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A vaccine contains antigens, killed microorganisms, harmless forms of microorganisms, or a toxoid (an inactivated toxin).\nWhen a vaccine is given, it stimulates lymphocytes to produce antibodies against a specific antigen. Some lymphocytes develop into memory cells.\nIf the person later encounters the same antigen, these memory cells enable lymphocytes to produce a large number of antibodies rapidly, triggering a secondary immune response.\nThe antibodies bind to specific antigens, causing bacteria to clump together or neutralising the toxins (poisonous proteins) they produce.",
    "label": "",
    "id": "4BI1_05_10",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Blood clotting",
    "id": "4BI1_05_11",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "When blood vessels are damaged, platelets clump together and block smaller capillaries.\nSoluble fibrinogen is changed into insoluble fibrin by the action of enzymes.\nFibrin forms a network (mash) trapping red blood vessels to form a blood clot.\nThe clot stops further loss of blood and prevents entry of pathogens into the wound.",
    "label": "",
    "id": "4BI1_05_11",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Stimulus and response",
    "id": "4BI1_06_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "The body responds to changes in its internal environment (e.g. temperature, blood glucose level).",
    "label": "",
    "id": "4BI1_06_01",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "A stimulus is change in the environment.\r\nA response is the reaction to the change.\r\nThe external environment is the surrounding outside the body.\r\nThe internal environment is the inside of the body.",
    "label": "",
    "id": "4BI1_06_01",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "The stimulus is detected by the receptor organ. The effector organ makes a response. The link between the stimulus and the response is coordinated by the nervous system.",
    "id": "4BI1_06_01",
    "label": "Coordination",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "4BI1_06_02",
    "label": "Sensory organs",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A sensory organ is a group of receptor cells responding to specific stimuli such as light, sound, touch, temperature, chemicals.",
    "id": "4BI1_06_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "The receptors detect the stimulus and change its energy into electrical energy of the nerve impulses.",
    "id": "4BI1_06_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "Receptor|Organ|Type of energy received\nretina|eye|light\r\ncochlea|ear|sound\r\nsemicircular canal|ear|mechanical\r\ntaste buds|tongue|chemical\r\nolfactory receptors|nose|chemical\r\ntouch/pressure/pain receptors|skin|mechanical\r\ntemperature receptors|skin|heat\r\nstretch receptors|muscle|mechanical",
    "id": "4BI1_06_02",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "label": "Nervous system",
    "id": "4BI1_06_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "brain\nspinal cord",
    "label": "Central nervous system (CNS)",
    "id": "4BI1_06_03",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "The CNS links to sensory and effector organs by nerves. A typical nerve contains thousands of neurones or nerve cells.",
    "label": "",
    "id": "4BI1_06_03",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Name|Function\nSensory neurones|carry impulses from the sensory organs to the CNS\nRelay neurones|connect neurones inside the CNS\nMotor neurones|carry impulses from the CNS to the effectors",
    "label": "Types of neurones",
    "id": "4BI1_06_03",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Structure of a neurone",
    "id": "4BI1_06_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_06_04",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Part|Description\nCell body|contains a nucleus and cytoplasm\r\nDendrites|fibres that carry impulses towards the cell body\r\nAxon|fibres that carry impulses away from the cell body\r\nMyelin sheath|long fibres are protected by the myelin sheath, which insulates the nerve signals and increases the speed of nerve impulse transmission.",
    "id": "4BI1_06_04",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_06_05",
    "label": "Relfex",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A reflex is a rapid, automatic response to a stimulus that occurs without control by the brain. The withdrawal response usually protects the body.",
    "label": "",
    "id": "4BI1_06_05",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_06_05",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "stimulus → receptor → coordination → effector → response",
    "label": "",
    "id": "4BI1_06_05",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_06_06",
    "label": "Synapse",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Synapse is a gap between two neurones. The electrical signals cannot pass through the synapse. Neurotransmitters are released from the end of one neurone to carry the nerve impulse across the gap to the next neurone.",
    "id": "4BI1_06_06",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_06_06",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 3
  },
  {
    "description": "A nerve impulse reaches the axon terminal of the first neurone.\nVesicles in the axon terminal fuse with the cell membrane. This process requires energy.\nNeurotransmitters are released into the synaptic cleft.\nNeurotransmitters diffuse across the gap.\nNeurotransmitters bind to receptors on the membrane of the second neurone\nNerve impulse is generated in the second neurone.\nEnzymes from the second neurone break down the neurotransmitters to stop the signal.",
    "id": "4BI1_06_06",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "4BI1_06_07",
    "label": "The eye",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_06_07",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Part|Function\nCornea|a transparent, curved layer that refracts the light entering and helps to focus it\nPupil|opening in the centre of the iris\nIris|coloured part of the eye that controls the size of the pupil\nCiliary muscle|muscle that controls the shape of the lens focusing on near or distant objects\nSuspensory ligament|fibres that connect the ciliary muscle to the lens\nLens|transparent flexible jelly-like structure that refract light to focus it onto the retina\nRetina|light-sensitive layer that converts light into electrical impulses\nFovea|a central part of the retina where cone cells are most concentrated to detect coloured light\nOptic nerve|contains sensory neurones that carry nerve impulses from the retina to the brain",
    "label": "",
    "id": "4BI1_06_07",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Pupil reflex",
    "id": "4BI1_06_08",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "The impulses pass to the brain through the optic nerve and then back to the iris muscle. Iris is a coloured ring of circular and radial muscle that changes the size of the pupil, controlling how much light enters the pupil.",
    "label": "",
    "id": "4BI1_06_08",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_06_08",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "|Changes in bright light|Changes in dim light\nCircular muscles|contract|relax\nRadial muscles|relax|contract\nPupil|constricts|dilates\nEffect|less light enters the eye, preventing damage to the retina|more light enters the eye to see more clearly",
    "id": "4BI1_06_08",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "4BI1_06_09",
    "label": "Accomodation reflex",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The accommodation reflex is the adjustment of the lens by the ciliary muscles to focus on near or distant objects.",
    "id": "4BI1_06_09",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_06_09",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 3
  },
  {
    "description": "Focusing on a distant object|Focusing on a near object\nCiliary muscle|relax|contract\nSuspensory ligaments|pulled tight|slack\nLens|flat|fatter\nEffect|less refraction of light|more refraction of light",
    "id": "4BI1_06_09",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "4BI1_07_01",
    "label": "Hormones",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Hormones are chemical messengers released directly into the blood by endocrine glands, where they travel to target organs to regulate body functions.",
    "label": "",
    "id": "4BI1_07_01",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Nervous system|Endocrine system\nnerve impulses are transmitted through neurones| hormones are transmitted through the bloodstream\nnerve impulses travel fast|hormones travel more slowly\neffect is instant|hormones take longer to act\nresponse is usually short-lived|response is usually longer\neffect is very localised|effect is widespread",
    "id": "4BI1_07_01",
    "label": "Differences between nervous and endocrine control",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_07_02",
    "label": "Endocrine glands",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_07_02",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Secreted from the pituitary gland after puberty.\r\nStimulates oestrogen secretion in females.\r\nStimulates the growth of follicle in females.\r\nStimulates sperm production in males.\r",
    "id": "4BI1_07_02",
    "label": "Follicular stimulating hormone (FSH)",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Secreted from the pituitary gland after puberty.\r\nStimulates ovulation in females.\r\nStimulates testosterone secretion in the males.",
    "label": "Luteinising hormone (LH)",
    "id": "4BI1_07_02",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Secreted from the pituitary gland when blood concentration increases.\nActs on the collecting duct cells to control water content in the body.",
    "label": "Antidiuretic hormone (ADH)",
    "id": "4BI1_07_02",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "Secreted from the thyroid gland in response to thyroid stimulating hormone.\r\nControls the metabolic rate in the body.",
    "id": "4BI1_07_02",
    "label": "Thyroid hormone (thyroxine)",
    "type": "list",
    "status": "show",
    "order": 6
  },
  {
    "description": "Secreted from the pancrease in response to high blood glucose level.\nLowers blood glucose.",
    "id": "4BI1_07_02",
    "label": "Insulin",
    "type": "list",
    "status": "show",
    "order": 7
  },
  {
    "description": "Secreted from the pancrease in response to low blood glucose level.\nRaises blood glucose.",
    "id": "4BI1_07_02",
    "label": "Glucagon",
    "type": "list",
    "status": "show",
    "order": 8
  },
  {
    "description": "Secreted from adrenal glands.\nPrepares the body for the physical activity.",
    "label": "Adrenaline",
    "id": "4BI1_07_02",
    "type": "list",
    "order": 9,
    "status": "show"
  },
  {
    "description": "Secreted from the testes in response to LH in males.\r\nControls the development of male secondary sexual characteristics.",
    "label": "Testosterone",
    "id": "4BI1_07_02",
    "type": "list",
    "order": 10,
    "status": "show"
  },
  {
    "description": "Secreted from the ovaries in response to FSH in females.\r\nStimulates the secretion of LH, but inhibits the secretion of FSH from the pituitary.\r\nThickens uterus lining.\r",
    "label": "Oestrogen",
    "id": "4BI1_07_02",
    "type": "list",
    "order": 11,
    "status": "show"
  },
  {
    "description": "Secreted from the ovaries in response to LH in females.\r\nInhibits the secretion of FSH and LH from the pituitary.\r\nMaintains thick uterus lining.\r\nPlacenta also produces progesterone during pregnancy.\r",
    "label": "Progesterone",
    "id": "4BI1_07_02",
    "type": "list",
    "order": 12,
    "status": "show"
  },
  {
    "description": "",
    "label": "Adrenaline",
    "id": "4BI1_07_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "The adrenal glands secrete adrenaline during fight or flight conditions. Adrenaline acts on various organs and tissues, preparing the body for action.",
    "id": "4BI1_07_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Faster and deeper breathing brings more oxygen into the body.\r\nHeart rate increases, pumping blood more quickly around the body.\r\nBlood flow to muscles increases, supplying more oxygen and glucose for respiration.\r\nBlood flow to the intestines decreases, as digestion is not needed during the fight-or-flight response.\r\nPupils dilate, improving visual sensitivity to movement.\r\nIn the liver, glycogen is converted into glucose, releasing more glucose into the bloodstream for energy.\r",
    "id": "4BI1_07_03",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_07_04",
    "label": "Insulin",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Insulin is a peptide hormone produced from the pancreas (beta cells).\r\nWhen blood glucose level rises, the pancreas releases insulin into the bloodstream.\r\nInsulin stimulates liver cells to absorb glucose and convert it into glycogen for storage.\r\nThe blood glucose level decreases back to its normal range.",
    "id": "4BI1_07_04",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_07_05",
    "label": "Diabetes",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "When the pancrease cannot make enough insulin to keep glucose level constant, it rises to very high concentrations. This condition is called diabetes.",
    "id": "4BI1_07_05",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "high concentration of glucose in the blood and it is excreted in the urine\r\nthirst\r\nweight loss\r\ncoma and death in serious cases",
    "label": "Symptoms",
    "id": "4BI1_07_05",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Type 1 diabetes occurs when the pancreas cannot produce insulin (insulin deficiency)\r\nType 2 diabetes occurs when the cells do not respond properly to insulin (insulin resistance)\r",
    "label": "Classification",
    "id": "4BI1_07_05",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "daily injection of insulin to maintain the glucose within normal range\r\ncheck blood glucose using a glucometer\r\nlimit the amount of carbohydrate in the diet\r",
    "label": "Management",
    "id": "4BI1_07_05",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "Homeostasis",
    "id": "4BI1_08_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Homeostasis is keeping the conditions in the internal environment of the body relatively constant by negative feedback mechanism.",
    "label": "",
    "id": "4BI1_08_01",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Osmoregulation is keeping the water and salt balance in the body.",
    "id": "4BI1_08_01",
    "label": "Osmoregulation",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "Thermoregulation is maintaining constant internal body temperature.",
    "id": "4BI1_08_01",
    "label": "Thermoregulation",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "4BI1_08_02",
    "label": "Excretion",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Excretion is the removal of waste products of metabolism and substances in excess of requirements.",
    "label": "",
    "id": "4BI1_08_02",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Organ|Waste products\nLungs|excrete carbon dioxide, water vapour\nKidneys|excrete urea, excess water, ions, hormones and drugs\nSkin|excrete sweat and a small amount of urea\nLiver|breaks down excess amino acids and produces urea, detoxifis chemicals and excretes bile",
    "label": "Excretory organs",
    "id": "4BI1_08_02",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_08_03",
    "label": "The urinary system",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_08_03",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Organ|Function\nkidneys|filter the blood to form urine\nrenal arteries|supply blood to the kidneys\nrenal veins|carry blood away from the kidneys\nureter|allows the flow of urine from the kidneys to the bladder\nbladder|temporarily stores urine until it is released\nurethra|carries urine out of the body.",
    "id": "4BI1_08_03",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "The kidney tissue consists of many capillaries and tiny tubes, called renal tubules, held together with connective tissue.",
    "label": "Microscopic structure of the kidneys",
    "id": "4BI1_08_03",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_08_03",
    "type": "image",
    "order": 5,
    "status": "show"
  },
  {
    "description": "Part|Description\ncortex|the outer region of the kidney\nmedulla|the middle layer of the kidney\npelvis|the funnel like structure",
    "label": "",
    "id": "4BI1_08_03",
    "type": "table",
    "order": 6,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_08_04",
    "label": "Nephron",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A nephron is a single glomerulus with its renal capsule, renal tubule and blood capillaries.",
    "id": "4BI1_08_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_08_04",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 3
  },
  {
    "description": "Structure|Description\nglomerulus|a network of capillaries where blood is filtered under high pressure\nbasement membrane|a thin layer that filters small molecules but preventing proteins from passing\nBowman’s capsule|a cup-shaped structure that surrounds the glomerulus and collects the filtrate\nproximal convoluted tubule|a coiled tubule that selectively reabsorbs glucose, amino acids, and water and salts from the ultrafiltrate\nLoop of Henle|a U-shaped section that reabsorbs most water\ndistal convoluted tubule|a coiled tubule that fine-tunes ion and pH balance under hormonal control\ncollecting duct|a tube that regulates water reabsorption under ADH control before passing it to the renal pelvis",
    "id": "4BI1_08_04",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 4
  },
  {
    "description": "The blood in the glomerulus is filtered into Bowman's capsule under high pressure.\nThe glomerular filtrate contains water and small molecules such as urea, glucose, and ions.\nThe concentrations of urea and glucose in the filtrate are the same as in the plasma.\nThe glomerular filtrate does not contain protein because they are large and they cannot pass through the basement membrane.",
    "id": "4BI1_08_04",
    "label": "Ultrafiltration",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "The proximal convoluted tubule reabsorbs useful substances (glucose, water and some of the ions) into the blood.\nAll glucose is selectively reabsorbed into the blood at the proximal convoluted tubule by active transport.\nThe urine contains no glucose.",
    "label": "Reabsorption at the proximal convoluted urine",
    "id": "4BI1_08_04",
    "type": "list",
    "order": 6,
    "status": "show"
  },
  {
    "description": "More water and ions are reabsorbed into the blood in the loop of Henle, which helps to concentrate the urine.\nThe collecting duct regulates the reabsorption of water to control urine concentration under the influence of ADH.\nThe urine contains urea, water and excess mineral ions.",
    "label": "Formation of urine",
    "id": "4BI1_08_04",
    "type": "list",
    "order": 7,
    "status": "show"
  },
  {
    "description": "",
    "label": "Osmoregulation",
    "id": "4BI1_08_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Water loss (e.g., through sweating or dehydration) increases blood concentration.\nOsmoreceptors in the hypothalamus detect the increased osmolarity.\nThe pituitary gland releases ADH into the bloodstream.\nADH makes the collecting ducts more permeable to water, increasing water reabsorption into the blood.\nThe urine volume decreases and urine becomes concentrated.\nThe blood volume increases and the blood concentration decreases to normal range.",
    "label": "Osmoregulation after water loss",
    "id": "4BI1_08_05",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Excess water lowers blood concentration.\nOsmoreceptors in the hypothalamus detect the decreased osmolarity.\nADH secretion from the posterior pituitary is blocked.\nThe collecting ducts become less permeable to water, reducing water reabsorption.\nThe urine volume increases and urine becomes dilute.\nThe blood volume decreases and the blood concentration increases to normal range.",
    "label": "Osmoregulation after drinking too much water",
    "id": "4BI1_08_05",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "The skin",
    "id": "4BI1_08_06",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "resist mechanical damage\nbarrier to the entry of pathogens\nprevent loss of water\nsense organ for tough and temperature changes\ncontrol the loss of heat trhough the body surface",
    "label": "Functions of the skin",
    "id": "4BI1_08_06",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_08_06",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Structure|Function\nEpidermis|consists of dead cells that stop water loss and protect against infection\nDermis|contains sensory receptors, sweat glands, small blood vessels and hair follicles\nHypodermis|contains fatty tissue that insulates heat loss",
    "label": "",
    "id": "4BI1_08_06",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Thermoregulation",
    "id": "4BI1_08_07",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "The rise in core body temperature is detected by thermoreceptors in the hypothalamus.\r\nIt stimulates sweat glands to produce sweat, and evaporation of sweat cools the body.\r\nArterioles leading to the skin dilate, increasing blood flow to the skin. More heat is radiated to the surroundings.",
    "id": "4BI1_08_07",
    "label": "Thermoregulation in hot weather",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "The drop in core body temperature is detected by thermoreceptors in the hypothalamus.\r\nArterioles leading to the skin constricts, reducing blood flow to the skin. Less heat is radiated to the surroundings.\r\nHair erector muscles contract, causing hairs to stand on end and trap an insulating layer of air (especially in animals).\r\nShivering, rapid muscle contraction, produces a large amount of heat.\r\nAdrenaline stimulates the increase in metabolism which produces more heat.",
    "id": "4BI1_08_07",
    "label": "Thermoregulation in cold weather",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_09_01",
    "label": "Sexual reproduction",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Gametes (sperm and egg cells) are produced.\nThe male gamete (sperm) is transferred to the female gamete (egg cell).\nFertilisation must occur; the sperm fuses with the egg.\nThe zygote formed develops into a new individual.",
    "label": "",
    "id": "4BI1_09_01",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_09_01",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Reproduction in humans",
    "id": "4BI1_09_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Part|Function\novary|female gonad that contains follicles in which ova are produced\nfunnel of voiduct|directs an ovum from the ovary into the oviduct\noviduct|carries an ovum to the uterus; the site of fertilisation\nuterus|where the foetus develops\ncervix|a ring of muscle separating the vagina from the uterus\nvagina|receives the male penis during sexual intercourse; sperms are deposited here",
    "id": "4BI1_09_02",
    "label": "Female reproductive system",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "Part|Function\ntestis|male gonad that produces sperm\nscrotum|a sac that holds the testes outside the body keeping them cooler\nsperm duct|muscular tube that links the testis to the urethra\nprostate gland|produce fluid part of the semen\nurethra|passes semen containing sperm through the penis; also carries urine from the bladder\npenis|can become firm and insert into vagina during sexual intercourse to transfer sperm",
    "id": "4BI1_09_02",
    "label": "Male reproductive system",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "Anchors embryo in the uterus\nAllows diffusion of oxygen and nutrients from mother to foetus\nAllows diffusion of carbon dioxide and waste products from foetus to mother\nPrevents mixing of maternal and foetal blood\nPrevents some toxins reaching the foetus\nTransfers antibodies from mother to foetus\nProduces progesterone to maintain uterus lining during pregnancy",
    "id": "4BI1_09_02",
    "label": "Functions of placenta",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "Produced by amnion\nProtects against mechanical injury (bumps, pressure)\nKeeps the fetus at a constant temperature\nProvides moisture to the foetus\nAllows the fetus to move freely\nHelps muscle and bone development\nProvides some protection against infection",
    "id": "4BI1_09_02",
    "label": "Amniotic fluid",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "id": "4BI1_09_03",
    "label": "Male sex hormones",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Hormone|Function\nFSH|stimulates sperm production in the testes\nLH|stimulates testes to secrete testosterone\nTestosterone|controls the development of male secondary sexual characteristics",
    "label": "",
    "id": "4BI1_09_03",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Menstrual cycle",
    "id": "4BI1_09_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A monthly (28-day) cycle controlled by hormones\nPrepares the uterus for possible pregnancy\nIf no fertilisation occurs, uterus lining is shed",
    "label": "",
    "id": "4BI1_09_04",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Hormone|Function\nFSH|stimulates the growth of a follicle and the production of oestrogen in the ovaries\nLH|stimulates ovulation and the production of progesterone in the ovaries\noestrogen|thickens the uterine lining; stimulates LH production and inhibits FSH production from the pituitary gland; controls the development of female secondary characteristics\nprogesterone|maintains thickened uterus lining; inhibits FSH and LH production from the pituitary gland",
    "id": "4BI1_09_04",
    "label": "Hormones controlling menstrual cycle",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_09_04",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "label": "Photosynthesis",
    "id": "4BI1_10_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Photosynthesis is the process by which plants synthesise carbohydrates from raw materials using energy from light.",
    "label": "",
    "id": "4BI1_10_01",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "carbon dioxide + water → glucose + oxygen",
    "label": "Word equation",
    "id": "4BI1_10_01",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂",
    "label": "Balanced chemical equation",
    "id": "4BI1_10_01",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Water is absorbed from the soil by roots and transported to leaves through the xylem.\nCarbon dioxide enters the leaf from the air through stomata.\nPhotosynthesis takes place in chloroplasts within leaf cells.\nChlorophyll (green pigment) absorbs light energy from the Sun.\nLight energy is used to split water molecules into hydrogen and oxygen.\nOxygen is released from the leaf as a waste product.\nHydrogen combines with carbon dioxide to form sugar (glucose).\nLight energy is converted into chemical energy stored in carbohydrates.",
    "id": "4BI1_10_01",
    "label": "The process of photosynthesis",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "stored as starch, which is insoluble in water, compact, and can be broken down into glucose when needed\nconverted into cellulose to form the cell wall\nbroken down during respiration to release energy\nconverted into sucrose for transport in the phloem vessels (translocation)\nused to produce nectar to attract insects for pollination",
    "label": "Uses of glucose in plants",
    "id": "4BI1_10_01",
    "type": "list",
    "order": 6,
    "status": "show"
  },
  {
    "description": "",
    "label": "Investigating conditions needed for photosynthesis",
    "id": "4BI1_10_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "destarch by leaving the plant in darkness for 2-3 days\r\ndependent variable: presence of starch",
    "label": "",
    "id": "4BI1_10_02",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "independent variable: chlorophyll\nuse a variegated leaf\nplace the plant in under light for 6 hours and do an iodine solution test\nobservation: only parts of the leaf that had chlorophyll turn blue-black, and the other parts remain brown\ninterpretation: starch is only present in parts that contained chlorophyll",
    "id": "4BI1_10_02",
    "label": "Presence of chlorophyll for photosynthesis",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "independent variable: sunlight\ncover part of a leaf with a piece of aluminium or black paper to block sunlight\nplace the plant in under light for 6 hours and do an iodine solution test\nobservation: only areas that had received light turns blue-black, and other parts remain brown\ninterpretation: starch is only present in parts that received light",
    "id": "4BI1_10_02",
    "label": "Presence of light for photosynthesis",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "independent variable: carbon dioxide\r\nplace a dish of soda lime in a pot containing a plant covered with a polythene bag, and set up another pot soda lime as the control\r\nplace the plant in under light for 6 hours and do an iodine solution test\r\nobservation: only the leaf that can get carbon dioxide turns blue-black, and the leaf that does not get carbon dioxide remains brown\r\ninterpretation: starch is only present in leaves that can get carbon dioxide\r",
    "id": "4BI1_10_02",
    "label": "Presence of carbon dioxide for photosynthesis",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "Remove a leaf and place it in boiling water for 30 seconds to remove the waxy layer.\nTurn off the Bunsen burner, then place the leaf in a test tube containing ethanol.\nPut the test tube in a water bath to remove the chlorophyll (decolourise the leaf).\nRinse the leaf with cold water and place it on a flat surface.\nAdd iodine solution to observe any colour change.",
    "id": "4BI1_10_02",
    "label": "Testing leaves for starch",
    "type": "list",
    "status": "show",
    "order": 6
  },
  {
    "description": "",
    "id": "4BI1_10_03",
    "label": "Leaf structure",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_10_03",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Their broad, flat shape gives a large surface area for the absorption of sunlight and carbon dioxide.\nMost leaves are thin, so the carbon dioxide only needs to diffuse across short distances to reach the inner cells.",
    "id": "4BI1_10_03",
    "label": "Adaptation for photosynthesis",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Part|Detail\ncuticle|A waxy layer secreted by the upper epidermis. It is waterproof and helps reduce water loss.\nupper epidermis|A thin, transparent layer that allows light to pass through. It does not contain chloroplasts and acts as a barrier against disease-causing organisms.\npalisade mesophyll|The main region for photosynthesis. Cells are long and column-shaped, and are packed with chloroplasts to absorb light energy. They receive carbon dioxide by diffusion from the air spaces in the spongy mesophyll.\nspongy mesophyll|Made up of loosely packed, irregularly shaped cells. These cells contain fewer chloroplasts than palisade cells. Large air spaces between the cells allow efficient gas exchange (carbon dioxide in and oxygen out).\nvascular bundle|A leaf vein consisting of xylem and phloem. The xylem transports water and mineral ions to the leaf, while the phloem transports sugars and amino acids away from the leaf (translocation).\nlower epidermis|A protective layer that contains stomata. It helps regulate water loss through transpiration and controls gas exchange by diffusion.\nstomata|Tiny pores surrounded by a pair of guard cells, which control opening and closing. Water vapour diffuses out during transpiration, while carbon dioxide diffuses in and oxygen diffuses out during photosynthesis.",
    "label": "",
    "id": "4BI1_10_03",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Limiting factors of photosynthesis",
    "id": "4BI1_10_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A limiting factor is the condition or substance that is in the lowest supply and limits the rate of photosynthesis. The rate of photosynthesis is affected by three main limiting factors: carbon dioxide concentration, light intensity, and temperature.",
    "label": "",
    "id": "4BI1_10_04",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Photosynthesis increases as carbon dioxide levels rise, but beyond a certain point, the rate no longer increases because another factor becomes limiting. Under most conditions, carbon dioxide is the limiting factor for photosynthesis.",
    "id": "4BI1_10_04",
    "label": "Carbon dioxide",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "More light provides more energy for photosynthesis, increasing the rate until the chloroplasts work at maximum capacity. Light is the limiting factor of photosynthesis in shaded conditions or at night.",
    "id": "4BI1_10_04",
    "label": "Light intensity",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "Temperature becomes a limiting factor for photosynthesis when it is too low or too high. The rate of photosynthesis speeds up with temperature, but if temperature becomes too high, the enzymes denature and the rate decreases.",
    "id": "4BI1_10_04",
    "label": "Temperature",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "label": "Investigating the effect of light intensity on the rate of photosynthesis",
    "id": "4BI1_10_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_10_05",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Put a pond weed in a beaker containing distilled water.\r\nPut a light source 10 cm away from the beaker and switch it on.\r\nCount the number of gas bubbles in 1 minute.\r\nRepeat the experiment at least 3 times and calculate the average to get more reliable data.\r\nRepeat the experiment after moving the light source 20 cm away from the beaker at least 3 times and calculate the average.",
    "label": "Procedure",
    "id": "4BI1_10_05",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "More gas bubbles are produced when the light source is near.",
    "label": "Observation",
    "id": "4BI1_10_05",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "The rate of photosynthesis increases as the light intensity increases.",
    "id": "4BI1_10_05",
    "label": "Interpretation",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "label": "Investigating the effect of light on gas exchange by a leaf",
    "id": "4BI1_10_06",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_10_06",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Place distilled water, hydrogencarbonate indicator, and pond weed into two separate test tubes.\nSeal all the tubes with stoppers.\nWrap one test tube in aluminium foil to block light and place another under a light source.\nAs a control, prepare a third test tube containing only water and hydrogencarbonate indicator, without pond weed.",
    "label": "Procedure",
    "id": "4BI1_10_06",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Indicator in tube placed in dark turns yellow\nIndicator in tube placed in light turns purple\nIndicator in control tube remains pink red",
    "label": "Observation",
    "id": "4BI1_10_06",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "In the dark, the rate of respiration is higher than the rate of photosynthesis. Carbon dioxide level increases. The solution becomes more acidic and the indicator turns yellow.\nIn the light, the rate of photosynthesis is greater than the rate of respiration. Carbon dioxide level decreases. The solution becomes less acidic and the indicator turns purple.",
    "label": "Interpretation",
    "id": "4BI1_10_06",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_10_07",
    "label": "Plant minerals",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Mineral|Uses\nnitrates|to make amino acids and proteins\nmagnesium|to make chlorophyll\nphosphate|making DNA and part of cell membranes\npotassium|making enzymes of respiration",
    "id": "4BI1_10_07",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_11_01",
    "label": "Osmosis",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Osmosis is the net movement of water from a region of higher water potential to a region of lower water potential across the partially permeable membrane.",
    "label": "",
    "id": "4BI1_11_01",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "If a plant cell is surrounded by distilled water, water enters the cell. The vacuole expands and the cell becomes turgid.\r\nIf a plant cell is surrounded by a concentrated solution, water leaves the cell. The vacuole shrinks and the cell becomes flaccid. Eventually, the cell membrane is detached from the cell wall (plasmolysis).",
    "label": "Osmosis in plant cells",
    "id": "4BI1_11_01",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "If an animal cell is surrounded by distilled water, water enters the cell making it swell up. Unless the extra water is removed, the cell will burst.\r\nIf an animal cell is surrounded by a concentrated solution, water leaves the cell making it shrink.",
    "id": "4BI1_11_01",
    "label": "Osmosis in animal cells",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "4BI1_11_02",
    "label": "Investigating osmosis using Visking tubing",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Soak Visking tubing in water to soften it.\r\nTie one end and fill the tubing with a known volume of sucrose solution.\r\nTie the other end, blot the outside dry and measure the initial mass.\r\nPlace the Visking tubing into a beaker containing different concentrations of sugar solution.\nAfter 60 minutes, take out the Visking tubing, blot dry and measure the final mass.\r\nRepeat the procedure using different concentrations of external solutions.",
    "label": "Procedure",
    "id": "4BI1_11_02",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Mass change (g) = final mass − initial mass\r\npercent mass change = (mass change ÷ initial mass) × 100",
    "label": "Calculation",
    "id": "4BI1_11_02",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "When the Visking tubing is placed in distilled water, the final mass increases.\r\nWhen the Visking tubing is placed in a more concentrated solution, the final mass decreases.\r\nPlot external concentration on x-axis and percent mass change on y-axis and draw the best fit line.",
    "label": "Observation",
    "id": "4BI1_11_02",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "Positive percentage mass change: the solution inside the Visking tubing is hypertonic relative to the external solution.\nNegative percentage mass change: net water left the tubing as the solution inside the Visking tubing is hypotonic relative to the external solution.\nThe concentration where the curve crosses 0% is the isotonic point, where no net movement of water as the solutions inside and outside the Visking tubing have equal water potential.",
    "label": "Interpretation",
    "id": "4BI1_11_02",
    "type": "list",
    "order": 6,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_11_03",
    "label": "Investigating osmosis using potato cylinder",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Cut several potato strips or cylinders of equal length, blot them dry and measure their initial lengths.\r\nPlace one potato strip into beakers containing different concentrations of salt solution.\r\nAfter 60 minutes, take out each strip and gently blot with a paper towel to remove surface solution.\r\nRecord the final length of each potato piece.",
    "id": "4BI1_11_03",
    "label": "Procedure",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "length change (g) = final length − initial length\npercent length change = (length change ÷ initial length) × 100",
    "id": "4BI1_11_03",
    "label": "Calculation",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "In distilled water, the potato length increases.\r\nIn concentrated solution, the potato length decreases.",
    "id": "4BI1_11_03",
    "label": "Observation",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "In distilled water, water moves into the potato cells by osmosis and cells become turgid.\r\nIn concentrated solution, water leaves the potato cells by osmosis and cells become flaccid or plasmolysed.",
    "id": "4BI1_11_03",
    "label": "Interpretation",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "label": "Transport in plants",
    "id": "4BI1_11_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Water enters root hair cells by osmosis\nMoves from higher water potential (soil) to lower water potential (root cells)",
    "label": "Uptake of water by roots",
    "id": "4BI1_11_04",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Water evaporates from mesophyll cells\nWater vapour diffuses out through stomata\nTranspiration causes water to be pulled up in the stem and roots in a continuous flow known as transpiration stream.",
    "label": "Loss of water by the leaves (transpiration)",
    "id": "4BI1_11_04",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "supplies water for the leaf cells to carry out photosynthesis\ncarries mineral ions dissolved in water\nprovides water to keep the plant cells turgid\nallows evaporation from the leaf surface and cools the leaf",
    "id": "4BI1_11_04",
    "label": "Transpiration stream",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "Water and mineral ions are transported upwards\nDriven by transpiration pull\nCohesion between water molecules maintains a continuous column",
    "id": "4BI1_11_04",
    "label": "Transport in the xylem",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "Sucrose and amino acids are transported\nMoves from sources (leaves) to sinks (roots, fruits)\nTransport occurs by active transport (translocation)",
    "label": "Transport in the phloem",
    "id": "4BI1_11_04",
    "type": "list",
    "order": 6,
    "status": "show"
  },
  {
    "description": "Mineral ions are absorbed by active transport\nMoves against concentration gradient\nRequires energy from respiration",
    "label": "Mineral uptake by roots",
    "id": "4BI1_11_04",
    "type": "list",
    "order": 7,
    "status": "show"
  },
  {
    "description": "",
    "label": "Factors affecting the rate of transpiration",
    "id": "4BI1_11_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Condition|Effect\nLight intensity|The rate of transpiration increases in light because of the opening of the stomata in the leaves.\nTemperature|High temperatures increase the rate of transpiration by increasing the rate of evaporation of water from the mesoophyll cells.\nHumidity|Humid condition decreases the rate of transpiration by reducing the diffusion gradient between the air spaces in the leaf and external air.\nWind speed|Faster air movement across the surface of the leaf increases the rate of transpiration as moving air remove water vapour near the stomata.",
    "label": "",
    "id": "4BI1_11_05",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Investigating the rate of transpiration using a simple potometer",
    "id": "4BI1_11_06",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Cut a leafy shoot under water to prevent air entering xylem.\nInsert the shoot into the potometer under water.\nApply petroleum jelly around the joints to seal air.\nIntroduce an air bubble into the capillary tube and start the stopwatch.\nMeasure the distance moved by the bubble over time.",
    "id": "4BI1_11_06",
    "label": "Procedure",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "rate of transpiration = distance moved by the bubble/time taken",
    "label": "Calculation",
    "id": "4BI1_11_06",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Tropism",
    "id": "4BI1_12_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A tropism is the growth response of a plant to a directional stimulus.",
    "id": "4BI1_12_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "If the growth response is towards the direction of the stimulus, it is a positive tropism.\nIf the growth response is away from the direction of the stimulus, it is a negative tropism.",
    "id": "4BI1_12_01",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Stimulus|Name|Response of shoots|Response of roots\nlight|phototropism|positive phototropism (grow towards light source)|negative phototropism (grow away from light in some species)\ngravity|geotropism|negative geotropism (grow away from direction of gravity)|positive geotropism (grow towards direction of gravity)",
    "label": "Main responses of plants",
    "id": "4BI1_12_01",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Plant hormones",
    "id": "4BI1_12_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Auxin is a plant growth hormone that controls cell elongation.\nAuxin is produced in shoot tips (apical meristems).\nLight causes auxin to diffuse to the shaded side.\nAuxin stimulates the elongation of cells on shaded side.\nShoot bends towards light.",
    "label": "Auxin",
    "id": "4BI1_12_02",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Comparison of sexual and asexual reproduction",
    "id": "4BI1_13_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Feature|Sexual reproduction|Asexual reproduction\ngametes produced|Yes|No\nfertilisation takes place|Yes|No\ngenetic variation in offspring|Yes|No\nhas survival value in|changing environment|stable environment",
    "label": "",
    "id": "4BI1_13_01",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Asexual reproduction in plants",
    "id": "4BI1_13_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Method|Definition\nrunner|a new plant is produced where the runner touches the ground\ntuber|a new plant is produced from underground stem with buds\nbulb|a new plant is produced from bases of leaves swollen with food\ncutting|a new plant grows from a piece of stem or leaf cut from a plant",
    "id": "4BI1_13_02",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_13_03",
    "label": "Sexual reproduction in plants",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_13_03",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Part|Function\r\npetal|often large and coloured to attract insects\r\nsepal|protects the flower while in bud\r\nstamen|the male reproductive part of the flower, made up of the anther and the filament\r\nanther|contains pollen sacs in which pollen grains are formed; pollen contains male sex cells\r\nfilament|supports the anther\r\ncarpel|the female reproductive part of the flower, made up of the stigma, style and ovary\r\nstigma|a sticky surface that receives pollen during pollination\r\nstyle|links the stigma to the ovary through which pollen tubes grow\r\novary|contains ovules\r\novule|contains a haploid nucleus, which develops into a seed when fertilised",
    "id": "4BI1_13_03",
    "label": "Parts of a flower",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "Pollination is the transfer of pollen grains from the anther to a stigma.",
    "id": "4BI1_13_03",
    "label": "Pollination",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "Self-pollination is the transfer of pollen grains from the anther of a flower to the stigma of the same flower, or a different flower on the same plant.",
    "label": "Self-pollination",
    "id": "4BI1_13_03",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "Cross-pollination is the transfer of pollen grains from the anther of a flower to the stigma of a flower on a different plant of the same species.",
    "label": "Cross-pollination",
    "id": "4BI1_13_03",
    "type": "text",
    "order": 6,
    "status": "show"
  },
  {
    "description": "Feature|Insect-pollinated flowers|Wind-pollinated flowers\npetals|present; often large, coloured and scented, with guidelines to guide insects into the flower|absent, or small and green\nnectar|produced by nectaries to attract insects|absent\nstamen|present inside the flower|long filament to hang anthers freely outside the flower\nstigma|small surface area; inside the flower|large and feathery; hanging outside the flower to catch pollen carried by the wind\npollen|smaller amounts of grains, round and sticky or covered in spikes to attach to the bodies of insects|larger amounts of smooth and light pollen grains, which are easily carried by the wind",
    "label": "Differences between insect-pollinated and wind-pollinated flowers",
    "id": "4BI1_13_03",
    "type": "table",
    "order": 7,
    "status": "show"
  },
  {
    "description": "pollen grain absorbs water and germinates\na pollen tube grows down through the style\nthe male nucleus travels down the pollen tube\npollen tube enters the ovary and reaches an ovule through the micropyle\nmale nucleus fuses with the egg cell nucleus and a zygote is formed",
    "label": "Fertilisation",
    "id": "4BI1_13_03",
    "type": "list",
    "order": 8,
    "status": "show"
  },
  {
    "description": "the ovule develops into a seed\nthe ovary develops into a fruit",
    "id": "4BI1_13_03",
    "label": "Seed and fruit formation",
    "type": "list",
    "status": "show",
    "order": 9
  },
  {
    "description": "",
    "label": "Germination",
    "id": "4BI1_13_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Germination is the process by which a seed begins to grow and develop into a young plant, using stored food.",
    "label": "",
    "id": "4BI1_13_04",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Condition|Reason\nwater|activates enzymes for chemical reactions to take place\noxygen|needed for aerobic respiration to release energy\nwarm temperature|provides optimum conditions for enzyme activity",
    "label": "Conditions needed for germination",
    "id": "4BI1_13_04",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_14_01",
    "label": "Ecosystem",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "An ecosystem is a community of organisms and their environment, interacting together.",
    "id": "4BI1_14_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "A habitat is the environment where an organism lives. A habitat provides organisms with food, water, shelter, and space.",
    "label": "Habitat",
    "id": "4BI1_14_01",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "A community is all the populations of different species in an ecosystem.",
    "label": "Community",
    "id": "4BI1_14_01",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "A population is a group of organisms of one species, living and interacting in the same area, at the same time.",
    "label": "Population",
    "id": "4BI1_14_01",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_14_02",
    "label": "Investigating a population using quadrat method",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Use a random number generator to select coordinates for placing the quadrat.\nCount the number of the chosen organisms within the quadrat and record the result.\nPlace additional quadrats at random locations and repeat the counting process.\nCalculate the average number of organisms per quadrat.\nFinally, multiply this average by the total area to estimate the overall population in the study area.",
    "id": "4BI1_14_02",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_14_03",
    "label": "Biodiversity",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Biodiversity is the amount of variation shown by species in an ecosystem.",
    "label": "",
    "id": "4BI1_14_03",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "The number of different species present is known as the species richness.\nThe relative abundance of each species is known as the evenness of numbers.",
    "label": "",
    "id": "4BI1_14_03",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Investigating the biodiversity using quadrat method",
    "id": "4BI1_14_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Select two different habitats for investigation.\r\nUse a random number generator to choose random coordinates for placing the quadrat in the first area.\r\nIdentify different species and count the number of each species.\r\nRecord the results in a data table.\r\nChoose more quadrats randomly several times and repeat the procedure in the same area.\r\nRepeat the entire procedure in the second habitat.",
    "label": "Procedure",
    "id": "4BI1_14_04",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Calculate the average population in each quadrat.\nCompare the number of different species for species richness.\nCompare the relative abundance of each species for evenness.",
    "label": "Calculation and interpretation",
    "id": "4BI1_14_04",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_14_05",
    "label": "Interactions in ecosystem",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "the plants, animals and decomposers are continually recycling the same nutrients through the ecosystem",
    "id": "4BI1_14_05",
    "label": "Feeding among organisms",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "animals compete for food, shelter, mates, nesting sites\nplants compete for carbon dioxide, mineral ions, light an water",
    "id": "4BI1_14_05",
    "label": "Competition among organisms",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "plants absorb mineral ions, carbon dioxide and water from the environment\nplants also give off water vapour and oxygen into the environment\nanimals use materials from the environment to build shelters\nthe temperature of the environment can affect processes occurring in the organisms\nprocesses occurring in organisms can affect the temperature of the environment",
    "label": "Interaction between organisms and the environment",
    "id": "4BI1_14_05",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Many factors influence the number and distribution of organisms in an ecosystem. Biotic factors are biology and mostly involve feeding relationship. Abiotic factors are physical and chemical factors.",
    "label": "Biotic and abiotic factors",
    "id": "4BI1_14_05",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_14_06",
    "label": "Feeding relationships",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The Sun is the principal source of energy for food chains.",
    "id": "4BI1_14_06",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Term|Definition\nfood chain|the diagram that shows the transfer of energy from one organism to the next; a food chain always begins with a producer\nfood web|a network of interconnected food chains\r\nproducer|an organism that makes its own organic nutrients from sunlight through photosynthesis\r\nconsumer|an organism that gets energy by feeding on other organisms\r\nherbivore|an animal that gets energy by eating plants\r\ncarnivore|an animal that gets energy by eating other animals\r\ndecomposer|an organism that gets energy from dead or waste organic material\r\ntrophic level|the position of an organism in a food chain, food web or ecological pyramid",
    "id": "4BI1_14_06",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "id": "4BI1_14_07",
    "label": "Ecological pyramids",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The pyramid of numbers represents the relative number of organisms at each trophic level. Sometimes the pyramid of numbers is upside down, for example fleas feeding on a bird like a bee-eater.",
    "id": "4BI1_14_07",
    "label": "Pyramid of numbers",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "The pyramid of biomass represents the proportion of dry mass of organisms at each trophic level. The pyramid of biomass is nearly always the correct pyramid shape.",
    "label": "Pyramid of biomass",
    "id": "4BI1_14_07",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "not every organism in that trophic level is eaten\r\nnot all of the organism is eaten\r\nnot all of the organism is digested and energy lost in faeces\r\nsome energy is lost as heat during respiration\r\nsome energy is lost in movement",
    "label": "",
    "id": "4BI1_14_07",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "The carbon cycle",
    "id": "4BI1_14_08",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_14_08",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Process|Description\nPhotosynthesis|Plants take in carbon dioxide and convert it into glucose using light energy.\nFossilisation|Dead organisms are buried and, over millions of years, form fossil fuels containing carbon.\nRespiration|Living organisms release carbon dioxide into the atmosphere by breaking down glucose.\nDecomposition|Microorganisms break down dead organisms and release carbon dioxide back into the air.\nCombustion|Burning fossil fuels or biomass releases carbon dioxide into the atmosphere.",
    "id": "4BI1_14_08",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "label": "The nitrogen cycle",
    "id": "4BI1_14_09",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Plants absorb nitrates to make amino acids and proteins\r\nAnimals eat the proteins.\r\nProteins are broken down to remove the nitrogen by the process of deamination.\r\nSoil nitrates are derived naturally from excretory products of animals and the dead remains of living organisms.\r\nMicroorganisms are an important part in the nitrogen cycle. They are involved in decomposition, nitrification, denitrification and nitrogen fixation.\r",
    "label": "",
    "id": "4BI1_14_09",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_14_09",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Process|Chemical change|Microorganisms\nDecomposition|organic compounds → ammonia|breakdown of organic compounds by decomposers\nNitrification|NH4+ → NO2− → NO3−|oxidation of nitrogen compounds by nitrifying bacteria\nDenitrification|nitrogen compounds → N2 (gas)|breakdown of nitrates into nitrogen gas by denitrifying bacteria\nNitrogen fixation|N2 (gas) → nitrogen compounds|conversion of nitrogen gas into ammonia by nitrogen fixing bacteria in root nodules of legumes; formation of oxides of nitrogen by lightning",
    "label": "",
    "id": "4BI1_14_09",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_15_01",
    "label": "Improving crop yield in glasshouses",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "By heating glasshouses to the optimum temperature for photosynthesis, a farmer can maximise the yield. Heating above the optimum temperature is a waste of money as there is no further increase in yield.",
    "id": "4BI1_15_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Factor controlled|Method|Reason\nCarbon dioxide|burining fuels produces carbon dioxide|carbon dioxide may be limiting factor of photosynthesis\nHeat|burning fuels also produces heat|temperature may be limiting factor  of photosynthesis\nLight|glasshouse walls are transparent to allow natural light for photosynthesis|light intensity may be limiting factor of photosynthesis\nSoil ions|adding fertilisers to the soil|extra mineral ions can be used to make proteins and other compounds for growth\nSoil structure|ploughing field, adding manure|good aeration and drainage allow better uptake of mineral ions and water\nSoil pH|adding lime to acidic soils|unsuitable pH reduces uptake of mineral ions",
    "label": "",
    "id": "4BI1_15_01",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Pest control",
    "id": "4BI1_15_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Pests decrease the yield by damaging leaves and reducing photosynthesis.\nPests may affect the appearance or quality of crop, making it unsuitable for sale.",
    "label": "",
    "id": "4BI1_15_02",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Chemical pesticides\nBiological control, using natural predators, parasites or pathogens",
    "label": "Methods",
    "id": "4BI1_15_02",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Fast-acting: quickly kill pests and reduce crop damage\nHigh effectiveness: can eliminate large numbers of pests\nEasy to apply: spraying is simple and covers large areas",
    "label": "Advantages of chemical pesticides",
    "id": "4BI1_15_02",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "Slow to decompose and they are persistent in environment\nBuild up in tissues of organisms leading to bioaccumulation\nBuild up and concentrated along food chains leading to biomagnification\nKills beneficial insects (e.g. pollinators)\nPests may evolve resistance over time",
    "id": "4BI1_15_02",
    "label": "Disadvantages of chemical pesticides",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "No environmental pollution\nSpecific to target pest and less harm to other organisms\nLong-term control\nNo risk of pesticide resistance",
    "label": "Advantages of biological control",
    "id": "4BI1_15_02",
    "type": "list",
    "order": 6,
    "status": "show"
  },
  {
    "description": "Slow effect: takes time for predator populations to increase\nLess predictable: may not completely control pests\nIntroduced species may become invasive",
    "id": "4BI1_15_02",
    "label": "Disadvantages of biological control",
    "type": "list",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "id": "4BI1_15_03",
    "label": "Fish farming",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Fish farming (aquaculture) is used to increase high quality protein.",
    "id": "4BI1_15_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Condition|Method\nAeration|Water is oxygenated using pumps so fish can respire efficiently.\nTemperature|Maintained at an optimum level to ensure enzymes work properly and fish grow faster.\nWaste removal|Filters and water flow remove excretory waste to prevent eutrophication.\nProtein-rich food|Fish are fed high-protein pellets to support rapid growth and biomass increase.\nDisease control|Antibiotics are used to reduce infection in crowded conditions.\nCaging systems|Fish are kept in nets or cages according to their size or species to prevent predation.\nSelective breeding|Used to produce fish that grow faster, resist disease, and increase yield.",
    "label": "",
    "id": "4BI1_15_03",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Air pollution",
    "id": "4BI1_15_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Pollution is the contamnation of environment by harmful substances that are produced by activities of human.",
    "label": "",
    "id": "4BI1_15_04",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Greenhouse gases absorb infrared radiation from the Sun and re-remit heat, trapping it in the atmosphere.\nThis causes a rise in Earth's temperature and causes many effects.\nGreenhouse gases include carbon dioxide, methane, nitrous oxide, chlorofluorocarbons and water vapour.",
    "id": "4BI1_15_04",
    "label": "Greenhouse gases",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Melting of polar ice caps leading to rising sea levels\nChanges in major ocean currents\nChanges in global rainfall patterns\nLong-term changes in climate\nExtinction of species due to habitat loss\nIncrease in pests and spread of diseases",
    "id": "4BI1_15_04",
    "label": "Effects of global warming",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "combustion of fossil fuels (coal, oil, natural gas)\ndeforestation and burning of wood\ndecomposition of dead organisms by bacteria and fungi\nrespiration of living organisms",
    "label": "Sources of carbon dioxide",
    "id": "4BI1_15_04",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "decomposition of waste buried in ground by microorganisms\nfermentation by microorganisms in the rumen (stomach) of cattle and other ruminants\nfermentation by bacteria in rice fields",
    "label": "Sources of methane",
    "id": "4BI1_15_04",
    "type": "list",
    "order": 6,
    "status": "show"
  },
  {
    "description": "When substances containing carbon are burned in limited supply of oxygen, carbon monoxide is formed.\nIt is colourless, odourless and tasteless and can be fatal.\nHaemoglobin binds more strongly with carbon monoxide than with oxygen.\nIf a person inhales carbon monoxide for a period of time, the person may lose consciousness and eventually die due to a lack of oxygen.",
    "label": "Carbon monoxide",
    "id": "4BI1_15_04",
    "type": "list",
    "order": 7,
    "status": "show"
  },
  {
    "description": "Burning fossil fuels, volcanic eruptions, and lightning release sulfur dioxide.\nSulfur dioxide and nitrogen oxides dissolve in rainwater, forming acid rain.\nAcid rain leads to the death of conifer trees, and causes soil and lakes to become acidic.",
    "label": "Sulfur dioxide",
    "id": "4BI1_15_04",
    "type": "list",
    "order": 8,
    "status": "show"
  },
  {
    "description": "",
    "label": "Deforestation",
    "id": "4BI1_15_05",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Deforestation is the large-scale cutting down and removal of forests, often without replanting.",
    "label": "",
    "id": "4BI1_15_05",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Expansion of agriculture\nLogging for timber\nUrbanisation and road building\nMining and extraction of resources",
    "id": "4BI1_15_05",
    "label": "Causes of deforestation",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Global warming and climate change\nIncreased leaching of nutrients from the soil\nReduced evaporation and transpiration due to loss of trees\nDestruction of habitats, leading to reduced biodiversity\nReduced soil fertility and overall soil quality\nIncreased soil erosion because tree roots no longer hold the soil in place\nIncreased risk of flooding due to reduced water absorption by the soil\nLoss of potential medicines from undiscovered plant species",
    "id": "4BI1_15_05",
    "label": "Effects of deforestation",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "",
    "id": "4BI1_15_06",
    "label": "Water pollution",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "",
    "id": "4BI1_15_06",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Main sources of pollutants are chemical fertilisers and untreated sewage.\nNitrates are highly soluble in water and are washed out of the soil by rain (leaching), leading to excess nitrates in water and causing eutrophication.\nExcess nutrients cause rapid growth of algae (algal bloom). The algae form a thick layer on the water surface, blocking sunlight.\nWhen the algae die, they are decomposed by bacteria, which use up the dissolved oxygen in the water.\nLow oxygen levels cause aquatic plants and animals to die. At extremely low oxygen levels, only anaerobic bacteria can survive.",
    "id": "4BI1_15_06",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "",
    "label": "DNA",
    "id": "4BI1_16_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "The nucleus contains chromosomes.\nEach chromosome contains one DNA strand folded and coiled around histones.\nThe genome is the entire DNA of an organism.\nA gene is a section of a DNA molecule that codes for a specific protein.\nDNA is a double helix, made up of nucleotides.",
    "label": "",
    "id": "4BI1_16_01",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "A nucleotide contains a sugar, a phosphate and a nitrogenous base.\nThe sugar group is joined with a phosphate group on one end and a nitrogenous base on the other.\nThe backbone of DNA is made up of deoxyribose sugars and phosphate groups.\nThere are 4 types of bases: adenine (A), thymine (T), cytosine (C), guanine (G).\nThe bases are joined together by hydrogen bonds according to the complementary base pairing rule (A always pairs with T and C always pairs with G).",
    "label": "Nucleotide",
    "id": "4BI1_16_01",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "DNA replication is the process of creating an identical copy of a DNA molecule. DNA replication occurs before cell division (mitosis or meiosis).",
    "label": "DNA replication",
    "id": "4BI1_16_01",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Protein synthesis",
    "id": "4BI1_16_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Protein synthesis is the process by which cells make proteins using genetic codes from DNA through transcription and translation.",
    "id": "4BI1_16_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Each amino acid is coded by a sequence of three nucleotides called a triplet code.\r\nThe genetic code refers to triplet sequences found on the DNA template strand.\r\nGenetic code is universal; the same triplet codes specify the same amino acids in all organisms.",
    "id": "4BI1_16_02",
    "label": "Genetic code",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Transcription is the process of copying genetic information from DNA onto mRNA inside the nucleus.\nA part of the DNA double helix unwinds and unzips.\nRNA nucleotides are added to the template strand of the DNA according to the complementary base-pairing rules.\nThe triplet code of the DNA is converted to a triplet code (codon) in the mRNA.\nThe mRNA molecule leaves the nucleus to the cytoplasm through the nuclear pore.\nThe DNA helix then zip up again.",
    "id": "4BI1_16_02",
    "label": "Transcription",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "Translation is the process of decoding the mRNA sequence to form a specific protein at the ribosomes.\r\nThe mRNA molecule attaches to a ribosome\r\nThe anticodon on the tRNA pairs with the codon on the mRNA according to the complementary base-pairing rules.\r\nEach tRNA carries a specific amino acid, and peptide bonds form between adjacent amino acids.\r\nThis process continues until a complete sequence of amino acids, a protein, is produced.\r",
    "id": "4BI1_16_02",
    "label": "Translation",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "id": "4BI1_16_03",
    "label": "Mutation",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "A mutation is a random change in the nucleotide sequence of DNA.",
    "id": "4BI1_16_03",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Exposure to ionizing radiation (e.g. UV light, X-rays, gamma rays)\r\nContact with carcinogens (e.g. tobacco smoke, pesticides)\r\nErrors during DNA replication and cell division\r",
    "label": "Causes of mutation",
    "id": "4BI1_16_03",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Duplication: a nucleotide is inserted twice instead of once, altering the entire base sequence after the duplication point\r\nDeletion: a nucleotide is missed out, altering the entire base sequence after the deletion point\r\nSubstitution: a different nucleotide is used, affecting only one amino acid\r\nInversion: a sequence of bases in a triplet is reversed, affecting only one amino acid\r",
    "label": "Types of mutation",
    "id": "4BI1_16_03",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "When the nucleotide sequence of a gene changes, a wrong mRNA is formed during transcription.\r\nThe wrong tRNA binds to the mRNA during translation.\r\nThis leads to a wrong sequence of amino acids and the production of a different protein.",
    "id": "4BI1_16_03",
    "label": "Consequences of mutation",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "id": "4BI1_17_01",
    "label": "Mitosis",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Mitosis produces two cells that are genetically identical to the parent cell.\r\nBoth daughter cells have the diploid number of chromosomes.\r\nMitosis occurs in all body cells except the sex cells.\r\nMitosis is important for growth, development and repair of damaged tissues.",
    "id": "4BI1_17_01",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "Phase|Feature\nProphase|Nuclear membrane disappears and chromatids become visible.\nMetaphase|Chromosomes line up at the equator (middle) of the cell, and spindle fibres attach to the centromere of the chromosome.\nAnaphase|As spindle fibres shorten, chromatids separate at the centromere and are pulled to the opposite poles of the cell.\nTelophase|Two new nuclei form. Then, the cytoplasm divides to produce two daughter cells (cytokinesis).",
    "label": "Stages of mitosis",
    "id": "4BI1_17_01",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Meiosis",
    "id": "4BI1_17_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Meiosis produces four cells that are genetically different from each other and from the original parent cell.\nMeiosis occurs in reproductive organs to form gametes (sperm in males and ova in females).\nThe gametes produced have the haploid number of chromosomes; therefore, meiosis is called reduction division.",
    "label": "",
    "id": "4BI1_17_02",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "During the first division, one chromosome from each homologous pair goes into each daughter cell.\nDuring the second division, the chromosome separates into two parts; one part goes into each daughter cells.",
    "label": "Main events during meiosis",
    "id": "4BI1_17_02",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "During fertilisation, a sperm cell and an egg cell fuse to form a zygote, which restore the diploid number of chromosomes.",
    "label": "",
    "id": "4BI1_17_02",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_17_03",
    "label": "Comparison of meiosis and mitosis",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Feature|Mitosis|Meiosis\nDNA replication before cell division|Yes|Yes\nNumber of cell divisions|One|Two\nNumber of daughter cells produces|Two|Four\nPloidy|Diploid|Haploid\nGenetic variation in the daughter cells|No|Yes",
    "id": "4BI1_17_03",
    "label": "",
    "type": "table",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_17_04",
    "label": "Variation in organisms",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Caused by differences in genes (alleles) inherited from parents\nOccurs during meiosis and fertilisation\nCan be passed on to offspring\nUsually produces discontinuous variation\ne.g. blood group, eye colour, gender",
    "id": "4BI1_17_04",
    "label": "Genetic variation",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "Caused by external factors in the surroundings\nNot inherited, and cannot be passed to offspring\ne.g. language accent",
    "id": "4BI1_17_04",
    "label": "Environmental variation",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "Most characteristics are influenced by both genes and the environment\nTypically shows continuous variation\ne.g. height, body mass",
    "label": "Combination",
    "id": "4BI1_17_04",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Inheritance",
    "id": "4BI1_18_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Term|definition\nAllele|an alternative form of a gene found at the same locus on homologous chromosomes\nDominant allele|an allele that is expressed in the phenotype even when only one copy is present (heterozygous condition)\nRecessive allele|an allele that is only expressed in the phenotype when two copies are present (homozygous condition)\nCodominance|both alleles are expressed equally in the phenotype of a heterozygous organism\nPhenotype|the observable characteristics of an organism\nGenotype|the combination of alleles an organism has for a particular characteristic\nHomozygous|having two identical alleles for a particular gene (e.g. AA or aa)\nHeterozygous|having two different alleles for a particular gene (e.g. Aa)",
    "label": "",
    "id": "4BI1_18_01",
    "type": "table",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Monohybrid inheritance",
    "id": "4BI1_18_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Monohybrid inheritance is the inheritance of a single characteristic controlled by one gene with two alleles.",
    "label": "",
    "id": "4BI1_18_02",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Let A = dominant allele, and a = recessive allele",
    "label": "Patterns of monohybrid inheritance",
    "id": "4BI1_18_02",
    "type": "text",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Genotype of parents|Genotype of offsprings|Phenotype of offsprings\nAA × AA|AA|all dominant\naa × aa|aa|all recessive\nAA × aa|Aa|all dominant\nAA × Aa|1AA : 1Aa|all dominant\nAa × aa|1Aa : 1aa|1 dominant : 1 recessive\nAa × Aa|1AA : 2Aa : 1aa|3 dominant : 1 recessive",
    "label": "",
    "id": "4BI1_18_02",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Pedigrees",
    "id": "4BI1_18_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A pedigree diagram shows how a genetic trait is inherited through generations.",
    "label": "",
    "id": "4BI1_18_03",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_18_03",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "Step|Description\nIdentify possible genotypes|recessive condition (aa); dominant condition (AA or Aa)\nLook for carriers (recessive traits)|unaffected individuals with affected parents or children must be heterozygous carriers (Aa)",
    "label": "Interpreting family pedigrees",
    "id": "4BI1_18_03",
    "type": "table",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_18_04",
    "label": "Sex inheritance",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "The sex of a person is determined by X and Y chromosomes, called the sex chromosomes.",
    "id": "4BI1_18_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "XX in female body cells and females produce gametes (eggs) that all carry an X chromosome.\nXY in male body cells and males produce two types of gametes (sperm): 50% carry X chromosome and 50% carry Y chromosome",
    "id": "4BI1_18_04",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "X (egg) + X (sperm) → XX = female\nX (egg) + Y (sperm) → XY = male",
    "id": "4BI1_18_04",
    "label": "Sex determination",
    "type": "list",
    "status": "show",
    "order": 4
  },
  {
    "description": "The ratio of male to female offspring is 1 : 1.",
    "label": "",
    "id": "4BI1_18_04",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_18_05",
    "label": "Polygenic inheritance",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Polygenic inheritance is the inheritance of a characteristic controlled by many genes. Each gene contributes a small effect to the overall phenotype. It produces continuous variation rather than distinct categories.",
    "id": "4BI1_18_05",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_19_01",
    "label": "Theory of evolution by natural selection",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "There is variation within a species due to mutations and genetic differences.\nSome variations give advantages for survival in certain environmental conditions. These advantageous characteristics are called adaptive features.\nWhen the environment changes, it creates a selection pressure.\nOrganisms without adaptive features are less likely to survive, while organisms with adaptive features are more likely to survive.\nSurviving organisms reproduce and pass their advantageous alleles to their offspring.\nOver many generations, the advantageous alleles become more common in the population.\nThe number of organisms with adaptive features increases over time.\nAs a result, the population becomes better adapted to the new environment.\nThis gradual change in inherited characteristics over time is called evolution by natural selection.",
    "label": "",
    "id": "4BI1_19_01",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_19_01",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Antibiotic-resistant in bacteria",
    "id": "4BI1_19_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "There is variation within a population of bacteria due to mutations. Some bacteria may have a mutation that gives resistance to an antibiotic.\nWhen an antibiotic is used, it acts as a selection pressure.\nNon-resistant bacteria are killed by the antibiotic, while antibiotic-resistant bacteria survive.\nThe antibiotic-resistant bacteria reproduce asexually by binary fission, passing the resistance gene to their offspring.\nOver many generations, the number of antibiotic-resistant bacteria increases.\nEventually, most of the bacterial population becomes resistant to the antibiotic by natural selection.\nOveruse and misuse of antibiotics increase the development of antibiotic-resistant bacteria.",
    "label": "",
    "id": "4BI1_19_02",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "Traditional selective breeding",
    "id": "4BI1_20_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A gardener selects two plants with desirable characteristics and cross-breeds them. The offspring produced show some of the desired characteristics. Individuals with the best characteristics are selected and cross-bred. This process is repeated over many generations to produce plants with enhanced desirable traits.",
    "label": "Traditional selective breeding in plants",
    "id": "4BI1_20_01",
    "type": "text",
    "order": 2,
    "status": "show"
  },
  {
    "description": "give higher yields\nresistance to certain diseases\nresistance to pests\nsurvive in hostile environment\nto have a better nutrients",
    "id": "4BI1_20_01",
    "label": "Benefits of traditional selective breeding in plants",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "To increase the milk yield, a farmer selects a cow with a high milk yield and a bull whose mother or siblings have high milk yields, and breeds them. The offspring produced show some of the desired characteristics. Individuals with the highest milk yield are selected and bred. This process is repeated over many generations to produce cattle with increased milk yield.",
    "label": "Traditional selective breeding in animals",
    "id": "4BI1_20_01",
    "type": "text",
    "order": 4,
    "status": "show"
  },
  {
    "description": "produce more meat, eggs, milk\nproduce more fur or better quality fur\nproduce more offsprings\nincrease resistance to pests and diseases",
    "label": "Benefits of traditional selective breeding in animals",
    "id": "4BI1_20_01",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "Traditional selective breeding in plants | Traditional selective breeding in animals\ncan produce a large number of offspring|produces fewer offspring at a time\nplants may be self-pollinated or cross-pollinated|requires two parents with desirable characteristics\nenvironmental conditions are easier to control|environmental conditions are more difficult to control\nshorter time required to reach maturity and pollinate|longer time required to reach maturity and reproduce",
    "id": "4BI1_20_01",
    "label": "Comparison of traditional selective breeding in plants and animals",
    "type": "table",
    "status": "show",
    "order": 6
  },
  {
    "description": "",
    "id": "4BI1_20_02",
    "label": "Micropropagation",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Micropropagation is the modern artificial selective breeding of plants by cloning (asexual reproduction).",
    "id": "4BI1_20_02",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "Steps|Explanation\nTaking explants|Small pieces of shoot tips or root tips are taken from a plant to be cloned.\nSterilisation|The explants are cut into small pieces (about 0.5–1 mm) and treated with disinfectant to kill microorganisms and prevent contamination.\nGrowing in a culture medium|The explants are placed in a sterile nutrient medium containing sugars, minerals, and plant hormones to grow shoots. More explants can then be produced from young shoots.\nRooting|The developing shoots are transferred to a medium containing auxins to encourage root formation.\nAcclimatisation|The young plants are gradually adapted to normal environmental conditions by transferring them to a greenhouse before planting in compost.",
    "label": "",
    "id": "4BI1_20_02",
    "type": "table",
    "order": 3,
    "status": "show"
  },
  {
    "description": "a large number of genetically identical plants can be grown quickly\nsome species (that cannot be grown from seeds or cutting) can be grown by micropropagation\nthe plants can be grown during any time of the year\na large number of plants can be stored easily\nafter genetically modifying a few plants, it can be cloned into thousands of plants quickly",
    "label": "Advantages of micropropagation",
    "id": "4BI1_20_02",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "",
    "label": "Cloning animals",
    "id": "4BI1_20_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A nucleus from a body cell of biological mother is taken.\nThe nucleus is removed from an unfertilised egg cell.\nThe donor nucleus is inserted into the enucleated egg cell.\nAn electric shock is used to stimulate the egg cell to start dividing.\nThe cell divides by mitosis to form an embryo.\nThe embryo is placed into the uterus of a surrogate mother.\nThe offspring produced is genetically identical to the biological mother.",
    "label": "",
    "id": "4BI1_20_03",
    "type": "list",
    "order": 2,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_20_03",
    "type": "image",
    "order": 3,
    "status": "show"
  },
  {
    "description": "can produce genetically modified animals that produce useful substances (e.g. alpha-1-antitrypsin in milk)\nproduces animals with desirable characteristics (e.g. high milk yield, fast growth, disease resistance)\nhelps conserve endangered species by increasing their population",
    "label": "Advantages of cloning animals",
    "id": "4BI1_20_03",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "low success rate as many embryos do not develop properly\nethical concerns about animal welfare and whether cloning is acceptable\nmay cause health problems in cloned animals (abnormal development, shorter lifespan)\nreduces genetic variation, making populations more vulnerable to disease\nexpensive and time-consuming process compared to natural breeding",
    "id": "4BI1_20_03",
    "label": "Disadvantages of cloning animals",
    "type": "list",
    "status": "show",
    "order": 5
  },
  {
    "description": "",
    "label": "The role of yeast in the production of food",
    "id": "4BI1_21_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "Yeast is a single-celled fungus, used in food production. When yeast cells are deprived of oxygen, they respire anaerobically, breaking sugar down into ethanol and carbon dioxide.",
    "id": "4BI1_21_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "glucose → ethanol + carbon dioxide",
    "id": "4BI1_21_01",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 3
  },
  {
    "description": "Drinks|Substrate\nWine|glucose (from grape juice)\nBeer|maltose (from malted barley)",
    "id": "4BI1_21_01",
    "label": "Making drinks",
    "type": "table",
    "status": "show",
    "order": 4
  },
  {
    "description": "Wheat flour and water are mixed together, and yeast is added to form bread dough.\nInitially, the yeast respires aerobically, producing carbon dioxide and water.\nWhen the oxygen is used up, the yeast switches to anaerobic respiration, producing ethanol and carbon dioxide.\nThe carbon dioxide gas causes the dough to rise.\nWhen the dough is baked in the oven, the gas bubbles expand further. The high temperature kills the yeast cells, and the ethanol produced during fermentation evaporates.",
    "label": "Making bread",
    "id": "4BI1_21_01",
    "type": "list",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "Investigating the rate of anaerobic respiration in yeast",
    "id": "4BI1_21_02",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_21_02",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 2
  },
  {
    "description": "Mix yeast and sugar solution in a boiling tube and put it in the water bath to get the desired temperature specific temperature using water bath.\nAdd a thin layer of liquid paraffin to stop oxygen entering the mixture and connect the tube to another boiling tube containing limewater.\nCount the number of gas bubble to measure the rate of respiration.\nRepeat the investigation under different temperature change.",
    "id": "4BI1_21_02",
    "label": "Procedure",
    "type": "list",
    "status": "show",
    "order": 3
  },
  {
    "description": "The tube with living yeast produces gas bubbles. Limewater turns cloudy. The control shows no change.",
    "id": "4BI1_21_02",
    "label": "Observation",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "Living yeast respires anaerobically and produces carbon dioxide.",
    "label": "Conclusion",
    "id": "4BI1_21_02",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "",
    "label": "Making yoghurt",
    "id": "4BI1_21_03",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "",
    "label": "",
    "id": "4BI1_21_03",
    "type": "image",
    "order": 2,
    "status": "show"
  },
  {
    "description": "Milk is pasteurised at 85–95°C for 15–30 minutes to kill harmful bacteria and other microorganisms.\nMilk is homogenised to break fat droplets into smaller sizes and give a smooth texture.\nMilk is cooled to 40–45°C and inoculated with lactic acid bacteria, which allows the bacteria to grow and work efficiently.\nThe bacteria ferment lactose (milk sugar) into lactic acid, which lowers the pH and causes milk proteins to thicken and form yoghurt.\nThe thickened yoghurt is stirred and cooled to 5°C to preserve the yoghurt and maintain its texture.\nFlavourings, colourants, and fruit may be added before packaging to improve taste, appearance, and variety for consumers.",
    "label": "",
    "id": "4BI1_21_03",
    "type": "list",
    "order": 3,
    "status": "show"
  },
  {
    "description": "",
    "label": "Industrial fermenter",
    "id": "4BI1_21_04",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "An industrial fermenter is a large vessel used to grow microorganisms (like yeast or bacteria) under controlled conditions to produce useful products such as antibiotics, enzymes, alcohol, and food additives.",
    "id": "4BI1_21_04",
    "label": "",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_21_04",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 3
  },
  {
    "description": "Nutrients are added into the fermenter through an inlet.",
    "id": "4BI1_21_04",
    "label": "Nutrients",
    "type": "text",
    "status": "show",
    "order": 4
  },
  {
    "description": "If the organism respire aerobically, filtered air is supplied through air inlet. The air is filtered to prevent contamination.",
    "id": "4BI1_21_04",
    "label": "Air",
    "type": "text",
    "status": "show",
    "order": 5
  },
  {
    "description": "Respiration produces heat. To prevent overheating, the fermenter is surrounded by a water jacket, through which cold water circulates, keeping the temperature at the best level for growth.",
    "id": "4BI1_21_04",
    "label": "Temperature",
    "type": "text",
    "status": "show",
    "order": 6
  },
  {
    "description": "The pH of the contents can be adjusted by adding acid or alkali to keep it constant.",
    "label": "pH",
    "id": "4BI1_21_04",
    "type": "text",
    "order": 7,
    "status": "show"
  },
  {
    "description": "Stirring paddles mix up contents. This keeps the microorganisms in the suspension in the liquid to get more exposure to nutrients and to keep the temperature even throughout the vessel.",
    "label": "Stirring paddles",
    "id": "4BI1_21_04",
    "type": "text",
    "order": 8,
    "status": "show"
  },
  {
    "description": "Before the fermenter is filled with nutrients and culture, it is cleaned and sterilised using very hot steam under high pressure. This prevents bacteria or fungi from competing with the cultured organism and avoids contamination by unwanted microorganisms.",
    "label": "Sterilisation",
    "id": "4BI1_21_04",
    "type": "text",
    "order": 9,
    "status": "show"
  },
  {
    "description": "",
    "label": "Producing a transgenic bacterium",
    "id": "4BI1_22_01",
    "type": "title",
    "order": 1,
    "status": "show"
  },
  {
    "description": "A transgenic organism is one that contains a gene that has been introduced from another species.",
    "id": "4BI1_22_01",
    "label": "Transgenic",
    "type": "text",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_22_01",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 3
  },
  {
    "description": "Plasmids are isolated from a bacterium and are opened with a specific restriction enzyme.\nThe gene to be transferred is cut from the donor DNA using the same restriction enzyme to produce matching sticky ends with complementary base sequences.\nThe opened-up plasmid and the isolated gene are mixed with a DNA ligase enzyme to create recombinant plasmids.\nBacteria are incubated with the recombinant plasmids. Some bacteria will take up plasmids.\nThe bacterium containing plasmid could be used to produce useful products.\nThe inserted gene is expresse and bacteria are cultered in fermenters to produce large amount of products.",
    "label": "",
    "id": "4BI1_22_01",
    "type": "list",
    "order": 4,
    "status": "show"
  },
  {
    "description": "These enzymes are used to cut DNA molecules at specific points, producing fragement of DNA iwth overlapping ends with complementary bases (sticky ends).",
    "label": "Restriction endonucleases",
    "id": "4BI1_22_01",
    "type": "text",
    "order": 5,
    "status": "show"
  },
  {
    "description": "These enzymes are used to join the sticky ends of DNA molecules.",
    "id": "4BI1_22_01",
    "label": "DNA ligases",
    "type": "text",
    "status": "show",
    "order": 6
  },
  {
    "description": "The plasmid is called a vector because it is the mans of transferring the gene. Another vector that can be used to introduce foreign DNA into bacterial cells is the bacteriophage, a virus that attacks a bacterium.",
    "id": "4BI1_22_01",
    "label": "Vector",
    "type": "text",
    "status": "show",
    "order": 7
  },
  {
    "description": "",
    "id": "4BI1_22_01",
    "label": "",
    "type": "image",
    "status": "show",
    "order": 8
  },
  {
    "description": "Human insulin\nHuman vaccines\nHuman growth hormones\nEnzymes for washing powders\nEnzymes in the food industry\nHuman growth hormone",
    "label": "Use of genetically-modified bacteria",
    "id": "4BI1_22_01",
    "type": "list",
    "order": 9,
    "status": "show"
  },
  {
    "description": "",
    "id": "4BI1_22_02",
    "label": "Using genetically-modified plants",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "increased resistance to a range of pests and pathogens\nincreased heat and drought tolerance\nincreased salts tolerance\na better balance of proteins, carbohydrates, lipids, vitamins and minerals",
    "id": "4BI1_22_02",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  },
  {
    "description": "",
    "id": "4BI1_22_03",
    "label": "Using cloned transgenic animals",
    "type": "title",
    "status": "show",
    "order": 1
  },
  {
    "description": "Cloned transgenic animals can be used to produce useful human proteins (e.g. alpha-1-antitrypsin, AAT).\nPeople with AAT deficiency do not produce enough AAT, so trypsin damages tissues, especially in the lungs and liver.\nTransgenic sheep have been genetically modified to produce AAT in their milk.\nThe AAT can be collected and used to help treat people with AAT deficiency.\nCloning these sheep would increase the amount of AAT that can be produced.",
    "id": "4BI1_22_03",
    "label": "",
    "type": "list",
    "status": "show",
    "order": 2
  }
]