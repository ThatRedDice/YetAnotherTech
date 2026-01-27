declare module "xfacthd.framedblocks.api.type.IBlockType" {
import {$FullFacePredicate} from "xfacthd.framedblocks.api.predicate.fullface.FullFacePredicate"
import {$SideSkipPredicate} from "xfacthd.framedblocks.api.predicate.cull.SideSkipPredicate"
import {$ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$ConTexMode} from "xfacthd.framedblocks.api.predicate.contex.ConTexMode"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ConnectionPredicate} from "xfacthd.framedblocks.api.predicate.contex.ConnectionPredicate"
import {$ShapeProvider, $ShapeProvider$$Type} from "xfacthd.framedblocks.api.shapes.ShapeProvider"

export interface $IBlockType$$Interface {
get "sideSkipPredicate"(): $SideSkipPredicate
get "connectionPredicate"(): $ConnectionPredicate
get "fullFacePredicate"(): $FullFacePredicate
get "minimumConTexMode"(): $ConTexMode
get "doubleBlock"(): boolean
get "name"(): StringJS
}

export class $IBlockType implements $IBlockType$$Interface {
 "getSideSkipPredicate"(): $SideSkipPredicate
 "canOccludeWithSolidCamo"(): boolean
 "canLockState"(): boolean
 "allowMakingIntangible"(): boolean
 "supportsWaterLogging"(): boolean
 "getConnectionPredicate"(): $ConnectionPredicate
 "supportsConnectedTextures"(): boolean
 "getFullFacePredicate"(): $FullFacePredicate
 "generateOcclusionShapes"(arg0: $ImmutableList$$Type<($BlockState$$Type)>, arg1: $ShapeProvider$$Type): $ShapeProvider
 "hasSpecialHitbox"(): boolean
 "generateShapes"(arg0: $ImmutableList$$Type<($BlockState$$Type)>): $ShapeProvider
 "getMinimumConTexMode"(): $ConTexMode
 "consumesTwoCamosInCamoApplicationRecipe"(): boolean
 "hasBlockItem"(): boolean
 "hasSpecialTile"(): boolean
 "isDoubleBlock"(): boolean
 "getName"(): StringJS
 "compareTo"(arg0: $IBlockType$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockType$$Type = ($IBlockType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockType$$Original = $IBlockType;}
