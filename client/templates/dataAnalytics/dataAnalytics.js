Template.dataAnalytics.onRendered(function(){



//tester

var data1 = {
  // A labels array that can contain any sort of values
  labels: ['week 2', '', 'week 6', '', 'week 10', '', 'week 14', '', 'week 18', '', 'week 22', '', 'week 26', '', 'week 30', '', 'week 34', '', 'week 38', ''],
  // Our series array that contains series objects or in this case series data arrays

  //40 weeks
  //20 data sets. every two weeks to see how the baby is doing
  series: [
    [100, 95, 98, 95, 103, 100, 95, 98, 95, 103, 100, 95, 98, 95, 103, 100, 95, 98, 95, 103] //bpm of mother
  ],
  high: 130,
  low: 80,
  fullWidth: true,
  // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
  axisY: {
    onlyInteger: true,
    offset: 10
  }
};


var data2 = {
  // A labels array that can contain any sort of values
  labels: ['week 2', '', 'week 6', '', 'week 10', '', 'week 14', '', 'week 18', '', 'week 22', '', 'week 26', '', 'week 30', '', 'week 34', '', 'week 38', ''],
  // Our series array that contains series objects or in this case series data arrays

  //40 weeks
  //20 data sets. every two weeks to see how the baby is doing
  series: [
    [130, 135, 140, 140, 135, 130, 130, 160, 140, 140, 130, 135, 125, 160, 130, 125, 120, 130, 140] // bpm of baby
  ],
  high: 200,
  low: 100,
  fullWidth: true,
  // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
  axisY: {
    onlyInteger: true,
    offset: 20
  }
};

var data3 = {
  // A labels array that can contain any sort of values
  labels: ['week 2', '', 'week 6', '', 'week 10', '', 'week 14', '', 'week 18', '', 'week 22', '', 'week 26', '', 'week 30', '', 'week 34', '', 'week 38', ''],
  // Our series array that contains series objects or in this case series data arrays

  //40 weeks
  //20 data sets. every two weeks to see how the baby is doing
  series: [
    [135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 135, 130, 140, 150, 168, 180, 180, 170] //weight of mother
  ],
  high: 250,
  low: 100,
  fullWidth: true,
  // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
  axisY: {
    onlyInteger: true,
    offset: 20
  }
};

var data4 = {
  // A labels array that can contain any sort of values
  labels: ['week 2', '', 'week 6', '', 'week 10', '', 'week 14', '', 'week 18', '', 'week 22', '', 'week 26', '', 'week 30', '', 'week 34', '', 'week 38', ''],
  // Our series array that contains series objects or in this case series data arrays

  //40 weeks
  //20 data sets. every two weeks to see how the baby is doing
  series: [
    [0.5, 0.5, 1, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.25, 4.5, 5.5, 5.75, 6, 6.25, 6.5, 7, 7, 7.25, 7.5] //weight of baby
  ],
  high: 8,
  low: 0,
  fullWidth: true,
  // As this is axis specific we need to tell Chartist to use whole numbers only on the concerned axis
  axisY: {
    onlyInteger: true,
    offset: 0.5
  }
};



// As options we currently only set a static size of 300x200 px
var options = {
  width: '550px',
  height: '300px'
};


new Chartist.Line('.ct-chart', data1, options);
new Chartist.Line('.ct-chart2', data2, options);
new Chartist.Line('.ct-chart3', data3, options);
new Chartist.Line('.ct-chart4', data4, options);



});