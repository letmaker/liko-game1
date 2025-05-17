import { Script, register } from 'liko';


export class Script2 extends Script {
  onAwake(): void {
    console.log('Script2 onAwake');
  }

  onUpdate(delta: number): void {
    // TODO 为什么脚本 2 没有被执行
    this.target.angle++
  }
}

register.regScript('scripts/script2.ts', Script2);
