function go() 
{
 var ui = DocumentApp.getUi();
 var response = ui.prompt('What word do you want to highlight?', ui.ButtonSet.OK);
 var a = response.getResponseText() //ask for word
 var response = ui.prompt('Purple, Red, Blue, Yellow, Green, Pink or Orange?', ui.ButtonSet.OK);
 var cob = response.getResponseText()
 var co;
 //convert color to hex
  if (cob == 'purple') {co = '#800080'} //god awful color library
  if (cob == 'red') {co = '#ff0000'} // dont ever use something like this in real code
  if (cob == 'blue') {co = '#00FFFF'}
  if (cob == 'yellow') {co = '#EEE8AA'}
  if (cob == 'green') {co = '#98FB98'}
  if (cob == 'pink') {co = '#FFB6C1'}
  if (cob == 'orange') {co = '#FFA500'}
 var b = ' ' + a + ' ';
 highlightText(b, co);
 //enter word to highlight and color
}

function highlightText(findMe, col) {
  
  var body = DocumentApp.getActiveDocument().getBody();
  var foundElement = body.findText(findMe);
  
  while (foundElement != null) {
        // Get the text object from the [aragrpah
     var foundText = foundElement.getElement().asText();

        // looks for text
     var start = foundElement.getStartOffset();
     var end = foundElement.getEndOffsetInclusive();

        // Change the background color to whatever
     foundText.setBackgroundColor(start, end, col);

        // Find the next match
     foundElement = body.findText(findMe, foundElement);
    }
}