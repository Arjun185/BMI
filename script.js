function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    document.getElementById('ageResult').innerText = `Age: ${age} years`;
}
