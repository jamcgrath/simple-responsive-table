function simpleResponsiveTable(tableClass) {

  var tables = document.getElementsByClassName(tableClass);

  for (var i = 0; i < tables.length; i++) {
    var currentTable = tables[i];
    var thList = currentTable.getElementsByTagName('th');
    var trList = tables[i].getElementsByTagName('tr');

    for (var j = 1; j < trList.length; j++) {
      var tdList = trList[j].getElementsByTagName('td');

      for (var k = 0; k < tdList.length; k++) {
        tdList[k].setAttribute('data-col-title', thList[k].innerHTML);
      }
    }
  }
}

