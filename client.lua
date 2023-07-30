local caseOpeningNow = false

RegisterNetEvent("case_opening:client:openCase",function(caseID)
    if caseOpeningNow then 
        return
    end

    caseOpeningNow = true
    SetNuiFocus(1,1)
    print("asd")
    SendNUIMessage({
        OpenCase=caseID
    })
end)

RegisterNUICallback("SendResult",function(data,cb)
    SetNuiFocus(0,0)
    caseOpeningNow = false
    TriggerServerEvent("case_opening:server:finishedCase",data.result)
    cb("503")
end)