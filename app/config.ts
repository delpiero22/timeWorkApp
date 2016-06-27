
const serversList = {
    productionServer: "http://10.99.70.63:8080",
    developServer: "http://127.0.0.1:8080", // สำหรับทดสอบบนเครื่อง developServer
    emuDeviceServer: "http://10.0.2.2:8080", // สำหรับทดสอบบน Emu
    realDeviceServer: "http://192.168.0.104:8080" ,// สำหรับทดสอบบนเครื่องจริง
    webService : "http://www.raot.co.th/mobile_app/timeWork.php"
}

export default {
    server: serversList.webService
}