export default class FormatTime {
  constructor(schedules) {
    this.schedules = schedules;
  }

  // Hour from format HH:MM
  GetHour() {
    this.schedules = this.schedules.split(/[:,]/);
    for (var i = 0; i < this.schedules.length; i++) {
      this.schedules.splice(i + 1, 1); //delete odd part
    }
    return this.schedules.map(Number);
  }

  // Minutes from format HH:MM
  GetMinutes() {
    this.schedules = this.schedules.split(/[:,]/);
    for (var i = 0; i < this.schedules.length; i++) {
      this.schedules.splice(i, 1); //delete even part
    }
    return this.schedules.map(Number);
  }
}
