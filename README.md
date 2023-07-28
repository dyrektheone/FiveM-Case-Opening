# FiveM-Case-Opening

Standalone, highly customizable case opening resource.

## Screenshots

(it's an animation, the video can be found on the FiveM forum page)

![1](https://github.com/DyrekKing/FiveM-Case-Opening/assets/68273911/2fce8205-cd43-4615-bebe-2eae3b23c420)
![2](https://github.com/DyrekKing/FiveM-Case-Opening/assets/68273911/7606702f-aed4-4227-820b-47efe5af5924)


## Features
The resource can be triggered using the "case_opening:openCase" passing 2 arguments
  - case ID (specified in the config.js)
  - callback

Example usage
```lua
TriggerClientEvent("case_opening:openCase",function("myCaseId",function(result)
  print("Look! I got "..result)
end)
```

### The resource can handle different specific scenarios 
- If the event gets triggered with an invalid case ID the result will be *false*
- If a case is already opening the result will be *false*

FiveM Forum Link: 
