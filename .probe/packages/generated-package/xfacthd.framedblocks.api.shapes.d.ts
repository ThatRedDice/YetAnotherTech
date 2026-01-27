declare module "xfacthd.framedblocks.api.shapes.ShapeProvider" {
import {$Map$$Type} from "java.util.Map"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ShapeProvider$$Interface {
get "empty"(): boolean
}

export class $ShapeProvider implements $ShapeProvider$$Interface {
 "get"(arg0: $BlockState$$Type): $VoxelShape
 "isEmpty"(): boolean
static "of"(arg0: $Map$$Type<($BlockState$$Type), ($VoxelShape$$Type)>): $ShapeProvider
 "forEach"(arg0: $BiConsumer$$Type<($BlockState), ($VoxelShape)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeProvider$$Type = ($ShapeProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapeProvider$$Original = $ShapeProvider;}
