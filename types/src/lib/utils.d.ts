import { EventName } from '@lit-labs/react';
import { type ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
interface ComponentProps<T> {
    tagName: string;
    webComponent: new () => T;
    events: Record<string, EventName | string>;
}
export declare function createReactComponent({ tagName, webComponent, events }: ComponentProps<HTMLElement>): import("@lit-labs/react").ReactWebComponent<HTMLElement, Record<string, string | EventName>>;
export {};
