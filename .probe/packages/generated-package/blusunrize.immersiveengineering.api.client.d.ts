declare module "blusunrize.immersiveengineering.api.client.IModelOffsetProvider" {
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IModelOffsetProvider$$Interface {

(arg0: $BlockState, arg1: $Vec3i): $BlockPos$$Type
}

export class $IModelOffsetProvider implements $IModelOffsetProvider$$Interface {
 "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModelOffsetProvider$$Type = ((arg0: $BlockState, arg1: $Vec3i) => $BlockPos$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModelOffsetProvider$$Original = $IModelOffsetProvider;}
