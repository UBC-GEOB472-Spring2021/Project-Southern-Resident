var config = {
    style: 'mapbox://styles/29523/ckmwiutdq1jcu17obv7hf1t7z',
    accessToken: 'pk.eyJ1IjoiMjk1MjMiLCJhIjoiY2tsbHdzNXU4MDNpajJxcWY0NWw3aDdieCJ9.Ua6JW_pxhGIaepg-oQDusg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Part 1: The Plight of the Southern Residents',
    subtitle: "How has the Southern Resident Killer Whales' Environment Changed Since 1960?",
    byline: 'By: Fred DeNisco, Josh Lesko, Lily Mou, Blagee Zhuo',
    footer: '<a href="https://leskojosh000.github.io/ShipImpactsSRKW/">Part 2: How and Where Boats Impact the Southern Resident Killer Whales</a>',
    chapters: [
        
		{
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: 'Hunting the "Blackfish"',
            image: 'https://www.ctvnews.ca/polopoly_fs/1.4470730.1560816309!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg',
            description: 'When European settlers arrived on the west coast of British Columbia, they mistakenly viewed orcas as competition. Fishermen termed the whales "Blackfish," killing them to protect their fisheries. In 1960, the federal Department of Fishers (DFO) even discussed methods such as "bombing the animals from the air" to get rid of them (A brief history, 2018). The plan never came to fruition, but in 1964, a wild killer whale named Moby Doll was captured as a specimen to display at the Vancouver Aquarium. This event sparked a massive attack on the species to capture them into tanks for exhibiting, and many died in the process. By 1976, capturing orcas was officially banned, and we were left with only 71 Southern Resident whales, plummeting from an estimated 200 before the 20th century (A brief history, 2018).',
            location: {
                center: [-128.64561, 49.26518],
                zoom: 3,
                pitch: 12,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
			//double-checked
            onChapterEnter: [
				{
					layer: 'orca-icon',
					opacity: 1
				}		
            ],
            onChapterExit: [
				{
					layer: 'orca-icon',
					opacity: 0
				}	
            ]
        },
		
        {
            id: 'the Salish Sea',
            alignment: 'left',
            hidden: false,
            title: 'The Southern Resident Killer Whales (SRKW)',
            image: 'https://www.utas.edu.au/tf-assets/media/images/Research_1400x775px2_iK942t2.2e16d0ba.fill-1200x600-c100.jpg',
            description: "Killer whales, also known as orcas (Orcinus orca), are intelligent creatures with complex social structures. Today, they face even more significant threats such as food scarcity, chemical contaminants and other pollutions, and vessel traffic contributing to sound disturbances (NOAA, n.d.). They travel in small populations and differ genetically in appearance, behaviour, social interactions, and feeding habits. There are three populations in the Pacific Northwest: the residents (fish-eating), the transients (mammal-eating), and the offshore orcas. The Southern Resident killer whales (SRKW) live in the Salish Sea's coastal waters between Canada and the United States. Therefore, they are one of the most easily hunted historical populations (Resident and Transient, n.d.).",
            location: {
                center: [-128.64561, 49.26518],
                zoom: 5,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
			//double-checked
            onChapterEnter: [
				{
                    layer: 'map-labels1',
                    opacity: 1
                },
				{
					layer: 'salish-sea-basin-fill',
					opacity: 0.40
				}
			],
            onChapterExit: [
				{
                    layer: 'map-labels1',
                    opacity: 0
                },
				{
					layer: 'salish-sea-basin-fill',
					opacity: 0
				}
			]
        },
		
		{
            id: 'food',
            alignment: 'left',
            hidden: false,
            title: 'Threats - Reduced Prey Availability',
            image: 'https://assets.change.org/photos/7/ll/vz/VGllVzqqymXsTyh-800x450-noPad.jpg?1530193888',
            description: "The SRKW eat solely salmon, particularly Chinook, and they depend on the rivers flowing into the Salish Sea for spawning. The Columbia River Basin is the largest in the Pacific Northwest, cutting through seven American states and two Canadian provinces. In the 19th century, around 15 to 30 million salmon returned to Columbia, with Chinook as the most abundant species. However, fewer than 70,000 wild spring Chinook returns now (Hawley, 2020). Why is this happening, and what does that mean for our killer whales? Today, more than 400 dams congest the Columbia River Basin (Hawley, 2020). These dams decimate the salmon runs and reduce food availability for orcas by blocking both juvenile salmon migration out to the ocean and adult salmon migration back from the sea to their spawning grounds while increasing fallback impacts (Southern Resident Orcas, n.d.).",
            location: {
                center: [-124.44966, 48.02517],
                zoom: 5,
                pitch: 12,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
			//double-checked
            onChapterEnter: [
                {
                    layer: 'columbia-river-basin-fill',
                    opacity: 0.50
                },
				{
                    layer: 'columbia-river-basin-outline',
                    opacity: 1
                },
				{
                    layer: 'map-labels2',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'columbia-river-basin-fill',
                    opacity: 0
                },
				{
                    layer: 'columbia-river-basin-outline',
                    opacity: 0
                },
				{
                    layer: 'map-labels2',
                    opacity: 0
                }
            ]
        },

		{
            id: 'dam',
            alignment: 'left',
            hidden: false,
            title: 'A Dam of a Problem in the Columbia River Basin',
            image: 'https://earthjustice.org/sites/default/files/styles/image_800x600/public/Salmon%20Study_1.jpg?itok=FusHzqVQ',
            description: "During the upstream migration process, dams create a challenging environment to overcome. Often, adult salmon would ascend and fall back downstream over the spillways and turbine intakes. This process, termed fallback, can result in injury or death, spawning delays, and inaccurate fishway count. In addition, the fishes that fall back sometimes record more than once, leading to an overestimation, calculated to exceed by 10% (Boggs, 2004). This inaccuracy can lead to severe implications for management. For example, how many salmon we can harvest and the timing of commercial fishing depends on accurate statistics. There may be much fewer salmon available now than we think.</br></br> <p style='color:red;'>Red Circles:Major Dams in Canada",
            location: {
                center: [-124.44966, 48.02517],
                zoom: 5,
                pitch: 12,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
			//double-checked
            onChapterEnter: [
                {
                    layer: 'columbia-river-basin-fill',
                    opacity: 0.50
                },
				{
                    layer: 'columbia-river-basin-outline',
                    opacity: 1
                },
				{
                    layer: 'map-labels2',
                    opacity: 1
                },
				{
                    layer: 'dams-before-1960',
                    opacity: 1
                },
				{
                    layer: 'dams-after-1960',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'columbia-river-basin-fill',
                    opacity: 0
                },
				{
                    layer: 'columbia-river-basin-outline',
                    opacity: 0
                },
				{
                    layer: 'map-labels2',
                    opacity: 0
                },
				{
                    layer: 'dams-before-1960',
                    opacity: 0
                },
				{
                    layer: 'dams-after-1960',
                    opacity: 0
                }
            ]
        },
		
		{
            id: 'Snake',
            alignment: 'left',
            hidden: false,
            title: 'The Snake River Basin',
            image: 'https://d3oj2y7irryo5z.cloudfront.net/wp-content/uploads/2020/02/Snake-1-1024x703.jpeg',
            description: "Four dams, in particular, have wreaked havoc in one of Columbia's major tributaries, the Snake River basin, which contains more than 4 million acres of forests, rivers, and streams. Once producing 2 to 4 million Chinooks every year, but have now rendered the area inaccessible (Southern Resident Orcas, n.d.). To understand the effects on the SRKW, the lack of food and nourishment has created a heart-wrenching situation for killer whale health and procreation. In 2018, a female orca named Tahlequah gave birth to a calf which immediately passed away. For 17 days, she carried her dead baby for hundreds of miles in a tour of grief (Hawley, 2020).",
            location: {
                center: [-119.50040, 46.55528],
                zoom: 7,
                pitch: 18,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
 				{
                    layer: 'columbia-river-basin-fill',
                    opacity: 0.25
                },
				{
                    layer: 'columbia-river-basin-outline',
                    opacity: 0.10
                },
				{
                    layer: 'snakeriverdams',
                    opacity: 1
                }
            ],
            onChapterExit: [
 				{
                    layer: 'columbia-river-basin-fill',
                    opacity: 0
                },
				{
                    layer: 'columbia-river-basin-outline',
                    opacity: 0
                },
				{
                    layer: 'snakeriverdams',
                    opacity: 0
                }
            ]
        },
		
		{
            id: 'names',
            alignment: 'left',
            hidden: false,
            title: 'The Four Snake Dams',
            image: 'https://bloximages.newyork1.vip.townnews.com/wenatcheeworld.com/content/tncms/assets/v3/editorial/b/1f/b1ffd91e-6a36-11eb-ac82-1704074cf00e/60217ad735fb5.image.jpg?resize=1200%2C782',
            description: "The four lower Snake River dams-Ice Harbor Dam, Lower Monumental Dam, Little Goose Dam, and Lower Granite Dam are the prime contestation places for removal because their usage value has diminished over the years. The development of solar, wind, and natural gas energy has supplemented the need for power, but federal agencies and Bonneville politicians continue to refuse and consider removing the Snake dams (Leslie, 2019).",
            location: {
                center: [-119.50040, 46.55528],
                zoom: 7.5,
                pitch: 18,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
 				{
                    layer: 'columbia-river-basin-fill',
                    opacity: 0.40
                },
				{
                    layer: 'columbia-river-basin-outline',
                    opacity: 0.1
                },
				{
					layer: 'snakenames',
					opacity: 1
				},
				{
					layer: 'snakenames2',
					opacity: 1
				},
				{
					layer: 'snakenames3',
					opacity: 1
				},
				{
					layer: 'snakenames4',
					opacity: 1
				},
				{
                    layer: 'snakeriverdams',
                    opacity: 1
                }
            ],
            onChapterExit: [
			 	{
                    layer: 'columbia-river-basin-fill',
                    opacity: 0
                },
				{
                    layer: 'columbia-river-basin-outline',
                    opacity: 0
                },
				{
					layer: 'snakenames',
					opacity: 0
				},
				{
					layer: 'snakenames2',
					opacity: 0
				},
				{
					layer: 'snakenames3',
					opacity: 0
				},
				{
					layer: 'snakenames4',
					opacity: 0
				},
				{
                    layer: 'snakeriverdams',
                    opacity: 0
                }
            ]
        },
		
		{
            id: 'conclusion',
            alignment: 'full',
            hidden: false,
            title: "Save the starving orcas and decommission unethical dams!",
            image: 'https://crosscut.com/sites/default/files/styles/max_2000x2000/public/images/articles/noaa_image_0.jpg?itok=MxnF2wVa',
            description: "",
            location: {
                center: [-125.64561, 49.26518],
                zoom: 3,
                pitch: 12,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
 	
            ],
            onChapterExit: [
			
            ]
        }
		
    ]
};
