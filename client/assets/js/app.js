/**
   * Write function(s) in JS on client
     - depth-first
     - breadth-first
     - uniform-cost
     - research Dykstra & A*
   * Display results in tables
   * Add notations to HTML
   * Add km markers
   * Move processing to WebSockets & Node JS
   * Move storage to Neo4j
 */

 /*
initial state
actions(state) ->{a1, a2, a3,...}
result(state, action) ->{new state}
goal state test(state)  -> boolean
path cost(s-[a]->s-[a]->s, ...)  ->n
	step cost(s, a, s1) ->n


frontier = [];
explored = [];
var t;
frontier.push(initial);
while frontier is not empty
	t = frontier.pop();
	explored.push(t);
	if t is goal, return path;

	edges = get edges of t
	for each edge
		if the node in edge is not in frontier and
		   the node in edge is not in explored
		   add the node to frontier;
	end for each
end while
 */
var App = (function($) {
	var Base = function() {
        var setProp = function(k, v) {props[k] = v;};
        this.pullFromPropArray = function(p, k, def) {
            return ('undefined' !== typeof p && 'undefined' !== typeof p[k]) ? p[k] : def;
        };
        this.getProps = function() {return props;};

/*
        var props = {
            id:this.pullFromPropArray(p, 'id', null)
        };*/
    };

	var App = new function(p) {
   		$.extend(this, new Base(p));
   		$.extend(this, new EventEmitter());

		$.extend(this, {
			status: "", from: "", to: "",
			paths: {"breadth":{}, "depth":{}, "lowestCost":{}},
			panels: {"breadth":null, "depth":null, "lowestCost":{}},
			listeners: [], 
			init: function() {
				App.panels.breadth = new Panel('breadth', 'panel-breadth', 'breadth', 
					'Find shortest path <span>(in terms of steps)</span>');
				App.panels.breadth.init();
				App.listeners.push(App.panels.breadth);

				App.panels.depth = new Panel('depth', 'panel-depth', 'depth',
					'Depth');
				App.panels.depth.init();
				App.listeners.push(App.panels.depth);

				App.panels.lowestCost = new Panel('lowestCost', 'panel-lowestCost', 'lowestCost', 
					'Find shortest path <span>(in terms of distance)</span>');
				App.panels.lowestCost.init();
				App.listeners.push(App.panels.lowestCost);

				App.Canvas.init();

				var self = this;
				App.on('nodeselected', function(ep) {
					if (self.from == "") {
						self.onFromNodeSelected(ep);
						return;
					}
					if (self.to == "") {
						self.onToNodeSelected(ep);
						return;
					}
				});

				App.emit('ready', {"msg":"App is ready"});
        	},
			clear: function() {
				this.to = this.from = "";

				$('btnClear').attr("disabled", true);
				this.emit('clear');

				this.setStatus("");
			},
			onFromNodeSelected: function(p) {
				this.from = p.node.name;
				this.emit('selectedfrom', p);
			},
			onToNodeSelected: function(p) {
				this.to = p.node.name;
				this.emit('selectedto', p);
			},
			search: function() {
				var from = App.from;
				var to = App.to;
				var path;

				path = this.setSearchPath('breadth', (new BreadthSearch()).exec(from, to));
				this.emit('searchdone', {"path": path, "color": App.Canvas.colors.highlightRoadBreadth});

				path = this.setSearchPath('depth', new DepthSearch().exec(from, to));
				this.emit('searchdone', {"path": path, "color": App.Canvas.colors.highlightRoadDepth});

				path = this.setSearchPath('lowestCost', new UniformCostSearch().search(from, to));
				this.emit('searchdone', {"path": path, "color": App.Canvas.colors.highlightRoadLowestCost});

				this.emit('processingdone');
			},
			setStatus: function(status) {
				this.status = status;
				this.emit('changestatus', {"status":status});
			},
			getSearchPath: function(searchId) {
				return this.paths[searchId];
			},
			setSearchPath: function(searchId, path) {
				return this.paths[searchId] = path;
			}
		});
	};

	/**
	 * Make it so the Canvas object is not a singleton.   Rather, you get
	 * it be calling App.getCanvas('name').draw();
	 *
	 * Each Canvas is supplied a helper that knows how to draw stuff that
	 * pertains to it.
	 */
	var Canvas = function() {
		$.extend(this, {
			"stage": null,
			"colors": {
				"highlightRoadDepth": "rgba(9, 41, 220, .3)",
				"highlightRoadBreadth": "rgba(255, 255, 0, .4)",
				"highlightRoadLowestCost": "rgba(255, 0, 255, .4)"
			},
			init: function() {
			    this.stage = new createjs.Stage("map");
			    this.draw();

				var self = this;
				App.on('clear', function(ep) {
					self.clear();
					self.draw();
				});
				App.on('searchdone', function(ep) {
					self.drawPath(ep.path, ep.color);
				});
				App.on('processingdone', function(ep) {
					self.stage.update();
				});
				App.on('selectedfrom', function(ep) {
					self.drawCityMarker(ep.node, 'selected');
					self.stage.update();
				});
				App.on('selectedto', function(ep) {
					self.drawCityMarker(ep.node, 'selected');
					self.stage.update();
				});			
			},
			clear: function() {
				this.stage.clear();
			},
			draw: function() {
			    var map = new createjs.Shape();
			    map.graphics.beginFill("white").drawRect(0, 0, 800, 600);

				map.onClick = function(e) {alert(e.stageX+', '+e.stageY)};
			    this.stage.addChild(map);
			    this.stage.update();

			    drawRoads(this.stage);
			    this.stage.update();
			    drawCities(this.stage);
			    this.stage.update();
			},
			drawPath: function(path, roadColor) {
				var self = this;
				var n1, n2;
				n1 = App.Graph.getNode(path[0]);

				_.each(path, function(elem, indx) {
						if (indx == 0) return;

						n2 = App.Graph.getNode(elem);
						highlightRoad(self.stage, n1, n2, roadColor);
						n1 = n2;
					});

				_.each(path, function(elem, indx) {
						App.Canvas.drawCityMarker(App.Graph.getNode(elem), (indx==0 || indx>=path.length-1) ? 'selected' : 'filled');
					});
			},
			drawCityMarker: function (p, status) {
				var city = new createjs.Shape();
				var color = status == 'selected' ? 'black' : 
						status == 'filled' ? '#819FF7' : 
						'white';

				city.graphics.ss(2).s('#819FF7').f(color).dc(p.xCenter, p.yCenter, 5);
				city.onClick = function(e) {onClickCity(p)};

				this.stage.addChild(city);
			}
		});
	};

	var Graph = function() {
		$.extend(this, {
			getNode: function(n) {
				var c = App.Graph.nodes.length;
				for (var i=0; i < c; i++) {
					if (n.toLowerCase() == App.Graph.nodes[i].name) return App.Graph.nodes[i];
				}
				return null;
			},
			getEdge: function(n) {
				var c = App.Graph.edges.length;
				for (var i=0; i < c; i++) {
					if (n.toLowerCase() == App.Graph.edges[i].name) return App.Graph.edges[i];
				}
				return null;
			},
			getEdgeConnecting: function(n1, n2) {
				var edge;
				var c = App.Graph.edges.length;
				for (var i=0; i < c; i++) {
					edge = App.Graph.edges[i];
					if (_.contains(edge.nodes, n1) &&
						_.contains(edge.nodes, n2))
						return edge;
				}
				return null;
			},
			getConnectedNode: function(edge, startingPoint) {
				var a = _.without(edge.nodes, startingPoint);
				return (a.length > 0) ? a[0] : null; 
			},
			getConnectedNodes: function(node) {
				var connectedNodes = [];

				_.each(node.edges, function(elem) {
					var edge = App.Graph.getEdge(elem);
					_.each(edge.nodes, function(n) {
						if(n.toLowerCase() == node.name.toLowerCase())
							return;
						if(!_.contains(connectedNodes, n))
							connectedNodes.push(n);
					});
				});

				return connectedNodes;
			},
			convertPathToNodeList: function(path) {
				var nodeList = [];
				console.log(path);
				_.each(path, function(elem) {
					nodeList.push(App.Graph.getNode(elem));
				});
				return nodeList;
			}
		});
	};

	var Search = function() {
   		$.extend(this, new Base(null));
   		$.extend(this, {
   			search: function() { return null; },
			unwind: function(steps, ptr, path) {
				if (steps.length <= 0) return path;

				var elem = steps.pop();
				if (elem[1] == ptr) {
					path.unshift(ptr);
					ptr = elem[0];
				}
				return this.unwind(steps, ptr, path);
			},
			exec: function(from, to) {
				var a = this.search(from, to);
				var path = [];
				this.unwind(a, to, path);
				path.unshift(from);
				return path;
			}
   		});
   	};

	var DepthSearch = function() {
   		$.extend(this, new Search(null));
   		$.extend(this, {
			search: function(from, to) {
				var frontier = [];
				var explored = [];
				var path = [];
				var t;

				frontier.push(from);
				while (frontier.length > 0) {
					t = frontier.pop();
					explored.push(t);
					if (t == to) return path;

					var nodes = App.Graph.getConnectedNodes(App.Graph.getNode(t));
					_.each(nodes, function(elem) {
						if (!_.contains(explored, elem) && !_.contains(frontier, elem)) {
							frontier.push(elem);
							path.push([t, elem]);
						}
					});
				}
				return null;
			}
   		});
   	};
	var BreadthSearch = function() {
   		$.extend(this, new Search(null));
   		$.extend(this, {
			search: function(from, to) {
				var frontier = [];
				var explored = [];
				var path = [];
				var t;

				frontier.push(from);
				path.push([null, t]);

				while (frontier.length > 0) {
					t = frontier.shift();
					explored.push(t);
					if (t == to) return path;

					var nodes = App.Graph.getConnectedNodes(App.Graph.getNode(t));
					_.each(nodes, function(elem) {
						if (!_.contains(explored, elem) && !_.contains(frontier, elem)) {
							frontier.push(elem);
							path.push([t, elem]);
						}
					});
				}
			}
   		});
   	};
	var UniformCostSearch = function() {
   		$.extend(this, new Search(null));
   		$.extend(this, {
   			search: function(from, to) {
				var self = this;
				var frontier = [];
				var explored = [];
				var t, edge;

				frontier.push({"from":from, "terminus":from, "cost":0, "path":[from]});

				while (frontier.length > 0) {
					t = frontier.shift();
					explored.push(t.terminus);
					if (t.terminus == to) {
			            return t.path;
			        }

					var tmpNodes = App.Graph.getConnectedNodes(App.Graph.getNode(t.terminus));
					var nodes = [];
					_.each(tmpNodes, function(elem) {
						// Only include as a node to check if we haven't already checked it.
						if (!_.contains(explored, elem)) {
							nodes.push(elem);
						}
					});

					var a = [];
					_.each(nodes, function(elem) {
						// If the node has already been added to the frontier, don't add it again.
						if (self.inFrontier(elem, frontier)) return;

						var edge = App.Graph.getEdgeConnecting(t.terminus, elem);
						var path = t.path.slice(0);
						path.push(elem);

						frontier.push({"from":from, "terminus":elem, "cost":t.cost+edge.distance, "path":path});
					});

					frontier = _.sortBy(frontier, "cost");
				}

				return null;
			},
			inFrontier: function(elem, a) {
				for (var i=0; i < a.length; i++) {
					if (elem == a[i].terminus)
						return true;
				}
				return false;
			},
			orderByDistance: function(options) {
				return _.sortBy(options, function(elem){
					return elem.distance;
				});
			}
   		});
   	};

	var Panel = function(id, ref, search, caption) {
		var searchId = search;
		var tmpl = '';
		var tmplModel = null;

	    $.extend(this, {
	        panelId: id !== null ? id : '', 
	        elemReference: ref !== null ? ref : '',
	        caption: caption !== null ? caption : '', 
	        init: function() {
	        	this.initializeTemplateModel();
				this.loadTemplate(false, this.onTemplateLoaded);

				var self = this;
				App.on('selectedfrom', function(ep) {self.applyFrom(App.Graph.getNode(App.from));});
				App.on('selectedto', function(ep) {self.applyTo(App.Graph.getNode(App.to));});
				App.on('clear', function(ep) {self.clear();});
				App.on('processingdone', function() {
        			self.update(App.Graph.convertPathToNodeList(App.getSearchPath(self.getSearchId())), self.elemReference);
				});
	        },
	        render: function() {},
	        applyFrom: function(node) {
	        	var data = this.getTemplateModel();
	        	data.fromNodeName = node == null ? '' : formatText(convertHexText(node.display));

	        	this.setTemplateModel(data);
				this.loadTemplate(false, this.onTemplateLoaded);
	        },
	        applyTo: function(node) {
	        	var data = this.getTemplateModel();
	        	data.toNodeName = node == null ? '' : formatText(convertHexText(node.display));
	        	data.toStep = '&mdash;';
	        	data.toDistance = '&mdash;';

	        	this.setTemplateModel(data);
				this.loadTemplate(false, this.onTemplateLoaded);
	        },
	        update: function(data, panelRef) {
        		var s = '';
                var edge;
                var steps = [];
                var totalDistance = 0;
        		_.each(data, function(elem, indx) {
        			// First and last are handled during selection of points.
        			if (indx == 0) return;
                                
                    edge = App.Graph.getEdgeConnecting(elem.name, data[indx-1].name);
                    totalDistance += edge.distance;
                    
                    steps.push({
                    	nodeName: formatText(convertHexText(elem.display)),
                    	step: indx,
                    	distance: edge.distance
                    });
        		});

				var data = this.getTemplateModel();
				var to = steps.pop();

				data.steps = steps;
				data.toStep = to.step;
				data.toDistance = to.distance;
				data.totalDistance = totalDistance;

	        	this.setTemplateModel(data);
				this.loadTemplate(false, this.onTemplateLoaded);
	        },
	        clear: function() {
	        	this.initializeTemplateModel();
				this.loadTemplate(false, this.onTemplateLoaded);
	        },
	        loadTemplate: function(reload, fnc) {
	        	var self = this;
				if (tmpl.length > 0 && !reload) {
					if (fnc) fnc(tmpl, self);
					return;
				}
				$.get('assets/html/partials/datatable.html', function(t) {
					tmpl = t;
					if (fnc) fnc(tmpl, self);
				});
	        },
	        onTemplateLoaded: function(tmpl, o) {
				var data = o.getTemplateModel();
				o.updateTemplate(tmpl, data);
	        },
	        updateTemplate: function(tmpl, data) {
				$('#'+this.elemReference).html(Mustache.to_html(tmpl, data));
	        },
	        initializeTemplateModel: function() {
	        	tmplModel = {
	        		caption: this.caption
	        	};
	        	return tmplModel;
	        },
	        setTemplateModel: function(model) {
	        	tmplModel = model;
	        	return tmplModel;
	        },
	        getTemplateModel: function() {
	        	return tmplModel;
	        },
	        getSearchId: function() {
	        	return searchId;
	        }
	    });
	};

    $.extend(App, {
        'Canvas': new Canvas(),
        'Graph': new Graph()
    });

    return App;
})(jQuery);


function drawCities(stage) {
	_.each(App.Graph.nodes, function(elem) {
			App.Canvas.drawCityMarker(elem);
			drawCityLabel(stage, elem);
		});
}
function drawRoads(stage) {
	var sh;
	var color = '#819FF7';

	var edge, node1, node2;
	_.each(App.Graph.edges, function(elem) {
			n1 = App.Graph.getNode(elem.nodes[0]);
			n2 = App.Graph.getNode(elem.nodes[1]);

			sh = new createjs.Shape();
			sh.graphics.mt(n1.xCenter, n1.yCenter).ss(2).s(color).lt(n2.xCenter, n2.yCenter);
			App.Canvas.stage.addChild(sh);

			drawDistanceLabel(stage, elem);
		});
}
function highlightRoad(stage, n1, n2, roadColor) {
	var sh = new createjs.Shape();

	sh.graphics.mt(n1.xCenter, n1.yCenter).ss(10).s(roadColor).lt(n2.xCenter, n2.yCenter);
	stage.addChild(sh);
}
function drawCityLabel(stage, p) {
	var text = new createjs.Text(formatText(convertHexText(p.display), 'map'), "14px Arial", "#333");
	text.x = p.xLabel;
	text.y = p.yLabel;
	text.textBaseline = "alphabetic";

	text.onClick = function(e) {onClickCityLabel(p)};

	stage.addChild(text);
}
function onClickCity(node) {
	App.emit('nodeselected', {"node":node});
}
function onClickCityLabel(node) {
	App.emit('nodeselected', {"node":node});
}
function drawDistanceLabel(stage, p) {
	var text = new createjs.Text(p.distance, "12px Arial", "#ccc");
	text.x = p.xLabel;
	text.y = p.yLabel;
	text.textBaseline = "alphabetic";
	stage.addChild(text);
}
function convertHexText(s) {
	/*
	\\x15F; hexCedilla (s?)
	\\xE2; hexACircumflex (a^)
	\\x103; hexABreve (a))
	*/
	s = s.replace(/\[hexCedilla\]/gi, String.fromCharCode(parseInt("\\x15F".substr(2), 16)));
	s = s.replace(/\[hexABreve\]/gi, String.fromCharCode(parseInt("\\x103".substr(2), 16)));
	s = s.replace(/\[hexACircumflex\]/gi, String.fromCharCode(parseInt("\\xE2".substr(2), 16)));
	return s;
}
function formatText(s, context) {
	return s.replace(/\[BR\]/gi, context=='map' ? '\n' : ' ');
}


function convertMilliSecsToTime(ms) {
	var x = ms/1000;
	var secs = x % 60;
	x /= 60;
	var mins = x % 60;
	var mils = ms - (secs*1000);
	console.log(x+'->'+secs+':'+mins+':'+mils)
}