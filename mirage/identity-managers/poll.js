export default class {
  constructor() {
    this.reset();
  }

  /**
   * @method generateId
   * @private
   */
  generateId() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 1; i <= 10; i++) {
      let randomPosition = Math.floor(Math.random() * alphabet.length);
      id = id + alphabet[randomPosition];
    }
    return id;
  }

  /**
   * Returns an unique identifier.
   *
   * @method fetch
   * @return {String} Unique identifier
   * @public
   */
  fetch() {
    let id = this.generateId();
    while (typeof this._ids[id] !== 'undefined') {
      id = this.generateId();
    }
    this._ids[id] = true;
    return id;
  }

  /**
   * Register an identifier.
   * Must throw if identifier is already used.
   *
   * @method set
   * @param {String|Number} id
   * @public
   */
  set(id) {
    if (typeof this._ids[id] !== 'undefined') {
      throw new Error(`Id {id} is already used.`);
    }

    this._ids[id] = true;
  }

  /**
   * Reset identity manager.
   *
   * @method reset
   * @public
   */
  reset() {
    this._ids = {};
  }
}
