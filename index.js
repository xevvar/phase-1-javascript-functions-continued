// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(y = special){
    return function wrapped(adjective){
        return `You are ${y}${adjective}${y}!`
    }
    
}