//sets the year for the scroller bar
var currentyear;
var myRange = document.querySelector('#myRange');
var myValue = document.querySelector('#myValue');
var myUnits = 'myUnits';
var off = myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
var px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

//adjusts how far the slider is moving in pixels
myValue.parentElement.style.left = px + 'px';
myValue.parentElement.style.top = myRange.offsetHeight + 'px';
myValue.innerHTML = +myRange.value + 1979;

//updates and displays the new year based on scrolled increment
myRange.oninput = function() {
    updateTextInput(this.value);
    var px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 2) - 40;
    myValue.innerHTML = +myRange.value + 1979;
    currentyear = myValue.innerHTML;
    myValue.parentElement.style.left = px + 'px';
};

//updates artic environment and corresponding bar graphs based on scroll
function updateTextInput(value) {
    update(value);
    addcloud(value);
}
var height = 500;
var width = 500;
var xScale, yScale;

var svgContainer = d3.select("#articenviron").append("svg")
    .attr("width", width).attr("height", height);

//initial state for sea level must be level at start year
var searectangle = svgContainer.append("rect")
    .attr("x", 0)
    .attr("y", 450)
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "#47A4CD");

//coordinates for svg sea level wave
var lineData = [{
    "x": 0,
    "y": 50
}, {
    "x": 100,
    "y": 0
}, {
    "x": 180,
    "y": 50
}, {
    "x": 300,
    "y": 0
}, {
    "x": 350,
    "y": 50
}, {
    "x": 400,
    "y": 0
}, {
    "x": 500,
    "y": 50
}, {
    "x": 650,
    "y": 0
}, {
    "x": 700,
    "y": 50
}, {
    "x": 780,
    "y": 0
}, {
    "x": 840,
    "y": 50
}];

var lineFunction = d3.svg.line()
    .interpolate("basis") //smooths out the line
    .x(function(d) {
        return d.x;
    })
    .y(function(d) {
        return d.y;
    });

var wave = svgContainer.append("path")
    .attr("d", lineFunction(lineData))
    .attr("transform", "translate(0,405)")
    .attr("fill", "#47A4CD");

//coordinates for individual svg co2 letters
var co2C = [{
    "x": 77,
    "y": 43
}, {
    "x": 41,
    "y": 35
}, {
    "x": 21,
    "y": 45
}, {
    "x": 11,
    "y": 60
}, {
    "x": 13,
    "y": 105
}, {
    "x": 28,
    "y": 125
}, {
    "x": 63,
    "y": 130
}, {
    "x": 83,
    "y": 122
}, {
    "x": 78,
    "y": 114
}, {
    "x": 42,
    "y": 116
}, {
    "x": 34,
    "y": 109
}, {
    "x": 27,
    "y": 83
}, {
    "x": 33,
    "y": 49
}, {
    "x": 77,
    "y": 49
}, {
    "x": 77,
    "y": 43
}];

var co2O = [{
    "x": 92,
    "y": 113
}, {
    "x": 95,
    "y": 50
}, {
    "x": 113,
    "y": 37
}, {
    "x": 146,
    "y": 38
}, {
    "x": 160,
    "y": 47
}, {
    "x": 161,
    "y": 115
}, {
    "x": 139,
    "y": 131
}, {
    "x": 109,
    "y": 128
}, {
    "x": 92,
    "y": 113
}];

var co2Ohole = [{
    "x": 115,
    "y": 53
}, {
    "x": 142,
    "y": 50
}, {
    "x": 148,
    "y": 64
}, {
    "x": 145,
    "y": 108
}, {
    "x": 130,
    "y": 120
}, {
    "x": 110,
    "y": 109
}, {
    "x": 107,
    "y": 101
}, {
	"x": 107,
	"y": 84
},{
	"x": 109,
	"y": 62
},
	{
    "x": 115,
    "y": 53
}];

var co2two = [{
    "x": 183,
    "y": 112
}, {
    "x": 180,
    "y": 106
}, {
    "x": 187,
    "y": 103
}, {
    "x": 197,
    "y": 105
}, {
    "x": 198,
    "y": 113
}, {
    "x": 186,
    "y": 128
}, {
    "x": 199,
    "y": 129
}, {
    "x": 199,
    "y": 132
}, {
    "x": 181,
    "y": 132
}, {
    "x": 180,
    "y": 129
}, {
    "x": 193,
    "y": 111
}, {
    "x": 192,
    "y": 109
}, {
    "x": 183,
    "y": 112
}];

var lineFunction2 = d3.svg.line().x(function(d) {
        return d.x;
    })
    .y(function(d) {
        return d.y;
    }).interpolate("cardinal");//smooths out the line

var cloudC = svgContainer.append("path")
    .attr("d", lineFunction2(co2C))
    .attr("fill", "#EFF1F5")
    .attr("transform", "scale(1.2,1.2), translate(110,0)");

var cloudO = svgContainer.append("path")
    .attr("d", lineFunction2(co2O))
    .attr("fill", "#EFF1F5")
    .attr("transform", "scale(1.2,1.2), translate(110,0)");

var cloudOhole = svgContainer.append("path")
    .attr("d", lineFunction2(co2Ohole))
    .attr("fill", "white")
    .attr("transform", "scale(1.2,1.2), translate(110,0)");

var cloud2 = svgContainer.append("path")
    .attr("d", lineFunction2(co2two))
    .attr("fill", "#EFF1F5")
    .attr("transform", "scale(1.2,1.2), translate(110,0)");

//coordinates for svg ice peaks
var icelineData = [{
    "x": 0,
    "y": 50
}, {
    "x": 100,
    "y": 50
}, {
    "x": 180,
    "y": 50
}, {
    "x": 300,
    "y": 30
}, {
    "x": 350,
    "y": 50
}, {
    "x": 400,
    "y": 0
}, {
    "x": 500,
    "y": 50
}];

//initial state for svg sea ice must be level at start year
var icerectangle = svgContainer.append("rect")
    .attr("x", 0)
    .attr("y", 400) 
    .attr("width", 450)
    .attr("height", 80)
    .attr("fill", "#B5DCE9");

var lineFunction3 = d3.svg.line()
    .x(function(d) {
        return d.x;
    })
    .y(function(d) {
        return d.y;
    });

var icewave = svgContainer.append("path")
    .attr("d", lineFunction3(icelineData))
    .attr("transform", "translate(-49,351)")
    .attr("fill", "#B5DCE9");

var glacierline = [];
var sealine = [];
var svg = d3.select("svg");
var infoBoard;

var seamargin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 40
    },
    seawidth = 600 - seamargin.left - seamargin.right,
    seaheight = 170 - seamargin.top - seamargin.bottom;

//add x and y scale and axis for years and values for sea level
var seax = d3.scale.ordinal().rangeRoundBands([0, seawidth], .05);
var seay = d3.scale.linear().domain([4, 11]).range([seaheight, 0]);

var seaxAxis = d3.svg.axis()
    .scale(seax)
    .orient("bottom").tickFormat("");

var seayAxis = d3.svg.axis()
    .scale(seay)
    .orient("left")
    .ticks(8);

var co2margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 40
    },
	co2width = 600 - co2margin.left - co2margin.right,
	co2height = 170 - co2margin.top - co2margin.bottom;

//add x and y scale for years and values for co2 concentration
var co2x = d3.scale.ordinal().rangeRoundBands([0, co2width], .05);
var co2y = d3.scale.linear().domain([300, 420]).range([co2height, 0]);

var co2xAxis = d3.svg.axis()
    .scale(co2x)
    .orient("bottom").tickFormat("");

var co2yAxis = d3.svg.axis()
    .scale(co2y)
    .orient("left")
    .ticks(8);

var icemargin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 40
    },
    icewidth = 600 - icemargin.left - icemargin.right,
    iceheight = 170 - icemargin.top - icemargin.bottom;

//add x and y scale for years and values for sea ice level
var icex = d3.scale.ordinal().rangeRoundBands([0, icewidth], .05);
var icey = d3.scale.linear().domain([1, 10]).range([iceheight, 0]);

var icexAxis = d3.svg.axis()
    .scale(icex)
    .orient("bottom").tickFormat("");

var iceyAxis = d3.svg.axis()
    .scale(icey)
    .orient("left")
    .ticks(10);

d3.csv("data/sealevelyear.csv", function(error, data) {

    sealevel = data;
    sealine = sealevel.map(function(sea) {
            return {
                x: sea["Year"],
                y: Number(sea["CSIRO - Adjusted sea level (inches)"])
            };
        })
        //return the x domain for years for the sealevel bar graph
    seax.domain(sealine.map(function(d) {
        return d.x;
    }));
})

d3.csv("data/co2year.csv", function(error, data) {

    co2level = data;
    co2bubble = co2level.map(function(co2) {
            return {
                x: co2["Year"],
                y: Number(co2["Mean"])
            };
        })
        //return the x domain for years for co2 bar graph
    co2x.domain(co2bubble.map(function(d) {
        return d.x;
    }));
})

d3.csv("data/seaiceextent.csv", function(error, data) {

    extent = data;
    glacierline = extent.map(function(area) {
            return {
                y: area["year"],
                x: Number(area["extent"])
            };
        })
        //return the x domain for years for the sea ice bar graph
    icex.domain(glacierline.map(function(d) {
        return d.y;
    }));
})

//appends bar graphs and changes artic environment based on year    
function update(time) {
    //addes axis and scales for sea level in the artic environment
    yScale = d3.scale.linear().domain(d3.extent(sealine, function(point) {
        return point.y;
    })).range([height - 50, 300]);//sea moves up and down along y axis

    var yAxis = d3.svg.axis().scale(yScale).orient("left").ticks(10);

    var attrY = yScale(sealine[(time)].y);

    var seadata = [];
    for (i = 0; i <= time; i++) {
        seadata.push(sealine[i]);
    }
    var seaicedata = [];
    for (i = 0; i <= time; i++) {
        seaicedata.push(glacierline[i]);
    }

    d3.selectAll(".searect").remove();

    searectangle.style("fill", function(d) {
        return changesealevelcolor(seadata[time].y);//color changes to reflect rise and fall in sea level
    });
    searectangle.attr("transform", "translate(0," + (attrY - 450) + ")")

    wave.style("fill", function(d) {
        return changesealevelcolor(seadata[time].y);//color changes to reflect rise and fall in sea level
    });
    wave.attr("transform", "translate(" + (-time * 2) + "," + (attrY - 48) + ")")

    //adds axis and scales for sea ice extension in artic environment
    xScale = d3.scale.linear().domain([1, d3.max(glacierline, function(point) {
        return point.x;
    })]).range([0, width]);//ice sheet moves left and right along x axis

    var xAxis = d3.svg.axis().scale(xScale).orient("bottom").ticks(10);

    var attrX = xScale(glacierline[time].x);

    icerectangle.style("fill", function(d) {
        return changeicecolor(seaicedata[time].x);
    });
    icerectangle.attr("transform", "translate(" + (attrX - 500) + "," + (attrY - 478) + ")")

    icewave.style("fill", function(d) {
        return changeicecolor(seaicedata[time].x);//color changes to reflect rise and fall in ice level
    });

    icerectangle.attr("transform", "translate(" + (attrX - 500) + "," + (attrY - 478) + ")")
    icewave.attr("transform", "translate(" + (attrX - 550) + ", " + (attrY - 127) + ")")

    polarb.attr("transform", "translate(0," + (attrY - 140) + ") scale(0.5,.5)")

    //addsbars to sea level bar graph
    var seadata = [];
    for (i = 0; i <= time; i++) {
        seadata.push(sealine[i]);
    }

    d3.selectAll(".seaBar").remove(); //remove the bars each time the slider moves left
    d3.selectAll(".co2Bar").remove();
    d3.selectAll(".seaIceBar").remove();

    //adds bars to co2 ice bar graph
    var co2data = [];
    for (i = 0; i <= time; i++) {
        co2data.push(co2bubble[i]);
    }
    svg1.selectAll("rect.co2Bar")
        .data(co2data) //gets data on co2 up to last scroll year 
        .enter()
        .append("rect")
        .attr("class", "co2Bar")
        .style("fill", function(d) {
            return changeco2color(d.y);
        })//changes color to reflect change in co2
        .attr("x", function(d) {
            return co2x(d.x);
        })
        .attr("width", co2x.rangeBand())
        .attr("y", function(d) {
            return co2y(d.y);
        })
        .attr("height", function(d) {
            return co2height - co2y(d.y);
        })
        .attr("id", function(d, i) {
            d.indicator = "svg1";
            d.id = "svg1_" + i;
            return d.id;
        })
        .on("mouseover", mouseover).on("mouseout", mouseout);

    //adds bars to sea ice bar graph
    var seaicedata = [];
    for (i = 0; i <= time; i++) {
        seaicedata.push(glacierline[i]);
    }

    svg2.selectAll("rect.seaIceBar")
        .data(seaicedata)//gets data on sea ice extent up to last scroll year 
        .enter()
        .append("rect")
        .attr("class", "seaIceBar")
        .style("fill", function(d) {
            return changeicecolor(d.x);
        })//changes color to reflect change in sea ice extension
        .attr("x", function(d) {
            return icex(d.y);
        })
        .attr("width", icex.rangeBand())
        .attr("y", function(d) {
            return icey(d.x);
        })
        .attr("height", function(d) {
            return iceheight - icey(d.x);
        })
        .attr("id", function(d, i) {
            d.indicator = "svg2";
            d.id = "svg2_" + i;
            return d.id;
        })
        .on("mouseover", mouseover).on("mouseout", mouseout);

      svg3.selectAll("rect.seaBar")
        .data(seadata)//gets data on the sea up to last scroll year 
        .enter()
        .append("rect")
        .attr("class", "seaBar")
        .style("fill", function(d) {
            return changesealevelcolor(d.y);//changes color to reflect change in sea level
        })//changes color to reflect change in sea level
        .attr("x", function(d) {
            return seax(d.x);
        })
        .attr("width", seax.rangeBand())
        .attr("y", function(d) {
            return seay(d.y);
        })
        .attr("height", function(d) {
            return seaheight - seay(d.y);
        })
        .attr("id", function(d, i) {
            d.indicator = "svg";
            d.id = "svg_" + i;
            return d.id;
        })
        .on("mouseover", mouseover).on("mouseout", mouseout);

    // changes the title year on top of the barcharts
    var currentyear = 1979;
    currentyear = 1979 + parseInt(time);
    var myRange = document.querySelector('#myRange');
    var myValue = document.querySelector('#myValue');
    var myUnits = 'myUnits';
    var off = myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
    var px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

    myValue.parentElement.style.left = px + 'px';
    myValue.parentElement.style.top = myRange.offsetHeight + 'px';
    myValue.innerHTML = +myRange.value + 1979;

    myRange.oninput = function() {
        updateTextInput(this.value);
        var px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 2) - 40;
        myValue.innerHTML = +myRange.value + 1979;
        currentyear = myValue.innerHTML;
        myValue.parentElement.style.left = px + 'px';
    };
    d3.select("#title").text("1979" + " - " + currentyear);
}

//function changes co2 color based on its concentration
function addcloud(time) {
    var cloudcolor = d3.scale.linear()
        .domain(d3.extent(co2bubble, function(point) {
            return point.y;
        })).range(["lightgrey", "grey"]);

    var attrcolor = cloudcolor(co2bubble[time].y);

    cloudC.style("fill", attrcolor)
        .attr("opacity", 0.8); 

    cloudO.style("fill", attrcolor)
        .attr("opacity", 0.8); 

    cloud2.style("fill", attrcolor)
        .attr("opacity", 0.8); 

    var attrY = yScale(sealine[time].y);
}

var leftPadding = 50;
var topPadding = 200;

//Coordinates for the svg polar bear
var polarbear = [{
    "x": 18,
    "y": 152
}, {
    "x": 9,
    "y": 130
}, {
    "x": 38,
    "y": 90
}, {
    "x": 54,
    "y": 53
}, {
    "x": 54,
    "y": 45
}, {
    "x": 70,
    "y": 28
}, {
    "x": 98,
    "y": 22
}, {
    "x": 168,
    "y": 28
}, {
    "x": 181,
    "y": 26
}, {
    "x": 243,
    "y": 45
}, {
    "x": 250,
    "y": 44
}, {
    "x": 274,
    "y": 64
}, {
    "x": 275,
    "y": 70
}, {
    "x": 288,
    "y": 85
}, {
    "x": 273,
    "y": 97
}, {
    "x": 249,
    "y": 91
}, {
    "x": 210,
    "y": 92
}, {
    "x": 221,
    "y": 125
}, {
    "x": 234,
    "y": 140
}, {
    "x": 239,
    "y": 140
}, {
    "x": 243,
    "y": 149
}, {
    "x": 202,
    "y": 149
}, {
    "x": 179,
    "y": 122
}, {
    "x": 174,
    "y": 140
}, {
    "x": 185,
    "y": 142
}, {
    "x": 190,
    "y": 151
}, {
    "x": 148,
    "y": 151
}, {
    "x": 140,
    "y": 132
}, {
    "x": 140,
    "y": 109
}, {
    "x": 123,
    "y": 108
}, {
    "x": 112,
    "y": 134
}, {
    "x": 124,
    "y": 138
}, {
    "x": 129,
    "y": 145
}, {
    "x": 78,
    "y": 146
}, {
    "x": 82,
    "y": 114
}, {
    "x": 50,
    "y": 131
}, {
    "x": 46,
    "y": 138
}, {
    "x": 59,
    "y": 146
}, {
    "x": 55,
    "y": 153
}, {
    "x": 18,
    "y": 152
}, ];

var lineSmooth = d3.svg.line().x(function(d) {
        return d.x;
    })
    .y(function(d) {
        return d.y;
    }).interpolate("cardinal");

//adds a path with lineSmooth and draws out the polar bear svg element
polarb = svgContainer.append("path")
    .attr("d", lineSmooth(polarbear))
    .attr("stroke", "lightgrey")
    .attr("stroke-width", 1)
    .attr("fill", "#EFF1F5")
    .attr("transform", "scale(.5,.5),translate(21.21,650)");

//adds new svg for co2 bar graph    
var svg1 = d3.select("#co2bargraph").append("svg")
    .attr("width", co2width + co2margin.left + co2margin.right)
    .attr("height", co2height + co2margin.top + co2margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + co2margin.left + "," + co2margin.top + ")");

svg1.append("text")
    .attr("id", "title")
    .attr("text-anchor", "middle")
    .style("font-size", "25px")
    .style("text-decoration", "none")
    .style("fill", "#333333")
    .text("1979 - ")
    .attr("transform", "translate(250, 0)");

svg1.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + co2height + ")")
    .call(co2xAxis)
    .selectAll("line").remove()
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.55em")
    .attr("transform", "rotate(-90)");

svg1.append("g")
    .attr("class", "y axis")
    .call(co2yAxis)
    .append("text")
    .attr("transform", "translate(145,0)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("CO\u2082 Level (parts per million)");

//use color scale to change the color of co2 based on co2 level
function changeco2color(d) {
    var cloudcolor = d3.scale.linear()
        .domain(d3.extent(co2bubble, function(point) {
            return point.y;
        }))
        .range(["#f2f2f2", "#696969"]);

    var attrcolor = cloudcolor(d);
    return attrcolor;
}

//use color scale to change the color of the sea based on sea level
function changesealevelcolor(d) {
    var seacolor = d3.scale.linear()
        .domain(d3.extent(sealine, function(point) {
            return point.y;
        }))
        .range(["#47A4CD", "#012C5F"]);

    var attrcolor = seacolor(d);
    return attrcolor;
}

//use color scale to change the color of ice based on sea ice extension
function changeicecolor(d) {
    var icecolor = d3.scale.linear()
        .domain(d3.extent(glacierline, function(point) {
            return point.x;
        }))
        .range(["#ebf9fd", "#9ED0E0"]);
    var attrcolor = icecolor(d);
    return attrcolor;
}

//adds new svg for sea ice extension bar graph   
var svg2 = d3.select("#seaicebargraph").append("svg")
    .attr("width", icewidth + icemargin.left + icemargin.right)
    .attr("height", iceheight + icemargin.top + icemargin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + icemargin.left + "," + icemargin.top + ")");
    
svg2.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + iceheight + ")")
    .call(icexAxis)
    .selectAll("line").remove()
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.55em")
    .attr("transform", "rotate(-90)");

svg2.append("g")
    .attr("class", "y axis")
    .call(iceyAxis)
    .append("text")
    .attr("transform", "translate(137,0)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Sea Ice Extent Level (km\u00B2)");


//adds new svg for sea level bar graph
var svg3 = d3.select("#seabargraph").append("svg")
    .attr("width", seawidth + seamargin.left + seamargin.right)
    .attr("height", seaheight + seamargin.top + seamargin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + seamargin.left + "," + seamargin.top + ")");

svg3.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + seaheight + ")")
    .call(seaxAxis)
    .selectAll("line").remove()
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.55em")
    .attr("transform", "rotate(-90)");

svg3.append("g")
    .attr("class", "y axis")
    .call(seayAxis)
    .append("text")
    .attr("transform", "translate(173,0)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Cumulative Sea Level Change (in)");

//show year and value when mouse moves over a bar  
function mouseover(d) {

    var transX = seax(d.x);
    var transY;
    var selector = "#" + d.id;
    d3.select(selector).classed("selectedBar", true);

    //judges which svg to move to
    if (d.indicator === "svg1") {
        infoBoard = svg1.append("g").attr("transform", "translate(-100,-100)");
        transY = co2y(d.y);
        transX = co2x(d.x);

        //show rect with text in it.
        infoBoard.append("svg:path").attr("d", d3.svg.symbol().type("triangle-up")).attr("transform","rotate(180) translate(-7)").style("fill", "#CBD7E0");
	    infoBoard.append("rect").attr("width", 80).attr("height", 30).attr("fill", "#CBD7E0").attr("transform", "translate(-33,-35)");
	    infoBoard.append("text").attr("id", "yearLabel").attr("transform", "translate(-28,-22)").style("font-size", "8px");
	    infoBoard.append("text").attr("id", "valueLabel").attr("transform", "translate(-28,-12)").style("font-size", "8px");
	    infoBoard.attr("transform", "translate(" + transX + "," + transY + ")");
	    infoBoard.select("text#yearLabel").text("Year: " + d.x);
        infoBoard.select("text#valueLabel").text("Value: " + parseFloat(d.y).toFixed(2)+" ppm");

    } else if (d.indicator === "svg2") {
        infoBoard = svg2.append("g").attr("transform", "translate(-100,-100)");
        transX = icex(d.y);
        transY = icey(d.x);

        //show rect with text in it.
        infoBoard.append("svg:path").attr("d", d3.svg.symbol().type("triangle-up")).attr("transform","rotate(180) translate(-7)").style("fill", "#CBD7E0");
	    infoBoard.append("rect").attr("width", 80).attr("height", 30).attr("fill", "#CBD7E0").attr("transform", "translate(-33,-35)");
	    infoBoard.append("text").attr("id", "yearLabel").attr("transform", "translate(-28,-22)").style("font-size", "8px");
	    infoBoard.append("text").attr("id", "valueLabel").attr("transform", "translate(-28,-12)").style("font-size", "8px");
	    infoBoard.attr("transform", "translate(" + transX + "," + transY + ")");
	    infoBoard.select("text#yearLabel").text("Year: " + d.x);
        infoBoard.select("text#valueLabel").text("Value: " + parseFloat(d.y).toFixed(2)+" km\u00B2");

    } else {
        infoBoard = svg3.append("g").attr("transform", "translate(-100,-100)");
        transY = seay(d.y);
        transX = seax(d.x);

        //show rect with text in it.
        infoBoard.append("svg:path").attr("d", d3.svg.symbol().type("triangle-up")).attr("transform","rotate(180) translate(-7)").style("fill", "#CBD7E0");
	    infoBoard.append("rect").attr("width", 60).attr("height", 30).attr("fill", "#CBD7E0").attr("transform", "translate(-23,-35)");
	    infoBoard.append("text").attr("id", "yearLabel").attr("transform", "translate(-18,-22)").style("font-size", "8px");
	    infoBoard.append("text").attr("id", "valueLabel").attr("transform", "translate(-18,-12)").style("font-size", "8px");
	    infoBoard.attr("transform", "translate(" + transX + "," + transY + ")");
	    infoBoard.select("text#yearLabel").text("Year: " + d.x);
    	infoBoard.select("text#valueLabel").text("Value: " + parseFloat(d.y).toFixed(2)+" in");
    
    }

}

//removes highlight around previously selected bar
function mouseout(d) {
    var selector = "#" + d.id;
    infoBoard.attr("transform", "translate(-100,-100)");
    d3.select(selector).classed("selectedBar", false);
}