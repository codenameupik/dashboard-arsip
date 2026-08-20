function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Pencarian Data PNS')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function searchPNS(query) {
  if (!query || query.trim() === '') {
    return [];
  }

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var lastRow = sheet.getLastRow();

  if (lastRow < 2) {
    return [];
  }

  var data = sheet.getRange(2, 1, lastRow - 1, 6).getValues();
  var q = query.trim().toUpperCase();
  var results = [];

  for (var i = 0; i < data.length; i++) {
    var nip = String(data[i][0]).toUpperCase();
    var nama = String(data[i][1]).toUpperCase();

    if (nip.indexOf(q) !== -1 || nama.indexOf(q) !== -1) {
      results.push({
        nip: data[i][0],
        nama: data[i][1],
        opd: data[i][2],
        namaJabatan: data[i][3],
        tmtPensiun: data[i][4],
        tempatArsip: data[i][5]
      });
    }
  }

  return results;
}
