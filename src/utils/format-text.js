export default class FormatText {
  constructor(text = '', pattern) {
    this.text = text;
    this.pattern = pattern;
  }

  //Get a pattern and replace it with ""
  DeletePattern() {
    return this.text.replace(new RegExp(this.pattern, 'gi'), '');
  }
}
