import axios from 'axios';

/**
 * COnfigurações possiveis para a baseURL:
 * 
 * iOS com Emulador: localhost
 * iOS com device fisico: IP da máquina
 * Android com Emulador: localhost (usar adb reverser tcp:<PORT> tcp:<PORT> na linha de cmd)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Emuladro Genymotion)
 * Android com Dev. Fisico: IP da máquina
 */

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

export default api;