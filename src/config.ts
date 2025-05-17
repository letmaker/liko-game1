import { Rectangle } from 'liko';
import './scripts/script1';
import './scripts/script2';

export const config = {
  app: {
    width: 1024,
    height: 768,
    physics: {
      enabled: true,
      boundaryArea: new Rectangle(0, 0, 480, 700).pad(500),
      debug: true,
    },
  },
  scenes: ['scenes/scene1.scene', 'scenes/scene2.scene'],
};
