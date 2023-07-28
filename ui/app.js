let btnPrizes = []

let winnerTileId = 0
let winnerId = ""

let exitButtonReady = false

$(document).ready(()=>{
    $("#container").hide()
    $("#reward-window-container").hide()

    for(const [key,value] of Object.entries(Prizes)){
        var img = new Image()
        img.src = value.image
    }

    window.addEventListener("message",(e)=>{
        const data = e.data
        OpenCase(data.OpenCase)
    })

    $("#reward-window-okay-btn").click(()=>{
        if(exitButtonReady){
            $("#container, #reward-window-container").fadeOut(250)
            $.post(`https://${GetParentResourceName()}/SendResult`,JSON.stringify({result:winnerId}))
        }
    })
})

function OpenCase(caseId){
    const caseData = Cases[caseId]

    if(caseData!==undefined){
        $("#container").hide()

        btnPrizes = []
        winnerTileId = 0
        winnerId = ""
        exitButtonReady = false

        $("#reward-container").empty()
        $("#reward-container").addClass("notransition")
        $("#reward-container").css("transform","translateX(0px)")
        setTimeout(() => {
            $("#reward-container").removeClass("notransition")
            $("#container").show()
            $("#reward-container-title").html(`Opening <span style=\"font-weight: bold\">${caseData.title}</span>...`)

            let winnerTileId = Math.ceil(Math.random()*20) + 60
            for(let i = 1;i<=100;i++){
                var item = GetRandomItem(caseData.items)
                let currentReward = $('<div class=\"reward '+Prizes[item[0]].rarity+'\" id=\"'+i+'\"><img src='+Prizes[item[0]].image+'> <div class=\"reward-title\"> '+Prizes[item[0]].title+' </div> </div>').appendTo("#reward-container")
                
                $(currentReward).find(".reward-title").css("background",Rarities[Prizes[item[0]].rarity].color)
                
                if(winnerTileId===i){
                    winnerId = item[0]
                }
            }  

            $(".reward").css("background",RewardBackground)
          
            let rewardWidth = $(".reward").outerWidth(true)
            let newRandom = $("#reward-container").outerWidth()/2-RewardMargin
            newRandom -= (winnerTileId-1)*rewardWidth

            let insideTile = Math.ceil(Math.random()*120)
            newRandom -= insideTile
            $("#reward-container").css("transform",`translateX(${newRandom}px)`)

            setTimeout(() => {
                exitButtonReady = true
                $("#reward-window-title").html(`You won <span style=\"color: ${Rarities[Prizes[winnerId].rarity].color}\">${Prizes[winnerId].title}</span>!`)
                $("#reward-window-container").fadeIn(500)
            }, 10000);
        }, 100);
    }
    else if(caseData===undefined){
        $.post(`https://${GetParentResourceName()}/SendResult`,JSON.stringify({result:false}))
    }
}

function GetRandomItem(itemPool){
    var prob_ = itemPool.map((v, i) => Array(v[1]).fill(i)).reduce((c, v) => c.concat(v), []);
    var selectedItem = prob_[Math.floor((Math.random() * prob_.length))]
    return itemPool[selectedItem]
}