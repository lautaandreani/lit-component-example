import { LitElement } from 'lit';
declare enum TypeSocial {
    FACEBOOK = "facebook",
    TWITTER = "twitter"
}
declare class MyButton extends LitElement {
    checked: boolean;
    social: TypeSocial;
    static styles: import("lit").CSSResult[];
    private _clicked;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton;
    }
}
declare const MyButtonReact: import("@lit-labs/react").ReactWebComponent<MyButton, {
    onclick: string;
}>;
export { MyButton, MyButtonReact };
