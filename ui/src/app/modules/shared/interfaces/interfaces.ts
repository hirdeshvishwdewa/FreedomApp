
export interface IViewStaticProperties {
    type?: string;
}
export interface IViewConfig {
    name: string;
    properties?: IViewStaticProperties;
}

export interface IContainerConfig {
    viewPort?: any;
    viewConfig?: IViewConfig;
}

export interface IPageConfig {
    id: string;
    title?: string;
    containers: IContainerConfig[];
}

export interface IFloorConfig {
    pages: IPageConfig[]
}
