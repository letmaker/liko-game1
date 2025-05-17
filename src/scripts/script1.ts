import { LikoPointerEvent, Script, register } from 'liko';

export class Script1 extends Script {
  onAwake(): void {
    console.log('Script1 onAwake');
  }

  onClick(e: LikoPointerEvent): void {
    console.log('Script1 onClick', e);
  }
}

register.regScript('scripts/script1.ts', Script1);
