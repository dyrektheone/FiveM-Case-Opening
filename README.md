# FiveM-Case-Opening

Standalone, highly customizable case opening resource.

## Screenshots

(it's an animation, the video can be found on the FiveM forum page)

![1](https://github.com/DyrekKing/FiveM-Case-Opening/assets/68273911/2fce8205-cd43-4615-bebe-2eae3b23c420)
![3](https://github.com/DyrekKing/FiveM-Case-Opening/assets/68273911/bcc9c133-4509-4353-9fd0-de5393440e75)

## Features
The resource can be triggered using the "case_opening:openCase" passing 2 arguments
  - case ID (specified in the config.js)
  - callback

Example usage - Server Script
```lua
TriggerEvent("case_opening:server:openCase","caseID",playerID)
RegisterNetEvent("case_opening:server:getReward",function(reward)
    print("Yay! I won",reward)
end)
```

### The resource can handle different specific scenarios 
- If the event gets triggered with an invalid case ID the result will be *false*
- If a case is already opening the result will be *false*

## To-Do
- The resource currently has no sound effects, I'm planning to add some

FiveM Forum Link: https://forum.cfx.re/t/free-standalone-case-opening/
