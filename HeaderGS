function doGet() {
  var doc = DocumentApp.create('untitled') //creates a document called untitled. You can change this to whatever you want.
  var body = doc.getBody();
  
  var date = new Date() //creates date variable which takes todays date
  var wc = 'ADD CLASS NAME HERE' // DECLARE THIS YOURSELF, what writing class do you have, mine says Writing 121.
  var teacher = 'ADD TEACHER HERE' //DECLARE THIS YOURSELF put whatever teacher you have for your class.
  
  doc.setText('Emma Jacobs' + "\n" + date + "\n" + wc + "\n" + teacher); //adds header text. \n is newline
  body.setFontSize(12); //font and fontsize are declared
  body.setFontFamily('Arial'); //you can change this to times new roman if you want
  
  var p=doc.getParagraphs(); //gets paragraphs for the next command.
  
  for(i=0;i<p.length; i++){ //goes through paragraphs found in the last command and changes the setting to double spaced. Basicly just sets entire document to double spacing
    p[i].setLineSpacing(2)
  }
  //var pagenm = countPages() //sets pagenm equal to the number of the current page. uses the countPages method to do this
  //this var doesnt do anything right now though, I havent been able to add a header because there is no identifier for it.
}

function countPages() {
   var blob = DocumentApp.getActiveDocument().getAs("application/pdf"); //all of this is for counting the current page. Not implimented yet. ignore any warnings here
   var data = blob.getDataAsString();
    
   var re = /Pages\/Count (\d+)/g;
   var match;
  
   var pages = 0;
  
   while(match = re.exec(data)) {
      Logger.log("MATCH = " + match[1]);
     
      var value = parseInt(match[1]);
      
      if (value > pages) {
         pages = value;
      }
   }
  
   Logger.log("pages = " + pages);
  
   return pages; //returns number of page
}
