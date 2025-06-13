let score = JSON.parse(localStorage.getItem('score'));
        
        if(score === null){
            
            score = {
                Win: 0,
                Loss: 0,
                Tie: 0
            }
            
        }
        updatescoreElement();
       
        
        let result = '';
        function personMove(move){
            const randomNumber = Math.random();
            
            if(randomNumber <= 1/3){
                computerMove = 'Rock';
            }
            else if(randomNumber > 1/3 && randomNumber < 2/3){
                computerMove = 'Paper';
            }
            else{
                computerMove = 'Scissor';
            }
            
            
            if(move === 'Rock'){
                if(computerMove === 'Rock'){
                    result = 'Tie';
                    // score.Tie ++;
                }
                else if(computerMove === 'Paper'){
                    result = 'Loss';
                    // score.Loss ++;
                }
                else if(computerMove === 'Scissor'){
                    result = 'Win';
                // score.Win ++;
            }
        }
        if(move === 'Paper'){
            if(computerMove === 'Rock'){
                result = 'Win';
                // score.Win ++;
            }
            else if(computerMove === 'Paper'){
                result = 'Tie';
                // score.Tie ++;
            }
            else if(computerMove === 'Scissor'){
                result = 'Loss';
                // score.Loss ++;
            }
        }
        if(move === 'Scissor'){
            if(computerMove === 'Rock'){
                result = 'Loss';
                // score.Loss ++;
            }
            else if(computerMove === 'Paper'){
                result = 'Win';
                // score.Win ++;
            }
            else if(computerMove === 'Scissor'){
                result = 'Tie';
                // score.Tie ++;
            }
        }
        if(result==='Win'){
            score.Win ++;
        }
        else if(result === 'Loss'){
            score.Loss ++;
        }
        else{
            score.Tie ++;
        }
        localStorage.setItem('score',JSON.stringify(score));
        
        updatescoreElement();
        
        document.querySelector('.js-result').innerHTML = `${result}`;

        document.querySelector('.js-moves').innerHTML = ` you choosed <img src="images/Rock Paper Scissor Game_files/${move}-emoji.png" class="css-moves">, computer choosed <img src="images/Rock Paper Scissor Game_files/${computerMove}-emoji.png" class="css-moves">`;

//         alert(`you choosed ${move}, computer choosed ${computerMove}, and the game ${result}
// Wins: ${score.Win}, Losses: ${score.Loss}, Ties: ${score.Tie}`);
        
// console.log(result);
       }
       function updatescoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.Win}, Losses: ${score.Loss}, Ties: ${score.Tie}`;
       }