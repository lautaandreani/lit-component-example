import { LitElement } from "lit";
export declare class MyButton extends LitElement {
    checked: boolean;
    social: string;
    static styles: import("lit").CSSResult[];
    private _clicked;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-button": MyButton;
    }
}
export declare const MyButtonReact: import("@lit-labs/react").ReactWebComponent<MyButton, {
    onclick: string;
}>;
