declare module "net.irisshaders.iris.parsing.ExtendedBiome" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedBiome$$Interface {
get "biomeCategory"(): integer
set "biomeCategory"(value: integer)
get "downfall"(): float
}

export class $ExtendedBiome implements $ExtendedBiome$$Interface {
 "getBiomeCategory"(): integer
 "setBiomeCategory"(arg0: integer): void
 "getDownfall"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBiome$$Type = ($ExtendedBiome);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedBiome$$Original = $ExtendedBiome;}
