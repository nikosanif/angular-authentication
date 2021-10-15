export class GreetingUtil {
  static greet(): string {
    const today = new Date();
    const currentHour = today.getHours();

    if (currentHour < 12) {
      return 'Good morning';
    } else if (currentHour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }
}
