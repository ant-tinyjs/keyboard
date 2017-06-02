/**
 * @file        KeyboardManager
 * @author      fangjun.yfj
 */

/**
 * Tiny.js
 * @external Tiny
 * @see {@link http://tinyjs.net/}
 */

/**
 * KeyboardManager
 *
 * @class Keyboard
 */
class Keyboard {
  /**
   *
   * @param keyCode
   * @return {{}}
   */
  constructor(keyCode) {
    const key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = function (event) {
      if (event.keyCode === key.code) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
      }
      event.preventDefault();
    };

    //The `upHandler`
    key.upHandler = function (event) {
      if (event.keyCode === key.code) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
      }
      event.preventDefault();
    };

    //Attach event listeners
    window.addEventListener(
      'keydown', key.downHandler.bind(key), false
    );
    window.addEventListener(
      'keyup', key.upHandler.bind(key), false
    );
    return key;
  }
}

module.exports = Keyboard;
