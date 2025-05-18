import { Script, Text, register } from 'liko';

export class TestScript extends Script {
  count = 0;

  onAwake(): void {
    console.log('TestScript onAwake');
  }

  onClick(): void {
    const target = this.target as Text;
    target.text = `点击了 ${this.count} 次`;
    this.count++;
  }
}

register.regScript('scripts/TestScript.ts', TestScript);
