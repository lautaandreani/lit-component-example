import { LitElement } from 'lit';
declare class ChLitMyButton extends LitElement {
    isLoading: boolean;
    static styles: import("lit").CSSResult[];
    private _clicked;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ch-lit-my-button': ChLitMyButton;
    }
}
declare const MyButtonReact: import("@lit-labs/react").ReactWebComponent<ChLitMyButton, {
    onclick: string;
}>;
export { ChLitMyButton, MyButtonReact };
