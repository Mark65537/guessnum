const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/", urlencodedParser,function(request, response){ 
    response.sendFile(__dirname + "/main.html");
});

app.use("/game", function(request, response){
    let answer = request.query.answer;
    response.send(checkAnswer(answer));
});
 
app.listen(3000);

//function load(){
      var randomLen=Math.round((Math.random() * 3)+1)
	  var randomNum=""
	
	  if(randomLen==1){
	     randomNum=String(Math.round((Math.random() * 9)))
	  }else{
       for(i=0;i<randomLen;i++){
		   randomNum+=String(Math.round((Math.random() * 9)))
		}
	  }
	
	  var countStep = 1;
	//}
	
	function checkAnswer(answer){

		var result = ""
				 
		  win=0
		for(i=answer.length-1,j=randomLen-1;i>=0;i--,j--){
		    if(answer.length>=randomLen && i<Math.abs(answer.length-randomLen)){
			  if(randomNum.indexOf(answer[i])>-1)
		          result="K"+result
			  else
			      result="-"+result 
			   continue
			 }
		    if(answer[i]==randomNum[j]){			
			 result="B"+result
			 win++;
			 }
			else if(randomNum.indexOf(answer[i])>-1)
		     result="K"+result
			else 
			 result="-"+result 
		}

		if(win==randomLen)
		 text="<p>congratulations</p>"
		else
		 text='<p>#' + countStep + ' Вы ответили: ' + answer + ' : ' + result + '</p>';
	 
		countStep++;
		
		return [
		'<form id="wrap" action="game" method="GET">',		
		'<div id="info">Загадано 4х-значное число:</div>',
		text,
		'<input id="answer" name="answer" type="text">',
		'<input id="send" name="send" type="submit" value="Ответить">'
	    ].join('\n')
	}
