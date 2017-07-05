function daysBetween(end, start){
	var oneDay = 24*60*60*1000;
	return Math.ceil((end.getTime() - start.getTime())/oneDay);
}

var firstDay = new Date("6/29/2017");
var today = new Date();
var daysElapsed = daysBetween(today, firstDay);

var total = 60;
var percent = daysElapsed*100/total;

var $chart = $('.chart');
var $percentEle = $('.percent-val');
var $leftDays = $('.left-days span');

var options = {
	size: 200,
	animate:{ duration: 1000, enabled: true },
	barColor: '#5dc4bf',
	trackColor: '#ddd',
	scaleColor: false,
	lineWidth: 10,
	onStep: function(from, to, value) {
		$percentEle.text(Math.ceil(value*total/100));
	},
	onStop(from, to){
		var leftDays = 60 - daysElapsed;
		$leftDays.text(leftDays + " Days to go");
		$leftDays.fadeIn(1500);
	}
};

$chart.easyPieChart(options);
$chart.data('easyPieChart').update(percent);
