
var userName= prompt('Please Enter your Name!')
alert('Welcome ' + userName +' :)')
if (confirm('Do you want to save your name into the database?')) {
  console.log('Thing was saved to the database.');
} else {
  console.log('Thing was not saved to the database.');
}
var userBook= prompt('Please Enter ( ara ) for Arabic Books or ( eng ) for English books!')
if(userBook === 'ara'){
window.location.href = 'https://jamalon.com/ar/books';
}else if(userBook === 'eng'){
  window.location.href = 'https://jamalon.com/en/enbooks';
}else {
  alert('You must only choose (Arabic or English)!')
  alert('Refresh the page to start again !!')
}