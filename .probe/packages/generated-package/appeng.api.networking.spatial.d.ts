declare module "appeng.api.networking.spatial.ISpatialService" {
import {$IGridService$$Interface} from "appeng.api.networking.IGridService"
import {$Level} from "net.minecraft.world.level.Level"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $ISpatialService$$Interface extends $IGridService$$Interface {
get "validRegion"(): boolean
get "level"(): $Level
get "max"(): $BlockPos
get "min"(): $BlockPos
}

export class $ISpatialService implements $ISpatialService$$Interface {
 "hasRegion"(): boolean
 "isValidRegion"(): boolean
 "currentEfficiency"(): float
 "requiredPower"(): long
 "getLevel"(): $Level
 "getMax"(): $BlockPos
 "getMin"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpatialService$$Type = ($ISpatialService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpatialService$$Original = $ISpatialService;}
