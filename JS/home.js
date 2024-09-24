
//First Input Elements starts ---------------------------------

document.getElementById('btn-first-input').addEventListener('click', function (event) {
  event.preventDefault();

  const inputFirstValue = getInputFieldValueById('first-input-number');
  const balanceFirst = getTextFieldValueById('first-input-balance');
  

  if (typeof inputFirstValue === 'number') {
    const mainFirstBalance = getTextFieldValueById('available-first-balance');
    // Math version
    const totalValue = mainFirstBalance - inputFirstValue;
    const sumDonation = balanceFirst + inputFirstValue;
    
    document.getElementById('available-first-balance').innerText = totalValue;
    document.getElementById('first-input-balance').innerText = sumDonation;
   

    //History Notification---
    const div = document.createElement('p');
    div.innerHTML = `
    <div class="border border-slate-400 my-5 rounded-lg p-5" >
    <p class="font-bold text-xl text-black" >${inputFirstValue} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p>Date:${new Date().toLocaleDateString()} GMT +0600(Bangladesh Standard Time)</p>
    </div>
    `
    document.getElementById('history-add').appendChild(div);
  }
  else {
    alert('you are failed')
  }
})
//First Input Elements ends---------------------------------------

//Second Input Elements starts------------------------------------
document.getElementById('btn-second').addEventListener('click', function (event) {
  event.preventDefault();

  const inputFirstValue = getInputFieldValueById('input-second');
  const balanceFirst = getTextFieldValueById('second-element');
  

  if (typeof inputFirstValue === 'number') {
    const mainFirstBalance = getTextFieldValueById('available-first-balance');
    // Math version
    const totalValue = mainFirstBalance - inputFirstValue;
    const sumDonation = balanceFirst + inputFirstValue;
    
    document.getElementById('available-first-balance').innerText = totalValue;
    document.getElementById('second-element').innerText = sumDonation;
   

    //History Notification---
    const div = document.createElement('p');
    div.innerHTML = `
    <div class="border border-slate-400 my-5 rounded-lg p-5" >
    <p class="font-bold text-xl text-black" >${inputFirstValue} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
    <p>Date:${new Date().toLocaleDateString()} GMT +0600(Bangladesh Standard Time)</p>
    </div>
    `
    document.getElementById('history-add').appendChild(div);
  }
  else {
    alert('you are failed')
  }
})
//Third Input Element starts------------------------------------
document.getElementById('btn-third-element').addEventListener('click', function (event) {
  event.preventDefault();

  const inputFirstValue = getInputFieldValueById('input-third');
  const balanceFirst = getTextFieldValueById('third-element-balance');
  

  if (typeof inputFirstValue === 'number') {
    const mainFirstBalance = getTextFieldValueById('available-first-balance');
    // Math version
    const totalValue = mainFirstBalance - inputFirstValue;
    const sumDonation = balanceFirst + inputFirstValue;
    
    document.getElementById('available-first-balance').innerText = totalValue;
    document.getElementById('third-element-balance').innerText = sumDonation;
   

    //History Notification---
    const div = document.createElement('p');
    div.innerHTML = `
    <div class="border border-slate-400 my-5 rounded-lg p-5" >
    <p class="font-bold text-xl text-black" >${inputFirstValue} Taka is Donated for Aid for Injured in the Quota, Bangladesh</p>
    <p>Date:${new Date().toLocaleDateString()} GMT +0600(Bangladesh Standard Time)</p>
    </div>
    `
    document.getElementById('history-add').appendChild(div);
  }
  else {
    alert('you are failed')
  }
})

//Third Input Element ends-------------------------------------
//Four Input Element starts----------------------------------
document.getElementById('btn-four-input').addEventListener('click', function (event) {
  event.preventDefault();

  const inputFirstValue = getInputFieldValueById('input-four-element');
  const balanceFirst = getTextFieldValueById('four-balance-input');
  

  if (typeof inputFirstValue === 'number') {
    const mainFirstBalance = getTextFieldValueById('available-first-balance');
    // Math version
    const totalValue = mainFirstBalance - inputFirstValue;
    const sumDonation = balanceFirst + inputFirstValue;
    
    document.getElementById('available-first-balance').innerText = totalValue;
    document.getElementById('four-balance-input').innerText = sumDonation;
   

    //History Notification---
    const div = document.createElement('p');
    div.innerHTML = `
    <div class="border border-slate-400 my-5 rounded-lg p-5" >
    <p class="font-bold text-xl text-black" >${inputFirstValue} Taka is Donated for Flood Relief in Khagrachari, Bangladesh</p>
    <p>Date:${new Date().toLocaleDateString()} GMT +0600(Bangladesh Standard Time)</p>
    </div>
    `
    document.getElementById('history-add').appendChild(div);
  }
  else {
    alert('you are failed')
  }
})
//Four Input Element ends------------------------------------
//Five Input Element starts----------------------------------
document.getElementById('btn-five-value').addEventListener('click', function (event) {
  event.preventDefault();

  const inputFirstValue = getInputFieldValueById('input-five-element');
  const balanceFirst = getTextFieldValueById('element-five-balance');
  

  if (typeof inputFirstValue === 'number') {
    const mainFirstBalance = getTextFieldValueById('available-first-balance');
    // Math version
    const totalValue = mainFirstBalance - inputFirstValue;
    const sumDonation = balanceFirst + inputFirstValue;
    
    document.getElementById('available-first-balance').innerText = totalValue;
    document.getElementById('element-five-balance').innerText = sumDonation;
   

    //History Notification---
    const div = document.createElement('p');
    div.innerHTML = `
    <div class="border border-slate-400 my-5 rounded-lg p-5" >
    <p class="font-bold text-xl text-black" >${inputFirstValue} Taka is Donated for Flood Relief in Rangamati, Bangladesh</p>
    <p>Date:${new Date().toLocaleDateString()} GMT +0600(Bangladesh Standard Time)</p>
    </div>
    `
    document.getElementById('history-add').appendChild(div);
  }
  else {
    alert('you are failed')
  }
})
//Five Input Element ends-----------------------------------------
//change input elements-----------------
document.getElementById('donation-tab').addEventListener('click', function () {
  showSectionById('new-element-input');
})
document.getElementById('history-tab').addEventListener('click', function () {
  showSectionById('history-add');
})
document.getElementById('blog-input-elements').addEventListener('click', function () {
  showSectionById('important-question');
})
