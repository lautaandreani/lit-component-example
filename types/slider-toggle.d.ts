import { CSSResult } from 'lit';
import { LitElement } from 'lit';
import { ReactWebComponent } from '@lit-labs/react';
import { TemplateResult } from 'lit';

export declare class SliderToggle extends LitElement {
    active: boolean;
    static styles: CSSResult[];
    private toggleActive;
    render(): TemplateResult<1>;
}

export declare const SliderToggleReact: ReactWebComponent<SliderToggle, {
    onclick: string;
}>;

export { }
