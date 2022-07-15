var flag= true;
function display() {
	if(flag){
		var str =` <form>
			<fieldset><legend>Loan Form</legend>
				Enter Applicant Name: <input type="text" name="Name" placeholder="FirstName LastName"><br><br>
				Select type of Loan : <select name="loans" onchange="selection()">
					<option value="1" >Home Loan</option>
					<option value="2" >Car Loan</option>
					<option value="3" >Personal Loan</option>
				</select><br><br>
				Enter the Loan Amount: <input type="number" name="amount" ><br><br>
				Rate of Interest : <input type="number" id="roi"  name="roi" disabled ><br><br>
				Duration in Years: <input type="number" id="duration" name="years"  disabled ><br><br>
				Monthly EMI : <input type="text" name="emi" disabled><br><br>
				<input type="button" onclick="calculateemi(amount.value)" name="calculateemi" value="Calculate EMI">
			</fieldset>
		</form>`

		document.getElementById('loanform').innerHTML = str
	}

}

function calculateemi(amount,num){

	var p=amount;
	switch(num){

		case 1:var h=7;var d= 25;

		document.getElementById('roi').value = h;
		document.getElementById('duration').value=
		break;
		case 2:var h=9;var d= 18;
		document.getElementById('roi').value =  h;
		break;
		case 3: var h=12;var d= 15;
		document.getElementById('roi').value = h;
		break;
	}
}