class HtmlLoader {
  public readFile(fileName: string): string {
    let currentPath = new URL(import.meta.url).pathname;
    if (currentPath.startsWith('/')) {
      currentPath = currentPath.slice(1);
    }

    const currentDir = currentPath.split('/').slice(0, -1).join('/');

    const filePath = `${currentDir}/${fileName}`;

    try {
      return Deno.readTextFileSync(filePath);
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        throw new Error(`File ${filePath} not found`);
      }

      throw new Error(`Failed to read file ${filePath}, ${err}`);
    }
  }
}

const htmlLoader = new HtmlLoader();

export default htmlLoader;
