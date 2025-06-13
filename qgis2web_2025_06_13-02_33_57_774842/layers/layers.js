var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            popuplayertitle: 'Raster',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_archiwalna_1 = new ol.format.GeoJSON();
var features_archiwalna_1 = format_archiwalna_1.readFeatures(json_archiwalna_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_archiwalna_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_archiwalna_1.addFeatures(features_archiwalna_1);
var lyr_archiwalna_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_archiwalna_1, 
                style: style_archiwalna_1,
                popuplayertitle: 'archiwalna',
                interactive: true,
                title: '<img src="styles/legend/archiwalna_1.png" /> archiwalna'
            });
var format_sentinel_2 = new ol.format.GeoJSON();
var features_sentinel_2 = format_sentinel_2.readFeatures(json_sentinel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel_2.addFeatures(features_sentinel_2);
var lyr_sentinel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel_2, 
                style: style_sentinel_2,
                popuplayertitle: 'sentinel',
                interactive: true,
                title: '<img src="styles/legend/sentinel_2.png" /> sentinel'
            });

lyr_Raster_0.setVisible(true);lyr_archiwalna_1.setVisible(true);lyr_sentinel_2.setVisible(true);
var layersList = [lyr_Raster_0,lyr_archiwalna_1,lyr_sentinel_2];
lyr_archiwalna_1.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Shape_inde': 'Shape_inde', });
lyr_sentinel_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Shape_inde': 'Shape_inde', });
lyr_archiwalna_1.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape_inde': 'TextEdit', });
lyr_sentinel_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Shape_inde': 'TextEdit', });
lyr_archiwalna_1.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Shape_inde': 'no label', });
lyr_sentinel_2.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'inline label - visible with data', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Shape_inde': 'no label', });
lyr_sentinel_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});