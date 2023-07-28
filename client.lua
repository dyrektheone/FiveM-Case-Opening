local caseOpeningNow = false
local caseCb = nil

RegisterNetEvent("case_opening:openCase",function(caseID, cb)
    if caseOpeningNow then 
        cb(false)
        return
    end

    caseOpeningNow = true
    caseCb = cb
    SetNuiFocus(1,1)

    SendNUIMessage({
        OpenCase=caseID
    })
    while caseOpeningNow do Wait(0) end
end)

RegisterNUICallback("SendResult",function(data,cb)
    caseCb(data.result)
    SetNuiFocus(0,0)
    caseOpeningNow = false
    caseCb = nil
    cb("503")
end)