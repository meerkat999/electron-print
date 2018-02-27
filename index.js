'use strict';
const BrowserWindow = require('electron');
const fs = require('fs')
const path = require('path')

module.exports = {
  print : print
}

function print(text){
  let win = new BrowserWindow({show: false})
  fs.writeFile(path.join(__dirname,'print.txt'), text)
  win.loadURL('file://'+__dirname+'/print.txt')
  win.webContents.on('did-finish-load', () => {
      win.webContents.print({silent:true})
      setTimeout(function(){
        win.close();
      }, 1000);
  })
}
