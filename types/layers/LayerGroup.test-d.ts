/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { expectAssignable, expectError, expectType } from 'tsd';
import Event from '../common/Event';
import Map from '../Map';
import VectorLayer from './VectorLayer';
import Buildings from './BuildingsLayer';
import CanvasLayer from './CanvasLayer';

import LayerGroup from './LayerGroup';

const layerGroup = new LayerGroup();

expectType<LayerGroup>(layerGroup);
expectAssignable<Event>(layerGroup);

const vectorLayer = {} as any as VectorLayer;
const buildings = {} as any as Buildings;
const canvasLayer = {} as any as CanvasLayer;
const layerGroup2 = new LayerGroup<VectorLayer | Buildings | CanvasLayer>([
  vectorLayer,
  buildings,
  canvasLayer,
]);
expectType<LayerGroup<VectorLayer | Buildings | CanvasLayer>>(layerGroup2);

// methods
expectType<typeof layerGroup>(layerGroup.setMap());
expectType<typeof layerGroup>(layerGroup.setMap({} as any as Map));

expectType<boolean>(layerGroup.hasLayer({}));
expectType<boolean>(layerGroup2.hasLayer(vectorLayer));
expectType<boolean>(layerGroup2.hasLayer(buildings));
expectType<boolean>(layerGroup2.hasLayer(canvasLayer));
expectError(layerGroup2.hasLayer({})); // 明确声明类型时, 受明确声明类型影响

expectType<void>(layerGroup.addLayer({}));
expectType<void>(layerGroup2.addLayer(vectorLayer));
expectType<void>(layerGroup2.addLayer(buildings));
expectType<void>(layerGroup2.addLayer(canvasLayer));
expectError(layerGroup2.addLayer({})); // 明确声明类型时, 受明确声明类型影响

expectType<void>(layerGroup.addLayers([]));
expectType<void>(layerGroup.addLayers([{}]));
expectType<void>(layerGroup2.addLayers([vectorLayer, buildings, canvasLayer]));
expectError<void>(layerGroup2.addLayers([{}])); // 明确声明类型时, 受明确声明类型影响

expectType<typeof layerGroup>(layerGroup.removeLayer({}));
expectType<typeof layerGroup2>(layerGroup2.removeLayer(vectorLayer));
expectType<typeof layerGroup2>(layerGroup2.removeLayer(buildings));
expectType<typeof layerGroup2>(layerGroup2.removeLayer(canvasLayer));
expectError<typeof layerGroup2>(layerGroup2.removeLayer({})); // 明确声明类型时, 受明确声明类型影响

expectType<void>(layerGroup.removeLayers([]));
expectType<void>(layerGroup.removeLayers([{}]));
expectType<void>(layerGroup2.removeLayers([vectorLayer, buildings, canvasLayer]));
expectError<void>(layerGroup2.removeLayers([{}])); // 明确声明类型时, 受明确声明类型影响

expectType<any[]>(layerGroup.getLayers());
expectType<Array<VectorLayer | Buildings | CanvasLayer>>(layerGroup2.getLayers());

expectType<void>(layerGroup.clearLayers());

expectType<void>(layerGroup.eachLayer());
expectType<void>(layerGroup.eachLayer(() => {}));
expectType<void>(layerGroup.eachLayer((layer) => {}));
expectType<void>(layerGroup.eachLayer((layer, index) => {}));
expectType<void>(layerGroup.eachLayer((layer, index, collections) => {
  expectType<any>(layer);
  expectType<number>(index);
  expectType<any[]>(collections);
}));
expectType<void>(layerGroup2.eachLayer((layer, index, collections) => {
  expectType<VectorLayer | Buildings | CanvasLayer>(layer);
  expectType<number>(index);
  expectType<Array<VectorLayer | Buildings | CanvasLayer>>(collections);
}));

expectType<typeof layerGroup>(layerGroup.setOptions({}));
expectType<typeof layerGroup2>(layerGroup2.setOptions({}));

expectType<LayerGroup>(layerGroup.hide());
expectType<LayerGroup>(layerGroup.show());
expectType<LayerGroup>(layerGroup.reload());
