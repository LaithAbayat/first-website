/*
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
}*/

var userPass=prompt('Please enter your password to explore the website!')
while(userPass!=='666'){
  userPass=prompt('Wrong one! Please try again')
}

var booksNum=prompt("Enter your books number you want to see!")
for(i=0;i<booksNum;i++){
document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg">');
}



