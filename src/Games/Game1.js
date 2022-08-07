import { useRef, useEffect } from 'react';
import Goback from '/Users/sjohari2/launch2/src/Games/Goback.js'

const Game1 = () => {

    const textElement = useRef()
    const optionButtonsElement = useRef()
    useEffect(() => {

        let colorLeft = false
        let shapeLeft = false
        let doorLeft = false
        let colorMid = false
        let shapeMid = false
        let doorMid = false
        let colorRight = false
        let shapeRight = false
        let doorRight = false
        let easy = false
        let medium = false
        let hard = false
        let pointsPlayer = 10
        let pointsComp = 10
        let sender = false
        let receiver = false
        let turnSender = 0
        let turnReceiver = 0
        let genDoor = 0
        let easyLieAmount = 0
        let lieNumber = false
        let lieColor = false
        let lieShape = false
        let aDecider = 0
        let resetEnd = false

    
    let state = {}

    function startGame() {
        state = {}
        showTextNode(1)


    }

    function showTextNode(textNodeIndex) {
        if(textNodeIndex === 1) {
            if(resetEnd) {
                sender = false
                receiver = false
                easy = false
                medium = false
                hard = false
                turnReceiver = 0
                turnSender = 0
                pointsPlayer = 10
                pointsComp = 10
                const changeTurn = textNodes.find(t => t.id === 5) 
                changeTurn.options.forEach(option => {
                    option.nextText = 7
                })
                const changeTurn2 = textNodes.find(t => t.id === 6)
                changeTurn2.options.forEach(option => {
                    option.nextText = 12
                }) 
                changeTurn.text = 'Your door number is ' + getRandomInt(3) + '. The computer will ask questions about your door.'
                changeTurn2.text = 'The computer is randomly given a door. It will give you descriptions of the door'

                
                resetEnd = false
            }
        }
        if(textNodeIndex === 2) {
            easy = true
        }
        if(textNodeIndex === 3) {
            medium = true
        }
        if(textNodeIndex === 4) {
            hard = true
        }
        if(textNodeIndex === 5) {
            sender = true
                if(turnSender != 10){
                    const randomizer = textNodes.find(textNode => textNode.id === 5) 
                    randomizer.text = 'Your door number is ' + getRandomInt(3) + '. The computer will ask questions about your door.'
                }

                const guessmodifier = textNodes.find(textNode => textNode.id === 10)
                guessmodifier.text = 'The computer guessed'
            
                const pmodifier = textNodes.find(textNode => textNode.id === 11)
                pmodifier.text = 'Point totals: \n' 
            
        }

        if(textNodeIndex === 6) {
            receiver = true

           

            const colormodifier = textNodes.find(textNode => textNode.id === 12)
            colormodifier.text = 'The computer said that the door color was'

            const numbmodifier = textNodes.find(textNode => textNode.id === 13)
            numbmodifier.text = 'The computer said that the door number was'

            const shapemodifier = textNodes.find(textNode => textNode.id === 14)
            shapemodifier.text = 'The computer said that the door shape was'

            const guessmodifier = textNodes.find(textNode => textNode.id === 16)
            guessmodifier.text = 'You guessed' 
            
            let pmodifier = textNodes.find(textNode => textNode.id === 17)
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

        if(textNodeIndex === 11) {
            turnSender++
            if(turnSender === 10 && turnReceiver !== 10) {
                const switchRole =  textNodes.find(textNode => textNode.id === 5)
                switchRole.text = 'You will now do 10 turns as a receiver'
                switchRole.options.forEach(option => {
                    option.nextText = 6
                })
                turnReceiver = 0
            }

            if(turnReceiver === 10 && turnSender === 10) {
                resetEnd = true
                const final = textNodes.find(textNode => textNode.id === 5)
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
                    option.nextText = 18
                })
            }

        }

        if(textNodeIndex === 17) {
            turnReceiver++
            if(turnReceiver === 10 && turnSender !== 10) {
                const switchRole =  textNodes.find(textNode => textNode.id === 6)
                switchRole.text = 'You will now do 10 turns as a sender'
                switchRole.options.forEach(option => {
                    option.nextText = 5
                })
                turnSender = 0
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
                    option.nextText = 18
                })
            }

            

            
        }

        if(textNodeIndex === 18) {
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

                if(textNodeIndex === 7 || textNodeIndex === 8 || textNodeIndex === 9) {
                    button.addEventListener('click', () => selectOptionComputer(option.text))
                }

                if(textNodeIndex === 15) {
                    button.addEventListener('click', () => correctPlayerResponse(option.text))
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
        state = Object.assign(state, option.setState)
        showTextNode(nextTextNodeId)


    }

    function getRandomInt(int) {
        return Math.floor((Math.random() * int) + 1)
    }

    function getRandomDoor() {
        genDoor = getRandomInt(3)
    }

    function getLieAmount() {
        easyLieAmount = getRandomInt(10)
    }

    function getHardAlgorithm() {
        aDecider = getRandomInt(4)
    }

    function correctPlayerResponse(option) {
        const mod = textNodes.find(t => t.id === 16)
        if(genDoor === 1) {
            if(option === 'Door 1') {
                pointsComp -= 3
                pointsPlayer += 1
                mod.text = mod.text.concat(' correctly. You gain 1. The computer loses 3')
            } else {
                pointsComp += 3
                pointsPlayer -= 1
                mod.text = mod.text.concat(' incorrectly. The correct door was the left door. You lose 1. The computer gains 3')
            }
        }

        if(genDoor === 2) {
            if(option === 'Door 2') {
                pointsComp -= 2
                pointsPlayer += 2
                mod.text = mod.text.concat(' correctly. You gain 2. The computer loses 2')
            } else {
                pointsComp += 2
                pointsPlayer -= 2
                mod.text = mod.text.concat(' incorrectly. The correct door was the middle door. You lose 2. The computer gains 2')
            }
        }

        if(genDoor === 3) {
            if(option === 'Door 3') {
                pointsComp -= 1
                pointsPlayer += 3
                mod.text = mod.text.concat(' correctly. You gain 3. The computer loses 1')
            } else {
                pointsComp += 1
                pointsPlayer -= 3
                mod.text = mod.text.concat(' incorrectly. The correct door was the right door. You lose 3. The computer gains 1')
            }
        }

    }



    function receiverEasy(index) {
        

        if(index === 6) {
            getRandomDoor()
            getLieAmount()
            console.log(genDoor)
            if(easyLieAmount === 1) {
                const decider = getRandomInt(3)
                if(decider === 1) {
                    lieColor = true
                    lieNumber = true
                } else if(decider == 2) {
                    lieColor = true
                    lieShape = true
                } else {
                    lieNumber = true
                    lieShape = true
                }
            } else if(easyLieAmount === 2 || easyLieAmount === 3) {
                const decider2 = getRandomInt(3)
                if(decider2 === 1) {
                    lieColor = true
                } else if(decider2 == 2) {
                    lieNumber = true
                } else {
                    lieShape = true
                }
            }

        }

        if(index === 12) {
            const answer = textNodes.find(textNode => textNode.id === 12)
            if(genDoor === 1) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' blue')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' blue')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(lieColor && !lieShape && !lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' blue')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(!lieColor) {
                    answer.text = answer.text.concat(' red')
                }
            }
            
            if(genDoor === 2) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(lieColor && !lieShape && !lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(!lieColor) {
                    answer.text = answer.text.concat(' blue')
                }

            }

            if(genDoor === 3) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' blue')
                    }
                }

                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' blue')
                    }
                }

                if(lieColor && !lieShape && !lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' blue')
                    }
                }

                if(!lieColor) {
                    answer.text = answer.text.concat(' green')
                }

            }

           

        }
        if(index === 13) {
            const answer = textNodes.find(textNode => textNode.id === 13)
            if(genDoor === 1) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 2')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 2')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(lieNumber && !lieColor && !lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 2')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(!lieNumber) {
                    answer.text = answer.text.concat(' 1')
                }
            }
            
            if(genDoor === 2) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(lieNumber && !lieShape && !lieColor) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(!lieNumber) {
                    answer.text = answer.text.concat(' 2')
                }

            }

            if(genDoor === 3) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 2')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 2')
                    }
                }

                if(lieNumber && !lieShape && !lieColor) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 2')
                    }
                }

                if(!lieNumber) {
                    answer.text = answer.text.concat(' 3')
                }

            }

            
        }
        if(index === 14) {
            const answer = textNodes.find(textNode => textNode.id === 14)
            if(genDoor === 1) {
                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' square')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' square')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(lieShape && !lieColor && !lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' square')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(!lieShape) {
                    answer.text = answer.text.concat(' triangle')
                }
            }
            
            if(genDoor === 2) {
                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' triangle')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' triangle')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(lieShape && !lieNumber && !lieColor) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' triangle')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(!lieShape) {
                    answer.text = answer.text.concat(' square')
                }

            }

            if(genDoor === 3) {
                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' triangle')
                    } else {
                        answer.text = answer.text.concat(' square')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' triangle')
                    } else {
                        answer.text = answer.text.concat(' square')
                    }
                }

                if(lieShape && !lieNumber && !lieColor) {
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
        }

        if(index === 17) {
            lieColor = false
            lieShape = false
            lieNumber = false

            const pointModifier = textNodes.find(textNode => textNode.id === 17)
            pointModifier.text = pointModifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)


        }

    }

    function receiverMedium(index) {
        if(index === 6) {
            getRandomDoor()
            getLieAmount()
            console.log(genDoor)
            if(easyLieAmount === 1 || easyLieAmount === 2 || easyLieAmount === 3 || easyLieAmount === 8 || easyLieAmount === 9) {
                const decider = getRandomInt(3)
                if(decider === 1) {
                    lieColor = true
                    lieNumber = true
                } else if(decider == 2) {
                    lieColor = true
                    lieShape = true
                } else {
                    lieNumber = true
                    lieShape = true
                }
            } else if(easyLieAmount === 4 || easyLieAmount === 5 || easyLieAmount === 6 || easyLieAmount === 7) {
                const decider2 = getRandomInt(3)
                if(decider2 === 1) {
                    lieColor = true
                } else if(decider2 == 2) {
                    lieNumber = true
                } else {
                    lieShape = true
                }
            }

        }

        if(index === 12) {
            const answer = textNodes.find(textNode => textNode.id === 12)
            if(genDoor === 1) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' blue')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' blue')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(lieColor && !lieShape && !lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' blue')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(!lieColor) {
                    answer.text = answer.text.concat(' red')
                }
            }
            
            if(genDoor === 2) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(lieColor && !lieShape && !lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' green')
                    }
                }

                if(!lieColor) {
                    answer.text = answer.text.concat(' blue')
                }

            }

            if(genDoor === 3) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' blue')
                    }
                }

                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' blue')
                    }
                }

                if(lieColor && !lieShape && !lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' red')
                    } else {
                        answer.text = answer.text.concat(' blue')
                    }
                }

                if(!lieColor) {
                    answer.text = answer.text.concat(' green')
                }

            }

           

        }
        if(index === 13) {
            const answer = textNodes.find(textNode => textNode.id === 13)
            if(genDoor === 1) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 2')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 2')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(lieNumber && !lieColor && !lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 2')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(!lieNumber) {
                    answer.text = answer.text.concat(' 1')
                }
            }
            
            if(genDoor === 2) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(lieNumber && !lieShape && !lieColor) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 3')
                    }
                }

                if(!lieNumber) {
                    answer.text = answer.text.concat(' 2')
                }

            }

            if(genDoor === 3) {
                if(lieColor && lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 2')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 2')
                    }
                }

                if(lieNumber && !lieShape && !lieColor) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' 1')
                    } else {
                        answer.text = answer.text.concat(' 2')
                    }
                }

                if(!lieNumber) {
                    answer.text = answer.text.concat(' 3')
                }

            }

            
        }
        if(index === 14) {
            const answer = textNodes.find(textNode => textNode.id === 14)
            if(genDoor === 1) {
                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' square')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' square')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(lieShape && !lieColor && !lieNumber) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' square')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(!lieShape) {
                    answer.text = answer.text.concat(' triangle')
                }
            }
            
            if(genDoor === 2) {
                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' triangle')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' triangle')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(lieShape && !lieNumber && !lieColor) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' triangle')
                    } else {
                        answer.text = answer.text.concat(' circle')
                    }
                }

                if(!lieShape) {
                    answer.text = answer.text.concat(' square')
                }

            }

            if(genDoor === 3) {
                if(lieColor && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' triangle')
                    } else {
                        answer.text = answer.text.concat(' square')
                    }
                }

                if(lieNumber && lieShape) {
                    const decider = getRandomInt(2)
                    if(decider === 1) {
                        answer.text = answer.text.concat(' triangle')
                    } else {
                        answer.text = answer.text.concat(' square')
                    }
                }

                if(lieShape && !lieNumber && !lieColor) {
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
        }

        if(index === 17) {
            lieColor = false
            lieShape = false
            lieNumber = false

            const pointModifier = textNodes.find(textNode => textNode.id === 17)
            pointModifier.text = pointModifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)


        }

    }

    function receiverHard(index) {
        if(index === 6) {
            getRandomDoor()
            getLieAmount()
            getHardAlgorithm()
            if(easyLieAmount === 1 || easyLieAmount === 2) {
                const decider = getRandomInt(3)
                if(decider === 1) {
                    lieColor = true
                } else if(decider === 2) {
                    lieNumber = true
                } else {
                    lieShape = true
                }
            }

            if(easyLieAmount === 3 || easyLieAmount === 4 || easyLieAmount === 5) {
                const decider = getRandomInt(3)
                if(decider === 1) {
                    lieColor = true
                    lieNumber = true
                } else if(decider === 2) {
                    lieColor = true
                    lieShape = true
                } else {
                    lieNumber = true
                    lieShape = true
                }
            }

            if(easyLieAmount === 6 || easyLieAmount === 7 || easyLieAmount === 8 || easyLieAmount === 9) {
                lieColor = true
                lieNumber = true
                lieShape = true
            }

        }

        if(index === 12) {
            const answer = textNodes.find(textNode => textNode.id === 12)
            if(genDoor === 1) {
                if(aDecider === 1) {
                    if(pointsComp > pointsPlayer) {
                        if(lieColor) {
                            answer.text = answer.text.concat(' green')
                        } else {
                            answer.text = answer.text.concat(' red')
                        }
                    }

                    if(pointsPlayer > pointsComp) {
                        if(lieColor && lieNumber) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' blue')
                            } else {
                                answer.text = answer.text.concat(' green')
                            }
                        }

                        if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' blue')
                            } else {
                                answer.text = answer.text.concat(' green')
                            }
                        }

                        if(lieColor && !lieShape && !lieNumber) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' blue')
                            } else {
                                answer.text = answer.text.concat(' green')
                            }
                        }

                        if(!lieColor) {
                            answer.text = answer.text.concat(' red')
                        }
                    }

                    if(pointsPlayer === pointsComp) {
                        if(lieColor) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' red')
                        }
                    }
                } else {
                    if(lieColor && lieNumber) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' green')
                        }
                    }

                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' green')
                        }
                    }

                    if(lieColor && !lieShape && !lieNumber) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' green')
                        }
                    }

                    if(!lieColor) {
                        answer.text = answer.text.concat(' red')
                    }

                }
               
            }
            
            if(genDoor === 2) {
                if(aDecider === 1) {
                    if(pointsComp > pointsPlayer) {
                        if(lieColor) {
                            answer.text = answer.text.concat(' green')
                        } else {
                            answer.text = answer.text.concat(' blue')
                        }
                    }

                    if(pointsPlayer > pointsComp) {
                        if(lieColor) {
                            answer.text = answer.text.concat(' red')
                        } else {
                            answer.text = answer.text.concat(' blue')
                        }
                        
                    }

                    if(pointsPlayer === pointsComp) {
                        if(lieColor && lieNumber) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' red')
                            } else {
                                answer.text = answer.text.concat(' green')
                            }
                        }

                        if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' red')
                            } else {
                                answer.text = answer.text.concat(' green')
                            }
                        }

                        if(lieColor && !lieNumber && !lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' red')
                            } else {
                                answer.text = answer.text.concat(' green')
                            }
                        }

                        if(!lieColor) {
                            answer.text = answer.text.concat(' blue')
                        }
                        
                    }
                } else {
                    if(lieColor && lieNumber) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' red')
                        } else {
                            answer.text = answer.text.concat(' green')
                        }
                    }

                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' red')
                        } else {
                            answer.text = answer.text.concat(' green')
                        }
                    }

                    if(lieColor && !lieNumber && !lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' red')
                        } else {
                            answer.text = answer.text.concat(' green')
                        }
                    }

                    if(!lieColor) {
                        answer.text = answer.text.concat(' blue')
                    }

                }

            }

            if(genDoor === 3) {
                if(aDecider === 1) {
                    if(pointsComp > pointsPlayer) {
                        if(lieColor && lieNumber) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' red')
                            } else {
                                answer.text = answer.text.concat(' blue')
                            }

                        }
                        
                        if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' red')
                            } else {
                                answer.text = answer.text.concat(' blue')
                            }
                        }

                        if(lieColor && !lieShape && !lieNumber) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' red')
                            } else {
                                answer.text = answer.text.concat(' blue')
                            }
                        }

                        if(!lieColor) {
                            answer.text = answer.text.concat(' green')
                        }
                        
                    }

                    if(pointsPlayer > pointsComp) {
                        if(lieColor) {
                            answer.text = answer.text.concat(' red')
                        } else {
                            answer.text = answer.text.concat(' green')
                        }
                    }

                    if(pointsPlayer === pointsComp) {
                        if(lieColor) {
                            answer.text = answer.text.concat(' blue')
                        } else {
                            answer.text = answer.text.concat(' green')
                        }
                    }
                } else {
                    if(lieColor && lieNumber) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' red')
                        } else {
                            answer.text = answer.text.concat(' blue')
                        }

                    }
                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' red')
                        } else {
                            answer.text = answer.text.concat(' blue')
                        }
                    }

                    if(lieColor && !lieShape && !lieNumber) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' red')
                        } else {
                            answer.text = answer.text.concat(' blue')
                        }
                    }

                    if(!lieColor) {
                        answer.text = answer.text.concat(' green')
                    }
                }

            }

           

        }

        if(index === 13) {
            const answer = textNodes.find(textNode => textNode.id === 13)
            if(genDoor === 1) {
                if(aDecider === 1) {
                    if(pointsComp > pointsPlayer) {
                        if(lieNumber) {
                            answer.text = answer.text.concat(' 3')
                        } else {
                            answer.text = answer.text.concat(' 1')
                        }
                    }

                    if(pointsPlayer > pointsComp) {
                        if(lieColor && lieNumber) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' 2')
                            } else {
                                answer.text = answer.text.concat(' 3')
                            }
                        }

                        if(lieNumber && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' 2')
                            } else {
                                answer.text = answer.text.concat(' 3')
                            }
                        }

                        if(lieNumber && !lieShape && !lieColor) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' 2')
                            } else {
                                answer.text = answer.text.concat(' 3')
                            }
                        }

                        if(!lieNumber) {
                            answer.text = answer.text.concat(' 1')
                        }
                    }

                    if(pointsPlayer === pointsComp) {
                        if(lieNumber) {
                            answer.text = answer.text.concat(' 2')
                        } else {
                            answer.text = answer.text.concat(' 1')
                        }
                    }
                } else {
                    if(lieColor && lieNumber) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' 2')
                        } else {
                            answer.text = answer.text.concat(' 3')
                        }
                    }

                    if(lieNumber && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' 2')
                        } else {
                            answer.text = answer.text.concat(' 3')
                        }
                    }

                    if(lieNumber && !lieShape && !lieColor) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' 2')
                        } else {
                            answer.text = answer.text.concat(' 3')
                        }
                    }

                    if(!lieNumber) {
                        answer.text = answer.text.concat(' 1')
                    }

                }
               
            }
            
            if(genDoor === 2) {
                if(aDecider === 1) {
                    if(pointsComp > pointsPlayer) {
                        if(lieNumber) {
                            answer.text = answer.text.concat(' 3')
                        } else {
                            answer.text = answer.text.concat(' 2')
                        }
                    }

                    if(pointsPlayer > pointsComp) {
                        if(lieNumber) {
                            answer.text = answer.text.concat(' 1')
                        } else {
                            answer.text = answer.text.concat(' 2')
                        }
                        
                    }

                    if(pointsPlayer === pointsComp) {
                        if(lieColor && lieNumber) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' 1')
                            } else {
                                answer.text = answer.text.concat(' 3')
                            }
                        }

                        if(lieNumber && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' 1')
                            } else {
                                answer.text = answer.text.concat(' 3')
                            }
                        }

                        if(lieNumber && !lieColor && !lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' 1')
                            } else {
                                answer.text = answer.text.concat(' 3')
                            }
                        }

                        if(!lieNumber) {
                            answer.text = answer.text.concat(' 2')
                        }
                        
                    }
                } else {
                    if(lieColor && lieNumber) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' 1')
                        } else {
                            answer.text = answer.text.concat(' 3')
                        }
                    }

                    if(lieNumber && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' 1')
                        } else {
                            answer.text = answer.text.concat(' 3')
                        }
                    }

                    if(lieNumber && !lieColor && !lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' 1')
                        } else {
                            answer.text = answer.text.concat(' 3')
                        }
                    }

                    if(!lieNumber) {
                        answer.text = answer.text.concat(' 2')
                    }

                }

            }

            if(genDoor === 3) {
                if(aDecider === 1) {
                    if(pointsComp > pointsPlayer) {
                        if(lieColor && lieNumber) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' 1')
                            } else {
                                answer.text = answer.text.concat(' 2')
                            }

                        }
                        
                        if(lieNumber && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' 1')
                            } else {
                                answer.text = answer.text.concat(' 2')
                            }
                        }

                        if(lieNumber && !lieColor && !lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' 1')
                            } else {
                                answer.text = answer.text.concat(' 2')
                            }
                        }

                        if(!lieNumber) {
                            answer.text = answer.text.concat(' 3')
                        }
                        
                    }

                    if(pointsPlayer > pointsComp) {
                        if(lieNumber) {
                            answer.text = answer.text.concat(' 1')
                        } else {
                            answer.text = answer.text.concat(' 3')
                        }
                    }

                    if(pointsPlayer === pointsComp) {
                        if(lieNumber) {
                            answer.text = answer.text.concat(' 2')
                        } else {
                            answer.text = answer.text.concat(' 3')
                        }
                    }
                } else {
                    if(lieColor && lieNumber) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' 1')
                        } else {
                            answer.text = answer.text.concat(' 2')
                        }

                    }
                    
                    if(lieNumber && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' 1')
                        } else {
                            answer.text = answer.text.concat(' 2')
                        }
                    }

                    if(lieNumber && !lieColor && !lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' 1')
                        } else {
                            answer.text = answer.text.concat(' 2')
                        }
                    }

                    if(!lieNumber) {
                        answer.text = answer.text.concat(' 3')
                    }
                }

            }

           

        }

        if(index === 14) {
            const answer = textNodes.find(textNode => textNode.id === 14)
            if(genDoor === 1) {
                if(aDecider === 1) {
                    if(pointsComp > pointsPlayer) {
                        if(lieShape) {
                            answer.text = answer.text.concat(' circle')
                        } else {
                            answer.text = answer.text.concat(' triangle')
                        }
                    }

                    if(pointsPlayer > pointsComp) {
                        if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' square')
                            } else {
                                answer.text = answer.text.concat(' circle')
                            }
                        }

                        if(lieNumber && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' square')
                            } else {
                                answer.text = answer.text.concat(' circle')
                            }
                        }

                        if(lieShape && !lieNumber && !lieColor) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' square')
                            } else {
                                answer.text = answer.text.concat(' circle')
                            }
                        }

                        if(!lieShape) {
                            answer.text = answer.text.concat(' triangle')
                        }
                    }

                    if(pointsPlayer === pointsComp) {
                        if(lieShape) {
                            answer.text = answer.text.concat(' square')
                        } else {
                            answer.text = answer.text.concat(' triangle')
                        }
                    }
                } else {
                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' square')
                        } else {
                            answer.text = answer.text.concat(' circle')
                        }
                    }

                    if(lieNumber && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' square')
                        } else {
                            answer.text = answer.text.concat(' circle')
                        }
                    }

                    if(lieShape && !lieNumber && !lieColor) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' square')
                        } else {
                            answer.text = answer.text.concat(' circle')
                        }
                    }

                    if(!lieShape) {
                        answer.text = answer.text.concat(' triangle')
                    }
                }
               
            }
            
            if(genDoor === 2) {
                if(aDecider === 1) {
                    if(pointsComp > pointsPlayer) {
                        if(lieShape) {
                            answer.text = answer.text.concat(' circle')
                        } else {
                            answer.text = answer.text.concat(' square')
                        }
                    }

                    if(pointsPlayer > pointsComp) {
                        if(lieShape) {
                            answer.text = answer.text.concat(' triangle')
                        } else {
                            answer.text = answer.text.concat(' square')
                        }
                        
                    }

                    if(pointsPlayer === pointsComp) {
                        if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' triangle')
                            } else {
                                answer.text = answer.text.concat(' circle')
                            }
                        }

                        if(lieNumber && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' triangle')
                            } else {
                                answer.text = answer.text.concat(' circle')
                            }
                        }

                        if(lieShape && !lieNumber && !lieColor) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' triangle')
                            } else {
                                answer.text = answer.text.concat(' circle')
                            }
                        }

                        if(!lieShape) {
                            answer.text = answer.text.concat(' square')
                        }
                        
                    }
                } else {
                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' triangle')
                        } else {
                            answer.text = answer.text.concat(' circle')
                        }
                    }

                    if(lieNumber && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' triangle')
                        } else {
                            answer.text = answer.text.concat(' circle')
                        }
                    }

                    if(lieShape && !lieNumber && !lieColor) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' triangle')
                        } else {
                            answer.text = answer.text.concat(' circle')
                        }
                    }

                    if(!lieShape) {
                        answer.text = answer.text.concat(' square')
                    }

                }

            }

            if(genDoor === 3) {
                if(aDecider === 1) {
                    if(pointsComp > pointsPlayer) {
                        if(lieColor && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' triangle')
                            } else {
                                answer.text = answer.text.concat(' square')
                            }

                        }
                        
                        if(lieNumber && lieShape) {
                            const decider = getRandomInt(2)
                            if(decider === 1) {
                                answer.text = answer.text.concat(' triangle')
                            } else {
                                answer.text = answer.text.concat(' square')
                            }
                        }

                        if(lieShape && !lieNumber && !lieColor) {
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

                    if(pointsPlayer > pointsComp) {
                        if(lieShape) {
                            answer.text = answer.text.concat(' triangle')
                        } else {
                            answer.text = answer.text.concat(' circle')
                        }
                    }

                    if(pointsPlayer === pointsComp) {
                        if(lieShape) {
                            answer.text = answer.text.concat(' square')
                        } else {
                            answer.text = answer.text.concat(' circle')
                        }
                    }
                } else {
                    if(lieColor && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' triangle')
                        } else {
                            answer.text = answer.text.concat(' square')
                        }

                    }
                    
                    if(lieNumber && lieShape) {
                        const decider = getRandomInt(2)
                        if(decider === 1) {
                            answer.text = answer.text.concat(' triangle')
                        } else {
                            answer.text = answer.text.concat(' square')
                        }
                    }

                    if(lieShape && !lieNumber && !lieColor) {
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

            }
        }

        if(index === 17) {
            lieColor = false
            lieShape = false
            lieNumber = false

            const pointModifier = textNodes.find(textNode => textNode.id === 17)
            pointModifier.text = pointModifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)


        }
        

    }

    function selectOptionComputer(option) {

            switch(option) {
                case 'Red':
                    colorLeft = true
                    break;
                case 'Blue':
                    colorMid = true;
                    break;
                case 'Green':
                    colorRight = true;
                    break;

            }
        

        
            switch(option) {
                case '1':
                    doorLeft = true;
                    break;
                case '2':
                    doorMid = true;
                    break;
                case '3':
                    doorRight = true;
                    break;
            }
        

        
            switch(option) {
                case 'Triangle':
                    shapeLeft = true;
                    break;
                case 'Square':
                    shapeMid = true;
                    break;
                case 'Circle':
                    shapeRight = true;
                    break;
            }
    }



    function computerResponseEasy(index){
        

        if(index === 10) {
            let answer = textNodes.find(answer => answer.id == 10)
            if(colorLeft && doorLeft && shapeLeft) {
                answer.text = answer.text.concat(' the left door')
                colorLeft = false
                doorLeft = false
                shapeLeft = false
            } else if(colorLeft && doorMid && shapeLeft) {
                answer.text = answer.text.concat(' the left door')
                colorLeft = false
                doorMid = false
                shapeLeft = false
            } else if(colorLeft && doorRight && shapeLeft) {
                answer.text = answer.text.concat(' the left door')
                colorLeft = false
                doorRight = false
                shapeLeft = false

            } else if(colorLeft && doorLeft && shapeMid) {
                answer.text = answer.text.concat(' the left door')
                colorLeft = false
                doorLeft = false
                shapeMid = false
            } else if(colorLeft && doorLeft && shapeRight) {
                answer.text = answer.text.concat(' the left door')
                colorLeft = false
                doorLeft = false
                shapeRight = false
            } else if(colorMid && doorLeft && shapeLeft) {
                answer.text = answer.text.concat(' the left door')
                colorMid = false
                doorLeft = false
                shapeRight = false
            } else if(colorRight && doorLeft && shapeLeft) {
                answer.text = answer.text.concat(' the left door')
                colorRight = false
                doorLeft = false
                shapeRight = false
            } else if(colorMid && doorLeft && shapeRight) {
                answer.text = answer.text.concat(' the left door')
                colorMid = false
                doorLeft = false
                shapeRight = false
            } else if (colorMid && doorRight && shapeLeft) {
                answer.text = answer.text.concat(' the left door')
                colorMid = false
                doorLeft = false
                shapeLeft = false
            }

            if(colorLeft && doorRight && shapeMid) {
                answer.text = answer.text.concat(' the middle door')
                colorLeft = false
                doorRight = false
                shapeMid = false
            } else if(colorLeft && doorMid && shapeMid) {
                answer.text = answer.text.concat(' the middle door')
                colorLeft = false
                doorMid = false
                shapeMid = false
            } else if(colorLeft && doorMid && shapeRight) {
                answer.text = answer.text.concat(' the middle door')
                colorLeft = false
                doorMid = false
                shapeRight = false
            } else if(colorMid && doorLeft && shapeMid) {
                answer.text = answer.text.concat(' the middle door')
                colorLeft = false
                doorLeft = false
                shapeMid = false
            } else if(colorMid && doorMid && shapeMid) {
                answer.text = answer.text.concat(' the middle door')
                colorMid = false
                doorMid = false
                shapeMid = false
            } else if(colorMid && doorRight && shapeMid) {
                answer.text = answer.text.concat(' the middle door')
                colorMid = false
                doorRight = false
                shapeMid = false
            } else if(colorMid && doorMid && shapeLeft) {
                answer.text = answer.text.concat(' the middle door')
                colorMid = false
                doorMid = false
                shapeLeft = false
            } else if(colorMid && doorMid && shapeRight) {
                answer.text = answer.text.concat(' the middle door')
                colorMid = false
                doorMid = false
                shapeLeft = false
            } else if(colorRight && doorMid && shapeMid) {
                answer.text = answer.text.concat(' the middle door')
                colorRight = false
                doorMid = false
                shapeMid = false
            }

            if(colorLeft && doorRight && shapeRight) {
                answer.text = answer.text.concat(' the right door')
                colorLeft = false
                doorRight = false
                shapeRight = false
             } else if(colorMid && doorRight && shapeRight) {
                answer.text = answer.text.concat(' the right door')
                colorMid = false
                doorRight = false
                shapeRight = false
            } else if(colorRight && doorRight && shapeMid) {
                answer.text = answer.text.concat(' the right door')
                colorRight = false
                doorRight = false
                shapeMid = false
            } else if(colorRight && doorLeft && shapeMid) {
                answer.text = answer.text.concat(' the right door')
                colorRight = false
                doorLeft = false
                shapeMid = false
            } else if(colorRight && doorMid && shapeLeft) {
                answer.text = answer.text.concat(' the right door')
                colorRight = false
                doorMid = false
                shapeLeft = false
            } else if(colorRight && doorRight && shapeLeft) {
                answer.text = answer.text.concat(' the right door')
                colorRight = false
                doorRight = false
                shapeLeft = false
            } else if(colorRight && doorLeft && shapeRight) {
                answer.text = answer.text.concat(' the right door')
                colorRight = false
                doorLeft = false
                shapeRight = false
            } else if(colorRight && doorMid && shapeRight) {
                answer.text = answer.text.concat(' the right door')
                colorRight = false
                doorRight = false
                shapeRight = false
            } else if(colorRight && doorRight && shapeRight) {
                answer.text = answer.text.concat(' the right door')
                colorRight = false
                doorRight = false
                shapeRight = false
            }

            let textNodeDoorNumber = textNodes.find(textNodeDoorNumber => textNodeDoorNumber.id === 5)
            const dN = textNodeDoorNumber.text.substring(20,21)
            console.log(dN)

            if(dN === '1') {
                if(answer.text.substring(21) === 'the left door') {
                    answer.text = answer.text.concat('. You lose 3. The computer gains 1.')
                    pointsPlayer -= 3
                    pointsComp += 1
                } else {
                    answer.text = answer.text.concat('. You win 3. The computer loses 1.')
                    pointsPlayer += 3
                    pointsComp -= 1
                }
            }
            if(dN === '2') {
                if(answer.text.substring(21) === 'the middle door') {
                    answer.text = answer.text.concat('. You lose 2. The computer gains 2.')
                    pointsPlayer -= 2
                    pointsComp += 2
                } else {
                    answer.text = answer.text.concat('. You win 2. The computer loses 2.')
                    pointsPlayer += 2
                    pointsComp -= 2
                }
            }
            if(dN === '3') {
                if(answer.text.substring(21) === 'the right door') {
                    answer.text = answer.text.concat('. You lose 1. The computer gains 3.')
                    pointsPlayer -= 1
                    pointsComp += 3
                } else {
                    answer.text = answer.text.concat('. You win 1. The computer loses 3.')
                    pointsPlayer += 1
                    pointsComp -= 3
                }
            }
        }

        if(index === 11) {
            let pointModifier = textNodes.find(textNode => textNode.id === 11)
            pointModifier.text = pointModifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)
            
        }

        



        
        
        
        
        
        

    }

    function computerResponseMedium(index){
        

        if(index === 10) {
            let answer = textNodes.find(answer => answer.id == 10)
            const decider = getRandomInt(3)
            const decider2 = getRandomInt(2)
            const decider3 = getRandomInt(3)
            const decider4 = getRandomInt(3)
            console.log(decider)
            console.log(decider2)
            console.log(decider3)
            console.log(decider4)
            if(colorLeft && doorLeft && shapeLeft) {
                if(decider2 === 1){
                    answer.text = answer.text.concat(' the middle door')
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                
                colorLeft = false
                doorLeft = false
                shapeLeft = false
            } else if(colorLeft && doorMid && shapeLeft) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the middle door')
                    }
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorLeft = false
                doorMid = false
                shapeLeft = false
            } else if(colorLeft && doorRight && shapeLeft) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the middle door')
                }
                colorLeft = false
                doorRight = false
                shapeLeft = false

            } else if(colorLeft && doorLeft && shapeMid) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the middle door')
                    }
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorLeft = false
                doorLeft = false
                shapeMid = false
            } else if(colorLeft && doorLeft && shapeRight) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the middle door')
                }
                colorLeft = false
                doorLeft = false
                shapeRight = false
            } else if(colorMid && doorLeft && shapeLeft) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the middle door')
                    }
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorMid = false
                doorLeft = false
                shapeRight = false
            } else if(colorRight && doorLeft && shapeLeft) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the middle door')
                }
                colorRight = false
                doorLeft = false
                shapeRight = false
            } else if(colorMid && doorLeft && shapeRight) {
                if(decider3 === 1) {
                    answer.text = answer.text.concat(' the left door')
                } else if(decider3 === 2) {
                    answer.text = answer.text.concat(' the middle door')
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorMid = false
                doorLeft = false
                shapeRight = false
            } else if (colorMid && doorRight && shapeLeft) {
                if(decider3 === 1) {
                    answer.text = answer.text.concat(' the left door')
                } else if(decider3 === 2) {
                    answer.text = answer.text.concat(' the middle door')
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorMid = false
                doorLeft = false
                shapeLeft = false
            }

            if(colorLeft && doorRight && shapeMid) {
                if(decider3 === 1) {
                    answer.text = answer.text.concat(' the left door')
                } else if(decider3 === 2) {
                    answer.text = answer.text.concat(' the middle door')
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorLeft = false
                doorRight = false
                shapeMid = false
            } else if(colorLeft && doorMid && shapeMid) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the middle door')
                    }
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorLeft = false
                doorMid = false
                shapeMid = false
            } else if(colorLeft && doorMid && shapeRight) {
                if(decider3 === 1) {
                    answer.text = answer.text.concat(' the left door')
                } else if(decider3 === 2) {
                    answer.text = answer.text.concat(' the middle door')
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorLeft = false
                doorMid = false
                shapeRight = false
            } else if(colorMid && doorLeft && shapeMid) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the middle door')
                    }
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorLeft = false
                doorLeft = false
                shapeMid = false
            } else if(colorMid && doorMid && shapeMid) {
                if(decider2 === 1){
                    answer.text = answer.text.concat(' the left door')
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorMid = false
                doorMid = false
                shapeMid = false
            } else if(colorMid && doorRight && shapeMid) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the middle door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the left door')
                }
                colorMid = false
                doorRight = false
                shapeMid = false
            } else if(colorMid && doorMid && shapeLeft) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the middle door')
                    }
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorMid = false
                doorMid = false
                shapeLeft = false
            } else if(colorMid && doorMid && shapeRight) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the middle door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the left door')
                }
                colorMid = false
                doorMid = false
                shapeLeft = false
            } else if(colorRight && doorMid && shapeMid) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the middle door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the left door')
                }
                colorRight = false
                doorMid = false
                shapeMid = false
            }

            if(colorLeft && doorRight && shapeRight) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the middle door')
                }
                colorLeft = false
                doorRight = false
                shapeRight = false
             } else if(colorMid && doorRight && shapeRight) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the middle door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the left door')
                }
                colorMid = false
                doorRight = false
                shapeRight = false
            } else if(colorRight && doorRight && shapeMid) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the middle door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the left door')
                }
                colorRight = false
                doorRight = false
                shapeMid = false
            } else if(colorRight && doorLeft && shapeMid) {
                if(decider3 === 1) {
                    answer.text = answer.text.concat(' the left door')
                } else if(decider3 === 2) {
                    answer.text = answer.text.concat(' the middle door')
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorRight = false
                doorLeft = false
                shapeMid = false
            } else if(colorRight && doorMid && shapeLeft) {
                if(decider3 === 1) {
                    answer.text = answer.text.concat(' the left door')
                } else if(decider3 === 2) {
                    answer.text = answer.text.concat(' the middle door')
                } else {
                    answer.text = answer.text.concat(' the right door')
                }
                colorRight = false
                doorMid = false
                shapeLeft = false
            } else if(colorRight && doorRight && shapeLeft) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the middle door')
                }
                colorRight = false
                doorRight = false
                shapeLeft = false
            } else if(colorRight && doorLeft && shapeRight) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the left door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the middle door')
                }
                colorRight = false
                doorLeft = false
                shapeRight = false
            } else if(colorRight && doorMid && shapeRight) {
                if(decider != 3){
                    if(decider4 != 1){
                        answer.text = answer.text.concat(' the middle door')
                    } else {
                        answer.text = answer.text.concat(' the right door')
                    }
                } else {
                    answer.text = answer.text.concat(' the left door')
                }
                colorRight = false
                doorRight = false
                shapeRight = false
            } else if(colorRight && doorRight && shapeRight) {
                if(decider2 === 1){
                    answer.text = answer.text.concat(' the left door')
                } else {
                    answer.text = answer.text.concat(' the middle door')
                }
                colorRight = false
                doorRight = false
                shapeRight = false
            }

            let textNodeDoorNumber = textNodes.find(textNodeDoorNumber => textNodeDoorNumber.id === 5)
            const dN = textNodeDoorNumber.text.substring(20,21)

            if(dN === '1') {
                if(answer.text.substring(21) === 'the left door') {
                    answer.text = answer.text.concat('. You lose 3. The computer gains 1.')
                    pointsPlayer -= 3
                    pointsComp += 1
                } else {
                    answer.text = answer.text.concat('. You win 3. The computer loses 1.')
                    pointsPlayer += 3
                    pointsComp -= 1
                }
            }
            if(dN === '2') {
                if(answer.text.substring(21) === 'the middle door') {
                    answer.text = answer.text.concat('. You lose 2. The computer gains 2.')
                    pointsPlayer -= 2
                    pointsComp += 2
                } else {
                    answer.text = answer.text.concat('. You win 2. The computer loses 2.')
                    pointsPlayer += 2
                    pointsComp -= 2
                }
            }
            if(dN === '3') {
                if(answer.text.substring(21) === 'the right door') {
                    answer.text = answer.text.concat('. You lose 1. The computer gains 3.')
                    pointsPlayer -= 1
                    pointsComp += 3
                } else {
                    answer.text = answer.text.concat('. You win 1. The computer loses 3.')
                    pointsPlayer += 1
                    pointsComp -= 3
                }
            }
            

            

        }
        if(index === 11) {
            let pointModifier = textNodes.find(textNode => textNode.id === 11)
            pointModifier.text = pointModifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)
            
        }
    }

    function computerResponseHard(index) {
        if(index === 10) {
            let answer = textNodes.find(answer => answer.id == 10)
            const decider = getRandomInt(4)
            const decider2 = getRandomInt(10)
            const decider4 = getRandomInt(4)
            const decider5 = getRandomInt(10)
            const decider6 = getRandomInt(2)
            const decider7 = getRandomInt(3)

            if(decider === 1) {

                if(pointsPlayer != pointsComp) { 
                    
                    if(decider6 === 1) {

                        if(colorLeft && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorLeft && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorLeft && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorMid = false
                        } else if(colorLeft && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorLeft && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorLeft && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorLeft && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorLeft = false

                        } else if(colorLeft && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorLeft && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorRight = false
                        }

                        if(colorMid && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorMid && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorMid && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorMid && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorMid && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorMid && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorMid && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorMid && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorMid && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorRight = false
                        }

                        if(colorRight && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorRight && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorMid = false
                         } else if(colorRight && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorRight && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorRight && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorRight && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorRight && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorRight && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorRight && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorRight = false
                        }
                    } else {
                        if(colorLeft && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorLeft && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorLeft && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorMid = false
                        } else if(colorLeft && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 4) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorLeft && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorLeft && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorLeft && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorLeft = false

                        } else if(colorLeft && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorLeft && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorRight = false
                        }

                        if(colorMid && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorMid && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 4) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorMid && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorMid && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorMid && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorMid && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorMid && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorMid && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorMid && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorRight = false
                        }

                        if(colorRight && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorRight && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorMid = false
                         } else if(colorRight && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorRight && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorRight && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorRight && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorRight && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorRight && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorRight && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorRight = false
                        }
                    }
                } else {
                    if(decider4 === 1 || decider === 2) {
                        if(colorLeft && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorLeft && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorLeft && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorMid = false
                        } else if(colorLeft && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorLeft && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorLeft && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorLeft && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorLeft = false

                        } else if(colorLeft && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorLeft && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorRight = false
                        }

                        if(colorMid && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorMid && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorMid && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorMid = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorMid && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorMid && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorMid && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorMid && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorMid && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorMid && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorRight = false
                        }

                        if(colorRight && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorRight && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorMid = false
                         } else if(colorRight && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorRight && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorRight && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorRight && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorRight && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorRight && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorRight && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorRight = false
                        }
                    } else if(decider4 === 3) {
                        if(colorLeft && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorLeft && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorLeft && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorMid = false
                        } else if(colorLeft && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 4) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorLeft && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorLeft && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorLeft && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorLeft = false

                        } else if(colorLeft && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorLeft && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorRight = false
                        }

                        if(colorMid && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorMid && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 4) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorMid && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorMid && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorMid && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorMid && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorMid && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorMid && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorMid && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorRight = false
                        }

                        if(colorRight && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorRight && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the left door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorMid = false
                         } else if(colorRight && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorRight && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorRight && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorRight && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorRight && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the middle door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorRight && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorRight && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the right door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the left door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorRight = false
                        }
                    } else {
                        if(colorLeft && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorLeft && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorLeft && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorLeft = false
                            shapeMid = false
                            doorMid = false
                        } else if(colorLeft && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorLeft && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorLeft && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorLeft && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorLeft = false

                        } else if(colorLeft && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorLeft && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorRight = false
                        }

                        if(colorMid && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorMid && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorLeft = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorMid && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorMid && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorMid && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorMid && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorMid = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorMid && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorMid && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorMid && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorMid = false
                            shapeRight = false
                            doorRight = false
                        }

                        if(colorRight && shapeMid && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorLeft = false
                        } else if(colorRight && shapeMid && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorMid = false
                         } else if(colorRight && shapeMid && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeMid = false
                            doorRight = false
                        } else if(colorRight && shapeLeft && doorLeft) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorLeft = false
                        } else if(colorRight && shapeLeft && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5 || decider2 === 6) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorMid = false
                        } else if(colorRight && shapeLeft && doorRight) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeLeft = false
                            doorRight = false
                        } else if(colorRight && shapeRight && doorLeft) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorLeft = false
                        } else if(colorRight && shapeRight && doorMid) {
                            if(decider2 === 1 || decider2 === 2) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 3 || decider2 === 4 || decider2 === 5) {
                                answer.text = answer.text.concat(' the middle door')
                            } else {
                                answer.text = answer.text.concat(' the right door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorMid = false
                        } else if(colorRight && shapeRight && doorRight) {
                            if(decider2 === 1 || decider2 === 2 || decider2 === 3) {
                                answer.text = answer.text.concat(' the left door')
                            } else if(decider2 === 4) {
                                answer.text = answer.text.concat(' the right door')
                            } else {
                                answer.text = answer.text.concat(' the middle door')
                            }
                            colorRight = false
                            shapeRight = false
                            doorRight = false
                        }
                    }
                }
            } else {
                    if(colorLeft && shapeMid && doorRight) {
                        if(decider7 === 1) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider7 === 2) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorLeft = false
                        shapeMid = false
                        doorRight = false
                    } else if(colorLeft && shapeMid && doorLeft) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the middle door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the right door')
                        } else {
                            answer.text = answer.text.concat(' the left door')
                        }
                        colorLeft = false
                        shapeMid = false
                        doorLeft = false
                    } else if(colorLeft && shapeMid && doorMid) {
                        if(decider5 === 1 || decider5 === 2) {
                            answer.text = answer.text.concat(' the right door')
                        } else if(decider5 === 3 || decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the left door')
                        } else {
                            answer.text = answer.text.concat(' the middle door')
                        }
                        colorLeft = false
                        shapeMid = false
                        doorMid = false
                    } else if(colorLeft && shapeLeft && doorLeft) {
                        if(decider5 === 1 || decider5 === 2) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider5 === 3 || decider5 === 4 || decider5 === 5 || decider5 === 6) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorLeft = false
                        shapeLeft = false
                        doorLeft = false
                    } else if(colorLeft && shapeLeft && doorMid) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the middle door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the right door')
                        } else {
                            answer.text = answer.text.concat(' the left door')
                        }
                        colorLeft = false
                        shapeLeft = false
                        doorMid = false
                    } else if(colorLeft && shapeLeft && doorRight) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the right door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the left door')
                        }
                        colorLeft = false
                        shapeLeft = false
                        doorRight = false
                    } else if(colorLeft && shapeRight && doorLeft) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the right door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the left door')
                        }
                        colorLeft = false
                        shapeRight = false
                        doorLeft = false

                    } else if(colorLeft && shapeRight && doorMid) {
                        if(decider7 === 1) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider7 === 2) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorLeft = false
                        shapeRight = false
                        doorMid = false
                    } else if(colorLeft && shapeRight && doorRight) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorLeft = false
                        shapeRight = false
                        doorRight = false
                    }

                    if(colorMid && shapeMid && doorLeft) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the right door')
                        } else {
                            answer.text = answer.text.concat(' the middle door')
                        }
                        colorMid = false
                        shapeMid = false
                        doorLeft = false
                    } else if(colorMid && shapeMid && doorMid) {
                        if(decider5 === 1 || decider5 === 2) {
                            answer.text = answer.text.concat(' the middle door')
                        } else if(decider5 === 3 || decider5 === 4 || decider5 === 5 || decider5 === 6) {
                            answer.text = answer.text.concat(' the left door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorLeft = false
                        shapeRight = false
                        doorLeft = false
                    } else if(colorMid && shapeMid && doorRight) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the right door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the left door')
                        } else {
                            answer.text = answer.text.concat(' the middle door')
                        }
                        colorMid = false
                        shapeMid = false
                        doorRight = false
                    } else if(colorMid && shapeLeft && doorLeft) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the middle door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the right door')
                        } else {
                            answer.text = answer.text.concat(' the left door')
                        }
                        colorMid = false
                        shapeLeft = false
                        doorLeft = false
                    } else if(colorMid && shapeLeft && doorMid) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the right door')
                        } else {
                            answer.text = answer.text.concat(' the middle door')
                        }
                        colorMid = false
                        shapeLeft = false
                        doorMid = false
                    } else if(colorMid && shapeLeft && doorRight) {
                        if(decider7 === 1) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider7 === 2) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorMid = false
                        shapeLeft = false
                        doorRight = false
                    } else if(colorMid && shapeRight && doorLeft) {
                        if(decider7 === 1) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider7 === 2) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorMid = false
                        shapeRight = false
                        doorLeft = false
                    } else if(colorMid && shapeRight && doorMid) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the right door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the left door')
                        } else {
                            answer.text = answer.text.concat(' the middle door')
                        }
                        colorMid = false
                        shapeRight = false
                        doorMid = false
                    } else if(colorMid && shapeRight && doorRight) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the middle door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the left door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorMid = false
                        shapeRight = false
                        doorRight = false
                    }

                    if(colorRight && shapeMid && doorLeft) {
                        if(decider7 === 1) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider7 === 2) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorRight = false
                        shapeMid = false
                        doorLeft = false
                    } else if(colorRight && shapeMid && doorMid) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the right door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the left door')
                        } else {
                            answer.text = answer.text.concat(' the middle door')
                        }
                        colorRight = false
                        shapeMid = false
                        doorMid = false
                     } else if(colorRight && shapeMid && doorRight) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the middle door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the left door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorRight = false
                        shapeMid = false
                        doorRight = false
                    } else if(colorRight && shapeLeft && doorLeft) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the right door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the left door')
                        }
                        colorRight = false
                        shapeLeft = false
                        doorLeft = false
                    } else if(colorRight && shapeLeft && doorMid) {
                        if(decider7 === 1) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider7 === 2) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorRight = false
                        shapeLeft = false
                        doorMid = false
                    } else if(colorRight && shapeLeft && doorRight) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorRight = false
                        shapeLeft = false
                        doorRight = false
                    } else if(colorRight && shapeRight && doorLeft) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the left door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorRight = false
                        shapeRight = false
                        doorLeft = false
                    } else if(colorRight && shapeRight && doorMid) {
                        if(decider5 === 1 || decider5 === 2 || decider5 === 3) {
                            answer.text = answer.text.concat(' the middle door')
                        } else if(decider5 === 4 || decider5 === 5) {
                            answer.text = answer.text.concat(' the left door')
                        } else {
                            answer.text = answer.text.concat(' the right door')
                        }
                        colorRight = false
                        shapeRight = false
                        doorMid = false
                    } else if(colorRight && shapeRight && doorRight) {
                        if(decider5 === 1 || decider5 === 2) {
                            answer.text = answer.text.concat(' the right door')
                        } else if(decider5 === 3 || decider5 === 4 || decider5 === 5 || decider5 === 6) {
                            answer.text = answer.text.concat(' the middle door')
                        } else {
                            answer.text = answer.text.concat(' the left door')
                        }
                        colorRight = false
                        shapeRight = false
                        doorRight = false
                    }
                    

                
            }
            let textNodeDoorNumber = textNodes.find(textNodeDoorNumber => textNodeDoorNumber.id === 5)
            const dN = textNodeDoorNumber.text.substring(20,21)

            if(dN === '1') {
                if(answer.text.substring(21) === 'the left door') {
                    answer.text = answer.text.concat('. You lose 3. The computer gains 1.')
                    pointsPlayer -= 3
                    pointsComp += 1
                } else {
                    answer.text = answer.text.concat('. You win 3. The computer loses 1.')
                    pointsPlayer += 3
                    pointsComp -= 1
                }
            }
            if(dN === '2') {
                if(answer.text.substring(21) === 'the middle door') {
                    answer.text = answer.text.concat('. You lose 2. The computer gains 2.')
                    pointsPlayer -= 2
                    pointsComp += 2
                } else {
                    answer.text = answer.text.concat('. You win 2. The computer loses 2.')
                    pointsPlayer += 2
                    pointsComp -= 2
                }
            }
            if(dN === '3') {
                if(answer.text.substring(21) === 'the right door') {
                    answer.text = answer.text.concat('. You lose 1. The computer gains 3.')
                    pointsPlayer -= 1
                    pointsComp += 3
                } else {
                    answer.text = answer.text.concat('. You win 1. The computer loses 3.')
                    pointsPlayer += 1
                    pointsComp -= 3
                }
            }
        }
        if(index === 11) {
            let pointModifier = textNodes.find(textNode => textNode.id === 11)
            pointModifier.text = pointModifier.text.concat( "Player: " + pointsPlayer + "\n" +  "Computer: " + pointsComp)

        }
    }
    

    

    


    const textNodes = [
        {
            id: 1,
            text: 'Choose Computer Difficulty',
            options: [
                {
                    text: 'Easy',
                    nextText: 2
                },
                {
                    text: 'Medium',
                    nextText: 3
                },
                {
                    text: 'Hard',
                    nextText: 4
                }
            ]
                

            
            
        },
        {
            id: 2,
            text: 'Choose Role',
            options: [
                {
                    text: 'Sender',
                    nextText: 5
                },
                {
                    text: 'Receiver',
                    nextText: 6
                }
            ]
            
        },
        {
            id: 3,
            text: 'Choose Role',
            options: [
                {
                    text: 'Sender',
                    nextText: 5
                },
                {
                    text: 'Receiver',
                    nextText: 6
                }
            ]

        },
        {
            id: 4,
            text: 'Choose Role',
            options: [
                {
                    text: 'Sender',
                    nextText: 5
                },
                {
                    text: 'Receiver',
                    nextText: 6
                }
            ]
        },
        {
            id: 5,
            text: 'Your door number is ',
            options: [
                {
                    text: 'Proceed',
                    nextText: 7
                }
            ]

        },
        {
            id: 6,
            text: 'The computer is randomly given a door. It will give you descriptions of the door',
            options: [
                {
                    text: 'Proceed',
                    nextText: 12
                }
            ]

        },
        {
            id: 7,
            text: 'What color is your door?',
            options: [
                {
                    text: 'Red',
                    nextText: 8
                },
                {
                    text: 'Blue',
                    nextText: 8
                },
                {
                    text: 'Green',
                    nextText: 8
                }
            ]
        },
        {
            id: 8,
            text: 'What number is on your door?',
            options: [
                {
                    text: '1',
                    nextText: 9
                },
                {
                    text: '2',
                    nextText: 9
                },
                {
                    text: '3',
                    nextText: 9
                },
            ]
        },
        {
            id: 9,
            text: 'What shape is your door?',
            options: [
                {
                    text: 'Triangle',
                    nextText: 10
                },
                {
                    text: 'Square',
                    nextText: 10
                },
                {
                    text: 'Circle',
                    nextText: 10
                }
            ]
        },
        {
            id: 10,
            text: 'The computer guessed',
            options: [
                {
                    text: 'Proceed',
                    nextText: 11
                }
            ]
        },
        {
            id: 11,
            text: 'Point totals: \n',
            options: [
                {
                    text: 'Next turn',
                    nextText: 5
                }

            ]
        },
        {
            id: 12,
            text: 'The computer said that the door color was',
            options: [
                {
                    text: 'Next hint',
                    nextText: 13
                }
            ]
        },
        {
            id: 13,
            text: 'The computer said that the door number was',
            options: [
                {
                    text: 'Next hint',
                    nextText: 14
                }
            ]
        },
        {
            id: 14,
            text: 'The computer said that the door shape was',
            options: [
                {
                    text: 'Proceed',
                    nextText: 15
                }
            ]
        },
        {
            id: 15,
            text: 'What door do you think the computer had?',
            options: [
                {
                    text: 'Left Door',
                    nextText: 16
                },
                {
                    text: 'Middle Door',
                    nextText: 16
                },
                {
                    text: 'Right Door',
                    nextText: 16
                }
            ]
        },
        {
            id: 16,
            text: 'You guessed',
            options: [
                {
                    text: 'Proceed',
                    nextText: 17
                }
            ]
        },
        {
            id: 17,
            text: 'Point totals: \n',
            options: [
                {
                    text: 'Next turn',
                    nextText: 6
                }

            ]

        },
        {
            id: 18,
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

export default Game1