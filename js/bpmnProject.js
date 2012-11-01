var bpmnProject;
bpmnProject = function(){
    /**
     * User
     * @type {object}
     */
    this.user = {};
    /**
     * Diagrams
     * @type {object}
     * @example
     * {'DIA_UID'           : '',
     * 'DIA_NAME'           : '',
     * 'DIA_IS_CLOSABLE'    : ''}
     */
    this.diagram = [];

};
bpmnProject.prototype.setProject = function (diagram) {
    var obj;
    if(typeof(Storage)!=="undefined"){
        try {
            obj = {
                'activities'    : diagram.activities,
                'artifacts'     : diagram.artifacts,
                'data'          : diagram.data,
                'diagram'       : diagram.diagram,
                'events'        : diagram.events,
                'flows'         : diagram.flows,
                'gateways'      : diagram.gateways,
                'lanes'         : diagram.lanes,
                'participants'  : diagram.participants,
                'pools'         : diagram.pools,
                'user'          : diagram.user
            };
            obj = JSON.stringify(obj);
            localStorage.setItem('PROJECT',obj);
        }
        catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                alert('Ha excedido el almacenamiento!');
            }
        }
    }
    else{
        alert('IE 6 o 7?');
    }
};
bpmnProject.prototype.getProject = function () {
    var obj;
    if(typeof(Storage)!=="undefined"){
        obj = JSON.parse(localStorage.getItem('PROJECT'));
        return obj;
    }
    else{
        alert('IE 6 o 7?');
    }
};