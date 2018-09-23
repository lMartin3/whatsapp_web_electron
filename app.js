const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const {Menu,globalShortcut} = require('electron');
var mainWindow = null;
app.on('ready', function() {
    initMain();
});
var template = [
    {},
    {
      label: 'Project',
      submenu: [
        {
          label:'Test',
          accelerator:'CommandOrControl+A',
          click:function(){
            openFolderDialog();
          }
        },
        {
          label:'Developer tools',
          submenu:[
            {
              label:'Detached',
              click:function(){
                openDetachableConsole();
              }
            },
            {
              label:'Atached',
              click:function(){
                openConsole();
              }
            }
          ]
        },
        {
          label:'Resizable',
          submenu:[
            {
              label:'True',
              click:function(){
                setResizableTrue();
              }
            },
            {
              label:'Flase',
              click:function(){
                setResizableFalse();
              }
            }
          ]
        }
      ]
    },
    {
        label:'DDT',
        click:function(){
            openDetachableConsole();
        }
    },
    {
      label:'Refresh',
      click:function(){
          refreshMainWindow();
      }
    },
    {
      label:'Max',
      click:function(){
          maxMain();
      }
    }
  ];

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);
  function openFolderDialog(){
    var dialog = electron.dialog;
    dialog.showMessageBox({"title":"testing"});
    //mainWindow.loadURL(`https://google.com`);
    mainWindow.openDevTools();
  }
  function setResizableTrue() {
    mainWindow.setResizable(true);
  }
  function setResizableFalse() {
    mainWindow.setResizable(false);
  }
  function openDetachableConsole() {
    mainWindow.openDevTools({detach: true})
  }
  function openConsole() {
    mainWindow.openDevTools({detach: false})
  }
  function refreshMainWindow() {
    mainWindow.loadURL(`https://web.whatsapp.com/`);
  }
  function maxMain() {
    mainWindow.maximize();
  }
function initMain() {
    mainWindow = new BrowserWindow({
      icon: __dirname +  '/ico.png',
      title: "Whatsapp Web - Electron",
      width:1080,
      height:720,
      transparent: false,
      alwaysOnTop: false,
      frame: true
    });
    
    mainWindow.setResizable(false);
    mainWindow.loadURL(`https://web.whatsapp.com/`);
    
    //mainWindow.openDevTools({mode: 'detach'});
}