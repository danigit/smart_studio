/***************************************************************
 * SOCKET COFIGURATIONS
 ***************************************************************/
const SOCKET_RECONECT_INTERVAL = 5000;
const CEZAR_KEY = 10;
const SOCKET_PATH = 'ws://localhost:8090';
const LOGING_IN_COLOR = '#1b5e20';
const SHOW_PARTNER_LOGO = true;
const MESSAGE_WAITING_TIME = 30000
;
let socketServer               = new WebSocket(SOCKET_PATH);
let socketOpened = false;
let groupTagDistance = 0.5;
const DEBUG = true;

socketServer.onopen = function () {
    socketOpened = true;
};

/***************************************************************
 * DIRECTORIES PATHS
 ***************************************************************/
const mainPath = '';
const componentsPath = 'components/';
const imagePath = 'img/';
const iconsPath = 'img/icons/';
const markersIconPath = 'img/icons/markers/';
const tagsIconPath = 'img/icons/tags/';
const audioPath = 'resources/audio/';
const floorPath = 'img/floors/';

/***************************************************************
 * CANVAS DEFAULT VARIABLES
 ***************************************************************/
const canvasBorderSpace           = 25;
const canvasGridPattern           = [5, 5];
const CANVAS_GRID_COLOR           = 'lightgray';
const TIME_REST_COLOR_OK          = '#00FF00';
const TIME_REST_COLOR_ERROR       = '#FF0000';
const TIME_REST_DESCRIPTION_OK    = 'OK';
const TIME_REST_DESCRIPTION_ERROR = 'ERROR';
const TIME_REST                   = 30;
const TAG_CLOUD_DISTANCE          = 1.0;
const LINE_UNION_SPACE            = 100;
const ZONE_MODIFY_POINT_DIMENSION = 10;
const CANVAS_TAG_ICON_SIZE        = 35;
const CANVAS_ANCHOR_ICON_SIZE     = 45;
const CANVAS_CAMERA_ICON_SIZE     = 45;
const CANVAS_UPDATE_TIME_INTERVAL = 1000;
const CANVAS_DRAWING_ACTION_DELAY = 2000;
const DELTA_FOR_OFFLINE_TAGS      = 10;

/***************************************************************
 * MAPS COFIGURATIONS
 ***************************************************************/
const mapZoom = 3;
const OUTDOOR_LOCATION_ZOOM = 17;
const mapType = 'TERAIN';
const mapCenter = [41.87194, 12.56738];
const CIRCLE_OPACITY = 0.03;
const CIRCLE_ZONE_OPACITY = 0.35;
const RECTANGLE_ZONE_OPACITY = 0.35;
const CIRCLE_WEIGHT = 2;
const CIRCLE_STROKE_OPACITY = 0.8;

const MAP_CONFIGURATION = [{
    featureType: "poi",
    elementType: "labels",
    stylers    : [
        {visibility: "off"}
    ]
}, {
    featureType: "water",
    elementType: "labels",
    stylers    : [
        {visibility: "off"}
    ]
}, {
    featureType: "road",
    elementType: "labels",
    stylers    : [
        {visibility: "off"}
    ]
}];

/***************************************************************
* HOME COFIGURATIONS
***************************************************************/

const HOME_ALARM_UPDATE_TIME = 1000;
const OUTDOOR_ALARM_UPDATE_TIME = 1000;
const TAGS_ALARMS_WINDOW_UPDATE_TIME = 1000;
const ALARMS_WINDOW_UPDATE_TIME = 1000;
const ANCHORS_ALARMS_WINDOW_UPDATE_TIME = 1000;
const INDOOR_LOCATION_ICON = 'location-marker.png';
const OUTDDOR_LOCATION_ICON = 'outdoor-location.png';
const LOCATION_TAG_ALARM_ICON = 'alarm-icon.png';
const LOCATION_ANCHOR_ALARM_ICON = 'offline_anchors_alert_64.png';
// const MARKER_CLUSTER_IMAGE = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";
// const MARKER_CLUSTER_IMAGE = iconsPath + '/markers/cloud_ok';
const MARKER_CLUSTER_OK_IMAGE = {
    styles: [
        {
            url: iconsPath + '/markers/cloud_ok1.png',
            width: 55,
            height: 55,
            textSize: 20,
            textColor:"white",
        }
    ]
};

const MARKER_CLUSTER_ALARM_IMAGE = {
    styles: [
        {
            url: iconsPath + '/markers/cloud_error1.png',
            width: 55,
            height: 55,
            textSize: 20,
            textColor:"white",
        }
    ]
};

// this is in function of the time of the calls, for example if I update the map every second then this is going to be
// played every 5 seconds if the value is 4 (1 * 4 = 5)
const AUDIO_PLAY_INTERVAL = 4;
const TOAST_SHOWING_TIME = 5000;
const COLLAPSIBLE_STATE = true;
const TABLE_CELL_MAX_LENGTH = 500;