function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    document.getElementById('ageResult').innerText = `Age: ${age} years`;
}
// SIP Calculator
function calculateSIP() {
    const p = parseFloat(document.getElementById('sipAmount').value);
    const r = parseFloat(document.getElementById('sipRate').value) / 100 / 12;
    const n = parseFloat(document.getElementById('sipPeriod').value) * 12;

    const futureValue = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    document.getElementById('sipResult').innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
}

// GST Calculator
function calculateGST() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('gstRate').value);
    const gstAmount = (amount * rate) / 100;
    const totalAmount = amount + gstAmount;
    
    document.getElementById('gstResult').innerText = `GST Amount: ₹${gstAmount.toFixed(2)}\nTotal Amount: ₹${totalAmount.toFixed(2)}`;
}

// Retirement Calculator
function calculateRetirement() {
    const currentAge = parseInt(document.getElementById('currentAge').value);
    const retirementAge = parseInt(document.getElementById('retirementAge').value);
    const yearsLeft = retirementAge - currentAge;

    if (yearsLeft < 0) {
        document.getElementById('retirementResult').innerText = "You're already eligible for retirement!";
    } else {
        document.getElementById('retirementResult').innerText = `Years left until retirement: ${yearsLeft}`;
    }
}
