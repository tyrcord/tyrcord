export class MessageStatus {
  private _sending = false;
  private _sent = false;

  set sending(sending: boolean) {
    if (sending === true) {
      this._sent = false;
    }

    this._sending = sending;
  }

  get sending(): boolean {
    return this._sending;
  }

  set sent(sent: boolean) {
    if (sent === true) {
      this._sending = false;
    }

    this._sent = sent;
  }

  get sent(): boolean {
    return this._sent;
  }
}
