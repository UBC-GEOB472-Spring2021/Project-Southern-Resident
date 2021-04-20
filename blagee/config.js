var config = {
  // Here is where I link my Mapbox map that is going to be used.
    style: 'mapbox://styles/blageez/ckn9hp0qn1h6t17t2hbc1way8',
    accessToken: 'pk.eyJ1IjoiYmxhZ2VleiIsImEiOiJja2xyZWdnbWQwM2tiMnhtZ3F3bnRwMHZ1In0.Vp1ls4rsuKWABYadlgrhZw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'The Journeys of Shamu and Lolita',
    subtitle: '',
    byline: '',
    footer: 'Thank you for reading a little bit about our Southern Residents!',
    chapters: [
        {
            id: 'namu',
            alignment: 'right', // This determines where the textbox appears on the screen; can be left, center, right
            hidden: false, // No textbox appears when hidden = true so chapters can be used solely for movement through map
            title: 'The First',
            image: 'https://static.seattletimes.com/wp-content/uploads/2018/12/12062018_Orca_Capture_Era_1321443-780x1061.jpg',
            description: 'In 1965 an Orca dubbed Namu took the Pacific Northwest by storm. Namu was the first orca to be publicly displayed, and furthermore the first whale that man ever swam with in captivity. As an ambassador for his species, this one whale played a major role in the human perception of orcas as well as the future of his species.',
            location: { // Following parameters determine position and viewing angle of map at chapter
                center: [-122.34179, 47.60542],
                zoom: 16.72,
                pitch: 49.00,
                bearing: 92.00
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [ // An object array that determines the visibility of specified Mapbox layers. Very useful for keeping map visually clean and accurately directing attention.
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'shamu',
            alignment: 'right',
            hidden: false,
            title: 'Shamu',
            image: 'https://steemitimages.com/640x0/https://images.fineartamerica.com/images-medium-large-5/the-original-shamu-orca-sea-world-san-diego-1967-california-views-mr-pat-hathaway-archives.jpg',
            description: "Within a year of Namu's display the park owners set out to get him a mate and captured a juvenile female in Penn Cove. This was the first intentional capture of a killer whale and would mark the beginning of a corporate investment in the business of live orca display.",
            location: {
              center: [-122.66991, 48.23128],
              zoom: 12,
              pitch: 44.00,
              bearing: -43.27
          },
            mapAnimation: 'flyTo',
            rotateAnimation: true, // Causes map to rotate slowly. Really nice for showing off things like circuits or, in this case, a looping trail.
            onChapterEnter: [
              {
                layer:'penncove',
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer:'penncove',
                opacity: 0
              },
              {
                layer:'seatosd',
                opacity: 1
              }
            ]
        },
        {
            id: 'seaworld',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '', // The direct website link was http, not https, so I downloaded the picture and added it directly to the repository.
            description: "The juvenile female did not get along with Namu and was later sold to SeaWorld, where she lived out her days in the highlighted enclosure (orange). There, she would adopt the name that would ring in children’s ears for years to come. Shamu. Crowds began to grow in San Diego and the demand for killer whales was at an all time high.",
            location: {
                center: [-117.22563, 32.76654],
                zoom: 16.15,
                pitch: 60.00,
                bearing: 135.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [
              {
                layer: 'seaworld',
                opacity: 1
              },
              {
                layer: 'sdtank',
                opacity: 1
              },
              {
                layer:'seatosd',
                opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'seaworld',
                opacity: 0
              },
              {
                layer: 'sdtank',
                opacity: 0
              }
            ]
        },
        {
            id: 'superpod',
            alignment: 'right',
            hidden: false,
            title: "",
            image: '',
            description:"The Southern Resident killer whales are split into 3 pods denoted J, K, and L. During a regular season these pods are usually seen keeping to their own groups, however on occasion they will come together for a great multitude of purposes including breeding, play, and what appears to some as consultation. This great gathering is called a superpod. In the summer of 1970 this phenomenon had occurred in none other than Penn Cove, and to the whales’ dismay captors had prepared what would come to be the largest round up of Orcas this world has ever seen. On August 8th, Namu inc. had effectively corralled nearly the entire population of Southern Resident Killer Whales. They had no way of knowing that this was the case, as this capture in particular helped to drive a government mandated census of the species that would lead to all of the current research being done today." ,
              location: {
                center: [-122.66991, 48.23128],
                zoom: 12,
                pitch: 44.00,
                bearing: -43.27
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
              {
                layer:'seatosd',
                opacity: 1
              },
              {
                layer:'penncove',
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer:'penncove',
                opacity: 0
              },
              {
                layer:'seatosd',
                opacity: 0
              }
            ]
        },
        {
            id: 'lolita',
            alignment: 'right',
            hidden: false,
            title: 'Lolita',
            image: 'https://i2-prod.mirror.co.uk/incoming/article22973159.ece/ALTERNATES/s810/0_20130607-USA-INV-D2-316JPG.jpg',
            description: "Today, only one of the 7 whales captured in Penn Cove is still alive. Her name is Lolita (Tokitae). She was sold to the Miami Seaquarium where she has remained for the past 50 years in one of the smallest Killer whale enclosures made since its inception. Her tank is 420 m2 around and only 20 feet deep which is about how long Lolita is herself. Perspective is key in understanding how small this enclosure really is. Sea World San Diego’s current killer whale enclosure is 3640 m2 which is one of the most advanced facilities as they have held killer whales the longest of any marine park globally.",
            location: {
              center: [-80.16507, 25.73270],
              zoom: 17.49,
              pitch: 45.00,
              bearing: 21.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
              {
                layer:'mia-tank',
                opacity: 1
              },
              {
                layer:'seatomia',
                opacity: 1
              },
              {
                layer:'seaquarium',
                opacity: 1
              }
            ],
            onChapterExit: [
              {
                layer:'mia-tank',
                opacity: 0
              },
              {
                layer:'seaquarium',
                opacity: 0
              }
            ]
        },
        {
            id: 'zoomedperspective',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './legend.png',
            description: "Returning to Penn Cove, we can see a more direct comparison of the facilities at SeaWorld and the Miami Seaquarium.",
            location: {
                center: [-122.665, 48.234],
                zoom: 16.50,
                pitch: 35.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
              {
                   layer: 'mia-tank-sea',
                   opacity: 0.7,
               },
               {
                    layer: 'sdtank-penn',
                    opacity: 0.7,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'perspective',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Looking at the entirety of the cove, we can see the size of both of these tanks in comparison to Lolita’s capture sight.',
            location: {
                center: [-122.71077, 48.22681],
                zoom: 12.36,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [            ],
            onChapterExit: [
               {
                               layer: 'mia-tank-sea',
                               opacity: 0,
                           },
                           {
                                layer: 'sdtank-penn',
                                opacity: 0,
                            }
      ]
        },
        {
            id: 'finish',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'https://mynorthwest.com/wp-content/uploads/cms/13/1382/138241-620x370.jpg',
            description: "There are efforts put in place right now to bring Lolita (Tokitae) back to the Salish Sea. https://www.savelolita.org/ Indigenous groups as well as researchers and activists have been in an ongoing legal battle with the Miami Seaquarium to have Lolita retired to a sea pen in the Pacific Northwest.",
            location: {
              center: [-100.09404, 37.94500] ,
              zoom: 3.86,
              pitch: 21.00,
              bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            onChapterEnter: [
              {
                   layer: 'penncove',
                   opacity: 1,
               },
               {
                    layer: 'seatomia',
                    opacity: 1,
                },
                {
                     layer: 'seatosd',
                     opacity: 1,
                 },
                 {
                      layer: 'seaworld',
                      opacity: 1,
                  },
                  {
                       layer: 'seaquarium',
                       opacity: 1,
                   },
            ],
            onChapterExit: []
        },
    ]
}
