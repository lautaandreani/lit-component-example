declare namespace _default {
    const title: string;
    const component: string;
}
export default _default;
export function Default(args: any): import("lit").TemplateResult<1>;
export namespace Default {
    namespace args {
        const active: boolean;
    }
}
export function Active(args: any): import("lit").TemplateResult<1>;
export namespace Active {
    export namespace args_1 {
        const active_1: boolean;
        export { active_1 as active };
    }
    export { args_1 as args };
}
