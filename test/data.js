module.exports = {
  data1: {
    obj: [
      ['', 'a', 1, 2, 3, 4],
      ['', 'b"\r\nc', 5, ',', '', 8],
    ],
    str1: ',a,1,2,3,4\r\n\r\n,"b""\r\nc",5,",",,8\r\n\r\n',
    str2: ',a,1,2,3,4\r\n,"b""\r\nc",5,",",,8\r\n',
    str3: ',a,1,2,3,4\r\n,"b""\r\nc",5,",",,8',
  },
  data2: {
    obj: [
      ['a', 1, 2, 3, 4],
      ['b"\nc', 5, ',', '', ''],
    ],
    str1: 'a,1,2,3,4\n\n"b""\nc",5,",",,\n\n',
    str2: 'a,1,2,3,4\n"b""\nc",5,",",,\n',
    str3: 'a,1,2,3,4\n"b""\nc",5,",",,',
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
