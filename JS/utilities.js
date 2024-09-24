// Input Add Money and Cash Out value---
function getInputFieldValueById(id) {
  const addInputMoney = document.getElementById(id).value;
  const addNumberInput = parseFloat(addInputMoney);
  return addNumberInput;
}

//Text Add Money and Cash Out value---
function getTextFieldValueById(id) {
  const textAddMoney = document.getElementById(id).innerText;
  const textNumberMoney = parseFloat(textAddMoney);
  return textNumberMoney;
}