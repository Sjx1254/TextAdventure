import { useRef, useEffect} from 'react';
import Goback from '/Users/sjohari2/launch2/src/Games/Goback.js'

const Game3 = () => {
    const textElement = useRef()
    const optionButtonsElement = useRef()
    
    

    useEffect(() => {
        let playerPoints = 25
        let compPoints = 25
        let currentType = ''
        let currentEvilInt = 0
        let currentEvilInt2 = 0
        let currentEvilInt3 = 0
        let currentEvilInt4 = 0
        let currentEvilInt5 = 0
        let numEvilInts = 0
        let state2 = {}
        let numTracker = []
        let playerTracker = [
            {
                pointGain: 0,
                numRolls: 0
            }
        ]
        let computerTracker = [
            {
                pointGain: 0,
                numRolls: 0
            }
        ]
        let turnCount = 1
        let numCompRolls = 0
        
        let expectedValuerollTracker = []


        function startGame() {
            state2 = {}
            showTextNode(1)
            

        }

        

        function showTextNode(textNodeIndex) {
            if(textNodeIndex == 2) {
                const addType = textNodes.find(textNode => textNode.id == 2)
                currentType = getRandomType()
                numEvilInts = getRandomInt(5)
                switch(numEvilInts) {
                    case 1:
                        currentEvilInt = getRandomIntType(currentType)
                        addType.text = addType.text.concat(currentType + "\n" + "The current evil int(s) are " 
                                                    + currentEvilInt)
                        break
                    case 2:
                        currentEvilInt = getRandomIntType(currentType)
                        currentEvilInt2 = getRandomIntType(currentType)
                        addType.text = addType.text.concat(currentType + "\n" + "The current evil int(s) are " 
                                                    + currentEvilInt + " and " + currentEvilInt2)
                        break
                    case 3:
                        currentEvilInt = getRandomIntType(currentType)
                        currentEvilInt2 = getRandomIntType(currentType)
                        currentEvilInt3 = getRandomIntType(currentType)
                        addType.text = addType.text.concat(currentType + "\n" + "The current evil int(s) are " 
                                                    + currentEvilInt + ", " + currentEvilInt2 + ", and " + currentEvilInt3)
                        break
                    case 4:
                        currentEvilInt = getRandomIntType(currentType)
                        currentEvilInt2 = getRandomIntType(currentType)
                        currentEvilInt3 = getRandomIntType(currentType)
                        currentEvilInt4 = getRandomIntType(currentType)
                        addType.text = addType.text.concat(currentType + "\n" + "The current evil int(s) are " 
                                                    + currentEvilInt + ",  " + currentEvilInt2 + ", " + currentEvilInt3 + ", and " + currentEvilInt4)
                        break
                    case 5:
                        currentEvilInt = getRandomIntType(currentType)
                        currentEvilInt2 = getRandomIntType(currentType)
                        currentEvilInt3 = getRandomIntType(currentType)
                        currentEvilInt4 = getRandomIntType(currentType)
                        currentEvilInt5 = getRandomIntType(currentType)
                        addType.text = addType.text.concat(currentType + "\n" + "The current evil int(s) are " 
                                                    + currentEvilInt + ", " + currentEvilInt2 + ", " + currentEvilInt3 + ", " + currentEvilInt4 + ", and " + currentEvilInt5)
                        break
                }
                for(let i = 0; i < numTracker.length; i++) {
                    numTracker[i] = 0;
                }
                
                
            }

            if (textNodeIndex == 5) {
                computerDecider()
            }

            if (textNodeIndex == 6) {
                computerRoller(numCompRolls)

                if (turnCount == 10) {
                    const goToFinal = textNodes.find(t => t.id == 6)
                    goToFinal.options[0].nextText = 9
                    
                }
            }

            if (textNodeIndex == 7) {
                const pointDisplay = textNodes.find(t => t.id == 7)
                pointDisplay.text = pointDisplay.text.concat("\n Player Points: " + playerPoints + "\n Computer Points: " + compPoints)

            }

            if (textNodeIndex == 8) {
                turnCount++
                const turn = textNodes.find(t => t.id == 8)
                turn.text = 'Turn ' + turnCount
                numEvilInts = 0
                currentEvilInt = 0
                currentEvilInt2 = 0
                currentEvilInt3 = 0
                currentEvilInt4 = 0
                currentEvilInt5 = 0
                numCompRolls = 0
                

                const revertInts = textNodes.find(t => t.id == 2) 
                revertInts.text = 'The evil type this round is '

                const revertRoll = textNodes.find(t => t.id == 4)
                revertRoll.text = 'Results of your roll(s): '

                const revertCompRoll = textNodes.find(t => t.id == 5)
                revertCompRoll.text = 'It is now the computers turn to roll '

                const revertCompResults = textNodes.find(t => t.id == 6)
                revertCompResults.text = 'Results of computer roll(s): '

                const revertPoint = textNodes.find(t => t.id == 7)
                revertPoint.text = 'Current points: '
                






            }

            if (textNodeIndex == 9) {
                const end = textNodes.find(t => t.id == 9)
                end.text = end.text.concat("\n Player Points: " + playerPoints + "\n Computer Points: " + compPoints)

                if (playerPoints > compPoints) {
                    end.text = end.text.concat("\n Congrats. You win!")
                } else if (playerPoints < compPoints) {
                    end.text = end.text.concat("\n Unfortunately, you have lost!")
                } else {
                    end.text = end.text.concat("\n The game has ended in a tie!")
                }

                playerPoints = 25
                compPoints = 25
                numCompRolls = 0
                currentEvilInt = 0
                currentEvilInt2 = 0
                currentEvilInt3 = 0
                currentEvilInt4 = 0
                currentEvilInt5 = 0
                numEvilInts = 0
                turnCount = 1

                for(let i = 0; i < playerTracker.length - 1; i++) {
                    playerTracker.pop()
                    computerTracker.pop()
                }

                playerTracker[0].pointGain = 0
                playerTracker[0].numRolls = 0

                computerTracker[0].pointGain = 0
                playerTracker[0].numRolls = 0

                for(let z = 0; z < expectedValuerollTracker.length; z++) {
                    expectedValuerollTracker.pop()
                }

                
                

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
                    if(textNodeIndex == 3) {
                        button.addEventListener('click', () => playerRoller(option.text))
                    }
                    button.addEventListener('click', () => selectOption(option.nextText))
                    optionButtonsElement.current.appendChild(button)
                }
            })

            
        }

        function showOption(option) {
            return option.requiredState == null || option.requiredState(state2)
        }


        function selectOption(option) {
            const nextTextNodeId = option
            if (nextTextNodeId <= 0) {
                return startGame()
            }
            state2 = Object.assign(state2, option.setState)
            showTextNode(nextTextNodeId)

        }

        function curType(int) {
            if(int % 2 == 0) {
                if(int == currentEvilInt || int == currentEvilInt2 || int == currentEvilInt3 || int == currentEvilInt4 || int == currentEvilInt5) {
                    return 'odd'
                }
                return 'even'
            } else {
                if(int == currentEvilInt || int == currentEvilInt2 || int == currentEvilInt3 || int == currentEvilInt4 || int == currentEvilInt5) {
                    return 'even'
                }
            }
            return 'odd'
        }


        function computerDecider() {
            numCompRolls = 0
            let sumPlayerPoints = 0
            let sumCompPoints = 0
            let avgPointsGainedPlayer = 0
            let numD = 0
            let avgCompRolls = 0
            for(let i = 0; i < playerTracker.length; i++) {
                sumPlayerPoints += playerTracker[i].pointGain
            }
            for(let z = 0; z < computerTracker.length; z++) {
                sumCompPoints += computerTracker[z].pointGain
                avgCompRolls += computerTracker[z].numRolls

            }
            avgPointsGainedPlayer = (sumPlayerPoints - sumCompPoints)/playerTracker.length
            avgCompRolls /= computerTracker.length
            if (currentType == 'odd') {
                switch(numEvilInts) {
                    case 1:
                        if (avgPointsGainedPlayer = 0) {
                            if (turnCount == 1) {
                                switch(getRandomInt(5)) {
                                    case 1:
                                        numCompRolls = 1
                                        break
                                    case 2:
                                        numCompRolls = 2
                                        break
                                    case 3:
                                        numCompRolls = 3
                                        break
                                    case 4:
                                        numCompRolls = 4
                                        break
                                    case 5:
                                        numCompRolls = 5
                                        break
                                    
                                }
                            } else {
                                numCompRolls = Math.ceil(avgCompRolls)
                                break
                            }  

                        } else {
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    expectedValuerollTracker[i] = (3 * 0.51 + -3 * 0.49) * 2
                                    continue
                                }
                                expectedValuerollTracker[i + 1] = expectedValuerollTracker[i] + ((3 + 2 * i) * 0.51 + (-1) * (3 + 2 * i) * 0.49) * 2
                            }
                            for (let j = 0; j < expectedValuerollTracker.length; j++) {
                                if (avgPointsGainedPlayer > 0) {
                                    if (expectedValuerollTracker[j] >= avgPointsGainedPlayer * (0.51/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                } else {
                                    if (expectedValuerollTracker[j] <= (-1) * avgPointsGainedPlayer * (0.51/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }
                                
                            }
                            if (numCompRolls == 0) {
                                const choose = getRandomInt(100)
                                if (choose <= 4) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 5
                                    } else {
                                        numCompRolls = 1
                                    }
                                } else if (choose <= 13) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 4
                                    } else {
                                        numCompRolls = 2
                                    }
                                } else if (choose <= 31) {
                                    numCompRolls = 3
                                } else if (choose <= 59) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 2
                                    } else {
                                        numCompRolls = 4
                                    }
                                } else {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 1
                                    } else {
                                        numCompRolls = 5
                                    }
                                }
                            }
                            
                            
                        

                        }
                        break 
                    case 2:
                        if (avgPointsGainedPlayer == 0) {
                            if (turnCount == 1) {
                                switch(getRandomInt(5)) {
                                    case 1:
                                        numCompRolls = 1
                                        break
                                    case 2:
                                        numCompRolls = 2
                                        break
                                    case 3:
                                        numCompRolls = 3
                                        break
                                    case 4:
                                        numCompRolls = 4
                                        break
                                    case 5:
                                        numCompRolls = 5
                                        break
                                    
                                }
                            } else {
                                numCompRolls = Math.ceil(avgCompRolls)
                                break
                            }
                        } else {
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    expectedValuerollTracker[i] = (3 * 0.54 + -3 * 0.46) * 2
                                    continue
                                }
                                expectedValuerollTracker[i + 1] = expectedValuerollTracker[i] + ((3 + 2 * i) * 0.54 + (-1) * (3 + 2 * i) * 0.46) * 2
                            }
                            for (let j = 0; j < expectedValuerollTracker.length; j++) {
                                if (avgPointsGainedPlayer > 0) {
                                    if (expectedValuerollTracker[j] >= avgPointsGainedPlayer * (0.54/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                } else {
                                    if (expectedValuerollTracker[j] <= (-1) * avgPointsGainedPlayer * (0.54/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }
                                
                            }
                            if (numCompRolls == 0) {
                                const choose = getRandomInt(100)
                                if (choose <= 4) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 5
                                    } else {
                                        numCompRolls = 1
                                    }
                                } else if (choose <= 13) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 4
                                    } else {
                                        numCompRolls = 2
                                    }
                                } else if (choose <= 31) {
                                    numCompRolls = 3
                                } else if (choose <= 59) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 2
                                    } else {
                                        numCompRolls = 4
                                    }
                                } else {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 1
                                    } else {
                                        numCompRolls = 5
                                    }
                                }
                            }
                            

                        }
                        break
                    case 3:
                        if (avgPointsGainedPlayer == 0) {
                            if (turnCount == 1) {
                                switch(getRandomInt(5)) {
                                    case 1:
                                        numCompRolls = 1
                                        break
                                    case 2:
                                        numCompRolls = 2
                                        break
                                    case 3:
                                        numCompRolls = 3
                                        break
                                    case 4:
                                        numCompRolls = 4
                                        break
                                    case 5:
                                        numCompRolls = 5
                                        break
                                    
                                }
                            } else {
                                numCompRolls = Math.ceil(avgCompRolls)
                                break
                            }
                        } else {
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    expectedValuerollTracker[i] = (3 * 0.59 + -3 * 0.41) * 2
                                    continue
                                }
                                expectedValuerollTracker[i + 1] = expectedValuerollTracker[i] + ((3 + 2 * i) * 0.59 + (-1) * (3 + 2 * i) * 0.41) * 2
                            }
                            for (let j = 0; j < expectedValuerollTracker.length; j++) {
                                if (avgPointsGainedPlayer > 0) {
                                    if (expectedValuerollTracker[j] >= avgPointsGainedPlayer * (0.59/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                } else {
                                    if (expectedValuerollTracker[j] <= (-1) * avgPointsGainedPlayer * (0.59/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }
                                
                            }
                            if (numCompRolls == 0) {
                                const choose = getRandomInt(100)
                                if (choose <= 4) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 5
                                    } else {
                                        numCompRolls = 1
                                    }
                                } else if (choose <= 13) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 4
                                    } else {
                                        numCompRolls = 2
                                    }
                                } else if (choose <= 31) {
                                    numCompRolls = 3
                                } else if (choose <= 59) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 2
                                    } else {
                                        numCompRolls = 4
                                    }
                                } else {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 1
                                    } else {
                                        numCompRolls = 5
                                    }
                                }
                            }
                            

                        }
                        break
                    case 4:
                        if (avgPointsGainedPlayer == 0) {
                            if (turnCount == 1) {
                                switch(getRandomInt(5)) {
                                    case 1:
                                        numCompRolls = 1
                                        break
                                    case 2:
                                        numCompRolls = 2
                                        break
                                    case 3:
                                        numCompRolls = 3
                                        break
                                    case 4:
                                        numCompRolls = 4
                                        break
                                    case 5:
                                        numCompRolls = 5
                                        break
                                    
                                }
                            } else {
                                numCompRolls = Math.ceil(avgCompRolls)
                                break
                            }
                        } else {
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    expectedValuerollTracker[i] = (3 * 0.66 + -3 * 0.34) * 2
                                    continue
                                }
                                expectedValuerollTracker[i + 1] = expectedValuerollTracker[i] + ((3 + 2 * i) * 0.66 + (-1) * (3 + 2 * i) * 0.34) * 2
                            }
                            for (let j = 0; j < expectedValuerollTracker.length; j++) {
                                if (avgPointsGainedPlayer > 0) {
                                    if (expectedValuerollTracker[j] >= avgPointsGainedPlayer * (0.66/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                } else {
                                    if (expectedValuerollTracker[j] <= (-1) * avgPointsGainedPlayer * (0.66/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }
                                
                            }
                            if (numCompRolls == 0) {
                                const choose = getRandomInt(100)
                                if (choose <= 4) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 5
                                    } else {
                                        numCompRolls = 1
                                    }
                                } else if (choose <= 13) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 4
                                    } else {
                                        numCompRolls = 2
                                    }
                                } else if (choose <= 31) {
                                    numCompRolls = 3
                                } else if (choose <= 59) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 2
                                    } else {
                                        numCompRolls = 4
                                    }
                                } else {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 1
                                    } else {
                                        numCompRolls = 5
                                    }
                                }
                            }
                            

                        }
                        break
                    case 5:
                        if (avgPointsGainedPlayer == 0) {
                            if (turnCount == 1) {
                                switch(getRandomInt(5)) {
                                    case 1:
                                        numCompRolls = 1
                                        break
                                    case 2:
                                        numCompRolls = 2
                                        break
                                    case 3:
                                        numCompRolls = 3
                                        break
                                    case 4:
                                        numCompRolls = 4
                                        break
                                    case 5:
                                        numCompRolls = 5
                                        break
                                    
                                }
                            } else {
                                numCompRolls = Math.ceil(avgCompRolls)
                                break
                            }
                        } else {
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    expectedValuerollTracker[i] = (3 * 0.76 + -3 * 0.24) * 2
                                    continue
                                }
                                expectedValuerollTracker[i + 1] = expectedValuerollTracker[i] + ((3 + 2 * i) * 0.76 + (-1) * (3 + 2 * i) * 0.24) * 2
                            }
                            for (let j = 0; j < expectedValuerollTracker.length; j++) {
                                if (avgPointsGainedPlayer > 0) {
                                    if (expectedValuerollTracker[j] >= avgPointsGainedPlayer * (0.76/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                } else {
                                    if (expectedValuerollTracker[j] <= (-1) * avgPointsGainedPlayer * (0.76/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }
                                
                            }
                            if (numCompRolls == 0) {
                                const choose = getRandomInt(100)
                                if (choose <= 4) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 5
                                    } else {
                                        numCompRolls = 1
                                    }
                                } else if (choose <= 13) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 4
                                    } else {
                                        numCompRolls = 2
                                    }
                                } else if (choose <= 31) {
                                    numCompRolls = 3
                                } else if (choose <= 59) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 2
                                    } else {
                                        numCompRolls = 4
                                    }
                                } else {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 1
                                    } else {
                                        numCompRolls = 5
                                    }
                                }
                            }
                            

                        }
                        break
                    



                

                }
                

            } else {
                switch(numEvilInts) {
                    case 1:
                        if (avgPointsGainedPlayer == 0) {
                            if (turnCount == 1) {
                                switch(getRandomInt(5)) {
                                    case 1:
                                        numCompRolls = 1
                                        break
                                    case 2:
                                        numCompRolls = 2
                                        break
                                    case 3:
                                        numCompRolls = 3
                                        break
                                    case 4:
                                        numCompRolls = 4
                                        break
                                    case 5:
                                        numCompRolls = 5
                                        break
                                    
                                }
                            } else {
                                numCompRolls = Math.ceil(avgCompRolls * 0.49/0.5)
                                break
                            }  

                            

                        } else {
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    expectedValuerollTracker[i] = (3 * 0.49 + -3 * 0.51) * 2
                                    continue
                                }
                                expectedValuerollTracker[i + 1] = expectedValuerollTracker[i] + ((3 + 2 * i) * 0.49 + (-1) * (3 + 2 * i) * 0.51) * 2
                            }
                            for (let j = 0; j < expectedValuerollTracker.length; j++) {
                                if (avgPointsGainedPlayer > 0) {
                                    if (expectedValuerollTracker[j] <= (-1) * avgPointsGainedPlayer * (0.49/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }  else {
                                    if (expectedValuerollTracker[j] >= avgPointsGainedPlayer * (0.49/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }
                                
                            }
                            if (numCompRolls == 0) {
                                const choose = getRandomInt(100)
                                if (choose <= 4) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 1
                                    } else {
                                        numCompRolls = 5
                                    }
                                } else if (choose <= 13) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 2
                                    } else {
                                        numCompRolls = 4
                                    }
                                } else if (choose <= 31) {
                                    numCompRolls = 3
                                } else if (choose <= 59) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 4
                                    } else {
                                        numCompRolls = 2
                                    }
                                } else {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 5
                                    } else {
                                        numCompRolls = 1
                                    }
                                }
                            }
                            
                            
                        

                        }
                        break 
                    case 2:
                        if (avgPointsGainedPlayer == 0) {
                            if (computerTracker[1] == undefined) {
                                switch(getRandomInt(25)) {
                                    case 1,2,3,4,5,6,7:
                                        numCompRolls = 1
                                        break
                                    case 8,9,10,11,12,13:
                                        numCompRolls = 2
                                        break
                                    case 14,15,16,17,18:
                                        numCompRolls = 3
                                        break
                                    case 19,20,21,22:
                                        numCompRolls = 4
                                        break
                                    case 23,25,24:
                                        numCompRolls = 5
                                        break
                                    
                                }
                            } else {
                                numCompRolls = Math.ceil(avgCompRolls * 0.46/0.5)
                                break
                            }
                        } else {
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    expectedValuerollTracker[i] = (3 * 0.46 + -3 * 0.54) * 2
                                    continue
                                }
                                expectedValuerollTracker[i + 1] = expectedValuerollTracker[i] + ((3 + 2 * i) * 0.54 + (-1) * (3 + 2 * i) * 0.46) * 2
                            }
                            for (let j = 0; j < expectedValuerollTracker.length; j++) {
                                if (avgPointsGainedPlayer > 0) {
                                    if (expectedValuerollTracker[j] <= (-1) * avgPointsGainedPlayer * (0.46/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                } else {
                                    if (expectedValuerollTracker[j] >= avgPointsGainedPlayer * (0.46/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }
                                
                            }
                            if (numCompRolls == 0) {
                                const choose = getRandomInt(100)
                                if (choose <= 4) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 1
                                    } else {
                                        numCompRolls = 5
                                    }
                                } else if (choose <= 13) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 2
                                    } else {
                                        numCompRolls = 4
                                    }
                                } else if (choose <= 31) {
                                    numCompRolls = 3
                                } else if (choose <= 59) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 4
                                    } else {
                                        numCompRolls = 2
                                    }
                                } else {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 5
                                    } else {
                                        numCompRolls = 1
                                    }
                                }
                            }
                            

                        }
                        break
                    case 3:
                        if (avgPointsGainedPlayer == 0) {
                            if (computerTracker[1] == undefined) {
                                numD = getRandomInt(100)
                                if (numD <= 38) {
                                    numCompRolls = 1
                                } else if (numD <= 67) {
                                    numCompRolls = 2
                                } else if (numD <= 87) {
                                    numCompRolls = 3
                                } else if (numD <= 98) {
                                    numCompRolls = 4
                                } else {
                                    numCompRolls = 5
                                }
                            } else {
                                numCompRolls = Math.ceil(avgCompRolls * 0.41/0.5)
                                break
                            }
                        } else {
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    expectedValuerollTracker[i] = (3 * 0.41 + -3 * 0.59) * 2
                                    continue
                                }
                                expectedValuerollTracker[i + 1] = expectedValuerollTracker[i] + ((3 + 2 * i) * 0.41 + (-1) * (3 + 2 * i) * 0.59) * 2
                            }
                            for (let j = 0; j < expectedValuerollTracker.length; j++) {
                                if (avgPointsGainedPlayer > 0) {
                                    if (expectedValuerollTracker[j] <= (-1) * avgPointsGainedPlayer * (0.41/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                } else {
                                    if (expectedValuerollTracker[j] >= avgPointsGainedPlayer * (0.41/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }
                                
                            }
                            if (numCompRolls == 0) {
                                const choose = getRandomInt(100)
                                if (choose <= 4) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 5
                                    } else {
                                        numCompRolls = 1
                                    }
                                } else if (choose <= 13) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 4
                                    } else {
                                        numCompRolls = 2
                                    }
                                } else if (choose <= 31) {
                                    numCompRolls = 3
                                } else if (choose <= 59) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 2
                                    } else {
                                        numCompRolls = 4
                                    }
                                } else {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 1
                                    } else {
                                        numCompRolls = 5
                                    }
                                }
                            }
                            

                        }
                        break
                    case 4:
                        if (avgPointsGainedPlayer == 0) {
                            if (computerTracker[1] == undefined) {
                                numD = getRandomInt(100)
                                if (numD <= 49) {
                                    numCompRolls = 1

                                } else if (numD <= 82) {
                                    numCompRolls = 2
                                } else if (numD <= 99) {
                                    numCompRolls = 3
                                } else {
                                    numCompRolls = 4
                                }
                                    
                                
                            } else {
                                numCompRolls = Math.ceil(avgCompRolls * 0.34/0.5)
                                break
                            }
                        } else {
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    expectedValuerollTracker[i] = (-3 * 0.66 + 3 * 0.34) * 2
                                    continue
                                }
                                expectedValuerollTracker[i + 1] = expectedValuerollTracker[i] + ((3 + 2 * i) * 0.34 + (-1) * (3 + 2 * i) * 0.66) * 2
                            }
                            for (let j = 0; j < expectedValuerollTracker.length; j++) {
                                if (avgPointsGainedPlayer > 0) {
                                    if (expectedValuerollTracker[j] <= (-1) * avgPointsGainedPlayer * (0.34/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                } else {
                                    if (expectedValuerollTracker[j] >= avgPointsGainedPlayer * (0.34/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }
                                
                            }
                            if (numCompRolls == 0) {
                                const choose = getRandomInt(100)
                                if (choose <= 4) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 5
                                    } else {
                                        numCompRolls = 1
                                    }
                                } else if (choose <= 13) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 4
                                    } else {
                                        numCompRolls = 2
                                    }
                                } else if (choose <= 31) {
                                    numCompRolls = 3
                                } else if (choose <= 59) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 2
                                    } else {
                                        numCompRolls = 4
                                    }
                                } else {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 1
                                    } else {
                                        numCompRolls = 5
                                    }
                                }
                            }
                            

                        }
                        break
                    case 5:
                        if (avgPointsGainedPlayer == 0) {
                            if (computerTracker[1] == undefined) {
                                numD = getRandomInt(100)
                                if (numD <= 60) {
                                    numCompRolls = 1
                                } else if (numD <= 94) {
                                    numCompRolls = 2
                                } else {
                                    numCompRolls = 3
                                }
                                
                            } else {
                                numCompRolls = Math.ceil(avgCompRolls)
                                break
                            }
                        } else {
                            for (let i = 0; i < 4; i++) {
                                if (i == 0) {
                                    expectedValuerollTracker[i] = (-3 * 0.76 + 3 * 0.24) * 2
                                    continue
                                }
                                expectedValuerollTracker[i + 1] = expectedValuerollTracker[i] + ((3 + 2 * i) * 0.24 + (-1) * (3 + 2 * i) * 0.76) * 2
                            }
                            for (let j = 0; j < expectedValuerollTracker.length; j++) {
                                if (avgPointsGainedPlayer > 0) {
                                    if (expectedValuerollTracker[j] <= (-1) * avgPointsGainedPlayer * (0.24/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                } else {
                                    if (expectedValuerollTracker[j] >= avgPointsGainedPlayer * (0.24/0.5)) {
                                        numCompRolls = j + 1
                                        break
                                    }
                                }
                                
                            }
                            if (numCompRolls == 0) {
                                const choose = getRandomInt(100)
                                if (choose <= 4) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 5
                                    } else {
                                        numCompRolls = 1
                                    }
                                } else if (choose <= 13) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 4
                                    } else {
                                        numCompRolls = 2
                                    }
                                } else if (choose <= 31) {
                                    numCompRolls = 3
                                } else if (choose <= 59) {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 2
                                    } else {
                                        numCompRolls = 4
                                    }
                                } else {
                                    if (avgPointsGainedPlayer < 0) {
                                        numCompRolls = 1
                                    } else {
                                        numCompRolls = 5
                                    }
                                }
                            }
                            

                        }
                        break
                    



                

                }

            }

            let compRollModifier = textNodes.find(t => t.id == 5)
            compRollModifier.text = compRollModifier.text.concat("\n The computer decided to roll the die " + numCompRolls + " time(s). ")

            


            

        }

        function computerRoller(rolls) {
            let compRoll1 = 0
            let compRoll2 = 0
            let compResults = textNodes.find(textNode => textNode.id == 6)
            let curPoints = 0
            let totalCompEffect = 0
            switch(rolls) {
                case 1:
                    compRoll1 = getRandomInt(6)
                    compRoll2 = getRandomInt(6)
                    const typeRoll1 = curType(compRoll1)
                    const typeRoll2 = curType(compRoll2)
                    compResults.text = compResults.text.concat("\n" + "Roll 1: \n" + compRoll1 + " and " + compRoll2)
                    if (typeRoll1 != typeRoll2) {
                        if (currentType == 'odd') {
                            compResults.text = compResults.text.concat("\n" + "RESULT: ODD. The computer loses 3 points. You gain 3 points")
                            compPoints -= 3
                            playerPoints += 3
                            totalCompEffect -= 6
                        } else {
                            compResults.text = compResults.text.concat("\n" + "RESULT: ODD. The computer gains 3 points. You lose 3 points")
                            compPoints += 3
                            playerPoints -= 3
                            totalCompEffect += 6

                        }
                    } else {
                        if (currentType == 'even') {
                            compResults.text = compResults.text.concat("\n" + "RESULT: EVEN. You lose 3 points. The computer gains 3 points. ")
                            compPoints += 3
                            playerPoints -= 3
                            totalCompEffect += 6
                        } else {
                            compResults.text = compResults.text.concat("\n" + "RESULT: EVEN. You gain 3 points. The computer loses 3 points. ")
                            compPoints -= 3
                            playerPoints += 3
                            totalCompEffect -= 6
                        }
                    }
                    break
                case 2:
                    curPoints = 3
                    for (let i = 0; i < 2; i++) {
                        compRoll1 = getRandomInt(6)
                        compRoll2 = getRandomInt(6)
                        const typeRoll1 = curType(compRoll1)
                        const typeRoll2 = curType(compRoll2)
                        compResults.text = compResults.text.concat("\n" + "Roll " + (i + 1) + ": \n" + compRoll1 + " and " + compRoll2)
                        if (typeRoll1 != typeRoll2) {
                            if (currentType == 'odd') {
                                compResults.text = compResults.text.concat("\n" + "RESULT: ODD. The computer loses " + curPoints + " points. You gain " + curPoints + " points. ")
                                compPoints -= curPoints
                                playerPoints += curPoints
                                totalCompEffect -= curPoints * 2
                            } else {
                                compResults.text = compResults.text.concat("\n" + "RESULT: ODD. The computer gains " + curPoints + " points. You lose " + curPoints + " points. ")
                                compPoints += curPoints
                                playerPoints -= curPoints
                                totalCompEffect += curPoints * 2
                            

                            }
                        } else {
                            if (currentType == 'even') {
                                compResults.text = compResults.text.concat("\n" + "RESULT: EVEN. You lose " + curPoints + " points. The computer gains " + curPoints + " points. ")
                                compPoints += curPoints
                                playerPoints -= curPoints
                                totalCompEffect += curPoints * 2
                            
                            } else {
                                compResults.text = compResults.text.concat("\n" + "RESULT: EVEN. You gain " + curPoints + " points. The computer loses " + curPoints + " points. ")
                                compPoints -= curPoints
                                playerPoints += curPoints
                                totalCompEffect -= curPoints * 2
                            
                            }
                        }
                        curPoints += 2

                    }
                    break
                case 3:
                    curPoints = 3
                    for (let i = 0; i < 3; i++) {
                        compRoll1 = getRandomInt(6)
                        compRoll2 = getRandomInt(6)
                        const typeRoll1 = curType(compRoll1)
                        const typeRoll2 = curType(compRoll2)
                        compResults.text = compResults.text.concat("\n" + "Roll " + (i + 1) + ": \n" + compRoll1 + " and " + compRoll2)
                        if (typeRoll1 != typeRoll2) {
                            if (currentType == 'odd') {
                                compResults.text = compResults.text.concat("\n" + "RESULT: ODD. The computer loses " + curPoints + " points. You gain " + curPoints + " points. ")
                                compPoints -= curPoints
                                playerPoints += curPoints
                                totalCompEffect -= curPoints * 2
                            } else {
                                compResults.text = compResults.text.concat("\n" + "RESULT: ODD. The computer gains " + curPoints + " points. You lose " + curPoints + " points. ")
                                compPoints += curPoints
                                playerPoints -= curPoints
                                totalCompEffect += curPoints * 2
                            

                            }
                        } else {
                            if (currentType == 'even') {
                                compResults.text = compResults.text.concat("\n" + "RESULT: EVEN. You lose " + curPoints + " points. The computer gains " + curPoints + " points. ")
                                compPoints += curPoints
                                playerPoints -= curPoints
                                totalCompEffect += curPoints * 2
                            } else {
                                compResults.text = compResults.text.concat("\n" + "RESULT: EVEN. You gain " + curPoints + " points. The computer loses " + curPoints + " points. ")
                                compPoints -= curPoints
                                playerPoints += curPoints
                                totalCompEffect -= curPoints * 2
                            }
                        }
                        curPoints += 2

                    }
                    break
                case 4:
                    curPoints = 3
                    for (let i = 0; i < 4; i++) {
                        compRoll1 = getRandomInt(6)
                        compRoll2 = getRandomInt(6)
                        const typeRoll1 = curType(compRoll1)
                        const typeRoll2 = curType(compRoll2)
                        compResults.text = compResults.text.concat("\n" + "Roll " + (i + 1) + ": \n" + compRoll1 + " and " + compRoll2)
                        if (typeRoll1 != typeRoll2) {
                            if (currentType == 'odd') {
                                compResults.text = compResults.text.concat("\n" + "RESULT: ODD. The computer loses " + curPoints + " points. You gain " + curPoints + " points. ")
                                compPoints -= curPoints
                                playerPoints += curPoints
                                totalCompEffect -= curPoints * 2
                            } else {
                                compResults.text = compResults.text.concat("\n" + "RESULT: ODD. The computer gains " + curPoints + " points. You lose " + curPoints + " points. ")
                                compPoints += curPoints
                                playerPoints -= curPoints
                                totalCompEffect += curPoints * 2
                            

                            }
                        } else {
                            if (currentType == 'even') {
                                compResults.text = compResults.text.concat("\n" + "RESULT: EVEN. You lose " + curPoints + " points. The computer gains " + curPoints + " points. ")
                                compPoints += curPoints
                                playerPoints -= curPoints
                                totalCompEffect += curPoints * 2
                            } else {
                                compResults.text = compResults.text.concat("\n" + "RESULT: EVEN. You gain " + curPoints + " points. The computer loses " + curPoints + " points. ")
                                compPoints -= curPoints
                                playerPoints += curPoints
                                totalCompEffect -= curPoints * 2
                            }
                        }
                        curPoints += 2

                    }
                    break
                case 5:
                    curPoints = 3
                    for (let i = 0; i < 5; i++) {
                        compRoll1 = getRandomInt(6)
                        compRoll2 = getRandomInt(6)
                        const typeRoll1 = curType(compRoll1)
                        const typeRoll2 = curType(compRoll2)
                        compResults.text = compResults.text.concat("\n" + "Roll " + (i + 1) + ": \n" + compRoll1 + " and " + compRoll2)
                        if (typeRoll1 != typeRoll2) {
                            if (currentType == 'odd') {
                                compResults.text = compResults.text.concat("\n" + "RESULT: ODD. The computer loses " + curPoints + " points. You gain " + curPoints + " points. ")
                                compPoints -= curPoints
                                playerPoints += curPoints
                                totalCompEffect -= curPoints * 2
                            } else {
                                compResults.text = compResults.text.concat("\n" + "RESULT: ODD. The computer gains " + curPoints + " points. You lose " + curPoints + " points. ")
                                compPoints += curPoints
                                playerPoints -= curPoints
                                totalCompEffect += curPoints * 2
                            

                            } 
                        } else {
                            if (currentType == 'even') {
                                compResults.text = compResults.text.concat("\n" + "RESULT: EVEN. You lose " + playerPoints + " points. The computer gains " + playerPoints + " points. ")
                                compPoints += curPoints
                                playerPoints -= curPoints
                                totalCompEffect += curPoints * 2
                            } else {
                                compResults.text = compResults.text.concat("\n" + "RESULT:EVEN. You gain " + playerPoints + " points. The computer loses " + playerPoints + " points. ")
                                compPoints -= curPoints
                                playerPoints += curPoints
                                totalCompEffect -= curPoints * 2
                            }
                        }
                        curPoints += 2

                    }
                    break
            }
            
            
            if (turnCount == 1) {
                computerTracker[0].pointGain = totalCompEffect
                computerTracker[0].numRolls = rolls
            } else {
                let currentCompTurn = {
                    pointGain: totalCompEffect,
                    rolls: rolls
                }
                computerTracker.push(currentCompTurn)
            }

            
            
        }
        function playerRoller(rolls) {
            let playerRoll1 = 0
            let playerRoll2 = 0
            let playerResults = textNodes.find(textNode => textNode.id == 4)
            let curPoints2 = 0
            let totalPlayerEffect = 0
            switch(rolls) {
                case '1':
                    playerRoll1 = getRandomInt(6)
                    playerRoll2 = getRandomInt(6)
                    playerResults.text = playerResults.text.concat("\n" + "Roll 1: \n" + playerRoll1 + " and " + playerRoll2)
                    const typeRoll1 = curType(playerRoll1)
                    const typeRoll2 = curType(playerRoll2)
                    if (typeRoll1 != typeRoll2) {
                        
                        console.log('hy')
                        if (currentType == 'odd') {
                            playerResults.text = playerResults.text.concat("\n" + "RESULT: ODD. You lose 3 points. The computer gains 3 points")
                            compPoints += 3
                            playerPoints -= 3
                            totalPlayerEffect -= 6
                        } else {
                            playerResults.text = playerResults.text.concat("\n" + "RESULT: ODD. You gain 3 points. The computer loses 3 points")
                            compPoints -= 3
                            playerPoints += 3
                            totalPlayerEffect += 6

                        }
                    } else {
                        console.log('hi')
                        console.log(curType(playerRoll1))
                        console.log(curType(playerRoll2))
                        if (currentType == 'even') {
                            playerResults.text = playerResults.text.concat("\n" + "RESULT: EVEN. You lose 3 points. The computer gains 3 points. ")
                            compPoints += 3
                            playerPoints -= 3
                            totalPlayerEffect -= 6
                        } else {
                            playerResults.text = playerResults.text.concat("\n" + "RESULT: EVEN. You gain 3 points. The computer loses 3 points. ")
                            compPoints += 3
                            playerPoints -= 3
                            totalPlayerEffect -= 6
                        }
                    }
                    break
                case '2':
                    curPoints2 = 3
                    for (let i = 0; i < 2; i++) {
                        playerRoll1 = getRandomInt(6)
                        playerRoll2 = getRandomInt(6)
                        const typeRoll1 = curType(playerRoll1)
                        const typeRoll2 = curType(playerRoll2)
                        playerResults.text = playerResults.text.concat("\n" + "Roll " + (i + 1) + ": \n" + playerRoll1 + " and " + playerRoll2)
                        if (typeRoll1 != typeRoll2) {
                            
                            if (currentType == 'odd') {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: ODD. You lose " + curPoints2 + " points. The computer gains " + curPoints2 + " points. ")
                                compPoints += curPoints2
                                playerPoints -= curPoints2
                                totalPlayerEffect -= curPoints2 * 2
                            } else {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: ODD. You gain " + curPoints2 + " points. The computer loses " + curPoints2 + " points. ")
                                compPoints -= curPoints2
                                playerPoints += curPoints2
                                totalPlayerEffect += curPoints2 * 2
                            

                            }
                        } else {
                            console.log('hey')
                            if (currentType == 'even') {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: EVEN. You lose " + curPoints2 + " points. The computer gains " + curPoints2 + " points. ")
                                compPoints += curPoints2
                                playerPoints -= curPoints2
                                totalPlayerEffect -= curPoints2 * 2
                            } else {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: EVEN. You gain " + curPoints2 + " points. The computer loses " + curPoints2 + " points. ")
                                compPoints -= curPoints2
                                playerPoints += curPoints2
                                totalPlayerEffect += curPoints2 * 2
                            }
                        }
                        curPoints2 += 2

                    }
                    break
                case '3':
                    curPoints2 = 3
                    for (let i = 0; i < 3; i++) {
                        playerRoll1 = getRandomInt(6)
                        playerRoll2 = getRandomInt(6)
                        const typeRoll1 = curType(playerRoll1)
                        const typeRoll2 = curType(playerRoll2)
                        playerResults.text = playerResults.text.concat("\n" + "Roll " + (i + 1) + ": \n" + playerRoll1 + " and " + playerRoll2)
                        if (typeRoll1 != typeRoll2) {
                            console.log('hy')
                            if (currentType == 'odd') {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: ODD. You lose " + curPoints2 + " points. The computer gains " + curPoints2 + " points.  ")
                                compPoints += curPoints2
                                playerPoints -= curPoints2
                                totalPlayerEffect -= curPoints2 * 2
                            } else {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: ODD. You gain " + curPoints2 + " points. The computer lose " + curPoints2 + " points. ")
                                compPoints -= curPoints2
                                playerPoints += curPoints2
                                totalPlayerEffect += curPoints2 * 2
                            

                            }
                        } else {
                            console.log('hey')
                            if (currentType == 'even') {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: EVEN. You lose " + curPoints2 + " points. The computer gains " + curPoints2 + " points. ")
                                compPoints += curPoints2
                                playerPoints -= curPoints2
                                totalPlayerEffect -= curPoints2 * 2
                            } else {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: EVEN. You gain " + curPoints2 + " points. The computer loses " + curPoints2 + " points. ")
                                compPoints -= curPoints2
                                playerPoints += curPoints2
                                totalPlayerEffect += curPoints2 * 2
                            }
                        }
                        curPoints2 += 2

                    }
                    break
                case '4':
                    curPoints2 = 3
                    for (let i = 0; i < 4; i++) {
                        playerRoll1 = getRandomInt(6)
                        playerRoll2 = getRandomInt(6)
                        const typeRoll1 = curType(playerRoll1)
                        const typeRoll2 = curType(playerRoll2)
                        playerResults.text = playerResults.text.concat("\n" + "Roll " + (i + 1) + ": \n" + playerRoll1 + " and " + playerRoll2)
                        if (typeRoll1 != typeRoll2) {
                            console.log('hy')
                            if (currentType == 'odd') {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: ODD. You lose " + curPoints2 + " points. The computer gains " + curPoints2 + " points.  ")
                                compPoints += curPoints2
                                playerPoints -= curPoints2
                                totalPlayerEffect -= curPoints2 * 2
                            } else {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: ODD. You gain " + curPoints2 + " points. The computer lose " + curPoints2 + " points. ")
                                compPoints -= curPoints2
                                playerPoints += curPoints2
                                totalPlayerEffect += curPoints2 * 2
                            

                            }
                        } else {
                            console.log('hey')
                            if (currentType == 'even') {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: EVEN. You lose " + curPoints2 + " points. The computer gains " + curPoints2 + " points. ")
                                compPoints += curPoints2
                                playerPoints -= curPoints2
                                totalPlayerEffect -= curPoints2 * 2
                            } else {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: EVEN. You gain " + curPoints2 + " points. The computer loses " + curPoints2 + " points. ")
                                compPoints -= curPoints2
                                playerPoints += curPoints2
                                totalPlayerEffect += curPoints2 * 2
                            }
                        }
                        curPoints2 += 2

                    }
                    break
                case '5':
                    curPoints2 = 3
                    for (let i = 0; i < 5; i++) {
                        playerRoll1 = getRandomInt(6)
                        playerRoll2 = getRandomInt(6)
                        const typeRoll1 = curType(playerRoll1)
                        const typeRoll2 = curType(playerRoll2)
                        playerResults.text = playerResults.text.concat("\n" + "Roll " + (i + 1) + ": \n" + playerRoll1 + " and " + playerRoll2)
                        if (typeRoll1 != typeRoll2) {
                            console.log('hy')
                            if (currentType == 'odd') {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: ODD. You lose " + curPoints2 + " points. The computer gains " + curPoints2 + " points.  ")
                                compPoints += curPoints2
                                playerPoints -= curPoints2
                                totalPlayerEffect -= curPoints2 * 2
                            } else {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: ODD. You gain " + curPoints2 + " points. The computer lose " + curPoints2 + " points. ")
                                compPoints -= curPoints2
                                playerPoints += curPoints2
                                totalPlayerEffect += curPoints2 * 2
                            

                            }
                        } else {
                            console.log('hey')
                            if (currentType == 'even') {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: EVEN. You lose " + curPoints2 + " points. The computer gains " + curPoints2 + " points. ")
                                compPoints += curPoints2
                                playerPoints -= curPoints2
                                totalPlayerEffect -= curPoints2 * 2
                            } else {
                                playerResults.text = playerResults.text.concat("\n" + "RESULT: EVEN. You gain " + curPoints2 + " points. The computer loses " + curPoints2 + " points. ")
                                compPoints -= curPoints2
                                playerPoints += curPoints2
                                totalPlayerEffect += curPoints2 * 2
                            }
                        }
                        curPoints2 += 2

                    }
                    break
            }

            if (turnCount == 1) {
                playerTracker[0].pointGain = totalPlayerEffect
                playerTracker[0].numRolls = parseInt(rolls)
            } else {
                let currentPlayerTurn = {
                    pointGain: totalPlayerEffect,
                    numRolls: parseInt(rolls)
                }
                playerTracker.push(currentPlayerTurn)
            }

            
            

        }

        function getRandomType() {
            switch (Math.floor((Math.random() * 2) + 1)) {
                case 1:
                    return 'odd'
                case 2:
                    return 'even'

            }
            return ''
        }

        function getRandomInt(int) {
            return Math.floor((Math.random() * int) + 1)

        }

        function getRandomIntType(type) {
            let chosenNum = 0
            let oddType = false
            if(type == 'odd') {
                oddType = true
            }
            if (oddType) {
                do {
                    chosenNum = getRandomInt(14)
                } while (chosenNum % 2 != 0 || numTracker.includes(chosenNum))
            } else {
                do {
                    chosenNum = getRandomInt(14)
                } while (chosenNum % 2 == 0 || numTracker.includes(chosenNum))
            }
            numTracker.push(chosenNum)

            return chosenNum

            
        }


        const textNodes = [
            {
                id: 1,
                text: 'You and the computer will be playing a rolling dice game with two dice being 14-sided. There will be 10 turns. You both start with 25 points',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 2
                    }
                ]
            },
            {
                id: 2,
                text: 'The evil type this round is ',
                options: [
                    {
                        text: 'Start Turn',
                        nextText: 3
                    }
                ]
            },
            {
                id: 3,
                text: 'How many times would you like to roll the dice?',
                options: [
                    {
                        text: '1',
                        nextText: 4
                    },
                    {
                        text: '2',
                        nextText: 4
                    },
                    {
                        text: '3',
                        nextText: 4
                    },
                    {
                        text: '4',
                        nextText: 4
                    },
                    {
                        text: '5',
                        nextText: 4
                    }
                ]
            },
            {
                id: 4,
                text: 'Results of your roll(s): ',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 5
                    }

                ]
            },
            {
                id: 5,
                text: 'It is now the computers turn to roll ',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 6
                    }
                ]
            },
            {
                id: 6,
                text: 'Results of computer roll(s): ',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 7
                    }
                ]

            },
            {
                id: 7,
                text: 'Current points: ',
                options: [
                    {
                        text: 'Proceed',
                        nextText: 8
                        
                    }
                ]
            },
            {
                id: 8,
                text: 'Turn ',
                options: [
                    {
                        text: 'Continue',
                        nextText: 2
                    }
                ]
            },
            {
                id: 9,
                text: 'Final points: ',
                options: [
                    {
                        text: 'New Game',
                        nextText: 1
                    }
                ]
            }


        ]

        startGame()

    });

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
export default Game3