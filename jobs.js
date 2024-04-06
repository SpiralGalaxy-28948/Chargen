var jobs = {
//    "Athlete": {
//        'explain' : 'Individual that has achieved celebrity status for their proficiency in sports and other forms of physical exercise',
//       "qual" : { attr : "end", val: 8},
//        "survival" : { attr : "dex", val: 5},
//        "commission" : { attr : "", val: 0},
//        "advancement" : { attr : "", val: 0},
//        "re-enlist" : 6,
//        "skillperterm" : 2,
//        "skills": {
//            "Personal Development" : {1: "+1 dex",2: "+1 int",3:"+1 edu",4:"+1 soc",5:"Carousing",6:"Melee Combat"},
//            "Service Skills" : {1: "Athletics",2: "Admin",3:"Carousing",4:"Computer",5:"Gambling",6:"Vehicle"},
//            "Specialist" : {1 :"Zero-G", 2: "Athletics", 3 : "Athletics", 4 : "Computer", 5 : "Leadership", 6 : "Gambling"},
//            "Advanced Education" : {1 :"Advocate", 2: "Computer", 3 : "Liaison", 4 : "Linguistics", 5 : "Medicine", 6 : "Sciences"}
//        },
//        "rank" : {0: "",1 : "",2:"",3:"",4:"",5:"",6:""},
//        "rankskills" : {0: "Athletics",1 : "",2:"",3:"Tatics",4:"",5:"",6:""},
//        "cash" : {1 : "2000",2 : "10000",3 : "20000",4 : "20000",5 : "50000",6 : "100000",7 : "1000000"},
//        "benefits" : {1 : "Low Passage",2 : "+1 int",3 : "Weapon",4 : "High Passage",5 : "Explorers' Society",6 : "High Passage",7 : ""},
//    },
//    "Mercenary": {
//      'explain' : 'Professional soldier hired to serve in a foreign military force or perform a specific military action.',
//        "qual" : { attr : "int", val: 4},
//        "survival" : { attr : "end", val: 6},
//        "commission" : { attr : "int", val: 7},
//        "advancement" : { attr : "int", val: 6},
//        "re-enlist" : 5,
//        "skillperterm" : 1,
//        "skills": {
//            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Zero-G",5:"Melee Combat",6:"Gambling"},
//            "Service Skills" : {1: "Comms",2: "Mechanics",3:"Gun Combat",4:"Melee Combat",5:"Gambling",6:"Battle Dress"},
//            "Specialist" : {1 :"Gravitics", 2: "Gun Combat", 3 : "Gunnery", 4 : "Melee Combat", 5 : "Recon", 6 : "Vehicle"},
//            "Advanced Education" : {1 :"Advocate", 2: "Engineering", 3 : "Medicine", 4 : "Navigation", 5 : "Sciences", 6 : "Tactics"}
//        },
//        "rank" : {0: "Private",1 : "Lieutenant",2:"Captain",3:"Major",4:"Lt Colonel",5:"Colonel",6:"Brigadier"},
//        "rankskills" : {0: "Gun Combat",1 : "",2:"",3:"Tactics",4:"",5:"",6:""},
//        "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "20000",5 : "20000",6 : "50000",7 : "1000000"},
//        "benefits" : {1 : "Low Passage",2 : "+1 int",3 : "Weapon",4 : "High Passage",5 : "+1 soc",6 : "High Passage",7 : "1d6 Ship Shares"},
//    },
//    "Aerospace Defense": {
//        'explain' : 'Member of a planetary armed military force operating within a worlds atmosphere and close orbit. Also known as the planetary air force',
//        "qual" : { attr : "end", val: 5},
//        "survival" : { attr : "dex", val: 5},
//        "commission" : { attr : "edu", val: 6},
//        "advancement" : { attr : "edu", val: 7},
//        "re-enlist" : 5,
//        "skillperterm" : 1,
//        "skills": {
//            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Athletics",5:"Melee Combat",6:"Vehicle"},
//            "Service Skills" : {1: "Electronics",2: "Gun Combat",3:"Gunnery",4:"Melee Combat",5:"Survival",6:"Aircraft"},
//            "Specialist" : {1 :"Comms", 2: "Gravitics", 3 : "Gun Combat", 4 : "Gunnery", 5 : "Recon", 6 : "Piloting"},
//            "Advanced Education" : {1 :"Advocate", 2: "Computer", 3 : "Jack-of-All-Trades", 4 : "Medicine", 5 : "Leadership", 6 : "Tactics"}
//        },
//        "rank" : {0: "Airman",1 : "Flight Officer",2:"Flight Lieutenant",3:"Squadron Leader",4:"Wing Commander",5:"Group Captain",6:"Air Commodore"},
//        "rankskills" : {0: "Aircraft",1 : "",2:"",3:"Leadership",4:"",5:"",6:""},
//        "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "10000",5 : "20000",6 : "50000",7 : "50000"},
//        "benefits" : {1 : "Low Passage",2 : "+1 edu",3 : "Weapon",4 : "Mid Passage",5 : "Weapon",6 : "High Passage",7 : "+1 soc"},
//    },
    "Survey Scout": {
        'explain' : 'Member of an interplanetary exploratory service, surveying unfamiliar territory in space.',
        "qual" : { attr : "str", val: 7},
        "survival" : { attr : "end", val: 7},
        "commission" : { attr : "int", val: 4},
        "advancement" : { attr : "end", val: 8},
        "re-enlist" : 3,
        "skillperterm" : 2,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"+1 int",5:"+1 edu",6:"Gun Combat"},
            "Service Skills" : {1: "Vehicle",2: "Zero-G",3:"Mechanics",4:"Mining",5:"Comms",6:"Demolitions"},
            "Specialist" : {1 :"Vehicle", 2: "Mechanics", 3 : "Electronics", 4 : "Investigate", 5 : "Gunnery", 6 : "Medicine"},
            "Advanced Education" : {1 :"Medicine", 2: "Navigation", 3 : "Engineering", 4 : "Computer", 5 : "Piloting", 6 : "Jack-of-All-Trades"}
        },
        "rank" : {0: "Scout",1 : "Senior",2:"Supervisor",3:"Mission Specialist",4:"Senior Mission Specialist",5:"Mission Chief",6:"Operations Chief"},
        "rankskills" : {0: "Survival",1 : "Piloting",2:"",3:"Tactics",4:"",5:"",6:""},
        "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "10000",5 : "20000",6 : "50000",7 : "50000"},
        "benefits" : {1 : "Low Passage",2 : "+2 int",3 : "+1 edu",4 : "weapon",5 : "weapon",6 : "high passage",7 : "envoy club"},
    },


    "Agent": {
        'explain' : 'Individual that secretly collects and reports information on the activities, movements and plans of a political or corporate enemy or competitor. Also known as a spy or intelligence operative.',
        "qual" : { attr : "int", val: 6},
        "survival" : { attr : "dex", val: 5},
        "commission" : { attr : "soc", val: 5},
        "advancement" : { attr : "int", val: 7},
        "re-enlist" : 5,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"Bribery",4:"+1 int",5:"+1 edu",6:"+1 soc"},
            "Service Skills" : {1: "Gun Combat",2: "Zero-G",3:"Vehicle",4:"Streetwise",5:"Gun Combat",6:"Recon"},
            "Specialist" : {1 :"Forgery", 2: "Investigate", 3 : "Computer", 4 : "Carousing", 5 : "Comms", 6 : "Jack-of-All-Trades"},
            "Advanced Education" : {1 :"Medicine", 2: "Security", 3 : "Admin", 4 : "Computer", 5 : "Leadership", 6 : "Tactics"}
        },
        "rank" : {0: "Agent",1 : "Special Agent",2:"Supervisor",3:"Asst Project Lead",4:"Project Lead",5:"Assistant Director",6:"Director"},
        "rankskills" : {0: "Investigate",1 : "",2:"",3:"",4:"Admin",5:"",6:""},
        "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "10000",5 : "20000",6 : "50000",7 : "50000"},
        "benefits" : {1 : "Weapon",2 : "Low Passage",3 : "Weapon",4 : "+1 int",5 : "+1 edu",6 : "+1 soc",7 : "+1 soc"},
    },

    // "Barbarian": {
    //     'explain' : 'Individual from a primitive world (TL4 or less) capable of surviving on their world without support from a technologically advanced civilization.',
    //     "qual" : { attr : "end", val: 5},
    //     "survival" : { attr : "str", val: 6},
    //     "commission" : { attr : "", val: 0},
    //     "advancement" : { attr : "", val: 0},
    //     "re-enlist" : 5,
    //     "skillperterm" : 2,
    //     "skills": {
    //         "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"+1 int",5:"Athletics",6:"Gun Combat"},
    //         "Service Skills" : {1: "Mechanics",2: "Gun Combat",3:"Melee Combat",4:"Recon",5:"Survival",6:"Animals"},
    //         "Specialist" : {1 :"Gun Combat", 2: "Jack-of-All-Trades", 3 : "Melee Combat", 4 : "Recon", 5 : "Animals", 6 : "Tactics"},
    //         "Advanced Education" : {1 :"Advocate", 2: "Linguistics", 3 : "Medicine", 4 : "Leadership", 5 : "Tactics", 6 : "Broker"}
    //     },
    //     "rank" : {0: "",1 : "",2:"",3:"",4:"",5:"",6:""},
    //     "rankskills" : {0: "Melee Combat",1 : "",2:"",3:"",4:"",5:"",6:""},
    //     "cash" : {1 : "0",2 : "1000",3 : "2000",4 : "5000",5 : "5000",6 : "10000",7 : "100000"},
    //     "benefits" : {1 : "Low Passage",2 : "+1 int",3 : "Weapon",4 : "Weapon",5 : "+1 End",6 : "Mid Passage",7 : ""},
    // },

    "Roughneck": {
        'explain' : 'Heavy equipment and mining specialist.',
        "qual" : { attr : "dex", val: 8},
        "survival" : { attr : "int", val: 6},
        "commission" : { attr : "str", val: 8},
        "advancement" : { attr : "end", val: 7},
        "re-enlist" : 7,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Gambling",5:"Zero-G",6:"Brawling"},
            "Service Skills" : {1: "Zero-G",2: "Mining",3:"Loader",4:"Demolitions",5:"Comms",6:"Ground Vehicle"},
            "Specialist" : {1 :"Streetwise", 2: "Electronic", 3 : "Ground Vehicle", 4 : "Mechanical", 5 : "Mining", 6 : "Admin"},
            "Advanced Education" : {1 :"Navigation", 2: "Medicine", 3 : "Electronics", 4 : "Computer", 5 : "Engineering", 6 : "Jack-of-all-Trades"}
        },
        "rank" : {0: "Gofer",1 : "Floorhand",2:"Asst Driller",3:"Driller",4:"Toolpusher",5:"Supervisor",6:"General Mgr"},
        "rankskills" : {0: "Zero-G",1 : "Mining",2:"",3:"",4:"Mechanics",5:"",6:"Admin"},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Middle Passage",2 : "Middle Passage",3 : "Weapon",4 : "High Passage",5 : "+1 edu",6 : "+1 int",7 : "High Passage"},
    },


    "Exec": {
        'explain' : 'Corporate Executive. Tied to a conglomerate and still looking for profit.',
        "qual" : { attr : "soc", val: 10},
        "survival" : { attr : "edu", val: 3},
        "commission" : { attr : "edu", val: 5},
        "advancement" : { attr : "int", val: 10},
        "re-enlist" : 4,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "Streetwise",2: "+1 int",3:"+1 edu",4:"+1 soc",5:"Carousing",6:"Bribery"},
            "Service Skills" : {1: "Gambling",2: "Admin",3:"Carousing",4:"Leadership",5:"Bribery",6:"Forgery"},
            "Specialist" : {1 :"Broker", 2: "Liason", 3 : "Vehicle", 4 : "Broker", 5 : "Computer", 6 : "Leadership"},
            "Advanced Education" : {1 :"Medical", 2: "Computer", 3 : "Admin", 4 : "Liason", 5 : "Leader", 6 : "Jack-of-all-Trades"}
        },
        "rank" : {0: "Manager", 1: "VP",2 : "Senior VP",3:"Exec VP",4:"Senior Exec VP",5:"Director",6:"President"},
        "rankskills" : {0: "",1 : "Broker",2:"",3:"",4:"Advocate",5:"",6:""},
        "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "10000",5 : "20000",6 : "50000",7 : "50000"},
        "benefits" : {1 : "High Passage",2 : "+1 edu",3 : "+1 int",4 : "High Passage",5 : "Star Envoy Club",6 : "High Passage",7 : "+1 soc"},
    },

    "Colonist": {
        'explain' : 'A new life awaits you in the off world colonies.',
        "qual" : { attr : "end", val: 5},
        "survival" : { attr : "end", val: 6},
        "commission" : { attr : "int", val: 7},
        "advancement" : { attr : "edu", val: 6},
        "re-enlist" : 5,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"+1 int",5:"Brawling",6:"Gun Combat"},
            "Service Skills" : {1: "Mechanics",2: "Comms",3:"Agriculture",4:"Electronics",5:"Survival",6:"Vehicle"},
            "Specialist" : {1 :"Loader", 2: "Carousing", 3 : "Jack-of-All-Trades", 4 : "Engineering", 5 : "Agriculture", 6 : "Vehicle"},
            "Advanced Education" : {1 :"Medicine", 2: "Agriculture", 3 : "Jack-of-All-Trades", 4 : "Liaison", 5 : "Admin", 6 : "Leadership"}
        },
        "rank" : {0: "Colonist",1 : "Team Leader",2:"Supervisor",3:"Dept Chief",4:"Asst Ops Manager",5:"Ops Manager",6:"Colony Chief Administrator"},
        "rankskills" : {0: "Survival",1 : "",2:"",3:"Liaison",4:"",5:"",6:"Admin"},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Mid Passage",2 : "+1 int",3 : "Weapon",4 : "Mid Passage",5 : "Mid Passage",6 : "High Passage",7 : "+1 soc"},
    },


    // "Diplomat": {
    //     'explain' : 'Individual that is appointed by a planetary or interstellar government to conduct official negotiations and maintain political, economic and social relations with another polity or polities.',
    //     "qual" : { attr : "soc", val: 6},
    //     "survival" : { attr : "edu", val: 5},
    //     "commission" : { attr : "int", val: 7},
    //     "advancement" : { attr : "soc", val: 7},
    //     "re-enlist" : 5,
    //     "skillperterm" : 1,
    //     "skills": {
    //         "Personal Development" : {1: "+1 dex",2: "+1 end",3:"+1 int",4:"+1 end",5:"Athletics",6:"Carousing"},
    //         "Service Skills" : {1: "Admin",2: "Computer",3:"Carousing",4:"Bribery",5:"Liaison",6:"Vehicle"},
    //         "Specialist" : {1 :"Carousing", 2: "Linguistics", 3 : "Bribery", 4 : "Liaison", 5 : "Steward", 6 : "Vehicle"},
    //         "Advanced Education" : {1 :"Advocate", 2: "Computer", 3 : "Liaison", 4 : "Linguistics", 5 : "Medicine", 6 : "Leadership"}
    //     },
    //     "rank" : {0: "Attaché",1 : "Third Secretary",2:"Second Secretary",3:"First Secretary",4:"Counselor",5:"Minister",6:"Ambassador"},
    //     "rankskills" : {0: "Liaison",1 : "",2:"",3:"Admin",4:"",5:"",6:""},
    //     "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "20000",5 : "20000",6 : "50000",7 : "1000000"},
    //     "benefits" : {1 : "Low Passage",2 : "+1 edu",3 : "Mid Passage",4 : "High Passage",5 : "+1 soc",6 : "High Passage",7 : "Explorers' Society"},
    // },

     "Drifter": {
         'explain' : 'Individual that continually moves from place to place, without any fixed home or job.',
         "qual" : { attr : "dex", val: 5},
         "survival" : { attr : "end", val: 5},
         "commission" : { attr : "", val: 0},
         "advancement" : { attr : "", val: 0},
         "re-enlist" : 5,
         "skillperterm" : 2,
         "skills": {
             "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Brawling",5:"Bribery",6:"Gambling"},
             "Service Skills" : {1: "Streetwise",2: "Mechanics",3:"Gun Combat",4:"Melee Combat",5:"Recon",6:"Vehicle"},
             "Specialist" : {1 :"Electronics", 2: "Melee Combat", 3 : "Bribery", 4 : "Streetwise", 5 : "Gambling", 6 : "Recon"},
             "Advanced Education" : {1 :"Computer", 2: "Engineering", 3 : "Jack-of-All-Trades", 4 : "Medicine", 5 : "Liaison", 6 : "Tactics"}
         },
         "rank" : {0: "",1 : "",2:"",3:"",4:"",5:"",6:""},
         "rankskills" : {0: "",1 : "",2:"",3:"Tactics",4:"",5:"",6:""},
         "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
         "benefits" : {1 : "Low Passage",2 : "+1 int",3 : "Weapon",4 : "Weapon",5 : "Mid Passage",6 : "Mid Passage",7 : ""},
     },


    // "Entertainer": {
    //     'explain' : 'Individual that has achieved celebrity status for their proficiency in publicly entertaining others.',
    //     "qual" : { attr : "soc", val: 8},
    //     "survival" : { attr : "int", val: 4},
    //     "commission" : { attr : "", val: 0},
    //     "advancement" : { attr : "", val: 0},
    //     "re-enlist" : 6,
    //     "skillperterm" : 2,
    //     "skills": {
    //         "Personal Development" : {1: "+1 dex",2: "+1 int",3:"+1 edu",4:"+1 soc",5:"Carousing",6:"Melee Combat"},
    //         "Service Skills" : {1: "Athletics",2: "Admin",3:"Carousing",4:"Bribery",5:"Gambling",6:"Vehicle"},
    //         "Specialist" : {1 :"Computer", 2: "Carousing", 3 : "Bribery", 4 : "Liaison", 5 : "Gambling", 6 : "Recon"},
    //         "Advanced Education" : {1 :"Advocate", 2: "Computer", 3 : "Carousing", 4 : "Linguistics", 5 : "Medicine", 6 : "Sciences"}
    //     },
    //     "rank" : {0: "",1 : "",2:"",3:"",4:"",5:"",6:""},
    //     "rankskills" : {0: "Carousing",1 : "",2:"",3:"",4:"",5:"",6:""},
    //     "cash" : {1 : "2000",2 : "10000",3 : "20000",4 : "20000",5 : "50000",6 : "100000",7 : "1000000"},
    //     "benefits" : {1 : "Low Passage",2 : "+1 edu",3 : "+1 soc",4 : "High Passage",5 : "Explorers' Society",6 : "High Passage",7 : ""},
    // },

    "Ranger": {
        'explain' : 'A wilderness and survival expert specialising in the environments found on habitable worlds. Supports missions where planetary knowledge is required for example exploratory expeditions, search and rescue and leisure safaris',
        "qual" : { attr : "end", val: 9},
        "survival" : { attr : "str", val: 6},
        "commission" : { attr : "int", val: 5},
        "advancement" : { attr : "end", val: 6},
        "re-enlist" : 5,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"+1 int",5:"Gun Combat",6:"Blade Combat"},
            "Service Skills" : {1: "Gun Combat",2: "Agriculture",3:"Survival",4:"Recon",5:"Ground Vehicle",6:"Survival"},
            "Specialist" : {1 :"Mechanics", 2: "Electronics", 3 : "Comms", 4 : "Recon", 5 : "Ground Vehicle", 6 : "Survival"},
            "Advanced Education" : {1 :"Medicine", 2: "Computer", 3 : "Jack-of-All-Trades", 4 : "Leadership", 5 : "Tactics", 6 : "Mechanics"}
        },
        "rank" : {0: "Ranger",1 : "Assistant Team Lead",2:"Team Lead",3:"Deputy Chief",4:"Chief",5:"Area Superintendent",6:"Commander"},
        "rankskills" : {0: "Survival",1 : "",2:"",3:"",4:"",5:"",6:""},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Mid Passage",2 : "+1 int",3 : "Weapon",4 : "Weapon",5 : "+1 dex",6 : "+2 str",7 : "High Passage"},
    },


    "Marine": {
        'explain' : 'The Colonial Marines. An elite rapid reaction force trained for duty across the surveyed worlds.',
        "qual" : { attr : "int", val: 4},
        "survival" : { attr : "end", val: 6},
        "commission" : { attr : "edu", val: 6},
        "advancement" : { attr : "edu", val: 6},
        "re-enlist" : 6,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Gambling",5:"Brawling",6:"Blade Combat"},
            "Service Skills" : {1: "Ground Vehicle",2: "Comms",3:"Gun Combat",4:"Survival",5:"Gun Combat",6:"Zero-G"},
            "Specialist" : {1 :"Vehicle", 2: "Mechanics", 3 : "Electronics", 4 : "Demolitions", 5 : "Recon", 6 : "Heavy Weapons"},
            "Advanced Education" : {1 :"Medicine", 2: "Security", 3 : "Tactics", 4 : "Computer", 5 : "Leader", 6 : "Admin"}
        },
        "rank" : {0: "Private",1 : "Lieutenant",2:"Captain",3:"Major",4:"Lt Colonel",5:"Colonel",6:"Brigadier"},
        "rankskills" : {0: "Gun Combat",1 : "Zero-G",2:"",3:"",4:"",5:"Tactics",6:""},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Mid Passage",2 : "+1 soc",3 : "+1 edu",4 : "Weapon",5 : "Star Envoy Club",6 : "High Passage",7 : "+2 edu"},
    },

    // "Maritime Defense": {
    //     'explain' : 'Member of a planetary armed military force operating within and on the surface of a worlds oceans. Also known as the planetary wet navy.',
    //     "qual" : { attr : "end", val: 5},
    //     "survival" : { attr : "end", val: 5},
    //     "commission" : { attr : "int", val: 6},
    //     "advancement" : { attr : "edu", val: 7},
    //     "re-enlist" : 5,
    //     "skillperterm" : 1,
    //     "skills": {
    //         "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Athletics",5:"Melee Combat",6:"Vehicle"},
    //         "Service Skills" : {1: "Mechanics",2: "Gun Combat",3:"Gunnery",4:"Melee Combat",5:"Survival",6:"Watercraft"},
    //         "Specialist" : {1 :"Comms", 2: "Electronics", 3 : "Gun Combat", 4 : "Demolitions", 5 : "Recon", 6 : "Watercraft"},
    //         "Advanced Education" : {1 :"Advocate", 2: "Computer", 3 : "Jack-of-All-Trades", 4 : "Medicine", 5 : "Leadership", 6 : "Tactics"}
    //     },
    //     "rank" : {0: "Seaman",1 : "Ensign",2:"Lieutenant",3:"Lt Commander",4:"Commander",5:"Captain",6:"Admiral"},
    //     "rankskills" : {0: "Watercraft",1 : "",2:"",3:"Leadership",4:"",5:"",6:""},
    //     "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "10000",5 : "20000",6 : "50000",7 : "50000"},
    //     "benefits" : {1 : "Low Passage",2 : "+1 edu",3 : "Weapon",4 : "Mid Passage",5 : "Weapon",6 : "High Passage",7 : "+1 soc"},
    // },


    // "Merchant": {
    //     'explain' : 'Individual involved in wholesale interstellar trade, particularly between individual worlds or polities.',
    //     "qual" : { attr : "int", val: 4},
    //     "survival" : { attr : "end", val: 5},
    //     "commission" : { attr : "int", val: 6},
    //     "advancement" : { attr : "int", val: 8},
    //     "re-enlist" : 4,
    //     "skillperterm" : 1,
    //     "skills": {
    //         "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Zero-G",5:"Melee Combat",6:"Steward"},
    //         "Service Skills" : {1: "Comms",2: "Engineering",3:"Gun Combat",4:"Melee Combat",5:"Broker",6:"Vehicle"},
    //         "Specialist" : {1 :"Carousing", 2: "Gunnery", 3 : "Jack-of-All-Trades", 4 : "Medicine", 5 : "Navigation", 6 : "Piloting"},
    //         "Advanced Education" : {1 :"Advocate", 2: "Engineering", 3 : "Medicine", 4 : "Navigation", 5 : "Sciences", 6 : "Tactics"}
    //     },
    //     "rank" : {0: "Crewman",1 : "Deck Cadet",2:"Fourth Officer",3:"Third Officer",4:"Second Officer",5:"First Officer",6:"Captain"},
    //     "rankskills" : {0: "Steward",1 : "",2:"",3:"Piloting",4:"",5:"",6:""},
    //     "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "20000",5 : "20000",6 : "50000",7 : "1000000"},
    //     "benefits" : {1 : "Low Passage",2 : "+1 edu",3 : "Weapon",4 : "High Passage",5 : "1d6 Ship Shares",6 : "High Passage",7 : "Explorers' Society"},
    // },


    "Military Spacer": {
        'explain' : 'Patrolling space to defend the off-world colonies.',
        "qual" : { attr : "int", val: 6},
        "survival" : { attr : "int", val: 5},
        "commission" : { attr : "soc", val: 7},
        "advancement" : { attr : "edu", val: 6},
        "re-enlist" : 5,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"+1 int",5:"+1 edu",6:"+1 soc"},
            "Service Skills" : {1: "Zero-G",2: "Computer",3:"Loader",4:"Gunnery",5:"Brawling",6:"Gun Combat"},
            "Specialist" : {1 :"Gunnery", 2: "Mechanics", 3 : "Electronics", 4 : "Engineering", 5 : "Leadership", 6 : "Comms"},
            "Advanced Education" : {1 :"Medicine", 2: "Navigation", 3 : "Engineering", 4 : "Computer", 5 : "Pilot", 6 : "Admin"}
        },
        "rank" : {0: "Private",1 : "PFC",2:"Corporal",3:"Sgt",4:"Staff Sgt",5:"Tech Sgt",6:"Master Sgt"},
        "rankskills" : {0: "Zero-G",1 : "",2:"",3:"",4:"Tactics",5:"",6:""},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Low Passage",2 : "+1 edu",3 : "Weapon",4 : "Mid Passage",5 : "+1 soc",6 : "High Passage",7 : "Explorers' Society"},
    },
    "Commercial Spacer": {
        'explain' : 'The Merchant (Space) Navy',
        "qual" : { attr : "int", val: 4},
        "survival" : { attr : "int", val: 5},
        "commission" : { attr : "int", val: 5},
        "advancement" : { attr : "edu", val: 8},
        "re-enlist" : 4,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"+1 str",5:"Brawling",6:"Zero-G"},
            "Service Skills" : {1: "Comms",2: "Bribery",3:"Gun Combat",4:"Loader",5:"Broker",6:"Vehicle"},
            "Specialist" : {1 :"Zero-G", 2: "Mechanics", 3 : "Loader", 4 : "Electronics", 5 : "Steward", 6 : "Navigation"},
            "Advanced Education" : {1 :"Medicine", 2: "Computer", 3 : "Broker", 4 : "Pilot", 5 : "Navigation", 6 : "Engineering"}
        },
        "rank" : {0: "Crewman",1 : "4th Officer",2:"3rd Officer",3:"2nd Officer",4:"2nd Officer",5:"Captain",6:"Senior Captain"},
        "rankskills" : {0: "Zero-G",1 : "",2:"",3:"Pilot",4:"",5:"Pilot",6:""},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Mid Passage",2 : "+1 edu",3 : "Weapon",4 : "High Passage",5 : "+1 int",6 : "High Passage",7 : "Star Envoy Club"},
    },



    // "Noble": {
    //     'explain' : 'Member of an elite upper class, having high social or political status.',
    //     "qual" : { attr : "soc", val: 8},
    //     "survival" : { attr : "soc", val: 4},
    //     "commission" : { attr : "edu", val: 5},
    //     "advancement" : { attr : "int", val: 8},
    //     "re-enlist" : 6,
    //     "skillperterm" : 1,
    //     "skills": {
    //         "Personal Development" : {1: "+1 dex",2: "+1 int",3:"+1 edu",4:"+1 soc",5:"Carousing",6:"Melee Combat"},
    //         "Service Skills" : {1: "Athletics",2: "Admin",3:"Carousing",4:"Leadership",5:"Gambling",6:"Vehicle"},
    //         "Specialist" : {1 :"Computer", 2: "Carousing", 3 : "Gun Combat", 4 : "Melee Combat", 5 : "Liaison", 6 : "Animals"},
    //         "Advanced Education" : {1 :"Advocate", 2: "Computer", 3 : "Liaison", 4 : "Linguistics", 5 : "Medicine", 6 : "Sciences"}
    //     },
    //     "rank" : {0: "Courtier",1 : "Knight",2:"Baron",3:"Marquis",4:"Count",5:"Duke",6:"Archduke"},
    //     "rankskills" : {0: "Carousing",1 : "",2:"",3:"",4:"Advocate",5:"",6:""},
    //     "cash" : {1 : "2000",2 : "10000",3 : "20000",4 : "20000",5 : "50000",6 : "100000",7 : "1000000"},
    //     "benefits" : {1 : "High Passage",2 : "+1 edu",3 : "+1 int",4 : "High Passage",5 : "Explorers' Society",6 : "High Passage",7 : "1D6 Ship Shares"},
    // },

    "Physician": {
        'explain' : 'Is there a Doctor in the house?',
        "qual" : { attr : "int", val: 9},
        "survival" : { attr : "int", val: 3},
        "commission" : { attr : "edu", val: 6},
        "advancement" : { attr : "edu", val: 8},
        "re-enlist" : 4,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"+1 int",5:"+1 edu",6:"+1 soc"},
            "Service Skills" : {1: "+1 dex",2: "Electronics",3:"Medicine",4:"Streetwise",5:"Medicine",6:"Investigate"},
            "Specialist" : {1 :"Liason", 2: "Investigate", 3 : "Mechanics", 4 : "Electronics", 5 : "Computer", 6 : "Admin"},
            "Advanced Education" : {1 :"Liason", 2: "Medicine", 3 : "Admin", 4 : "Computer", 5 : "+1 int", 6 : "+1 edu"}
        },
        "rank" : {0: "Student",1 : "Intern",2:"Junior Doctor",3:"Doctor",4:"Doctor",5:"Consultant",6:"Senior Consultant"},
        "rankskills" : {0: "Medicine",1 : "Medicine",2:"Medicine",3:"",4:"",5:"",6:""},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Mid Passage",2 : "+1 edu",3 : "+1 edu",4 : "High Passage",5 : "Trauma Kit",6 : "High Passage",7 : "+1 soc"},
    },


    // "Pirate": {
    //     'explain' : 'Individual that attacks and steals from interplanetary and interstellar ships in space.',
    //     "qual" : { attr : "dex", val: 5},
    //     "survival" : { attr : "dex", val: 6},
    //     "commission" : { attr : "str", val: 7},
    //     "advancement" : { attr : "int", val: 6},
    //     "re-enlist" : 5,
    //     "skillperterm" : 1,
    //     "skills": {
    //         "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Melee Combat",5:"Bribery",6:"Gambling"},
    //         "Service Skills" : {1: "Streetwise",2: "Electronics",3:"Gun Combat",4:"Melee Combat",5:"Survival",6:"Aircraft"},
    //         "Specialist" : {1 :"Zero-G", 2: "Comms", 3 : "Engineering", 4 : "Gunnery", 5 : "Navigation", 6 : "Piloting"},
    //         "Advanced Education" : {1 :"Computer", 2: "Gravitics", 3 : "Jack-of-All-Trades", 4 : "Medicine", 5 : "Advocate", 6 : "Tactics"}
    //     },
    //     "rank" : {0: "Crewman",1 : "Corporal",2:"Lieutenant",3:"Lt Commander",4:"Commander",5:"Captain",6:"Commodore"},
    //     "rankskills" : {0: "Gunnery",1 : "",2:"Piloting",3:"",4:"",5:"",6:""},
    //     "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "20000",5 : "20000",6 : "50000",7 : "1000000"},
    //     "benefits" : {1 : "Low Passage",2 : "+1 int",3 : "Weapon",4 : "High Passage",5 : "+1 soc",6 : "High Passage",7 : "1D6 Ship Shares"},
    // },

    "Rogue": {
        'explain' : 'Individual that makes their living through illicit means.',
        "qual" : { attr : "end", val: 6},
        "survival" : { attr : "int", val: 6},
        "commission" : { attr : "str", val: 8},
        "advancement" : { attr : "int", val: 6},
        "re-enlist" : 4,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Brawling",5:"Blade Combat",6:"Carousing"},
            "Service Skills" : {1: "Blade Combat",2: "Gun Combat",3:"Brawling",4:"Vehicle",5:"Recon",6:"Vehicle"},
            "Specialist" : {1 :"Streetwise", 2: "Forgery", 3 : "Bribery", 4 : "Demolitions", 5 : "Security", 6 : "Blade Combat"},
            "Advanced Education" : {1 :"Tactics", 2: "Bribery", 3 : "Forgery", 4 : "Computer", 5 : "Leadership", 6 : "Jack-of-All-Trades"}
        },
        "rank" : {0: "Cholo",1 : "Soldier",2:"Veteran",3:"Capo",4:"Underboss",5:"Consigliere",6:"Boss"},
        "rankskills" : {0: "Streetwise",1 : "Blade Combat",2:"",3:"",4:"",5:"",6:""},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Low Passage",2 : "+1 soc",3 : "Weapon",4 : "Weapon",5 : "High Passage",6 : "+1 end",7 : "Star Envoy Club"},
    },


    "Scientist": {
        'explain' : 'Individual that is engaged in and has expert knowledge of a science, especially a biological or physical science.',
        "qual" : { attr : "edu", val: 6},
        "survival" : { attr : "int", val: 3},
        "commission" : { attr : "edu", val: 5},
        "advancement" : { attr : "edu", val: 8},
        "re-enlist" : 5,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"+1 int",5:"+1 edu",6:"+1 int"},
            "Service Skills" : {1: "Admin",2: "Computer",3:"Electronics",4:"Medicine",5:"Bribery",6:"Sciences"},
            "Specialist" : {1 :"Navigation", 2: "Admin", 3 : "Sciences", 4 : "Sciences", 5 : "Vetinary Medicine", 6 : "Vehicle"},
            "Advanced Education" : {1 :"Advocate", 2: "Computer", 3 : "Jack-of-All-Trades", 4 : "Investigate", 5 : "Medicine", 6 : "Sciences"}
        },
        "rank" : {0: "Researcher",1 : "Postgraduate",2:"Scientist",3:"Senior Scientist",4:"Associate Professor",5:"Professor",6:"Faculty Director"},
        "rankskills" : {0: "Sciences",1 : "",2:"",3:"Computer",4:"",5:"",6:""},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Mid Passage",2 : "High Passage",3 : "High Passage",4 : "+1 end",5 : "+1 soc",6 : "Weapon",7 : "Star Envoy Club"},
    },


    // "Surface Defense": {
    //     'explain' : 'Member of a planetary armed military force operating on the non-hydrographic surface of a world. Also known as the planetary army.',
    //     "qual" : { attr : "end", val: 5},
    //     "survival" : { attr : "edu", val: 5},
    //     "commission" : { attr : "end", val: 6},
    //     "advancement" : { attr : "edu", val: 7},
    //     "re-enlist" : 5,
    //     "skillperterm" : 1,
    //     "skills": {
    //         "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Athletics",5:"Melee Combat",6:"Vehicle"},
    //         "Service Skills" : {1: "Mechanics",2: "Gun Combat",3:"Gunnery",4:"Melee Combat",5:"Recon",6:"Battle Dress"},
    //         "Specialist" : {1 :"Comms", 2: "Demolitions", 3 : "Gun Combat", 4 : "Melee Combat", 5 : "Survival", 6 : "Vehicle"},
    //         "Advanced Education" : {1 :"Advocate", 2: "Computer", 3 : "Jack-of-All-Trades", 4 : "Medicine", 5 : "Leadership", 6 : "Tactics"}
    //     },
    //     "rank" : {0: "Private",1 : "Lieutenant",2:"Captain",3:"Major",4:"Lt Colonel",5:"Colonel",6:"General"},
    //     "rankskills" : {0: "Gun Combat",1 : "",2:"",3:"Leadership",4:"",5:"",6:""},
    //     "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "10000",5 : "20000",6 : "50000",7 : "50000"},
    //     "benefits" : {1 : "Low Passage",2 : "+1 edu",3 : "Weapon",4 : "Mid Passage",5 : "Weapon",6 : "High Passage",7 : "+1 soc"},
    // },

    "Technician": {
        'explain' : 'Individual that is skilled in mechanical or industrial techniques or in a particular technical field.',
        "qual" : { attr : "edu", val: 7},
        "survival" : { attr : "int", val: 4},
        "commission" : { attr : "edu", val: 4},
        "advancement" : { attr : "edu", val: 8},
        "re-enlist" : 5,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"+1 int",5:"Brawling",6:"Gun Combat"},
            "Service Skills" : {1: "Vehicle",2: "Electronics",3:"Mechanics",4:"Comms",5:"Zero-G",6:"Sciences"},
            "Specialist" : {1 :"Investigate", 2: "Vehicle", 3 : "Computer", 4 : "Security", 5 : "Engineering", 6 : "Jack-of-All-Trades"},
            "Advanced Education" : {1 :"Mechanical", 2: "Computer", 3 : "Admin", 4 : "Electronics", 5 : "Engineering", 6 : "Jack-of-All-Trades"}
        },
        "rank" : {0: "Technician",1 : "Team Lead",2:"Supervisor",3:"Head of Department",4:"Director",5:"Vice-President",6:"Executive Officer"},
        "rankskills" : {0: "Electronics",1 : "Mechanics",2:"",3:"",4:"",5:"",6:""},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Mid Passage",2 : "High Passage",3 : "Weapon",4 : "+1 int",5 : "+1 edu",6 : "+1 dex",7 : "+2 edu"},
    },


    "Marshal": {
          'explain' : 'Local law enforcement officer.',
        "qual" : { attr : "int", val: 7},
        "survival" : { attr : "dex", val: 6},
        "commission" : { attr : "edu", val: 8},
        "advancement" : { attr : "int", val: 7},
        "re-enlist" : 5,
        "skillperterm" : 1,
        "skills": {
            "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"+1 int",5:"+1 edu",6:"+1 soc"},
            "Service Skills" : {1: "Streetwise",2: "Brawling",3:"Brawling",4:"Investigate",5:"Recon",6:"Gun Combat"},
            "Specialist" : {1 :"Gun Combat", 2: "Comms", 3 : "Ground Vehicle", 4 : "Security", 5 : "Computer", 6 : "Medicine"},
            "Advanced Education" : {1 :"Medicine", 2: "Tactics", 3 : "Investigate", 4 : "Computer", 5 : "Admin", 6 : "Tactics"}
        },
        "rank" : {0: "Deputy",1 : "Sherriff",2:"Inspector",3:"Lieutenant",4:"Marshal",5:"Chief",6:"Commissioner"},
        "rankskills" : {0: "Investigate",1 : "",2:"",3:"",4:"",5:"",6:""},
        "cash" : {1 : "500",2 : "1000",3 : "1000",4 : "5000",5 : "8000",6 : "10000",7 : "20000"},
        "benefits" : {1 : "Mid Passage",2 : "High Passage",3 : "+2 int",4 : "+1 edu",5 : "Weapon",6 : "High Passage",7 : "+1 soc"},
    }



    // "NoRank": {
    //      'explain' : '',
    //     "qual" : { attr : "int", val: 6},
    //     "survival" : { attr : "end", val: 7},
    //     "commission" : { attr : "", val: 0},
    //     "advancement" : { attr : "", val: 0},
    //     "re-enlist" : 6,
    //     "skillperterm" : 2,
    //     "skills": {
    //         "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Jack-of-All-Trades",5:"+1 edu",6:"Gun Combat"},
    //         "Service Skills" : {1: "Admin",2: "Computer",3:"Mechanics",4:"Medicine",5:"Leadership",6:"Sciences"},
    //         "Specialist" : {1 :"Computer", 2: "Carousing", 3 : "Electronics", 4 : "Medicine", 5 : "Medicine", 6 : "Sciences"},
    //         "Advanced Education" : {1 :"Advocate", 2: "Computer", 3 : "Linguistics", 4 : "Medicine", 5 : "Navigation", 6 : "Tactics"}
    //     },
    //     "rank" : {0: "",1 : "",2:"",3:"",4:"",5:"",6:""},
    //     "rankskills" : {0: "Piloting",1 : "",2:"",3:"Tatics",4:"",5:"",6:""},
    //     "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "10000",5 : "20000",6 : "50000",7 : "50000"},
    //     "benefits" : {1 : "Low Passage",2 : "+1 int",3 : "Weapon",4 : "Weapon"",5 : "High Passage",6 : "+1 soc",7 : ""},
    // },


    // "Ranked": {
    //      'explain' : '',
    //     "qual" : { attr : "end", val: 5},
    //     "survival" : { attr : "dex", val: 5},
    //     "commission" : { attr : "edu", val: 6},
    //     "advancement" : { attr : "edu", val: 7},
    //     "re-enlist" : 5,
    //     "skillperterm" : 1,
    //     "skills": {
    //         "Personal Development" : {1: "+1 str",2: "+1 dex",3:"+1 end",4:"Athletics",5:"Melee Combat",6:"Vehicle"},
    //         "Service Skills" : {1: "Electronics",2: "Gun Combat",3:"Gunnery",4:"Melee Combat",5:"Survival",6:"Aircraft"},
    //         "Specialist" : {1 :"Comms", 2: "Gravitics", 3 : "Gun Combat", 4 : "Gunnery", 5 : "Recon", 6 : "Piloting"},
    //         "Advanced Education" : {1 :"Advocate", 2: "Computer", 3 : "Jack-of-All-Trades", 4 : "Medicine", 5 : "Leadership", 6 : "Tactics"}
    //     },
    //     "rank" : {0: "Airman",1 : "asdf",2:"Lieutenant",3:"Leader",4:"Commander",5:"Captain",6:"Commodore"},
    //     "rankskills" : {0: "Aircraft",1 : "",2:"",3:"Leadership",4:"",5:"",6:""},
    //     "cash" : {1 : "1000",2 : "5000",3 : "10000",4 : "10000",5 : "20000",6 : "50000",7 : "50000"},
    //     "benefits" : {1 : "Low Passage",2 : "+1 edu",3 : "Weapon",4 : "Mid Passage",5 : "Weapon",6 : "High Passage",7 : "+1 soc"},
    // },


};
