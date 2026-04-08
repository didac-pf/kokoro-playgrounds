export default class Utils {
  public static sleep(seconds: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, seconds * 1000);
    });
  }
}
