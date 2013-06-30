App.Graph.nodes = [
	{"name":"arad", 
		"edges":["arad-timisoara", "arad-oradea", "arad-deva"], 
		"display":"Arad", "xCenter":40, "yCenter":270, 
		"xLabel":56, "yLabel":265},
	{"name":"oradea", 
		"edges":["arad-oradea", "oradea-satumare", "oradea-zalau", "oradea-clujnapoca"],
		"display":"Oradea", "xCenter":95, "yCenter":135, 
		"xLabel":38, "yLabel":130},
	{"name": "satumare",
		"edges":["oradea-satumare", "satumare-baiamare"],
		"display":"Satu Mare", "xCenter":165, "yCenter":30, 
		"xLabel":88, "yLabel":29},
	{"name": "baiamare", 
		"edges":["satumare-baiamare", "baiamare-clujnapoca"],
		"display":"Baia Mare", "xCenter":226, "yCenter":53, 
		"xLabel":236, "yLabel":60},
	{"name": "zalau",
		"edges":["oradea-zalau", "zalau-clujnapoca"], 
		"display":"Zal[hexABreve]u", "xCenter":205, "yCenter":125, 
		"xLabel":186, "yLabel":114},
	{"name": "clujnapoca",
		"edges":["oradea-clujnapoca", "baiamare-clujnapoca", "zalau-clujnapoca", "clujnapoca-bistrita", "clujnapoca-targumures", "clujnapoca-medias", "clujnapoca-albaiulia"], 
		"display":"Cluj-Napoca", "xCenter":246, "yCenter":181, 
		"xLabel":160, "yLabel":193},
	{"name": "bistrita", 
		"edges":["clujnapoca-bistrita", "bistrita-viseudesus", "bistrita-targumures"], 
		"display":"Bistrita", "xCenter":349, "yCenter":138, "xLabel":359, "yLabel":148},
	{"name": "targumures", 
		"edges":["clujnapoca-targumures", "bistrita-targumures", "bistrita-odorheiusecuiesc", "bistrita-medias"], 
		"display":"T[hexACircumflex]rgu Mure[hexCedilla]", "xCenter":376, "yCenter":220, 
		"xLabel":382, "yLabel":212},
	{"name": "odorheiusecuiesc",
		"edges":["bistrita-odorheiusecuiesc", "odorheiusecuiesc-miercureaciuc", "odorheiusecuiesc-sacele"],  
		"display":"Odorheiu[BR]Secuiesc", "xCenter":452, "yCenter":253, 
		"xLabel":382, "yLabel":262},
	{"name": "miercureaciuc", 
		"edges":["odorheiusecuiesc-miercureaciuc", "miercureaciuc-piatraneamt", "odorheiusecuiesc-bacau", "odorheiusecuiesc-onesti"], 
		"display":"Miercurea-[BR]Ciuc", "xCenter":518, "yCenter":230, 
		"xLabel":502, "yLabel":251},
	{"name": "piatraneamt",
		"edges":["miercureaciuc-piatraneamt", "piatraneamt-suceava", "piatraneamt-bacau"],  
		"display":"Piatra[BR]Neamt", "xCenter":560, "yCenter":150,
		"xLabel":501, "yLabel":142},
	{"name": "suceava", 
		"edges":["piatraneamt-suceava", "suceava-botosani"], 
		"display":"Suceava", "xCenter":531, "yCenter":57, 
		"xLabel":474, "yLabel":47},
	{"name": "bacau", 
		"edges":["odorheiusecuiesc-bacau", "piatraneamt-bacau", "bacau-iasi", "bacau-vaslui", "bacau-onesti"], 
		"display":"Bac[hexABreve]u", "xCenter":638, "yCenter":192, 
		"xLabel":647, "yLabel":206},
	{"name": "iasi",
		"edges":["bacau-iasi", "iasi-vaslui"],  
		"display":"Iasi", "xCenter":740, "yCenter":94, 
		"xLabel":708, "yLabel":97},
	{"name": "vaslui", 
		"edges":["bacau-vaslui", "iasi-vaslui", "vaslui-barlad"], 
		"display":"Vaslui", "xCenter":757, "yCenter":175, 
		"xLabel":708, "yLabel":169},
	{"name": "barlad", 
		"edges":["vaslui-barlad", "barlad-onesti", "barlad-focsani"], 
		"display":"B[hexACircumflex]rlad", "xCenter":720, "yCenter":242, 
		"xLabel":727, "yLabel":257},
	{"name": "onesti",
		"edges":["odorheiusecuiesc-onesti", "bacau-onesti", "barlad-onesti", "onesti-focsani"], 
		"display":"One[hexCedilla]ti", "xCenter":617, "yCenter":251,
		"xLabel":629, "yLabel":264},
	{"name": "focsani",
		"edges":["barlad-focsani", "onesti-focsani", "focsani-galati", "focsani-buzau"], 
		"display":"Foc[hexCedilla]ani", "xCenter":654, "yCenter":328,
		"xLabel":667, "yLabel":333},
	{"name": "galati",
		"edges":["focsani-galati", "galati-buzau"],  
		"display":"Galati", "xCenter":713, "yCenter":375,
		"xLabel":723, "yLabel":385},
	{"name": "buzau", 
		"edges":["focsani-buzau", "galati-buzau", "buzau-ploiesti"], 
		"display":"Buz[hexABreve]u", "xCenter":610, "yCenter":390,
		"xLabel":617, "yLabel":405},
	{"name": "ploiesti", 
		"edges":["buzau-ploiesti", "ploiesti-bucharest", "ploiesti-targoviste", "ploiesti-sacele"], 
		"display":"Ploie[hexCedilla]ti", "xCenter":513, "yCenter":434,
		"xLabel":523, "yLabel":444},
	{"name": "bucharest", 
		"edges":["ploiesti-bucharest", "bucharest-constanta", "bucharest-calarasi", "bucharest-giurgiu", "bucharest-alexandria", "bucharest-pitesti", "bucharest-targoviste"], 
		"display":"Bucharest", "xCenter":530, "yCenter":488,
		"xLabel":539, "yLabel":479},
	{"name": "constanta",
		"edges":["bucharest-constanta", "constanta-calarasi"], 
		"display":"Constanta", "xCenter":775, "yCenter":490,
		"xLabel":724, "yLabel":479},
	{"name": "pitesti",
		"edges":["bucharest-pitesti", "pitesti-craiova", "pitesti-ramnicuvalcea", "pitesti-targoviste"], 
		"display":"Pite[hexCedilla]ti", "xCenter":393, "yCenter":459,
		"xLabel":385, "yLabel":480},
	{"name": "ramnicuvalcea",
		"edges":["pitesti-ramnicuvalcea", "ramnicuvalcea-drobetatumu", "ramnicuvalcea-targujiu", "ramnicuvalcea-deva", "ramnicuvalcea-medias", "ramnicuvalcea-sacele"], 
		"display":"R[hexACircumflex]mnicu[BR]V[hexACircumflex]lcea", "xCenter":347, "yCenter":418,
		"xLabel":310, "yLabel":445},
	{"name": "drobetatumu",
		"edges":["ramnicuvalcea-drobetatumu", "craiova-drobetatumu", "drobetatumu-targujiu"],
		"display":"Drobeta-Tumu", "xCenter":160, "yCenter":470,
		"xLabel":70, "yLabel":488},
	{"name": "targujiu",
		"edges":["ramnicuvalcea-targujiu", "drobetatumu-targujiu", "targujiu-deva"],
		"display":"T[hexACircumflex]rgu Jiu", "xCenter":231, "yCenter":415,
		"xLabel":158, "yLabel":419},
	{"name": "craiova",
		"edges":["pitesti-craiova", "craiova-drobetatumu"],
		"display":"Craiova", "xCenter":280, "yCenter":510,
		"xLabel":290, "yLabel":520},
	{"name": "targoviste", 
		"edges":["ploiesti-targoviste", "bucharest-targoviste", "pitesti-targoviste"], 
		"display":"T[hexACircumflex]rgovi[hexCedilla]te", "xCenter":443, "yCenter":437,
		"xLabel":425, "yLabel":425},
	{"name":"timisoara",
		"edges":["arad-timisoara", "timisoara-resita", "timisoara-deva"],  
		"display":"Timi[hexCedilla]oara", "xCenter":15, "yCenter":340, 
		"xLabel":35, "yLabel":350},
	{"name": "resita",
		"edges":["timisoara-resita"],  
		"display":"Re[hexCedilla]ita", "xCenter":80, "yCenter":390, 
		"xLabel":90, "yLabel":400},
	{"name": "viseudesus",
		"edges":["bistrita-viseudesus"], 
		"display":"Viseu de Sus", "xCenter":332, "yCenter":51,
		"xLabel":342, "yLabel":61},
	{"name": "deva",
		"edges":["arad-deva", "ramnicuvalcea-deva", "targujiu-deva", "timisoara-deva"], 
		"display":"Deva", "xCenter":155, "yCenter":310,
		"xLabel":165, "yLabel":309},
	{"name": "albaiulia", 
		"edges":["clujnapoca-albaiulia"], 
		"display":"Alba Iulia", "xCenter":234, "yCenter":297,
		"xLabel":244, "yLabel":307},
	{"name": "medias",
		"edges":["clujnapoca-medias", "bistrita-medias", "ramnicuvalcea-medias"], 
		"display":"Medias", "xCenter":325, "yCenter":290,
		"xLabel":335, "yLabel":300},
	{"name": "sacele",
		"edges":["odorheiusecuiesc-sacele", "ploiesti-sacele", "ramnicuvalcea-sacele"],
		"display":"S[hexABreve]cele", "xCenter":472, "yCenter":333,
		"xLabel":482, "yLabel":334},
	{"name": "botosani", 
		"edges":["suceava-botosani"],
		"display":"Boto[hexCedilla]ani", "xCenter":600, "yCenter":25, 
		"xLabel":610, "yLabel":30},
	{"name": "giurgiu",
		"edges":["bucharest-giurgiu"],
		"display":"Giurgiu", "xCenter":500, "yCenter":580, 
		"xLabel":510, "yLabel":585},
	{"name": "alexandria",
		"edges":["bucharest-alexandria"],
		"display":"Alexandria", "xCenter":453, "yCenter":555,
		"xLabel":389, "yLabel":574},
	{"name": "calarasi",
		"edges":["bucharest-calarasi", "constanta-calarasi"],
		"display":"C[hexABreve]l[hexABreve]ra[hexCedilla]i", "xCenter":655, "yCenter":540,
		"xLabel":665, "yLabel":550},
];

App.Graph.edges = [
	{"name":"arad-timisoara", "nodes":["arad", "timisoara"], 
		"distance":40, "xLabel":36, "yLabel":304},
	{"name":"arad-oradea", "nodes":["arad", "oradea"], 
		"distance":110, "xLabel":43, "yLabel":198},
	{"name":"arad-deva", "nodes":["arad", "deva"], 
		"distance":80, "xLabel":104, "yLabel":285},

	{"name":"oradea-satumare", "nodes":["oradea", "satumare"], 
		"distance":80, "xLabel":118, "yLabel":73},
	{"name":"oradea-zalau", "nodes":["oradea", "zalau"], 
		"distance":80, "xLabel":151, "yLabel":123},
	{"name":"oradea-clujnapoca", "nodes":["oradea", "clujnapoca"], 
		"distance":100, "xLabel":154, "yLabel":173},

	{"name":"satumare-baiamare", "nodes":["satumare", "baiamare"], 
		"distance":35, "xLabel":187, "yLabel":57},

	{"name":"baiamare-clujnapoca", "nodes":["baiamare", "clujnapoca"], 
		"distance":110, "xLabel":240, "yLabel":115},

	{"name":"zalau-clujnapoca", "nodes":["zalau", "clujnapoca"], 
		"distance":45, "xLabel":201, "yLabel":153},

	{"name":"clujnapoca-bistrita", "nodes":["clujnapoca", "bistrita"], 
		"distance":55, "xLabel":295, "yLabel":145},
	{"name":"clujnapoca-targumures", "nodes":["clujnapoca", "targumures"], 
		"distance":60, "xLabel":318, "yLabel":192},
	{"name":"clujnapoca-medias", "nodes":["clujnapoca", "medias"], 
		"distance":70, "xLabel":266, "yLabel":247},
	{"name":"clujnapoca-albaiulia", "nodes":["clujnapoca", "albaiulia"], 
		"distance":65, "xLabel":221, "yLabel":238},

	{"name":"bistrita-viseudesus", "nodes":["bistrita", "viseudesus"], 
		"distance":75, "xLabel":352, "yLabel":89},
	{"name":"bistrita-targumures", "nodes":["bistrita", "targumures"], 
		"distance":60, "xLabel":377, "yLabel":178},

	{"name":"bistrita-odorheiusecuiesc", "nodes":["targumures", "odorheiusecuiesc"], 
		"distance":45, "xLabel":421, "yLabel":227},
	{"name":"bistrita-medias", "nodes":["targumures", "medias"], 
		"distance":30, "xLabel":335, "yLabel":242},

	{"name":"odorheiusecuiesc-miercureaciuc", "nodes":["odorheiusecuiesc", "miercureaciuc"], 
		"distance":40, "xLabel":481, "yLabel":231},
	{"name":"odorheiusecuiesc-sacele", "nodes":["odorheiusecuiesc", "sacele"], 
		"distance":55, "xLabel":470, "yLabel":291},

	{"name":"miercureaciuc-piatraneamt", "nodes":["miercureaciuc", "piatraneamt"], 
		"distance":70, "xLabel":520, "yLabel":185},
	{"name":"odorheiusecuiesc-bacau", "nodes":["miercureaciuc", "bacau"], 
		"distance":80, "xLabel":572, "yLabel":196},
	{"name":"odorheiusecuiesc-onesti", "nodes":["miercureaciuc", "onesti"], 
		"distance":65, "xLabel":580, "yLabel":233},

	{"name":"piatraneamt-suceava", "nodes":["piatraneamt", "suceava"], 
		"distance":80, "xLabel":566, "yLabel":99},
	{"name":"piatraneamt-bacau", "nodes":["piatraneamt", "bacau"], 
		"distance":65, "xLabel":604, "yLabel":156},

	{"name":"suceava-botosani", "nodes":["suceava", "botosani"], 
		"distance":35, "xLabel":569, "yLabel":49},

	{"name":"bacau-iasi", "nodes":["bacau", "iasi"], 
		"distance":110, "xLabel":674, "yLabel":127},
	{"name":"bacau-vaslui", "nodes":["bacau", "vaslui"], 
		"distance":80, "xLabel":707, "yLabel":188},
	{"name":"bacau-onesti", "nodes":["bacau", "onesti"], 
		"distance":50, "xLabel":640, "yLabel":224},

	{"name":"iasi-vaslui", "nodes":["iasi", "vaslui"], 
		"distance":60, "xLabel":758, "yLabel":136},

	{"name":"vaslui-barlad", "nodes":["vaslui", "barlad"], 
		"distance":55, "xLabel":747, "yLabel":212},

	{"name":"barlad-onesti", "nodes":["barlad", "onesti"], 
		"distance":55, "xLabel":672, "yLabel":234},
	{"name":"barlad-focsani", "nodes":["barlad", "focsani"], 
		"distance":65, "xLabel":693, "yLabel":291},

	{"name":"onesti-focsani", "nodes":["onesti", "focsani"], 
		"distance":60, "xLabel":621, "yLabel":295},

	{"name":"focsani-galati", "nodes":["focsani", "galati"], 
		"distance":35, "xLabel":701, "yLabel":350},
	{"name":"focsani-buzau", "nodes":["focsani", "buzau"], 
		"distance":45, "xLabel":618, "yLabel":347},

	{"name":"galati-buzau", "nodes":["galati", "buzau"], 
		"distance":50, "xLabel":660, "yLabel":372},

	{"name":"buzau-ploiesti", "nodes":["buzau", "ploiesti"], 
		"distance":60, "xLabel":551, "yLabel":399},

	{"name":"ploiesti-bucharest", "nodes":["ploiesti", "bucharest"], 
		"distance":40, "xLabel":537, "yLabel":458},
	{"name":"ploiesti-targoviste", "nodes":["ploiesti", "targoviste"], 
		"distance":30, "xLabel":466, "yLabel":419},
	{"name":"ploiesti-sacele", "nodes":["ploiesti", "sacele"], 
		"distance":80, "xLabel":502, "yLabel":383},

	{"name":"bucharest-constanta", "nodes":["bucharest", "constanta"], 
		"distance":130, "xLabel":657, "yLabel":476},
	{"name":"bucharest-calarasi", "nodes":["bucharest", "calarasi"], 
		"distance":80, "xLabel":588, "yLabel":528},
	{"name":"bucharest-giurgiu", "nodes":["bucharest", "giurgiu"], 
		"distance":60, "xLabel":524, "yLabel":538},
	{"name":"bucharest-alexandria", "nodes":["bucharest", "alexandria"], 
		"distance":55, "xLabel":468, "yLabel":515},
	{"name":"bucharest-pitesti", "nodes":["bucharest", "pitesti"], 
		"distance":65, "xLabel":449, "yLabel":481},
	{"name":"bucharest-targoviste", "nodes":["bucharest", "targoviste"], 
		"distance":50, "xLabel":489, "yLabel":453},

	{"name":"constanta-calarasi", "nodes":["constanta", "calarasi"], 
		"distance":70, "xLabel":728, "yLabel":517},

	{"name":"pitesti-craiova", "nodes":["pitesti", "craiova"], 
		"distance":75, "xLabel":354, "yLabel":489},
	{"name":"pitesti-ramnicuvalcea", "nodes":["pitesti", "ramnicuvalcea"], 
		"distance":30, "xLabel":360, "yLabel":447},
	{"name":"pitesti-targoviste", "nodes":["pitesti", "targoviste"], 
		"distance":70, "xLabel":429, "yLabel":452},

	{"name":"ramnicuvalcea-drobetatumu", "nodes":["ramnicuvalcea", "drobetatumu"], 
		"distance":120, "xLabel":360, "yLabel":447},
	{"name":"ramnicuvalcea-targujiu", "nodes":["ramnicuvalcea", "targujiu"], 
		"distance":55, "xLabel":360, "yLabel":447},
	{"name":"ramnicuvalcea-deva", "nodes":["ramnicuvalcea", "deva"], 
		"distance":140, "xLabel":360, "yLabel":447},
	{"name":"ramnicuvalcea-medias", "nodes":["ramnicuvalcea", "medias"], 
		"distance":100, "xLabel":360, "yLabel":447},
	{"name":"ramnicuvalcea-sacele", "nodes":["ramnicuvalcea", "sacele"], 
		"distance":90, "xLabel":360, "yLabel":447},

	{"name":"craiova-drobetatumu", "nodes":["craiova", "drobetatumu"], 
		"distance":60, "xLabel":354, "yLabel":489},

	{"name":"drobetatumu-targujiu", "nodes":["drobetatumu", "targujiu"], 
		"distance":65, "xLabel":354, "yLabel":489},

	{"name":"targujiu-deva", "nodes":["targujiu", "deva"], 
		"distance":90, "xLabel":354, "yLabel":488},
		
	{"name":"timisoara-deva", "nodes":["timisoara", "deva"],
		"distance":100, "xLabel":70, "yLabel":318},
	{"name":"timisoara-resita", "nodes":["timisoara", "resita"],
		"distance":60, "xLabel":35, "yLabel":383},
];

	/**
	* Satu Mare
	* Baia Mare
	* Zal[hexABreve]u
	* Oradea
	* Timisora
	* Arad
	* T[hexACircumflex]rgu Mure[hexCedilla]
	* Re[hexCedilla]ita
	* Viseu de Sus
	* Cluj-Napoca
	* Deva
	* Alba Iulia
	* Bistrita
	* Drobeta-Tumu
	* Craiova
	* T[hexACircumflex]rgu Jiu
	* R[hexACircumflex]mnicu V[hexACircumflex]lcea
	* Medias
	* S[hexABreve]cele
	* Odorheiu Secuiesc
	* Miercurea-Ciuc
	* One[hexCedilla]ti
	* Foc[hexCedilla]ani
	* Piatra Neamt
	* Suceava
	* Boto[hexCedilla]ani
	* Bac[hexABreve]u
	* Iasi
	* Vaslui
	* B[hexACircumflex]rlad
	* Galati
	* Buz[hexABreve]u
	* Pite[hexCedilla]ti
	* T[hexACircumflex]rgovi[hexCedilla]te
	* Ploie[hexCedilla]ti
	* Bucharest
	* Alexandria
	* Giurgiu
	* C[hexABreve]l[hexABreve]ra[hexCedilla]i
	* Constanta
	*/