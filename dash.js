const apiURL='https://data.covid19india.org/data.json';
var data=[];
async function getData(){
  const response=await fetch(apiURL)
   data=await response.json();
  console.log(data);

    document.getElementById('totalC').innerHTML = data.cases_time_series[data.cases_time_series.length-1].totalconfirmed;
    document.getElementById('totalR').innerHTML = data.cases_time_series[data.cases_time_series.length-1].totalrecovered;
    document.getElementById('totalD').innerHTML = data.cases_time_series[data.cases_time_series.length-1].totaldeceased;
    document.getElementById('todayC').innerHTML = data.cases_time_series[data.cases_time_series.length-1].dailyconfirmed;
    document.getElementById('todayR').innerHTML = data.cases_time_series[data.cases_time_series.length-1].dailyrecovered;
    document.getElementById('todayD').innerHTML = data.cases_time_series[data.cases_time_series.length-1].dailydeceased;
    var taarik=[];
    var number=[];
    for(var i=0;i<data.cases_time_series.length;i++){
        taarik.push(data.cases_time_series[i].date);
        number.push(data.cases_time_series[i].dailyconfirmed)
    }
    return{taarik,number};
 }
    getData();


    // var sarthak=data;


    chartIt();
    async function chartIt(){
      const ctx = document.getElementById('chart_daily').getContext('2d');
      Chart.defaults.font.size = 10;
      const data=await getData();
      const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: data.taarik,
              datasets: [{
                  label: 'Daily_Cases_Confirmed',
                  data: data.number,

                  backgroundColor:
                      'rgba(255, 99, 132, 0.2)',
                  borderColor:
                      'rgba(255, 99, 132, 1)',
                  borderWidth: 1
              }]
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    }
    );
    }
    chartIt30();
    async function chartIt30(){
        const ctx = document.getElementById('chart_daily30').getContext('2d');
        const data=await getData();
        var taarik30=[];
        var number30=[];
        for(var i=0;i<30;i++){
            taarik30.push(data.taarik[data.taarik.length-30+i]);
            number30.push(data.number[data.number.length-30+i]);
        }
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: taarik30,
                datasets: [{
                    label: 'Daily_Cases_Confirmed',
                    data: number30,

                    backgroundColor:
                        'rgba(255, 99, 132, 0.2)',
                    borderColor:
                        'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
      }
      );
      }
    function changeToAll() {
        document.getElementById('last').style.display='block';
        document.getElementById('daily').style.display='block';
        document.getElementById('daily30').style.display='none';
        document.getElementById('all').style.display='none';
    }

    function changeTo30() {
      document.getElementById('last').style.display='none';
      document.getElementById('daily').style.display='none';
      document.getElementById('daily30').style.display='block';
      document.getElementById('all').style.display='block';
    }
    // const apURL='https://api.covid19india.org/data.json';
      async function getDat(){
          const response=await fetch(apiURL);
          const dat=await response.json();
          var array=[];
          array = ["AN","AP","AR","AS","BR","CH","CT","DN","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LA","LD","MP","MH","MN","ML","MZ","NL","OR","PY","PB","RJ","SK","TN","TG","TR","UP","UT","WB"];
               var k=1;
                for(var i=0;i<36;i++){
                    for(var j=0;j<38;j++){
                      if (array[i]==dat.statewise[j].statecode){
                          var arr=array[i];
                          document.getElementById(k).childNodes[1].innerHTML= dat.statewise[j].state;
                          document.getElementById('_'+k).childNodes[1].innerHTML= dat.statewise[j].state;
                          document.getElementById(k).childNodes[2].innerHTML= dat.statewise[j].confirmed;
                          document.getElementById(k).childNodes[3].innerHTML= dat.statewise[j].recovered;
                          document.getElementById(k).childNodes[4].innerHTML= dat.statewise[j].deaths;
                          k++;
                          break;
                      }
                    }
                }
                document.getElementById('accept2').style.display='none';
                document.getElementById('accept1').style.display='inline-flex';
                document.getElementById('accept9').style.display='none';
                document.getElementById('accept10').style.display='inline-block';
                document.getElementById('accept11').style.display='inline-block';
                document.getElementById('accept12').style.display='inline-block';
                document.getElementById('accept3').style.display='none';
                document.getElementById('accept4').style.display='none';
                document.getElementById('accept5').style.display='none';
                document.getElementById('accept6').style.display='none';
                document.getElementById('accept7').style.display='none';
                document.getElementById('accept8').style.display='none';
        }
          getDat();


          async function getDa(){
            var array=[];
            array = ["AN","AP","AR","AS","BR","CH","CT","DN","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LA","LD","MP","MH","MN","ML","MZ","NL","OR","PY","PB","RJ","SK","TN","TG","TR","UP","UT","WB"];
                  var k=1;
                  for(var i=35;i>=0;i--){
                      for(var j=0;j<38;j++){
                        if (array[i]==data.statewise[j].statecode){
                            var arr=array[i];
                            document.getElementById(k).childNodes[1].innerHTML= data.statewise[j].state;
                            document.getElementById(k).childNodes[2].innerHTML= data.statewise[j].confirmed;
                            document.getElementById(k).childNodes[3].innerHTML= data.statewise[j].recovered;
                            document.getElementById(k).childNodes[4].innerHTML= data.statewise[j].deaths;
                            k++;
                            break;
                        }
                      }
                  }
                document.getElementById('accept2').style.display='inline-block';
                document.getElementById('accept1').style.display='none';
                document.getElementById('accept9').style.display='none';
                document.getElementById('accept10').style.display='inline-block';
                document.getElementById('accept11').style.display='inline-block';
                document.getElementById('accept12').style.display='inline-block';
                document.getElementById('accept3').style.display='none';
                document.getElementById('accept4').style.display='none';
                document.getElementById('accept5').style.display='none';
                document.getElementById('accept6').style.display='none';
                document.getElementById('accept7').style.display='none';
                document.getElementById('accept8').style.display='none';
          }

          function maxCases(){
            var array=[];
            array = ["AN","AP","AR","AS","BR","CH","CT","DN","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LA","LD","MP","MH","MN","ML","MZ","NL","OR","PY","PB","RJ","SK","TN","TG","TR","UP","UT","WB"];
                  var k=1;
                  var cases=[];
                  for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (array[i]==data.statewise[j].statecode){
                          var arr=data.statewise[j].confirmed;
                          cases.push(arr);
                          break;
                      }
                    }
                }
                cases.sort(function(a, b){return a - b});
                for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (cases[i]==data.statewise[j].confirmed){
                          var arr=cases[i];
                          document.getElementById(k).childNodes[1].innerHTML= data.statewise[j].state;
                          document.getElementById(k).childNodes[2].innerHTML= data.statewise[j].confirmed;
                          document.getElementById(k).childNodes[3].innerHTML= data.statewise[j].recovered;
                          document.getElementById(k).childNodes[4].innerHTML= data.statewise[j].deaths;
                          k++;
                          break;
                      }
                    }
                }
                document.getElementById('accept4').style.display='inline-block';
                document.getElementById('accept3').style.display='none';
                document.getElementById('accept9').style.display='inline-block';
                document.getElementById('accept10').style.display='none';
                document.getElementById('accept11').style.display='inline-block';
                document.getElementById('accept12').style.display='inline-block';
                document.getElementById('accept1').style.display='none';
                document.getElementById('accept2').style.display='none';
                document.getElementById('accept5').style.display='none';
                document.getElementById('accept6').style.display='none';
                document.getElementById('accept7').style.display='none';
                document.getElementById('accept8').style.display='none';
          }

          function minCases(){
            var array=[];
            array = ["AN","AP","AR","AS","BR","CH","CT","DN","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LA","LD","MP","MH","MN","ML","MZ","NL","OR","PY","PB","RJ","SK","TN","TG","TR","UP","UT","WB"];
                  var k=1;
                  var cases=[];
                  for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (array[i]==data.statewise[j].statecode){
                          var arr=data.statewise[j].confirmed;
                          cases.push(arr);
                          break;
                      }
                    }
                }
                cases.sort(function(a,b){return b - a});
                for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (cases[i]==data.statewise[j].confirmed){
                          var arr=cases[i];
                          document.getElementById(k).childNodes[1].innerHTML= data.statewise[j].state;
                          document.getElementById(k).childNodes[2].innerHTML= data.statewise[j].confirmed;
                          document.getElementById(k).childNodes[3].innerHTML= data.statewise[j].recovered;
                          document.getElementById(k).childNodes[4].innerHTML= data.statewise[j].deaths;
                          k++;
                          break;
                      }
                    }
                }
                document.getElementById('accept4').style.display='none';
                document.getElementById('accept3').style.display='inline-block';
                document.getElementById('accept9').style.display='inline-block';
                document.getElementById('accept10').style.display='none';
                document.getElementById('accept11').style.display='inline-block';
                document.getElementById('accept12').style.display='inline-block';
                document.getElementById('accept1').style.display='none';
                document.getElementById('accept2').style.display='none';
                document.getElementById('accept5').style.display='none';
                document.getElementById('accept6').style.display='none';
                document.getElementById('accept7').style.display='none';
                document.getElementById('accept8').style.display='none';
          }

          function maxRec(){
            var array=[];
            array = ["AN","AP","AR","AS","BR","CH","CT","DN","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LA","LD","MP","MH","MN","ML","MZ","NL","OR","PY","PB","RJ","SK","TN","TG","TR","UP","UT","WB"];
                  var k=1;
                  var cases=[];
                  for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (array[i]==data.statewise[j].statecode){
                          var arr=data.statewise[j].recovered;
                          cases.push(arr);
                          break;
                      }
                    }
                }
                cases.sort(function(a, b){return a - b});
                for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (cases[i]==data.statewise[j].recovered){
                          var arr=cases[i];
                          document.getElementById(k).childNodes[1].innerHTML= data.statewise[j].state;
                          document.getElementById(k).childNodes[2].innerHTML= data.statewise[j].confirmed;
                          document.getElementById(k).childNodes[3].innerHTML= data.statewise[j].recovered;
                          document.getElementById(k).childNodes[4].innerHTML= data.statewise[j].deaths;
                          k++;
                          break;
                      }
                    }
                }
                document.getElementById('accept6').style.display='inline-block';
                document.getElementById('accept5').style.display='none';
                document.getElementById('accept9').style.display='inline-block';
                document.getElementById('accept10').style.display='inline-block';
                document.getElementById('accept11').style.display='none';
                document.getElementById('accept12').style.display='inline-block';
                document.getElementById('accept3').style.display='none';
                document.getElementById('accept4').style.display='none';
                document.getElementById('accept1').style.display='none';
                document.getElementById('accept2').style.display='none';
                document.getElementById('accept7').style.display='none';
                document.getElementById('accept8').style.display='none';
          }

          function minRec(){
            var array=[];
            array = ["AN","AP","AR","AS","BR","CH","CT","DN","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LA","LD","MP","MH","MN","ML","MZ","NL","OR","PY","PB","RJ","SK","TN","TG","TR","UP","UT","WB"];
                  var k=1;
                  var cases=[];
                  for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (array[i]==data.statewise[j].statecode){
                          var arr=data.statewise[j].recovered;
                          cases.push(arr);
                          break;
                      }
                    }
                }
                cases.sort(function(a,b){return b - a});
                for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (cases[i]==data.statewise[j].recovered){
                          var arr=cases[i];
                          document.getElementById(k).childNodes[1].innerHTML= data.statewise[j].state;
                          document.getElementById(k).childNodes[2].innerHTML= data.statewise[j].confirmed;
                          document.getElementById(k).childNodes[3].innerHTML= data.statewise[j].recovered;
                          document.getElementById(k).childNodes[4].innerHTML= data.statewise[j].deaths;
                          k++;
                          break;
                      }
                    }
                }
                document.getElementById('accept6').style.display='none';
                document.getElementById('accept5').style.display='inline-block';
                document.getElementById('accept9').style.display='inline-block';
                document.getElementById('accept10').style.display='inline-block';
                document.getElementById('accept11').style.display='none';
                document.getElementById('accept12').style.display='inline-block';
                document.getElementById('accept3').style.display='none';
                document.getElementById('accept4').style.display='none';
                document.getElementById('accept1').style.display='none';
                document.getElementById('accept2').style.display='none';
                document.getElementById('accept7').style.display='none';
                document.getElementById('accept8').style.display='none';
          }

          function maxDeaths(){
            var array=[];
            array = ["AN","AP","AR","AS","BR","CH","CT","DN","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LA","LD","MP","MH","MN","ML","MZ","NL","OR","PY","PB","RJ","SK","TN","TG","TR","UP","UT","WB"];
                  var k=1;
                  var cases=[];
                  for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (array[i]==data.statewise[j].statecode){
                          var arr=data.statewise[j].deaths;
                          cases.push(arr);
                          break;
                      }
                    }
                }
                cases.sort(function(a, b){return a - b});
                for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (cases[i]==data.statewise[j].deaths){
                          var arr=cases[i];
                          document.getElementById(k).childNodes[1].innerHTML= data.statewise[j].state;
                          document.getElementById(k).childNodes[2].innerHTML= data.statewise[j].confirmed;
                          document.getElementById(k).childNodes[3].innerHTML= data.statewise[j].recovered;
                          document.getElementById(k).childNodes[4].innerHTML= data.statewise[j].deaths;
                          k++;
                          break;
                      }
                    }
                }
                document.getElementById('accept8').style.display='inline-block';
                document.getElementById('accept7').style.display='none';
                document.getElementById('accept9').style.display='inline-block';
                document.getElementById('accept10').style.display='inline-block';
                document.getElementById('accept11').style.display='inline-block';
                document.getElementById('accept12').style.display='none';
                document.getElementById('accept3').style.display='none';
                document.getElementById('accept4').style.display='none';
                document.getElementById('accept5').style.display='none';
                document.getElementById('accept6').style.display='none';
                document.getElementById('accept1').style.display='none';
                document.getElementById('accept2').style.display='none';
          }

          function minDeaths(){
            var array=[];
            array = ["AN","AP","AR","AS","BR","CH","CT","DN","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LA","LD","MP","MH","MN","ML","MZ","NL","OR","PY","PB","RJ","SK","TN","TG","TR","UP","UT","WB"];
                  var k=1;
                  var cases=[];
                  for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (array[i]==data.statewise[j].statecode){
                          var arr=data.statewise[j].deaths;
                          cases.push(arr);
                          break;
                      }
                    }
                }
                cases.sort(function(a,b){return b - a});
                for(var i=35;i>=0;i--){
                    for(var j=0;j<38;j++){
                      if (cases[i]==data.statewise[j].deaths){
                          var arr=cases[i];
                          document.getElementById(k).childNodes[1].innerHTML= data.statewise[j].state;
                          document.getElementById(k).childNodes[2].innerHTML= data.statewise[j].confirmed;
                          document.getElementById(k).childNodes[3].innerHTML= data.statewise[j].recovered;
                          document.getElementById(k).childNodes[4].innerHTML= data.statewise[j].deaths;
                          k++;
                          break;
                      }
                    }
                }
                document.getElementById('accept8').style.display='none';
                document.getElementById('accept7').style.display='inline-block';
                document.getElementById('accept9').style.display='inline-block';
                document.getElementById('accept10').style.display='inline-block';
                document.getElementById('accept11').style.display='inline-block';
                document.getElementById('accept12').style.display='none';
                document.getElementById('accept3').style.display='none';
                document.getElementById('accept4').style.display='none';
                document.getElementById('accept5').style.display='none';
                document.getElementById('accept6').style.display='none';
                document.getElementById('accept1').style.display='none';
                document.getElementById('accept2').style.display='none';
          }

          var manocha;
          async function chartPie(){
            const ctx = document.getElementById('pie').getContext('2d');
            Chart.defaults.font.size = 10;
           const dat=await getData();
            var label=["active","recovered","Deaths"];
            var array=[];
            array.push(data.statewise[0].active);
            array.push(data.statewise[0].recovered);
            array.push(data.statewise[0].deaths);
              manocha = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: label,
                    datasets: [{
                        label: 'Daily_Cases_Confirmed',
                        data: array,

                        backgroundColor:[
                            '#dcb11e',
                            '#a9ed93','#fe8e8b',],
                        borderColor:
                        'white',
                        borderWidth: 1
                    }]
                },
                options: {
                  maintainAspectRatio: false,
                  responsive: true,
                  scales: {
                      y: {
                          beginAtZero: true
                      }
                  }
              }
          }
          );
        //   return(myChart);
          }

          chartPie();


function reply_click(clicked_id)
  {
            document.getElementById(clicked_id).classList.remove("for_hover");
            document.getElementById(clicked_id).classList.add("for_hove");
      var hey=document.getElementById(clicked_id).innerText;
      document.getElementById('name_box').innerText=hey;
      var l=clicked_id;
      for(var i=0;i<37;i++){
          var k="__"+i;
          if(k!=l) {
            document.getElementById(k).classList.remove("for_hove");
            document.getElementById(k).classList.add("for_hover");
             }
      }
      document.getElementById('name_box').classList.remove("box_name");
      if(l=="__8")  document.getElementById('name_box').classList.add("box_name");
    //   document.getElementById('listId').display='none';
    document.getElementById('listId').classList.add("list__");
      document.getElementById('click1').checked=false;
      graph_pie(clicked_id);
  }

  var already=0;
  function graph_pie(click){
      var idNumber;
      if(click=="__0") idNumber=0;
      else{
          for(var i=1;i<37;i++){
              var aa="__"+i;
              if(aa==click) idNumber=i;
          }
      }
      var count=1;
        if(idNumber==already) count=0;
        already=idNumber;
    var array=[];
    array = ["AN","AP","AR","AS","BR","CH","CT","DN","DL","GA","GJ","HR","HP","JK","JH","KA","KL","LA","LD","MP","MH","MN","ML","MZ","NL","OR","PY","PB","RJ","SK","TN","TG","TR","UP","UT","WB"];
    var k=3;
    if(count){
    while(k){
        manocha.data.labels.pop();
    manocha.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    manocha.update('none');
    k--;
    }}
    // if(idNumber=0){
        var first=["active","recovered","deaths"];
        var second=[];

        if(idNumber>30) idNumber=idNumber+1;

            second.push((parseInt(data.statewise[idNumber].active) + parseInt(data.statewise[idNumber].migratedother)));
            second.push(data.statewise[idNumber].recovered);
            second.push(data.statewise[idNumber].deaths);


        if(count){
            for(var i=0;i<3;i++){
                manocha.data.labels.push(first[i]);
        manocha.data.datasets.forEach((dataset) => {
            dataset.data.push(second[i]);
        });
        manocha.update();
            }
        }

  }


  document.getElementById('__0').classList.remove("for_hover");
  document.getElementById('name_box').classList.remove("box_name");
  for(var i=1;i<37;i++){
      var k="__"+i;
      document.getElementById(k).classList.remove("for_hove");
  }
//   if(document.getElementById('click1').checked==false) document.getElementById('listId').classList.remove("list__");

document.getElementById('click1').addEventListener('click',function(){
    if(document.getElementById('click1').checked==true) document.getElementById('listId').classList.remove("list__");
    else document.getElementById('listId').classList.add("list__");
})

document.addEventListener('mouseup', function(e) {
    let container = document.getElementById('try_again');
    if (!container.contains(e.target)) {
        if(document.getElementById('click1').checked==true) {document.getElementById('click1').checked=false;
        if(document.getElementById('click1').checked==true) document.getElementById('listId').classList.remove("list__");
    else document.getElementById('listId').classList.add("list__");}
    }
  });
//   document.addEventListener('mouseup',function(e){
//       let hey=document.getElementById('drop-down');
//       if(hey.contains(e.target)){
//         if(document.getElementById('click1').checked==false) {
//             document.getElementById('click1').checked=true;
//         if(document.getElementById('click1').checked==true) {document.getElementById('listId').classList.remove("list__");}
//     else document.getElementById('listId').classList.add("list__");
// }
//       }
//   })
document.getElementById('click').addEventListener('click',function(){
    if(document.getElementById('click').checked==true) document.getElementById('p2').classList.remove("p2_hide");
    else document.getElementById('p2').classList.add("p2_hide");
});
document.addEventListener('mouseup', function(e) {
    let container = document.getElementById('p2');
    let upper = document.getElementById('namo');
    if (!container.contains(e.target) && !upper.contains(e.target)) {
        if(document.getElementById('click').checked==true) {document.getElementById('click').checked=false;
        if(document.getElementById('click').checked==true) document.getElementById('p2').classList.remove("p2_hide");
    else document.getElementById('p2').classList.add("p2_hide");}
    }
  });