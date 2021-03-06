/**
Copyright 2017 LGS Innovations

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/

(() => {
  'use strict';

  class RadiosApi {
    static get TAG() {
      return 'networkManager#Radios';
    }

    static get SCOPES() {
      return null;
    }

    static get REQUESTS() {
      return {
        SOFT_BLOCK_ALL: `${RadiosApi.TAG} softblock`,
        UNSOFT_BLOCK_ALL: `${RadiosApi.TAG} unsoftblock`,
        WIFI_STATE: `${RadiosApi.TAG} wifistate`
      };
    }

    static get EVENTS() {
      return {
        STATE_CHANGED: `${RadiosApi.TAG} stateChanged`
      };
    }

    constructor(messageCenter) {
      this._messageCenter = messageCenter;
    }

    softBlockAll() {
      return this._messageCenter.sendRequest(RadiosApi.REQUESTS.SOFT_BLOCK_ALL, {scopes: null});
    }

    unsoftBlockAll() {
      return this._messageCenter.sendRequest(RadiosApi.REQUESTS.UNSOFT_BLOCK_ALL, {scopes: null});
    }

    getWifiState() {
      return this._messageCenter.sendRequest(RadiosApi.REQUESTS.WIFI_STATE, {scopes: null});
    }

    addWifiStateChangedListener(listener) {
      return this._messageCenter.addEventListener(RadiosApi.EVENTS.STATE_CHANGED, {scopes: null}, listener);
    }

    removeWifiStateChangedListener(listener) {
      return this._messageCenter.removeEventListener(RadiosApi.EVENTS.STATE_CHANGED, listener);
    }
  }

  module.exports = RadiosApi;
})();
