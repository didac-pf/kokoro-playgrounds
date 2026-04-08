import HtmlLoader from './html/html-loader.ts';
import Utils from './utils.ts';

export default class Main {
  public add(a: number, b: number): number {
    return a + b;
  }

  public subtract(a: number, b: number): number {
    return a - b;
  }

  public loadHelloHtml(): string {
    return HtmlLoader.readFile('hello.html');
  }

  public async awaited(): Promise<string> {
    await Utils.sleep(0.2);

    return 'awaited';
  }

  public getCurrentEnv() {
    return Deno.env.get('ENV');
  }
}

console.log('\n### Start ###');

const main = new Main();
console.log(`Current env: ${main.getCurrentEnv()}`);

console.log('### End ###\n');
