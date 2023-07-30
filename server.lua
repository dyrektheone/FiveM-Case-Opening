CasesOpening = {}

RegisterNetEvent("case_opening:server:openCase",function(caseId, id)
    if CasesOpening[id] == nil then 
        CasesOpening[id] = 'yes'
        print("opening")
        TriggerClientEvent("case_opening:client:openCase",id,caseId)
    end
end)

RegisterNetEvent("case_opening:server:finishedCase",function(reward)
    local source = source
    if CasesOpening[source] == 'yes' then
        CasesOpening[source] = nil 
        TriggerEvent("case_opening:server:getReward",reward, source)
    end
end)
