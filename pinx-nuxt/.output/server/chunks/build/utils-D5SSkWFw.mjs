function generateDayWiseTimeSeries(baseval, count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = baseval;
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([x, y]);
    baseval += 864e5;
    i++;
  }
  return series;
}

export { generateDayWiseTimeSeries as g };
//# sourceMappingURL=utils-D5SSkWFw.mjs.map
