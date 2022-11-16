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

export interface IVisualDataRole {
    displayName: string;
    name: string;
}

export const dateColumn: IVisualDataRole = {
    displayName: "Date",
    name: "dateColumn",
};

export const valueColumn: IVisualDataRole = {
    displayName: "Values",
    name: "valueColumn",
};

export const warningStateColumn: IVisualDataRole = {
    displayName: "Warning state",
    name: "warningStateColumn",
};

export const tooltipColumn: IVisualDataRole = {
    displayName: "Tooltip",
    name: "tooltipColumn",
};

export const changeStartDateColumn: IVisualDataRole = {
    displayName: "Change start date",
    name: "changeStartDateColumn",
};

export const subtitleColumn: IVisualDataRole = {
    displayName: "Subtitle",
    name: "subtitleColumn",
};
