const data = [
    {
        id: 1,
        name:"Le Dieze",
        capacity:1500,
        salles:[
            {
                id: 1,
                taille: 1200,
                tag:""
            },
            {
                id:2,
                taille: 300,
                tag:""
            }
        ],
        adress: "188 Av. du Marché Gare",
        location: {
            x:"43.58623",
            y:"3.87873",
        },
        mapLocation:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11560.044981444104!2d3.8784273!3d43.58623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe35d03524c2876c5!2sDIEZE%20EVENT!5e0!3m2!1sfr!2sfr!4v1669202643926!5m2!1sfr!2sfr",
        city: "Montpellier",
        advantages: ["Débit de boisson sur place","Parking", "Matériel sono inclus", "Fumoir", "Equipe Agent de sécurité professionnel"],
        images:[
                { 
                    id:1,
                    image:"https://lh3.googleusercontent.com/p/AF1QipO6aE1qD0U6CFqq7f5nhM-25-NcEE59IPO1Xt-q=s680-w680-h510",
                },
                {
                    id:2,
                    image:"https://lh3.googleusercontent.com/p/AF1QipMglebp2rZnuLw33H_m6VS_3DInddpIBKCr-3e4=s680-w680-h510"},
                {
                    id:3,
                    image: "https://lh3.googleusercontent.com/p/AF1QipMSVT8aBK98maKRmljr4cVbcMn_tGSCPWsnlVSu=s680-w680-h510"
                }
        ],
        desc:"Salle connue pour accueillir des showcases, concert et/ou soirée à thème ou étudiante. Son de bonne qualitée, équipe de sécurité professionnel."
    },
    {
        id: 2,
        name:"Les Halles Tropisme",
        capacity:200,
        adress: "Av. de Carnon",
        nbr_salle:7,
        salles:[
            {
                id: 1,
                nbr_salle:1,
                taille: 412,
                capacity:730,
                tag:"PONTS & GALERIE",
                desc:"Cet espace est très modulable et peut s’adapter à différentes configurations d’événements. Le mode conférence peut accueillir jusqu’à 300 personnes assises en disposition frontale ou bi frontale. Les modes concert, exposition ou DJ set peuvent accueillir jusqu’à 730 personnes debout.",
                image:["https://www.tropisme.coop/i/files/8323e718b6eceeebad25ef5c1dd7413d9bbec4d27493cf05bb0b9adc598f4f530452aaf0d1dbb7a2c7af58b04e2e281a4af6f251043fe07cab352c6e17e39a53/IMG_20190802_100719.png"]
            },
            {
                id:2,
                nrb_salle:1,
                taille: 235,
                capacity:300 ,
                tag:"MENUISERIE",
                desc:"Cet espace brut et entièrement aménageable selon les besoins (avec un plancher de danse et un gril technique) peut accueillir jusqu’à 300 personnes.235m2 pour vos cocktails, réceptions, conférences, concerts, fêtes, expositions.",
                image:["https://www.tropisme.coop/i/files/9a4bf44689172ac33158946cc7cbd6daaae2896690bab47adff44ea8349ec6706bd7bd5e07be68a2c24c4c4707bab05391f093c6739d8188cbbaeaa3b2134938/640x0/Menuiserie-pano.jpg"]

            },
            {
                id:3,
                nrb_salle:1,
                taille: 160,
                capacity:null ,
                tag:"CAFÉ TROPISME + TERRASSE",
                desc:"Le café Tropisme et sa terrasse peuvent accueillir jusqu’à 160 couverts en restauration assise. Espace privatisable de préférence les soirées du dimanche au mercredi, disposition frontale ou bi frontale. Les modes concert, exposition ou DJ set peuvent accueillir jusqu’à 730 personnes debout.160m2 pour votre restauration classique, vos buffets & cocktails, afterworks, concerts & DJ sets",
                image:["https://www.tropisme.coop/i/files/2cda382b7405ba8919aa76ad8d48948fd6a9b6aa924f6f1428e2ce046fab02559d8117544cbfd7d85c82c277ec41151d1ea32e02a8cac4ca6120f42c28b3178a/640x0/IMG_20190802_100719.png"]

            },
            {
                id:4,
                nrb_salle:4,
                taille: null,
                capacity:null ,
                tag:"LES SALLES DE RÉUNION",
                desc:"Les salles de réunion peuvent accueillir jusqu'à 40 personnes assises et 50 debouts. 4 salles sont disponibles, 60m2, 30m2, 20m2 et 15m2. L'ensemble des salles sont équipés d'un vidéoprojecteur / 1 télécommande 1 paper board, multiprises, cable hdmi / eternet. Toutes les salles sont modulables au besoin.",
                image:[
                    {
                        id: 1,
                        name:"Salle A",
                        image:"https://www.tropisme.coop/i/files/8629ac496ebd5fe5b05b7fa5741d16e95e67926237fec797ad8d46573b43d216f2dd0476e456641b59e2fe15d55af4e3063393c7d0e111309cc59d55152e1582/640x0/Salle_A.png"
                    },
                    {
                        id: 2,
                        name:"Salle B",
                        image:"https://www.tropisme.coop/i/files/8629ac496ebd5fe5b05b7fa5741d16e95e67926237fec797ad8d46573b43d216f2dd0476e456641b59e2fe15d55af4e3063393c7d0e111309cc59d55152e1582/640x0/Salle_A.png"
                    }, 
                    {
                        id: 3,
                        name:"Salle C",
                        image:"https://www.tropisme.coop/i/files/8629ac496ebd5fe5b05b7fa5741d16e95e67926237fec797ad8d46573b43d216f2dd0476e456641b59e2fe15d55af4e3063393c7d0e111309cc59d55152e1582/640x0/Salle_A.png"
                    }, 
                    {
                        id: 4,
                        name:"Salle D",
                        image:"https://www.tropisme.coop/i/files/8629ac496ebd5fe5b05b7fa5741d16e95e67926237fec797ad8d46573b43d216f2dd0476e456641b59e2fe15d55af4e3063393c7d0e111309cc59d55152e1582/640x0/Salle_A.png"
                    }, 
                ]

            },
        ],
        location: {
            x:"43.56279",
            y:"4.04095",
        },
        mapLocation:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.2059843011525!2d3.8565430159191685!3d43.602252579123096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af09b585b30b%3A0x13f65e520706c371!2sHalle%20Tropisme!5e0!3m2!1sfr!2sfr!4v1669203517557!5m2!1sfr!2sfr",
        city: "La Grande Motte",
        advantages: ["Débit de boisson sur place","Parking", "Matériel sono inclus", "Fumoir", "Equipe Agent de sécurité professionnel"],
        images:[
            {
                id:1,
                image:"https://lh3.googleusercontent.com/p/AF1QipPAuah3Bztnao_wSgw3-dI6AHdMb5Fkpg3v8Ish=s680-w680-h510"
            } ,
            {
                id:2,
                image:"https://lh3.googleusercontent.com/p/AF1QipPtnLRYOsWgL_y1dvMsa5awaAAruOVTQVdCQQxW=s680-w680-h510"
            }, 
            {
                id:3,
                image:"https://www.tropisme.coop/i/files/8629ac496ebd5fe5b05b7fa5741d16e95e67926237fec797ad8d46573b43d216f2dd0476e456641b59e2fe15d55af4e3063393c7d0e111309cc59d55152e1582/640x0/Salle_A.png"
            }, 
            {
                id:4,
                image:"https://www.tropisme.coop/i/files/9a4bf44689172ac33158946cc7cbd6daaae2896690bab47adff44ea8349ec6706bd7bd5e07be68a2c24c4c4707bab05391f093c6739d8188cbbaeaa3b2134938/640x0/Menuiserie-pano.jpg"
            }, 
            {
                id:5,
                image:"https://www.tropisme.coop/i/files/1a1ab74fb9cbb8af95ffbcec99ce9ef0d9c6300b020c549e7a598f4a36e6edc05ec09c57a28f0de760f0bb2a73674688dd20fabcd0abb75c93751d7c93beecef/640x0/Salle_B.png"
            }, 
            {
                id:6,
                image:"https://www.tropisme.coop/i/files/90d470170a4af1d00e786bf59a012ae0e41921013f3f71dbfec54cb5b83deec29099570a5040f15e3fd16b316d3f7bc4d6d30b02ab7500d24c0ffaad42b79f6c/640x0/Salle_C.png"
            }, 
            {
                id:7,
                image:"https://lh3.googleusercontent.com/p/AF1QipNCMMf4WCODAONRbkUthIlRcBh7PrjaaXkSxEik=s680-w680-h510"
            },
            {
                id:8,
                image:"https://lh3.googleusercontent.com/p/AF1QipMyibRF0oGBz0u6s0jK8KQCP-UPYzL0duFjj1sv=s680-w680-h510"
            },

        ],
        desc:"La Halle Tropisme est un tiers-lieu culturel, un village de 10 000m2, habité par plus de 200 entrepreneur·ses des Industries Culturelles et Créatives et plus de 60 artistes ; Elle accueille également au quotidien des professionnel.le.s, des familles, des curieux.se.s, des étudiant.e.s, des voisin.ne.s..."
    },    
    {
        id: 3,
        name:"La voile bleu",
        capacity:200,
        adress: "Av. de Carnon",
        salles:[
            {
                id: 1,
                taille: 1200,
                tag:""
            },
            {
                id:2,
                taille: 300,
                tag:""
            }
        ],
        location: {
            x:"43.56279",
            y:"4.04095",
        },
        mapLocation:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11560.044981444104!2d3.8784273!3d43.58623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe35d03524c2876c5!2sDIEZE%20EVENT!5e0!3m2!1sfr!2sfr!4v1669202643926!5m2!1sfr!2sfr",
        city: "La Grande Motte",
        advantages: ["Débit de boisson sur place","Parking", "Matériel sono inclus", "Fumoir", "Equipe Agent de sécurité professionnel"],
        images:[
            { 
                id:1,
                image:["https://media-cdn.tripadvisor.com/media/photo-s/1d/1d/8e/0f/plage.jpg"],
            }
        ],
    },


]

export default data;