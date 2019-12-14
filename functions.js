var scores;

function getScoreQuestions(questions) {

for(var i=0; i<questions.length; i++){
  if(questions[i].checked)
  {
  scores[questions[i].value]++
  } 
}
}


function getTotal()
{
scores  = {A:0, V:0, K:0, R:0}
var form = document.forms["form"];

for(i=1; i<17; i++){
    getScoreQuestions(form.elements["question"+i]);
}
google.charts.setOnLoadCallback(drawChart);

if (scores.A > scores.K && scores.A > scores.R && scores.A > scores.V ){
document.getElementById('result').innerHTML =
" Seu perfil é Auditivo e você aprende mais ouvindo. De acordo com Nonaka e Takeuchi seu perfil se enquadra no quadrante da Combinação na Espiral do Conhecimento!"
  document.getElementById('Q4').style =   
"width:331px;height:209px;border:2px solid #000; margin-left:333px; margin-top:-207px; position: absolute;background-color:black; opacity: 0.5;"     
  document.getElementById('Q2').style =   "display: block"
  document.getElementById('Q3').style =   "display: block"
  document.getElementById('Q1').style =   "display: block"             
}
if (scores.V > scores.K && scores.V > scores.R && scores.V > scores.A ){
  document.getElementById('result').innerHTML = 
    "Seu perfil é Visual e você aprende mais olhando. De acordo com Nonaka e Takeuchi seu perfil se enquadra nop quadrante da Socialização na Espiral do Conhecimento!"
    document.getElementById('Q1').style = 
  "width:331px;height:209px;border:2px solid #000; margin-left:0px; margin-top:-415px; position: absolute;background-color:black; opacity: 0.5;"
  document.getElementById('Q2').style =   "display: block"
  document.getElementById('Q3').style =   "display: block"
  document.getElementById('Q4').style =   "display: block"                     
  }
  if (scores.K > scores.A && scores.K > scores.R && scores.K > scores.V ){
    document.getElementById('result').innerHTML = 
      "Seu perfil é Sinestésico e você aprende mais fazendo. De acordo com Nonaka e Takeuchi seu perfil se enquadra no quadrante da Internalização na Espiral do Conhecimento!"  
      document.getElementById('Q3').style =     
      "width:331px;height:209px;border:2px solid #000; margin-left:0px; margin-top:-207px; position: absolute;background-color:black; opacity: 0.5;"   
    document.getElementById('Q2').style =   "display: block"
    document.getElementById('Q1').style =   "display: block"
    document.getElementById('Q4').style =   "display: block"                    
    }
    if (scores.R > scores.K && scores.R > scores.A && scores.R > scores.V ){
    document.getElementById('result').innerHTML = 
        "Seu perfil é Leitura e Escrita e você aprende mais lendo e escrevendo. De acordo com Nonaka e Takeuchi seu perfil se enquadra no quadrante da Externalização na Espiral do Conhecimento!"        
    document.getElementById('Q2').style =    
    "width:331px;height:209px;border:2px solid #000; margin-left:333px; margin-top:-415px; position: absolute;background-color:black; opacity: 0.5;"  
    document.getElementById('Q1').style =   "display: block"
    document.getElementById('Q3').style =   "display: block"
    document.getElementById('Q4').style =   "display: block"            
      }
      document.getElementById('image').style = 
      "color: black; font-weight: 700; position: absolute; margin-left:550px; margin-top:-495px; display: block"
      
      

  
}




document.getElementById('calcular').onclick=getTotal;
// Load google charts
google.charts.load('current', {'packages':['corechart']});


  // Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Perfil de Aprendizado'],
  ['Auditiva', scores.A],
  ['Visual', scores.V],
  ['Sinestésico', scores.K],
  ['Leitura/Escrita', scores.R],
 
  
]);

// Optional; add a title and set the width and height of the chart
  var options = {'title':'Perfil de Aprendizagem', 
  'width':650, 
  'height':500,
  fontSize: '19',
  
}


  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
