/****
  * File containing titbits of personal info
  *
  */

// Variable to hold all titbit strings
const titbitData = [
  "For a long time I wanted to be exactly 6'1 in height",
  "The right side of my nose got burnt by conc.HCl",
  "Often my head tilts to the left without me noticing it",
  "I belong to the group of people who haven't watched Game of Thrones",
  "I played basketball a lot at school, however not so much in college",
  "Assassins creed (I - III) are among my favourite games of all time",
  "My first name means something along the lines of 'one who walks the right path'",
  "I used to play pokemon go, but all that stopped after COVID",
  "For a while i thought a century was a 1000 years",
  "I tried playing dota, but gave up beacuse I couldn't be bothered to try hard",
  "In school my nickname was 'black mamba'. The nickname had nothing to do with Kobe Bryant",
  "In college, the basketball team's nickname for me was faculty's kid",
  "I played R6 siege for a while, but had to stop beacuse I had to switch to a linux OS",
  "Sometimes I wish I could electrocute people with just a touch",
  "I wonder if all this data about me is enough to build a complete psych profile",
  "If I could turn invisible, the second thing I would do is scare people"
];

// Function to select a titbit string at random
function getTitbit(){
  // Return selected titbit
  return titbitData[ Math.floor(Math.random()*titbitData.length) ];
}
