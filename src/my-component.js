/**
 * @tabtrigger litel
 * @description A LitElement boilerplate.
 */

import { LitElement, html, css } from '@polymer/lit-element';
import '@polymer/iron-icon';
import '@polymer/iron-icons';

/**
 * `my-component`
 * Test component
 *
 * @customElement
 * @demo demo/index.html
 */

class MyComponent extends LitElement {
  static get properties() {
    return {

    };
  }

  /** LIFECYCLE **/
  /**
   * https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks
   */
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    super.firstUpdated();

    // This is a good place to bind event handlers to elements.
    // Hint: Use litaddevent snippet
  }
  /** /LIFECYCLE **/

  /** OBSERVE PROPERTY CHANGES **/
  // eg. _propertyChanged
  /** /OBSERVE PROPERTY CHANGE **/

  /**
   * Styles common to all instances of this component.
   * @return {css} css template literal
   */
  static get styles() {
    return [
      css`
      :host {
        display: block;
      }
      `
    ];
  }

  /** TEMPLATE PARTS */
  // Hint: Use litelhtml snippet
  /** /TEMPLATE PARTS */

  /**
   * The main component template.
   * @return {html} html template literal
   */
  render() {
    return html`
      <style>

      </style>
      An icon: <iron-icon icon="add"></iron-icon>
    `;
  }

  // Event Handlers
  // eg `onButtonClick()`
  // /Event Handlers

  // METHODS
  // Private methods:

  // Public methods (component API):

  // /METHODS
}

customElements.define('my-component', MyComponent);