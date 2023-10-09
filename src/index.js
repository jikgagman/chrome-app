const guessNumForm = document.querySelector(".guessNumForm");
const rangeNumInput = document.querySelector(".rangeNum");
const guessNumInput = document.querySelector(".guessNum");
const printChoosenNum = document.querySelector(".printChoosenNum");
const printGameResult = document.querySelector(".printGameResult");

function getResult(randomNum, guessNum) {
  printChoosenNum.innerText = `You chose: ${guessNum}, teh machine chose: ${randomNum}.`;
  guessNum = parseInt(guessNum, 10);
  /*
  처음 코드를 실행하였을때, 유저가 입력한 guessNum과 randomNum이 일치하는 경우가
  나오지 않았는데, 이때 guessNum, rnageNum, randomNum의 타입 값을 콘솔에 띄워
  확인해보았더니 guessNum과 rangeNum은 string, randomNum은 number가 나옴을
  확인할수 있었다. 따라서 위 문장을 통해 guessNum을 정수로 변환하여 정확한 비교를
  할수 있었디. 또한 parsInt는 두번째 인수로 radix를 받는다. 0x로 시작되는 문자열
  을 제외하면 모두 10진수로 변환되지만, 예측 가능한 실행을 보장하기위해 인수를 적어
  주었다.
   */
  if (guessNum === randomNum) {
    printGameResult.innerText = "You win!";
  } else {
    printGameResult.innerText = "You lost!";
  }
}

function makeRandomNum(event) {
  event.preventDefault();
  const rangeNum = rangeNumInput.value;
  const guessNum = guessNumInput.value;
  const randomNum = Math.floor(Math.random() * rangeNum);

  if (rangeNum === "") {
    alert("Please write the range number!");
  } else if (guessNum === "") {
    alert("Please write your number!");
  } else if (guessNum > rangeNum) {
    alert("Your number is to big!");
  } else {
    getResult(randomNum, guessNum);
  }
}

guessNumForm.addEventListener("submit", makeRandomNum);
