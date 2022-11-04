import "core-js/stable";
import powerbi from "powerbi-visuals-api";
import "./../style/visual.less";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
export declare class Visual implements IVisual {
    private host;
    private svg;
    private container;
    private circle;
    private textValue;
    private textLabel;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
}
