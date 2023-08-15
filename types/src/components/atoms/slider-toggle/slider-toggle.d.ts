import { LitElement } from "lit";
export declare class SliderToggle extends LitElement {
    active: boolean;
    static styles: import("lit").CSSResult[];
    private toggleActive;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "slider-toggle": SliderToggle;
    }
}
export declare const SliderToggleReact: import("@lit-labs/react").ReactWebComponent<SliderToggle, {
    onclick: string;
}>;
