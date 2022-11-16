/**
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

import { SettingsBase } from "./settingsBase";

import { AxisDescriptor } from "./descriptors/axisDescriptor";
import { SparklineAxisDescriptor } from "./descriptors/sparkline/sparklineAxisDescriptor";
import { SparklineChartDescriptor } from "./descriptors/sparkline/sparklineChartDescriptor";
import { SparklineDescriptor } from "./descriptors/sparkline/sparklineDescriptor";
import { SubtitleDescriptor } from "./descriptors/subtitleDescriptor";
import { TooltipDescriptor } from "./descriptors/tooltipDescriptor";
import { ValuesDescriptor } from "./descriptors/valuesDescriptor";
import { VarianceDescriptor } from "./descriptors/varianceDescriptor";
import { StaleDataDescriptor } from "./descriptors/staleDataDescriptor";

export class SeriesSettings extends SettingsBase {
    public values: ValuesDescriptor = new ValuesDescriptor();
    public variance: VarianceDescriptor = new VarianceDescriptor();
    public yAxis: AxisDescriptor = new AxisDescriptor();
    public tooltip: TooltipDescriptor = new TooltipDescriptor();
    public sparkline: SparklineDescriptor = new SparklineDescriptor();
    public sparklineLabel: SubtitleDescriptor = new SubtitleDescriptor();
    public sparklineChart: SparklineChartDescriptor = new SparklineChartDescriptor();
    public sparklineYAxis: SparklineAxisDescriptor = new SparklineAxisDescriptor();
    public sparklineValue: SubtitleDescriptor = new SubtitleDescriptor();
    public staleData: StaleDataDescriptor = new StaleDataDescriptor();
}
