var contents = " " ;
function readMultipleFiles(evt) {
    //Retrieve all the files from the FileList object
    var files = evt.target.files;

    if (files) {
        for (var i = 0, f; f = files[i]; i++) {
            var r = new FileReader();
            r.onload = (function (f) {
                return function (e) {
                    contents = e.target.result;
                   processData(contents);
                };
            })(f);
            r.readAsText(f);
        }
    } else {
        alert("Failed to load files");
    }
}
document.getElementById('fileinput').addEventListener('change', readMultipleFiles, false);



var allTextLines = " ";
var lyrics = [];
var tim = [] ;
var line = " ";


// parsing the Lyrics 
function processData(allText) { // This will only divide with respect to new lines 
    allTextLines = allText.split(/\r\n|\n/);
	
	 next();
   } 
 function next()
 {
for (i=0;i<allTextLines.length;i++)
{
if (allTextLines[i].search(/^(\[)(\d*)(:)(.*)(\])(.*)/i)>=0 )// any line without the prescribed format wont enter this loop 
{
	line = allTextLines[i].match(/^(\[)(\d*)(:)(.*)(\])(.*)/i);
		tim[i] = (parseInt(line[2])*60)+ parseInt(line[4]); // will give seconds 
		lyrics[i]= line[6] ;//will give lyrics 
		
 }
 }	

  } 