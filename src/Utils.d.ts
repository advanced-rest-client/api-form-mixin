import {ModelItem} from '@api-components/api-view-model-transformer/src/ApiViewModel';

/**
 * Computes value for `renderEmptyMessage`.
 *
 * @param allowCustom True if the form allows to add custom values.
 * @param model Current model
 * @returns `true` when allowCustom is falsy set and model is empty
 */
export declare function canRenderEmptyMessage(allowCustom: boolean, model: object[]): boolean;

/**
 * Computes if model item is optional.
 * The items is always optional if is not required and when `hasOptional`
 * is set to `true`.
 *
 * @param hasOptional [description]
 * @param model Model item.
 * @returns `true` if the model item is optional in the form.
 */
export function isOptional(hasOptional: boolean, model: ModelItem): boolean;

/**
 * Computes if given model item is a custom property (not generated by
 * AMF model transformation).
 * @param model Model item.
 * @returns `true` if `isCustom` property is set on model's schema
 * property.
 */
export function isCustom(model: ModelItem): boolean;

/**
 * Computes value for `renderOptionalCheckbox` property.
 *
 * @param render Value of `allowHideOptional` property
 * @param has Value of `hasOptional` property.
 * @returns True if both values are `true`.
 */
export function renderCheckbox(render: boolean, has: boolean): boolean;

/**
 * Computes if any of the parameters are required.
 * It iterates over the model to find any first element that has `required`
 * propeerty set to `false`.
 *
 * @param allowHideOptional State of `allowHideOptional` property.
 * If `false` this function always returns `false`.
 * @param model Current model
 * @returns `true` if model has at leas one alement that is not required.
 */
export function hasOptionalParameters(allowHideOptional: boolean, model: ModelItem[]): boolean;

/**
 * Computes class name for each form item depending on the item state.
 *
 * This method to be overriten by child classes.
 *
 * @param item Model item
 * @param allowHideOptional
 * @param optionalOpened True if optional parameters are rendered.
 */
export function rowClass(item: ModelItem, allowHideOptional?: boolean, optionalOpened?: boolean, allowDisableParams?: boolean): string;
