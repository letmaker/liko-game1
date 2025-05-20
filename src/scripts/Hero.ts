import { Script, register } from 'liko';

export class Hero extends Script {

  onAwake(): void {
    console.log('Hero onAwake');
  }
}

register.regScript('scripts/Hero.ts', Hero);
