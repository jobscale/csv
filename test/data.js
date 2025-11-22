export default {
  data1: [{
    obj: [
      ['', 'a', 1, 2, 3, 4],
      ['', 'b"\r\nc', 5, ',', '', 8],
      [0],
    ],
    str: ',a,1,2,3,4\r\n,"b""\r\nc",5,",",,8\r\n0\r\n',
  }, {
    obj: [
      ['', 'a', 1, 2, 3, 4],
      ['', 'b"\r\nc', 5, ',', '', 8],
    ],
    str: ',a,1,2,3,4\r\n,"b""\r\nc",5,",",,8\r\n',
  }, {
    obj: [
      ['', 'a', 1, 2, 3, 4],
      ['', 'b"\r\nc', 5, ',', '', 8],
    ],
    str: ',a,1,2,3,4\r\n,"b""\r\nc",5,",",,8\r\n',
  }],

  data2: [{
    obj: [
      ['a', 1, 2, 3, 4],
      ['b"\nc', 5, ',', '', ''],
      [0],
    ],
    str: 'a,1,2,3,4\n"b""\nc",5,",",,\n0\n',
  }, {
    obj: [
      ['a', 1, 2, 3, 4],
      ['b"\nc', 5, ',', '', ''],
    ],
    str: 'a,1,2,3,4\n"b""\nc",5,",",,\n',
  }, {
    obj: [
      ['a', 1, 2, 3, 4],
      ['b"\nc', 5, ',', '', ''],
    ],
    str: 'a,1,2,3,4\n"b""\nc",5,",",,\n',
  }],

  data3: {
    str02: ',a,1,2,3,4\r\n,"b""\r\nc",5,",",,8\r\n',
    str03: ',a,1,2,3,4\r\n,"b""\r\nc",5,",",,8\r\n0\r\n',
  },

  data4: {
    str05: 'a,1,2,3,4\n"b""\nc",5,",",,\n',
    str06: 'a,1,2,3,4\n"b""\nc",5,",",,\n0\n',
  },

  urls1: [
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/01-16-2022.csv',
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/01-17-2022.csv',
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/01-18-2022.csv',
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/01-19-2022.csv',
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/01-20-2022.csv',
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/01-21-2022.csv',
  ],

  urls2: [
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/01-22-2022.csv',
  ],
};
