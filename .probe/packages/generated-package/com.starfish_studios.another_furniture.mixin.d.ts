declare module "com.starfish_studios.another_furniture.mixin.neoforge.FireBlockAccessor" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $FireBlockAccessor$$Interface {

(arg0: $Block, arg1: integer, arg2: integer): void
}

export class $FireBlockAccessor implements $FireBlockAccessor$$Interface {
 "invokeSetFlammable"(arg0: $Block$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockAccessor$$Type = ((arg0: $Block, arg1: integer, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireBlockAccessor$$Original = $FireBlockAccessor;}
declare module "com.starfish_studios.another_furniture.mixin.neoforge.create.ContraptionMixin" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $ContraptionMixin$$Interface {
get "initialPassengers"(): $Map<($BlockPos), ($Entity)>
set "initialPassengers"(value: $Map$$Type<($BlockPos$$Type), ($Entity$$Type)>)
}

export class $ContraptionMixin implements $ContraptionMixin$$Interface {
 "getInitialPassengers"(): $Map<($BlockPos), ($Entity)>
 "setInitialPassengers"(arg0: $Map$$Type<($BlockPos$$Type), ($Entity$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContraptionMixin$$Type = ($ContraptionMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContraptionMixin$$Original = $ContraptionMixin;}
