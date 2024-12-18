function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const conversionType = document.getElementById('conversionType').value;
    let result = '';
  
    if (isNaN(value)) {
      result = 'Please enter a valid number.';
    } else {
      switch (conversionType) {
        case 'mass-kg-to-lb':
          result = `${value} kg = ${(value * 2.20462).toFixed(2)} lb`;
          break;
        case 'mass-lb-to-kg':
          result = `${value} lb = ${(value / 2.20462).toFixed(2)} kg`;
          break;
        case 'length-m-to-ft':
          result = `${value} meters = ${(value * 3.28084).toFixed(2)} feet`;
          break;
        case 'length-ft-to-m':
          result = `${value} feet = ${(value / 3.28084).toFixed(2)} meters`;
          break;
        default:
          result = 'Invalid conversion type.';
      }
    }
  
    document.getElementById('result').textContent = result;
  }
  