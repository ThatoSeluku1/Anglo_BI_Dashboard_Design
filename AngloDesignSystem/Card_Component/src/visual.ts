"use strict";

import "core-js/stable";
import powerbi from "powerbi-visuals-api";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
//Importing IVisualHost:
import IVisualHost = powerbi.extensibility.IVisualHost;
//Importing D3 Library:
import * as d3 from "d3";
import {select} from "d3";
type Selection<T extends d3.BaseType> = d3.Selection<T, any, any, any>;


//Added class level properties:
export class Visual implements IVisual {
    private svg: Selection<SVGElement>;

//Added D3 SVG:
    constructor(options: VisualConstructorOptions) {
    this.svg = select(options.element).append('svg');
    this.svg.append('rect')
        .attr('width',960)
        .attr('height', 500)
        .attr("stroke", '#000000')
        .attr("fill", "blue")
        .attr('stroke-width', 3);

/* Create text values that will overlap the rectangle
this.textValue = this.container.append("text")
    .classed("textValue", true);
this.textLabel = this.container.append("text")
    .classed("textLabel", true);
*/
    }


    
//Set the width and height of visuals:
    public update(options: VisualUpdateOptions) {
      this.svg.select('rect').attr('fill','black');        
    }
}