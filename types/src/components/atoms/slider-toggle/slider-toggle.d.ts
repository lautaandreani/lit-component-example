import { LitElement } from "lit";
export declare class ChLitSliderToggle extends LitElement {
    active: boolean;
    static styles: import("lit").CSSResult[];
    private toggleActive;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ch-lit-slider-toggle": ChLitSliderToggle;
    }
}
export declare const SliderToggleReact: import("@lit-labs/react").ReactWebComponent<HTMLElement, Record<string, string | import("@lit-labs/react").EventName>>;
