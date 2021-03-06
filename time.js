var Lcd = require('lcd');
var lcd = new Lcd({
    rs: 12,
    e: 21,
    data: [5, 6, 17, 18],
    cols: 16,
    rows: 1
  });
 
lcd.on('ready', function() {
  setInterval(function() {
    lcd.setCursor(0, 0);
    lcd.print(new Date().toString().substring(16, 24));    
  }, 1000);  
});
 
function print(str, pos) {
  pos = pos || 0;
 
  if (pos === str.length) {
    pos = 0;
  }
 
  lcd.print(str[pos]);
 
  setTimeout(function() {
    print(str, pos + 1);
  }, 300);
}
 
// If ctrl+c is hit, free resources and exit.
process.on('SIGINT', function() {
  lcd.clear();
  lcd.close();
  process.exit();
});