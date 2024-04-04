 import {createChart} from '../node_modules/lightweight-charts/dist/typings';

 const chartOptions = { layout: {textColor: 'white', backgorund: { type: 'solid', color: 'grey'} } };
 const firstChart = createChart(document.getElementById('firstContainer'), chartOptions);
 const areaSeries = firstChart.addAreaSeries({
     lineColor: '#2962ff', topColor: '#2962ff',
     bottomColor: 'rgba(41, 98, 255, 0.28)',
 });
 areaSeries.setData([
     { time: '2024-03-26', value: 32.51},
     { time: '2024-03-27', value: 31.11},
     { time: '2024-03-28', value: 27.02},
     { time: '2024-03-29', value: 27.32},
     { time: '2024-03-30', value: 25.17},
     { time: '2024-03-31', value: 28.89},
     { time: '2024-04-01', value: 25.46},
 ]);
 const candlestickSeries = firstChart.addCandlestickSeries({
     upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
     wickUpColor: '#26a69a', wickDownColor: '#ef5350',
 });
 candlestickSeries.setData([
     { time: '2024-03-26', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
     { time: '2018-03-27', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
     { time: '2018-03-28', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
     { time: '2018-03-29', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
     { time: '2018-03-30', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
     { time: '2018-03-31', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
     { time: '2018-04-01', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
 ]);

 firstChart.timeScale().fitContent();
             

             