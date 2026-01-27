declare module "dev.ftb.mods.ftbchunks.core.BiomeFTBC" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeFTBC$$Interface {
set "FTBCBiomeColorIndex"(value: integer)
get "FTBCBiomeColorIndex"(): integer
}

export class $BiomeFTBC implements $BiomeFTBC$$Interface {
 "setFTBCBiomeColorIndex"(arg0: integer): void
 "getFTBCBiomeColorIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeFTBC$$Type = ($BiomeFTBC);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiomeFTBC$$Original = $BiomeFTBC;}
declare module "dev.ftb.mods.ftbchunks.core.BlockStateFTBC" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateFTBC$$Interface {

(): boolean
get "FTBCIsWater"(): boolean
}

export class $BlockStateFTBC implements $BlockStateFTBC$$Interface {
 "getFTBCIsWater"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateFTBC$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateFTBC$$Original = $BlockStateFTBC;}
