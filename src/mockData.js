export const stackedBarData = {
  type: 'stackedBar',
  options: {
    "title": "Clicks by mailing",
    "axes": {
      "left": {
        "mapsTo": "value",
        "stacked": true
      },
      "bottom": {
        "mapsTo": "key",
        "scaleType": "labels"
      }
    },
    "height": "100%"
  },
  data: [
    {
      "group": "Dataset 1",
      "key": "Qty",
      "value": 65000
    },
    {
      "group": "Dataset 1",
      "key": "More",
      "value": 29123
    },
    {
      "group": "Dataset 1",
      "key": "Sold",
      "value": 35213
    },
    {
      "group": "Dataset 1",
      "key": "Restocking",
      "value": 51213
    },
    {
      "group": "Dataset 1",
      "key": "Misc",
      "value": 16932
    },
    {
      "group": "Dataset 2",
      "key": "Qty",
      "value": 32432
    },
    {
      "group": "Dataset 2",
      "key": "More",
      "value": 21312
    },
    {
      "group": "Dataset 2",
      "key": "Sold",
      "value": 56456
    },
    {
      "group": "Dataset 2",
      "key": "Restocking",
      "value": 21312
    },
    {
      "group": "Dataset 2",
      "key": "Misc",
      "value": 34234
    },
  ]
}

export const donutData = {
  type: 'donut',
  options: {
    "title": "Sales by services",
    "resizable": true,
    "legend": {
      "alignment": "center"
    },
    "donut": {
      "center": {
        "label": "Browsers"
      },
      "alignment": "center"
    },
    "height": "100%"
  },
  data: [
    {
      "group": "2V2N 9KYPM version 1",
      "value": 20000
    },
    {
      "group": "L22I P66EP L22I P66EP L22I P66EP",
      "value": 65000
    },
    {
      "group": "JQAI 2M4L1",
      "value": 75000
    },
    {
      "group": "J9DZ F37AP",
      "value": 1200
    },
    {
      "group": "YEL48 Q6XK YEL48",
      "value": 10000
    },
    {
      "group": "Misc",
      "value": 25000
    }
  ]
}

export const lineData = {
  type: 'line',
  options: {
    title: "Optimization rates (overall)",
    legend: {
      alignment: 'center',
      enabled: true
    },
    tooltip: {
      enabled: true,
      showTotal: true
    },
    height: '100%',
    axes: {
      bottom: {
        mapsTo: 'date',
        scaleType: 'time',
      },
      left: {
        mapsTo: 'value',
        scaleType: 'linear',
      },
    },
    color: {
      scale: {
        "Dataset 1": "blue",
        "Dataset 2": "#FF6633",
        "Dataset 3": "#00CC00",
        "Dataset 4": "#FFDC00",
      },
    },
    curve: 'curveMonotoneX',
  },
  data: [
    {
      "group": "Dataset 1",
      "date": '2001-01-21 07:00',
      "value": 34200
    },
    {
      "group": "Dataset 1",
      "date": '2001-01-22 08:00',
      "value": 23412
    },
    {
      "group": "Dataset 2",
      "date": '2001-01-21 08:00',
      "value": 34200
    },
    {
      "group": "Dataset 2",
      "date": '2001-01-22 12:00',
      "value": 45145
    },
    {
      "group": "Dataset 3",
      "date": '2001-01-21 09:00',
      "value": 41200
    },
    {
      "group": "Dataset 3",
      "date": '2001-01-22 13:00',
      "value": 14234
    },
    {
      "group": "Dataset 4",
      "date": '2001-01-21 10:00',
      "value": 22000
    },
    {
      "group": "Dataset 4",
      "date": '2001-01-22 19:00',
      "value": 32412
    },
  ]
}
