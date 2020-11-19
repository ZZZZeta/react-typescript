import * as types from './constants';
import { BaseAction } from '../baseTypes';

interface EnableLoadingAction extends BaseAction {}
interface DisableLoadingAction extends BaseAction {}

export type PreloaderActionTypes = EnableLoadingAction | DisableLoadingAction;

export const enableLoading = (): EnableLoadingAction => ({
  type: types.ENABLE_LOADING,
});

export const disableLoading = (): DisableLoadingAction => ({
  type: types.DISABLE_LOADING,
});
