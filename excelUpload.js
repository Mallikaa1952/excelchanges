
import Excel from "exceljs";

var wb = new Excel.Workbook();
var arrVal = [];
wb.xlsx.readFile("content/MASTER DO NOT EDIT cmdb_ci_server 02-28-24.xlsx").then(function () {
    var worksheet = wb.getWorksheet('Page 1');    
    worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
        let rowVal = worksheet.getCell('A' + rowNumber).value;
        arrVal[rowNumber] = rowVal;
    })
        
    wb.xlsx.readFile("content/20240214_135502_snapshot.xlsx").then(function () {
        var worksheet1 = wb.getWorksheet('ITComponent');
        worksheet1.eachRow({ includeEmpty: true }, function (row1, rowNumber1) {
            if(arrVal.find(key => key === worksheet1.getCell('BE' + rowNumber1).value)){
                console.log(worksheet1.getCell('BE' + rowNumber1).value);
            }
        })
    })
});
