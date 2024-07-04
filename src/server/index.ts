import { client } from './src/database';

(async () => {
  try {
    await client.$connect();
    console.log('Соединение с базой данных установлено.');
  } catch (error) {
    console.log(error);
  }
})();

mp.events.add('playerJoin', async (player) => {
  const { name } = player;

  await client.user.create({
    data: {
      email: 'example@gmail.com',
      userName: name
    }
  });
});
