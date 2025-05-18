import { App, Scene } from 'liko';
import { config } from './config';

async function main() {
  const app = new App();
  await app.init({ ...config.app });

  const scene = new Scene({
    url: config.scenes[0],
  });

  app.stage.addChild(scene);
}

main();
