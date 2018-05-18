/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   api-form-mixin.html
 */

declare namespace ArcBehaviors {


  /**
   * A behavior to be implemented to elements that processes AMF data via form
   * data model and displays forms from the model.
   *
   * It contains common methods used in forms.
   *
   * Use `api-form-styles` from this package to include common styles.
   */
  function ApiFormMixin<T extends new (...args: any[]) => {}>(base: T): T & ApiFormMixinConstructor;

  interface ApiFormMixinConstructor {
    new(...args: any[]): ApiFormMixin;
  }

  interface ApiFormMixin {

    /**
     * View model to use to render the form.
     */
    model: any[]|null|undefined;

    /**
     * Set to true to show optional parameters (not required by the API).
     */
    optionalOpened: boolean|null|undefined;

    /**
     * Computed value from `allowHideOptional` and view model.
     * `true` if current model has any optional property.
     */
    readonly hasOptional: boolean|null|undefined;

    /**
     * If set it computes `hasOptional` property and shows checkbox in the
     * form to show / hide optional properties.
     */
    allowHideOptional: boolean|null|undefined;

    /**
     * Computed flag to determine if optional checkbox can be rendered
     */
    readonly renderOptionalCheckbox: boolean|null|undefined;

    /**
     * If set, enable / disable param checkbox is rendered next to each
     * form item.
     */
    allowDisableParams: boolean|null|undefined;

    /**
     * When set, renders "add custom" item button.
     * If the element is to be used withouth AMF model this should always
     * be enabled. Otherwise users won't be able to add a parameter.
     */
    allowCustom: boolean|null|undefined;

    /**
     * Renders items in "narrow" view
     */
    narrow: boolean|null|undefined;

    /**
     * Computed value. The form renders empty message (if supported by
     * the form element). It occurs when model is not set and allowCustom
     * is not set
     */
    readonly renderEmptyMessage: boolean|null|undefined;

    /**
     * Computes class name for each form item depending on the item state.
     *
     * @param item Model item
     * @param optionalOpened True if optional parameters are rendered.
     */
    computeFormRowClass(item: object|null, allowHideOptional: Boolean|null, optionalOpened: Boolean|null, allowDisableParams: Boolean|null): String|null;

    /**
     * Toggles visibility of optional parameters.
     */
    toggleOptionalParams(): void;

    /**
     * Returns a reference to the form element, if the DOM is ready.
     * This only works with `iron-form` that is in the DOM.
     *
     * @returns Iron form element. It may be `undefined` if local
     * DOM is not yet initialized.
     */
    _getForm(): IronForm|null;

    /**
     * Validates the form. It uses `iron-form`'s `validate()` function to
     * perform the validation.
     *
     * @returns Validation result or `true` if DOM is not yet ready.
     */
    _getValidity(): Boolean|null;

    /**
     * Link to the form's serialize function.
     *
     * @returns Serialized form values or `undefined` if DOM is not ready.
     * Note, `undefined` is returned **only** if DOM is not yet ready.
     */
    serializeForm(): object|null;

    /**
     * Computes if any of the parameters are required.
     * It iterates over the model to find any first element that has `required`
     * propeerty set to `false`.
     *
     * @param allowHideOptional State of `allowHideOptional` property.
     * If `false` this function always returns `false`.
     * @param record Change record. Note, it does not checks for
     * optional parameters each time the model changes. It rescans the model
     * when splices changed.
     * @returns `true` if model has at leas one alement that is not required.
     */
    _computeHasOptionalParameters(allowHideOptional: Boolean|null, record: object|null): Boolean|null;

    /**
     * Computes value for `renderOptionalCheckbox` property.
     *
     * @param render Value of `allowHideOptional` property
     * @param has Value of `hasOptional` property.
     * @returns True if both values are `true`.
     */
    _computeRenderCheckbox(render: Boolean|null, has: Boolean|null): Boolean|null;

    /**
     * Computes if given model item is a custom property (not generated by
     * AMF model transformation).
     *
     * @param model Model item.
     * @returns `true` if `isCustom` property is set on model's schema
     * property.
     */
    _computeIsCustom(model: object|null): Boolean|null;

    /**
     * Adds empty custom property to the list.
     *
     * It dispatches `api-property-model-build` custom event that is handled by
     * `api-view-model-transformer` to build model item.
     * This assumem that the transformer element is already in the DOM.
     *
     * After the transformation the element pushes or sets the data to the
     * `model`.
     *
     * @param binding Value if the `binding` property.
     * @param opts Additional options:
     * - inputLabel {String} - Forces a label of the input
     */
    addCustom(binding: String|null, opts: object|null): void;

    /**
     * Removes custom item from the UI.
     * This can only be called from `dom-repeat` element so it contain's
     * `model` property.
     */
    _removeCustom(e: CustomEvent|null): void;

    /**
     * Computes if model item is optional.
     * The items is always optional if is not required and when `hasOptional`
     * is set to `true`.
     *
     * @param hasOptional [description]
     * @param model Model item.
     * @returns `true` if the model item is optional in the form.
     */
    computeIsOptional(hasOptional: Boolean|null, model: object|null): Boolean|null;

    /**
     * Computes value for `renderEmptyMessage`.
     *
     * @param allowCustom True if the form allows to add custom values.
     * @param model Current model
     * @returns `true` when allowCustom is falsy set and model is empty
     */
    _computeRenderEmptyMessage(allowCustom: Boolean|null, model: any[]|null): Boolean|null;
  }
}
