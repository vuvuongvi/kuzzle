/*
 * Kuzzle, a backend software, self-hostable and ready to use
 * to power modern apps
 *
 * Copyright 2015-2018 Kuzzle
 * mailto: support AT kuzzle.io
 * website: http://kuzzle.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Cucumber profiles
 */
module.exports = {
  httpEmbedded: '--fail-fast --tags "not @realtime" --world-parameters \'{"protocol": "http", "port": 7512}\'',
  mqttEmbedded: '--fail-fast --tags "not @http" --world-parameters \'{"protocol": "mqtt", "port": 1883}\'',
  socketioEmbedded: '--fail-fast --tags "not @http" --world-parameters \'{"protocol": "socketio", "port": 7512}\'',
  websocketEmbedded: '--fail-fast --tags "not @http" --world-parameters \'{"protocol": "websocket", "port": 7512}\'',
  httpProxy: '--fail-fast --tags "not @realtime" --world-parameters \'{"protocol": "http", "port": 7513}\'',
  socketioProxy: '--fail-fast --tags "not @http" --world-parameters \'{"protocol": "socketio", "port": 7513}\'',
  websocketProxy: '--fail-fast --tags "not @http" --world-parameters \'{"protocol": "websocket", "port": 7513}\''
};
