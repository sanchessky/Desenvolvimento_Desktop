const { app, BrowserWindow, nativeTheme, Menu } = require('electron')
//----------------------------------------------------------------------
//janela principal
let win
const createWindow = () => {
    nativeTheme.themeSource = 'dark'
   win = new BrowserWindow({
    width: 800,
    height: 600,
    icon:"./src/public/img/xadrez.png",
    /*minimizable: false,  remover a ação de minimizar a tela */
    resizable: false, /* remover a ação de maximizar a tela */
    /*autoHideMenuBar: true,  remover a ação de menu tela */
    /*titleBarStyle: 'hidden'  remover a a barra de titulo e menu */
  })

  // menu personalizado
  Menu.setApplicationMenu(Menu.buildFromTemplate(templete))

  win.loadFile('./src/views/index.html')
}
//Fechamento da janela principal
//--------------------------------------------------------------------------------------
//janela Sobre
const aboutwindow = () => {
    const about = new BrowserWindow ({
        width: 360,
        height:220,
        icon:"./src/public/img/xadrez.png",
        autoHideMenuBar: true,
        resizable: false,
    })
    about.loadFile('./src/views/sobre.html')
}


//--------------------------------------------------------------------------------------
// iniciar a aplicação
app.whenReady().then(() => {
  createWindow()
  //aboutwindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

// Templete do MENU
const templete =[
    {
        label:'Arquivo',
        submenu: [
            {
                label: 'Sair',
                click: () => app.quit(),
                acclerator: 'Alt+F4'
            }
        ]      
    },
    {
        label: 'Exibir',
        submenu: [
            {
                label: 'Recarregar',
                role: 'reload'
            },
            {
                label:'Ferramentas do desenvolvedor',
                role: 'toggleDevTools'
            }
        ]      
    },
    {
        label: 'Ajuda'
    }
]