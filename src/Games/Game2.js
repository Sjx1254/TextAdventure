
import { useRef, useEffect } from 'react'
import Goback from '/Users/sjohari2/launch2/src/Games/Goback.js'
import '/Users/sjohari2/launch2/src/styles.css'

const Game2 = () => {
    const textElement = useRef()
    const optionButtonsElement = useRef()

    useEffect(() => {

        let colorCop = false
        let colorRobber = false
        let colorPed = false
        let letterCop = false
        let letterRobber = false
        let letterPed = false
        let shapeCop = false
        let shapeRobber = false
        let shapePed = false
        let lieColor = false
        let lieShape = false
        let lieSymbol = false
        let easy = false
        let medium = false
        let hard = false
        let pointsPlayer = 10
        let pointsComp = 10
        let sender = false
        let receiver = false
        let turnSender = 0
        let turnReceiver = 0
        let resetEnd = false
        let positionCop = false
        let positionRobber = false
        let positionPedestrian = false
        let compCop = false
        let compRobber = false
        let compPed = false
        let riskPed = false
        let riskCop = false
        let riskRobber = false
        let playerRole = ''
        let playerguessCop = false
        let playerguessRobber = false
        let playerguessPedestrian = false
        let computerRole = ''
        let lieAmount = 0
        let changeTurn = false
        let firstRoundAlg = false
        let randomAlg = false
        let receiverHardTracker = [
            {
                correct: false,
                playerGuess: '',
            }
        ]
        let senderHardTracker = [
            {
                correct: false,
                colorLie: false,
                shapeLie: false,
                letterLie: false,
                answer: ''
            }

        ]
        let numAnswerCopFalse = 0
        let numAnswerPedFalse = 0
        let numAnswerRobberFalse = 0
        



        let state = {}

        function startGame() {
            state = {}
            showTextNode(1)

        }

        function showTextNode(textNodeIndex) {
            if(textNodeIndex === 1) {
                if(resetEnd) {
                    positionCop = false
                    positionRobber = false
                    positionPedestrian = false
                    colorCop = false
                    colorRobber = false
                    colorPed = false
                    letterCop = false
                    letterRobber = false
                    letterPed = false
                    shapeCop = false
                    shapeRobber = false
                    shapePed = false
                    lieColor = false
                    lieShape = false
                    lieSymbol = false
                    sender = false
                    receiver = false
                    easy = false
                    medium = false
                    hard = false
                    turnReceiver = 0
                    turnSender = 0
                    pointsPlayer = 10
                    pointsComp = 10
                    playerRole = ''
                    changeTurn = false
                    computerRole = ''
                    lieAmount = 0
                    riskPed = false
                    riskCop = false
                    riskRobber = false
                    playerguessCop = false
                    playerguessRobber = false
                    playerguessPedestrian = false
                    numAnswerCopFalse = 0
                    numAnswerPedFalse = 0
                    numAnswerRobberFalse = 0
                    const modifyTurn = textNodes.find(t => t.id === 6) 
                    modifyTurn.options.forEach(option => {
                        option.nextText = 8
                    })
                    const modifyTurn2 = textNodes.find(t => t.id === 7)
                    modifyTurn2.options.forEach(option => {
                        option.nextText = 13
                    }) 
                    modifyTurn.text = 'Your position is '
                    modifyTurn2.text = 'The computer is randomly given a position. It will give you descriptions of the position.'
                    const pmodifier = textNodes.find(textNode => textNode.id === 12)
                    pmodifier.text = 'Point totals: \n' 

                    const pmodifier2 = textNodes.find(textNode => textNode.id === 19)
                    pmodifier2.text = 'Point totals: \n' 
                    for (let i = 0; i < receiverHardTracker.length - 1; i++) {
                        receiverHardTracker.pop()
                        senderHardTracker.pop()
                    }

                    receiverHardTracker[0].correct = false
                    receiverHardTracker[0].playerGuess = ''
                    senderHardTracker[0].correct = false
                    senderHardTracker[0].colorLie = false
                    senderHardTracker[0].letterLie = false
                    senderHardTracker[0].shapeLie = false
                    senderHardTracker[0].answer = ''
    
                    
                    resetEnd = false
                }
            }
            if(textNodeIndex === 3) {
                easy = true
            }
            if(textNodeIndex === 4) {
                medium = true
            }
            if(textNodeIndex === 5) {
                hard = true
            }

            if(textNodeIndex === 6) {
                sender = true
                    if(turnSender != 10){
                        playerRole = getRandomRole(3)
                        const randomizer = textNodes.find(textNode => textNode.id === 6) 
                        randomizer.text = 'Your position is ' + playerRole + '. The computer will ask questions about your position. The computer will also be given a random position'
                    }

                    const compRole = getRandomRole(3)
                    switch(compRole) {
                        case 'Cop':
                            compCop = true
                            break
                        case 'Robber':
                            compRobber = true
                            break
                        case 'Pedestrian':
                            compPed = true
                            break
                    }
    
                    const guessmodifier = textNodes.find(textNode => textNode.id === 11)
                    guessmodifier.text = 'The computer guessed that your position is'
                
                    const pmodifier = textNodes.find(textNode => textNode.id === 12)
                    pmodifier.text = 'Point totals: \n' 
                
            }

            if(textNodeIndex === 7) {

                if (!changeTurn) {

                    receiver = true

                    const change = textNodes.find(t => t.id === 7)
                    change.text = 'The computer is randomly given a position. It will give you descriptions of the position. Your position is '

                    const role = textNodes.find(t => t.id === 7)
                    role.text = role.text.concat(getRandomRole(3))
                    switch(role.text.substring(107)) {
                        case 'Cop':
                            positionCop = true
                            break
                        case 'Robber':
                            positionRobber = true
                            break
                        case 'Pedestrian':
                            positionPedestrian = true
                            break
                    }
                }   

                
                
                    
                

                
                
                const colormodifier = textNodes.find(textNode => textNode.id === 13)
                colormodifier.text = 'The computer said that the position color was'
    
                const numbmodifier = textNodes.find(textNode => textNode.id === 14)
                numbmodifier.text = 'The computer said that the position number was'
    
                const shapemodifier = textNodes.find(textNode => textNode.id === 15)
                shapemodifier.text = 'The computer said that the position letter was'
    
                const guessmodifier = textNodes.find(textNode => textNode.id === 18)
                guessmodifier.text = 'You guessed' 
                
                let pmodifier = textNodes.find(textNode => textNode.id === 19)
                pmodifier.text = 'Point totals: \n' 
                
    
            }

            if(easy && sender) {
                computerResponseEasy(textNodeIndex)
            }

            if(medium && sender) {
                computerResponseMedium(textNodeIndex)
            }
            if(hard && sender) {
                computerResponseHard(textNodeIndex)
            }
    
            if(easy && receiver) {
                receiverEasy(textNodeIndex)
            }
    
            if(medium && receiver) {
                receiverMedium(textNodeIndex)
            }
    
            if(hard && receiver) {
                receiverHard(textNodeIndex)
            }

            if(textNodeIndex === 12) {
                turnSender++
                if(turnSender === 10 && turnReceiver !== 10) {
                    const switchRole =  textNodes.find(textNode => textNode.id === 6)
                    switchRole.text = 'You will now do 10 turns as a receiver'
                    switchRole.options.forEach(option => {
                        option.nextText = 7
                    })
                    turnReceiver = 0
                    changeTurn = true
                }
    
                if(turnReceiver === 10 && turnSender === 10) {
                    const final = textNodes.find(textNode => textNode.id === 6)
                    final.text = 'Final points: \n' + 'Player points: ' + pointsPlayer + '\n' + 'Computer points: ' + pointsComp + '\n'
                    if(pointsPlayer > pointsComp) {
                        final.text = final.text.concat(' Congrats, you win!')
                    } 
                    if(pointsPlayer < pointsComp) {
                        final.text = final.text.concat(' Sadly, you lost!')
                    }
                    if(pointsPlayer === pointsComp) {
                        final.text = final.text.concat(' The game ended in a tie!')
                    }
                    final.options.forEach(option => {
                        option.nextText = 20
                    })
                }
    
            }

            if(textNodeIndex === 18) {
                turnReceiver++
                if(turnReceiver === 10 && turnSender !== 10) {
                    const switchRole =  textNodes.find(textNode => textNode.id === 7)
                    switchRole.text = 'You will now do 10 turns as a sender'
                    switchRole.options.forEach(option => {
                        option.nextText = 6
                    })
                    turnSender = 0
                    changeTurn = true
                }
    
                if(turnReceiver === 10 && turnSender === 10) {
                    const final = textNodes.find(textNode => textNode.id === 7)
                    final.text = 'Final points: \n' + 'Player points: ' + pointsPlayer + '\n' + 'Computer points: ' + pointsComp + '\n'
                    if(pointsPlayer > pointsComp) {
                        final.text = final.text.concat(' Congrats, you win!')
                    } 
                    if(pointsPlayer < pointsComp) {
                        final.text = final.text.concat(' Sadly, you lost!')
                    }
                    if(pointsPlayer === pointsComp) {
                        final.text = final.text.concat(' The game ended in a tie!')
                    }
                    final.options.forEach(option => {
                        option.nextText = 20
                    })
                }

                const optionRemove = textNodes.find(t => t.id == 17)
                if (optionRemove.options.length == 2) {
                    optionRemove.options.pop()
                }
    
                
    
                
            }

            


            if(textNodeIndex === 20) {
                resetEnd = true
            }
    


    


            const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
            textElement.current.innerText = textNode.text
            while (optionButtonsElement.current.firstChild) {
                optionButtonsElement.current.removeChild(optionButtonsElement.current.firstChild)
            }

            textNode.options.forEach(option => { 
                if (showOption(option)) {
                    const button = document.createElement('button')
                    button.innerText = option.text
                    button.classList.add('btn')
                    if(textNodeIndex === 8 || textNodeIndex === 9 || textNodeIndex === 10) {
                        button.addEventListener('click', () => selectOptionComputer(option.text))
                    }
                    if(textNodeIndex === 16) {
                        button.addEventListener('click', () => actionForRole(option.text))
                    }

                    if(textNodeIndex === 17) {
                        button.addEventListener('click', () => correctResponse(option.text))
                    }
                    button.addEventListener('click', () => selectOption(option.nextText))
                    optionButtonsElement.current.appendChild(button)
                }
            })

        

        }

        function showOption(option) {
            return option.requiredState == null || option.requiredState(state)
        }

        function selectOption(option) {
            const nextTextNodeId = option
            if (nextTextNodeId <= 0) {
                return startGame()
            }
            state = Object.assign(state, option.setState)
            showTextNode(nextTextNodeId)

        }

        function getRandomInt(int) {
            return Math.floor((Math.random() * int) + 1)
        }

        function getRandomRole(int) {
            if(int != 3) {
                return
            }
            const decider = getRandomInt(3)
            if(decider === 1) {
                return 'Cop'
            }

            if(decider === 2) {
                return 'Robber'
            }

            if(decider === 3) {
                return 'Pedestrian'
            }

        }


        function correctResponse(text) {
            const adder = textNodes.find(t => t.id === 18)
            if(text === 'Yes') {
                if(playerguessCop) {
                    if(computerRole === 'Cop') {
                        adder.text = adder.text.concat(' correctly. You multiply your points by 1.5. The computer gains 15.')
                        pointsComp += 15
                        pointsPlayer = Math.ceil(pointsComp * 1.5)
                        playerguessCop = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = true
                                receiverHardTracker[0].playerGuess = 'Cop'
                            } 
                            else {
                                const current = {                                    
                                    correct: true,
                                    guess: 'Cop'
                                }
                                receiverHardTracker.push(current)
                                console.log(receiverHardTracker)

                            }
                            
                        }
                        
                    }

                    if(computerRole === 'Robber') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a robber. The computer steals half of your points.')
                        pointsComp += Math.ceil(pointsPlayer * 0.5)
                        pointsPlayer = Math.ceil(pointsPlayer * 0.5)
                        playerguessCop = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Cop'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Cop'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    } 

                    if(computerRole === 'Pedestrian') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a pedestrian. You each gain 5 points')
                        pointsComp += 5
                        pointsPlayer += 5
                        playerguessCop = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Cop'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Cop'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }
                }

                if(playerguessRobber) {
                    if(computerRole === 'Cop') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a cop. You gain 5. The computer gains 15.')
                        pointsComp += 15
                        pointsPlayer = Math.ceil(pointsComp * 1.5)
                        playerguessRobber = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Robber'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Robber'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }

                    if(computerRole === 'Robber') {
                        adder.text = adder.text.concat(' correctly. You gain 30. The computer gains nothing.')
                        pointsPlayer += 30
                        playerguessRobber = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = true
                                receiverHardTracker[0].playerGuess = 'Robber'
                            }
                            else {
                                const current = {                                    
                                    correct: true,
                                    guess: 'Robber'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    } 

                    if(computerRole === 'Pedestrian') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a pedestrian. You gain 10 points. The computer gains 5 points')
                        pointsComp += 5
                        pointsPlayer += 10
                        playerguessRobber = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Robber'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Robber'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }
                }

                if(playerguessPedestrian) {
                    if(computerRole === 'Cop') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a cop. You lose 75% of your points. The computer gains 15')
                        pointsComp += 15
                        pointsPlayer = Math.ceil(pointsComp * 0.25)
                        playerguessPedestrian = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Pedestrian'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Pedestrian'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }

                    if(computerRole === 'Robber') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a robber. The computer gains 10. You gain 5')
                        pointsPlayer += 5
                        pointsComp += 10
                        playerguessPedestrian = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Pedestrian'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Pedestrian'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    } 

                    if(computerRole === 'Pedestrian') {
                        adder.text = adder.text.concat(' correctly. The computer was a pedestrian. You steal half of the computers points.')
                        pointsPlayer += Math.ceil(pointsComp * 0.5)
                        pointsComp = Math.ceil(pointsComp * 0.5)
                        playerguessPedestrian = false

                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = true
                                receiverHardTracker[0].playerGuess = 'Pedestrian'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Pedestrian'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }
                }
            } else {
                if(playerguessCop) {
                    if(computerRole === 'Cop') {
                        adder.text = adder.text.concat(' correctly. You each gain 15 points.')
                        pointsComp += 15
                        pointsPlayer += 15
                        playerguessCop = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = true
                                receiverHardTracker[0].playerGuess = 'Cop'
                            }
                            else {
                                const current = {                                    
                                    correct: true,
                                    guess: 'Cop'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }

                    if(computerRole === 'Robber') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a robber. You each gain 10 points.')
                        pointsComp += 10
                        pointsPlayer = 10
                        playerguessCop = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Cop'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Cop'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    } 

                    if(computerRole === 'Pedestrian') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a pedestrian. You each gain 5 points')
                        pointsComp += 5
                        pointsPlayer += 5
                        playerguessCop = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Cop'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Cop'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }
                }

                if(playerguessRobber) {
                    if(computerRole === 'Cop') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a cop. You gain 5. The computer gains 15.')
                        pointsComp += 15
                        pointsPlayer += 10
                        playerguessRobber = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Robber'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Robber'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }

                    if(computerRole === 'Robber') {
                        adder.text = adder.text.concat(' correctly. You gain 15 points. The computer gains 10 points.')
                        pointsPlayer += 15
                        pointsComp += 10
                        playerguessRobber = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = true
                                receiverHardTracker[0].playerGuess = 'Robber'
                            }
                            else {
                                const current = {                                    
                                    correct: true,
                                    guess: 'Robber'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    } 

                    if(computerRole === 'Pedestrian') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a pedestrian. You gain 10 points. The computer gains 5 points')
                        pointsComp += 5
                        pointsPlayer += 10
                        playerguessRobber = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Robber'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Robber'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }
                }

                if(playerguessPedestrian) {
                    if(computerRole === 'Cop') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a cop. You gain 10 points. The computer gains 15. ')
                        pointsComp += 15
                        pointsPlayer += 5
                        playerguessPedestrian = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Pedestrian'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Pedestrian'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }

                    if(computerRole === 'Robber') {
                        adder.text = adder.text.concat(' incorrectly. The computer was a robber. The computer gains 10. You gain 5 points')
                        pointsPlayer += 5
                        pointsComp += 10
                        playerguessPedestrian = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = false
                                receiverHardTracker[0].playerGuess = 'Pedestrian'
                            }
                            else {
                                const current = {                                    
                                    correct: false,
                                    guess: 'Pedestrian'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    } 

                    if(computerRole === 'Pedestrian') {
                        adder.text = adder.text.concat(' correctly. The computer was a pedestrian. You gain 15 points. The computer gains 5 points.')
                        pointsPlayer += 15
                        pointsComp += 5
                        playerguessPedestrian = false
                        if (receiver && hard) {
                            if (turnReceiver == 0) {
                                receiverHardTracker[0].correct = true
                                receiverHardTracker[0].playerGuess = 'Pedestrian'
                            }
                            else {
                                const current = {                                    
                                    correct: true,
                                    guess: 'Pedestrian'
                                }
                                receiverHardTracker.push(current)

                            }
                            
                        }
                    }
                }
            }
            
            
        }

        function actionForRole(text) {
            switch(text) {
                case 'Cop':
                    playerguessCop = true
                    const modifier = textNodes.find(t => t.id === 17)
                    if(positionPedestrian) {
                        modifier.text = 'Since you think the computer is a Cop, and you are a Pedestrian, would you like to report a crime? If the computer is a Robber, you will lose half of your points (rounded up)! If the computer is a cop, you will multiply your points value by 1.5 (rounded up)'
                        positionPedestrian = false
                        modifier.options[0].text = 'Yes'
                        modifier.options.push({text: 'No', nextText: 18})
                    } else if(positionRobber) {
                        modifier.text = 'Unfortunately, since your role isnt a Pedestrian, you cant perform an action'
                        positionRobber = false
                        modifier.options[0].text = 'Proceed'
                    } else if(positionCop) {
                        modifier.text = 'Unfortunately, since your role isnt a Pedestrian, you cant perform an action'
                        positionCop = false
                       
                        modifier.options[0].text = 'Proceed'
                        
                        
                    }
                    break
                case 'Robber':
                    playerguessRobber = true
                    const modifier2 = textNodes.find(t => t.id === 17)
                    if(positionCop) {
                        modifier2.text = 'Since you think the computer is a Robber, and you are a Cop, would you like to arrest the Robber? If the computer is a Pedestrian, you will lose 15 points! If the computer is a Robber, you will gain 15 points'
                        positionCop = false
                        modifier2.options[0].text = 'Yes'
                        modifier2.options.push({text: 'No', nextText: 18})
                    } else if(positionRobber) {
                        modifier2.text = 'Unfortunately, since your role isnt a Cop, you cant perform an action'
                        positionRobber = false
                        modifier2.options[0].text = 'Proceed'
                    } else if(positionPedestrian) {
                        modifier2.text = 'Unfortunately, since your role isnt a Cop, you cant perform an action'
                        positionPedestrian = false
                        modifier2.options[0].text = 'Proceed'
                        
                    }
                    break
                case 'Pedestrian':
                    playerguessPedestrian = true
                    const modifier3 = textNodes.find(t => t.id === 17)
                    if(positionRobber) {
                        modifier3.text = 'Since you think the computer is a Pedestrian, and you are a Robber, would you like to steal the Pedestrians points? If the computer is a Cop, you will lose 75% your points (rounded down)! If the computer is a Pedestrian, you will steal 75% of the pedestrians points(rounded up)'
                        positionRobber = false
                        modifier3.options[0].text = 'Yes'
                        modifier3.options.push({text: 'No', nextText: 18})
                    } else if(positionCop) {
                        modifier3.text = 'Unfortunately, since your role isnt a Robber, you cant perform an action'
                        positionCop = false
                        modifier3.options[0].text = 'Proceed'
                    } else if(positionPedestrian) {
                        modifier3.text = 'Unfortunately, since your role isnt a Robber, you cant perform an action'
                        positionPedestrian = false
                    
                        modifier3.options[0].text = 'Proceed'
                        
                    }
                    break
                
                    
                
            }

        }

        function selectOptionComputer(option) {
            switch(option) {
                case 'Blue':
                    colorCop = true
                    break
                case 'Black':
                    colorRobber = true;
                    break
                case 'White':
                    colorPed = true;
                    break

            }
        

        
            switch(option) {
                case 'Circle':
                    shapeCop = true;
                    break
                case 'Triangle':
                    shapeRobber = true;
                    break
                case 'Square':
                    shapePed = true;
                    break
            }
        

        
            switch(option) {
                case 'C':
                    letterCop = true;
                    break
                case 'R':
                    letterRobber= true;
                    break
                case 'P':
                    letterPed= true;
                    break
            }
        }

        function getLieAmount() {
            lieAmount = getRandomInt(10);

        }

        function receiverEasy(index) {
            if(index == 7) {
                computerRole = getRandomRole(3)
                getLieAmount()
                if(lieAmount === 1) {
                    const decider = getRandomInt(3)
                    if(decider === 1) {
                        lieColor = true
                        lieSymbol = true
                    } else if(decider == 2) {
                        lieColor = true
                        lieShape = true
                    } else {
                        lieSymbol = true
                        lieShape = true
                    }
                } else if(lieAmount === 2 || lieAmount === 3) {
                    const decider2 = getRandomInt(3)
                    if(decider2 === 1) {
                        lieColor = true
                    } else if(decider2 == 2) {
                        lieSymbol = true
                    } else {
                        lieShape = true
                    }
                }

            }

            if(index === 13) {
                const answer = textNodes.find(textNode => textNode.id === 13)
                if(computerRole === 'Cop') {
                    if(lieColor && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' black')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }

                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' black')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }

                    if(lieColor && !lieShape && !lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' black')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }

                    if(!lieColor) {
                        answer.text = answer.text.concat(' blue')
                    }
                }
            
                if(computerRole === 'Robber') {
                    if(lieColor && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }

                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }

                    if(lieColor && !lieShape && !lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }

                    if(!lieColor) {
                        answer.text = answer.text.concat(' black')
                    }

                }

                if(computerRole === 'Pedestrian') {
                    if(lieColor && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' black')
                        }
                    }

                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' black')
                        }
                    }

                    if(lieColor && !lieShape && !lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' black')
                        }
                    }

                    if(!lieColor) {
                        answer.text = answer.text.concat(' white')
                    }
                }
            }

            if(index === 14) {
                const answer = textNodes.find(t => t.id === 14)
                if(computerRole === 'Cop') {
                    if(lieShape && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' triangle')
                        } else {
                            answer.text = answer.text.concat(' square')
                        }
                    }

                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' triangle')
                        } else {
                            answer.text = answer.text.concat(' square')
                        }
                    }

                    if(lieShape && !lieColor && !lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' triangle')
                        } else {
                            answer.text = answer.text.concat(' square')
                        }
                    }

                    if(!lieShape) {
                        answer.text = answer.text.concat(' circle')
                    }
                }
            
                if(computerRole === 'Robber') {
                    if(lieShape && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' circle')
                        } else {
                            answer.text = answer.text.concat(' square')
                        }
                    }

                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' circle')
                        } else {
                            answer.text = answer.text.concat(' square')
                        }
                    }

                    if(lieShape && !lieColor && !lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' circle')
                        } else {
                            answer.text = answer.text.concat(' square')
                        }
                    }

                    if(!lieShape) {
                        answer.text = answer.text.concat(' triangle')
                    }

                }

                if(computerRole === 'Pedestrian') {
                    if(lieShape && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' circle')
                        } else {
                            answer.text = answer.text.concat(' triangle')
                        }
                    }

                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' circle')
                        } else {
                            answer.text = answer.text.concat(' triangle')
                        }
                    }

                    if(lieShape && !lieColor && !lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' circle')
                        } else {
                            answer.text = answer.text.concat(' triangle')
                        }
                    }

                    if(!lieShape) {
                        answer.text = answer.text.concat(' square')
                    }
                }
            }

            if(index === 15) {
                const answer = textNodes.find(t => t.id === 15)
                if(computerRole === 'Cop') {
                    if(lieColor && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' R')
                        } else {
                            answer.text = answer.text.concat(' P')
                        }
                    }

                    if(lieSymbol && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' R')
                        } else {
                            answer.text = answer.text.concat(' P')
                        }
                    }

                    if(lieSymbol && !lieColor && !lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' R')
                        } else {
                            answer.text = answer.text.concat(' P')
                        }
                    }

                    if(!lieSymbol) {
                        answer.text = answer.text.concat(' C')
                    }
                }
            
                if(computerRole === 'Robber') {
                    if(lieColor && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' C')
                        } else {
                            answer.text = answer.text.concat(' P')
                        }
                    }

                    if(lieSymbol && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' C')
                        } else {
                            answer.text = answer.text.concat(' P')
                        }
                    }

                    if(lieSymbol && !lieShape && !lieColor) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' C')
                        } else {
                            answer.text = answer.text.concat(' P')
                        }
                    }

                    if(!lieSymbol) {
                        answer.text = answer.text.concat(' R')
                    }

                }

                if(computerRole === 'Pedestrian') {
                    if(lieColor && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' C')
                        } else {
                            answer.text = answer.text.concat(' R')
                        }
                    }

                    if(lieSymbol && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' C')
                        } else {
                            answer.text = answer.text.concat(' R')
                        }
                    }

                    if(lieSymbol && !lieShape && !lieColor) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' C')
                        } else {
                            answer.text = answer.text.concat(' R')
                        }
                    }

                    if(!lieSymbol) {
                        answer.text = answer.text.concat(' P')
                    }
                }

            }

            if(index === 19) {
                lieColor = false
                lieShape = false
                lieSymbol = false

                const pointModifier = textNodes.find(textNode => textNode.id === 19)
                pointModifier.text = pointModifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)
            }
        }

        function receiverMedium(index) {
            if(index === 7) {
                const medalgd = getRandomInt(4)
                computerRole = getRandomRole(3)

                if(medalgd != 1) {
                    getLieAmount()
                    if(lieAmount === 1 || lieAmount === 2 || lieAmount === 3 || lieAmount === 8 || lieAmount === 9) {
                        const decider = getRandomInt(3)
                        if(decider === 1) {
                            lieColor = true
                            lieSymbol = true
                        } else if(decider == 2) {
                            lieColor = true
                            lieShape = true
                        } else {
                            lieSymbol = true
                            lieShape = true
                        }
                    } else if(lieAmount === 4 || lieAmount === 5 || lieAmount === 6 || lieAmount === 7) {
                        const decider2 = getRandomInt(3)
                        if(decider2 === 1) {
                            lieColor = true
                        } else if(decider2 == 2) {
                            lieSymbol = true
                        } else {
                            lieShape = true
                        }
                    }
                } else {
                    getLieAmount()
                    if(lieAmount === 1 || lieAmount === 2) {
                        const decider = getRandomInt(3)
                        if(decider === 1) {
                            lieColor = true
                        } else if(decider === 2) {
                            lieSymbol = true
                        } else {
                            lieShape = true
                        }
                    }
        
                    else if(lieAmount === 3 || lieAmount === 4 || lieAmount === 5 || lieAmount == 6) {
                        const decider = getRandomInt(3)
                        if(decider === 1) {
                            lieColor = true
                            lieSymbol = true
                        } else if(decider === 2) {
                            lieColor = true
                            lieShape = true
                        } else {
                            lieSymbol = true
                            lieShape = true
                        }
                    }
        
                    else if(lieAmount === 7 || lieAmount === 8 || lieAmount === 9) {
                        lieColor = true
                        lieSymbol = true
                        lieShape = true
                    }
                } 
    
            }

            if(index === 13) {
                const answer = textNodes.find(t => t.id === 13)
                if(computerRole === 'Cop') {
                    if(lieColor && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' black')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }
                    else if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' black')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }
        
                    else if(lieColor && !lieShape && !lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' black')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }
        
                    else if(!lieColor) {
                        answer.text = answer.text.concat(' blue')
                    }
                }
                    
                if(computerRole === 'Robber') {
                    if(lieColor && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }
        
                    else if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }
        
                    else if(lieColor && !lieShape && !lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' white')
                        }
                    }
        
                    else if(!lieColor) {
                        answer.text = answer.text.concat(' black')
                    }
        
                }
        
                if(computerRole === 'Pedestrian') {
                    if(lieColor && lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' black')
                        }
                    }
        
                    else if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' black')
                        }
                    }
        
                    else if(lieColor && !lieShape && !lieSymbol) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' black')
                        }
                    }
        
                    else if(!lieColor) {
                        answer.text = answer.text.concat(' white')
                    }
        
                }
            }

            if(index === 14) {
                const answer = textNodes.find(t => t.id === 14)
                    if(computerRole === 'Cop') {
                        if(lieShape && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' triangle')
                            } else {
                                answer.text = answer.text.concat(' square')
                            }
                        }
        
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' triangle')
                            } else {
                                answer.text = answer.text.concat(' square')
                            }
                        }
        
                        else if(lieShape && !lieColor && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' triangle')
                            } else {
                                answer.text = answer.text.concat(' square')
                            }
                        }
        
                        else if(!lieShape) {
                            answer.text = answer.text.concat(' circle')
                        }
                    }
                    
                    if(computerRole === 'Robber') {
                        if(lieShape && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' circle')
                            } else {
                                answer.text = answer.text.concat(' square')
                            }
                        }
        
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' circle')
                            } else {
                                answer.text = answer.text.concat(' square')
                            }
                        }
        
                        else if(lieShape && !lieColor && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' circle')
                            } else {
                                answer.text = answer.text.concat(' square')
                            }
                        }
        
                        else if(!lieShape) {
                            answer.text = answer.text.concat(' triangle')
                        }
        
                    }
        
                    if(computerRole === 'Pedestrian') {
                        if(lieShape && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' circle')
                            } else {
                                answer.text = answer.text.concat(' triangle')
                            }
                        }
        
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' circle')
                            } else {
                                answer.text = answer.text.concat(' triangle')
                            }
                        }
        
                        else if(lieShape && !lieColor && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' circle')
                            } else {
                                answer.text = answer.text.concat(' triangle')
                            }
                        }
        
                        else if(!lieShape) {
                            answer.text = answer.text.concat(' square')
                        }
        
                    }
                    
            } 

            if(index === 15) {
                const answer = textNodes.find(t => t.id === 15)
                    if(computerRole === 'Cop') {
                        if(lieShape && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' R')
                            } else {
                                answer.text = answer.text.concat(' P')
                            }
                        }
        
                        else if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' R')
                            } else {
                                answer.text = answer.text.concat(' P')
                            }
                        }
        
                        else if(lieSymbol && !lieColor && !lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' R')
                            } else {
                                answer.text = answer.text.concat(' P')
                            }
                        }
        
                        else if(!lieSymbol) {
                            answer.text = answer.text.concat(' C')
                        }
                    }
                    
                    if(computerRole === 'Robber') {
                        if(lieShape && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' C')
                            } else {
                                answer.text = answer.text.concat(' P')
                            }
                        }
        
                        else if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' C')
                            } else {
                                answer.text = answer.text.concat(' P')
                            }
                        }
        
                        else if(lieSymbol && !lieColor && !lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' C')
                            } else {
                                answer.text = answer.text.concat(' P')
                            }
                        }
        
                        else if(!lieSymbol) {
                            answer.text = answer.text.concat(' R')
                        }
        
                    }
        
                    if(computerRole === 'Pedestrian') {
                        if(lieShape && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' C')
                            } else {
                                answer.text = answer.text.concat(' R')
                            }
                        }
        
                        else if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' C')
                            } else {
                                answer.text = answer.text.concat(' R')
                            }
                        }
        
                        else if(lieSymbol && !lieColor && !lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' C')
                            } else {
                                answer.text = answer.text.concat(' R')
                            }
                        }
        
                        else if(!lieSymbol) {
                            answer.text = answer.text.concat(' P')
                        }
        
                    }
            }

            if(index === 19) {
                lieColor = false
                lieShape = false
                lieSymbol = false
                const pointModifier = textNodes.find(textNode => textNode.id === 19)
                pointModifier.text = pointModifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)
            }

        }

        function receiverHard(index) {
            if(index === 7) {
                let algDecider = getRandomInt(10)
                computerRole = getRandomRole(3)
                console.log(computerRole)

                getLieAmount()
                if(lieAmount === 1 || lieAmount === 2) {
                    const decider = getRandomInt(3)
                    if(decider === 1) {
                        lieColor = true
                    } else if(decider === 2) {
                        lieSymbol = true
                    } else {
                        lieShape = true
                    }
                }
    
                else if(lieAmount === 3 || lieAmount === 4 || lieAmount === 5 || lieAmount == 6 || lieAmount == 7) {
                    const decider = getRandomInt(3)
                    if(decider === 1) {
                        lieColor = true
                        lieSymbol = true
                    } else if(decider === 2) {
                        lieColor = true
                        lieShape = true
                    } else {
                        lieSymbol = true
                        lieShape = true
                    }
                }
    
                else {
                    lieColor = true
                    lieSymbol = true
                    lieShape = true
                }

                if (algDecider <= 8) {

                    if (turnReceiver == 0) {
                        console.log('true')
                        
                        firstRoundAlg = true


                    } else {
                        for (let i = 0; i < receiverHardTracker.length; i++) {
                            if (receiverHardTracker[i].playerGuess == 'Cop' && !receiverHardTracker[i].correct) {
                                numAnswerCopFalse++;
                            }
                            else if (receiverHardTracker[i].playerGuess == 'Pedestrian' && !receiverHardTracker[i].correct) {
                                numAnswerPedFalse++;
                            }
                            else if (receiverHardTracker[i].playerGuess == 'Robber' && !receiverHardTracker[i].correct){
                                numAnswerRobberFalse++;
                            }
                        }
                    }
                } else {
                    randomAlg = true

                }

                
                           
                    
                        
                    

                    


                

            }   

            if (index == 13) {
                console.log('h')
                const answer = textNodes.find(t => t.id == 13)
                if (randomAlg || firstRoundAlg) {
                    console.log('y')
                    if(computerRole === 'Cop') {
                        if(lieColor && lieSymbol) {
                            
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' black')
                            } else {
                                answer.text = answer.text.concat(' white')
                            }
                        }
                        else if(lieColor && lieShape) {
                            
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' black')
                            } else {
                                answer.text = answer.text.concat(' white')
                            }
                        }
            
                        else if(lieColor && !lieShape && !lieSymbol) {
                           
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' black')
                            } else {
                                answer.text = answer.text.concat(' white')
                            }
                        }
            
                        else if(!lieColor) {
                            
                            answer.text = answer.text.concat(' blue')
                        }
                    }
                        
                    if(computerRole === 'Robber') {
                        if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' blue')
                            } else {
                                answer.text = answer.text.concat(' white')
                            }
                        }
            
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' blue')
                            } else {
                                answer.text = answer.text.concat(' white')
                            }
                        }
            
                        else if(lieColor && !lieShape && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' blue')
                            } else {
                                answer.text = answer.text.concat(' white')
                            }
                        }
            
                        else if(!lieColor) {
                            answer.text = answer.text.concat(' black')
                        }
            
                    }
            
                    if(computerRole === 'Pedestrian') {
                        if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' blue')
                            } else {
                                answer.text = answer.text.concat(' black')
                            }
                        }
            
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' blue')
                            } else {
                                answer.text = answer.text.concat(' black')
                            }
                        }
            
                        else if(lieColor && !lieShape && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' blue')
                            } else {
                                answer.text = answer.text.concat(' black')
                            }
                        }
            
                        else if(!lieColor) {
                            answer.text = answer.text.concat(' white')
                        }
            
                    }

                } else {
                    console.log('a')
                    console.log(numAnswerRobberFalse)
                    console.log(numAnswerPedFalse)
                    console.log(numAnswerCopFalse)
                    if (computerRole == 'Cop') {
                        if (lieColor) {
                            if (Math.max(numAnswerRobberFalse, numAnswerPedFalse, numAnswerCopFalse) == numAnswerRobberFalse) {
                                answer.text = answer.text.concat(' black')
                            } 
                            else if (numAnswerRobberFalse == numAnswerPedFalse && numAnswerCopFalse == numAnswerRobberFalse) {
                                console.log('s')
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answer.text = answer.text.concat(' black')
                                }
                                else {
                                    answer.text = answer.text.concat(' white')
                                }
                                
                            }
                            else {
                                answer.text = answer.text.concat(' white')
                            }
                        }
                            
                        else {
                            answer.text = answer.text.concat(' blue')
                        }
                    }

                    if (computerRole == 'Robber') {
                        if (lieColor) {
                            if (Math.max(numAnswerRobberFalse, numAnswerPedFalse, numAnswerCopFalse) == numAnswerPedFalse) {
                                answer.text = answer.text.concat(' white')
                            } 
                            else if (numAnswerRobberFalse == numAnswerPedFalse && numAnswerCopFalse == numAnswerRobberFalse) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answer.text = answer.text.concat(' white')
                                }
                                else {
                                    answer.text = answer.text.concat(' blue')
                                }
                                
                            }
                            else {
                                answer.text = answer.text.concat(' blue')
                            }
                        }
                            
                        else {
                            answer.text = answer.text.concat(' black')
                        }

                    }

                    if (computerRole == 'Pedestrian') {
                        if (lieColor) {
                            if (Math.max(numAnswerRobberFalse, numAnswerPedFalse, numAnswerCopFalse) == numAnswerCopFalse) {
                                answer.text = answer.text.concat(' blue')
                            } 
                            else if (numAnswerRobberFalse == numAnswerPedFalse && numAnswerCopFalse == numAnswerRobberFalse) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answer.text = answer.text.concat(' blue')
                                }
                                else {
                                    answer.text = answer.text.concat(' black')
                                }
                                
                            }
                            else {
                                answer.text = answer.text.concat(' black')
                            }
                        }
                            
                        else {
                            answer.text = answer.text.concat(' white')
                        }

                    }


                    
                }
                
            }

            if (index === 14) {
                const answerShape = textNodes.find(t => t.id === 14)
                if (randomAlg || firstRoundAlg) {
                    if(computerRole === 'Cop') {
                        if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerShape.text = answerShape.text.concat(' triangle')
                            } else {
                                answerShape.text = answerShape.text.concat(' square')
                            }
                        }
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerShape.text = answerShape.text.concat(' triangle')
                            } else {
                                answerShape.text = answerShape.text.concat(' square')
                            }
                        }
            
                        else if(lieColor && !lieShape && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerShape.text = answerShape.text.concat(' triangle')
                            } else {
                                answerShape.text = answerShape.text.concat(' square')
                            }
                        }
            
                        else if(!lieColor) {
                            answerShape.text = answerShape.text.concat(' circle')
                        }
                    }
                        
                    if(computerRole === 'Robber') {
                        if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerShape.text = answerShape.text.concat(' circle')
                            } else {
                                answerShape.text = answerShape.text.concat(' square')
                            }
                        }
            
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerShape.text = answerShape.text.concat(' circle')
                            } else {
                                answerShape.text = answerShape.text.concat(' square')
                            }
                        }
            
                        else if(lieColor && !lieShape && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerShape.text = answerShape.text.concat(' circle')
                            } else {
                                answerShape.text = answerShape.text.concat(' square')
                            }
                        }
            
                        else if(!lieColor) {
                            answerShape.text = answerShape.text.concat(' triangle')
                        }
            
                    }
            
                    if(computerRole === 'Pedestrian') {
                        if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerShape.text = answerShape.text.concat(' circle')
                            } else {
                                answerShape.text = answerShape.text.concat(' triangle')
                            }
                        }
            
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerShape.text = answerShape.text.concat(' circle')
                            } else {
                                answerShape.text = answerShape.text.concat(' triangle')
                            }
                        }
            
                        else if(lieColor && !lieShape && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerShape.text = answerShape.text.concat(' circle')
                            } else {
                                answerShape.text = answerShape.text.concat(' triangle')
                            }
                        }
            
                        else if(!lieColor) {
                            answerShape.text = answerShape.text.concat(' square')
                        }
            
                    }

                } else {
                    if (computerRole == 'Cop') {
                        if (lieColor) {
                            if (Math.max(numAnswerRobberFalse, numAnswerPedFalse, numAnswerCopFalse) == numAnswerRobberFalse) {
                                answerShape.text = answerShape.text.concat(' triangle')
                            } 
                            else if (numAnswerRobberFalse == numAnswerPedFalse && numAnswerCopFalse == numAnswerRobberFalse) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answerShape.text = answerShape.text.concat(' triangle')
                                }
                                else {
                                    answerShape.text = answerShape.text.concat(' square')
                                }
                                
                            }
                            else {
                                answerShape.text = answerShape.text.concat(' square')
                            }
                        }
                            
                        else {
                            answerShape.text = answerShape.text.concat(' circle')
                        }
                    }

                    if (computerRole == 'Robber') {
                        if (lieColor) {
                            if (Math.max(numAnswerRobberFalse, numAnswerPedFalse, numAnswerCopFalse) == numAnswerPedFalse) {
                                answerShape.text = answerShape.text.concat(' square')
                            } 
                            else if (numAnswerRobberFalse == numAnswerPedFalse && numAnswerCopFalse == numAnswerRobberFalse) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answerShape.text = answerShape.text.concat(' square')
                                }
                                else {
                                    answerShape.text = answerShape.text.concat(' circle')
                                }
                                
                            }
                            else {
                                answerShape.text = answerShape.text.concat(' circle')
                            }
                        }
                            
                        else {
                            answerShape.text = answerShape.text.concat(' triangle')
                        }

                    }

                    if (computerRole == 'Pedestrian') {
                        if (lieColor) {
                            if (Math.max(numAnswerRobberFalse, numAnswerPedFalse, numAnswerCopFalse) == numAnswerCopFalse) {
                                answerShape.text = answerShape.text.concat(' circle')
                            } 
                            else if (numAnswerRobberFalse == numAnswerPedFalse && numAnswerCopFalse == numAnswerRobberFalse) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answerShape.text = answerShape.text.concat(' circle')
                                }
                                else {
                                    answerShape.text = answerShape.text.concat(' triangle')
                                }
                                
                            }
                            else {
                                answerShape.text = answerShape.text.concat(' triangle')
                            }
                        }
                            
                        else {
                            answerShape.text = answerShape.text.concat(' square')
                        }

                    }
                     


                    
                }

            }

            if (index == 15) {
                const answerSymbol = textNodes.find(t => t.id === 15)
                if (randomAlg || firstRoundAlg) {
                    if(computerRole === 'Cop') {
                        if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerSymbol.text = answerSymbol.text.concat(' R')
                            } else {
                                answerSymbol.text = answerSymbol.text.concat(' P')
                            }
                        }
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerSymbol.text = answerSymbol.text.concat(' R')
                            } else {
                                answerSymbol.text = answerSymbol.text.concat(' P')
                            }
                        }
            
                        else if(lieColor && !lieShape && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerSymbol.text = answerSymbol.text.concat(' R')
                            } else {
                                answerSymbol.text = answerSymbol.text.concat(' P')
                            }
                        }
            
                        else if(!lieColor) {
                            answerSymbol.text = answerSymbol.text.concat(' C')
                        }
                    }
                        
                    if(computerRole === 'Robber') {
                        if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerSymbol.text = answerSymbol.text.concat(' C')
                            } else {
                                answerSymbol.text = answerSymbol.text.concat(' P')
                            }
                        }
            
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerSymbol.text = answerSymbol.text.concat(' C')
                            } else {
                                answerSymbol.text = answerSymbol.text.concat(' P')
                            }
                        }
            
                        else if(lieColor && !lieShape && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerSymbol.text = answerSymbol.text.concat(' C')
                            } else {
                                answerSymbol.text = answerSymbol.text.concat(' P')
                            }
                        }
            
                        else if(!lieColor) {
                            answerSymbol.text = answerSymbol.text.concat(' R')
                        }
            
                    }
            
                    if(computerRole === 'Pedestrian') {
                        if(lieColor && lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerSymbol.text = answerSymbol.text.concat(' C')
                            } else {
                                answerSymbol.text = answerSymbol.text.concat(' R')
                            }
                        }
            
                        else if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerSymbol.text = answerSymbol.text.concat(' C')
                            } else {
                                answerSymbol.text = answerSymbol.text.concat(' R')
                            }
                        }
            
                        else if(lieColor && !lieShape && !lieSymbol) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answerSymbol.text = answerSymbol.text.concat(' C')
                            } else {
                                answerSymbol.text = answerSymbol.text.concat(' R')
                            }
                        }
            
                        else if(!lieColor) {
                            answerSymbol.text = answerSymbol.text.concat(' P')
                        }
            
                    }

                } else {
                    if (computerRole == 'Cop') {
                        if (lieColor) {
                            if (Math.max(numAnswerRobberFalse, numAnswerPedFalse, numAnswerCopFalse) == numAnswerRobberFalse) {
                                answerSymbol.text = answerSymbol.text.concat(' R')
                            } 
                            else if (numAnswerRobberFalse == numAnswerPedFalse && numAnswerCopFalse == numAnswerRobberFalse) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answerSymbol.text = answerSymbol.text.concat(' R')
                                }
                                else {
                                    answerSymbol.text = answerSymbol.text.concat(' P')
                                }
                                
                            }
                            else {
                                answerSymbol.text = answerSymbol.text.concat(' P')
                            }
                        }
                            
                        else {
                            answerSymbol.text = answerSymbol.text.concat(' C')
                        }
                    }

                    if (computerRole == 'Robber') {
                        if (lieColor) {
                            if (Math.max(numAnswerRobberFalse, numAnswerPedFalse, numAnswerCopFalse) == numAnswerPedFalse) {
                                answerSymbol.text = answerSymbol.text.concat(' P')
                            } 
                            else if (numAnswerRobberFalse == numAnswerPedFalse && numAnswerCopFalse == numAnswerRobberFalse) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answerSymbol.text = answerSymbol.text.concat(' P')
                                }
                                else {
                                    answerSymbol.text = answerSymbol.text.concat(' C')
                                }
                                
                            }
                            else {
                                answerSymbol.text = answerSymbol.text.concat(' C')
                            }
                        }
                            
                        else {
                            answerSymbol.text = answerSymbol.text.concat(' R')
                        }

                    }

                    if (computerRole == 'Pedestrian') {
                        if (lieColor) {
                            if (Math.max(numAnswerRobberFalse, numAnswerPedFalse, numAnswerCopFalse) == numAnswerCopFalse) {
                                answerSymbol.text = answerSymbol.text.concat(' C')
                            } 
                            else if (numAnswerRobberFalse == numAnswerPedFalse && numAnswerCopFalse == numAnswerRobberFalse) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answerSymbol.text = answerSymbol.text.concat(' C')
                                }
                                else {
                                    answerSymbol.text = answerSymbol.text.concat(' R')
                                }
                                
                            }
                            else {
                                answerSymbol.text = answerSymbol.text.concat(' R')
                            }
                        }
                            
                        else {
                            answerSymbol.text = answerSymbol.text.concat(' P')
                        }

                    }
                     


                    
                }

            }

            if(index === 19) {
                lieColor = false
                lieShape = false
                lieSymbol = false
                firstRoundAlg = false
                numAnswerCopFalse = 0
                numAnswerPedFalse = 0
                numAnswerRobberFalse = 0
                randomAlg = false
                const pointModifier = textNodes.find(textNode => textNode.id === 19)
                pointModifier.text = pointModifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)
            }

            

        }

        
        function computerResponseEasy(index) {
            if(index === 11) {
                let guessCop = false
                let guessRobber = false
                let guessPed = false
                const answer = textNodes.find(t => t.id === 11)
                if(colorCop && shapeCop && letterCop) {
                    guessCop = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Cop.')
                    if(compPed) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                            riskPed = true
                        } else {
                            riskPed = false
                            answer.text = answer.text.concat('\n The computer is a Pedestrian but it decides not to report a crime to you.') 
                        }
                    } 
                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }

                    colorCop = false
                    shapeCop = false
                    letterCop = false
                } else if(colorCop && shapeCop && letterRobber) {
                    guessCop = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Cop.')
                    if(compPed) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                            riskPed = true
                        } else {
                            riskPed = false
                            answer.text = answer.text.concat('\n The computer is a Pedestrian but it decides not to report a crime to you.') 
                        }
                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }

                    colorCop = false
                    shapeCop = false
                    letterRobber = false
                } else if(colorCop && shapeCop && letterPed) {
                    guessCop = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Cop.')
                    if(compPed) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                            riskPed = true
                        } else {
                            riskPed = false
                            answer.text = answer.text.concat('\n The computer is a Pedestrian but it decides not to report a crime to you.') 
                        }
                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }

                    colorCop = false
                    shapeCop = false
                    letterPed = false
                } else if(colorCop && shapeRobber && letterCop) {
                    guessCop = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Cop.')
                    if(compPed) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                            riskPed = true
                        } else {
                            riskPed = false
                            answer.text = answer.text.concat('\n The computer is a Pedestrian but it decides not to report a crime to you.') 
                        }
                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }

                    colorCop = false
                    shapeRobber = false
                    letterCop = false
                } else if(colorCop && shapePed && letterCop) {
                    guessCop = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Cop.')
                    if(compPed) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                            riskPed = true
                        } else {
                            riskPed = false
                            answer.text = answer.text.concat('\n The computer is a Pedestrian but it decides not to report a crime to you.') 
                        }
                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }

                    colorCop = false
                    shapePed = false
                    letterCop = false
                } else if(colorPed && shapeCop && letterCop) {
                    guessCop = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Cop.')
                    if(compPed) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                            riskPed = true
                        } else {
                            riskPed = false
                            answer.text = answer.text.concat('\n The computer is a Pedestrian but it decides not to report a crime to you.') 
                        }
                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }

                    colorPed = false
                    shapeCop = false
                    letterCop = false
                } else if(colorRobber && shapeCop && letterCop) {
                    guessCop = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Cop.')
                    if(compPed) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                            riskPed = true
                        } else {
                            riskPed = false
                            answer.text = answer.text.concat('\n The computer is a Pedestrian but it decides not to report a crime to you.') 
                        }
                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }

                    colorRobber = false
                    shapeCop = false
                    letterCop = false
                } else if(colorCop && shapeRobber && letterPed) {
                    guessCop = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Cop.')
                    if(compPed) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                            riskPed = true
                        } else {
                            riskPed = false
                            answer.text = answer.text.concat('\n The computer is a Pedestrian but it decides not to report a crime to you.') 
                        }
                    }
                    colorCop = false
                    shapeRobber = false
                    letterPed = false
                } else if(colorCop && shapePed && letterRobber) {
                    guessCop = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Cop.')
                    if(compPed) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                            riskPed = true
                        } else {
                            riskPed = false
                            answer.text = answer.text.concat('\n The computer is a Pedestrian but it decides not to report a crime to you.') 
                        }
                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }

                    colorCop = false
                    shapePed = false
                    letterRobber = false
                }

                if(colorRobber && shapeRobber && letterRobber) {
                    guessRobber = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Robber.')
                    if(compCop) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                            riskCop = true
                        } else {
                            riskCop = false
                            answer.text = answer.text.concat('\n The computer is a Cop but it decides not to arrest you.') 
                        }

                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }

                    colorRobber = false
                    shapeRobber = false
                    letterRobber = false
                } else if(colorRobber && shapeCop && letterRobber) {
                    guessRobber = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Robber.')
                    if(compCop) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                            riskCop = true
                        } else {
                            riskCop = false
                            answer.text = answer.text.concat('\n The computer is a Cop but it decides not to arrest you.') 
                        }

                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }

                    colorRobber = false
                    shapeCop = false
                    letterRobber = false
                } else if(colorRobber && shapeRobber && letterCop) {
                    guessRobber = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Robber.')
                    if(compCop) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                            riskCop = true
                        } else {
                            riskCop = false
                            answer.text = answer.text.concat('\n The computer is a Cop but it decides not to arrest you.') 
                        }

                    } 

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorRobber = false
                    shapeRobber = false
                    letterCop = false
                } else if(colorRobber && shapeRobber && letterPed) {
                    guessRobber = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Robber.')
                    if(compCop) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                            riskCop = true
                        } else {
                            riskCop = false
                            answer.text = answer.text.concat('\n The computer is a Cop but it decides not to arrest you.') 
                        }

                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorRobber = false
                    shapeRobber = false
                    letterPed = false
                } else if(colorRobber && shapePed && letterRobber) {
                    guessRobber = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Robber.')
                    if(compCop) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                            riskCop = true
                        } else {
                            riskCop = false
                            answer.text = answer.text.concat('\n The computer is a Cop but it decides not to arrest you.') 
                        }

                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorRobber = false
                    shapePed = false
                    letterRobber = false
                } else if(colorPed && shapeRobber && letterRobber) {
                    guessRobber = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Robber.')
                    if(compCop) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                            riskCop = true
                        } else {
                            riskCop = false
                            answer.text = answer.text.concat('\n The computer is a Cop but it decides not to arrest you.') 
                        }

                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorPed = false
                    shapeRobber = false
                    letterRobber = false
                } else if(colorCop && shapeRobber && letterRobber) {
                    guessRobber = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Robber.')
                    if(compCop) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                            riskCop = true
                        } else {
                            riskCop = false
                            answer.text = answer.text.concat('\n The computer is a Cop but it decides not to arrest you.') 
                        }

                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorCop = false
                    shapeRobber = false
                    letterRobber = false
                } else if(colorRobber && shapeCop && letterPed) {
                    guessRobber = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Robber.')
                    if(compCop) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                            riskCop = true
                        } else {
                            riskCop = false
                            answer.text = answer.text.concat('\n The computer is a Cop but it decides not to arrest you.') 
                        }

                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorRobber = false
                    shapeCop = false
                    letterPed = false
                } else if(colorRobber && shapePed && letterCop) {
                    guessRobber = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Robber.')
                    if(compCop) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                            riskCop = true
                        } else {
                            riskCop = false
                            answer.text = answer.text.concat('\n The computer is a Cop but it decides not to arrest you.') 
                        }

                    }

                    if(compRobber) {
                        answer.text = answer.text.concat('\n The computer is a Robber')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorRobber = false
                    shapePed = false
                    letterCop = false
                }

                if(colorPed && shapePed && letterPed) {
                    guessPed = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Pedestrian.')
                    if(compRobber) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal all your points.')
                            riskRobber = true
                        } else {
                            riskRobber = false
                            answer.text = answer.text.concat('\n The computer is a Robber but it decides not to steal all your points.') 
                        }

                    }

                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorPed = false
                    shapePed = false
                    letterPed = false
                } else if(colorPed && shapeCop && letterPed) {
                    guessPed = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Pedestrian.')
                    if(compRobber) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal all your points.')
                            riskRobber = true
                        } else {
                            riskRobber = false
                            answer.text = answer.text.concat('\n The computer is a Robber but it decides not to steal all your points.') 
                        }

                    }

                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorPed = false
                    shapeCop = false
                    letterPed = false
                } else if(colorPed && shapePed && letterCop) {
                    guessPed = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Pedestrian.')
                    if(compRobber) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal all your points.')
                            riskRobber = true
                        } else {
                            riskRobber = false
                            answer.text = answer.text.concat('\n The computer is a Robber but it decides not to steal all your points.') 
                        }

                    }

                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorPed = false
                    shapePed = false
                    letterCop = false
                } else if(colorPed && shapeRobber && letterPed) {
                    guessPed = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Pedestrian.')
                    if(compRobber) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal all your points.')
                            riskRobber = true
                        } else {
                            riskRobber = false
                            answer.text = answer.text.concat('\n The computer is a Robber but it decides not to steal all your points.') 
                        }

                    }

                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorPed = false
                    shapeRobber = false
                    letterPed = false
                } else if(colorPed && shapePed && letterRobber) {
                    guessPed = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Pedestrian.')
                    if(compRobber) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal all your points.')
                            riskRobber = true
                        } else {
                            riskRobber = false
                            answer.text = answer.text.concat('\n The computer is a Robber but it decides not to steal all your points.') 
                        }

                    }

                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorPed = false
                    shapePed = false
                    letterRobber = false
                } else if(colorRobber && shapePed && letterPed) {
                    guessPed = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Pedestrian.')
                    if(compRobber) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal all your points.')
                            riskRobber = true
                        } else {
                            riskRobber = false
                            answer.text = answer.text.concat('\n The computer is a Robber but it decides not to steal all your points.') 
                        }

                    }

                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorRobber = false
                    shapePed = false
                    letterPed = false
                } else if(colorCop && shapePed && letterPed) {
                    guessPed = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Pedestrian.')
                    if(compRobber) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal all your points.')
                            riskRobber = true
                        } else {
                            riskRobber = false
                            answer.text = answer.text.concat('\n The computer is a Robber but it decides not to steal all your points.') 
                        }

                    }

                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorCop = false
                    shapePed = false
                    letterPed = false
                } else if(colorPed && shapeCop && letterRobber) {
                    guessPed = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Pedestrian.')
                    if(compRobber) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal all your points.')
                            riskRobber = true
                        } else {
                            riskRobber = false
                            answer.text = answer.text.concat('\n The computer is a Robber but it decides not to steal all your points.') 
                        }

                    }

                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorPed = false
                    shapeCop = false
                    letterRobber = false
                } else if(colorPed && shapeRobber && letterCop) {
                    guessPed = true
                    const decider = getRandomInt(2)
                    answer.text = answer.text.concat(' a Pedestrian.')
                    if(compRobber) {
                        if(decider === 1) {
                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal all your points.')
                            riskRobber = true
                        } else {
                            riskRobber = false
                            answer.text = answer.text.concat('\n The computer is a Robber but it decides not to steal all your points.') 
                        }

                    }

                    if(compCop) {
                        answer.text = answer.text.concat('\n The computer is a Cop')
                    }
                    if(compPed) {
                        answer.text = answer.text.concat('\n The computer is a Pedestrian')
                    }
                    colorPed = false
                    shapeRobber = false
                    letterCop = false
                }

                

                
                if(playerRole === 'Cop') {
                    if(guessCop && riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. The computers points increase by 1.5 and you gain 15 ')
                        pointsComp = Math.ceil(pointsComp * 1.5)
                        pointsPlayer += 15
                        guessCop = false
                        riskPed = false
                        
                    }

                    if(guessCop && !riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. You both gain 15 ')
                        pointsComp += 15
                        pointsPlayer += 15
                        guessCop = false
                        
                    }

                    if(guessRobber) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer gains 5. You gain 15')
                        pointsComp += 10
                        pointsPlayer += 15
                        guessRobber = false
                    }

                    if(guessPed && riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer loses 75% of his points. You gain 15 points')
                        pointsComp = Math.ceil(pointsComp * 0.25)
                        pointsPlayer += 15
                        guessPed = false
                        riskRobber = false
                        

                    }

                    if(guessPed && !riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer gains 10 points. You gain 15 points')
                        pointsComp += 5
                        pointsPlayer += 15
                        guessPed = false
                        
                    }

                }

                if(playerRole === 'Robber') {
                    if(guessCop && riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You steal half of the computers points.')
                        pointsPlayer += Math.ceil(pointsComp * 0.5)
                        pointsComp = Math.ceil(pointsComp * 0.5)
                        guessCop = false
                        riskPed = false
                        
                        

                    }

                    if(guessCop && !riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You each gain 10 points ')
                        pointsComp += 10
                        pointsPlayer += 10
                        guessCop = false
                        
                    }


                    if(guessRobber && riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. You gain nothing. The computer gains 30 points. ')
                        pointsComp += 30
                        guessRobber = false
                        riskCop = false
                        
                    }

                    if(guessRobber && !riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. The computer gains 15. You gain 10')
                        pointsComp += 15
                        pointsPlayer += 10
                        guessRobber = false
                        

                    }

                    if(guessPed) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You gain 10 points. The computer gains 5 points')
                        pointsComp += 5
                        pointsPlayer += 10
                        guessPed = false
                    }
                    

                }

                if(playerRole === 'Pedestrian') {

                    if(guessCop) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You both gain 5 points')
                        pointsComp += 5
                        pointsPlayer += 5
                        guessCop = false

                    }

                    if(guessRobber && riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You gain nothing. The computer loses 15 points ')
                        pointsComp -= 15
                        guessRobber = false
                        riskCop = false
                    }

                    if(guessRobber && !riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer gains 10 points. You gain 5 points')
                        pointsPlayer += 5
                        pointsComp += 10
                        guessRobber = false

                    }
                    
                    if(guessPed && riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. The computer steals 75% of your points.')
                        pointsComp += Math.ceil(pointsPlayer * 0.75)
                        pointsPlayer = Math.ceil(pointsPlayer * 0.25)
                        guessPed = false
                        riskRobber = false
                        
                    }

                    if(guessPed && !riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. You gain 5 points. The computer gains 15 points')
                        pointsComp += 15
                        pointsPlayer += 5
                        guessPed = false
                    }




                }

                compCop = false
                compRobber = false
                compRobber = false



            }

            if(index === 12) {
                const pointModifier = textNodes.find(t => t. id === 12) 
                pointModifier.text = pointModifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)
            }


        }

        function computerResponseMedium(index) {
            if(index === 11) {
                let guessCop = false
                let guessRobber = false
                let guessPed = false
                let answer = textNodes.find(t => t. id === 11)
                const decider = getRandomInt(4)
                if(decider === 1) {
                        if(colorCop && letterCop & shapeCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6) {
                                answer = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text= answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeCop = false
                            letterCop = false
                        } else if(colorCop && shapeCop && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text= answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeCop = false
                            letterRobber = false
                        } else if(colorCop && shapeCop && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text= answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            ///Starting point 
                            colorCop = false
                            shapeCop = false
                            letterPed = false

                        } else if(colorCop && shapeRobber && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeRobber = false
                            letterCop = false
                        } else if(colorCop && shapePed && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapePed = false
                            letterCop = false

                        } else if(colorPed && shapeCop && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeCop = false
                            letterCop = false
                        } else if(colorRobber && shapeCop && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeCop = false
                            letterCop = false

                        } else if(colorCop && shapeRobber && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeRobber = false
                            letterPed = false
                        } else if(colorCop && shapePed && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapePed = false
                            letterRobber = false
                        }

                        if(colorRobber && shapeRobber && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeRobber = false
                            letterCop = false
                        } else if(colorRobber && shapeCop && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeCop = false
                            letterRobber = false
                        } else if(colorCop && letterRobber && shapeRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeRobber = false
                            letterRobber = false
                        } else if(colorRobber && shapePed && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapePed = false
                            letterRobber = false
                        } else if(colorRobber && shapeRobber && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeRobber = false
                            letterPed = false
                        } else if(colorPed && shapeRobber && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeRobber = false
                            letterRobber = false
                        } else if (colorRobber && shapeRobber && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeRobber = false
                            letterRobber = false
                        } else if(colorRobber && shapePed && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapePed = false
                            letterCop = false

                        } else if(colorRobber && shapeCop && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6) {
                                answer = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeCop = false
                            letterPed = false
                        }

                        if(colorPed && colorCop && shapePed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5) {
                                answer = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeCop = false
                            letterPed = false
                        } else if(colorPed && shapePed && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapePed = false
                            letterCop = false

                        } else if(colorCop && shapePed && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapePed = false
                            letterPed = false
                        } else if(colorPed && shapeRobber && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeRobber = false
                            letterPed = false
                        } else if(colorPed && shapePed && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapePed = false
                            letterRobber = false
                        } else if(colorRobber && shapePed && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer .text= answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapePed = false
                            letterPed = false
                        } else if(colorPed && shapePed && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8 || decider === 9) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapePed = false
                            letterPed = false
                        } else if(colorPed && shapeCop && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeCop = false
                            letterRobber = false
                        } else if(colorPed && shapeRobber && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeRobber = false
                            letterCop = false
                        }
                    } else {
                        const decider = getRandomInt(5)
                        if(decider === 1) {
                            if(colorCop && letterCop & shapeCop) {
                                const decider = getRandomInt(20)
                                if(decider === 1 || decider === 2) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(5)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8 || decider === 9 || decider === 10 || decider === 11) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                            //Continue from here
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorCop = false
                                shapeCop = false
                                letterCop = false
                            } else if(colorCop && shapeCop && letterRobber) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 3 || decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorCop = false
                                shapeCop = false
                                letterRobber = false
                            } else if(colorCop && shapeCop && letterPed) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(2)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorCop = false
                                shapeCop = false
                                letterPed = false
    
                            } else if(colorCop && shapeRobber && letterCop) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 3 || decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorCop = false
                                shapeRobber = false
                                letterCop = false
                            } else if(colorCop && shapePed && letterCop) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(2)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorCop = false
                                shapePed = false
                                letterCop = false
    
                            } else if(colorPed && shapeCop && letterCop) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6| decider === 7) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(2)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorPed = false
                                shapeCop = false
                                letterCop = false
                            } else if(colorRobber && shapeCop && letterCop) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 3 || decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorRobber = false
                                shapeCop = false
                                letterCop = false
    
                            } else if(colorCop && shapeRobber && letterPed) {
                                const decider = getRandomInt(9)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5 || decider === 6) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorCop = false
                                shapeRobber = false
                                letterPed = false
                            } else if(colorCop && shapePed && letterRobber) {
                                const decider = getRandomInt(9)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5 || decider === 6) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorCop = false
                                shapePed = false
                                letterRobber = false
                            }
    
                            if(colorRobber && shapeRobber && letterCop) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorRobber = false
                                shapeRobber = false
                                letterCop = false
                            } else if(colorRobber && shapeCop && letterRobber) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorRobber = false
                                shapeCop = false
                                letterRobber = false
                            } else if(colorCop && letterRobber && shapeRobber) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorCop = false
                                shapeRobber = false
                                letterRobber = false
                            } else if(colorRobber && shapePed && letterRobber) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 6 || decider === 7) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorRobber = false
                                shapePed = false
                                letterRobber = false
                            } else if(colorRobber && shapeRobber && letterPed) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 6 || decider === 7) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorRobber = false
                                shapeRobber = false
                                letterPed = false
                            } else if(colorPed && shapeRobber && letterRobber) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 6 || decider === 7) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorPed = false
                                shapeRobber = false
                                letterRobber = false
                            } else if (colorRobber && shapeRobber && letterRobber) {
                                const decider = getRandomInt(20)
                                if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8 || decider === 9) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 10 || decider === 11) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(5)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorRobber = false
                                shapeRobber = false
                                letterRobber = false
                            } else if(colorRobber && shapePed && letterCop) {
                                const decider = getRandomInt(9)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5 || decider === 6 ) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorRobber = false
                                shapePed = false
                                letterCop = false
    
                            } else if(colorRobber && shapeCop && letterPed) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5 || decider === 6) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorRobber = false
                                shapeCop = false
                                letterPed = false
                            }
    
                            if(colorPed && colorCop && shapePed) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(2)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorPed = false
                                shapeCop = false
                                letterPed = false
                            } else if(colorPed && shapePed && letterCop) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(2)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorPed = false
                                shapePed = false
                                letterCop = false
    
                            } else if(colorCop && shapePed && letterPed) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(2)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorCop = false
                                shapePed = false
                                letterPed = false
                            } else if(colorPed && shapeRobber && letterPed) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 6 || decider === 7 || decider === 8) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorPed = false
                                shapeRobber = false
                                letterPed = false
                            } else if(colorPed && shapePed && letterRobber) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 6 || decider === 7 || decider === 8) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorPed = false
                                shapePed = false
                                letterRobber = false
                            } else if(colorRobber && shapePed && letterPed) {
                                const decider = getRandomInt(10)
                                if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 6 || decider === 7 || decider === 8) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(4)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorRobber = false
                                shapePed = false
                                letterPed = false
                            } else if(colorPed && shapePed && letterPed) {
                                const decider = getRandomInt(20)
                                if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8 || decider === 9) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 10 || decider === 11 || decider === 12 || decider === 13 || decider === 14 || decider === 15 || decider === 16 || decider === 17 || decider === 18) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(5)
                                        if(decider === 1) {
                                            answer .text= answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorPed = false
                                shapePed = false
                                letterPed = false
                            } else if(colorPed && shapeCop && letterRobber) {
                                const decider = getRandomInt(9)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 4 || decider === 5 || decider === 6) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorPed = false
                                shapeCop = false
                                letterRobber = false
                            } else if(colorPed && shapeRobber && letterCop) {
                                const decider = getRandomInt(9)
                                if(decider === 1 || decider === 2 || decider === 3) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if(compPed) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                            riskPed = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                        }
    
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
                                } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if(compCop) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                            riskCop = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                        }
                                    }
    
                                    if(compRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Robber.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
                                } else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if(compRobber) {
                                        const decider = getRandomInt(3)
                                        if(decider === 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                            riskRobber = true
                                        } else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                        }
                                    }
    
                                    if(compCop) {
                                        answer.text = answer.text.concat('\n The computer is a Cop.')
                                    }
    
                                    if(compPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                    }
    
                                }
                                colorPed = false
                                shapeRobber = false
                                letterCop = false
                            }


                    } else {
                        if(colorCop && letterCop & shapeCop) {
                            const decider = getRandomInt(20)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(5)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8 || decider === 9 || decider === 10 || decider === 11) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeCop = false
                            letterCop = false
                        } else if(colorCop && shapeCop && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 6 || decider === 7 || decider === 8) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeCop = false
                            letterRobber = false
                        } else if(colorCop && shapeCop && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeCop = false
                            letterPed = false

                        } else if(colorCop && shapeRobber && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 6 || decider === 7 || decider === 8) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeRobber = false
                            letterCop = false
                        } else if(colorCop && shapePed && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapePed = false
                            letterCop = false

                        } else if(colorPed && shapeCop && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeCop = false
                            letterCop = false
                        } else if(colorRobber && shapeCop && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 6 || decider === 7 || decider === 8) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeCop = false
                            letterCop = false

                        } else if(colorCop && shapeRobber && letterPed) {
                            const decider = getRandomInt(9)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeRobber = false
                            letterPed = false
                        } else if(colorCop && shapePed && letterRobber) {
                            const decider = getRandomInt(9)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapePed = false
                            letterRobber = false
                        }

                        if(colorRobber && shapeRobber && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeRobber = false
                            letterCop = false
                        } else if(colorRobber && shapeCop && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeCop = false
                            letterRobber = false
                        } else if(colorCop && letterRobber && shapeRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapeRobber = false
                            letterRobber = false
                        } else if(colorRobber && shapePed && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapePed = false
                            letterRobber = false
                        } else if(colorRobber && shapeRobber && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeRobber = false
                            letterPed = false
                        } else if(colorPed && shapeRobber && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(2)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeRobber = false
                            letterRobber = false
                        } else if (colorRobber && shapeRobber && letterRobber) {
                            const decider = getRandomInt(20)
                            if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8 || decider === 9) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 10 || decider === 11) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(5)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeRobber = false
                            letterRobber = false
                        } else if(colorRobber && shapePed && letterCop) {
                            const decider = getRandomInt(9)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6 ) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapePed = false
                            letterCop = false

                        } else if(colorRobber && shapeCop && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapeCop = false
                            letterPed = false
                        }

                        if(colorPed && colorCop && shapePed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeCop = false
                            letterPed = false
                        } else if(colorPed && shapePed && letterCop) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapePed = false
                            letterCop = false

                        } else if(colorCop && shapePed && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorCop = false
                            shapePed = false
                            letterPed = false
                        } else if(colorPed && shapeRobber && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeRobber = false
                            letterPed = false
                        } else if(colorPed && shapePed && letterRobber) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapePed = false
                            letterRobber = false
                        } else if(colorRobber && shapePed && letterPed) {
                            const decider = getRandomInt(10)
                            if(decider === 1 || decider === 2) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(4)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    console.log(answer)
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorRobber = false
                            shapePed = false
                            letterPed = false
                        } else if(colorPed && shapePed && letterPed) {
                            const decider = getRandomInt(20)
                            if(decider === 1 || decider === 2 || decider === 3 || decider === 4 || decider === 5 || decider === 6 || decider === 7 || decider === 8 || decider === 9) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    console.log(answer)
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 10 || decider === 11 || decider === 12 || decider === 13 || decider === 14 || decider === 15 || decider === 16 || decider === 17 || decider === 18) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(5)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapePed = false
                            letterPed = false
                        } else if(colorPed && shapeCop && letterRobber) {
                            const decider = getRandomInt(9)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 4 || decider === 5 || decider === 6) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeCop = false
                            letterRobber = false
                        } else if(colorPed && shapeRobber && letterCop) {
                            const decider = getRandomInt(9)
                            if(decider === 1 || decider === 2 || decider === 3) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if(compPed) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and wants to report a crime to you')
                                        riskPed = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you')
                                    }

                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }
                            } else if(decider === 3 || decider === 4 || decider === 5 || decider === 6) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if(compCop) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and wants to arrest you')
                                        riskCop = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you')
                                    }
                                }

                                if(compRobber) {
                                    answer.text = answer.text.concat('\n The computer is a Robber.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }
                            } else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if(compRobber) {
                                    const decider = getRandomInt(3)
                                    if(decider === 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and wants to steal your points')
                                        riskRobber = true
                                    } else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')
                                    }
                                }

                                if(compCop) {
                                    answer.text = answer.text.concat('\n The computer is a Cop.')
                                }

                                if(compPed) {
                                    answer.text = answer.text.concat('\n The computer is a Pedestrian.')
                                }

                            }
                            colorPed = false
                            shapeRobber = false
                            letterCop = false
                        }

                    }
                }
                if(playerRole === 'Cop') {
                    if(guessCop && riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. The computers points increase by 1.5 and you gain 15 ')
                        pointsComp = Math.ceil(pointsComp * 1.5)
                        pointsPlayer += 15
                        guessCop = false
                        riskPed = false
                        
                    }

                    if(guessCop && !riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. You both gain 15 ')
                        pointsComp += 15
                        pointsPlayer += 15
                        guessCop = false
                        
                    }

                    if(guessRobber) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer gains 5. You gain 15')
                        pointsComp += 10
                        pointsPlayer += 15
                        guessRobber = false
                    }

                    if(guessPed && riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer loses 75% of his points. You gain 15 points')
                        pointsComp = Math.ceil(pointsComp * 0.25)
                        pointsPlayer += 15
                        guessPed = false
                        riskRobber = false
                        

                    }

                    if(guessPed && !riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer gains 10 points. You gain 15 points')
                        pointsComp += 5
                        pointsPlayer += 15
                        guessPed = false
                        
                    }

                }

                if(playerRole === 'Robber') {
                    if(guessCop && riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You steal half of the computers points.')
                        pointsPlayer += Math.ceil(pointsComp * 0.5)
                        pointsComp = Math.ceil(pointsComp * 0.5)
                        guessCop = false
                        riskPed = false
                        
                        

                    }

                    if(guessCop && !riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You each gain 10 points ')
                        pointsComp += 10
                        pointsPlayer += 10
                        guessCop = false
                        
                    }


                    if(guessRobber && riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. You gain nothing. The computer gains 30 points. ')
                        pointsComp += 30
                        guessRobber = false
                        riskCop = false
                        
                    }

                    if(guessRobber && !riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. The computer gains 15. You gain 10')
                        pointsComp += 15
                        pointsPlayer += 10
                        guessRobber = false
                        

                    }

                    if(guessPed) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You gain 10 points. The computer gains 5 points')
                        pointsComp += 5
                        pointsPlayer += 10
                        guessPed = false
                    }
                    

                }

                if(playerRole === 'Pedestrian') {

                    if(guessCop) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You both gain 5 points')
                        pointsComp += 5
                        pointsPlayer += 5
                        guessCop = false

                    }

                    if(guessRobber && riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You gain nothing. The computer loses 15 points ')
                        pointsComp -= 15
                        guessRobber = false
                        riskCop = false
                    }

                    if(guessRobber && !riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer gains 10 points. You gain 5 points')
                        pointsPlayer += 5
                        pointsComp += 10
                        guessRobber = false

                    }
                    
                    if(guessPed && riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. The computer steals 75% of your points.')
                        pointsComp += Math.ceil(pointsPlayer * 0.75)
                        pointsPlayer = Math.ceil(pointsPlayer * 0.25)
                        guessPed = false
                        riskRobber = false
                        
                    }

                    if(guessPed && !riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. You gain 5 points. The computer gains 15 points')
                        pointsComp += 15
                        pointsPlayer += 5
                        guessPed = false
                    }




                }

                compCop = false
                compRobber = false
                compRobber = false
                

        }

        if(index === 12) {
            const pointmodifier = textNodes.find(t => t.id === 12)
            pointmodifier.text = pointmodifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)
        }
    }
    


        function computerResponseHard(index) {
            if (index == 11) {
                let guessPed = false
                let guessRobber = false
                let guessCop = false
                let numColorLies = 0
                let numShapeLies = 0
                let numLetterLies = 0
                let avgtotalLies = 0
                let maxLiesShape = false
                let maxLiesColor = false
                let maxLiesLetter = false
                let minLiesLetter = false
                let minLiesColor = false
                let minLiesShape = false
                let numCorrectCop = 0
                let numCorrectRobber = 0
                let numCorrectPed = 0
                let numInCorrectCop = 0
                let numInCorrectRobber = 0
                let numInCorrectPed = 0

                const answer = textNodes.find(t => t.id == 11)
                if (turnSender == 0) {
                    const decider = getRandomInt(3)
                    if (decider == 1) {
                        answer.text = answer.text.concat(' a Cop.')
                        guessCop = true
                        if (compPed) {
                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')

                        }

                    } 
                    else if (decider == 2) {
                        answer.text = answer.text.concat(' a Robber.')
                        guessRobber = true
                        if (compCop) {
                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')

                        }
                    }
                    else {
                        answer.text = answer.text.concat(' a Pedestrian.')
                        guessPed = true

                        if (compRobber) {
                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points')

                        }
                    }
                }
                else {
                    for (let i = 0; i < senderHardTracker.length; i++) {
                        if (senderHardTracker[i].colorLie == true) {
                            numColorLies++
                            avgtotalLies++
                        }

                        if (senderHardTracker[i].shapeLie == true) {
                            numShapeLies++
                            avgtotalLies++
                        }

                        if (senderHardTracker[i].letterLie == true) {
                            numLetterLies++
                            avgtotalLies++
                        }

                        if (senderHardTracker[i].answer == 'Cop') {
                            if (senderHardTracker[i].correct == true) {
                                numCorrectCop++
                            }
                            else {
                                numInCorrectCop++
                            }
                        }

                        if (senderHardTracker[i].answer == 'Robber') {
                            if (senderHardTracker[i].correct == true) {
                                numCorrectRobber++
                            }
                            else {
                                numInCorrectRobber++
                            }
                        }

                        if (senderHardTracker[i].answer == 'Pedestrian') {
                            if (senderHardTracker[i].correct == true) {
                                numCorrectPed++
                            }
                            else {
                                numInCorrectPed++
                            }
                        }

                       


                        

                    }

                    avgtotalLies /= senderHardTracker.length

                    if (avgtotalLies < 0.5) {
                        avgtotalLies = 0

                    }
                    else if (avgtotalLies < 1.5) {
                        avgtotalLies = 1
                    }
                    else if (avgtotalLies < 2.5) {
                        avgtotalLies = 2
                    }
                    else {
                        avgtotalLies = 3
                    }
                    

                    if (numColorLies == numShapeLies && numShapeLies == numLetterLies) {
                        const decider = getRandomInt(3)
                        if (decider == 1) {
                            if (avgtotalLies == 2) {
                                minLiesColor = true

                            }
                            maxLiesColor = true
                        }
                        else if (decider == 2) {
                            if (avgtotalLies == 2) {
                                minLiesLetter = true
                            }
                            else {
                                maxLiesLetter = true
                            }
                        }
                        else {
                            if (avgtotalLies == 2) {
                                minLiesShape = true

                            }
                            else {
                                maxLiesShape = true
                            }
                        }
                    
                    }
                    else if (Math.max(numColorLies, numLetterLies, numShapeLies) == numColorLies) {
                        if (numColorLies == numShapeLies) {
                            if (avgtotalLies == 2) {
                                minLiesLetter = true
                            }

                            else {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    maxLiesColor = true
                                }
                                else {
                                    maxLiesShape = true
                                }
                            }
                        }
                        else if (numColorLies == numLetterLies) {
                            if (avgtotalLies == 2) {
                                minLiesShape = true
                            }

                            else {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    maxLiesColor = true
                                }
                                else {
                                    maxLiesShape = true
                                }
                            }

                        }
                        else {
                            if (avgtotalLies == 2) {
                                if (numShapeLies == numLetterLies) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        minLiesLetter = true
                                    }
                                    else {
                                        minLiesShape = true
                                    }
                                }
                                else {
                                    if (numShapeLies > numLetterLies) {
                                        minLiesShape = true
                                    }
                                    else {
                                        minLiesLetter = true
                                    }
                                }
                            }
                            else {
                                maxLiesColor = true
                            }
                        }

                    }
                    else if (Math.max(numColorLies, numLetterLies, numShapeLies) == numShapeLies) {
                        if (numShapeLies == numLetterLies) {
                            if (avgtotalLies == 2) {
                                minLiesColor = true
                            }

                            else {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    maxLiesShape = true
                                }
                                else {
                                    maxLiesLetter = true
                                }
                            }
                        }
                        else {
                            if (avgtotalLies == 2) {
                                if (numColorLies == numLetterLies) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        minLiesLetter = true
                                    }
                                    else {
                                        minLiesColor = true
                                    }
                                }
                                else {
                                    if (numColorLies > numLetterLies) {
                                        minLiesLetter = true
                                    }
                                    else {
                                        minLiesColor = true
                                    }
                                }
                            }
                            else {
                                maxLiesShape = true
                            }
                        }
                    }
                    else {
                        if (avgtotalLies == 2) {
                            if (numColorLies == numShapeLies) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    minLiesColor = true
                                }
                                else {
                                    minLiesShape = true
                                }
                            }
                            else {
                                if (numColorLies > numShapeLies) {
                                    minLiesShape = true
                                }
                                else {
                                    minLiesColor = true
                                }
                            }
                        }
                        else {
                            maxLiesColor = true
                        }
                    }
                    
                    
                    
                    

                    if (colorCop && shapePed && letterCop) {
                        if (avgtotalLies < 2) {
                            if (maxLiesColor || maxLiesLetter) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true

                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesColor || minLiesLetter) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true

                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }

                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }

                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true

                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            

                            }
                        }

                        colorCop = false
                        shapePed = false
                        letterCop = false


                    }

                    if (colorCop && shapeRobber && letterCop) {
                        if (avgtotalLies < 2) {
                            if (maxLiesColor || maxLiesLetter) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true

                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesColor || minLiesLetter) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }

                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }

                        }

                        colorCop = false
                        shapeRobber = false
                        letterCop = false


                    }

                    if (colorCop && shapeCop && letterPed) {
                        if (avgtotalLies < 2) {
                            if (maxLiesColor || maxLiesShape) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true

                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesColor || minLiesShape) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true

                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }

                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }

                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true

                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            

                            }
                        }

                        colorCop = false
                        shapeCop = false
                        letterPed = false

                    }

                    if (colorCop && shapeCop && letterRobber) {
                        if (avgtotalLies < 2) {
                            if (maxLiesColor || maxLiesShape) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true

                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesColor || minLiesShape) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }

                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }

                        }

                        colorCop = false
                        shapeRobber = false
                        letterRobber = false
                        

                    }

                    if (colorCop && shapePed && letterPed) {
                        if (avgtotalLies < 2) {
                            if (maxLiesShape || maxLiesLetter) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesLetter || minLiesShape) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }

                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                        }

                        colorCop = false
                        shapePed = false
                        letterPed = false
                        

                    }

                    if (colorCop && shapeRobber && letterRobber) {
                        if (avgtotalLies < 2) {
                            console.log('hi')
                            if (maxLiesShape || maxLiesLetter) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            console.log('hi2')
                            if (minLiesLetter || minLiesShape) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }

                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }

                        }
                        else {
                            console.log('hi3')
                            answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                        }
                        colorCop = false
                        shapeRobber = false
                        letterRobber = false

                    }

                    if (colorCop && letterPed && shapeRobber) {
                    
                        if (minLiesColor) {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }

                        }
                        else if (minLiesShape) {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true
                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            

                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                        }

                        colorCop = false
                        shapeRobber = false
                        letterPed = false
                            
                    }

                    if (colorRobber && shapeCop && letterPed) {
                        if (minLiesColor) {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true
                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            

                            }
                            
                            

                        }
                        else if (minLiesShape) {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                        }
                        colorRobber = false
                        shapeCop = false
                        letterPed = false
                            

                    }

                    if (colorRobber && shapePed && letterCop) {
                        if (minLiesColor) {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true
                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            

                            }
                            
                            

                        }
                        else if (minLiesShape) {
                            answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            

                        }
                        else {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }
                            
                        }

                        colorRobber = false
                        shapePed = false
                        letterCop = false

                    }

                    if (colorCop && letterRobber && shapePed) {
                        if (minLiesColor) {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }

                        }
                        else if (minLiesShape) {
                            answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }

                        }
                        else {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true
                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            

                            }
                            
                        }

                        colorCop = false
                        shapePed = false
                        letterRobber = false

                    }

                    if (colorPed && shapeRobber && letterCop) {
                        if (minLiesColor) {
                            answer.text = answer.text.concat(' a Pedestrian.')
                            guessPed = true
                            if (compRobber) {
                                if (numCorrectPed == numInCorrectPed) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                                else {
                                    numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                            }
                            

                        }
                        else if (minLiesShape) {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true
                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            

                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }
                            
                        }

                        colorPed = false
                        shapeRobber = false
                        letterCop = false
                        
                    }

                    if (colorPed && shapeCop && letterRobber) {
                        if (minLiesColor) {
                            answer.text = answer.text.concat(' a Pedestrian.')
                            guessPed = true
                            if (compRobber) {
                                if (numCorrectPed == numInCorrectPed) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                                else {
                                    numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                            }
                            

                        }
                        else if (minLiesShape) {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }
                            

                        }
                        else {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true
                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            

                            }
                            
                            
                        }
                        colorPed = false
                        shapeCop = false
                        letterRobber = false

                    }

                    if (colorCop && letterCop && shapeCop) {
                        if (avgtotalLies == 0) {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }
                        }
                        else {
                            if (numCorrectPed == numCorrectRobber) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if (compCop) {
                                        if (numCorrectRobber == numInCorrectRobber) {
                                            const decider = getRandomInt(2)
                                            if (decider == 1) {
                                                answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                                riskCop = true
                                                
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                            }
                                        }
                                        else {
                                            numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                            const decider = getRandomInt(100)
                                            if (decider <= numCorrectRobber) {
                                                answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                                riskCop = true
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                            }
                                        }

                                    

                                    }
                                    

                                }
                                else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if (compRobber) {
                                        if (numCorrectPed == numInCorrectPed) {
                                            const decider = getRandomInt(2)
                                            if (decider == 1) {
                                                answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                                riskRobber = true
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                            }
                                        }
                                        else {
                                            numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                            const decider = getRandomInt(100)
                                            if (decider <= numCorrectPed) {
                                                answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                                riskRobber = true
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                            }
                                        }
                                    }

                                }
                            }
                            else if (numCorrectPed > numCorrectRobber) {

                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectRobber) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }

                            }
                        }

                        colorCop = false
                        shapeCop = false
                        letterCop = false
                    }

                    if (colorRobber && letterRobber && shapePed) {
                        if (avgtotalLies < 2) {
                            if (maxLiesColor || maxLiesLetter) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesLetter || minLiesColor) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }

                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }

                        }

                        colorRobber = false
                        shapePed= false
                        letterRobber = false

                    }

                    if (colorRobber && shapePed && letterPed) {
                        if (avgtotalLies < 2) {
                            if (maxLiesLetter || maxLiesShape) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesLetter || minLiesShape) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }

                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }

                        }

                        colorRobber = false
                        shapePed= false
                        letterPed = false

                    }

                    if (colorRobber && shapeCop && letterCop) {
                        if (avgtotalLies < 2) {
                            if (maxLiesLetter || maxLiesShape) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesLetter || minLiesShape) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                                
                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Pedestrian.')
                            guessPed = true
                            if (compRobber) {
                                if (numCorrectPed == numInCorrectPed) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                                else {
                                    numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                            }

                        }

                        colorRobber = false
                        shapeCop= false
                        letterCop = false


                    }

                    if (colorRobber && letterCop && shapeRobber) {
                        if (avgtotalLies < 2) {
                            if (maxLiesColor || maxLiesShape) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesShape || minLiesColor) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                                

                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Pedestrian.')
                            guessPed = true
                            if (compRobber) {
                                if (numCorrectPed == numInCorrectPed) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                                else {
                                    numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                            }

                        }

                        colorRobber = false
                        shapeRobber= false
                        letterCop = false
                        

                    }

                    if (colorRobber && letterRobber && shapeCop) {
                        if (avgtotalLies < 2) {
                            if (maxLiesColor || maxLiesLetter) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesLetter || minLiesColor) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                                

                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Pedestrian.')
                            guessPed = true
                            if (compRobber) {
                                if (numCorrectPed == numInCorrectPed) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                                else {
                                    numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                            }

                        }

                        colorRobber = false
                        shapeCop= false
                        letterRobber = false

                    }

                    if (colorRobber && letterPed && shapeRobber) {
                        if (avgtotalLies < 2) {
                            if (maxLiesColor || maxLiesShape) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesShape || minLiesColor) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                                

                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }

                        }

                        colorRobber = false
                        shapeRobber= false
                        letterPed = false

                    }

                    if (colorRobber && shapeRobber && letterRobber) {
                        if (avgtotalLies == 0) {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true
                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectRobber) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            }
                        }
                        else {
                            if (numCorrectPed == numCorrectCop) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if (compPed) {
                                        if (numCorrectCop == numInCorrectCop) {
                                            const decider = getRandomInt(2)
                                            if (decider == 1) {
                                                answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                                riskPed = true
                                                
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                            }
                                        }
                                        else {
                                            numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                            const decider = getRandomInt(100)
                                            if (decider <= numCorrectCop) {
                                                answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                                riskPed = true
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                            }
                                        }

                                    

                                    }
                                    

                                }
                                else {
                                    answer.text = answer.text.concat(' a Pedestrian.')
                                    guessPed = true
                                    if (compRobber) {
                                        if (numCorrectPed == numInCorrectPed) {
                                            const decider = getRandomInt(2)
                                            if (decider == 1) {
                                                answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                                riskRobber = true
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                            }
                                        }
                                        else {
                                            numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                            const decider = getRandomInt(100)
                                            if (decider <= numCorrectPed) {
                                                answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                                riskRobber = true
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                            }
                                        }
                                    }

                                }
                            }
                            else if (numCorrectPed > numCorrectCop) {

                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectCop) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                

                                }

                            }
                        }

                        colorRobber = false
                        shapeRobber= false
                        letterRobber = false

                    }

                    if (colorPed && shapePed && letterPed) {
                        if (avgtotalLies == 0) {
                            answer.text = answer.text.concat(' a Pedestrian.')
                            guessPed = true
                            if (compRobber) {
                                if (numCorrectPed == numInCorrectPed) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                                else {
                                    numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                    }
                                }
                            }
                        }
                        else {
                            if (numCorrectRobber == numCorrectCop) {
                                const decider = getRandomInt(2)
                                if (decider == 1) {
                                    answer.text = answer.text.concat(' a Cop.')
                                    guessCop = true
                                    if (compPed) {
                                        if (numCorrectCop == numInCorrectCop) {
                                            const decider = getRandomInt(2)
                                            if (decider == 1) {
                                                answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                                riskPed = true
                                                
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                            }
                                        }
                                        else {
                                            numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                            const decider = getRandomInt(100)
                                            if (decider <= numCorrectCop) {
                                                answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                                riskPed = true
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                            }
                                        }

                                    

                                    }
                                    

                                }
                                else {
                                    answer.text = answer.text.concat(' a Robber.')
                                    guessRobber = true
                                    if (compCop) {
                                        if (numCorrectRobber == numInCorrectRobber) {
                                            const decider = getRandomInt(2)
                                            if (decider == 1) {
                                                answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                                riskCop = true
                                                
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                            }
                                        }
                                        else {
                                            numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                            const decider = getRandomInt(100)
                                            if (decider <= numCorrectRobber) {
                                                answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                                riskCop = true
                                            }
                                            else {
                                                answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                            }
                                        }

                                    }

                                }
                            }
                            else if (numCorrectRobber > numCorrectCop) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectRobber) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectCop) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                

                                }

                            }
                        }

                        colorPed = false
                        shapePed= false
                        letterPed = false


                    }

                    if (colorPed && shapeCop && letterCop) {
                        if (avgtotalLies < 2) {
                            if (maxLiesLetter|| maxLiesShape) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesShape || minLiesLetter) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                                

                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }

                        }

                        colorPed = false
                        shapeCop= false
                        letterCop = false

                    }

                    if (colorPed && shapeRobber && letterRobber) {
                        if (avgtotalLies < 2) {
                            if (maxLiesLetter|| maxLiesShape) {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesShape || minLiesLetter) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                                
                                

                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }
                        }

                        colorPed = false
                        shapeRobber= false
                        letterRobber = false

                    }

                    if (colorPed && letterPed && shapeRobber) {
                        if (avgtotalLies < 2) {
                            if (maxLiesLetter|| maxLiesColor) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesColor || minLiesLetter) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                                
                                

                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }
                        }

                        colorPed = false
                        shapeRobber= false
                        letterPed = false

                    }

                    if (colorPed && letterRobber && shapePed) {
                        if (avgtotalLies < 2) {
                            if (maxLiesShape|| maxLiesColor) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesColor || minLiesShape) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                                
                                

                            }
                            else {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Cop.')
                            guessCop = true
                            if (compPed) {
                                if (numCorrectCop == numInCorrectCop) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskPed = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }
                                else {
                                    numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                        riskRobber = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                    }
                                }

                            }
                        }

                        colorPed = false
                        shapePed= false
                        letterRobber = false


                    }

                    if (colorPed && shapeCop && letterPed) {
                        if (avgtotalLies < 2) {
                            if (maxLiesLetter|| maxLiesColor) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesColor || minLiesLetter) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                                
                                

                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true
                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            

                            }
                        }

                        colorPed = false
                        shapeCop= false
                        letterPed = false


                    }

                    if (colorPed && shapePed && letterCop) {
                        if (avgtotalLies < 2) {
                            if (maxLiesShape|| maxLiesColor) {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }
                            else {
                                answer.text = answer.text.concat(' a Pedestrian.')
                                guessPed = true
                                if (compRobber) {
                                    if (numCorrectPed == numInCorrectPed) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                    else {
                                        numCorrectPed = Math.ceil(((numCorrectPed)/(numInCorrectPed + numCorrectPed)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Robber and it wants to steal your points.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Robber but doesnt want to steal your points.')
                                        }
                                    }
                                }
                            }
                            
                            
                        }
                        else if (avgtotalLies == 2) {
                            if (minLiesColor || minLiesShape) {
                                answer.text = answer.text.concat(' a Robber.')
                                guessRobber = true
                                if (compCop) {
                                    if (numCorrectRobber == numInCorrectRobber) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }
                                    else {
                                        numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                            riskCop = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                        }
                                    }

                                

                                }
                                
                                

                            }
                            else {
                                answer.text = answer.text.concat(' a Cop.')
                                guessCop = true
                                if (compPed) {
                                    if (numCorrectCop == numInCorrectCop) {
                                        const decider = getRandomInt(2)
                                        if (decider == 1) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskPed = true
                                            
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }
                                    else {
                                        numCorrectCop = Math.ceil(((numCorrectCop)/(numInCorrectCop + numCorrectCop)) * 100)
                                        const decider = getRandomInt(100)
                                        if (decider <= numCorrectPed) {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian and it wants to report a crime to you.')
                                            riskRobber = true
                                        }
                                        else {
                                            answer.text = answer.text.concat('\n The computer is a Pedestrian but doesnt want to report a crime to you.')
                                        }
                                    }

                                }
                            }

                        }
                        else {
                            answer.text = answer.text.concat(' a Robber.')
                            guessRobber = true
                            if (compCop) {
                                if (numCorrectRobber == numInCorrectRobber) {
                                    const decider = getRandomInt(2)
                                    if (decider == 1) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                        
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }
                                else {
                                    numCorrectRobber = Math.ceil(((numCorrectRobber)/(numInCorrectRobber + numCorrectRobber)) * 100)
                                    const decider = getRandomInt(100)
                                    if (decider <= numCorrectPed) {
                                        answer.text = answer.text.concat('\n The computer is a Cop and it wants to arrest you.')
                                        riskCop = true
                                    }
                                    else {
                                        answer.text = answer.text.concat('\n The computer is a Cop but doesnt want to arrest you.')
                                    }
                                }

                            

                            }
                        }

                        colorPed = false
                        shapePed= false
                        letterCop = false

                    }
                }

                if(playerRole === 'Cop') {
                    if(guessCop && riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. The computers points increase by 1.5 and you gain 15 ')
                        pointsComp = Math.ceil(pointsComp * 1.5)
                        pointsPlayer += 15
                        guessCop = false
                        riskPed = false
                        if (turnSender == 0) {
                            senderHardTracker[0].correct = true
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Cop'

                        }
                        else {
                            let results = {
                                correct: true,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Cop'


                            }
                            
                            senderHardTracker.push(results)
                        }
                        
                    }

                    if(guessCop && !riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. You both gain 15 ')
                        pointsComp += 15
                        pointsPlayer += 15
                        guessCop = false
                        if (turnSender == 0) {
                            senderHardTracker[0].correct = true
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Cop'

                        }
                        else {
                            let results = {
                                correct: true,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Cop'


                            }
                            
                            senderHardTracker.push(results)
                        }
                        
                    }

                    if(guessRobber) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer gains 5. You gain 15')
                        pointsComp += 10
                        pointsPlayer += 15
                        guessRobber = false
                        if (turnSender == 0) {
                            senderHardTracker[0].correct = false
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Robber'

                        }
                        else {
                            let results = {
                                correct: false,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Robber'


                            }
                            
                            senderHardTracker.push(results)
                        }
                    }

                    if(guessPed && riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer loses 75% of his points. You gain 15 points')
                        pointsComp = Math.ceil(pointsComp * 0.25)
                        pointsPlayer += 15
                        guessPed = false
                        riskRobber = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = false
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Pedestrian'

                        }
                        else {
                            let results = {
                                correct: false,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Pedestrian'


                            }
                            
                            senderHardTracker.push(results)
                        }
                        

                    }

                    if(guessPed && !riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer gains 10 points. You gain 15 points')
                        pointsComp += 5
                        pointsPlayer += 15
                        guessPed = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = false
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Pedestrian'

                        }
                        else {
                            let results = {
                                correct: false,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Pedestrian'


                            }
                            
                            senderHardTracker.push(results)
                        }
                        
                    }

                }

                if(playerRole === 'Robber') {
                    if(guessCop && riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You steal half of the computers points.')
                        pointsPlayer += Math.ceil(pointsComp * 0.5)
                        pointsComp = Math.ceil(pointsComp * 0.5)
                        guessCop = false
                        riskPed = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = false
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Cop'

                        }
                        else {
                            let results = {
                                correct: false,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Cop'


                            }
                            
                            senderHardTracker.push(results)
                        }
                        
                        

                    }

                    if(guessCop && !riskPed) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You each gain 10 points ')
                        pointsComp += 10
                        pointsPlayer += 10
                        guessCop = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = false
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Cop'

                        }
                        else {
                            let results = {
                                correct: false,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Cop'


                            }
                            
                            senderHardTracker.push(results)
                        }
                        
                    }


                    if(guessRobber && riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. You gain nothing. The computer gains 30 points. ')
                        pointsComp += 30
                        guessRobber = false
                        riskCop = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = true
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Robber'

                        }
                        else {
                            let results = {
                                correct: true,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Robber'


                            }
                            
                            senderHardTracker.push(results)
                        }
                        
                    }

                    if(guessRobber && !riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. The computer gains 15. You gain 10')
                        pointsComp += 15
                        pointsPlayer += 10
                        guessRobber = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = true
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Robber'

                        }
                        else {
                            let results = {
                                correct: true,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Robber'


                            }
                            
                            senderHardTracker.push(results)
                        }

                        

                    }

                    if(guessPed) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You gain 10 points. The computer gains 5 points')
                        pointsComp += 5
                        pointsPlayer += 10
                        guessPed = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = false
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Pedestrian'

                        }
                        else {
                            let results = {
                                correct: false,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Pedestrian'


                            }
                            
                            senderHardTracker.push(results)
                        }
                    }
                    

                }

                if(playerRole === 'Pedestrian') {

                    if(guessCop) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You both gain 5 points')
                        pointsComp += 5
                        pointsPlayer += 5
                        guessCop = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = false
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Cop'

                        }
                        else {
                            let results = {
                                correct: false,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Cop'


                            }
                            
                            senderHardTracker.push(results)
                        }

                    }

                    if(guessRobber && riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. You gain nothing. The computer loses 15 points ')
                        pointsComp -= 15
                        guessRobber = false
                        riskCop = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = false
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Robber'

                        }
                        else {
                            let results = {
                                correct: false,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Robber'


                            }
                            
                            senderHardTracker.push(results)
                        }
                    }

                    if(guessRobber && !riskCop) {
                        answer.text = answer.text.concat('\n The computer guessed incorrectly. The computer gains 10 points. You gain 5 points')
                        pointsPlayer += 5
                        pointsComp += 10
                        guessRobber = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = false
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Robber'

                        }
                        else {
                            let results = {
                                correct: false,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Robber'


                            }
                            
                            senderHardTracker.push(results)
                        }

                    }
                    
                    if(guessPed && riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. The computer steals 75% of your points.')
                        pointsComp += Math.ceil(pointsPlayer * 0.75)
                        pointsPlayer = Math.ceil(pointsPlayer * 0.25)
                        guessPed = false
                        riskRobber = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = true
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Pedestrian'

                        }
                        else {
                            let results = {
                                correct: true,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Pedestrian'


                            }
                            
                            senderHardTracker.push(results)
                        }
                        
                    }

                    if(guessPed && !riskRobber) {
                        answer.text = answer.text.concat('\n The computer guessed correctly. You gain 5 points. The computer gains 15 points')
                        pointsComp += 15
                        pointsPlayer += 5
                        guessPed = false

                        if (turnSender == 0) {
                            senderHardTracker[0].correct = true
                            senderHardTracker[0].colorLie = lieColor
                            senderHardTracker[0].shapeLie = lieShape
                            senderHardTracker[0].letterLie = lieSymbol
                            senderHardTracker[0].answer = 'Pedestrian'

                        }
                        else {
                            let results = {
                                correct: true,
                                colorLie: lieColor,
                                shapeLie: lieShape,
                                letterLie: lieSymbol,
                                answer: 'Pedestrian'


                            }
                            
                            senderHardTracker.push(results)
                        }
                    }




                }

                compCop = false
                compRobber = false
                compRobber = false
                
            }

            if(index === 12) {
                const pointmodifier = textNodes.find(t => t.id === 12)
                pointmodifier.text = pointmodifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)
            }
 
        }

        
    

        const textNodes = [
            {
                id: 1,
                text: 'You and the computer will be playing a game of cops and robbers, with an added role of a pedestrian.',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 2
                    }
                ]
            },
            {
                id: 2,
                text: 'Choose Computer Difficulty',
                options: [
                    {
                        text: 'Easy',
                        nextText: 3
                    },
                    {
                        text: 'Medium',
                        nextText: 4
                    },
                    {
                        text: 'Hard',
                        nextText: 5
                    }
                ]
                
            },
            {
                id: 3,
                text: 'Choose Role',
                options: [
                    {
                        text: 'Sender',
                        nextText: 6
                    },
                    {
                        text: 'Receiver',
                        nextText: 7
                    }
                ]
                
            },
            {
                id: 4,
                text: 'Choose Role',
                options: [
                    {
                        text: 'Sender',
                        nextText: 6
                    },
                    {
                        text: 'Receiver',
                        nextText: 7
                    }
                ]
    
            },
            {
                id: 5,
                text: 'Choose Role',
                options: [
                    {
                        text: 'Sender',
                        nextText: 6
                    },
                    {
                        text: 'Receiver',
                        nextText: 7
                    }
                ]
            },
            {
                id: 6,
                text: 'Your position is ',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 8
                    }
                ]
    
            },
            {
                id: 7,
                text: 'The computer is randomly given a position. It will give you descriptions of the position. Your position is ',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 13
                    }
                ]
    
            },
            {
                id: 8,
                text: 'What color is your position?',
                options: [
                    {
                        text: 'Blue',
                        nextText: 9
                    },
                    {
                        text: 'Black',
                        nextText: 9
                    },
                    {
                        text: 'White',
                        nextText: 9
                    }
                ]
            },
            {
                id: 9,
                text: 'What shape is your position?',
                options: [
                    {
                        text: 'Circle',
                        nextText: 10
                    },
                    {
                        text: 'Triangle',
                        nextText: 10
                    },
                    {
                        text: 'Square',
                        nextText: 10
                    },
                ]
            },
            {
                id: 10,
                text: 'What letter is your position?',
                options: [
                    {
                        text: 'C',
                        nextText: 11
                    },
                    {
                        text: 'R',
                        nextText: 11
                    },
                    {
                        text: 'P',
                        nextText: 11
                    }
                ]
            },
            {
                id: 11,
                text: 'The computer guessed that your position is',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 12
                    }
                ]
            },
            {
                id: 12,
                text: 'Point totals: \n',
                options: [
                    {
                        text: 'Next turn',
                        nextText: 6
                    }
    
                ]
            },
            {
                id: 13,
                text: 'The computer said that its position color was ',
                options: [
                    {
                        text: 'Next hint',
                        nextText: 14
                    }
                ]
            },
            {
                id: 14,
                text: 'The computer said that its position shape was',
                options: [
                    {
                        text: 'Next hint',
                        nextText: 15
                    }
                ]
            },
            {
                id: 15,
                text: 'The computer said that its position symbol was',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 16
                    }
                ]
            },
            {
                id: 16,
                text: 'What position do you think the computer had?',
                options: [
                    {
                        text: 'Cop',
                        nextText: 17
                    },
                    {
                        text: 'Robber',
                        nextText: 17
                    },
                    {
                        text: 'Pedestrian',
                        nextText: 17
                    }
                ]
            },
            {
                id: 17,
                text: 'Since you are a ',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 18
                    }
                ]
            },
            {
                id: 18,
                text: 'You guessed',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 19
                    }
                ]
            },
            {
                id: 19,
                text: 'Point totals: \n',
                options: [
                    {
                        text: 'Next turn',
                        nextText: 7
                    }
    
                ]
    
            },
            {
                id: 20,
                text: 'Start Over?',
                options: [
                    {
                        text: 'Yes',
                        nextText: 1
                    }
                ]
            }

        ]
        
        startGame()
    })

        return(
            <div className = 'container'>
                <div ref = {textElement} >Text</div>
                <div ref = {optionButtonsElement} className = 'btn-grid'>
                    <button class = 'btn'> Option 1</button>
                    <button class = 'btn'> Option 2</button>
                </div>
                <Goback>
                </Goback>

                
            </div>
        )
}

export default Game2