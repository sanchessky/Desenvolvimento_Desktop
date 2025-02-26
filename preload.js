/**
 * Arquivo de pré carregamento e reforço de segurança na comunicação entre processos (IPC)
 */
//importação dos recursos electron
// segurança e cominicação
const { contextBridge, ipcRenderer} = require('electron')
//expor (autorizar a cominicação entre processos)
contextBridge.exposeInMainWorld('api',
    {
    clientWindow: () => ipcRenderer.send('client-window'),
    osWindow: () => ipcRenderer.send('os-window')

})