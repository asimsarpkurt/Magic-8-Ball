//I conducted this project thanks to the content provided by Codecademy. 
//The user will be able to input a question, then our program will output a random fortune
//The Magic 8-Ball is a plastic sphere, made to look like an eight-ball, that is used for fortune-telling or seeking advice. It was invented in 1950 by Albert C. Carter and Abe Bookman and is currently manufactured by Mattel. Source:Wikipedia
// The user asks a yes–no question to the ball, then turns it over to reveal an answer in a window on the ball.
//User inputs his/her name.
const userName = 'Sarp'
userName ? console.log('Hello ' + userName + '!') : console.log('Hello!');
//The question of the user to the Magic 8 Ball.
const userQuestion = 'Will the corruption of global organizations hurt us more?';
//Priting the question
console.log(userName + ' asks that ' + "'" + userQuestion + "'");
//Generate a random number between 0 and 7 
const randomNumber = Math.floor(Math.random() * 8);
//I created variabe named eightball, the value of this variable will depend on th value of randomNumber
let eightBall = '';
switch (randomNumber) {
    case 0:
        eightBall = 'It is impossible! People will wake up.';
        break;
    case 1:
        eightBall = 'My sources say no, big cooparations will lose their power by fighting with each other.';
        break;
    case 2:
        eightBall = 'It seems most likely no, but depends on various conditions';
        break;
    case 3:
        eightBall = 'Outlook not so good.';
        break;
    case 4:
        eightBall = 'Most probably, the ignorance expanded by the media will make people more blind to see the corruption.';
        break;
    case 5:
        eightBall = 'Reply hazy try again';
        break;
    case 6:
        eightBall = 'It is decidedly so, no escape from the this reality.';
        break;
    case 7:
        eightBall = 'It is certain, and sooner than expected.';
        break;
}


//Printing the output of the decision of the Magic Eight Ball.
console.log(eightBall)