var Cases = {
    "primary":{
        title: "Primary",
        items:[
            ["100k_cash",30],
            ["15k_cash",35],
            ["50k_cash",35],
        ]
    },
    "secondary":{
        title: "Secondary",
        items:[
            ["100k_cash",50],
            ["50k_cash",50],
        ]
    }
}

var Prizes = {
    "15k_cash":{rarity:"common",title:"$15.000",image:"https://cdn-icons-png.flaticon.com/512/2489/2489756.png"},
    "50k_cash":{rarity:"rare",title:"$50.000",image:"https://cdn-icons-png.flaticon.com/512/2489/2489756.png"},
    "100k_cash":{rarity:"legendary",title:"$100.000",image:"https://cdn-icons-png.flaticon.com/512/2489/2489756.png"}
}
var Rarities = {
    "common":           {color:"#0000ff"},
    "uncommon":         {color:"#008000"},
    "rare":             {color:"#ffa500"},
    "epic":             {color:"#800080"},
    "legendary":        {color:"#ff0000"}
}

var RewardBackground = "#858585"


var RewardMargin = 5


/*
            ***       DOCUMENTATION       ***

    Cases:
        Structure:
            KEY: {TITLE, ITEMS}
               Key: Used to identify the case in the "case_opening:openCase" client event
               Title: Displayed while the case animation is running in the following format: Opening {caseName}...

    Prizes:
        Structure:
            KEY: {RARITY, TITLE, IMAGE}
                Key: Used to identify the prize at "Cases"
                Rarity: Used to specify the rarity ()
                Title: Displayed at the prize window
                Image: Used at the reward tiles (if you want a local image simply put it to the img folder and use "img/fileName") 

    Rarities:
        Structure:
            KEY: {COLOR}
                Key: Used to identify the "Rarity" at "Prizes"
                Color: Used at different locations
                        - The line below the reward tiles
                        - The prize name's color at the prize window

    RewardBackground:
        The color used at the background of the reward tiles

    RewardMargin:
        IF YOU WANT TO INCREASE/DECREASE GAP BETWEEN THE TILES CHANGE margin-left AND margin-right of .reward in the style.css
        to make sure the script behaves as expected make sure both values are the same 

        example:
            margin-left: 5px;
            margin-right: 5px;

        And lastly make sure to update the value below with the new margin 

*/