
console.log("what?")

function btnClick (event) {

    let firstname = document.querySelector('#firstNameInput').value;
    let lastName = document.querySelector('#lastNameInput').value;
    let id = document.querySelector('#idInput').value;
    let title = document.querySelector('#titleInput').value;
    let annual = document.querySelector('#annualSalaryInput').value;

    // let newMembers = {
    //     FirstName: Firstname,
    //     LastName: lastName,
    //     ID: id,
    //     Tittle: title,
    //     Annual: annual
    // }
// console.log(newMembers);


let displayTable = document.querySelector('#displayTable')

let tableRow = document.createElement('tr');

tableRow.innerHTML +=
`
<td> ${firstname} </td>
<td> ${lastName}</td>
<td> ${id} </td>
<td>${title} </td>
<td> ${annual}</td>
<td><button class="delete-button"> delete </button></td>

`;

displayTable.append(tableRow);


document.querySelector('#first-name').value = '';
 document.querySelector('#last-name').value = '';
  document.querySelector('#id').value = '';
document.querySelector('#title').value = '';
document.querySelector('#annual').value = '';


monthlyMoney();

}





const submitButto = document.querySelector('#submitButton');

submitButto.addEventListener("click", btnClick)








function monthlyMoney() {


  let annualSalaries = document.querySelectorAll('#displayTable tr td:nth-child(5)');

  let salaries = [];
        for (let cash of annualSalaries) {

          let money = cash.textContent.replace('$', '').replace(',', '');
          let salary = Number(money);
          salaries.push(salary);
        }


        let totalAnnualSalaries = 0;
        for (let salary of salaries) {
            totalAnnualSalaries += salary;
        }


        let totalMonthly = totalAnnualSalaries / 12;
        let note = document.querySelector('#foot-note');
        // if (footerNote.innerHTML !== 2){
        //   footerNote
        // }
        console.log(totalMonthly);


        let footerNote = document.createElement('div');

        note.innerHTML = ' ';

        footerNote.textContent = 
        `
          Total Monthly: ${totalMonthly} 
        
        `;
        

        note.append(footerNote);


        if (totalMonthly > 20000) {
          footerNote.classList.add('over-budget')
      } else {
          footerNote.classList.remove('over-budget')
      }
    
    }

    
monthlyMoney();







let m = document.querySelectorAll('.delete-button')

m.forEach(btn => btn.addEventListener('click', function deleted(event) {
  let deletedRow = btn.parentElement.parentElement;
  deletedRow.remove();
  // alert("worked");
  // console.log('lol');
  } ))

  




// deletebutton.addEventListener('click', deleted);