declare module "com.buuz135.industrial.mixin.IBushBlockMixin" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBushBlockMixin$$Interface {

(arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos): boolean
}

export class $IBushBlockMixin implements $IBushBlockMixin$$Interface {
 "invokeMayPlaceOn"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBushBlockMixin$$Type = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBushBlockMixin$$Original = $IBushBlockMixin;}
