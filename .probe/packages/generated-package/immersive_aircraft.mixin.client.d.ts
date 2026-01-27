declare module "immersive_aircraft.mixin.client.KeyMappingAccessorMixin" {
import {$InputConstants$Key} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyMappingAccessorMixin$$Interface {
get "key"(): $InputConstants$Key
get "clickCount"(): integer
set "clickCount"(value: integer)
}

export class $KeyMappingAccessorMixin implements $KeyMappingAccessorMixin$$Interface {
 "getKey"(): $InputConstants$Key
 "getClickCount"(): integer
 "setClickCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessorMixin$$Type = ($KeyMappingAccessorMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMappingAccessorMixin$$Original = $KeyMappingAccessorMixin;}
