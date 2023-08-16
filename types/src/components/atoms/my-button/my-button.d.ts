import { LitElement } from 'lit';
type Social = 'facebook' | 'twitter';
declare class ChLitMyButton extends LitElement {
    checked: boolean;
    social: Social;
    static styles: import("lit").CSSResult[];
    private _clicked;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ch-lit-my-button': ChLitMyButton;
    }
}
declare const MyButtonReact: import("@lit-labs/react").ReactWebComponent<HTMLElement, Record<string, string>>;
export { ChLitMyButton, MyButtonReact };
