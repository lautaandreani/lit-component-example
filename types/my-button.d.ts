import { CSSResult } from 'lit';
import { LitElement } from 'lit';
import { ReactWebComponent } from '@lit-labs/react';
import { TemplateResult } from 'lit';

export declare class MyButton extends LitElement {
    checked: boolean;
    social: string;
    static styles: CSSResult[];
    private _clicked;
    render(): TemplateResult<1>;
}

export declare const MyButtonReact: ReactWebComponent<MyButton, {
    onclick: string;
}>;

export { }
