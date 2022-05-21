module.exports = {
    parseCommand(command){
        const data = {
            type: null, 
            state: null,
            id: null
        }
        data.id = command.substring(1, 6)
        if (command[7] == 'T'){
            data.type = 'Temperature'
            if(command[9] == '0'){
                data.state = `${command.substring(11, 12)}.${command[12]}`
                return data
            }
            else{
                data.state = `-${command.substring(11, 12)}.${command[12]}`
                return data
            }
        }
        else if (command[7] == 'V'){
            data.type = 'Humidity'
            data.state = `${command.substring(11, 12)}.${command[12]}`
            return data
        }
        else if(command[7] =='P'){
            data.type = 'Pressure'
            data.state = `${command.substring(10, 13)}`
            return data
        }
    }
}