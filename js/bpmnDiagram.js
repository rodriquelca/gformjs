/**
 *
 */
var bpmnDiagram;
bpmnDiagram = function () {
    /**
     * Unique ID
     * @type {null}
     */
    this.id = null;
    /**
     * Project Change flag
     * $type {boolean}
     */
    this.change = false;
    /**
     * Activities
     * @type {object}
     * @example
     * {'ACT_UID'                   : '',
     *  'ACT_NAME'                  : '',
     *  'ACT_TYPE'                  : '',
     *  'ACT_TASK_TYPE'             : '',
     *  'ACT_LOOP_TYPE'             : '',
     *  'ACT_LOOP_BEHAVIOR'         : '',
     *  'ACT_IS_COLLAPSED'          : '',
     *  'ACT_IS_ADHOC'              : '',
     *  'ACT_IS_FOR_COMPENSATION'   : '',
     *  'LAN_UID'                   : '',
     *  'BOU_X'                     : '',
     *  'BOU_Y'                     : '',
     *  'BOU_WIDTH'                 : '',
     *  'BOU_HEIGHT'                : '',
     *  'BOU_REL_POSITION'          : '',
     *  'ACT_REFERER'               : '',
     *  'ACT_MASTER_DIAGRAM'        : '',
     *  'ACT_IS_GLOBAL'             : '',
     *  'BOU_CONTAINER'             : ''};
     */
    this.activities = [];
    /**
     * Artifacts
     * @type {object}
     * @example
     * {'ART_UID'       : '',
     * 'ART_NAME'       : '',
     * 'ART_TYPE'       : '',
     * 'BOU_X'          : '',
     * 'BOU_Y'          : '',
     * 'BOU_WIDTH'      : '',
     * 'BOU_HEIGHT'     : '',
     * 'PARENTLANE'     : '',
     * 'BOU_CONTAINER'  : ''};
     */
    this.artifacts = [];
    /**
     * Data
     * @type {object}
     * @example
     * {'DAT_UID'           : '',
     * 'DAT_NAME'           : '',
     * 'DAT_TYPE'           : '',
     * 'DAT_IS_COLLECTION'  : '',
     * 'DAT_IS_GLOBAL'      : '',
     * 'DAT_OBJECT_REF'     : '',
     * 'BOU_X'              : '',
     * 'BOU_Y'              : '',
     * 'BOU_WIDTH'          : '',
     * 'BOU_HEIGHT'         : '',
     * 'PARENTLANE'         : '',
     * 'BOU_CONTAINER'      : ''};
     */
    this.data = [];

    /**
     * Events
     * @type {object}
     * @example
     * {'EVN_UID'               : '',
     * 'EVN_NAME'               : '',
     * 'EVN_TYPE'               : '',
     * 'EVN_MARKER'             : '',
     * 'EVN_IS_INTERRUPTING'    : '',
     * 'EVN_ATTACHED_TO'        : '',
     * 'EVN_BEHAVIOR'           : '',
     * 'LAN_UID'                : '',
     * 'BOU_X'                  : '',
     * 'BOU_Y'                  : '',
     * 'BOU_WIDTH'              : '',
     * 'BOU_HEIGHT'             : '',
     * 'BOU_REL_POSITION'       : '',
     * 'BOU_CONTAINER'          : ''}
     */
    this.events = [];
    /**
     * Flows
     * @type {object}
     * @example
     * {'FLO_UID'                   : '',
     * 'FLO_NAME'                   : '',
     * 'FLO_TYPE'                   : '',
     * 'FLO_ELEMENT_ORIGIN'         : '',
     * 'FLO_ELEMENT_ORIGIN_TYPE'    : '',
     * 'FLO_ELEMENT_ORIGIN_PORT'    : '',
     * 'FLO_ELEMENT_DEST'           : '',
     * 'FLO_ELEMENT_DEST_TYPE'      : '',
     * 'FLO_ELEMENT_DEST_PORT'      : ''}
     */
    this.flows = [];
    /**
     * Gateways
     * @type {object}
     * @example
     * {'GAT_UID'           : '',
     * 'GAT_NAME'           : '',
     * 'GAT_TYPE'           : '',
     * 'GAT_DIRECTION'      : '',
     * 'LAN_UID'            : '',
     * 'BOU_X'              : '',
     * 'BOU_Y'              : '',
     * 'BOU_WIDTH'          : '',
     * 'BOU_HEIGHT'         : '',
     * 'BOU_REL_POSITION'   : '',
     * 'BOU_CONTAINER'      : ''}
     */
    this.gateways = [];
    /**
     * Lanes
     * @type {object}
     * @example
     * {'LAN_UID'           : '',
     * 'LAN_NAME'           : '',
     * 'LNS_UID'            : '',
     * 'LAN_IS_HORIZONTAL'  : '',
     * 'BOU_X'              : '',
     * 'BOU_Y'              : '',
     * 'BOU_WIDTH'          : '',
     * 'BOU_HEIGHT'         : '',
     * 'LAN_CHILD_LANESET'  : '',
     * 'BOU_REL_POSITION'   : ''}
     */
    this.lanes = [];
    /**
     * Participants
     * @type {object}
     * @example
     * {'PAR_UID'               : '',
     * 'PAR_NAME'               : '',
     * 'PAR_IS_HORIZONTAL'      : '',
     * 'PRO_UID'                : '',
     * 'BOU_X'                  : '',
     * 'BOU_Y'                  : '',
     * 'BOU_WIDTH'              : '',
     * 'BOU_HEIGHT'             : '',
     * 'BOU_REL_POSITION'       : '',
     * 'PAR_NUM_PARTICIPANTS'   : ''}
     */
    this.participants = [];
    /**
     * Pools
     * @type {object}
     * @example
     * {'LNS_UID                : '',
     * 'LNS_NAME'               : '',
     * 'PRO_UID'                : '',
     * 'PRO_TYPE'               : '',
     * 'PRO_IS_EXECUTABLE'      : '',
     * 'PRO_IS_CLOSED'          : '',
     * 'LNS_IS_HORIZONTAL'      : '',
     * 'BOU_X'                  : '',
     * 'BOU_Y'                  : '',
     * 'BOU_WIDTH'              : '',
     * 'BOU_HEIGHT'             : '',
     * 'LNS_PARENT_LANE'        : '',
     * 'BOU_REL_POSITION'       : '',
     * 'BOU_SIZE_IDENTICAL'     : '',
     * 'PAR_NUM_PARTICIPANTS'   : ''}
     */
    this.pools = [];
};

//GETTERS
bpmnDiagram.prototype.getActivities = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'ACT_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};
bpmnDiagram.prototype.getArtifacts = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'ART_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};
bpmnDiagram.prototype.getData = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'DAT_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};
bpmnDiagram.prototype.getDiagram = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'DIA_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};
bpmnDiagram.prototype.getEvents = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'EVN_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};
bpmnDiagram.prototype.getFlows = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'FLO_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};
bpmnDiagram.prototype.getGateways = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'GAT_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};
bpmnDiagram.prototype.getLanes = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'LAN_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};
bpmnDiagram.prototype.getParticipants = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'PAR_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};
bpmnDiagram.prototype.getPools = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'LNS_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};
bpmnDiagram.prototype.getUser = function (value, attribute) {
    var _object;
    if (!attribute || typeof attribute === 'undefined') {
        attribute = 'USR_UID';
    }
    _object = _.find(this.activities,
        function (obj) {
            return obj[attribute] === value;
        });
    return _object;
};

//SETTERS
bpmnDiagram.prototype.setActivities = function (id, value) {
    var i;
    if (!id || typeof id === 'undefined' ||
        !value || typeof value === 'undefined') {
        return;
    }
    for (i = 0; i < this.activities.length; i += 1) {
        if (this.activities[i]['ACT_UID'] === id) {
            if (_.isObject(value)){
                this.activities[i] = $.extend({}, this.activities[i], value);
            }
        }
    }
    return this.activities;
};
bpmnDiagram.prototype.setArtifacts = function (id, value) {
    var i;
    if (!id || typeof id === 'undefined' ||
        !value || typeof value === 'undefined') {
        return;
    }
    for (i = 0; i < this.artifacts.length; i += 1) {
        if (this.artifacts[i]['ART_UID'] === id) {
            if (_.isObject(value)){
                this.artifacts[i] = $.extend({}, this.artifacts[i], value);
            }
        }
    }
    return this.artifacts;
};
bpmnDiagram.prototype.setData = function (id, value) {
    var i;
    if (!id || typeof id === 'undefined' ||
        !value || typeof value === 'undefined') {
        return;
    }
    for (i = 0; i < this.data.length; i += 1) {
        if (this.data[i]['DAT_UID'] === id) {
            if (_.isObject(value)){
                this.data[i] = $.extend({}, this.data[i], value);
            }
        }
    }
    return this.data;
};
bpmnDiagram.prototype.setDiagram = function (id, value) {
    var i;
    if (!id || typeof id === 'undefined' ||
        !value || typeof value === 'undefined') {
        return;
    }
    for (i = 0; i < this.diagram.length; i += 1) {
        if (this.diagram[i]['DIA_UID'] === id) {
            if (_.isObject(value)){
                this.diagram[i] = $.extend({}, this.diagram[i], value);
            }
        }
    }
    return this.diagram;
};
bpmnDiagram.prototype.setEvents = function (id, value) {
    var i;
    if (!id || typeof id === 'undefined' ||
        !value || typeof value === 'undefined') {
        return;
    }
    for (i = 0; i < this.events.length; i += 1) {
        if (this.events[i]['EVN_UID'] === id) {
            if (_.isObject(value)){
                this.events[i] = $.extend({}, this.events[i], value);
            }
        }
    }
    return this.events;
};
bpmnDiagram.prototype.setFlows = function (id, value) {
    var i;
    if (!id || typeof id === 'undefined' ||
        !value || typeof value === 'undefined') {
        return;
    }
    for (i = 0; i < this.flows.length; i += 1) {
        if (this.flows[i]['FLO_UID'] === id) {
            if (_.isObject(value)){
                this.flows[i] = $.extend({}, this.flows[i], value);
            }
        }
    }
    return this.flows;
};
bpmnDiagram.prototype.setGateways = function (id, value) {
    var i;
    if (!id || typeof id === 'undefined' ||
        !value || typeof value === 'undefined') {
        return;
    }
    for (i = 0; i < this.gateways.length; i += 1) {
        if (this.gateways[i]['GAT_UID'] === id) {
            if (_.isObject(value)){
                this.gateways[i] = $.extend({}, this.gateways[i], value);
            }
        }
    }
    return this.gateways;
};
bpmnDiagram.prototype.setLanes = function (id, value) {
    var i;
    if (!id || typeof id === 'undefined' ||
        !value || typeof value === 'undefined') {
        return;
    }
    for (i = 0; i < this.lanes.length; i += 1) {
        if (this.lanes[i]['LAN_UID'] === id) {
            if (_.isObject(value)){
                this.lanes[i] = $.extend({}, this.lanes[i], value);
            }
        }
    }
    return this.lanes;
};
bpmnDiagram.prototype.setParticipants = function (id, value) {
    var i;
    if (!id || typeof id === 'undefined' ||
        !value || typeof value === 'undefined') {
        return;
    }
    for (i = 0; i < this.participants.length; i += 1) {
        if (this.participants[i]['PAR_UID'] === id) {
            if (_.isObject(value)){
                this.participants[i] = $.extend({}, this.participants[i], value);
            }
        }
    }
    return this.participants;
};
bpmnDiagram.prototype.setPools = function (id, value) {
    var i;
    if (!id || typeof id === 'undefined' ||
        !value || typeof value === 'undefined') {
        return;
    }
    for (i = 0; i < this.pools.length; i += 1) {
        if (this.pools[i]['LNS_UID'] === id) {
            if (_.isObject(value)){
                this.pools[i] = $.extend({}, this.pools[i], value);
            }
        }
    }
    return this.pools;
};
bpmnDiagram.prototype.setUser = function (id, value, attribute) {

};
//ADD TO OBJECTS
bpmnDiagram.prototype.addActivities = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
//    this.activities = $.extend({}, this.activities, obj);
    this.activities.push(obj);
    return this.activities;
};
bpmnDiagram.prototype.addArtifacts = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
//    this.artifacts = $.extend({}, this.artifacts, obj);
    this.artifacts.push(obj);
    return this.artifacts;
};
bpmnDiagram.prototype.addData = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
//    this.data = $.extend({}, this.data, obj);
    this.data.push(obj);
    return this.data;
};
bpmnDiagram.prototype.addDiagram = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
//    this.diagram = $.extend({}, this.diagram, obj);
    this.diagram.push(obj);
    return this.diagram;
};
bpmnDiagram.prototype.addEvents = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
//    this.event = $.extend({}, this.events, obj);
    this.events.push(obj);
    return this.events;
};
bpmnDiagram.prototype.addFlows = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
//    this.flows = $.extend({}, this.flows, obj);
    this.flows.push(obj);
    return this.flows;
};
bpmnDiagram.prototype.addGateways = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
//    this.gateways = $.extend({}, this.gateways, obj);
    this.gateways.push(obj);
    return this.gateways;
};
bpmnDiagram.prototype.addLanes = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
//    this.lanes = $.extend({}, this.lanes, obj);
    this.lanes.push(obj);
    return this.lanes;
};
bpmnDiagram.prototype.addParticipants = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
//    this.participants = $.extend({}, this.participants, obj);
    this.participants.push(obj);
    return this.participants;
};
bpmnDiagram.prototype.addPools = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
//    this.pools = $.extend({}, this.pools, obj);
    this.pools.push(obj);
    return this.pools;
};
bpmnDiagram.prototype.addUser = function (obj) {
    if (!_.isObject(obj)) {
        return;
    }
    this.user = $.extend({}, this.user, obj);
    return this.user;
};

bpmnDiagram.prototype.getAllActivities = function (obj) {
    return this.activities;
}

//Get Diagram Tree
bpmnDiagram.prototype.getDiagramTree = function () {


    var items = [];
    //console.log(this.getAllActivities());
    //alert(this.getAllActivities().length);

    for (var i=0; i<this.getAllActivities().length; i++){
        var act = this.getAllActivities()[i];
        var obj = {
            name : act['ACT_NAME'],
            icon:'bpmn_icon_pool',
            items:
                [
                    {
                        name :'process 1',
                        icon:'bpmn_icon_pool',
                        items:
                            [
                                {
                                    name : 'lane1',
                                    icon:'bpmn_icon_lane'
                                },
                                {
                                    name: 'lane2'
                                }
                            ]
                    }
                ]
            };


        items.push(obj);
    }

    return items;
};

bpmnDiagram.prototype.getDiagramTree2 = function () {
    var items = [{
        name:'Diagrama # 2',
        icon:'bpmn_icon_pool',
        //selected:true;
        items: [{
            name :'process 1',
            icon:'bpmn_icon_pool',
            items:[{
                name : 'lane1',
                icon:'bpmn_icon_lane'
            },
                {
                    name: 'lane2'
                }
            ]
        },
            {
                name :'process 2',
                icon:'bpmn_icon_pool',
                items:[{
                    name : 'lane'
                },
                    {
                        name : 'lane2',
                        icon:'bpmn_icon_lane',
                        items:[{name:'activity',icon:'bpmn_icon_activity'},{name:'event',icon:'bpmn_icon_start'}]
                    },
                    {
                        name : 'lane3',
                        //icon:'',
                        items:[{
                            name:'start',
                            icon:'/img/folder-horizontal.png',
                            items:[{name:'uno',name:'dos'}]
                        },{
                            name:'event'}
                        ]
                    }
                ]
            }
        ]

    }];
    return items;
};

