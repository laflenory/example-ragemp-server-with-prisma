import { client } from "./src/database";

(async () => {
    try {
        await client.$connect();
        console.log('Соединение с базой данных установлено.');
    } catch (error) {
        console.log(error);
    }
})();
